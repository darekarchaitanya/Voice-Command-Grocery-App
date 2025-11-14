import { CheckCircle } from 'lucide-react';

interface ToastProps {
  message: string;
}

export default function Toast({ message }: ToastProps) {
  return (
    <div className="fixed bottom-4 left-4 right-4 lg:left-auto lg:right-4 lg:w-80 bg-green-500 text-white rounded-lg p-4 shadow-xl flex items-center gap-3 animate-bounce">
      <CheckCircle className="w-5 h-5 flex-shrink-0" />
      <span className="font-semibold">{message}</span>
    </div>
  );
}
