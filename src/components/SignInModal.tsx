
import React, { useState } from 'react';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogFooter } from './ui/dialog';
import { Input } from './ui/input';
import { Button } from './ui/button';
import { Label } from './ui/label';
import { useToast } from '../hooks/use-toast';

interface SignInModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export const SignInModal: React.FC<SignInModalProps> = ({ open, onOpenChange }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isSignUp, setIsSignUp] = useState(false);
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // In a real application, you would authenticate with a backend service
    // For now, we'll just show a success toast
    toast({
      title: isSignUp ? "Account created!" : "Signed in successfully!",
      description: isSignUp 
        ? "Your account has been created. Welcome to CoWorkSpot!" 
        : "Welcome back to CoWorkSpot!",
    });
    
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>{isSignUp ? 'Create an account' : 'Sign in to your account'}</DialogTitle>
          <DialogDescription>
            {isSignUp 
              ? 'Enter your details to create a new account' 
              : 'Enter your credentials to access your account'}
          </DialogDescription>
        </DialogHeader>
        
        <form onSubmit={handleSubmit} className="space-y-4 py-4">
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input 
              id="email" 
              type="email" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="your.email@example.com" 
              required 
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="password">Password</Label>
            <Input 
              id="password" 
              type="password" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required 
            />
          </div>
          
          {isSignUp && (
            <div className="space-y-2">
              <Label htmlFor="confirmPassword">Confirm Password</Label>
              <Input 
                id="confirmPassword" 
                type="password" 
                required={isSignUp} 
              />
            </div>
          )}
          
          <DialogFooter className="pt-4">
            <Button type="submit" className="w-full">
              {isSignUp ? 'Create Account' : 'Sign In'}
            </Button>
          </DialogFooter>
        </form>
        
        <div className="text-center text-sm">
          <p className="text-muted-foreground">
            {isSignUp ? 'Already have an account?' : "Don't have an account?"}
            <button
              type="button"
              onClick={() => setIsSignUp(!isSignUp)}
              className="ml-1 text-primary hover:underline"
            >
              {isSignUp ? 'Sign in' : 'Create one'}
            </button>
          </p>
          
          {!isSignUp && (
            <button
              type="button"
              className="mt-2 text-primary hover:underline text-sm"
            >
              Forgot password?
            </button>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};
