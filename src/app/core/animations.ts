import { animation, style, animate, trigger, transition, query, animateChild, group } from '@angular/animations';

export const transicao = animation([
  style({
    height: '{{ height }}',
    opacity: '{{ opacity }}',
    backgroundColor: '{{ backgroundColor }}'
  }),
  animate('{{ time }}')
])

export const smaecer = trigger('routeAnimations', [
  transition('* <=> *', [
    style({position: 'relative'}),
    query(':enter, :leave', [
      style({
        float: 'left',
        position: 'absolute',
        width: '100%'
      })
    ], {optional: true}),
    query(':enter', [
      style({opacity: 0})
    ], {optional: true}),
    query(':leave', animateChild(), {optional: true}),
    group([
      query(':leave', [
        animate('300ms ease-out', style({opacity: 0}))
      ], {optional: true}),
      query(':enter', [
        animate('300ms ease-out', style({opacity: 1}))
      ], {optional: true}),
    ]),
    query(':enter', animateChild(), {optional: true})
  ])
])

export const enterAnimation = animation([
  style({
    opacity: '{{ opacity }}'
  }),
  animate('{{ time }}')
])

export const topToDown = trigger('routeAnimationsx', [
  transition('* <=> *', [
      style({position: 'absolute'}),
    // query(':enter, :leave', [ style({  }) ], {optional: true}),
    query(':enter', [style({top: '-500px'}) ], {optional: true}),
    query(':leave', animateChild(), {optional: true}),
    group([
      query(':leave', [
        animate('3000ms ease-in', style({top: `100%`}))
      ], {optional: true}),
      query(':enter', [
        animate('3000ms ease-out', style({top: '0%'}))
      ], {optional: true}),
    ]),
    query(':enter', animateChild(), {optional: true})
  ])
])

export const slideInAnimation =
 trigger('routeAnimations', [
   transition('* <=> *', [
     style({position: 'relative', overflow: 'hidden'}),
     query(':enter, :leave', [
       style({
         position: 'absolute',
         overflow: 'hidden',
         top: 0,
         left: 0,
         width: '100%'
       })
     ], {optional: true}),
     query(':enter', [
       style({top: '-100%'})
     ], {optional: true}),
     query(':leave', animateChild(), {optional: true}),
     group([
       query(':leave', [
         animate('300ms ease-out', style({top: '100%'}))
       ], {optional: true}),
       query(':enter', [
         animate('300ms ease-out', style({top: '0%'}))
       ], {optional: true})
     ]),
     query(':enter', animateChild(), {optional: true})
   ])
])
