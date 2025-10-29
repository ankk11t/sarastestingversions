export enum AssistantState {
  IDLE = 'IDLE',
  LISTENING = 'LISTENING',
  PROCESSING = 'PROCESSING',
  SPEAKING = 'SPEAKING',
  GENERATING = 'GENERATING',
}

export enum InputMode {
  VOICE = 'VOICE',
  TEXT = 'TEXT',
}

export enum UploadMode {
  NONE = 'NONE',
  ANALYZE_IMAGE = 'ANALYZE_IMAGE',
  ANALYZE_VIDEO = 'ANALYZE_VIDEO',
  GENERATE_VIDEO_FROM_IMAGE = 'GENERATE_VIDEO_FROM_IMAGE',
  EDIT_IMAGE = 'EDIT_IMAGE',
  GENERATE_IMAGE = 'GENERATE_IMAGE',
  GENERATE_VIDEO = 'GENERATE_VIDEO',
}

export type AspectRatio = "1:1" | "16:9" | "9:16" | "4:3" | "3:4";

export interface GroundingChunk {
  type: 'web' | 'maps';
  uri: string;
  title: string;
}

export interface ConversationTurn {
  id: number;
  role: 'user' | 'model';
  text: string;
  groundingChunks?: GroundingChunk[];
  category?: 'security' | 'general';
  imageUrl?: string;
  videoUrl?: string;
  feedback?: 'good' | 'bad';
}

export interface TextMessage {
  sender: 'user' | 'contact';
  text: string;
  timestamp: number;
}

export interface Contact {
    id: number;
    name: string;
    phone: string;
    relationship?: string;
}

export interface Task {
    id: number;
    text: string;
    completed: boolean;
    dueDate?: string;
}

export interface Alarm {
    id: number;
    time: string; // e.g., "07:30"
    label: string;
    enabled: boolean;
}

export interface PhoneSettings {
    wifi: boolean;
    bluetooth: boolean;
    airplaneMode: boolean;
}

export interface AppSettings {
    highSecurityMode: boolean;
}


// --- CAPACITOR NATIVE PLUGIN INTERFACE ---
// This defines the contract for our native plugin.
export interface SarasNativeBridgePlugin {
  call(options: { phoneNumber: string }): Promise<{ success: boolean; message: string }>;
  send(options: { phoneNumber: string; message: string }): Promise<{ success: boolean; message: string }>;
  toggle(options: { setting: keyof PhoneSettings; status: boolean }): Promise<{ success: boolean; message: string }>;
}