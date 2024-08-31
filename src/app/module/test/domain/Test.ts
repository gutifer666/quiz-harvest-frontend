import {Question} from "./Question";

export interface Test {
  questions: Question[];
  subject: string;
  evaluation: string;
}
