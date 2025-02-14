interface ProgressBarProps {
  currentStep: number;
  totalSteps: number;
}

export default function ProgressBar({ currentStep, totalSteps }: ProgressBarProps) {
  const progress = (currentStep / (totalSteps - 1)) * 100;

  return (
    <div className="w-full">
      <div className="w-full h-2 bg-white/20 rounded-full">
        <div
          className="h-full bg-white rounded-full transition-all duration-300 ease-in-out"
          style={{ width: `${progress}%` }}
        />
      </div>
      <div className="mt-2 text-sm text-white/90 text-center">
        Etapa {currentStep + 1} de {totalSteps}
      </div>
    </div>
  );
}
