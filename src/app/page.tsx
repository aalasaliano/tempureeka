import Image from "next/image";

export default function CheckIn() {
  return (
    <div className="flex min-h-screen bg-[#f8fafc]">
      {/* Sidebar */}
      <aside className="w-72 bg-blue-100 flex flex-col justify-between py-6 px-6 border-r border-blue-200 rounded-tr-3xl rounded-br-3xl">
        <div>
          {/* Profile */}
          <div className="flex flex-col items-center mb-8">
            <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center mb-2">
              <span className="text-4xl">👤</span>
            </div>
            <div className="text-lg font-semibold text-gray-950">Mark Edward</div>
            <div className="text-sm text-gray-950">markedw@gmail.com</div>
          </div>
          {/* Navigation */}
          <nav className="flex flex-col gap-2">
            <button className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-blue-200 font-medium text-left text-gray-950">
              <span className="text-xl">🏠</span> Dashboard
            </button>
            <button className="flex items-center gap-2 px-3 py-2 rounded-lg bg-white font-medium text-left border border-blue-200 text-gray-950">
              <span className="text-xl">📝</span> Emotional Check-in
            </button>
            <button className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-blue-200 font-medium text-left text-gray-950">
              <span className="text-xl">💡</span> Micro-Therapy
            </button>
            <button className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-blue-200 font-medium text-left text-gray-950">
              <span className="text-xl">📋</span> Insights
            </button>
          </nav>
        </div>
        {/* Preferences & Sign Out */}
        <div className="flex flex-col gap-2">
          <button className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-blue-200 font-medium text-left text-gray-950">
            <span className="text-xl">⚙️</span> Preferences
          </button>
          <button className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-blue-200 font-medium text-left text-gray-950">
            <span className="text-xl">↩️</span> Sign Out
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-12">
        {/* Header */}
        <div className="bg-white rounded-2xl border border-gray-300 p-8 mb-8">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold font-sora text-global-1 leading-tight text-gray-950">
            Track Emotional Snapshot
          </h1>
        </div>
        {/* Form */}
        <form className="grid grid-cols-2 gap-8">
          {/* Left column */}
          <div className="flex flex-col gap-4">
            <div>
              <div className="font-semibold mb-2 text-gray-950">Snapshot type</div>
              <div className="flex gap-4">
                <label className="flex items-center gap-1 text-gray-950">
                  <input type="radio" name="snapshotType" defaultChecked className="accent-blue-500" />
                  Daily
                </label>
                <label className="flex items-center gap-1 text-gray-950">
                  <input type="radio" name="snapshotType" className="accent-blue-500" />
                  Weekly
                </label>
                <label className="flex items-center gap-1 text-gray-950">
                  <input type="radio" name="snapshotType" className="accent-blue-500" />
                  Monthly
                </label>
              </div>
            </div>
            <label className="font-semibold text-gray-950">Mood
              <input className="block w-full mt-1 rounded-md bg-gray-200 p-2" />
            </label>
            <label className="font-semibold text-gray-950">Category
              <input className="block w-full mt-1 rounded-md bg-gray-200 p-2" />
            </label>
            <label className="font-semibold text-gray-950">Date
              <input type="date" className="block w-full mt-1 rounded-md bg-gray-200 p-2" />
            </label>
            <label className="font-semibold text-gray-950">Progress
              <input className="block w-full mt-1 rounded-md bg-gray-200 p-2" />
            </label>
            <label className="font-semibold text-gray-950">Next steps
              <textarea className="block w-full mt-1 rounded-md bg-gray-200 p-2 h-16" />
            </label>
            <label className="font-semibold text-gray-950">Goals
              <input className="block w-full mt-1 rounded-md bg-gray-200 p-2" />
            </label>
          </div>
          {/* Right column */}
          <div className="flex flex-col gap-4">
            <div className="font-semibold mb-2 text-gray-950">Reflection details</div>
            <label className="font-semibold text-gray-950">Intensity level
              <input className="block w-full mt-1 rounded-md bg-gray-200 p-2" />
            </label>
            <label className="font-semibold text-gray-950">Notes
              <input className="block w-full mt-1 rounded-md bg-gray-200 p-2" />
            </label>
            <div className="font-semibold mt-4 mb-2 text-gray-950">Mission insights</div>
            <label className="font-semibold text-gray-950">Task
              <input className="block w-full mt-1 rounded-md bg-gray-200 p-2" />
            </label>
            <label className="font-semibold text-gray-950">Reflection
              <input className="block w-full mt-1 rounded-md bg-gray-200 p-2" />
            </label>
            <div className="flex justify-end mt-8">
              <button
                type="submit"
                className="px-8 py-2 bg-blue-200 text-blue-900 font-semibold rounded-lg border border-blue-400 shadow hover:bg-blue-300 transition"
              >
                Save Snapshot
              </button>
            </div>
          </div>
        </form>
      </main>
    </div>
  );
}