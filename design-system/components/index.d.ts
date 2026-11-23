import type * as React from 'react';
export type IconName = 'house'|'map-pin'|'user'|'bell'|'navigation-2'|'calendar'|'users'|'search'|'arrow-left'|'eye'|'eye-off'|'funnel'|'check'|'chevron-right'|'message-circle';
export interface IconProps { name: IconName; size?: number; color?: string; strokeWidth?: number; label?: string; className?: string }
export declare function Icon(props: IconProps): React.ReactElement;
export interface ButtonProps { variant?: 'primary'|'outline'; shape?: 'rounded'|'soft'|'pill'; icon?: IconName; fullWidth?: boolean; disabled?: boolean; type?: 'button'|'submit'; onClick?: () => void; children: React.ReactNode }
export declare function Button(props: ButtonProps): React.ReactElement;
export interface IconButtonProps { icon?: IconName; label: string; onClick?: () => void }
export declare function IconButton(props: IconButtonProps): React.ReactElement;
export interface LinkProps { href?: string; onClick?: () => void; children: React.ReactNode }
export declare function Link(props: LinkProps): React.ReactElement;
export interface TextFieldProps { label: string; placeholder?: string; value?: string; type?: 'text'|'email'|'password'; id?: string }
export declare function TextField(props: TextFieldProps): React.ReactElement;
export interface LocationFieldProps { icon?: 'map-pin'|'navigation-2'; label: string; value?: string; placeholder?: string; onClick?: () => void }
export declare function LocationField(props: LocationFieldProps): React.ReactElement;
export interface FieldButtonProps { icon: IconName; value?: string; placeholder?: string; compact?: boolean; onClick?: () => void }
export declare function FieldButton(props: FieldButtonProps): React.ReactElement;
export interface CheckboxProps { checked?: boolean }
export declare function Checkbox(props: CheckboxProps): React.ReactElement;
export interface LanguageOptionProps { flag: string; title: string; subtitle: string; selected?: boolean; onClick?: () => void }
export declare function LanguageOption(props: LanguageOptionProps): React.ReactElement;
export interface TripSearchCardProps { title?: string; from?: string; to?: string; date?: string; seats?: number; onSearch?: () => void }
export declare function TripSearchCard(props: TripSearchCardProps): React.ReactElement;
export interface RouteCardProps { from: string; to: string; hint?: string; onClick?: () => void }
export declare function RouteCard(props: RouteCardProps): React.ReactElement;
export interface EmptyStateProps { children: React.ReactNode }
export declare function EmptyState(props: EmptyStateProps): React.ReactElement;
export interface SectionHeaderProps { title: string; action?: string; href?: string }
export declare function SectionHeader(props: SectionHeaderProps): React.ReactElement;
export interface ResultsBarProps { count: number; onMap?: () => void; onFilter?: () => void }
export declare function ResultsBar(props: ResultsBarProps): React.ReactElement;
export interface AvatarProps { initials: string }
export declare function Avatar(props: AvatarProps): React.ReactElement;
export interface GreetingHeaderProps { initials: string; name: string; greeting?: string }
export declare function GreetingHeader(props: GreetingHeaderProps): React.ReactElement;
export interface BottomNavProps { active?: number; items?: [IconName, string][] }
export declare function BottomNav(props: BottomNavProps): React.ReactElement;
export interface PageIndicatorProps { count?: number; active: number }
export declare function PageIndicator(props: PageIndicatorProps): React.ReactElement;
export interface ToastProps { title?: string; message: string }
export declare function Toast(props: ToastProps): React.ReactElement;
export interface OnboardingSlideProps { image: string; alt?: string; title: string; body: string }
export declare function OnboardingSlide(props: OnboardingSlideProps): React.ReactElement;
export interface BrandLockupProps { pinSrc: string }
export declare function BrandLockup(props: BrandLockupProps): React.ReactElement;
declare global { interface Window { Boleia: { Button: typeof Button; IconButton: typeof IconButton; Link: typeof Link; TextField: typeof TextField; LocationField: typeof LocationField; FieldButton: typeof FieldButton; Checkbox: typeof Checkbox; LanguageOption: typeof LanguageOption; TripSearchCard: typeof TripSearchCard; RouteCard: typeof RouteCard; EmptyState: typeof EmptyState; SectionHeader: typeof SectionHeader; ResultsBar: typeof ResultsBar; GreetingHeader: typeof GreetingHeader; Avatar: typeof Avatar; BottomNav: typeof BottomNav; PageIndicator: typeof PageIndicator; Toast: typeof Toast; OnboardingSlide: typeof OnboardingSlide; BrandLockup: typeof BrandLockup; Icon: typeof Icon } } }
