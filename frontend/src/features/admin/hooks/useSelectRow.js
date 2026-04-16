import { useState } from "react";

const useSelectRow = function (filteredRow) {
  const [selectedRow, setSelectedRow] = useState([]);

  const handleRowSelect = (publicId) => {
    setSelectedRow((prev) =>
      prev.includes(publicId)
        ? prev.filter((id) => id !== publicId)
        : [...prev, publicId],
    );
  };

  const handleSelectAll = () => {
    setSelectedRow(
      selectedRow.length === filteredRow.length
        ? []
        : filteredRow.map((row) => row.publicId),
    );
  };

  return { handleRowSelect, handleSelectAll, selectedRow };
};

export default useSelectRow;
