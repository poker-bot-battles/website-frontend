import { useState, type JSX } from "react";
import { alertContext, type AlertData } from "./AlertContext";
import { v4 } from "uuid";
import { AlertPopup } from "./AlertPopup";

export default function AlertProvider(props: { children: React.ReactNode }) {
  const [alerts, setAlerts] = useState<Record<string, JSX.Element | undefined>>(
    {},
  );

  const useAlertFunction = (
    type: AlertData["type"],
    message: AlertData["message"],
  ) => {
    const uuid = v4();

    const element = (
      <AlertPopup
        type={type}
        message={message}
        onTimerExpire={() =>
          setAlerts(Object.assign({}, alerts, { [uuid]: undefined }))
        }
      />
    );

    setAlerts(
      Object.assign({}, alerts, {
        [uuid]: element,
      }),
    );
  };

  const renderAlertElements = () => Object.values(alerts);

  return (
    <alertContext.Provider value={useAlertFunction}>
      {props.children}
      <div className="absolute w-screen h-screen left-0 top-0 pointer-events-none p-16 flex-down justify-end items-center gap-2">
        {renderAlertElements()}
      </div>
    </alertContext.Provider>
  );
}
