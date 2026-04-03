import Record from "../models/Record.js";

export const getSummary = async (req, res) => {
  const result = await Record.aggregate([
    {
      $group: {
        _id: "$type",
        total: { $sum: "$amount" }
      }
    }
  ]);

  let income = 0,
    expense = 0;

  result.forEach((r) => {
    if (r._id === "income") income = r.total;
    if (r._id === "expense") expense = r.total;
  });

  res.json({
    totalIncome: income,
    totalExpense: expense,
    netBalance: income - expense
  });
};
