interface Template {
    id?: string;
    organizer_id?: string;
    name?: string;
    description?: string;
    video_chat_layout_host?: number;
    video_chat_layout_panelist?: number;
    video_chat_layout_participant?: number;
    auto_join?: boolean;
    hide_join_button?: boolean;
    is_full_screen?: boolean;
    delivery_mode?: number;
    custom_css?: string;
    toggle_dominant_speaker_participant?: boolean;
}
export default Template;
