import { TaskStatus } from "@/types";

type StatusColors = {
    bg: string;
    text: string;
}

export const STATUS_COLORS: Readonly<Record<TaskStatus, StatusColors>> = {
    BACKLOG: {
        bg: 'bg-slate-300',
        text: 'text-slate-900'
    },
    PENDING: {
        bg: 'bg-sky-300',
        text: 'text-sky-900'
    },
    "DEV-READY": {
        bg: 'bg-blue-300',
        text: 'text-blue-900'
    },
    "QA-FAILED": {
        bg: 'bg-red-300',
        text: 'text-red-900'
    },
    "STAGE-READY": {
        bg: 'bg-blue-300',
        text: 'text-blue-900'
    },
    OPEN: {
        bg: 'bg-blue-300',
        text: 'text-blue-900'
    },
    APPROVED: {
        bg: 'bg-blue-300',
        text: 'text-blue-900'
    },
    CENCELLED: {
        bg: 'bg-green-300',
        text: 'text-green-900'
    },
    CLOSED: {
        bg: 'bg-green-300',
        text: 'text-green-900'
    },
    VERIFIED: {
        bg: 'bg-green-300',
        text: 'text-green-900'
    }
    
}
