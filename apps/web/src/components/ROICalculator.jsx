import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { TrendingUp, Home, DollarSign, Percent } from 'lucide-react';

function ROICalculator() {
  const [propertyPrice, setPropertyPrice] = useState('');
  const [appreciation, setAppreciation] = useState('');
  const [rentalIncome, setRentalIncome] = useState('');
  const [results, setResults] = useState(null);

  const calculateROI = () => {
    const price = parseFloat(propertyPrice);
    const appreciationRate = parseFloat(appreciation) / 100;
    const monthlyRent = parseFloat(rentalIncome);

    if (!price || !appreciationRate || !monthlyRent) {
      return;
    }

    const annualRent = monthlyRent * 12;
    const rentalYield = (annualRent / price) * 100;
    
    const year1Value = price * (1 + appreciationRate);
    const year3Value = price * Math.pow(1 + appreciationRate, 3);
    const year5Value = price * Math.pow(1 + appreciationRate, 5);

    const year1Gain = year1Value - price;
    const year3Gain = year3Value - price;
    const year5Gain = year5Value - price;

    const year1TotalReturn = year1Gain + annualRent;
    const year3TotalReturn = year3Gain + (annualRent * 3);
    const year5TotalReturn = year5Gain + (annualRent * 5);

    const year1ROI = (year1TotalReturn / price) * 100;
    const year3ROI = (year3TotalReturn / price) * 100;
    const year5ROI = (year5TotalReturn / price) * 100;

    setResults({
      rentalYield: rentalYield.toFixed(2),
      year1: {
        value: year1Value.toFixed(0),
        gain: year1Gain.toFixed(0),
        totalReturn: year1TotalReturn.toFixed(0),
        roi: year1ROI.toFixed(2)
      },
      year3: {
        value: year3Value.toFixed(0),
        gain: year3Gain.toFixed(0),
        totalReturn: year3TotalReturn.toFixed(0),
        roi: year3ROI.toFixed(2)
      },
      year5: {
        value: year5Value.toFixed(0),
        gain: year5Gain.toFixed(0),
        totalReturn: year5TotalReturn.toFixed(0),
        roi: year5ROI.toFixed(2)
      }
    });
  };

  const formatCurrency = (value) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0
    }).format(value);
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <TrendingUp className="w-5 h-5 text-accent" />
          Property Investment ROI Calculator
        </CardTitle>
        <CardDescription>
          Calculate potential returns on your property investment
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="space-y-2">
            <Label htmlFor="propertyPrice" className="flex items-center gap-2">
              <Home className="w-4 h-4" />
              Property Price (₹)
            </Label>
            <Input
              id="propertyPrice"
              type="number"
              value={propertyPrice}
              onChange={(e) => setPropertyPrice(e.target.value)}
              placeholder="e.g., 5000000"
              className="text-foreground"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="appreciation" className="flex items-center gap-2">
              <Percent className="w-4 h-4" />
              Annual Appreciation (%)
            </Label>
            <Input
              id="appreciation"
              type="number"
              value={appreciation}
              onChange={(e) => setAppreciation(e.target.value)}
              placeholder="e.g., 8"
              className="text-foreground"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="rentalIncome" className="flex items-center gap-2">
              <DollarSign className="w-4 h-4" />
              Monthly Rent (₹)
            </Label>
            <Input
              id="rentalIncome"
              type="number"
              value={rentalIncome}
              onChange={(e) => setRentalIncome(e.target.value)}
              placeholder="e.g., 25000"
              className="text-foreground"
            />
          </div>
        </div>

        <Button 
          onClick={calculateROI} 
          className="w-full transition-all duration-200 active:scale-[0.98]"
        >
          Calculate Returns
        </Button>

        {results && (
          <div className="space-y-4 pt-6 border-t">
            <div className="bg-muted p-4 rounded-xl">
              <p className="text-sm text-muted-foreground mb-1">Annual Rental Yield</p>
              <p className="text-2xl font-bold text-accent">{results.rentalYield}%</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-card p-4 rounded-xl border">
                <p className="text-sm font-medium mb-3">After 1 Year</p>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Property Value:</span>
                    <span className="font-medium">{formatCurrency(results.year1.value)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Capital Gain:</span>
                    <span className="font-medium text-accent">{formatCurrency(results.year1.gain)}</span>
                  </div>
                  <div className="flex justify-between pt-2 border-t">
                    <span className="font-medium">Total ROI:</span>
                    <span className="font-bold text-accent">{results.year1.roi}%</span>
                  </div>
                </div>
              </div>

              <div className="bg-card p-4 rounded-xl border">
                <p className="text-sm font-medium mb-3">After 3 Years</p>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Property Value:</span>
                    <span className="font-medium">{formatCurrency(results.year3.value)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Capital Gain:</span>
                    <span className="font-medium text-accent">{formatCurrency(results.year3.gain)}</span>
                  </div>
                  <div className="flex justify-between pt-2 border-t">
                    <span className="font-medium">Total ROI:</span>
                    <span className="font-bold text-accent">{results.year3.roi}%</span>
                  </div>
                </div>
              </div>

              <div className="bg-card p-4 rounded-xl border">
                <p className="text-sm font-medium mb-3">After 5 Years</p>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Property Value:</span>
                    <span className="font-medium">{formatCurrency(results.year5.value)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Capital Gain:</span>
                    <span className="font-medium text-accent">{formatCurrency(results.year5.gain)}</span>
                  </div>
                  <div className="flex justify-between pt-2 border-t">
                    <span className="font-medium">Total ROI:</span>
                    <span className="font-bold text-accent">{results.year5.roi}%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
}

export default ROICalculator;
