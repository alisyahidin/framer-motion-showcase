const ValueSlider = ({ title, value, setValue, min = -100, max = 100, step = 1 }) => {
  return (
    <div className="flex items-center gap-4 mt-2">
      <p className="flex-1 text-gray-400">{title}</p>
      <input className="w-16 rounded pl-2 py-1 bg-gray-700 text-white" type="number" step={step} min={min} max={max} value={value} onChange={e => setValue(parseFloat(e.target.value))} />
      <input className="flex-1" type="range" step={step} min={min} max={max} value={value} onChange={e => setValue(parseFloat(e.target.value))} />
    </div>
  )
}

export default ValueSlider;