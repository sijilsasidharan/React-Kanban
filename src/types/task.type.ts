export type TaskType = 'TASK' | 'BUG' | 'IMPROVEMENT';
export type TaskStatus = 'OPEN' | 'BACKLOG' | 'PENDING' | 'DEV-READY' | 'STAGE-READY' | 'QA-FAILED' | 'VERIFIED' | 'CENCELLED' | 'APPROVED' | 'CLOSED';

export interface Task {
    id: string;
    name: string;
    description: string;
    sprint: number;
    startDate: string;
    estimate: number; // per day
    type: TaskType;
    status: TaskStatus;
}

