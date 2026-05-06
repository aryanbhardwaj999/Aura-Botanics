/* ============================================================
   Aura Botanics — E-Commerce Core
   Product data, cart logic, shared UI components
   ============================================================ */

const PRODUCTS = [
  {
    id: 'radiance-serum',
    name: 'Radiance Revival Serum',
    category: 'Serums',
    price: 85,
    originalPrice: 120,
    badge: 'Bestseller',
    rating: 4.9,
    reviews: 2847,
    image: 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=600&h=600&fit=crop',
    description: 'A potent fusion of 15% Vitamin C, Bakuchiol, and Squalane in a lightweight, fast-absorbing formula.',
    details: ['Visible results in 14 days','Suitable for all skin types','60-day refund guarantee','Free shipping & returns'],
    ingredients: 'Vitamin C, Squalane, Bakuchiol, Hyaluronic Acid, Niacinamide.',
    howToUse: 'Apply 3-4 drops morning and evening.'
  },
  { id: 'hyaluronic-serum', name: 'Hyaluronic Plump Serum', category: 'Serums', price: 65, originalPrice: 85, badge: '', rating: 4.8, reviews: 1240, image: 'https://images.unsplash.com/photo-1617897903246-719242758050?w=600&h=600&fit=crop', description: 'Triple-molecular weight hyaluronic acid for deep hydration.', details: ['72-hour hydration','Plumps fine lines','Instant absorption'], ingredients: 'Hyaluronic Acid, Vitamin B5, Glycerin.', howToUse: 'Apply to damp skin.' },
  { id: 'niacinamide-serum', name: 'Pore Refining Serum', category: 'Serums', price: 58, originalPrice: 75, badge: 'New', rating: 4.7, reviews: 890, image: 'https://images.unsplash.com/photo-1615396899839-c99c121888b0?w=600&h=600&fit=crop', description: '10% Niacinamide + 2% Zinc to minimize pores and control oil.', details: ['Minimizes pores','Reduces oil','Evens skin tone'], ingredients: 'Niacinamide, Zinc PCA, Willow Bark.', howToUse: 'Use after toner.' },
  { id: 'retinol-serum', name: 'Retinol Youth Serum', category: 'Serums', price: 92, originalPrice: 125, badge: 'Strong', rating: 4.6, reviews: 1560, image: 'https://images.unsplash.com/photo-1612817288484-6f916006741a?w=600&h=600&fit=crop', description: '0.5% Encapsulated Retinol for anti-aging without irritation.', details: ['Reduces wrinkles','Boosts collagen','Slow-release tech'], ingredients: 'Retinol, Ceramides, Oat Extract.', howToUse: 'Use at night only.' },
  { id: 'cbd-serum', name: 'Calm & Soothe Serum', category: 'Serums', price: 78, originalPrice: 110, badge: 'Eco', rating: 4.8, reviews: 430, image: 'https://images.unsplash.com/photo-1601049541289-9b1b7bbbfe19?w=600&h=600&fit=crop', description: 'Calming serum with CBD and Centella to reduce redness.', details: ['Reduces redness','Soothes irritation','Plant-based'], ingredients: 'CBD, Centella Asiatica, Green Tea.', howToUse: 'Morning/Evening.' },
  { id: 'exfoliating-serum', name: 'AHA Glow Peel Serum', category: 'Serums', price: 74, originalPrice: 95, badge: '', rating: 4.5, reviews: 670, image: 'https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?w=600&h=600&fit=crop', description: '10% Lactic Acid for gentle chemical exfoliation.', details: ['Smooths texture','Brightens dullness','Hydrating acid'], ingredients: 'Lactic Acid, Hyaluronic Acid, Aloe.', howToUse: '2-3 times a week.' },
  { id: 'bright-serum-2', name: 'Vitamin C Complex', category: 'Serums', price: 89, originalPrice: 115, badge: '', rating: 4.8, reviews: 210, image: 'https://images.unsplash.com/photo-1617897903241-01b088c1b55a?w=600&h=600&fit=crop', description: 'Advanced Vitamin C complex for professional results.', details: ['Pro-grade','Ultra stable','Clinical strength'], ingredients: 'Ascorbyl Glucoside, THD Ascorbate.', howToUse: 'AM/PM.' },
  { id: 'pep-serum', name: 'Peptide Firming Serum', category: 'Serums', price: 98, originalPrice: 140, badge: 'Premium', rating: 4.9, reviews: 540, image: 'https://images.unsplash.com/photo-1620916566354-998818c29215?w=600&h=600&fit=crop', description: 'Targeted peptides to lift and firm sagging skin.', details: ['Lifts & firms','Reduces fine lines','Deep repair'], ingredients: 'Matrixyl, Argireline, Peptides.', howToUse: 'Daily.' },
  { id: 'blue-serum', name: 'Blue Tansy Repair Serum', category: 'Serums', price: 82, originalPrice: 105, badge: 'Natural', rating: 4.7, reviews: 320, image: 'https://images.unsplash.com/photo-1611080541599-8c6dbde6ed28?w=600&h=600&fit=crop', description: 'Repairs skin barrier with precious Blue Tansy oil.', details: ['Repairs barrier','Anti-inflammatory','Calming'], ingredients: 'Blue Tansy, Squalane, Jojoba.', howToUse: 'Last step.' },
  { id: 'antiox-serum', name: 'Superfood Antioxidant Serum', category: 'Serums', price: 72, originalPrice: 95, badge: '', rating: 4.8, reviews: 450, image: 'https://images.unsplash.com/photo-1615396899793-189f7f45b6da?w=600&h=600&fit=crop', description: 'Packed with Kale, Spinach, and Green Tea extracts.', details: ['Protects from pollution','Detoxifies','Rich in vitamins'], ingredients: 'Kale, Green Tea, Spinach, Vit E.', howToUse: 'Morning use.' },

  { id: 'hydra-moisturizer', name: 'Hydra Glow Moisturizer', category: 'Moisturizers', price: 72, originalPrice: 99, badge: 'New', rating: 4.8, reviews: 1523, image: 'https://images.unsplash.com/photo-1611930022073-b7a4ba5fcccd?w=600&h=600&fit=crop', description: 'A cloud-light cream for 72-hour hydration.', details: ['72-hr moisture','Barrier repair','Non-comedogenic'], ingredients: 'Ceramides, Peptides, Shea Butter.', howToUse: 'After serum.' },
  { id: 'water-cream', name: 'Ocean Water Cream', category: 'Moisturizers', price: 54, originalPrice: 78, badge: '', rating: 4.7, reviews: 890, image: 'https://images.unsplash.com/photo-1608248543733-44670083ad1c?w=600&h=600&fit=crop', description: 'Gel-based hydration with sea kelp and minerals.', details: ['Weightless feel','Cooling effect','Mineral rich'], ingredients: 'Sea Kelp, Minerals, Aloe.', howToUse: 'Perfect for oily skin.' },
  { id: 'barrier-balm', name: 'Barrier Recovery Balm', category: 'Moisturizers', price: 68, originalPrice: 92, badge: 'Repair', rating: 4.9, reviews: 430, image: 'https://images.unsplash.com/photo-1615397022818-472390f7793d?w=600&h=600&fit=crop', description: 'Intensive repair for compromised skin barriers.', details: ['Heals dry skin','Soothes eczema','Thick texture'], ingredients: 'Colloidal Oatmeal, Ceramides.', howToUse: 'Nightly.' },
  { id: 'night-cream', name: 'Overnight Repair Cream', category: 'Moisturizers', price: 88, originalPrice: 120, badge: 'Best', rating: 4.8, reviews: 750, image: 'https://images.unsplash.com/photo-1611930021591-995ce5389658?w=600&h=600&fit=crop', description: 'Rich overnight cream with retinol and peptides.', details: ['Anti-aging','Deep repair','Wake up glowing'], ingredients: 'Retinol, Peptides, Hyaluronic Acid.', howToUse: 'Evening.' },
  { id: 'spf-moisturizer', name: 'Daily Protection SPF 30', category: 'Moisturizers', price: 45, originalPrice: 65, badge: 'Sun Care', rating: 4.6, reviews: 1120, image: 'https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?w=600&h=600&fit=crop', description: 'Broad-spectrum SPF 30 with hydrating hyaluronic acid.', details: ['SPF 30','No white cast','Non-greasy'], ingredients: 'Zinc Oxide, Hyaluronic Acid.', howToUse: 'Morning.' },
  { id: 'rose-cream', name: 'Rose Petal Dew Cream', category: 'Moisturizers', price: 62, originalPrice: 85, badge: '', rating: 4.7, reviews: 340, image: 'https://images.unsplash.com/photo-1601049541289-9b1b7bbbfe19?w=600&h=600&fit=crop', description: 'Lightweight cream infused with real rose petals.', details: ['Softens skin','Sweet scent','Dewy finish'], ingredients: 'Rose Water, Damask Rose Oil.', howToUse: 'Daily.' },
  { id: 'matte-moisturizer', name: 'Mattifying Oil-Free Gel', category: 'Moisturizers', price: 48, originalPrice: 68, badge: '', rating: 4.5, reviews: 560, image: 'https://images.unsplash.com/photo-1615396899793-189f7f45b6da?w=600&h=600&fit=crop', description: 'Controls shine for 12 hours while hydrating.', details: ['Oil-free','Matte finish','Blurs pores'], ingredients: 'Salicylic Acid, Niacinamide.', howToUse: 'Oily skin.' },
  { id: 'peptide-cream', name: 'Peptide Firming Cream', category: 'Moisturizers', price: 95, originalPrice: 135, badge: 'Premium', rating: 4.9, reviews: 621, image: 'https://images.unsplash.com/photo-1631729371254-42c2892f0e6e?w=600&h=600&fit=crop', description: 'Targeted peptides to lift and firm sagging skin.', details: ['Lifts & firms','Reduces fine lines','Clinical results'], ingredients: '6 Peptides, Ceramides.', howToUse: 'AM/PM.' },
  { id: 'bright-cream', name: 'Vitamin C Bright Cream', category: 'Moisturizers', price: 76, originalPrice: 105, badge: '', rating: 4.7, reviews: 290, image: 'https://images.unsplash.com/photo-1611080541599-8c6dbde6ed28?w=600&h=600&fit=crop', description: 'Brightening moisturizer with stable Vitamin C.', details: ['Brightens tone','Fades spots','Antioxidant'], ingredients: 'Vitamin C, Niacinamide.', howToUse: 'Morning.' },
  { id: 'winter-cream', name: 'Ultra Rich Winter Cream', category: 'Moisturizers', price: 82, originalPrice: 115, badge: 'Seasonal', rating: 4.8, reviews: 180, image: 'https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?w=600&h=600&fit=crop', description: 'Extra thick cream for harsh winter climates.', details: ['Prevents dryness','Extreme cold protection','Rich'], ingredients: 'Shea Butter, Urea, Oils.', howToUse: 'Very dry skin.' },

  { id: 'cleansing-balm', name: 'Gentle Cleansing Balm', category: 'Cleansers', price: 48, originalPrice: 68, badge: '', rating: 4.9, reviews: 3201, image: 'https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=600&h=600&fit=crop', description: 'Melts away makeup and SPF effortlessly.', details: ['Balm-to-milk','Non-stripping','Chamomile infused'], ingredients: 'Moringa Oil, Chamomile.', howToUse: 'On dry skin.' },
  { id: 'gel-cleanser', name: 'Fresh Morning Gel', category: 'Cleansers', price: 32, originalPrice: 45, badge: 'Fresh', rating: 4.7, reviews: 1540, image: 'https://images.unsplash.com/photo-1617897903246-719242758050?w=600&h=600&fit=crop', description: 'Low pH gel cleanser for daily use.', details: ['pH balanced','Non-foaming','Gentle'], ingredients: 'Cucumber, Green Tea.', howToUse: 'Morning.' },
  { id: 'clay-cleanser', name: 'Detoxifying Clay Wash', category: 'Cleansers', price: 38, originalPrice: 52, badge: '', rating: 4.6, reviews: 890, image: 'https://images.unsplash.com/photo-1615396899839-c99c121888b0?w=600&h=600&fit=crop', description: 'Kaolin clay cleanser to detox pores.', details: ['Detoxes pores','Deep clean','Smooths skin'], ingredients: 'Kaolin, Salicylic Acid.', howToUse: 'Oily/Acne skin.' },
  { id: 'milk-cleanser', name: 'Soothing Milk Cleanser', category: 'Cleansers', price: 35, originalPrice: 48, badge: '', rating: 4.8, reviews: 670, image: 'https://images.unsplash.com/photo-1612817288484-6f916006741a?w=600&h=600&fit=crop', description: 'Ultra-gentle milk for sensitive/dry skin.', details: ['Hypoallergenic','Calms redness','Creamy'], ingredients: 'Oat Milk, Ceramides.', howToUse: 'Anytime.' },
  { id: 'oil-cleanser', name: 'Pure Botanical Oil Wash', category: 'Cleansers', price: 42, originalPrice: 60, badge: 'Pure', rating: 4.9, reviews: 540, image: 'https://images.unsplash.com/photo-1601049541289-9b1b7bbbfe19?w=600&h=600&fit=crop', description: 'Double cleanse essential for clear skin.', details: ['Removes oil','Deeply cleans','Organic oils'], ingredients: 'Jojoba, Squalane.', howToUse: 'Step 1.' },
  { id: 'foam-cleanser', name: 'Cloud Foam Wash', category: 'Cleansers', price: 30, originalPrice: 40, badge: '', rating: 4.5, reviews: 1120, image: 'https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?w=600&h=600&fit=crop', description: 'Self-foaming pump for a light, airy clean.', details: ['Fun texture','Light clean','Instant foam'], ingredients: 'Aloe, Coconut Water.', howToUse: 'Wet face.' },
  { id: 'exfol-cleanser', name: 'AHA Enzyme Wash', category: 'Cleansers', price: 46, originalPrice: 62, badge: 'Glow', rating: 4.7, reviews: 340, image: 'https://images.unsplash.com/photo-1617897903241-01b088c1b55a?w=600&h=600&fit=crop', description: 'Cleanser with papaya enzymes for chemical exfoliation.', details: ['Brightens skin','Removes dead cells','Smooths'], ingredients: 'Papaya Enzyme, AHA.', howToUse: '2x weekly.' },
  { id: 'charcoal-cleanser', name: 'Active Charcoal Bar', category: 'Cleansers', price: 22, originalPrice: 32, badge: 'Eco', rating: 4.4, reviews: 560, image: 'https://images.unsplash.com/photo-1615396899793-189f7f45b6da?w=600&h=600&fit=crop', description: 'Zero-waste charcoal bar for body and face.', details: ['Zero waste','Travel friendly','Deep clean'], ingredients: 'Charcoal, Tea Tree.', howToUse: 'Lather up.' },
  { id: 'micellar-water', name: 'Pure Micellar Water', category: 'Cleansers', price: 28, originalPrice: 38, badge: '', rating: 4.6, reviews: 2100, image: 'https://images.unsplash.com/photo-1611080541599-8c6dbde6ed28?w=600&h=600&fit=crop', description: 'No-rinse cleanser for quick removal.', details: ['No rinse','Sensitive safe','Water-based'], ingredients: 'Micelles, Rose Water.', howToUse: 'Cotton pad.' },
  { id: 'scrub-cleanser', name: 'Rice Bran Polish', category: 'Cleansers', price: 44, originalPrice: 65, badge: 'Natural', rating: 4.8, reviews: 290, image: 'https://images.unsplash.com/photo-1608248543733-44670083ad1c?w=600&h=600&fit=crop', description: 'Gentle physical scrub for a polished finish.', details: ['Rice bran','Manual exfoliation','Brightening'], ingredients: 'Rice Powder, Vitamin C.', howToUse: 'Add water.' },

  { id: 'brightening-toner', name: 'Vitamin C Bright Toner', category: 'Toners', price: 42, originalPrice: 58, badge: '', rating: 4.6, reviews: 1134, image: 'https://images.unsplash.com/photo-1570194065650-d99fb4a38691?w=600&h=600&fit=crop', description: 'Alcohol-free toner for instant radiance.', details: ['Alcohol-free','Brightens','Preps skin'], ingredients: 'Witch Hazel, Vit C.', howToUse: 'After cleansing.' },
  { id: 'rose-toner', name: 'Rose Water Mist', category: 'Toners', price: 28, originalPrice: 40, badge: '', rating: 4.8, reviews: 2500, image: 'https://images.unsplash.com/photo-1611930022073-b7a4ba5fcccd?w=600&h=600&fit=crop', description: '100% pure steam-distilled rose water.', details: ['Pure mist','Hydrating','Soothing'], ingredients: 'Rose Damascena.', howToUse: 'Mist anytime.' },
  { id: 'aha-toner', name: 'Exfoliating Glow Toner', category: 'Toners', price: 38, originalPrice: 55, badge: 'Active', rating: 4.5, reviews: 890, image: 'https://images.unsplash.com/photo-1615397022818-472390f7793d?w=600&h=600&fit=crop', description: '5% Glycolic acid for clear, glowing skin.', details: ['Clearer skin','Glowy finish','Deep exfoliation'], ingredients: 'Glycolic Acid, Ginseng.', howToUse: 'Nightly.' },
  { id: 'essence-toner', name: 'Hydra Essence Toner', category: 'Toners', price: 45, originalPrice: 62, badge: 'Rich', rating: 4.9, reviews: 430, image: 'https://images.unsplash.com/photo-1611930021591-995ce5389658?w=600&h=600&fit=crop', description: 'Thick, milky toner for extreme hydration.', details: ['Milky texture','Barrier boost','Super hydrating'], ingredients: 'Panthenol, Hyaluron.', howToUse: 'Pat in.' },
  { id: 'tea-tree-toner', name: 'Blemish Control Mist', category: 'Toners', price: 32, originalPrice: 48, badge: '', rating: 4.4, reviews: 750, image: 'https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?w=600&h=600&fit=crop', description: 'Calms breakouts and controls excess oil.', details: ['Fights acne','Reduces oil','Cooling'], ingredients: 'Tea Tree, Salicylic.', howToUse: 'Spray on.' },
  { id: 'neroli-toner', name: 'Neroli Uplifting Toner', category: 'Toners', price: 34, originalPrice: 45, badge: '', rating: 4.7, reviews: 340, image: 'https://images.unsplash.com/photo-1601049541289-9b1b7bbbfe19?w=600&h=600&fit=crop', description: 'Uplifting floral water to refresh the senses.', details: ['Refreshing','Floral scent','Gentle'], ingredients: 'Neroli Water.', howToUse: 'AM refresh.' },
  { id: 'calming-toner', name: 'Cica Soothing Toner', category: 'Toners', price: 36, originalPrice: 50, badge: 'Sensitive', rating: 4.8, reviews: 560, image: 'https://images.unsplash.com/photo-1615396899793-189f7f45b6da?w=600&h=600&fit=crop', description: 'Calms irritated and sensitive skin instantly.', details: ['Cica power','Reduces redness','Hypoallergenic'], ingredients: 'Cica, Aloe.', howToUse: 'Daily.' },
  { id: 'firming-toner', name: 'Peptide Prep Mist', category: 'Toners', price: 52, originalPrice: 75, badge: 'Premium', rating: 4.8, reviews: 290, image: 'https://images.unsplash.com/photo-1631729371254-42c2892f0e6e?w=600&h=600&fit=crop', description: 'Firms skin while prepping for active serums.', details: ['Peptide rich','Anti-aging','Advanced prep'], ingredients: 'Peptides, Copper.', howToUse: 'Before serum.' },
  { id: 'vitamin-toner', name: 'Multivitamin Mist', category: 'Toners', price: 35, originalPrice: 48, badge: '', rating: 4.7, reviews: 180, image: 'https://images.unsplash.com/photo-1611080541599-8c6dbde6ed28?w=600&h=600&fit=crop', description: 'Vitamins B, C, and E for healthy skin.', details: ['Vit complex','Nourishing','Lightweight'], ingredients: 'B3, C, E.', howToUse: 'Mist.' },
  { id: 'balancing-toner', name: 'pH Balance Mist', category: 'Toners', price: 30, originalPrice: 42, badge: '', rating: 4.6, reviews: 621, image: 'https://images.unsplash.com/photo-1608248543733-44670083ad1c?w=600&h=600&fit=crop', description: 'Restores skin pH after hard water washing.', details: ['Balances pH','Barrier health','Basic prep'], ingredients: 'Thermal Water.', howToUse: 'Post-cleanse.' },

  { id: 'overnight-mask', name: 'Overnight Repair Mask', category: 'Masks', price: 78, originalPrice: 110, badge: 'Limited', rating: 4.8, reviews: 756, image: 'https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?w=600&h=600&fit=crop', description: 'Wake up to transformed skin.', details: ['AHA resurfacing','Deep hydration','Nightly repair'], ingredients: 'AHA, Bakuchiol.', howToUse: 'Last step at night.' },
  { id: 'detox-clay', name: 'Pink Clay Pore Mask', category: 'Masks', price: 45, originalPrice: 65, badge: 'Popular', rating: 4.7, reviews: 3201, image: 'https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=600&h=600&fit=crop', description: 'Detoxifies and minimizes pores with Australian clay.', details: ['Deep detox','Smooths pores','Mineral rich'], ingredients: 'Pink Clay, Rose.', howToUse: '10 mins.' },
  { id: 'honey-mask', name: 'Hydrating Honey Mask', category: 'Masks', price: 56, originalPrice: 80, badge: '', rating: 4.9, reviews: 890, image: 'https://images.unsplash.com/photo-1617897903246-719242758050?w=600&h=600&fit=crop', description: 'Intensive hydration for dry, stressed skin.', details: ['Honey rich','Deeply nourishing','Soothing'], ingredients: 'Manuka Honey, Propolis.', howToUse: '15 mins.' },
  { id: 'brightening-mask', name: 'Enzyme Glow Mask', category: 'Masks', price: 62, originalPrice: 88, badge: '', rating: 4.8, reviews: 430, image: 'https://images.unsplash.com/photo-1615396899839-c99c121888b0?w=600&h=600&fit=crop', description: 'Fruit enzymes to gently resurface skin.', details: ['Glow boost','Exfoliating','Instant results'], ingredients: 'Pumpkin, Papaya.', howToUse: 'Weekly.' },
  { id: 'calming-mask', name: 'Cica Repair Mask', category: 'Masks', price: 48, originalPrice: 70, badge: '', rating: 4.7, reviews: 670, image: 'https://images.unsplash.com/photo-1612817288484-6f916006741a?w=600&h=600&fit=crop', description: 'Calms redness and irritation in 10 minutes.', details: ['Emergency calm','Reduces heat','Soothing'], ingredients: 'Cica, Centella.', howToUse: 'When needed.' },
  { id: 'sleeping-mask-2', name: 'Water Sleeping Mask', category: 'Masks', price: 52, originalPrice: 75, badge: '', rating: 4.8, reviews: 540, image: 'https://images.unsplash.com/photo-1601049541289-9b1b7bbbfe19?w=600&h=600&fit=crop', description: 'Gel-type sleeping mask for bouncy skin.', details: ['Bouncy skin','Lightweight','Refreshing'], ingredients: 'Sea Water, Aloe.', howToUse: 'PM use.' },
  { id: 'sulfur-mask', name: 'Anti-Blemish Sulfur Mask', category: 'Masks', price: 40, originalPrice: 58, badge: '', rating: 4.4, reviews: 1120, image: 'https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?w=600&h=600&fit=crop', description: 'Targets active breakouts and prevents new ones.', details: ['Clears acne','Reduces inflammation','Active Sulfur'], ingredients: 'Sulfur, Zinc.', howToUse: 'Spot/Full face.' },
  { id: 'gold-mask', name: '24K Gold Lift Mask', category: 'Masks', price: 120, originalPrice: 180, badge: 'Lux', rating: 4.9, reviews: 340, image: 'https://images.unsplash.com/photo-1617897903241-01b088c1b55a?w=600&h=600&fit=crop', description: 'Premium lifting treatment with real gold particles.', details: ['Lifting','Luxury feel','Anti-aging'], ingredients: '24K Gold, Peptides.', howToUse: 'Event prep.' },
  { id: 'sheet-mask-set', name: 'Radiance Sheet Mask (Set of 5)', category: 'Masks', price: 35, originalPrice: 50, badge: '', rating: 4.7, reviews: 560, image: 'https://images.unsplash.com/photo-1615396899793-189f7f45b6da?w=600&h=600&fit=crop', description: 'Convenient sheet masks for travel and glow.', details: ['Travel safe','Instant hydration','Easy use'], ingredients: 'Vit C, B3.', howToUse: '15 mins.' },
  { id: 'cooling-mask', name: 'Ice Gel Face Mask', category: 'Masks', price: 42, originalPrice: 60, badge: '', rating: 4.6, reviews: 290, image: 'https://images.unsplash.com/photo-1611080541599-8c6dbde6ed28?w=600&h=600&fit=crop', description: 'Depuffs and cools skin instantly.', details: ['Cooling','Depuffing','Cryo-effect'], ingredients: 'Peppermint, Menthol.', howToUse: 'Keep in fridge.' },

  { id: 'eye-revival', name: 'Eye Revival Cream', category: 'Eye Care', price: 65, originalPrice: 89, badge: 'Popular', rating: 4.7, reviews: 982, image: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=600&h=600&fit=crop', description: 'Targets dark circles and puffiness.', details: ['Cooling tip','Caffeine-infused','Firming'], ingredients: 'Caffeine, Retinol.', howToUse: 'Gently pat.' },
  { id: 'eye-gel', name: 'Cooling Cucumber Gel', category: 'Eye Care', price: 45, originalPrice: 60, badge: '', rating: 4.6, reviews: 1540, image: 'https://images.unsplash.com/photo-1608248543733-44670083ad1c?w=600&h=600&fit=crop', description: 'Instant relief for tired, puffy eyes.', details: ['Soothing','Lightweight','Cucumber fresh'], ingredients: 'Cucumber, Aloe.', howToUse: 'Morning.' },
  { id: 'eye-serum', name: 'Advanced Peptide Eye Serum', category: 'Eye Care', price: 85, originalPrice: 110, badge: 'Premium', rating: 4.8, reviews: 621, image: 'https://images.unsplash.com/photo-1615397022818-472390f7793d?w=600&h=600&fit=crop', description: 'Deep anti-aging for the eye contour.', details: ['Lifts lids','Reduces lines','Fast absorbing'], ingredients: '6 Peptides, Hyaluron.', howToUse: 'Before cream.' },
  { id: 'bright-eye', name: 'Vitamin C Bright Eye', category: 'Eye Care', price: 58, originalPrice: 80, badge: '', rating: 4.7, reviews: 890, image: 'https://images.unsplash.com/photo-1611930021591-995ce5389658?w=600&h=600&fit=crop', description: 'Fades dark circles and brightens tone.', details: ['Brightening','Anti-fatigue','Radiant look'], ingredients: 'Vitamin C, Pearl.', howToUse: 'Daily.' },
  { id: 'eye-patches', name: 'Gold Hydrogel Patches', category: 'Eye Care', price: 38, originalPrice: 55, badge: '', rating: 4.9, reviews: 430, image: 'https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?w=600&h=600&fit=crop', description: 'Depuffs and hydrates in 15 minutes.', details: ['15-min fix','Travel friendly','Hydrogel tech'], ingredients: 'Gold, Collagen.', howToUse: 'Under eyes.' },
  { id: 'night-eye', name: 'Retinol Eye Complex', category: 'Eye Care', price: 72, originalPrice: 95, badge: 'Active', rating: 4.5, reviews: 750, image: 'https://images.unsplash.com/photo-1601049541289-9b1b7bbbfe19?w=600&h=600&fit=crop', description: 'Resurfacing eye cream for deep wrinkles.', details: ['Anti-aging','Smooths skin','Gentle retinol'], ingredients: '0.1% Retinol, Shea.', howToUse: 'Evening.' },
  { id: 'lash-serum', name: 'Peptide Lash & Brow', category: 'Eye Care', price: 60, originalPrice: 85, badge: '', rating: 4.8, reviews: 340, image: 'https://images.unsplash.com/photo-1615396899793-189f7f45b6da?w=600&h=600&fit=crop', description: 'Longer, thicker lashes in 4 weeks.', details: ['Safe for eyes','Boosts growth','Peptide tech'], ingredients: 'Biotin, Peptides.', howToUse: 'Lash line.' },
  { id: 'eye-mask', name: 'Overnight Eye Mask', category: 'Eye Care', price: 55, originalPrice: 75, badge: '', rating: 4.7, reviews: 560, image: 'https://images.unsplash.com/photo-1631729371254-42c2892f0e6e?w=600&h=600&fit=crop', description: 'Intensive overnight treatment for dry eyes.', details: ['Deep hydration','Prevents lines','Rich'], ingredients: 'Ceramides, Oils.', howToUse: 'Sleep in it.' },
  { id: 'sun-eye', name: 'Mineral Eye SPF 50', category: 'Eye Care', price: 42, originalPrice: 60, badge: 'Protect', rating: 4.6, reviews: 290, image: 'https://images.unsplash.com/photo-1611080541599-8c6dbde6ed28?w=600&h=600&fit=crop', description: 'Sun protection designed for eyes.', details: ['SPF 50','No sting','Non-greasy'], ingredients: 'Zinc, Titanium.', howToUse: 'Daytime.' },
  { id: 'eye-roller', name: 'Ice Roller Therapy', category: 'Eye Care', price: 28, originalPrice: 40, badge: 'Tool', rating: 4.8, reviews: 180, image: 'https://images.unsplash.com/photo-1608248543733-44670083ad1c?w=600&h=600&fit=crop', description: 'Steel roller ball to drain and depuff.', details: ['Drains fluid','Instant cool','Eco-friendly'], ingredients: 'Stainless Steel.', howToUse: 'Roll gently.' },

  { id: 'botanical-oil', name: 'Botanical Face Oil', category: 'Oils', price: 68, originalPrice: 92, badge: '', rating: 4.7, reviews: 894, image: 'https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?w=600&h=600&fit=crop', description: 'Luxurious blend of 9 botanical oils.', details: ['Omega-rich','Fast absorbing','Non-clogging'], ingredients: 'Rosehip, Jojoba.', howToUse: 'Last step.' },
  { id: 'squalane-oil', name: '100% Vegan Squalane', category: 'Oils', price: 38, originalPrice: 55, badge: 'Pure', rating: 4.9, reviews: 2100, image: 'https://images.unsplash.com/photo-1617897903246-719242758050?w=600&h=600&fit=crop', description: 'Pure squalane derived from sustainable sugarcane.', details: ['Weightless','Mimics skin','Bio-based'], ingredients: '100% Squalane.', howToUse: 'Hair/Face/Body.' },
  { id: 'rosehip-oil', name: 'Cold-Pressed Rosehip', category: 'Oils', price: 42, originalPrice: 60, badge: '', rating: 4.8, reviews: 1240, image: 'https://images.unsplash.com/photo-1615396899839-c99c121888b0?w=600&h=600&fit=crop', description: 'Organic rosehip oil for scarring and aging.', details: ['Fades scars','Vitamin A rich','Organic'], ingredients: 'Rosehip Oil.', howToUse: 'Daily.' },
  { id: 'bakuchiol-oil', name: 'Retinol Alt Oil', category: 'Oils', price: 72, originalPrice: 95, badge: 'New', rating: 4.7, reviews: 890, image: 'https://images.unsplash.com/photo-1612817288484-6f916006741a?w=600&h=600&fit=crop', description: 'Bakuchiol in a base of soothing squalane.', details: ['Gentle retinol','Softens skin','Safe for day'], ingredients: 'Bakuchiol, Squalane.', howToUse: 'AM/PM.' },
  { id: 'glow-oil', name: 'Summer Shimmer Oil', category: 'Oils', price: 54, originalPrice: 75, badge: 'Glow', rating: 4.6, reviews: 670, image: 'https://images.unsplash.com/photo-1601049541289-9b1b7bbbfe19?w=600&h=600&fit=crop', description: 'Illuminating oil for body and face.', details: ['Sun-kissed','Gold mica','Smells amazing'], ingredients: 'Mica, Coconut Oil.', howToUse: 'Legs/Arms.' },
  { id: 'tea-tree-oil', name: 'Spot Control Oil', category: 'Oils', price: 28, originalPrice: 40, badge: '', rating: 4.5, reviews: 540, image: 'https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?w=600&h=600&fit=crop', description: 'Purifies and clears skin imperfections.', details: ['Targeted','Antibacterial','Pure'], ingredients: 'Tea Tree, Lemon.', howToUse: 'Spot treat.' },
  { id: 'cbd-oil', name: 'Stress Relief Oil', category: 'Oils', price: 88, originalPrice: 120, badge: 'Calm', rating: 4.8, reviews: 340, image: 'https://images.unsplash.com/photo-1617897903241-01b088c1b55a?w=600&h=600&fit=crop', description: 'Relaxes facial muscles and reduces stress.', details: ['High potency','Full spectrum','Relaxing'], ingredients: 'CBD, Hemp.', howToUse: 'Massage.' },
  { id: 'luxury-oil', name: 'Royal Saffron Elixir', category: 'Oils', price: 150, originalPrice: 220, badge: 'Elite', rating: 4.9, reviews: 560, image: 'https://images.unsplash.com/photo-1615396899793-189f7f45b6da?w=600&h=600&fit=crop', description: 'Precious saffron-infused anti-aging oil.', details: ['Rare saffron','Ultra luxury','Deep repair'], ingredients: 'Saffron, 24K Gold.', howToUse: 'Luxury ritual.' },
  { id: 'argan-oil', name: 'Pure Moroccan Argan', category: 'Oils', price: 46, originalPrice: 65, badge: '', rating: 4.7, reviews: 290, image: 'https://images.unsplash.com/photo-1611080541599-8c6dbde6ed28?w=600&h=600&fit=crop', description: 'Liquid gold for hair and skin.', details: ['Multipurpose','Deeply hydrates','Organic'], ingredients: 'Argan Oil.', howToUse: 'Everywhere.' },
  { id: 'evening-oil', name: 'Sleep Tight Oil', category: 'Oils', price: 58, originalPrice: 85, badge: '', rating: 4.8, reviews: 180, image: 'https://images.unsplash.com/photo-1608248543733-44670083ad1c?w=600&h=600&fit=crop', description: 'Lavender infused oil for evening relaxation.', details: ['Aromatic','Sleep aid','Hydrating'], ingredients: 'Lavender, Primrose.', howToUse: 'Bedtime.' }
];

// ─── Blog Catalog ──────────────────────────────────────────
const BLOGS = [
  {
    id: 'science-vitamin-c',
    title: 'The Science Behind Our 15% Vitamin C + Bakuchiol Blend',
    category: 'Product Deep Dive',
    date: 'May 4, 2026',
    image: 'https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=800&h=500&fit=crop',
    excerpt: 'Discover why combining stabilized Vitamin C with the gentle retinol alternative Bakuchiol creates the ultimate clinical-grade radiance booster without the irritation.',
    content: `
      <p>Vitamin C is widely known as a powerhouse ingredient for brightening the skin and boosting collagen production. However, not all Vitamin C serums are created equal.</p>
      <h3>The Stability Challenge</h3>
      <p>L-ascorbic acid, the most potent form of Vitamin C, is notoriously unstable. When exposed to light and air, it oxidizes rapidly, losing its efficacy and potentially causing skin irritation. That's why we formulated our Radiance Revival Serum with a highly stabilized 15% Vitamin C derivative.</p>
      <h3>Why Bakuchiol?</h3>
      <p>While retinol is the gold standard for anti-aging, it can be too harsh for many, especially when combined with Vitamin C. Enter Bakuchiol, a plant-derived alternative that offers similar benefits—accelerating cell turnover and stimulating collagen—without the redness and flaking.</p>
      <p>By pairing stabilized Vitamin C with Bakuchiol, we've created a synergistic blend that tackles hyperpigmentation, fine lines, and loss of firmness simultaneously, making it safe for daily use on all skin types.</p>
    `
  },
  {
    id: 'b-corp-certification',
    title: 'Aura Botanics is Now Officially a Certified B Corporation',
    category: 'Company News',
    date: 'April 28, 2026',
    image: 'https://images.unsplash.com/photo-1611930022073-b7a4ba5fcccd?w=800&h=500&fit=crop',
    excerpt: 'We are thrilled to announce that we\'ve joined the global movement of people using business as a force for good. Here\'s what our B Corp status means for our formulations and packaging.',
    content: `
      <p>Today marks a monumental milestone for Aura Botanics. After a rigorous 18-month evaluation process, we are proud to announce our official certification as a B Corporation.</p>
      <h3>What is a B Corp?</h3>
      <p>Certified B Corporations are businesses that meet the highest standards of verified social and environmental performance, public transparency, and legal accountability to balance profit and purpose.</p>
      <h3>Our Commitment to Sustainability</h3>
      <p>This certification validates our ongoing efforts to prioritize the planet. Moving forward, you will see even more initiatives from us, including:</p>
      <ul>
        <li>100% post-consumer recycled packaging across our entire product line by 2027.</li>
        <li>Fair-trade sourcing for all our rare botanical ingredients.</li>
        <li>Carbon-neutral shipping for every order.</li>
      </ul>
      <p>Thank you to our incredible community for supporting us on this journey. We couldn't have done it without you.</p>
    `
  },
  {
    id: 'overnight-repair-mask',
    title: 'Meet the Overnight Repair Mask: 8 Hours to Transformed Skin',
    category: 'Product Deep Dive',
    date: 'April 15, 2026',
    image: 'https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?w=800&h=500&fit=crop',
    excerpt: 'Our newest launch uses gentle AHAs and a ceramide complex to resurface and deeply hydrate while you sleep. Here is how to incorporate it into your evening routine.',
    content: `
      <p>Nighttime is when your skin goes into repair mode, making it the optimal time to deliver powerful active ingredients. Our new Overnight Repair Mask is designed to maximize this natural regenerative process.</p>
      <h3>Gentle Resurfacing</h3>
      <p>Formulated with a 5% AHA blend, this mask gently exfoliates dead skin cells overnight, revealing a brighter, smoother complexion by morning. Unlike harsh peels, our slow-release technology ensures zero irritation.</p>
      <h3>Barrier Support</h3>
      <p>Exfoliation must be balanced with hydration. That's why we've packed this mask with a triple-ceramide complex and squalane to fortify your skin barrier and lock in moisture for 72 hours.</p>
      <h3>How to Use</h3>
      <p>Apply a generous layer as the final step of your evening skincare routine, 2-3 times a week. Let it absorb for 10 minutes before going to bed. Rinse off in the morning and follow with your regular routine.</p>
    `
  },
  {
    id: 'sourcing-saffron',
    title: 'Sourcing the World\'s Rarest Botanicals: Himalayan Saffron',
    category: 'Company News',
    date: 'April 2, 2026',
    image: 'https://images.unsplash.com/photo-1631729371254-42c2892f0e6e?w=800&h=500&fit=crop',
    excerpt: 'Take a journey with our founders to the high-altitude gardens where we sustainably harvest the antioxidant-rich Saffron powering our Firming Peptide Cream.',
    content: `
      <p>Saffron is often called "red gold," and for good reason. It is one of the most expensive spices in the world, primarily because harvesting it is incredibly labor-intensive. But beyond its culinary uses, saffron is a skincare superhero.</p>
      <h3>The Antioxidant Powerhouse</h3>
      <p>Rich in vitamins, antioxidants, and potassium, saffron helps to calm inflammation, brighten the skin, and protect against environmental stressors. It's the key botanical in our Firming Peptide Cream.</p>
      <h3>Sustainable Harvesting</h3>
      <p>Last month, our founders traveled to the Himalayan region to visit the family-owned farms where our saffron is sourced. We partner directly with these farmers, ensuring they receive fair wages and work in safe conditions.</p>
      <p>By bypassing the middleman, we can guarantee the purity of our ingredients while supporting the local communities that have cultivated this precious botanical for generations.</p>
    `
  },
  {
    id: 'eye-cream-usage',
    title: 'The Correct Way to Apply Eye Cream (You Might Be Doing It Wrong)',
    category: 'Skincare Routines',
    date: 'March 18, 2026',
    image: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=800&h=500&fit=crop',
    excerpt: 'Tugging at the delicate skin around your eyes can accelerate aging. Learn the optimal technique using your ring finger and our cooling ceramic applicator tip.',
    content: `
      <p>The skin around your eyes is up to ten times thinner than the rest of your face, making it the first area to show signs of aging, fatigue, and dehydration. Applying eye cream incorrectly can actually do more harm than good.</p>
      <h3>The Ring Finger Rule</h3>
      <p>Never rub or tug the skin around your eyes. Instead, use your ring finger—which naturally applies the least amount of pressure—to gently tap the product into the skin.</p>
      <h3>Where to Apply</h3>
      <p>Apply the cream along the orbital bone (the eye socket), not directly on the eyelids or right up against the lash line. The product will naturally migrate closer to the eye as it warms up on your skin.</p>
      <h3>The Ceramic Advantage</h3>
      <p>Our Eye Revival Cream features a cooling ceramic applicator tip. Keep it in the fridge for an extra depuffing effect. Gently glide the applicator from the inner corner of the eye outward to encourage lymphatic drainage.</p>
    `
  },
  {
    id: 'face-oils-oily-skin',
    title: 'Why Face Oils Are Essential for Oily Skin',
    category: 'Product Deep Dive',
    date: 'March 5, 2026',
    image: 'https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?w=800&h=500&fit=crop',
    excerpt: 'It sounds counterintuitive, but our 9-oil Botanical Blend can actually help regulate sebum production. We break down the science behind non-comedogenic hydration.',
    content: `
      <p>If you have oily or acne-prone skin, the thought of applying a face oil might seem terrifying. However, the right oil can actually be your best defense against excess shine and breakouts.</p>
      <h3>The Over-Production Myth</h3>
      <p>When you strip oily skin with harsh cleansers and skip hydration, your skin panics and produces even more oil to compensate. Applying a lightweight, non-comedogenic oil helps to balance your skin's natural sebum production.</p>
      <h3>Linoleic Acid is Key</h3>
      <p>People with acne-prone skin often have a deficiency in linoleic acid, making their natural sebum thick and sticky (which leads to clogged pores). Our Botanical Face Oil is rich in linoleic acid from Rosehip and Marula oils, helping to thin out your natural sebum and keep pores clear.</p>
      <p>For oily skin, we recommend mixing 1-2 drops of our Botanical Face Oil into your nighttime moisturizer for balanced, clear, and glowing skin.</p>
    `
  }
];


// ─── Wishlist Logic ─────────────────────────────────────────
const Wishlist = {
  KEY: 'aura_wishlist',
  get() {
    try { return JSON.parse(localStorage.getItem(this.KEY)) || []; }
    catch { return []; }
  },
  save(items) {
    localStorage.setItem(this.KEY, JSON.stringify(items));
    this.updateUI();
  },
  toggle(productId) {
    if (!localStorage.getItem('aura_session')) {
      window.location.href = 'auth.html';
      return;
    }
    let items = this.get();
    if (items.includes(productId)) {
      items = items.filter(id => id !== productId);
    } else {
      items.push(productId);
    }
    this.save(items);
    
    // Update the specific button UI if it exists
    const btn = document.querySelector(`#wish-btn-${productId}`);
    if (btn) {
      const active = items.includes(productId);
      btn.classList.toggle('active', active);
      btn.innerHTML = active ? '❤️' : '♡';
    }
  },
  updateUI() {
    const count = this.get().length;
    document.querySelectorAll('.wishlist-count').forEach(el => {
      el.textContent = count;
      el.style.display = count > 0 ? 'flex' : 'none';
    });
  }
};

// ─── Cart Logic ────────────────────────────────────────────
const Cart = {
  KEY: 'aura_cart',

  get() {
    try { return JSON.parse(localStorage.getItem(this.KEY)) || []; }
    catch { return []; }
  },

  save(items) {
    localStorage.setItem(this.KEY, JSON.stringify(items));
    this.updateUI();
  },

  add(productId, qty = 1) {
    if (!localStorage.getItem('aura_session')) {
      window.location.href = 'auth.html';
      return;
    }
    const items = this.get();
    const existing = items.find(i => i.id === productId);
    if (existing) {
      existing.qty += qty;
    } else {
      items.push({ id: productId, qty });
    }
    this.save(items);
    this.showNotification(productId);
  },

  remove(productId) {
    const items = this.get().filter(i => i.id !== productId);
    this.save(items);
  },

  updateQty(productId, qty) {
    const items = this.get();
    const item = items.find(i => i.id === productId);
    if (item) {
      item.qty = Math.max(1, qty);
      this.save(items);
    }
  },

  clear() {
    localStorage.removeItem(this.KEY);
    this.updateUI();
  },

  count() {
    return this.get().reduce((sum, i) => sum + i.qty, 0);
  },

  total() {
    return this.get().reduce((sum, item) => {
      const p = PRODUCTS.find(pr => pr.id === item.id);
      return sum + (p ? p.price * item.qty : 0);
    }, 0);
  },

  updateUI() {
    document.querySelectorAll('.cart-count').forEach(el => {
      const c = this.count();
      el.textContent = c;
      el.style.display = c > 0 ? 'flex' : 'none';
    });
  },

  showNotification(productId) {
    const p = PRODUCTS.find(pr => pr.id === productId);
    if (!p) return;
    let toast = document.getElementById('cart-toast');
    if (!toast) {
      toast = document.createElement('div');
      toast.id = 'cart-toast';
      toast.className = 'cart-toast';
      document.body.appendChild(toast);
    }
    toast.innerHTML = `
      <img src="${p.image}" alt="" style="width:40px;height:40px;border-radius:10px;object-fit:cover">
      <div>
        <strong>${p.name}</strong>
        <span>Added to cart</span>
      </div>
    `;
    toast.classList.add('show');
    setTimeout(() => toast.classList.remove('show'), 2500);
  }
};

// ─── Auth System ───────────────────────────────────────────
const Auth = {
  USERS_KEY: 'aura_users',
  SESSION_KEY: 'aura_session',
  ADDR_KEY: 'aura_addresses',

  _getUsers() {
    try { return JSON.parse(localStorage.getItem(this.USERS_KEY)) || []; }
    catch { return []; }
  },

  _saveUsers(users) {
    localStorage.setItem(this.USERS_KEY, JSON.stringify(users));
  },

  _hash(str) {
    // Simple hash for demo — in production use bcrypt on server
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
      const c = str.charCodeAt(i);
      hash = ((hash << 5) - hash) + c;
      hash |= 0;
    }
    return 'h_' + Math.abs(hash).toString(36);
  },

  signup({ firstName, lastName, email, password }) {
    const users = this._getUsers();
    if (users.find(u => u.email === email.toLowerCase())) {
      return { success: false, message: 'An account with this email already exists' };
    }
    if (password.length < 6) {
      return { success: false, message: 'Password must be at least 6 characters' };
    }
    const user = {
      id: 'usr_' + Date.now().toString(36),
      firstName,
      lastName,
      email: email.toLowerCase(),
      passwordHash: this._hash(password),
      createdAt: new Date().toISOString()
    };
    users.push(user);
    this._saveUsers(users);
    // Auto-login
    this._setSession(user);
    return { success: true, user };
  },

  login(email, password) {
    const users = this._getUsers();
    const user = users.find(u => u.email === email.toLowerCase());
    if (!user) return { success: false, message: 'No account found with this email' };
    if (user.passwordHash !== this._hash(password)) {
      return { success: false, message: 'Incorrect password' };
    }
    this._setSession(user);
    return { success: true, user };
  },

  logout() {
    localStorage.removeItem(this.SESSION_KEY);
  },

  isLoggedIn() {
    return !!localStorage.getItem(this.SESSION_KEY);
  },

  getUser() {
    try { return JSON.parse(localStorage.getItem(this.SESSION_KEY)); }
    catch { return null; }
  },

  _setSession(user) {
    const session = { ...user };
    delete session.passwordHash;
    localStorage.setItem(this.SESSION_KEY, JSON.stringify(session));
  },

  updateProfile({ firstName, lastName, currentPassword, newPassword }) {
    const session = this.getUser();
    if (!session) return { success: false, message: 'Not logged in' };
    const users = this._getUsers();
    const idx = users.findIndex(u => u.email === session.email);
    if (idx === -1) return { success: false, message: 'User not found' };

    if (firstName) users[idx].firstName = firstName;
    if (lastName) users[idx].lastName = lastName;

    if (newPassword) {
      if (!currentPassword) return { success: false, message: 'Current password required' };
      if (users[idx].passwordHash !== this._hash(currentPassword)) {
        return { success: false, message: 'Current password is incorrect' };
      }
      if (newPassword.length < 6) return { success: false, message: 'New password must be at least 6 characters' };
      users[idx].passwordHash = this._hash(newPassword);
    }

    this._saveUsers(users);
    this._setSession(users[idx]);
    return { success: true };
  },

  deleteAccount() {
    const session = this.getUser();
    if (!session) return;
    const users = this._getUsers().filter(u => u.email !== session.email);
    this._saveUsers(users);
    localStorage.removeItem(this.SESSION_KEY);
    localStorage.removeItem(this.ADDR_KEY);
    localStorage.removeItem('aura_orders');
  },

  getAddresses() {
    try { return JSON.parse(localStorage.getItem(this.ADDR_KEY)) || []; }
    catch { return []; }
  },

  addAddress(addr) {
    const addrs = this.getAddresses();
    if (addr.isDefault) addrs.forEach(a => a.isDefault = false);
    addrs.push(addr);
    localStorage.setItem(this.ADDR_KEY, JSON.stringify(addrs));
  },

  removeAddress(index) {
    const addrs = this.getAddresses();
    addrs.splice(index, 1);
    localStorage.setItem(this.ADDR_KEY, JSON.stringify(addrs));
  }
};

