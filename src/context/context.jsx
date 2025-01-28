import { createContext, useState } from "react";
import { run } from "../config/gemini"; // Import the named export 'run'

const Context = createContext();

const ContextProvider = (props) => {
    const [input, setInput] = useState("");
    const [recentPrompt, setRecentPrompt] = useState("");
    const [previousPrompts, setPreviousPrompts] = useState([]);
    const [showResult, setShowResult] = useState(false);
    const [loading, setLoading] = useState(false);
    const [resultData, setResultData] = useState("");

    const delayPara = (index, nextWord) => {
        setTimeout(function () {
            setResultData((prev) => prev + nextWord);
        }, 75 * index);
    };

    const onSent = async (input) => {
        try {
            setResultData("");
            setLoading(true);
            setShowResult(true);
            setRecentPrompt(input);
            setPreviousPrompts((prev) => [...prev, input]);

            // Run the external function and get the response
            const response = await run(input);

            // Split response into an array based on "**"
            const responseArray = response.split("**");
            let newResponse = ""; // Initialize properly

            for (let i = 0; i < responseArray.length; i++) {
                if (i === 0 || i % 2 !== 0) {
                    newResponse += responseArray[i];
                } else {
                    newResponse += `<b>${responseArray[i]}</b>`; // Fix JSX usage
                }
            }

            // Process further by replacing "*" with <br />
            const newResponse2 = newResponse.split("*").join("<br />");
            const newResponseArray = newResponse2.split(" ");

            for (let i = 0; i < newResponseArray.length; i++) {
                const nextWord = newResponseArray[i];
                delayPara(i, nextWord + " ");
            }
        } catch (error) {
            console.error("Error in onSent:", error);
        } finally {
            setLoading(false);
            setInput("");
        }
    };

    const contextValue = {
        onSent,
        previousPrompts,
        setPreviousPrompts,
        recentPrompt,
        setRecentPrompt,
        input,
        setInput,
        showResult,
        resultData,
        loading,
        setShowResult,
        setResultData,
        setLoading,
    };

    return (
        <Context.Provider value={contextValue}>
            {props.children}
        </Context.Provider>
    );
};

export default ContextProvider;
