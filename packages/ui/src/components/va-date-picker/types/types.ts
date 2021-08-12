export type VaDatePickerModelValuePeriod = { start: Date | null, end: Date | null }
export type VaDatePickerModelValue = Date | Date[] | VaDatePickerModelValuePeriod
export type VaDatePickerViewType = 'year' | 'month' | 'day'
export type VaDatePickerView = { type: VaDatePickerViewType, year: number, month: number }
export type VaDatePickerViewProp = { [T in keyof VaDatePickerView]+?: VaDatePickerView[T] }
export type VaDatePickerType = 'year' | 'month' | 'day'
export type VaDatePickerMode = 'single' | 'multiple' | 'range' | 'auto'