// ─── Orders System ─────────────────────────────────────────
const Orders = {
  KEY: 'aura_orders',
  get() {
    const user = Auth.getUser();
    if (!user) return [];
    try {
      const allOrders = JSON.parse(localStorage.getItem(this.KEY)) || {};
      return allOrders[user.email] || [];
    } catch { return []; }
  },
  save(order) {
    const user = Auth.getUser();
    if (!user) return;
    try {
      const allOrders = JSON.parse(localStorage.getItem(this.KEY)) || {};
      if (!allOrders[user.email]) allOrders[user.email] = [];
      allOrders[user.email].unshift(order); // Newest first
      localStorage.setItem(this.KEY, JSON.stringify(allOrders));
    } catch (e) { console.error("Order save failed", e); }
  },
  place(items, total) {
    const order = {
      id: 'ORD-' + Math.random().toString(36).substr(2, 9).toUpperCase(),
      date: new Date().toISOString(),
      items: items.map(item => {
        const p = PRODUCTS.find(prod => prod.id === item.id);
        return { ...item, name: p ? p.name : 'Unknown Product', price: p ? p.price : 0, image: p ? p.image : '' };
      }),
      total: total,
      status: 'Processing'
    };
    this.save(order);
    return order;
  }
};

// ─── Shared Components ─────────────────────────────────────
function getProductById(id) {
  return PRODUCTS.find(p => p.id === id);
}

