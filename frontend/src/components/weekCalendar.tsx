import React, { useEffect, useState } from "react";
import axios from "axios";
import { type Day } from "../types/calendarDay";
import { type AvailabilityMap } from "../types/availabilityMap";

const days: Day[] = [
  "Lunes",
  "Martes",
  "Miércoles",
  "Jueves",
  "Viernes",
  "Sábado",
  "Domingo",
];

const hours = Array.from({ length: 14 }, (_, i) => i + 8);
const API_URL = import.meta.env.VITE_API_URL;

interface WeekCalendarProps {
  isLoggedIn: boolean;
}

const WeekCalendar = ({ isLoggedIn }: WeekCalendarProps) => {
  const [availability, setAvailability] = useState<AvailabilityMap | null>(
    null
  );
  const [loading, setLoading] = useState(true);

  // Cargar disponibilidad y verificar login
  useEffect(() => {
    axios
      .get(`${API_URL}/calendar`)
      .then((res) => {
        setAvailability(res.data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  // Toggle disponibilidad al hacer clic
  const toggleSlot = (day: Day, hour: number, half: 0 | 30) => {
    if (!availability || !isLoggedIn) return;

    const key = `${hour}-${half === 0 ? "00" : "30"}` as
      | `${number}-00`
      | `${number}-30`;

    setAvailability((prev) => {
      if (!prev) return prev;

      const currentDay = prev[day] ?? {}; //para que no sea undefined
      const currentValue = currentDay[key] ?? true;

      return {
        ...prev,
        [day]: {
          ...currentDay,
          [key]: !currentValue,
        },
      };
    });
  };

  const save = async () => {
    if (!availability) return;

    try {
      const token = localStorage.getItem("token");
      await axios.put(`${API_URL}/calendar`, availability, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      alert("Guardado correctamente");
    } catch (err) {
      alert(err || "Error al guardar");
    }
  };

  if (loading) return <p>Cargando calendario...</p>;
  if (!availability) return <p>No hay disponibilidad</p>;

  return (
    <div className="p-4 overflow-x-auto">
      <div className="min-w-max">
        {isLoggedIn && (
          <h2 className="text-xl text-white font-bold mb-4">
            Editar disponibilidad semanal
          </h2>
        )}
        <div className="flex justify-center overflow-x-auto p-4">
          <table className="table-fixed border-collapse bg-white/95 border border-gray-300 bg-white rounded-xl shadow-lg overflow-hidden">
            <thead>
              <tr>
                <th className="border p-2 w-24">Hora</th>
                {days.map((day) => (
                  <th key={day} className="border p-2 w-24">
                    {day}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {hours.map((hour) => (
                <React.Fragment key={hour}>
                  {/* Bloque 1: hh:00–hh:30 */}
                  <tr>
                    <td className="border p-2 text-center w-28">
                      {hour}:00 - {hour}:30
                    </td>
                    {days.map((day) => {
                      const key = `${hour}-00` as const;
                      const available = availability[day]?.[key] ?? true;
                      return (
                        <td
                          key={`${day}-${key}`}
                          onClick={() => isLoggedIn && toggleSlot(day, hour, 0)}
                          className={`border p-2 text-center ${
                            isLoggedIn ? "cursor-pointer" : "cursor-default"
                          }`}
                          title={`${day} ${hour}:00`}
                        >
                          <div
                            className="h-6 w-full rounded"
                            style={{
                              backgroundColor: available
                                ? "#b5fd75"
                                : "#808080",
                            }}
                          />
                        </td>
                      );
                    })}
                  </tr>

                  {/* Bloque 2: hh:30–(hh+1):00 */}
                  <tr>
                    <td className="border p-2 text-center w-28">
                      {hour}:30 - {hour + 1}:00
                    </td>
                    {days.map((day) => {
                      const key = `${hour}-30` as const;
                      const available = availability[day]?.[key] ?? true;
                      return (
                        <td
                          key={`${day}-${key}`}
                          onClick={() =>
                            isLoggedIn && toggleSlot(day, hour, 30)
                          }
                          className={`border p-2 text-center ${
                            isLoggedIn ? "cursor-pointer" : "cursor-default"
                          }`}
                          title={`${day} ${hour}:30`}
                        >
                          <div
                            className="h-6 w-full rounded"
                            style={{
                              backgroundColor: available
                                ? "#b5fd75"
                                : "#808080",
                            }}
                          />
                        </td>
                      );
                    })}
                  </tr>
                </React.Fragment>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mb-4 flex justify-center gap-6 text-sm text-gray-700 bg-white w-60 rounded mx-auto">
          <div className="flex items-center gap-2">
            <div
              className="w-4 h-4 rounded border border-gray-300"
              style={{ backgroundColor: "#b5fd75" }}
            />
            <span>Disponible</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 rounded bg-gray-400 border border-gray-300" />
            <span>Ocupado</span>
          </div>
        </div>

        {isLoggedIn && (
          <div className="text-center">
            <button
              onClick={save}
              className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
            >
              Guardar
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default WeekCalendar;
