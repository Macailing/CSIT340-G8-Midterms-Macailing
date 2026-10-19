
function StatCard({ read, bookmarks }) {
    return (
        <div className="flex flex-col gap-6 px-20 pt-10">
        <div className="flex gap-6">
          <div className="w-48 rounded-xl border-2 border-[#5C4F4A] py-4 text-center">
            <p className="text-4xl font-bold text-[#5C766D]">{read}</p>
            <p className="mt-1 text-lg">Marked as read</p>
          </div>
          <div className="w-48 rounded-xl border-2 border-[#5C4F4A] py-4 text-center">
            <p className="text-4xl font-bold text-[#5C766D]">{bookmarks}</p>
            <p className="mt-1 text-lg">Bookmarks</p>
          </div>
        </div>
        </div>
    )
}

export default StatCard;
