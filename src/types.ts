export interface User {
    id: number;
    name: string;
    is_staff: boolean;
    email: string;
    email_verified_at?: string;
    created_at: string;
    updated_at: string;
}
export interface Application {
    id: number;
    studentId:number;
    studentUniversityId:number;
    studentName:string;
    name: string;
    startDate: string;
    endDate: string;
    status: "accepted" | "evaluating" | "reevaluating" | "rejected" | "discarded";
    conclusion: string;
    objection: string;
    score: number;
    fileUrl: string;
  }