export default function ContributionHistory() {

  const rows = [
    ["North District Water Line", "Transport", "Oct 12, 2023", "COMPLETED"],
    ["Solar Panel Installation", "Volunteer", "Sep 28, 2023", "COMPLETED"],
    ["Emergency Food Drive", "Materials", "Aug 15, 2023", "COMPLETED"],
    ["School Roof Repair", "Volunteer", "Aug 02, 2023", "COMPLETED"],
    ["Clinic Power Backup", "Materials", "Jul 20, 2023", "ACTIVE"],
  ];

  return (
    <div>

      <div className="flex justify-between mb-4">
        <h2 className="text-xl font-semibold">
          Contribution History
        </h2>

        <div className="flex gap-2">
          <button className="bg-[#E97A55] text-white px-4 py-1 rounded-md text-sm">
            All
          </button>
          <button className="bg-white px-4 py-1 rounded-md text-sm border">
            Active
          </button>
          <button className="bg-white px-4 py-1 rounded-md text-sm border">
            Completed
          </button>
        </div>
      </div>

      <div className="bg-white rounded-2xl shadow-sm overflow-hidden">

        <table className="w-full text-sm">
          <thead className="bg-gray-50 text-gray-400 text-xs">
            <tr>
              <th className="text-left p-4">PROJECT NAME</th>
              <th className="text-left p-4">TYPE</th>
              <th className="text-left p-4">DATE</th>
              <th className="text-left p-4">STATUS</th>
              <th className="text-left p-4">ACTION</th>
            </tr>
          </thead>

          <tbody>
            {rows.map((r, i) => (
              <tr key={i} className="border-t">
                <td className="p-4 font-medium">{r[0]}</td>
                <td className="p-4">{r[1]}</td>
                <td className="p-4 text-gray-400">{r[2]}</td>
                <td className="p-4">
                  <span className={`
                    px-3 py-1 rounded-full text-xs font-medium
                    ${r[3] === "COMPLETED"
                      ? "bg-green-100 text-green-600"
                      : "bg-orange-100 text-orange-600"}
                  `}>
                    {r[3]}
                  </span>
                </td>
                <td className="p-4 text-orange-500 font-medium">
                  Details
                </td>
              </tr>
            ))}
          </tbody>

        </table>

        <div className="flex justify-between p-4 text-sm text-gray-400">
          <span>Showing 1 to 5 of 12 entries</span>
          <div className="flex gap-2">
            <button className="border rounded px-2">‹</button>
            <button className="border rounded px-2">›</button>
          </div>
        </div>

      </div>

    </div>
  );
}