function renderStars(rating) {
  const full = Math.floor(rating);
  const half = rating % 1 >= 0.5 ? 1 : 0;
  return '★'.repeat(full) + (half ? '½' : '') + '☆'.repeat(5 - full - half);
}

function renderProductCard(product) {
  const discount = Math.round((1 - product.price / product.originalPrice) * 100);
  return `
    <a href="product.html?id=${product.id}" class="product-card" id="card-${product.id}">
      <div class="product-card-img">
        <img src="${product.image}" alt="${product.name}" loading="lazy" onerror="this.onerror=null; this.src='https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=600&h=600&fit=crop';" />
        <button id="wish-btn-${product.id}" class="wishlist-toggle ${Wishlist.get().includes(product.id) ? 'active' : ''}" onclick="event.preventDefault();Wishlist.toggle('${product.id}')">
          ${Wishlist.get().includes(product.id) ? '❤️' : '♡'}
        </button>
        ${product.badge ? `<span class="product-badge ${product.badge === 'Bestseller' ? 'badge-best' : product.badge === 'New' ? 'badge-new' : product.badge === 'Limited' ? 'badge-limited' : 'badge-default'}">${product.badge}</span>` : ''}
        ${discount > 20 ? `<span class="product-discount">-${discount}%</span>` : ''}
      </div>
      <div class="product-card-body">
        <span class="product-card-cat">${product.category}</span>
        <h3 class="product-card-name">${product.name}</h3>
        <div class="product-card-rating">
          <span class="stars-small">${renderStars(product.rating)}</span>
          <span class="review-count">(${product.reviews.toLocaleString()})</span>
        </div>
        <div class="product-card-price">
          <span class="card-price-current">$${product.price}</span>
          <span class="card-price-old">$${product.originalPrice}</span>
        </div>
      </div>
      <button class="product-card-btn" onclick="event.preventDefault();Cart.add('${product.id}')">
        Add to Cart
      </button>
      <button class="product-card-btn order-now-btn" style="background:var(--gold); color:#fff; border-color:var(--gold); margin-top:8px;" onclick="event.preventDefault();if(!Auth.isLoggedIn()){window.location.href='auth.html'}else{Cart.add('${product.id}');window.location.href='cart.html'}">
        Buy Now
      </button>
    </a>
  `;
}

