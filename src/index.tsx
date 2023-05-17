import { render } from "react-dom";
import App from "./app/App";
import { BrowserRouter } from "react-router-dom";
import { Suspense } from "react";
import { ThemeProvider } from "./app/providers/ThemeProvider";

render(
    <BrowserRouter>
        <ThemeProvider>
            <Suspense fallback={<div>Loading...</div>}>
                <App/>
            </Suspense>
        </ThemeProvider>
    </BrowserRouter>,
    document.getElementById('root')
)