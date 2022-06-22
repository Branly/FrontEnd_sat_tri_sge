import { animate, animateChild, query, style, transition, trigger } from "@angular/animations";

export const EnterExitLeft = [
    trigger('enterExitLeft', [
        transition(':enter', [
            style({ opacity: 0, transform: 'translateX(-200px)' }),
            animate(
                '300ms ease-in',
                style({ opacity: 1, transform: 'translateX(0)' })
            ),
        ]),
        transition(':leave', [
            animate(
                '300ms ease-in',
                style({ opacity: 0, transform: 'translateX(-200px)' })
            ),
        ]),
    ]),
];

export const EnterExitRight = [
    trigger('enterExitRight', [
        transition(':enter', [
            style({ opacity: 0, transform: 'translateX(200px)' }),
            animate(
                '300ms ease-in',
                style({ opacity: 1, transform: 'translateX(0)' })
            ),
        ]),
        transition(':leave', [
            animate(
                '300ms ease-in',
                style({ opacity: 0, transform: 'translateX(200px)' })
            ),
        ]),
    ]),
];

export const EnterExitTop = [
    trigger('enterExitTop', [
        transition(':enter', [
            style({ opacity: 0, transform: 'translateY(-200px)' }),
            animate(
                '400ms ease-in',
                style({ opacity: 1, transform: 'translateY(0)' })
            ),
        ]),
        transition(':leave', [
            animate(
                '350ms ease-in',
                style({ opacity: 0, transform: 'translateY(-200px)' })
            ),
        ]),
    ]),
];

export const EnterExitBottom = [
    trigger('enterExitBottom', [
        transition(':enter', [
            style({ opacity: 0, transform: 'translateY(200px)' }),
            animate(
                '500ms ease-in',
                style({ opacity: 1, transform: 'translateY(0)' })
            ),
        ]),
        transition(':leave', [
            animate(
                '400ms ease-out',
                style({ opacity: 0, transform: 'translateY(200px)' })
            ),
        ]),
    ]),
];

export const Container = [
    trigger('container', [
        transition(':enter, :leave', [
            query('@*', animateChild(), { optional: true }),
        ]),
    ]),
];