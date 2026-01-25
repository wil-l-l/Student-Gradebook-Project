import { useRef, useEffect, useState } from "react";

const useGrades = (pathParam) => {
  const [studentInfo, setStudentInfo] = useState(null);
  const [error, setError] = useState(null);
  const abortControllerRef = useRef(null);

  const BASE_URL = "http://localhost:3000/students";
  useEffect(() => {
    const fetchGrades = async () => {
      if (abortControllerRef.current) abortControllerRef.current.abort();
      abortControllerRef.current = new AbortController();

      try {
        const response = await fetch(BASE_URL + pathParam, {
          signal: abortControllerRef.current.signal,
        });
        const studentInfo = await response.json();
        setStudentInfo(studentInfo);
      } catch (err) {
        if (err.name === "AbortError") return;
        setError("Error Loading Data!");
      }
    };
    fetchGrades();
  }, [pathParam]);

  return { studentInfo, setStudentInfo, error };
};

export default useGrades;