function renderNav(activePage = '') {
  const cartCount = Cart.get().reduce((sum, item) => sum + item.qty, 0);
  const wishlistCount = Wishlist.get().length;
  const user = Auth.getUser();

  const authHtml = user
    ? `<a href="account.html" class="nav-user-btn" aria-label="My Account" title="${user.firstName} ${user.lastName}">
         <span class="nav-avatar">${(user.firstName[0] + user.lastName[0]).toUpperCase()}</span>
       </a>`
    : `<a href="auth.html" class="nav-auth-link">Sign In</a>`;

  return `
    <a href="#main-content" class="skip-link">Skip to content</a>
    <div class="mobile-overlay" id="mobile-overlay"></div>
    <div class="promo-bar" id="promo-bar">
      <div class="container" style="display:flex; justify-content:space-between; align-items:center; width:100%;">
        <div style="display:flex; gap:20px; align-items:center;">
          <span>Free Express Shipping on Orders $75+ &nbsp;·&nbsp; Limited Edition Set</span>
          <span class="urgency-tag">🔥 Almost Gone</span>
        </div>
        <div style="display:flex; gap:20px; align-items:center;">
          <a href="events.html" class="top-nav-link">Store & Events</a>
          <button class="top-nav-btn" onclick="openHelpModal('help')">Help</button>
          <button class="top-nav-btn" onclick="openHelpModal('support')">Support</button>
        </div>
      </div>
    </div>
    <nav class="main-nav" id="main-nav">
      <div class="container">
        <a href="index.html" class="nav-logo">aura<span>.</span></a>
        <ul class="nav-links" id="nav-links">
          <li><a href="index.html" class="${activePage === 'home' ? 'active' : ''}">Home</a></li>
          <li><a href="shop.html" class="${activePage === 'shop' ? 'active' : ''}">Shop</a></li>
          <li><a href="blog.html" class="${activePage === 'blog' ? 'active' : ''}">Blog</a></li>
          <li><a href="about.html" class="${activePage === 'about' ? 'active' : ''}">About</a></li>
        </ul>
        <div class="nav-right">
          ${authHtml}
          <a href="wishlist.html" class="nav-cart-link ${activePage === 'wishlist' ? 'active' : ''}" aria-label="Wishlist">
            ♡ <span class="wishlist-count" style="display:${wishlistCount > 0 ? 'flex' : 'none'}">${wishlistCount}</span>
          </a>
          <a href="cart.html" class="nav-cart-link" aria-label="Cart">
            🛒 <span class="cart-count" style="display:${cartCount > 0 ? 'flex' : 'none'}">${cartCount}</span>
          </a>
          <a href="shop.html" class="nav-cta">Shop Now</a>
        </div>
        <button class="nav-menu-btn" id="nav-menu-btn" aria-label="Open menu">☰</button>
      </div>
    </nav>
  `;
}

