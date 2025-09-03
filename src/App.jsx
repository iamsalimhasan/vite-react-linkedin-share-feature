import { SnackbarProvider } from "notistack";
import { LinkedinShareButton } from "react-share";

function App() {
  return (
    // comment
    <SnackbarProvider autoHideDuration={2000}>
      <LinkedinShareButton
        url="https://c.ndtvimg.com/2025-06/q3tab73c_salman-khan_625x300_15_June_25.jpg?im=FeatureCrop,algorithm=dnn,width=773,height=435"
        className="w-full h-full p-4"
      >
        <p className="rounded-md bg-orange-200 text-black font-semibold text-center py-2 px-4 hover:cursor-pointer">
          Share post
        </p>
      </LinkedinShareButton>
    </SnackbarProvider>
  );
}

export default App;
