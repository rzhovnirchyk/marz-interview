export default function PageError({ message }: { message: string }) {
  return (
    <div
      className="flex flex-row justify-center w-full pt-4 text-3xl font-bold text-white"
      data-testid="error-container"
    >
      {message}
    </div>
  );
}
