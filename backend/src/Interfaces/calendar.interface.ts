export interface DayAvailability {
  "8-00": boolean;
  "8-30": boolean;
  "9-00": boolean;
  "9-30": boolean;
  "10-00": boolean;
  "10-30": boolean;
  "11-00": boolean;
  "11-30": boolean;
  "12-00": boolean;
  "12-30": boolean;
  "13-00": boolean;
  "13-30": boolean;
  "14-00": boolean;
  "14-30": boolean;
  "15-00": boolean;
  "15-30": boolean;
  "16-00": boolean;
  "16-30": boolean;
  "17-00": boolean;
  "17-30": boolean;
  "18-00": boolean;
  "18-30": boolean;
  "19-00": boolean;
  "19-30": boolean;
  "20-00": boolean;
  "20-30": boolean;
  "21-00": boolean;
  "21-30": boolean;
  "22-00": boolean;
}

export interface AvailabilityMap {
  Lunes: DayAvailability;
  Martes: DayAvailability;
  Miércoles: DayAvailability;
  Jueves: DayAvailability;
  Viernes: DayAvailability;
  Sábado: DayAvailability;
  Domingo: DayAvailability;
}
