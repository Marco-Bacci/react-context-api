import { createContext, useContext, useState } from "react";

// creo context
const BudgetContext = createContext();

// creo Provider con stato
const BudgetProvider = ({ Children }) => {
  const [budgetMode, setBudgetMode] = useState(false);

  // raggruppo stato e funzione in value
  const value = {
    budgetMode,
    setBudgetMode,
  };
  // ritorno il Provider
  return (
    <BudgetContext.Provider value={value}> {children} </BudgetContext.Provider>
  );
};

// creo Hook per accedere al context
const useBudget = () => {
  const context = useContext(BudgetContext);
  return context;
};

export { BudgetProvider, useBudget };
