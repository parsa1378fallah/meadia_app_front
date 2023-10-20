export default function formCheckbox({ title, updateFormValue, formValue }) {
  return (
    <div className="flex items-center gap-5">
      <input
        type="checkbox"
        name="checkbox"
        id="checkbox"
        className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
        value={formValue}
        onChange={(event) => {
          updateFormValue(!formValue);
          
        }}
      />
      <label
        htmlFor="checkbox"
        className="block  text-sm font-medium text-gray-900 dark:text-white"
      >
        {title}
      </label>
    </div>
  );
}
