export interface Loads {
    status: boolean
    records: Record[]
    customers: Customer[]
    carriers: Carrier[]
    carriersRatings: any
}
    
export interface Record {
    id: number
    user_id: number
    customer_ref: string
    customer_id?: number
    flat_amount: any
    load_amount: number
    equipment_type: any
    status: string
    load_priority: any
    load_type: string
    reefer_temp?: string
    hazmat?: number
    dispatcher: string
    agent_id: any
    percentage: any
    agent_comission: any
    miles: any
    attach_rate: any
    special_notes: string
    equipment_id: any
    outside_trailer: any
    leg_load_type: any
    leg_load_amount: number
    bol_required?: number
    bol_received?: number
    bol_received_date: any
    drop_trailer_at_delivery?: number
    truck_id?: number
    trailer_id?: number
    driver_id1?: number
    driver_id2?: number
    carrier_id?: number
    carrier_payment: number
    customer_payment: number
    status_date: any
    customer_status: string
    customer_date: any
    carrier_status: string
    carrier_date: any
    declared_load_value?: string
    total_weight?: string
    carrier_bill_generate_note: any
    carrier_payment_terms: any
    hot_load: number
    base_load_id: number
    broker_out: number
    carrier_note?: string
    is_deleted: number
    locked_by: any
    locked_at?: string
    driver_payment_status: number
    load_hold: number
    load_hold_reason?: string
    branch_id?: number
    enable_eld_tracking: number
    shared_load_flag: number
    pdf_comments: string
    carrier_notes: string
    booked_by?: number
    load_status: number
    customer_location?: number
    carrier_load_offer_amount: any
    load_agreement_signed_carrier_status: number
    created_at: string
    updated_at: string
    last_contact: any
    etaStatus?: string
    etaStatusHour?: number
    logCheckCalls: LogCheckCall[]
    pickups: Pickup[]
    deliveries: Delivery[]
    unitData: any[]
    loadTargetRange: LoadTargetRange[]
}
    
export interface LogCheckCall {
    id: number
    user_id: number
    load_id: number
    driver_id?: number
    phone: string
    call_details: string
    location: string
    date?: string
    time: string
    team_driver?: string
    checkin_type?: string
    seal_no?: string
    reefer_mode?: string
    reefer_temp?: string
    picture?: string
    miles?: string
    share_update: number
    pallets?: string
    piece_count?: string
    pallets_note?: string
    empty_or_getting_empty?: string
    created_at: string
    updated_at: string
}
    
export interface Pickup {
    id: number
    user_id: number
    load_id: number
    facility_id: number
    fcfs: string
    from_date: string
    from_time: string
    to_date: any
    to_time: string
    pu: string
    stop_type: string
    eta?: string
    notes?: string
    temp_notes: string
    confirmation_status?: string
    created_at: string
    updated_at: string
    location?: Location
    stop_items: StopItem[]
}
    
export interface Location {
    id: number
    user_id: number
    location_name: string
    address: string
    unit_name?: string
    city: string
    state: string
    zip_code: string
    telephone: string
    ext: any
    location_type: string
    location_code: any
    contact_name: any
    contact_phone: any
    contact_ext: any
    contact_email: string
    contact_fax: any
    private_notes?: string
    public_notes: any
    load_note: any
    from_time?: string
    to_time?: string
    is_active: number
    is_approved: number
    is_deleted: number
    created_at: string
    updated_at: string
}
    
export interface StopItem {
    id: number
    user_id: number
    load_id: number
    stop_id: number
    stop_item: string
    stop_co: any
    stop_commodity?: string
    stop_length: any
    stop_pallets?: string
    stop_piece_count?: string
    stop_po: any
    stop_weight: any
    created_at: string
    updated_at: string
}
    
export interface Delivery {
    id: number
    user_id: number
    load_id: number
    facility_id: number
    fcfs: string
    from_date: string
    from_time: string
    to_date: any
    to_time: string
    pu: string
    stop_type: string
    eta?: string
    notes?: string
    temp_notes: string
    confirmation_status?: string
    created_at: string
    updated_at: string
    location?: Location2
    stop_items: StopItem2[]
}
    
export interface Location2 {
    id: number
    user_id: number
    location_name: string
    address: string
    unit_name?: string
    city: string
    state: string
    zip_code: string
    telephone: string
    ext: any
    location_type: string
    location_code: any
    contact_name: any
    contact_phone: any
    contact_ext: any
    contact_email: string
    contact_fax: any
    private_notes?: string
    public_notes: any
    load_note: any
    from_time?: string
    to_time?: string
    is_active: number
    is_approved: number
    is_deleted: number
    created_at: string
    updated_at: string
}
    
export interface StopItem2 {
    id: number
    user_id: number
    load_id: number
    stop_id: number
    stop_item: string
    stop_co: any
    stop_commodity?: string
    stop_length: any
    stop_pallets: any
    stop_piece_count: any
    stop_po: any
    stop_weight: any
    created_at: string
    updated_at: string
}
    
export interface LoadTargetRange {
    id: number
    load_id: number
    min?: number
    max?: number
    created_at: string
    updated_at: string
}
    
export interface Customer {
    id: number
    customer_name: string
}
    
export interface Carrier {
    id: number
    company_name: string
    certificate_holder?: string
}
    
// export interface CarriersRatings {
//     "156": string
//     "888": string
//     "850": string
//     "133": string
//     "865": string
//     "375": string
//     "448": string
//     "474": string
//     "453": string
//     "963": string
//     "116": string
//     "112": string
//     "688": string
//     "1101": string
//     "24": string
//     "1133": string
//     "1274": string
//     "1284": string
//     "1363": string
//     "1407": string
//     "52": string
//     "1440": string
//     "1452": string
//     "1445": string
//     "376": string
//     "1548": string
//     "1065": string
// }