window.SOCIAL_LINKS_HTML = `
  <div class="footer-socials">
    <a href="https://instagram.com/aurabotanics" target="_blank" rel="noopener noreferrer" class="footer-social-link" aria-label="Instagram">
      <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
    </a>
    <a href="https://facebook.com/aurabotanics" target="_blank" rel="noopener noreferrer" class="footer-social-link" aria-label="Facebook">
      <svg viewBox="0 0 24 24" fill="currentColor"><path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.312h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z"/></svg>
    </a>
    <a href="https://x.com/aurabotanics" target="_blank" rel="noopener noreferrer" class="footer-social-link" aria-label="X (Twitter)">
      <svg viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
    </a>
    <a href="https://youtube.com/aurabotanics" target="_blank" rel="noopener noreferrer" class="footer-social-link" aria-label="YouTube">
      <svg viewBox="0 0 24 24" fill="currentColor"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.5 12 3.5 12 3.5s-7.505 0-9.377.55a3.016 3.016 0 0 0-2.122 2.136C0 8.07 0 12 0 12s0 3.93.501 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.55 9.377.55 9.377.55s7.505 0 9.377-.55a3.016 3.016 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
    </a>
    <a href="https://pinterest.com/aurabotanics" target="_blank" rel="noopener noreferrer" class="footer-social-link" aria-label="Pinterest">
      <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.162-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.401.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.951-7.252 4.168 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.354-.629-2.758-1.379l-.749 2.848c-.269 1.045-1.004 2.352-1.498 3.146 1.123.345 2.306.535 3.55.535 6.607 0 11.985-5.365 11.985-11.987C23.97 5.367 18.592 0 12.017 0z"/></svg>
    </a>
  </div>
`;

