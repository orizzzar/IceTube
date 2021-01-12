import { Penguin } from './entities/penguin';
import { Billboard } from './entities/billboard';
import { Fish } from './entities/fish';
import { LoudPenguin } from './entities/loudPenguin';

/**
 * Possible post themes
 */
type Theme = 'politics' | 'gaming' | 'music' | 'films' | 'educational' | 'sports';

/**
 * Sctructure of the news post
 */
interface NewsBlock {
	title: string;
    content: string;
	theme: Theme;
	fake: boolean;
}

/**
 * State of the game
 */
export interface GameState {
	paused: boolean;
	element: HTMLCanvasElement;
    ctx: CanvasRenderingContext2D;

	mouseX: number;
	mouseY: number;
	mouseDown: boolean;

    entities: Array<Penguin | Billboard | Fish | LoudPenguin>;
	started: boolean;

	fish: number;
	relevance: number;
	
	news: NewsBlock[];
	newsIndex: number;
	selectedNewsIndex: number;

	posted:boolean;
}

/**
 * Global state manager
 * @param initial Initial state. Will be used if state initialized for the first time.
 */
export function State(initial?: GameState): GameState {
	const global: any = window;

	if (typeof global.__GameState__ !== 'object') {
		global.__GameState__ = initial ? initial : {};
	}

	return global.__GameState__;
}
