export type Image = {
    image?: string,
    link?: string,
    blur?: string,
    thumb?: string,
    color?: string
  }
    
export type Unit = 'rgb' | 'hex' | 'hsl'
  
export type RGB = {
    r: number,
    g: number,
    b: number,
    p?: number,
    a?: number
  }

export type PixelData = [number, number, number, number]