function renderFooter() {
  console.log("Rendering Footer with Social Links...");
  return `
    <!-- Location Map -->
    <section class="footer-location" style="padding: 60px 0 20px;">
      <div class="container">
        <h3 style="font-family:var(--ff-heading); font-size:24px; margin-bottom:16px;">Our Location</h3>
        <div class="map-wrapper" style="border-radius:var(--radius-md); overflow:hidden; border:1px solid var(--border-light); height:300px;">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14232.887640244675!2d75.7915!3d26.895!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db444a5!2sTonk%20Phatak%2C%20Jaipur%2C%20Rajasthan!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin" 
            width="100%" height="100%" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade">
          </iframe>
        </div>
      </div>
    </section>

    <footer class="footer">
      <div class="container">
        <div class="footer-grid">
          <div class="footer-about">
            <div class="footer-brand">aura<span>.</span></div>
            <p class="footer-desc">Clinical-grade luxury skincare formulated with rare botanicals. Vegan, cruelty-free, and dermatologist-approved.</p>
            ${window.SOCIAL_LINKS_HTML}
          </div>
          <div class="footer-col">
            <h4>Shop</h4>
            <ul>
              <li><a href="shop.html">All Products</a></li>
              <li><a href="product.html?id=radiance-serum">Radiance Serum</a></li>
              <li><a href="product.html?id=hydra-moisturizer">Hydra Moisturizer</a></li>
              <li><a href="product.html?id=eye-revival">Eye Revival Cream</a></li>
            </ul>
          </div>
          <div class="footer-col">
            <h4>Company</h4>
            <ul>
              <li><a href="about.html#our-story">Our Story</a></li>
              <li><a href="blog.html">Journal / Blog</a></li>
              <li><a href="about.html#ingredients">Ingredients</a></li>
              <li><a href="about.html#clinical-results">Clinical Results</a></li>
              <li><a href="about.html#sustainability">Sustainability</a></li>
            </ul>
          </div>
          <div class="footer-col">
            <h4>Support</h4>
            <ul>
              <li><a href="support.html#contact-us">Contact Us</a></li>
              <li><a href="support.html#shipping-returns">Shipping & Returns</a></li>
              <li><a href="support.html#faq">FAQ</a></li>
              <li><a href="support.html#track-order">Track Order</a></li>
            </ul>
          </div>
        </div>
        <div class="footer-bottom">
          <p>&copy; 2026 Aura Botanics. All rights reserved.</p>
          <div class="footer-links">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
            <a href="#">Accessibility</a>
          </div>
        </div>
      </div>
    </footer>

    <!-- Help Modal -->
    <div class="help-modal-overlay" id="help-modal" style="display:none; position:fixed; inset:0; background:rgba(0,0,0,0.5); z-index:9999; align-items:center; justify-content:center; padding:24px;" onclick="if(event.target===this) closeHelpModal()">
      <div class="help-modal-content" style="background:#fff; border-radius:var(--radius-sm); padding:32px; width:100%; max-width:400px; box-shadow:var(--shadow-deep); position:relative;">
        <div class="help-modal-header" style="display:flex; justify-content:space-between; align-items:center; margin-bottom:20px;">
          <h4 style="font-family:var(--ff-heading); font-size:22px; margin:0;">Customer Support</h4>
          <button class="close-help-btn" onclick="closeHelpModal()" style="background:none; border:none; font-size:20px; color:#888; cursor:pointer;">✕</button>
        </div>
        <div class="help-modal-body">
          <div id="help-options-container">
            <p style="margin-bottom:16px; color:#555; font-size:14px;">How can we help you today?</p>
            <div class="help-options" style="display:flex; flex-direction:column; gap:10px;">
              <button class="help-opt-btn" onclick="showHelpForm('Product Return Related')" style="padding:12px; text-align:left; background:#f9f9f9; border:1px solid var(--border-light); border-radius:8px; cursor:pointer; font-weight:500;">📦 Product Return</button>
              <button class="help-opt-btn" onclick="showHelpForm('Delivery Related')" style="padding:12px; text-align:left; background:#f9f9f9; border:1px solid var(--border-light); border-radius:8px; cursor:pointer; font-weight:500;">🚚 Delivery Issues</button>
              <button class="help-opt-btn" onclick="showHelpForm('Product Expiry')" style="padding:12px; text-align:left; background:#f9f9f9; border:1px solid var(--border-light); border-radius:8px; cursor:pointer; font-weight:500;">⚠️ Product Expiry</button>
              <button class="help-opt-btn" onclick="showHelpForm('Other Query')" style="padding:12px; text-align:left; background:#f9f9f9; border:1px solid var(--border-light); border-radius:8px; cursor:pointer; font-weight:500;">💬 Other Query</button>
            </div>
          </div>
          <form id="help-query-form" style="display:none;" onsubmit="submitHelpQuery(event)">
            <input type="hidden" id="help-subject" value="" />
            <p id="help-subject-display" style="font-weight:600; margin-bottom:12px; color:var(--charcoal); font-size:15px;"></p>
            <textarea id="help-textarea" rows="4" style="width:100%; padding:12px; border:1px solid var(--border-light); border-radius:8px; margin-bottom:16px; font-family:var(--ff-body); font-size:14px; resize:vertical;" placeholder="Describe your query..." required></textarea>
            <div style="display:flex; gap:12px;">
              <button type="button" style="flex:1; padding:10px; border:1px solid #ccc; background:transparent; border-radius:8px; cursor:pointer; font-weight:600; color:#555;" onclick="hideHelpForm()">Back</button>
              <button type="submit" class="btn-primary" style="flex:2; padding:10px; width:auto;">Send Query</button>
            </div>
          </form>
          <div id="help-success-msg" style="display:none; text-align:center; padding:20px 0; color:#22c55e;">
            <div style="font-size:40px; margin-bottom:12px;">✓</div>
            <strong style="font-size:18px; color:var(--charcoal);">Query Sent Successfully!</strong>
            <p style="font-size:14px; color:#666; margin-top:8px;">Our support team will get back to you within 24 hours.</p>
          </div>
        </div>
      </div>
    </div>
  `;
}

