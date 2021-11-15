function inputType1(statement, functionality) {
    return (
        statement.map((_, index) =>
            _.type === "select" ?
                <div key={index}>
                    <select
                        className="rounded-none relative block w-full border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                        {...functionality(_.name, { required: true })}
                    >
                        {_.option?.map(_ =>
                            <option key={_.name.common} value={_.name.common}>{_.name.common}</option>
                        )}
                    </select>
                </div>
                :
                <div key={index}>
                    <input
                        type={_.type}
                        placeholder={_.placeholder}
                        className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                        required
                        {...functionality(_.name, { required: true })}
                    />
                </div>
        )
    );
}

export default inputType1;