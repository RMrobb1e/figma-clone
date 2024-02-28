import dynamic from "next/dynamic";

const App = dynamic(() => import("./home"), { ssr: false });

export default App;
