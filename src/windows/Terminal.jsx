import { techStack } from "#constants";
import windowWrapper from "#hoc/windowWrapper.jsx";
import { Check } from "lucide-react";
import { Flag } from "lucide-react";
import WindowControlls from "#components/WindowControlls.jsx";

const Terminal = () => {
    return (
        <>
            <div id="window-header">
                <WindowControlls target="terminal" />
                <h2>Tech Stack</h2>
            </div>

            <div className="techstack">
                <p>
                    <span className="font-bold">@salik % </span>
                    show tech stack
                </p>

                <div className="label">
                    <p className="w-36 shrink-0">Category</p>
                    <p>Technologies</p>
                </div>
                <ul className="content">
                    {techStack.map(({ category, items }) => (
                        <li key={category} className="flex items-start">
                            <Check className="check shrink-0 mt-0.5" size={20} />
                            <h3 className="shrink-0">{category}</h3>
                            <ul className="flex-wrap">
                                {items.map((item, i) => (
                                    <li key={i}>{item}{i < items.length - 1 ? "," : ""}</li>
                                ))}
                            </ul>
                        </li>
                    ))}
                </ul>
                <div className="footnote">
                    <p>
                        <Check size={20} /> 5 of 5 stacks loaded successfully(100%)
                    </p>

                    <p className="text-black flex items-center">
                        <Flag size={15} fill="black" />
                        Render time: 6ms
                    </p>
                </div>
            </div>
        </>
    );
};

const TerminalWindow = windowWrapper(Terminal, "terminal");

export default TerminalWindow;