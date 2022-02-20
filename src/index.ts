import * as Canvas from 'canvas';
import * as Fs from 'fs';
import * as Path from 'path';
import * as Config from './config.json';

class Word {
    static Width = Config.WIDTH;
    static Height = Config.HEIGHT;
    x: number;
    y: number;
    width: number;
    height: number;
    texture: Canvas.Image | null = null;
    textureSrc: string;
    content: string;
    constructor(options: {
        x: number;
        y: number;
        width?: number;
        height?: number;
        textureSrc: string;
        content: string;
    }){
        this.x = options.x;
        this.y = options.y;
        this.textureSrc = options.textureSrc;
        this.width = options.width || 0;
        this.height = options.height || 0;
        this.content = options.content;
    }
    loadTexture(): Promise<void> {
        return new Promise((rs) => {
            Canvas.loadImage(Fs.readFileSync(this.textureSrc)).then(img => {
                this.texture = img;
                this.width = this.width || img.width;
                this.height = this.width || img.height;
                rs()
            })
        })
    }
    render(R: Canvas.CanvasRenderingContext2D): void {
        R.save()
        R.drawImage(this.texture, this.x, this.y, this.width, this.height)
        R.restore()
    }
}

const content = process.argv[2].replace(/\"/g, "");
const canvas = Canvas.createCanvas(
    (Config.CANVAS_WIDTH * content.length), 
    Config.CANVAS_HEIGHT
);
const ctx = canvas.getContext("2d");

const words = content
    .split("")
        .map(value => ({
            src: Path.resolve(__dirname, `img/${value}.png`), 
            content: value
        }))
        .map((data, i) => {
            if(data.content !== " ") {
                return new Word({
                    textureSrc: data.src,
                    x: i * Word.Width,
                    y: 0,
                    content: data.content,
                    width: Word.Width,
                    height: Word.Height
                })
            }
        })

Promise.all(words.map(word => {
        word?.loadTexture()
    }))
    .then(() => {
        words.forEach(word => {
            word?.render(ctx)
        })
        Fs.writeFileSync(
            Path.resolve(__dirname, `../out/${words.map(word => word ? word.content : " ").join("")}.png`), 
            canvas.toBuffer("image/png")
        )
        console.log("Image successfully generated.")
    })