// ─── Mobile Nav Init ───────────────────────────────────────
function initMobileNav() {
  const menuBtn = document.getElementById('nav-menu-btn');
  const navLinks = document.getElementById('nav-links');
  const overlay = document.getElementById('mobile-overlay');
  if (!menuBtn || !navLinks) return;

  let menuOpen = false;
  function toggleMenu(open) {
    menuOpen = typeof open === 'boolean' ? open : !menuOpen;
    if (menuOpen) {
      navLinks.style.display = 'flex';
      navLinks.style.flexDirection = 'column';
      navLinks.style.position = 'absolute';
      navLinks.style.top = '80px';
      navLinks.style.left = '0';
      navLinks.style.right = '0';
      navLinks.style.transform = 'none';
      navLinks.style.background = 'rgba(253,252,248,.97)';
      navLinks.style.backdropFilter = 'blur(12px)';
      navLinks.style.padding = '24px';
      navLinks.style.gap = '20px';
      navLinks.style.boxShadow = '0 8px 24px rgba(0,0,0,.08)';
      navLinks.style.borderRadius = '0 0 24px 24px';
      navLinks.style.zIndex = '99';
      menuBtn.textContent = '✕';
      if (overlay) overlay.classList.add('active');
      document.body.style.overflow = 'hidden';
    } else {
      navLinks.removeAttribute('style');
      menuBtn.textContent = '☰';
      if (overlay) overlay.classList.remove('active');
      document.body.style.overflow = '';
    }
  }

  menuBtn.addEventListener('click', () => toggleMenu());
  if (overlay) overlay.addEventListener('click', () => toggleMenu(false));
  document.addEventListener('keydown', e => { if (e.key === 'Escape' && menuOpen) toggleMenu(false); });
  window.addEventListener('resize', () => { if (window.innerWidth > 768 && menuOpen) toggleMenu(false); });
}

