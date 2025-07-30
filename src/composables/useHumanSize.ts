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

export function useHumanSize() {
  const units: Unit[] = [Unit.B, Unit.KB, Unit.MB, Unit.GB, Unit.TB]

  function getOrder(size: number) {
    return Math.floor(Math.log(size) / Math.log(1024))
  }
  function getSizeWithOrder(size: number, order: number) {
    return (size / Math.pow(1024, order)).toFixed(2)
  }
  function humanSize(size: number): HumanSize {
    const i = getOrder(size)
    return { size: getSizeWithOrder(size, i), unit: units[i] }
  }

  return { humanSize }
}
