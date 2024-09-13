import { Option } from './Option';

export interface Question {
  id: number;
  textQuestion: string;
  options: Option[];
  subject: string;
  evaluation: string;
}
