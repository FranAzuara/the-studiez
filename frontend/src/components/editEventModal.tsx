import React, { useState, useEffect } from "react";
import { type EventType } from "../types/events";

interface EditEventModalProps {
  isOpen: boolean;
  onClose: () => void;
  event?: EventType;
  onSave: (event: EventType) => void;
}

const EditEventModal: React.FC<EditEventModalProps> = ({
  isOpen,
  onClose,
  event,
  onSave,
}) => {
  const [formData, setFormData] = useState<Omit<EventType, "_id">>({
    title: event?.title || "",
    description: event?.description || "",
    style: event?.style || "",
    start: event?.start || "",
    end: event?.end || "",
    location: event?.location || "",
    date: event?.date || "",
    teacher: event?.teacher || "",
  });

  useEffect(() => {
    setFormData({
      title: event?.title || "",
      description: event?.description || "",
      style: event?.style || "",
      start: event?.start || "",
      end: event?.end || "",
      location: event?.location || "",
      date: event?.date || "",
      teacher: event?.teacher || "",
    });
  }, [event]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Validaciones
    if (!formData.title.trim()) return alert("El título es obligatorio");
    if (!formData.start.trim() || !formData.end.trim())
      return alert("Debe ingresar la hora de inicio y fin");
    if (!formData.location.trim()) return alert("La ubicación es obligatoria");
    if (!formData.teacher.trim()) return alert("El profesor es obligatorio");

    // Construir payload: solo incluir _id si existe en event
    const payload: EventType = {
      ...formData,
      _id: event?._id,
    } as EventType;

    onSave(payload);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white rounded-lg p-6 w-full max-w-lg max-h-[90vh] overflow-auto">
        <h2 className="text-xl font-bold mb-4">
          {event ? "Editar evento" : "Nuevo evento"}
        </h2>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <label className="flex flex-col text-sm">
            Titulo
            <input
              type="text"
              name="title"
              placeholder="Título"
              value={formData.title}
              onChange={handleChange}
              className="border p-2 rounded"
              required
            />
          </label>
          <label className="flex flex-col text-sm">
            Descripción
            <textarea
              name="description"
              placeholder="Descripción"
              value={formData.description}
              onChange={handleChange}
              className="border p-2 rounded"
              rows={3}
            />
          </label>
          <label className="flex flex-col text-sm">
            Estilo
            <input
              type="text"
              name="style"
              placeholder="Estilo"
              value={formData.style}
              onChange={handleChange}
              className="border p-2 rounded"
            />
          </label>
          <label className="flex flex-col text-sm">
            Hora inicio
            <input
              type="time"
              name="start"
              value={formData.start}
              onChange={handleChange}
              className="border p-2 rounded"
              required
            />
          </label>
          <label className="flex flex-col text-sm">
            Hora fin
            <input
              type="time"
              name="end"
              value={formData.end}
              onChange={handleChange}
              className="border p-2 rounded"
              required
            />
          </label>
          <label className="flex flex-col text-sm">
            Ubicación
            <input
              type="text"
              name="location"
              placeholder="Ubicación"
              value={formData.location}
              onChange={handleChange}
              className="border p-2 rounded"
              required
            />
          </label>
          <label className="flex flex-col text-sm">
            Fecha
            <input
              type="text"
              name="date"
              placeholder="Fecha (DD/MM/AA)"
              value={formData.date}
              onChange={handleChange}
              className="border p-2 rounded"
              required
            />
          </label>
          <label className="flex flex-col text-sm">
            Profesor
            <input
              type="text"
              name="teacher"
              placeholder="Profesor"
              value={formData.teacher}
              onChange={handleChange}
              className="border p-2 rounded"
              required
            />
          </label>
          <div className="flex justify-end gap-4">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 bg-gray-300 text-white rounded hover:bg-gray-400"
            >
              Cancelar
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
            >
              Guardar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditEventModal;
