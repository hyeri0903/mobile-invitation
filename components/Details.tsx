export default function Details() {
  return (
    <section className="w-full min-h-screen mx-auto flex flex-col justify-center items-center  py-24 bg-gray-50 dark:bg-gray-900">
      <div className="mx-auto px-4 max-w-3xl">
        <h2 className="text-3xl sm:text-3xl md:text-4xl lg:text-5xl text-center mb-10 text-gray-900 dark:text-white">
          Details
          <div className="mt-4 w-20 h-0.5 bg-gray-200 dark:bg-gray-700 mx-auto mb-3 rounded" />
        </h2>
        <table className="table-auto border-separate border-spacing-y-10 mx-auto">
          <tbody>
            {/* 1부 */}
            <tr>
              <td className="align-center text-xl font-bold text-gray-600 dark:text-white text-left w-20">
                1부
              </td>
              <td className="align-top text-center w-4">
                <div className="w-1 h-[80px] mx-auto bg-gray-700 dark:bg-white rounded-sm" />
              </td>
              <td className="pl-4 align-top text-gray-700 dark:text-gray-200 text-left">
              <div className="flex flex-col space-y-1">
                <div>17:00 - 17:30&nbsp;&nbsp;Table Setting</div>
                <div>17:30 - 18:00&nbsp;&nbsp;Self Introduction</div>
                <div>18:00 - 19:00&nbsp;&nbsp;Play Games</div>
              </div>
              </td>
            </tr>

            {/* 2부 */}
            <tr>
              <td className="align-center text-xl font-bold text-gray-600 dark:text-white text-left w-20">
                2부
              </td>
              <td className="align-top text-center w-4">
                <div className="w-1 h-28 mx-auto bg-gray-700 dark:bg-white rounded-sm" />
              </td>
              <td className="pl-4 align-top text-gray-700 dark:text-gray-200 text-left">
              <div className="flex flex-col space-y-1">
                <div>19:00 - 19:30 &nbsp;&nbsp;Break Time</div>
                <div>19:30 - 20:30 &nbsp;&nbsp;Watch Movies</div>
                <div>20:30 - 21:30 &nbsp;&nbsp;Enjoy Party!</div>
                <div>21:30 - 22:00 &nbsp;&nbsp;Wrap Up</div>
              </div>
              </td>
            </tr>
          </tbody>
        </table>
        
        <div className="text-center mt-10 text-gray-900 dark:text-white">
        <div className="w-20 h-0.5 bg-gray-200 dark:bg-gray-700 mx-auto mb-3 rounded" />
          Come and Join us!
        </div>
      </div>
    </section>
  );
}
