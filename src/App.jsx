import { SnackbarProvider } from "notistack";

function App() {
  return (
    // comment
    <SnackbarProvider autoHideDuration={2000}>
      <section className="w-full h-full p-4">
        <p className="rounded-md bg-orange-200 text-black font-semibold text-center py-2 px-4 hover:cursor-pointer">
          Share post
        </p>
      </section>
    </SnackbarProvider>
  );
}

export default App;