// ─── Init on all pages ─────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  Cart.updateUI();
  initMobileNav();

  // Scroll-reveal
  const obs = new IntersectionObserver((entries) => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); obs.unobserve(e.target); } });
  }, { threshold: 0.1 });
  document.querySelectorAll('.animate-in').forEach(el => obs.observe(el));
});

// ─── Help Modal Logic ──────────────────────────────────────
window.openHelpModal = function(type = 'help') {
  if (!localStorage.getItem('aura_session')) {
    window.location.href = 'auth.html';
    return;
  }
  
  document.getElementById('help-modal').style.display = 'flex';
  hideHelpForm();
  document.getElementById('help-success-msg').style.display = 'none';
  document.getElementById('help-options-container').style.display = 'block';
  
  const title = document.querySelector('#help-modal h4');
  const optionsList = document.querySelector('.help-options');
  
  if (type === 'support') {
    title.textContent = 'Customer Support';
    optionsList.innerHTML = `
      <a href="support.html#contact-us" class="help-opt-link" style="text-decoration:none; color:inherit; padding:12px; text-align:left; background:#f9f9f9; border:1px solid var(--border-light); border-radius:8px; cursor:pointer; font-weight:500; display:flex; align-items:center; gap:10px;">✉️ Contact Us</a>
      <a href="support.html#shipping-returns" class="help-opt-link" style="text-decoration:none; color:inherit; padding:12px; text-align:left; background:#f9f9f9; border:1px solid var(--border-light); border-radius:8px; cursor:pointer; font-weight:500; display:flex; align-items:center; gap:10px;">🚚 Shipping & Returns</a>
      <a href="support.html#faq" class="help-opt-link" style="text-decoration:none; color:inherit; padding:12px; text-align:left; background:#f9f9f9; border:1px solid var(--border-light); border-radius:8px; cursor:pointer; font-weight:500; display:flex; align-items:center; gap:10px;">❓ FAQ</a>
      <a href="support.html#track-order" class="help-opt-link" style="text-decoration:none; color:inherit; padding:12px; text-align:left; background:#f9f9f9; border:1px solid var(--border-light); border-radius:8px; cursor:pointer; font-weight:500; display:flex; align-items:center; gap:10px;">📦 Track Order</a>
    `;
  } else {
    title.textContent = 'Product Help';
    optionsList.innerHTML = `
      <button class="help-opt-btn" onclick="showHelpForm('Product Return Related')" style="padding:12px; text-align:left; background:#f9f9f9; border:1px solid var(--border-light); border-radius:8px; cursor:pointer; font-weight:500;">📦 Product Return</button>
      <button class="help-opt-btn" onclick="showHelpForm('Delivery Related')" style="padding:12px; text-align:left; background:#f9f9f9; border:1px solid var(--border-light); border-radius:8px; cursor:pointer; font-weight:500;">🚚 Delivery Issues</button>
      <button class="help-opt-btn" onclick="showHelpForm('Product Expiry')" style="padding:12px; text-align:left; background:#f9f9f9; border:1px solid var(--border-light); border-radius:8px; cursor:pointer; font-weight:500;">⚠️ Product Expiry</button>
      <button class="help-opt-btn" onclick="showHelpForm('Other Query')" style="padding:12px; text-align:left; background:#f9f9f9; border:1px solid var(--border-light); border-radius:8px; cursor:pointer; font-weight:500;">💬 Other Query</button>
    `;
  }
  
  document.body.style.overflow = 'hidden';
};

window.closeHelpModal = function() {
  document.getElementById('help-modal').style.display = 'none';
  document.body.style.overflow = '';
};

window.showHelpForm = function(subject) {
  document.getElementById('help-options-container').style.display = 'none';
  document.getElementById('help-query-form').style.display = 'block';
  document.getElementById('help-subject').value = subject;
  document.getElementById('help-subject-display').textContent = 'Subject: ' + subject;
  document.getElementById('help-textarea').value = '';
};

window.hideHelpForm = function() {
  document.getElementById('help-query-form').style.display = 'none';
  document.getElementById('help-options-container').style.display = 'block';
};

window.submitHelpQuery = function(e) {
  e.preventDefault();
  // Simulate API call
  document.getElementById('help-query-form').style.display = 'none';
  document.getElementById('help-success-msg').style.display = 'block';
  setTimeout(() => {
    closeHelpModal();
  }, 3000);
};

// ─── Page Initialization ─────────────────────────────────────
function initPage() {
  const path = window.location.pathname;
  const isHome = path === '/' || path.endsWith('index.html');
  const isShop = path.includes('shop.html');
  const isProduct = path.includes('product.html');
  const isBlog = path.includes('blog.html');
  const isAuth = path.includes('auth.html');
  const isAccount = path.includes('account.html');
  const isCart = path.includes('cart.html');
  const isWishlist = path.includes('wishlist.html');

  // Common UI
  const navContainer = document.getElementById('site-nav');
  const footerContainer = document.getElementById('site-footer');
  
  if (navContainer) {
    const active = isHome ? 'home' : isShop ? 'shop' : isBlog ? 'blog' : isAuth ? 'auth' : '';
    navContainer.innerHTML = renderNav(active);
    initMobileNav();
  }
  
  if (footerContainer) {
    footerContainer.innerHTML = renderFooter();
  }

  // Page Specifics
  if (isShop) initShop();
  if (isProduct) initProduct();
  if (isBlog) initBlog();
  if (isAuth) initAuth();
  if (isAccount) initAccount();
  if (isCart) initCart();
  if (isWishlist) initWishlist();
}

function initShop() {
  const container = document.getElementById('shop-grid');
  if (!container) return;
  
  const render = (items) => {
    container.innerHTML = items.length ? items.map(p => renderProductCard(p)).join('') : '<p class="no-results">No products found.</p>';
    // Re-trigger observer for new cards
    document.querySelectorAll('.product-card').forEach(c => {
      c.style.opacity = '1';
      c.style.transform = 'none';
    });
  };

  render(PRODUCTS);

  // Filters
  document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const cat = btn.dataset.category;
      render(cat === 'all' ? PRODUCTS : PRODUCTS.filter(p => p.category === cat));
    });
  });
}

function initProduct() {
  const params = new URLSearchParams(window.location.search);
  const id = params.get('id');
  const p = getProductById(id) || PRODUCTS[0];
  
  const container = document.getElementById('product-detail-container');
  if (!container) return;

  container.innerHTML = `
    <div class="product-detail-grid">
      <div class="product-detail-visual">
        <img src="${p.image}" alt="${p.name}" class="main-img" />
      </div>
      <div class="product-detail-info">
        <p class="eyebrow">${p.category}</p>
        <h1>${p.name}</h1>
        <div class="rating-row">${renderStars(p.rating)} (${p.reviews} reviews)</div>
        <div class="price-row"><span class="current">$${p.price}</span><span class="old">$${p.originalPrice}</span></div>
        <p class="desc">${p.description}</p>
        <button class="btn-primary" onclick="Cart.add('${p.id}')">Add to Cart</button>
        <div class="extra-info">
          <h3>How to use</h3>
          <p>${p.howToUse}</p>
          <h3>Key Ingredients</h3>
          <p>${p.ingredients}</p>
        </div>
      </div>
    </div>
  `;
}

function initBlog() {
  const container = document.getElementById('blog-grid');
  if (!container) return;
  container.innerHTML = BLOGS.map(b => `
    <article class="blog-card">
      <img src="${b.image}" alt="${b.title}" />
      <div class="blog-card-body">
        <span class="cat">${b.category}</span>
        <h3>${b.title}</h3>
        <p>${b.excerpt}</p>
        <a href="article.html?id=${b.id}" class="read-more">Read More →</a>
      </div>
    </article>
  `).join('');
}

// Run everything on load
document.addEventListener('DOMContentLoaded', initPage);

// Expose functions to window for global access
window.renderNav = renderNav;
window.renderFooter = renderFooter;
window.initMobileNav = initMobileNav;
window.Cart = Cart;
window.Wishlist = Wishlist;
window.Auth = Auth;
window.Orders = Orders;
window.PRODUCTS = PRODUCTS;
window.BLOGS = BLOGS;
window.initPage = initPage;
