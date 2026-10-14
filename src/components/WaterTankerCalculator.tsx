"use client";

import React, { useState, useMemo } from "react";
import {
  HiCalculator,
  HiTruck,
  HiCalendarDays,
  HiInformationCircle,
  HiExclamationTriangle,
  HiArrowRight,
  HiSparkles,
} from "react-icons/hi2";

export default function WaterTankerCalculator() {
  // Inputs
  const [dailyNeed, setDailyNeed] = useState<number>(1000);
  const [tankCapacity] = useState<number>(5000);
  const [pricePerTank, setPricePerTank] = useState<number>(450000);
  const [projectionYears, setProjectionYears] = useState<5 | 10 | 25>(10);

  // Calculations
  const calculations = useMemo(() => {
    const monthlyVolume = dailyNeed * 30;
    const tanksPerMonth = monthlyVolume / tankCapacity;
    const monthlyCost = tanksPerMonth * pricePerTank;
    const yearlyCost = monthlyCost * 12;
    const projectedCost = yearlyCost * projectionYears;

    const cost5Years = yearlyCost * 5;
    const cost10Years = yearlyCost * 10;
    const cost25Years = yearlyCost * 25;

    return {
      monthlyVolume,
      tanksPerMonth,
      monthlyCost,
      yearlyCost,
      projectedCost,
      cost5Years,
      cost10Years,
      cost25Years,
    };
  }, [dailyNeed, tankCapacity, pricePerTank, projectionYears]);

  // Deterministic Currency Formatter (IDR) to guarantee 100% server-client match
  const formatIDR = (value: number) => {
    return `IDR ${Math.round(value)
      .toString()
      .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`;
  };

  // Deterministic Number Formatter
  const formatNumber = (value: number) => {
    return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  const presets = [
    { label: "Private Villa", value: 1000, desc: "± 2-3 Bedrooms" },
    { label: "Luxury Villa", value: 3000, desc: "± 4-6 Beds + Pool" },
    { label: "Boutique Resort", value: 5000, desc: "± 8-12 Suites" },
    { label: "Hotel / Commercial", value: 10000, desc: "Large Facility" },
  ];

  return (
    <section
      id="tanker-calculator"
      className="relative py-12 sm:py-20 bg-warm-white text-deep-navy overflow-hidden"
    >
      {/* Decorative ambient lights */}
      <div className="absolute top-1/4 left-0 -ml-20 w-80 h-80 rounded-full bg-engineering-blue/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 -mr-20 w-80 h-80 rounded-full bg-engineering-blue-light/5 blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-4xl mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-engineering-blue/10 border border-engineering-blue/20 text-engineering-blue text-xs font-bold tracking-wider uppercase mb-4">
            <HiCalculator className="w-4 h-4 text-engineering-blue shrink-0" />
            <span>Water Tanker Cost Calculator</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-deep-navy leading-[1.15] tracking-tight mb-4">
            How much are you spending on water delivery?
          </h1>

          <p className="text-sm sm:text-base lg:text-lg text-gray-700 leading-relaxed font-normal">
            A practical calculator to estimate long-term expenditures on
            commercial water tanker deliveries. Adjust your daily water demand
            (liters), price per 5,000-liter tanker, and projection horizon (5,
            10, or 25 years). Results show monthly volume, equivalent tanker
            truckloads, estimated monthly/annual costs, and cumulative multi-year
            projections.
          </p>
        </div>

        {/* Main Calculator Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-12">
          {/* Controls Column (lg:col-span-6) */}
          <div className="lg:col-span-6 bg-white rounded-3xl p-6 sm:p-8 shadow-xl border border-gray-100/90 space-y-7">
            <div>
              <h2 className="text-base sm:text-lg font-bold text-deep-navy mb-1 flex items-center gap-2">
                <HiSparkles className="w-5 h-5 text-engineering-blue" />
                <span>Simulation Parameters</span>
              </h2>
              <p className="text-xs text-gray-500">
                Configure your consumption profile below to calculate water
                tanker logistics and lifetime expenses.
              </p>
            </div>

            {/* Quick Presets */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-2.5">
                Quick Demand Presets
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {presets.map((preset) => (
                  <button
                    key={preset.value}
                    type="button"
                    onClick={() => setDailyNeed(preset.value)}
                    className={`p-2.5 rounded-xl text-left border transition-all ${
                      dailyNeed === preset.value
                        ? "bg-deep-navy text-white border-deep-navy shadow-sm"
                        : "bg-gray-50 text-gray-700 border-gray-200 hover:bg-gray-100"
                    }`}
                  >
                    <div className="text-[11px] font-bold truncate">
                      {preset.label}
                    </div>
                    <div
                      className={`text-[10px] mt-0.5 ${
                        dailyNeed === preset.value
                          ? "text-engineering-blue-light"
                          : "text-gray-500"
                      }`}
                    >
                      {formatNumber(preset.value)} L/day
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Parameter 1: Daily Water Demand */}
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <label className="text-xs font-bold uppercase tracking-wider text-gray-600">
                  Daily Water Demand
                </label>
                <div className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-gray-100 border border-gray-200">
                  <input
                    type="number"
                    min="100"
                    max="50000"
                    step="100"
                    value={dailyNeed}
                    onChange={(e) =>
                      setDailyNeed(Math.max(0, Number(e.target.value)))
                    }
                    className="w-20 bg-transparent text-right text-xs font-extrabold text-deep-navy focus:outline-none"
                  />
                  <span className="text-[11px] font-semibold text-gray-500">
                    L/day
                  </span>
                </div>
              </div>

              {/* Slider */}
              <input
                type="range"
                min="500"
                max="20000"
                step="500"
                value={dailyNeed}
                onChange={(e) => setDailyNeed(Number(e.target.value))}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-engineering-blue"
              />
              <div className="flex justify-between text-[10px] font-medium text-gray-400">
                <span>500 L/day</span>
                <span>10,000 L/day</span>
                <span>20,000 L/day</span>
              </div>
            </div>

            {/* Parameter 2: Tanker Capacity & Price per Tanker */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2 border-t border-gray-100">
              {/* Tank Capacity (Standard) */}
              <div className="space-y-1.5">
                <label className="text-xs font-bold uppercase tracking-wider text-gray-600 block">
                  Tanker Capacity
                </label>
                <div className="flex items-center justify-between p-3 rounded-xl bg-gray-50 border border-gray-200 text-xs text-gray-700">
                  <span className="flex items-center gap-2 font-medium">
                    <HiTruck className="w-4 h-4 text-engineering-blue" />
                    Standard Truck
                  </span>
                  <span className="font-extrabold text-deep-navy">
                    5,000 Liters
                  </span>
                </div>
              </div>

              {/* Price per 5,000L Tanker */}
              <div className="space-y-1.5">
                <label className="text-xs font-bold uppercase tracking-wider text-gray-600 block">
                  Price per Tanker (5,000 L)
                </label>
                <div className="flex items-center gap-1.5 p-2.5 rounded-xl bg-gray-50 border border-gray-200 focus-within:border-engineering-blue focus-within:bg-white transition-colors">
                  <span className="text-xs font-bold text-gray-400 pl-1">
                    IDR
                  </span>
                  <input
                    type="number"
                    min="100000"
                    max="2000000"
                    step="25000"
                    value={pricePerTank}
                    onChange={(e) =>
                      setPricePerTank(Math.max(0, Number(e.target.value)))
                    }
                    className="w-full bg-transparent text-right text-xs font-extrabold text-deep-navy focus:outline-none pr-1"
                  />
                </div>
              </div>
            </div>

            {/* Parameter 3: Projection Horizon */}
            <div className="space-y-2 pt-2 border-t border-gray-100">
              <label className="text-xs font-bold uppercase tracking-wider text-gray-600 block">
                Projection Horizon
              </label>
              <div className="grid grid-cols-3 gap-2.5">
                {([5, 10, 25] as const).map((years) => (
                  <button
                    key={years}
                    type="button"
                    onClick={() => setProjectionYears(years)}
                    className={`py-2.5 px-3 rounded-xl font-bold text-xs transition-all flex items-center justify-center gap-1.5 ${
                      projectionYears === years
                        ? "bg-engineering-blue text-white shadow-md shadow-engineering-blue/20"
                        : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                    }`}
                  >
                    <HiCalendarDays className="w-4 h-4" />
                    <span>{years} Years</span>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Results Dashboard Column (lg:col-span-6) */}
          <div className="lg:col-span-6 space-y-6">
            {/* Grand Total Highlight Banner */}
            <div className="rounded-3xl bg-gradient-to-br from-deep-navy via-deep-navy to-engineering-blue text-white p-6 sm:p-8 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 -mr-12 -mt-12 w-48 h-48 rounded-full bg-engineering-blue-light/20 blur-2xl pointer-events-none" />

              <div className="relative z-10 space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-extrabold uppercase tracking-widest text-engineering-blue-light px-3 py-1 rounded-full bg-white/10 backdrop-blur-md">
                    PROJECTED EXPENSE ({projectionYears} YEARS)
                  </span>
                  <span className="text-xs font-medium text-gray-300">
                    Delivered Water Tankers
                  </span>
                </div>

                <div>
                  <span className="text-xs text-gray-300 font-light block mb-1">
                    Cumulative Water Delivery Cost ({projectionYears} Years)
                  </span>
                  <div className="text-2.5xl sm:text-4xl lg:text-4.5xl font-black text-white tracking-tight leading-none drop-shadow-md">
                    {formatIDR(calculations.projectedCost)}
                  </div>
                </div>

                {/* Multi-year Timeline Comparison */}
                <div className="pt-4 border-t border-white/15 space-y-2">
                  <div className="text-[11px] font-semibold text-gray-300 flex justify-between">
                    <span>Cumulative Timeline Comparison:</span>
                  </div>
                  <div className="grid grid-cols-3 gap-2 text-center">
                    <div
                      className={`p-2 rounded-xl transition-all ${
                        projectionYears === 5
                          ? "bg-white/20 border border-white/30"
                          : "bg-white/5"
                      }`}
                    >
                      <div className="text-[10px] text-gray-300">5 Years</div>
                      <div className="text-xs font-bold text-white mt-0.5">
                        {formatIDR(calculations.cost5Years)}
                      </div>
                    </div>

                    <div
                      className={`p-2 rounded-xl transition-all ${
                        projectionYears === 10
                          ? "bg-white/20 border border-white/30"
                          : "bg-white/5"
                      }`}
                    >
                      <div className="text-[10px] text-gray-300">10 Years</div>
                      <div className="text-xs font-bold text-white mt-0.5">
                        {formatIDR(calculations.cost10Years)}
                      </div>
                    </div>

                    <div
                      className={`p-2 rounded-xl transition-all ${
                        projectionYears === 25
                          ? "bg-white/20 border border-white/30"
                          : "bg-white/5"
                      }`}
                    >
                      <div className="text-[10px] text-gray-300">25 Years</div>
                      <div className="text-xs font-bold text-white mt-0.5">
                        {formatIDR(calculations.cost25Years)}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Metrics Breakdown Cards */}
            <div className="grid grid-cols-2 gap-4">
              {/* Metric 1: Monthly Demand */}
              <div className="p-4 sm:p-5 rounded-2xl bg-white border border-gray-100 shadow-sm">
                <span className="text-[11px] font-bold text-gray-400 uppercase tracking-wider block mb-1">
                  Monthly Demand
                </span>
                <div className="text-lg sm:text-xl font-extrabold text-deep-navy">
                  {formatNumber(calculations.monthlyVolume)}{" "}
                  <span className="text-xs font-medium text-gray-500">
                    Liters
                  </span>
                </div>
                <span className="text-[10px] text-gray-400 mt-0.5 block">
                  {formatNumber(dailyNeed)} L/day × 30 days
                </span>
              </div>

              {/* Metric 2: Equivalent Tankers */}
              <div className="p-4 sm:p-5 rounded-2xl bg-white border border-gray-100 shadow-sm">
                <span className="text-[11px] font-bold text-gray-400 uppercase tracking-wider block mb-1">
                  Equivalent Tankers
                </span>
                <div className="text-lg sm:text-xl font-extrabold text-engineering-blue flex items-baseline gap-1">
                  <span>
                    {calculations.tanksPerMonth % 1 === 0
                      ? calculations.tanksPerMonth
                      : calculations.tanksPerMonth.toFixed(1)}
                  </span>
                  <span className="text-xs font-medium text-gray-500">
                    Trucks / mo
                  </span>
                </div>
                <span className="text-[10px] text-gray-400 mt-0.5 block">
                  5,000 L / tanker truck
                </span>
              </div>

              {/* Metric 3: Monthly Cost */}
              <div className="p-4 sm:p-5 rounded-2xl bg-white border border-gray-100 shadow-sm">
                <span className="text-[11px] font-bold text-gray-400 uppercase tracking-wider block mb-1">
                  Monthly Cost
                </span>
                <div className="text-base sm:text-lg font-extrabold text-deep-navy">
                  {formatIDR(calculations.monthlyCost)}
                </div>
                <span className="text-[10px] text-gray-400 mt-0.5 block">
                  Equivalent tankers × price
                </span>
              </div>

              {/* Metric 4: Annual Cost */}
              <div className="p-4 sm:p-5 rounded-2xl bg-white border border-gray-100 shadow-sm">
                <span className="text-[11px] font-bold text-gray-400 uppercase tracking-wider block mb-1">
                  Annual Cost
                </span>
                <div className="text-base sm:text-lg font-extrabold text-deep-navy">
                  {formatIDR(calculations.yearlyCost)}
                </div>
                <span className="text-[10px] text-gray-400 mt-0.5 block">
                  Monthly cost × 12 months
                </span>
              </div>
            </div>

            {/* Direct CTA */}
            <div className="p-5 rounded-2xl bg-engineering-blue/5 border border-engineering-blue/15 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <h3 className="text-xs sm:text-sm font-bold text-deep-navy">
                  Evaluating independent on-site water security?
                </h3>
                <p className="text-xs text-gray-600 mt-0.5">
                  Discuss groundwater feasibility, geoelectric investigation,
                  and borehole drilling for your property.
                </p>
              </div>
              <a
                href="/#contact"
                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full bg-deep-navy hover:bg-engineering-blue text-white text-xs font-bold tracking-wider uppercase transition-colors shrink-0"
              >
                <span>Consult Our Engineers</span>
                <HiArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>

        {/* Informational Notes & Disclaimers in English */}
        <div className="space-y-3.5">
          {/* Note 1: Baseline Simulation Parameters */}
          <div className="p-4 sm:p-5 rounded-2xl bg-white border border-gray-200/80 text-xs text-gray-600 flex items-start gap-3 shadow-2xs">
            <HiInformationCircle className="w-5 h-5 text-engineering-blue shrink-0 mt-0.5" />
            <p className="leading-relaxed">
              <strong className="text-deep-navy">
                Initial Simulation Assumptions:
              </strong>{" "}
              Assumes a baseline consumption of 1,000 liters/day, 5,000
              liters/tanker capacity, and IDR 450,000/tanker. This price figure
              is derived from calculation examples in the former PT Sheena
              Sempurna Indonesia company profile (pages 5–8) and does not
              represent an active quotation or recent market rate survey.
            </p>
          </div>

          {/* Note 2: Calculator Disclaimers & Logistics */}
          <div className="p-4 sm:p-5 rounded-2xl bg-white border border-gray-200/80 text-xs text-gray-600 flex items-start gap-3 shadow-2xs">
            <HiInformationCircle className="w-5 h-5 text-engineering-blue shrink-0 mt-0.5" />
            <p className="leading-relaxed">
              <strong className="text-deep-navy">Calculator Note:</strong>{" "}
              Results are illustrative estimates based on constant consumption
              and uniform pricing, excluding inflation, surcharges for expedited
              dispatch or difficult terrain, and purchase rounding to whole
              truckloads. For actual billing estimates, delivery quantities must
              be rounded up to full tanker capacities based on supplier terms.
            </p>
          </div>

          {/* Note 3: Technical Objectivity Disclaimer */}
          <div className="p-4 sm:p-5 rounded-2xl bg-amber-50/70 border border-amber-200/80 text-xs text-amber-900 flex items-start gap-3 shadow-2xs">
            <HiExclamationTriangle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
            <p className="leading-relaxed">
              <strong className="text-amber-950">
                Technical Objectivity Disclaimer:
              </strong>{" "}
              This calculator does not automatically imply that deep well
              drilling is more economical in every scenario. A meaningful
              comparison against borehole capital investment requires factoring
              in hydrogeological investigation, drilling depths, casing
              specifications, pumping electricity, maintenance, water
              treatment/filtration if needed, SIPA regulatory permitting, and
              actual site-specific water table yield.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
