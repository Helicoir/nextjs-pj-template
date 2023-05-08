import { useEffect } from "react";
import { useRecoilSnapshot } from "recoil";

function DebugObserver(): React.Node {
  const snapshot = useRecoilSnapshot();
  useEffect(() => {
    for (const node of snapshot.getNodes_UNSTABLE({ isModified: true })) {
      console.debug(node.key, snapshot.getLoadable(node));
    }
  }, [snapshot]);

  return null;
}

export default DebugObserver;
