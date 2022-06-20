import DownloadList from '@/components/DownloadList.vue'

describe('DownloadList', () => {

  describe('filters', () => {

    describe('size', () => {

      it('convert 999 bytes to', () => {
        expect(DownloadList.filters.size(999)).toBe('999 B')
      })
      
      it('convert 1000 bytes to', () => {
        expect(DownloadList.filters.size(1000)).toBe('1000 B')   
      })
      
      it('convert 1001 bytes to', () => {
        expect(DownloadList.filters.size(1001)).toBe('1001 B') 
      })
      
      it('convert 1024 bytes to', () => {
        expect(DownloadList.filters.size(1024)).toBe('1 kB')
      })

      it('convert 262782624 bytes to', () => {
        expect(DownloadList.filters.size(262782624)).toBe('250.61 MB')
      })
    })
  })
})
