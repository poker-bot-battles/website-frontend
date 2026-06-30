import { useEffect, useRef, useState } from "react";
import { InitWorkspace } from "./workspace";
import { pythonGenerator } from "blockly/python";
import type { Workspace } from "blockly";
import codeDep from "./codeDep";
import { getName } from "./names";

const VisualCodespace = () => {
  const workspaceRef = useRef<HTMLDivElement>(null);
  const [botName, setBotName] = useState(getName());
  const [workspace, setWorkSpace] = useState<Workspace>();

  useEffect(() => {
    if (!workspaceRef.current) return;

    setWorkSpace(InitWorkspace(workspaceRef.current));
  }, [workspaceRef]);

  const downloadCode = () => {
    const generatedCode = pythonGenerator.workspaceToCode(workspace);
    const codeString = codeDep(botName) + "\n  " + generatedCode;
    const element = document.createElement("a");

    // Courtesy of https://stackoverflow.com/questions/3665115/how-to-create-a-file-in-memory-for-user-to-download-but-not-through-server
    element.setAttribute(
      "href",
      "data:text/plain;charset=utf-8," + encodeURIComponent(codeString),
    );
    element.setAttribute("download", `${botName}.py`);
    element.style.display = "none";
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  return (
    <div className="flex flex-1">
      <div className="flex-1" ref={workspaceRef}></div>
      <div className="flex flex-col justify-around p-4">
        <fieldset className="fieldset">
          <label className="label fieldset-label text-md">Bot Name</label>
          <input
            className="input input-primary input-lg w-full"
            type="text"
            placeholder="My Mega Cool Bot"
            onChange={(e) => setBotName(e.target.value)}
            value={botName}
          />
        </fieldset>

        <button className="btn btn-primary" onClick={() => downloadCode()}>
          Download Your Code
        </button>
      </div>
    </div>
  );
};

export { VisualCodespace };

//  <div className="w-3/5 min-w-[300px] flex-down gap-8">
//           <p className="font-display-alternative text-4xl text-primary w-full">
//             Sign up here!
//           </p>
//           <fieldset className="fieldset">
//             <label className="label fieldset-label text-md" htmlFor="">
//               Email
//             </label>
//             <input
//               className="input input-primary input-lg w-full"
//               type="email"
//               onChange={(e) => setEmail(e.target.value)}
//               placeholder="your@mail.here"
//               value={email}
//             />
//             <p className="text-sm text-neutral max-w-[52em]">
//               Don't worry. We don't use your email for anything else than to see
//               how many would be joining. Don't believe us. All our code is{" "}
//               <a
//                 href="https://github.com/ellk-itu/poker-frontend-2"
//                 className="link"
//               >
//                 open source
//               </a>
//             </p>
//           </fieldset>
//           <button
//             className="btn btn-primary btn-lg w-1/3 self-end"
//             onClick={() => submitForm()}
//           >
//             Submit
//           </button>
//         </div>
