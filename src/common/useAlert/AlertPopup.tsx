import type { AlertData } from "./AlertContext";
import CloseIcon from "../../assets/close.svg?react";

const DEFAULT_EXPIRATION_MS = 10000;

export function AlertPopup(
  props: AlertData & { onTimerExpire: () => void; lifeTime?: number },
) {
  const lifeTime = props.lifeTime || DEFAULT_EXPIRATION_MS;
  setTimeout(props.onTimerExpire, lifeTime);

  const backgroundColor = `var(--color-${props.type})`;
  const contentCplor = `var(--color-${props.type}-content)`;

  return (
    <div
      style={{
        backgroundColor,
        color: contentCplor,
      }}
      className={`flex justify-center items-center pointer-events-auto w-2xl rounded-md shadow-md py-4 px-8`}
    >
      <p className="flex-1">{props.message}</p>
      <button
        className="btn btn-square btn-ghost"
        onClick={() => props.onTimerExpire()}
      >
        <CloseIcon style={{ fill: contentCplor }} />
      </button>
    </div>
  );
}
