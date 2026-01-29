enum Unit {
  B = 'B',
  KB = 'KB',
  MB = 'MB',
  GB = 'GB',
  TB = 'TB'
}

export interface HumanSize {
  size: string
  unit: Unit
}

/** Binary byte conversion factor (1 KiB = 1024 bytes) */
const BYTES_PER_UNIT = 1024

export function useHumanSize() {
  const units: Unit[] = [Unit.B, Unit.KB, Unit.MB, Unit.GB, Unit.TB]

  function getOrder(size: number) {
    return Math.floor(Math.log(size) / Math.log(BYTES_PER_UNIT))
  }
  function getSizeWithOrder(size: number, order: number) {
    return (size / Math.pow(BYTES_PER_UNIT, order)).toFixed(2)
  }
  function humanSize(size: number): HumanSize {
    const i = getOrder(size)
    return { size: getSizeWithOrder(size, i), unit: units[i] }
  }

  return { humanSize }
}
