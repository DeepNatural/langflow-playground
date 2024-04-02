import { useEffect, useMemo } from "react";
import { useParams } from "react-router-dom";
import Header from "../../components/headerComponent";
import { useDarkStore } from "../../stores/darkStore";
import useFlowsManagerStore from "../../stores/flowsManagerStore";
import Page from "./components/PageComponent";
import { FlowType } from '../../types/flow';

// FIXME: 지우기
/**
 * TODO: 동일한 사용자가 복수 App 실행 테스트
 * => 임의의 세션값 테스트
 */
// FIXME: 지우기
// const uuidChars = [
//   'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z',
//   '0', '1', '2', '3', '4', '5', '6', '7', '8', '9',
// ];
// const TEMP_UUID = '-' + Array
//   .from(
//     { length: 5 },
//     (_, i) => {
//       const index = Math.floor(Math.random() * uuidChars.length);
//       return uuidChars[index];
//     }
//   ).join('');

export default function FlowPage(): JSX.Element {
  const setCurrentFlowId = useFlowsManagerStore(
    (state) => state.setCurrentFlowId
  );
  const version = useDarkStore((state) => state.version);
  const currentFlow = useFlowsManagerStore((state) => state.currentFlow);
  const { id } = useParams();

  // Set flow tab id
  useEffect(() => {
    setCurrentFlowId(id!);
  }, [id]);

  // FIXME: 지우기
  // TODO: currentFlow 에 TEMP_UUID 추가
  // const testingFlow = useMemo(() => ({
  //   TEMP_UUID,
  //   ...currentFlow,
  // } as FlowType), []);

  return (
    <>
      <Header />
      <div className="flow-page-positioning">
        {currentFlow && <Page flow={currentFlow} />}
        {/* FIXME: 지우기 */}
        {/* {currentFlow && <Page flow={testingFlow} />} */}
        <a
          target={"_blank"}
          href="https://logspace.ai/"
          className="logspace-page-icon"
        >
          {version && <div className="mt-1">⛓️ Langflow v{version}</div>}
          <div className={version ? "mt-2" : "mt-1"}>Created by Logspace</div>
        </a>
      </div>
    </>
  );
}
