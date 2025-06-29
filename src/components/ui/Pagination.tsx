import { leftArrowLineIcon, rightArrowLineIcon } from '@/asserts/icons'
import React from 'react'

export default function Pagination() {
  return (
    <>
      <div>
              <div className="flex items-center justify-between mt-8">
                <p className="text-base font-medium text-textSecondary/40">
                  01 page of 300
                </p>
                <div>
                  <div className="flex items-center space-x-2">
                    <div>
                      <button className="flex items-center justify-center space-x-2 bg-bgButton/5 rounded-xl p-4 text-black/20 w-44 relative">
                        <span>Next</span>
                        <span className="absolute left-5">{leftArrowLineIcon}</span>
                      </button>
                    </div>
                    <div>
                      <span className="text-textSecondary py-4 px-6 rounded-xl mx-5 border">
                        01
                      </span>
                    </div>
                    <div>
                      <button className="flex items-center justify-center space-x-2 bg-bgButton rounded-xl p-4 text-white w-44 relative">
                        <span>Next</span>
                        <span className="absolute right-5">{rightArrowLineIcon}</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
    </>
  )
}
