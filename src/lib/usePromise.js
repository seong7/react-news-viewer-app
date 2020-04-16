import { useState, useEffect } from 'react';

export default function usePromise(promiseCreator, deps) {
  // 대기 중/ 완료/ 실패에 대한 상태 관리
  const [loading, setLoading] = useState(false);
  const [resolved, setResolved] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const process = async () => {
      setLoading(true);
      try {
        const resolved = await promiseCreator();
        setResolved(resolved);
      } catch (e) {
        setError(e);
      }
      setLoading(false);
    };
    process();
  }, deps);
  // 의존성은 deps 라는 배열타입을 매개변수로 받는다.

  return [loading, resolved, error];
}
