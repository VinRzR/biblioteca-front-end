enum status {
  'iniciado',
  'avisado',
  'anulado',
}
export class Reserva {
  codigo: number;
  isbn: string;
  codigo_assoc: number;
  data: Date;
  status: status.iniciado;
}
