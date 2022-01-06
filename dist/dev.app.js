/*! dev.app.js || Version: 5.1.127005 || Generated: Thu Jan 06 2022 11:51:31 GMT+0000 (Western European Standard Time) */
/******/ (function(modules) { // webpackBootstrap
/******/ 	function hotDisposeChunk(chunkId) {
/******/ 		delete installedChunks[chunkId];
/******/ 	}
/******/ 	var parentHotUpdateCallback = window["webpackHotUpdate"];
/******/ 	window["webpackHotUpdate"] = // eslint-disable-next-line no-unused-vars
/******/ 	function webpackHotUpdateCallback(chunkId, moreModules) {
/******/ 		hotAddUpdateChunk(chunkId, moreModules);
/******/ 		if (parentHotUpdateCallback) parentHotUpdateCallback(chunkId, moreModules);
/******/ 	} ;
/******/
/******/ 	// eslint-disable-next-line no-unused-vars
/******/ 	function hotDownloadUpdateChunk(chunkId) {
/******/ 		var script = document.createElement("script");
/******/ 		script.charset = "utf-8";
/******/ 		script.src = __webpack_require__.p + "" + chunkId + "." + hotCurrentHash + ".hot-update.js";
/******/ 		if (null) script.crossOrigin = null;
/******/ 		document.head.appendChild(script);
/******/ 	}
/******/
/******/ 	// eslint-disable-next-line no-unused-vars
/******/ 	function hotDownloadManifest(requestTimeout) {
/******/ 		requestTimeout = requestTimeout || 10000;
/******/ 		return new Promise(function(resolve, reject) {
/******/ 			if (typeof XMLHttpRequest === "undefined") {
/******/ 				return reject(new Error("No browser support"));
/******/ 			}
/******/ 			try {
/******/ 				var request = new XMLHttpRequest();
/******/ 				var requestPath = __webpack_require__.p + "" + hotCurrentHash + ".hot-update.json";
/******/ 				request.open("GET", requestPath, true);
/******/ 				request.timeout = requestTimeout;
/******/ 				request.send(null);
/******/ 			} catch (err) {
/******/ 				return reject(err);
/******/ 			}
/******/ 			request.onreadystatechange = function() {
/******/ 				if (request.readyState !== 4) return;
/******/ 				if (request.status === 0) {
/******/ 					// timeout
/******/ 					reject(
/******/ 						new Error("Manifest request to " + requestPath + " timed out.")
/******/ 					);
/******/ 				} else if (request.status === 404) {
/******/ 					// no update available
/******/ 					resolve();
/******/ 				} else if (request.status !== 200 && request.status !== 304) {
/******/ 					// other failure
/******/ 					reject(new Error("Manifest request to " + requestPath + " failed."));
/******/ 				} else {
/******/ 					// success
/******/ 					try {
/******/ 						var update = JSON.parse(request.responseText);
/******/ 					} catch (e) {
/******/ 						reject(e);
/******/ 						return;
/******/ 					}
/******/ 					resolve(update);
/******/ 				}
/******/ 			};
/******/ 		});
/******/ 	}
/******/
/******/ 	var hotApplyOnUpdate = true;
/******/ 	// eslint-disable-next-line no-unused-vars
/******/ 	var hotCurrentHash = "6260309107a2b8a38117";
/******/ 	var hotRequestTimeout = 10000;
/******/ 	var hotCurrentModuleData = {};
/******/ 	var hotCurrentChildModule;
/******/ 	// eslint-disable-next-line no-unused-vars
/******/ 	var hotCurrentParents = [];
/******/ 	// eslint-disable-next-line no-unused-vars
/******/ 	var hotCurrentParentsTemp = [];
/******/
/******/ 	// eslint-disable-next-line no-unused-vars
/******/ 	function hotCreateRequire(moduleId) {
/******/ 		var me = installedModules[moduleId];
/******/ 		if (!me) return __webpack_require__;
/******/ 		var fn = function(request) {
/******/ 			if (me.hot.active) {
/******/ 				if (installedModules[request]) {
/******/ 					if (installedModules[request].parents.indexOf(moduleId) === -1) {
/******/ 						installedModules[request].parents.push(moduleId);
/******/ 					}
/******/ 				} else {
/******/ 					hotCurrentParents = [moduleId];
/******/ 					hotCurrentChildModule = request;
/******/ 				}
/******/ 				if (me.children.indexOf(request) === -1) {
/******/ 					me.children.push(request);
/******/ 				}
/******/ 			} else {
/******/ 				console.warn(
/******/ 					"[HMR] unexpected require(" +
/******/ 						request +
/******/ 						") from disposed module " +
/******/ 						moduleId
/******/ 				);
/******/ 				hotCurrentParents = [];
/******/ 			}
/******/ 			return __webpack_require__(request);
/******/ 		};
/******/ 		var ObjectFactory = function ObjectFactory(name) {
/******/ 			return {
/******/ 				configurable: true,
/******/ 				enumerable: true,
/******/ 				get: function() {
/******/ 					return __webpack_require__[name];
/******/ 				},
/******/ 				set: function(value) {
/******/ 					__webpack_require__[name] = value;
/******/ 				}
/******/ 			};
/******/ 		};
/******/ 		for (var name in __webpack_require__) {
/******/ 			if (
/******/ 				Object.prototype.hasOwnProperty.call(__webpack_require__, name) &&
/******/ 				name !== "e" &&
/******/ 				name !== "t"
/******/ 			) {
/******/ 				Object.defineProperty(fn, name, ObjectFactory(name));
/******/ 			}
/******/ 		}
/******/ 		fn.e = function(chunkId) {
/******/ 			if (hotStatus === "ready") hotSetStatus("prepare");
/******/ 			hotChunksLoading++;
/******/ 			return __webpack_require__.e(chunkId).then(finishChunkLoading, function(err) {
/******/ 				finishChunkLoading();
/******/ 				throw err;
/******/ 			});
/******/
/******/ 			function finishChunkLoading() {
/******/ 				hotChunksLoading--;
/******/ 				if (hotStatus === "prepare") {
/******/ 					if (!hotWaitingFilesMap[chunkId]) {
/******/ 						hotEnsureUpdateChunk(chunkId);
/******/ 					}
/******/ 					if (hotChunksLoading === 0 && hotWaitingFiles === 0) {
/******/ 						hotUpdateDownloaded();
/******/ 					}
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 		fn.t = function(value, mode) {
/******/ 			if (mode & 1) value = fn(value);
/******/ 			return __webpack_require__.t(value, mode & ~1);
/******/ 		};
/******/ 		return fn;
/******/ 	}
/******/
/******/ 	// eslint-disable-next-line no-unused-vars
/******/ 	function hotCreateModule(moduleId) {
/******/ 		var hot = {
/******/ 			// private stuff
/******/ 			_acceptedDependencies: {},
/******/ 			_declinedDependencies: {},
/******/ 			_selfAccepted: false,
/******/ 			_selfDeclined: false,
/******/ 			_selfInvalidated: false,
/******/ 			_disposeHandlers: [],
/******/ 			_main: hotCurrentChildModule !== moduleId,
/******/
/******/ 			// Module API
/******/ 			active: true,
/******/ 			accept: function(dep, callback) {
/******/ 				if (dep === undefined) hot._selfAccepted = true;
/******/ 				else if (typeof dep === "function") hot._selfAccepted = dep;
/******/ 				else if (typeof dep === "object")
/******/ 					for (var i = 0; i < dep.length; i++)
/******/ 						hot._acceptedDependencies[dep[i]] = callback || function() {};
/******/ 				else hot._acceptedDependencies[dep] = callback || function() {};
/******/ 			},
/******/ 			decline: function(dep) {
/******/ 				if (dep === undefined) hot._selfDeclined = true;
/******/ 				else if (typeof dep === "object")
/******/ 					for (var i = 0; i < dep.length; i++)
/******/ 						hot._declinedDependencies[dep[i]] = true;
/******/ 				else hot._declinedDependencies[dep] = true;
/******/ 			},
/******/ 			dispose: function(callback) {
/******/ 				hot._disposeHandlers.push(callback);
/******/ 			},
/******/ 			addDisposeHandler: function(callback) {
/******/ 				hot._disposeHandlers.push(callback);
/******/ 			},
/******/ 			removeDisposeHandler: function(callback) {
/******/ 				var idx = hot._disposeHandlers.indexOf(callback);
/******/ 				if (idx >= 0) hot._disposeHandlers.splice(idx, 1);
/******/ 			},
/******/ 			invalidate: function() {
/******/ 				this._selfInvalidated = true;
/******/ 				switch (hotStatus) {
/******/ 					case "idle":
/******/ 						hotUpdate = {};
/******/ 						hotUpdate[moduleId] = modules[moduleId];
/******/ 						hotSetStatus("ready");
/******/ 						break;
/******/ 					case "ready":
/******/ 						hotApplyInvalidatedModule(moduleId);
/******/ 						break;
/******/ 					case "prepare":
/******/ 					case "check":
/******/ 					case "dispose":
/******/ 					case "apply":
/******/ 						(hotQueuedInvalidatedModules =
/******/ 							hotQueuedInvalidatedModules || []).push(moduleId);
/******/ 						break;
/******/ 					default:
/******/ 						// ignore requests in error states
/******/ 						break;
/******/ 				}
/******/ 			},
/******/
/******/ 			// Management API
/******/ 			check: hotCheck,
/******/ 			apply: hotApply,
/******/ 			status: function(l) {
/******/ 				if (!l) return hotStatus;
/******/ 				hotStatusHandlers.push(l);
/******/ 			},
/******/ 			addStatusHandler: function(l) {
/******/ 				hotStatusHandlers.push(l);
/******/ 			},
/******/ 			removeStatusHandler: function(l) {
/******/ 				var idx = hotStatusHandlers.indexOf(l);
/******/ 				if (idx >= 0) hotStatusHandlers.splice(idx, 1);
/******/ 			},
/******/
/******/ 			//inherit from previous dispose call
/******/ 			data: hotCurrentModuleData[moduleId]
/******/ 		};
/******/ 		hotCurrentChildModule = undefined;
/******/ 		return hot;
/******/ 	}
/******/
/******/ 	var hotStatusHandlers = [];
/******/ 	var hotStatus = "idle";
/******/
/******/ 	function hotSetStatus(newStatus) {
/******/ 		hotStatus = newStatus;
/******/ 		for (var i = 0; i < hotStatusHandlers.length; i++)
/******/ 			hotStatusHandlers[i].call(null, newStatus);
/******/ 	}
/******/
/******/ 	// while downloading
/******/ 	var hotWaitingFiles = 0;
/******/ 	var hotChunksLoading = 0;
/******/ 	var hotWaitingFilesMap = {};
/******/ 	var hotRequestedFilesMap = {};
/******/ 	var hotAvailableFilesMap = {};
/******/ 	var hotDeferred;
/******/
/******/ 	// The update info
/******/ 	var hotUpdate, hotUpdateNewHash, hotQueuedInvalidatedModules;
/******/
/******/ 	function toModuleId(id) {
/******/ 		var isNumber = +id + "" === id;
/******/ 		return isNumber ? +id : id;
/******/ 	}
/******/
/******/ 	function hotCheck(apply) {
/******/ 		if (hotStatus !== "idle") {
/******/ 			throw new Error("check() is only allowed in idle status");
/******/ 		}
/******/ 		hotApplyOnUpdate = apply;
/******/ 		hotSetStatus("check");
/******/ 		return hotDownloadManifest(hotRequestTimeout).then(function(update) {
/******/ 			if (!update) {
/******/ 				hotSetStatus(hotApplyInvalidatedModules() ? "ready" : "idle");
/******/ 				return null;
/******/ 			}
/******/ 			hotRequestedFilesMap = {};
/******/ 			hotWaitingFilesMap = {};
/******/ 			hotAvailableFilesMap = update.c;
/******/ 			hotUpdateNewHash = update.h;
/******/
/******/ 			hotSetStatus("prepare");
/******/ 			var promise = new Promise(function(resolve, reject) {
/******/ 				hotDeferred = {
/******/ 					resolve: resolve,
/******/ 					reject: reject
/******/ 				};
/******/ 			});
/******/ 			hotUpdate = {};
/******/ 			var chunkId = "app";
/******/ 			// eslint-disable-next-line no-lone-blocks
/******/ 			{
/******/ 				hotEnsureUpdateChunk(chunkId);
/******/ 			}
/******/ 			if (
/******/ 				hotStatus === "prepare" &&
/******/ 				hotChunksLoading === 0 &&
/******/ 				hotWaitingFiles === 0
/******/ 			) {
/******/ 				hotUpdateDownloaded();
/******/ 			}
/******/ 			return promise;
/******/ 		});
/******/ 	}
/******/
/******/ 	// eslint-disable-next-line no-unused-vars
/******/ 	function hotAddUpdateChunk(chunkId, moreModules) {
/******/ 		if (!hotAvailableFilesMap[chunkId] || !hotRequestedFilesMap[chunkId])
/******/ 			return;
/******/ 		hotRequestedFilesMap[chunkId] = false;
/******/ 		for (var moduleId in moreModules) {
/******/ 			if (Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				hotUpdate[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if (--hotWaitingFiles === 0 && hotChunksLoading === 0) {
/******/ 			hotUpdateDownloaded();
/******/ 		}
/******/ 	}
/******/
/******/ 	function hotEnsureUpdateChunk(chunkId) {
/******/ 		if (!hotAvailableFilesMap[chunkId]) {
/******/ 			hotWaitingFilesMap[chunkId] = true;
/******/ 		} else {
/******/ 			hotRequestedFilesMap[chunkId] = true;
/******/ 			hotWaitingFiles++;
/******/ 			hotDownloadUpdateChunk(chunkId);
/******/ 		}
/******/ 	}
/******/
/******/ 	function hotUpdateDownloaded() {
/******/ 		hotSetStatus("ready");
/******/ 		var deferred = hotDeferred;
/******/ 		hotDeferred = null;
/******/ 		if (!deferred) return;
/******/ 		if (hotApplyOnUpdate) {
/******/ 			// Wrap deferred object in Promise to mark it as a well-handled Promise to
/******/ 			// avoid triggering uncaught exception warning in Chrome.
/******/ 			// See https://bugs.chromium.org/p/chromium/issues/detail?id=465666
/******/ 			Promise.resolve()
/******/ 				.then(function() {
/******/ 					return hotApply(hotApplyOnUpdate);
/******/ 				})
/******/ 				.then(
/******/ 					function(result) {
/******/ 						deferred.resolve(result);
/******/ 					},
/******/ 					function(err) {
/******/ 						deferred.reject(err);
/******/ 					}
/******/ 				);
/******/ 		} else {
/******/ 			var outdatedModules = [];
/******/ 			for (var id in hotUpdate) {
/******/ 				if (Object.prototype.hasOwnProperty.call(hotUpdate, id)) {
/******/ 					outdatedModules.push(toModuleId(id));
/******/ 				}
/******/ 			}
/******/ 			deferred.resolve(outdatedModules);
/******/ 		}
/******/ 	}
/******/
/******/ 	function hotApply(options) {
/******/ 		if (hotStatus !== "ready")
/******/ 			throw new Error("apply() is only allowed in ready status");
/******/ 		options = options || {};
/******/ 		return hotApplyInternal(options);
/******/ 	}
/******/
/******/ 	function hotApplyInternal(options) {
/******/ 		hotApplyInvalidatedModules();
/******/
/******/ 		var cb;
/******/ 		var i;
/******/ 		var j;
/******/ 		var module;
/******/ 		var moduleId;
/******/
/******/ 		function getAffectedStuff(updateModuleId) {
/******/ 			var outdatedModules = [updateModuleId];
/******/ 			var outdatedDependencies = {};
/******/
/******/ 			var queue = outdatedModules.map(function(id) {
/******/ 				return {
/******/ 					chain: [id],
/******/ 					id: id
/******/ 				};
/******/ 			});
/******/ 			while (queue.length > 0) {
/******/ 				var queueItem = queue.pop();
/******/ 				var moduleId = queueItem.id;
/******/ 				var chain = queueItem.chain;
/******/ 				module = installedModules[moduleId];
/******/ 				if (
/******/ 					!module ||
/******/ 					(module.hot._selfAccepted && !module.hot._selfInvalidated)
/******/ 				)
/******/ 					continue;
/******/ 				if (module.hot._selfDeclined) {
/******/ 					return {
/******/ 						type: "self-declined",
/******/ 						chain: chain,
/******/ 						moduleId: moduleId
/******/ 					};
/******/ 				}
/******/ 				if (module.hot._main) {
/******/ 					return {
/******/ 						type: "unaccepted",
/******/ 						chain: chain,
/******/ 						moduleId: moduleId
/******/ 					};
/******/ 				}
/******/ 				for (var i = 0; i < module.parents.length; i++) {
/******/ 					var parentId = module.parents[i];
/******/ 					var parent = installedModules[parentId];
/******/ 					if (!parent) continue;
/******/ 					if (parent.hot._declinedDependencies[moduleId]) {
/******/ 						return {
/******/ 							type: "declined",
/******/ 							chain: chain.concat([parentId]),
/******/ 							moduleId: moduleId,
/******/ 							parentId: parentId
/******/ 						};
/******/ 					}
/******/ 					if (outdatedModules.indexOf(parentId) !== -1) continue;
/******/ 					if (parent.hot._acceptedDependencies[moduleId]) {
/******/ 						if (!outdatedDependencies[parentId])
/******/ 							outdatedDependencies[parentId] = [];
/******/ 						addAllToSet(outdatedDependencies[parentId], [moduleId]);
/******/ 						continue;
/******/ 					}
/******/ 					delete outdatedDependencies[parentId];
/******/ 					outdatedModules.push(parentId);
/******/ 					queue.push({
/******/ 						chain: chain.concat([parentId]),
/******/ 						id: parentId
/******/ 					});
/******/ 				}
/******/ 			}
/******/
/******/ 			return {
/******/ 				type: "accepted",
/******/ 				moduleId: updateModuleId,
/******/ 				outdatedModules: outdatedModules,
/******/ 				outdatedDependencies: outdatedDependencies
/******/ 			};
/******/ 		}
/******/
/******/ 		function addAllToSet(a, b) {
/******/ 			for (var i = 0; i < b.length; i++) {
/******/ 				var item = b[i];
/******/ 				if (a.indexOf(item) === -1) a.push(item);
/******/ 			}
/******/ 		}
/******/
/******/ 		// at begin all updates modules are outdated
/******/ 		// the "outdated" status can propagate to parents if they don't accept the children
/******/ 		var outdatedDependencies = {};
/******/ 		var outdatedModules = [];
/******/ 		var appliedUpdate = {};
/******/
/******/ 		var warnUnexpectedRequire = function warnUnexpectedRequire() {
/******/ 			console.warn(
/******/ 				"[HMR] unexpected require(" + result.moduleId + ") to disposed module"
/******/ 			);
/******/ 		};
/******/
/******/ 		for (var id in hotUpdate) {
/******/ 			if (Object.prototype.hasOwnProperty.call(hotUpdate, id)) {
/******/ 				moduleId = toModuleId(id);
/******/ 				/** @type {TODO} */
/******/ 				var result;
/******/ 				if (hotUpdate[id]) {
/******/ 					result = getAffectedStuff(moduleId);
/******/ 				} else {
/******/ 					result = {
/******/ 						type: "disposed",
/******/ 						moduleId: id
/******/ 					};
/******/ 				}
/******/ 				/** @type {Error|false} */
/******/ 				var abortError = false;
/******/ 				var doApply = false;
/******/ 				var doDispose = false;
/******/ 				var chainInfo = "";
/******/ 				if (result.chain) {
/******/ 					chainInfo = "\nUpdate propagation: " + result.chain.join(" -> ");
/******/ 				}
/******/ 				switch (result.type) {
/******/ 					case "self-declined":
/******/ 						if (options.onDeclined) options.onDeclined(result);
/******/ 						if (!options.ignoreDeclined)
/******/ 							abortError = new Error(
/******/ 								"Aborted because of self decline: " +
/******/ 									result.moduleId +
/******/ 									chainInfo
/******/ 							);
/******/ 						break;
/******/ 					case "declined":
/******/ 						if (options.onDeclined) options.onDeclined(result);
/******/ 						if (!options.ignoreDeclined)
/******/ 							abortError = new Error(
/******/ 								"Aborted because of declined dependency: " +
/******/ 									result.moduleId +
/******/ 									" in " +
/******/ 									result.parentId +
/******/ 									chainInfo
/******/ 							);
/******/ 						break;
/******/ 					case "unaccepted":
/******/ 						if (options.onUnaccepted) options.onUnaccepted(result);
/******/ 						if (!options.ignoreUnaccepted)
/******/ 							abortError = new Error(
/******/ 								"Aborted because " + moduleId + " is not accepted" + chainInfo
/******/ 							);
/******/ 						break;
/******/ 					case "accepted":
/******/ 						if (options.onAccepted) options.onAccepted(result);
/******/ 						doApply = true;
/******/ 						break;
/******/ 					case "disposed":
/******/ 						if (options.onDisposed) options.onDisposed(result);
/******/ 						doDispose = true;
/******/ 						break;
/******/ 					default:
/******/ 						throw new Error("Unexception type " + result.type);
/******/ 				}
/******/ 				if (abortError) {
/******/ 					hotSetStatus("abort");
/******/ 					return Promise.reject(abortError);
/******/ 				}
/******/ 				if (doApply) {
/******/ 					appliedUpdate[moduleId] = hotUpdate[moduleId];
/******/ 					addAllToSet(outdatedModules, result.outdatedModules);
/******/ 					for (moduleId in result.outdatedDependencies) {
/******/ 						if (
/******/ 							Object.prototype.hasOwnProperty.call(
/******/ 								result.outdatedDependencies,
/******/ 								moduleId
/******/ 							)
/******/ 						) {
/******/ 							if (!outdatedDependencies[moduleId])
/******/ 								outdatedDependencies[moduleId] = [];
/******/ 							addAllToSet(
/******/ 								outdatedDependencies[moduleId],
/******/ 								result.outdatedDependencies[moduleId]
/******/ 							);
/******/ 						}
/******/ 					}
/******/ 				}
/******/ 				if (doDispose) {
/******/ 					addAllToSet(outdatedModules, [result.moduleId]);
/******/ 					appliedUpdate[moduleId] = warnUnexpectedRequire;
/******/ 				}
/******/ 			}
/******/ 		}
/******/
/******/ 		// Store self accepted outdated modules to require them later by the module system
/******/ 		var outdatedSelfAcceptedModules = [];
/******/ 		for (i = 0; i < outdatedModules.length; i++) {
/******/ 			moduleId = outdatedModules[i];
/******/ 			if (
/******/ 				installedModules[moduleId] &&
/******/ 				installedModules[moduleId].hot._selfAccepted &&
/******/ 				// removed self-accepted modules should not be required
/******/ 				appliedUpdate[moduleId] !== warnUnexpectedRequire &&
/******/ 				// when called invalidate self-accepting is not possible
/******/ 				!installedModules[moduleId].hot._selfInvalidated
/******/ 			) {
/******/ 				outdatedSelfAcceptedModules.push({
/******/ 					module: moduleId,
/******/ 					parents: installedModules[moduleId].parents.slice(),
/******/ 					errorHandler: installedModules[moduleId].hot._selfAccepted
/******/ 				});
/******/ 			}
/******/ 		}
/******/
/******/ 		// Now in "dispose" phase
/******/ 		hotSetStatus("dispose");
/******/ 		Object.keys(hotAvailableFilesMap).forEach(function(chunkId) {
/******/ 			if (hotAvailableFilesMap[chunkId] === false) {
/******/ 				hotDisposeChunk(chunkId);
/******/ 			}
/******/ 		});
/******/
/******/ 		var idx;
/******/ 		var queue = outdatedModules.slice();
/******/ 		while (queue.length > 0) {
/******/ 			moduleId = queue.pop();
/******/ 			module = installedModules[moduleId];
/******/ 			if (!module) continue;
/******/
/******/ 			var data = {};
/******/
/******/ 			// Call dispose handlers
/******/ 			var disposeHandlers = module.hot._disposeHandlers;
/******/ 			for (j = 0; j < disposeHandlers.length; j++) {
/******/ 				cb = disposeHandlers[j];
/******/ 				cb(data);
/******/ 			}
/******/ 			hotCurrentModuleData[moduleId] = data;
/******/
/******/ 			// disable module (this disables requires from this module)
/******/ 			module.hot.active = false;
/******/
/******/ 			// remove module from cache
/******/ 			delete installedModules[moduleId];
/******/
/******/ 			// when disposing there is no need to call dispose handler
/******/ 			delete outdatedDependencies[moduleId];
/******/
/******/ 			// remove "parents" references from all children
/******/ 			for (j = 0; j < module.children.length; j++) {
/******/ 				var child = installedModules[module.children[j]];
/******/ 				if (!child) continue;
/******/ 				idx = child.parents.indexOf(moduleId);
/******/ 				if (idx >= 0) {
/******/ 					child.parents.splice(idx, 1);
/******/ 				}
/******/ 			}
/******/ 		}
/******/
/******/ 		// remove outdated dependency from module children
/******/ 		var dependency;
/******/ 		var moduleOutdatedDependencies;
/******/ 		for (moduleId in outdatedDependencies) {
/******/ 			if (
/******/ 				Object.prototype.hasOwnProperty.call(outdatedDependencies, moduleId)
/******/ 			) {
/******/ 				module = installedModules[moduleId];
/******/ 				if (module) {
/******/ 					moduleOutdatedDependencies = outdatedDependencies[moduleId];
/******/ 					for (j = 0; j < moduleOutdatedDependencies.length; j++) {
/******/ 						dependency = moduleOutdatedDependencies[j];
/******/ 						idx = module.children.indexOf(dependency);
/******/ 						if (idx >= 0) module.children.splice(idx, 1);
/******/ 					}
/******/ 				}
/******/ 			}
/******/ 		}
/******/
/******/ 		// Now in "apply" phase
/******/ 		hotSetStatus("apply");
/******/
/******/ 		if (hotUpdateNewHash !== undefined) {
/******/ 			hotCurrentHash = hotUpdateNewHash;
/******/ 			hotUpdateNewHash = undefined;
/******/ 		}
/******/ 		hotUpdate = undefined;
/******/
/******/ 		// insert new code
/******/ 		for (moduleId in appliedUpdate) {
/******/ 			if (Object.prototype.hasOwnProperty.call(appliedUpdate, moduleId)) {
/******/ 				modules[moduleId] = appliedUpdate[moduleId];
/******/ 			}
/******/ 		}
/******/
/******/ 		// call accept handlers
/******/ 		var error = null;
/******/ 		for (moduleId in outdatedDependencies) {
/******/ 			if (
/******/ 				Object.prototype.hasOwnProperty.call(outdatedDependencies, moduleId)
/******/ 			) {
/******/ 				module = installedModules[moduleId];
/******/ 				if (module) {
/******/ 					moduleOutdatedDependencies = outdatedDependencies[moduleId];
/******/ 					var callbacks = [];
/******/ 					for (i = 0; i < moduleOutdatedDependencies.length; i++) {
/******/ 						dependency = moduleOutdatedDependencies[i];
/******/ 						cb = module.hot._acceptedDependencies[dependency];
/******/ 						if (cb) {
/******/ 							if (callbacks.indexOf(cb) !== -1) continue;
/******/ 							callbacks.push(cb);
/******/ 						}
/******/ 					}
/******/ 					for (i = 0; i < callbacks.length; i++) {
/******/ 						cb = callbacks[i];
/******/ 						try {
/******/ 							cb(moduleOutdatedDependencies);
/******/ 						} catch (err) {
/******/ 							if (options.onErrored) {
/******/ 								options.onErrored({
/******/ 									type: "accept-errored",
/******/ 									moduleId: moduleId,
/******/ 									dependencyId: moduleOutdatedDependencies[i],
/******/ 									error: err
/******/ 								});
/******/ 							}
/******/ 							if (!options.ignoreErrored) {
/******/ 								if (!error) error = err;
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 				}
/******/ 			}
/******/ 		}
/******/
/******/ 		// Load self accepted modules
/******/ 		for (i = 0; i < outdatedSelfAcceptedModules.length; i++) {
/******/ 			var item = outdatedSelfAcceptedModules[i];
/******/ 			moduleId = item.module;
/******/ 			hotCurrentParents = item.parents;
/******/ 			hotCurrentChildModule = moduleId;
/******/ 			try {
/******/ 				__webpack_require__(moduleId);
/******/ 			} catch (err) {
/******/ 				if (typeof item.errorHandler === "function") {
/******/ 					try {
/******/ 						item.errorHandler(err);
/******/ 					} catch (err2) {
/******/ 						if (options.onErrored) {
/******/ 							options.onErrored({
/******/ 								type: "self-accept-error-handler-errored",
/******/ 								moduleId: moduleId,
/******/ 								error: err2,
/******/ 								originalError: err
/******/ 							});
/******/ 						}
/******/ 						if (!options.ignoreErrored) {
/******/ 							if (!error) error = err2;
/******/ 						}
/******/ 						if (!error) error = err;
/******/ 					}
/******/ 				} else {
/******/ 					if (options.onErrored) {
/******/ 						options.onErrored({
/******/ 							type: "self-accept-errored",
/******/ 							moduleId: moduleId,
/******/ 							error: err
/******/ 						});
/******/ 					}
/******/ 					if (!options.ignoreErrored) {
/******/ 						if (!error) error = err;
/******/ 					}
/******/ 				}
/******/ 			}
/******/ 		}
/******/
/******/ 		// handle errors in accept handlers and self accepted module load
/******/ 		if (error) {
/******/ 			hotSetStatus("fail");
/******/ 			return Promise.reject(error);
/******/ 		}
/******/
/******/ 		if (hotQueuedInvalidatedModules) {
/******/ 			return hotApplyInternal(options).then(function(list) {
/******/ 				outdatedModules.forEach(function(moduleId) {
/******/ 					if (list.indexOf(moduleId) < 0) list.push(moduleId);
/******/ 				});
/******/ 				return list;
/******/ 			});
/******/ 		}
/******/
/******/ 		hotSetStatus("idle");
/******/ 		return new Promise(function(resolve) {
/******/ 			resolve(outdatedModules);
/******/ 		});
/******/ 	}
/******/
/******/ 	function hotApplyInvalidatedModules() {
/******/ 		if (hotQueuedInvalidatedModules) {
/******/ 			if (!hotUpdate) hotUpdate = {};
/******/ 			hotQueuedInvalidatedModules.forEach(hotApplyInvalidatedModule);
/******/ 			hotQueuedInvalidatedModules = undefined;
/******/ 			return true;
/******/ 		}
/******/ 	}
/******/
/******/ 	function hotApplyInvalidatedModule(moduleId) {
/******/ 		if (!Object.prototype.hasOwnProperty.call(hotUpdate, moduleId))
/******/ 			hotUpdate[moduleId] = modules[moduleId];
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {},
/******/ 			hot: hotCreateModule(moduleId),
/******/ 			parents: (hotCurrentParentsTemp = hotCurrentParents, hotCurrentParents = [], hotCurrentParentsTemp),
/******/ 			children: []
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, hotCreateRequire(moduleId));
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/dist/";
/******/
/******/ 	// __webpack_hash__
/******/ 	__webpack_require__.h = function() { return hotCurrentHash; };
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return hotCreateRequire("./src/app.js")(__webpack_require__.s = "./src/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ./components/index.scss */ "./src/components/index.scss");

//Import all JS files
const requireAll = r => r.keys().forEach(r);
requireAll(__webpack_require__("./src/components sync recursive \\.js$"));


/***/ }),

/***/ "./src/components sync recursive \\.js$":
/*!***********************************!*\
  !*** ./src/components sync \.js$ ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./00-settings/config.js": "./src/components/00-settings/config.js",
	"./05-components/layout/layout-base.js": "./src/components/05-components/layout/layout-base.js",
	"./05-components/layout/layout-blank.js": "./src/components/05-components/layout/layout-blank.js",
	"./05-components/layout/layout-emergency.js": "./src/components/05-components/layout/layout-emergency.js",
	"./05-components/layout/layout-popup.js": "./src/components/05-components/layout/layout-popup.js",
	"./05-components/v3-pat/actions-menu/scripts.js": "./src/components/05-components/v3-pat/actions-menu/scripts.js",
	"./05-components/v3-pat/button-link/scripts.js": "./src/components/05-components/v3-pat/button-link/scripts.js",
	"./05-components/v3-pat/card-charts/scripts.js": "./src/components/05-components/v3-pat/card-charts/scripts.js",
	"./05-components/v3-pat/collapsible-side-panel/scripts.js": "./src/components/05-components/v3-pat/collapsible-side-panel/scripts.js",
	"./05-components/v3-pat/comp-line/scripts.js": "./src/components/05-components/v3-pat/comp-line/scripts.js",
	"./05-components/v3-pat/country-phone/scripts.js": "./src/components/05-components/v3-pat/country-phone/scripts.js",
	"./05-components/v3-pat/data-tables/scripts.js": "./src/components/05-components/v3-pat/data-tables/scripts.js",
	"./05-components/v3-pat/datetime-range-picker/scripts.js": "./src/components/05-components/v3-pat/datetime-range-picker/scripts.js",
	"./05-components/v3-pat/drag-drop/scripts.js": "./src/components/05-components/v3-pat/drag-drop/scripts.js",
	"./05-components/v3-pat/dropdown-categories/scripts.js": "./src/components/05-components/v3-pat/dropdown-categories/scripts.js",
	"./05-components/v3-pat/dropzone/dropzone.js": "./src/components/05-components/v3-pat/dropzone/dropzone.js",
	"./05-components/v3-pat/expandable-link/scripts.js": "./src/components/05-components/v3-pat/expandable-link/scripts.js",
	"./05-components/v3-pat/fullscreen-tabs-wrapper/scripts.js": "./src/components/05-components/v3-pat/fullscreen-tabs-wrapper/scripts.js",
	"./05-components/v3-pat/generic-gallery/scripts.js": "./src/components/05-components/v3-pat/generic-gallery/scripts.js",
	"./05-components/v3-pat/generic-grid/scripts.js": "./src/components/05-components/v3-pat/generic-grid/scripts.js",
	"./05-components/v3-pat/horizontal-toolbar/scripts.js": "./src/components/05-components/v3-pat/horizontal-toolbar/scripts.js",
	"./05-components/v3-pat/hour-picker/scripts.js": "./src/components/05-components/v3-pat/hour-picker/scripts.js",
	"./05-components/v3-pat/input-lasa/scripts.js": "./src/components/05-components/v3-pat/input-lasa/scripts.js",
	"./05-components/v3-pat/input-with-clear/scripts.js": "./src/components/05-components/v3-pat/input-with-clear/scripts.js",
	"./05-components/v3-pat/input-with-list/scripts.js": "./src/components/05-components/v3-pat/input-with-list/scripts.js",
	"./05-components/v3-pat/line-add/scripts.js": "./src/components/05-components/v3-pat/line-add/scripts.js",
	"./05-components/v3-pat/line-details-expand-box/script.js": "./src/components/05-components/v3-pat/line-details-expand-box/script.js",
	"./05-components/v3-pat/location-box/scripts.js": "./src/components/05-components/v3-pat/location-box/scripts.js",
	"./05-components/v3-pat/main-interactive-card/scripts.js": "./src/components/05-components/v3-pat/main-interactive-card/scripts.js",
	"./05-components/v3-pat/menu-bar/scripts.js": "./src/components/05-components/v3-pat/menu-bar/scripts.js",
	"./05-components/v3-pat/multiple-selection-button/scripts.js": "./src/components/05-components/v3-pat/multiple-selection-button/scripts.js",
	"./05-components/v3-pat/panel/confirmation-panel.js": "./src/components/05-components/v3-pat/panel/confirmation-panel.js",
	"./05-components/v3-pat/panel/confirmation-popup.js": "./src/components/05-components/v3-pat/panel/confirmation-popup.js",
	"./05-components/v3-pat/panel/modal-popup.js": "./src/components/05-components/v3-pat/panel/modal-popup.js",
	"./05-components/v3-pat/panel/panel-by-id-notify.js": "./src/components/05-components/v3-pat/panel/panel-by-id-notify.js",
	"./05-components/v3-pat/panel/panel-by-id.js": "./src/components/05-components/v3-pat/panel/panel-by-id.js",
	"./05-components/v3-pat/panel/popup-menu.js": "./src/components/05-components/v3-pat/panel/popup-menu.js",
	"./05-components/v3-pat/panel/sapphire-panel.js": "./src/components/05-components/v3-pat/panel/sapphire-panel.js",
	"./05-components/v3-pat/panel/scripts.js": "./src/components/05-components/v3-pat/panel/scripts.js",
	"./05-components/v3-pat/patient-call-cancel/patient-call-cancel-structure.js": "./src/components/05-components/v3-pat/patient-call-cancel/patient-call-cancel-structure.js",
	"./05-components/v3-pat/patient-call-cancel/patient-call-cancel.js": "./src/components/05-components/v3-pat/patient-call-cancel/patient-call-cancel.js",
	"./05-components/v3-pat/person-card/scripts.js": "./src/components/05-components/v3-pat/person-card/scripts.js",
	"./05-components/v3-pat/prescription-card/scripts.js": "./src/components/05-components/v3-pat/prescription-card/scripts.js",
	"./05-components/v3-pat/prescription-expandable/scripts.js": "./src/components/05-components/v3-pat/prescription-expandable/scripts.js",
	"./05-components/v3-pat/sapphire-header/scripts.js": "./src/components/05-components/v3-pat/sapphire-header/scripts.js",
	"./05-components/v3-pat/sapphire-popup/scripts.js": "./src/components/05-components/v3-pat/sapphire-popup/scripts.js",
	"./05-components/v3-pat/sapphire-radio-button/scripts.js": "./src/components/05-components/v3-pat/sapphire-radio-button/scripts.js",
	"./05-components/v3-pat/scales/scale-main-structure.js": "./src/components/05-components/v3-pat/scales/scale-main-structure.js",
	"./05-components/v3-pat/scales/toggle-item-control.js": "./src/components/05-components/v3-pat/scales/toggle-item-control.js",
	"./05-components/v3-pat/search-and-select/select-ssd.js": "./src/components/05-components/v3-pat/search-and-select/select-ssd.js",
	"./05-components/v3-pat/search-and-select/ssd-search.js": "./src/components/05-components/v3-pat/search-and-select/ssd-search.js",
	"./05-components/v3-pat/searchable-client-side/scripts.js": "./src/components/05-components/v3-pat/searchable-client-side/scripts.js",
	"./05-components/v3-pat/section-expandable-custom/scripts.js": "./src/components/05-components/v3-pat/section-expandable-custom/scripts.js",
	"./05-components/v3-pat/section-expandable-inside/scripts.js": "./src/components/05-components/v3-pat/section-expandable-inside/scripts.js",
	"./05-components/v3-pat/select-system/scripts.js": "./src/components/05-components/v3-pat/select-system/scripts.js",
	"./05-components/v3-pat/shift-container/scripts.js": "./src/components/05-components/v3-pat/shift-container/scripts.js",
	"./05-components/v3-pat/shift-table/shiftTable.js": "./src/components/05-components/v3-pat/shift-table/shiftTable.js",
	"./05-components/v3-pat/shift-table/shiftTableCard.js": "./src/components/05-components/v3-pat/shift-table/shiftTableCard.js",
	"./05-components/v3-pat/shift-table/shiftTableCardProgress.js": "./src/components/05-components/v3-pat/shift-table/shiftTableCardProgress.js",
	"./05-components/v3-pat/shift-table/shiftTableHover.js": "./src/components/05-components/v3-pat/shift-table/shiftTableHover.js",
	"./05-components/v3-pat/side-menu/scripts.js": "./src/components/05-components/v3-pat/side-menu/scripts.js",
	"./05-components/v3-pat/sidebar/sidebar-structure.js": "./src/components/05-components/v3-pat/sidebar/sidebar-structure.js",
	"./05-components/v3-pat/small-box-selectable/scripts.js": "./src/components/05-components/v3-pat/small-box-selectable/scripts.js",
	"./05-components/v3-pat/spinner-horizontal/scripts.js": "./src/components/05-components/v3-pat/spinner-horizontal/scripts.js",
	"./05-components/v3-pat/spinner-vertical/scripts.js": "./src/components/05-components/v3-pat/spinner-vertical/scripts.js",
	"./05-components/v3-pat/split-button/scripts.js": "./src/components/05-components/v3-pat/split-button/scripts.js",
	"./05-components/v3-pat/ssd-component-block/scripts.js": "./src/components/05-components/v3-pat/ssd-component-block/scripts.js",
	"./05-components/v3-pat/ssd-list-line/scripts.js": "./src/components/05-components/v3-pat/ssd-list-line/scripts.js",
	"./05-components/v3-pat/table-form/scripts.js": "./src/components/05-components/v3-pat/table-form/scripts.js",
	"./05-components/v3-pat/tabs-extended/scripts.js": "./src/components/05-components/v3-pat/tabs-extended/scripts.js",
	"./05-components/v3-pat/tabular-list/scripts.js": "./src/components/05-components/v3-pat/tabular-list/scripts.js",
	"./05-components/v3-pat/tabular-scroll/scripts.js": "./src/components/05-components/v3-pat/tabular-scroll/scripts.js",
	"./05-components/v3-pat/timeline/scripts.js": "./src/components/05-components/v3-pat/timeline/scripts.js",
	"./05-components/v3-pat/trigger-iframe-tooltip/trigger-iframe-tooltip.js": "./src/components/05-components/v3-pat/trigger-iframe-tooltip/trigger-iframe-tooltip.js",
	"./05-components/v3-pat/truncated-content/scripts.js": "./src/components/05-components/v3-pat/truncated-content/scripts.js",
	"./08-pages/clinicianWorkArea.js": "./src/components/08-pages/clinicianWorkArea.js",
	"./08-pages/eSignature.js": "./src/components/08-pages/eSignature.js",
	"./08-pages/remoteAppointment.js": "./src/components/08-pages/remoteAppointment.js",
	"./globals.js": "./src/components/globals.js"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./src/components sync recursive \\.js$";

/***/ }),

/***/ "./src/components/00-settings/config.js":
/*!**********************************************!*\
  !*** ./src/components/00-settings/config.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

SapphireWidgets = window.SapphireWidgets = window.SapphireWidgets || {};


/***/ }),

/***/ "./src/components/05-components/layout/layout-base.js":
/*!************************************************************!*\
  !*** ./src/components/05-components/layout/layout-base.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* Component LayoutBase */
(function($, window, document, SapphireWidgets) {
	var create = function(config) {
		window[config.widgetId] = new LayoutBase(config);
		SapphireWidgets.LayoutBase.widgetId = config.widgetId;
	};

	var openSidebarIframe = function(duration) {
		window[SapphireWidgets.LayoutBase.widgetId].openSidebarIframe(duration);
	};

	var closeSidebarIframe = function(duration) {
		window[SapphireWidgets.LayoutBase.widgetId].closeSidebarIframe(duration);
	};

	var scrollToElement = function($element, offset = 0) {
		var $targetElement = $element;

		if (!!$targetElement.length) {
			var scrollToOffsetInterval;

			scrollToOffsetInterval = setInterval(function() {
				if (window[SapphireWidgets.LayoutBase.widgetId].getThresholds().secondaryThreshold > 0) {
					clearInterval(scrollToOffsetInterval);

					let targetElementOffsetTop = $targetElement.offset().top;

					const isFixed = $('.LayoutBase-secondary').hasClass('isFixed');
					const isEmergency = !!$('.LayoutBase-emergency').text();

					const headerHeight = $('.SapphireHeader').height();
					const secondaryHeight = $('.LayoutBase-secondary').outerHeight();
					const emergencyHeight = isEmergency ? $('.LayoutBase-emergency').height() : 0;

					//const secondaryFixed = isFixed ? secondaryHeight : secondaryHeight - 26;
					targetElementOffsetTop = targetElementOffsetTop - (headerHeight + secondaryHeight + emergencyHeight);

					$('body, html').scrollTop(targetElementOffsetTop - 16);
				}
			}, 250);
		}
	};

	var LayoutBase = function(config) {
		var _this = this;
		this.layoutBaseRedrawTimer = 0;
		this.hasHeader = config.hasHeader;
		this.isExpandable = config.isExpandable;
		this.isTopWindow = window.top === window.self ? true : false;
		this.$widget = $('#' + config.widgetId);
		this.$wrapper = this.$widget.find('.LayoutBase-Wrapper');
		this.$spacer = this.$widget.find('.LayoutBase-spacer');
		this.$mainMenu = this.$widget.find('.LayoutBase-MainMenu');
		this.$header = this.$widget.find('.LayoutBase-header');
		this.$headerBody = this.$widget.find('.SapphireHeader-body');
		this.$primaryMenu = this.$widget.find('.LayoutBase-primary-menu');
		this.$emergency = this.$widget.find('.LayoutBase-emergency');
		this.$secondary = this.$widget.find('.LayoutBase-secondary');
		this.$secondaryMenu = this.$widget.find('.LayoutBase-secondary-menu');
		this.$iframeSidebar = this.$widget.find('.LayoutBase-iframesidebar');
		this.$headerAdditionalContent = this.$widget.find('.SapphireHeader-additional-content');
		this.$topfixedContent = this.$widget.find('.LayoutBase-topfixedcontent');
		this.$bottomfixedContent = this.$widget.find('.LayoutBase-bottomfixedcontent');
		this.$mainContent = this.$widget.find('.LayoutBase-MainContent');
		this.extraPaddingEmergency = 0;
		this.extraPaddingSecondary = 0;
		this.setupWindowEvents();
		this.$iframeSidebar.append('<div class="lds-ring 1"><div></div><div></div><div></div><div></div></div>');

		$(function() {
			$('body').addClass('LayoutBase');
			if (_this.isTopWindow) {
				$('body').css('overflow-y', 'scroll');
			}
		});

		$(window).load(function() {
			$('body').click();
			$(window).scroll();

			_this.$iframeSidebar.find('.lds-ring').fadeOut();
		});
	};

	LayoutBase.prototype.setupWindowEvents = function() {
		var _this = this;
		var cursorPositon = 0;

		$(window).resize(function() {
			_this.updateThresholds();
			_this.handleOptionalContainers();
			_this.handleLayoutTopPadding();
			_this.handleLayoutBottomPadding();
		});

		$(window).scroll(function() {
			var newPosition = $(window).scrollTop();

			window.clearTimeout(_this.layoutBaseRedrawTimer);
			_this.layoutBaseRedrawTimer = window.setTimeout(function() {
				_this.updateThresholds();
				_this.handleOptionalContainers();
				_this.handleLayoutTopPadding();
				_this.handleLayoutBottomPadding();
				_this.handleManageQueueCard(cursorPositon, newPosition);
				cursorPositon = newPosition;
			}, 100);
		});
	};

	LayoutBase.prototype.handleOptionalContainers = function() {
		/*const scrollTop = $(window).scrollTop();
		const isEmergency = !!$('.LayoutBase-emergency').text();*/
	};

	LayoutBase.prototype.handleLayoutTopPadding = function() {
		var paddingTop = this.contentThreshold + this.extraPaddingEmergency + this.extraPaddingSecondary;
		this.$spacer.stop().animate(
			{
				height: paddingTop,
			},
			0,
			'linear'
		);
		if (this.$topfixedContent.length === 1) {
			this.$topfixedContent.css({
				width: $('.LayoutBase-MainContent').width(),
				top: this.topfixedContentThreshold + 'px',
			});
		}
	};

	LayoutBase.prototype.handleLayoutBottomPadding = function() {
		if (this.$bottomfixedContent.length === 1) {
			if ($('body')[0].scrollHeight > $('body').height()) {
				var bottomFixedHeight = this.$bottomfixedContent.outerHeight(true);
				this.$wrapper.addClass('hasFixedBottom').css('padding-bottom', bottomFixedHeight + 'px');
				this.$bottomfixedContent.css({
					width: $('.LayoutBase-MainContent').outerWidth(true),
				});
			} else {
				this.$wrapper.removeClass('hasFixedBottom').css('padding-bottom', '');
				this.$bottomfixedContent.css({
					width: '',
				});
			}
		}
	};

	LayoutBase.prototype.updateThresholds = function() {
		var mainMenuHeight = this.$mainMenu.outerHeight(true) || 0;
		var headerBodyHeight = this.$headerBody.outerHeight(true) || this.$header.outerHeight(true) || 0;
		var topfixedContentHeight = this.$topfixedContent.outerHeight(true) || 0;
		var primaryMenuHeight = this.$primaryMenu.outerHeight(true) || 0;
		var emergencyHeight = this.$emergency.outerHeight(true) || 0;
		this.topfixedContentThreshold = mainMenuHeight + headerBodyHeight;
		this.contentThreshold = mainMenuHeight + headerBodyHeight + topfixedContentHeight;
		this.emergencyThreshold = mainMenuHeight + headerBodyHeight + topfixedContentHeight + primaryMenuHeight;
		this.secondaryThreshold =
			mainMenuHeight + headerBodyHeight + topfixedContentHeight + primaryMenuHeight + emergencyHeight;
	};

	LayoutBase.prototype.getThresholds = function() {
		return {
			topfixedContentThreshold: this.topfixedContentThreshold,
			contentThreshold: this.contentThreshold,
			emergencyThreshold: this.emergencyThreshold,
			secondaryThreshold: this.secondaryThreshold,
		};
	};

	LayoutBase.prototype.openSidebarIframe = function(duration_in) {
		var duration = duration_in >= 0 ? duration_in : 100;
		this.$iframeSidebar.animate(
			{
				width: '100%',
			},
			duration
		);
		$('body')
			.css('overflow-y', 'scroll')
			.click();
	};

	LayoutBase.prototype.closeSidebarIframe = function(duration_in) {
		var duration = duration_in >= 0 ? duration_in : 100;
		var targetWidth = this.isExpandable ? 40 : 262;
		this.$iframeSidebar.animate(
			{
				width: targetWidth,
			},
			duration
		);
		$('body').css('overflow-y', 'scroll');
	};

	LayoutBase.prototype.handleManageQueueCard = function(cursorPositon, newPosition) {
		const $manageQueue = $('.ManageQueueContainer');

		if ($manageQueue.length) {
			if (newPosition > cursorPositon) {
				$manageQueue.addClass('ManageQueueContainer--closed');
			} else if (newPosition < cursorPositon) {
				$manageQueue.removeClass('ManageQueueContainer--closed');
			}
		}
	};

	SapphireWidgets.LayoutBase = {
		create,
		closeSidebarIframe,
		openSidebarIframe,
		scrollToElement,
	};
})(jQuery, window, document, SapphireWidgets);


/***/ }),

/***/ "./src/components/05-components/layout/layout-blank.js":
/*!*************************************************************!*\
  !*** ./src/components/05-components/layout/layout-blank.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* Component LayoutBlank */
$(function () {
	if (window.frameElement) {
		if (!!$(this.frameElement).closest('.MainInteractiveCard').length) {
			$('.LayoutBlank.Page').addClass('MainInteractiveCard');
		}
	}
});

/***/ }),

/***/ "./src/components/05-components/layout/layout-emergency.js":
/*!*****************************************************************!*\
  !*** ./src/components/05-components/layout/layout-emergency.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function($, window, document, SapphireWidgets) {
	const ForwardPatientComponent = () => {
		const $allOptions = $('.ForwardLocationsContent');
		const $multiple = $('.ForwardLocationsDiv');
		const $single = $('.SingleLocation');

		$('body').mouseup(function(e) {
			const notClickInAllOptions = !$allOptions.is(e.target) && $allOptions.has(e.target).length === 0;
			const notClickInMultiple = !$multiple.is(e.target) && $multiple.has(e.target).length === 0;
			const notClickInSingle = !$single.is(e.target) && $single.has(e.target).length === 0;
			const isOpen = $multiple.is(':visible');

			if (notClickInAllOptions && notClickInMultiple && notClickInSingle && isOpen) {
				$multiple.click();
			}
		});
	};

	SapphireWidgets.LayoutEmergency = {
		ForwardPatientComponent,
	};
})(jQuery, window, document, SapphireWidgets);


/***/ }),

/***/ "./src/components/05-components/layout/layout-popup.js":
/*!*************************************************************!*\
  !*** ./src/components/05-components/layout/layout-popup.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* Component LayoutPopup */
(function($, window, document, SapphireWidgets) {
	var popupWidth;
	var popupMinWidth;
	var popupHeight;
	var popupMinHeight;
	var popupMaxHeight;
	var popupWidthPercentage;
	var layoutPopupResizeTimer;

	var $popup = $('.LayoutPopup');
	var $osPopup = window.parent.$('.os-internal-Popup.os-internal-ui-dialog');
	var $osPopupContent = window.parent.$('.os-internal-ui-dialog-content.os-internal-ui-widget-content');
	var $overlay = window.parent.$('.os-internal-ui-widget-overlay');
	var popupSize;
	var paddingBody;

	const BODY_PADDING_TOP_BOTTOM = 32;

	const create = function(config) {
		SapphireWidgets.LayoutPopup.config = config;
		popupSize = SapphireWidgets.LayoutPopup.config.PopupSize;
		paddingBody = config.noContentPadding ? 0 : BODY_PADDING_TOP_BOTTOM;

		$(function() {
			$('body').addClass('LayoutPopup'); // because datetimerangepicker is attached to body

			if (SapphireWidgets.LayoutPopup.config.isTouch) {
				$popup.addClass('isTouch');
				$('body').addClass('isTouch'); // because select2 is attached to body
			}

			var observer = new MutationObserver(function(mutations) {
				mutations.forEach(function(mutation, index) {
					// Avoid to redraw the dialog if it is one the following popups
					if (
						SapphireWidgets.PopupsToAvoidMutations &&
						SapphireWidgets.PopupsToAvoidMutations.some(e => $(`.${e}`).length)
					) {
						return false;
					}

					redrawDialogWindow();
				});
			});

			observer.observe(document.body, {
				childList: true,
				subtree: true,
				attributes: false,
			});

			$('body').css('visibility', 'hidden');
		});

		$(window).load(function() {
			$(this.frameElement).css({
				width: '100%',
				height: '100%',
			});

			setTimeout(function() {
				resizeDialog();
				resizeContent();
				$('body').css('visibility', 'visible');
			}, 150);

			osAjaxBackend.BindAfterAjaxRequest(SapphireWidgets.LayoutPopup.redrawDialogWindow);
		});

		$(window.parent)
			.off('resize.LayoutPopup')
			.on('resize.LayoutPopup', function() {
				redrawDialogWindow();
			});
	};

	const redrawDialogWindow = function() {
		clearTimeout(layoutPopupResizeTimer);
		layoutPopupResizeTimer = setTimeout(function() {
			resizeDialog();
			resizeContent();
			$('body').css('visibility', 'visible');
		}, 300);
	};

	const resizeDialog = function() {
		if (SapphireWidgets.LayoutPopup.config.hasClose) {
			window.parent.$('.os-internal-ui-dialog-titlebar').show();

			if (window.top._iframePopup != undefined || false) {
				const $closeButton = window.parent.$('.os-internal-ui-dialog-titlebar-close');

				$closeButton.removeAttr('href');
				$closeButton.off('click').on('click', () => window.top._iframePopup.SapphireWidgets.SapphirePopup.close());
			}
		}

		if (window.top.$('body').hasClass('LayoutBase')) {
			window.top.$('body').css({
				overflowY: 'hidden',
			});
		}

		$overlay.width('100%');

		calcWidthPercentage(popupSize, $osPopupContent);

		$osPopup.css({
			left: 'unset',
			top: 'unset',
			height: 'auto',
			minWidth: popupMinWidth + 'px',
			width: popupWidth + 'px',
		});
	};

	const resizeContent = function() {
		var $body = $('.LayoutPopup__body__content');
		var contentScrollTop = $body.scrollTop();

		if (popupSize === 'Small' && $('.daterangepicker:visible').length > 0) {
			// skip the reset of .LayoutPopup__body__content
		} else {
			$body.css({
				height: 'auto',
			});
		}

		let bodyContent = paddingBody
			? $('.LayoutPopup__body__content')[0].scrollHeight
			: $('.LayoutPopup__body__content').height();

		var headerHeight = $('.LayoutPopup__header').innerHeight() || 0;
		var introHeight = $('.LayoutPopup__intro').innerHeight() || 0;
		var bodyHeight = bodyContent || 0;
		var footerHeight = $('.LayoutPopup__footer').innerHeight() || 0;
		var contentHeight = headerHeight + introHeight + bodyHeight + footerHeight + paddingBody;
		var dialogHeight = window.parent.$('.os-internal-Popup.os-internal-ui-dialog').outerHeight();
		const windowHeight = $(window.parent).height();

		if (popupSize === 'Small') {
			var parentHeight = $(window.parent).height();

			if (contentHeight > parentHeight) {
				$osPopupContent.height(parentHeight - 70);
				$body.height($osPopupContent.height() - paddingBody);
			} else {
				$osPopupContent.height(contentHeight);
			}
		} else {
			if (contentHeight < dialogHeight && SapphireWidgets.LayoutPopup.config.isFixedHeight) {
				var forcedBodyHeight = dialogHeight - headerHeight - introHeight - footerHeight - paddingBody;
				$body.height(forcedBodyHeight);
			} else if (contentHeight < dialogHeight) {
				$osPopupContent.height(contentHeight);
				if (contentHeight < popupMinHeight) {
					var diference = popupMinHeight - contentHeight;
					$body.height(bodyHeight + diference);
				}
			} else if (contentHeight >= dialogHeight && SapphireWidgets.LayoutPopup.config.isFixedHeight) {
				var forcedBodyHeight = dialogHeight - headerHeight - introHeight - footerHeight - paddingBody;
				$body.height(forcedBodyHeight);
			} else if (contentHeight >= dialogHeight) {
				if (contentHeight > popupMaxHeight) {
					$osPopupContent.height(popupMaxHeight);
					var forcedBodyHeight = popupMaxHeight - headerHeight - introHeight - footerHeight - paddingBody;
					$body.height(forcedBodyHeight);
				} else {
					$osPopupContent.height(contentHeight);
				}
			} else {
				console.warn('Unexpected combination...');
			}
		}

		// Handle when DateTimeRangePicker is opened
		var dateRangePicker = $('.daterangepicker:visible');
		if (dateRangePicker.length === 1) {
			if (dateRangePicker[0].getBoundingClientRect().bottom > dialogHeight) {
				var difference = dateRangePicker[0].getBoundingClientRect().bottom - dialogHeight;
				var bodyHeight = $('.LayoutPopup__body__content').outerHeight(true);

				$('.LayoutPopup__body__content').height(bodyHeight + difference + paddingBody);
				$osPopupContent.height($('body')[0].scrollHeight);

				const popupTotalHeight = $osPopupContent.height();
				const newContentHeight = $('.LayoutPopup__body').outerHeight(true) + headerHeight + introHeight + footerHeight;

				if (windowHeight < 720) {
					const coords = dateRangePicker[0].getBoundingClientRect();
					var point = window.parent.scrollY + coords.top - coords.height;
					dateRangePicker.addClass('drop-up').css('top', point);
				} else if (windowHeight < 980 && newContentHeight > popupTotalHeight) {
					$osPopupContent.css({
						maxHeight: newContentHeight + 'px',
					});
				}
			}
		}

		$body.scrollTop(contentScrollTop);
	};

	const increaseHeight = function(diference) {
		$osPopupContent.height($osPopupContent.height() + diference);
	};

	const scrollToElement = function($element) {
		var $targetElement = $element;
		if (!!$targetElement.length) {
			var scrollToOffsetInterval;
			scrollToOffsetInterval = setInterval(function() {
				clearInterval(scrollToOffsetInterval);
				var headerHeight = $('.LayoutPopup__header').outerHeight(true) || 0;
				var introHeight = $('.LayoutPopup__intro').outerHeight(true) || 0;
				var currentBodyScroll = $('.LayoutPopup__body__content')[0].scrollTop || 0;
				var targetElementOffsetTop = $targetElement.offset().top - headerHeight - introHeight + currentBodyScroll - 20;
				$('.LayoutPopup__body__content').scrollTop(targetElementOffsetTop);
			}, 250);
		}
	};

	const calcWidthPercentage = () => {
		const windowHeight = $(window.parent).height();
		const windowWidth = $(window.parent).width();

		if (popupSize === 'Small') {
			let percentage = 0.33;

			if (windowWidth <= 1024) percentage = 0.5;
			else if (windowWidth > 1024 && windowWidth <= 1440) percentage = 0.4;

			popupWidth = parseInt(windowWidth * percentage);
			popupMinWidth = 400;
		} else if (popupSize === 'Medium') {
			if (windowWidth <= 1024) popupWidthPercentage = 0.8;
			else {
				switch (SapphireWidgets.LayoutPopup.config.PopupWidth) {
					case 'XSmall':
						popupMinWidth = 200;
						popupWidthPercentage = 0.2;
						break;
					case 'Small':
						popupMinWidth = 300;
						popupWidthPercentage = 0.3;
						break;
					case 'Medium':
						popupMinWidth = 700;
						popupWidthPercentage = 0.6;
						break;
					default:
						popupMinWidth = 700;
						popupWidthPercentage = 0.7;
				}

				popupWidthPercentage = SapphireWidgets.LayoutPopup.config.isTouch ? 0.8 : popupWidthPercentage;
			}

			popupWidth = parseInt(windowWidth * popupWidthPercentage);
			popupMinHeight = 100;
			popupMaxHeight = SapphireWidgets.LayoutPopup.config.isTouch
				? parseInt(windowHeight * 0.9)
				: parseInt(windowHeight * 0.7);

			if (SapphireWidgets.LayoutPopup.config.isFixedHeight) popupHeight = popupMaxHeight;
			else popupHeight = window.parent.$('.os-internal-Popup.os-internal-ui-dialog').outerHeight();

			$osPopupContent.css({
				maxHeight: popupMaxHeight + 'px',
				minHeight: popupMinHeight + 'px',
				height: popupHeight + 'px',
			});
		} else if (popupSize === 'Large') {
			popupMinWidth = parseInt(windowWidth * 0.8);
			popupMaxHeight = parseInt(windowHeight * 0.9);
		} else if (popupSize === 'Fixed') {
			popupWidth = SapphireWidgets.SapphirePopup.popupWidth;
			popupMinWidth = SapphireWidgets.SapphirePopup.popupWidth;
		}
	};

	SapphireWidgets.LayoutPopup = {
		create,
		resizeDialog,
		resizeContent,
		increaseHeight,
		redrawDialogWindow,
		scrollToElement,
	};
})(jQuery, window, document, SapphireWidgets);

$(window).unload(function() {
	if (!!$('.LayoutPopup').length) {
		window.top.$('body').css({
			overflowY: 'scroll',
		});
	}
});


/***/ }),

/***/ "./src/components/05-components/v3-pat/actions-menu/scripts.js":
/*!*********************************************************************!*\
  !*** ./src/components/05-components/v3-pat/actions-menu/scripts.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* Component ActionsMenu */
(function($, window, SapphireWidgets) {
	var create = function(config) {
		var $triggerElement = $('#' + config.triggerElement);
		var $contentElement = $('#' + config.contentElement);

		if ($contentElement.text().length < 1) {
			$triggerElement.hide();
		}

		$(function() {
			// inside a document ready due to sapphire popup binded events
			window.setTimeout(function() {
				var position = config.position;
				if (config.locale === 'AR') {
					switch (config.position) {
						case 'right':
							position = 'left';
							break;
						case 'left':
							position = 'right';
							break;
						case 'bottom-left':
							position = 'bottom-right';
							break;
						case 'bottom-right':
							position = 'bottom-left';
							break;
						case 'top-left':
							position = 'top-right';
							break;
						case 'top-right':
							position = 'top-left';
							break;
					}
				}
				$triggerElement.tooltipster({
					content: $('<section/>').append($contentElement.clone(true, true)),
					trigger: config.triggerEvent,
					position: position,
					maxWidth: config.maxWidth,
					theme:
						'tooltipster-location--' +
						config.location +
						' ActionsMenu-tooltip Padding--' +
						config.padding +
						' Border--' +
						config.border,
				});
				$contentElement.remove();
			}, 500);
		});
	};

	SapphireWidgets.ActionsMenu = {
		create,
	};
})(jQuery, window, SapphireWidgets);


/***/ }),

/***/ "./src/components/05-components/v3-pat/button-link/scripts.js":
/*!********************************************************************!*\
  !*** ./src/components/05-components/v3-pat/button-link/scripts.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* Component ButtonLink */
(function($, window, SapphireWidgets) {
	const create = config => {
		$(document).ready(function() {
			const $widget = $(`#${config.widgetId} .ButtonClick`);

			$widget.off('click').on('click', function(e) {
				const _target = $(e.target);

				if (_target.closest('.ButtonClick.click').length == 0) {
					$('.ButtonClick.click').removeClass('click');
					$(this).addClass('click');
				}
			});
		});
	};

	SapphireWidgets.ButtonLink = { create };
})(jQuery, window, SapphireWidgets);


/***/ }),

/***/ "./src/components/05-components/v3-pat/card-charts/scripts.js":
/*!********************************************************************!*\
  !*** ./src/components/05-components/v3-pat/card-charts/scripts.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* Component CardCharts */
SapphireWidgets.CardChartsPopup = () => {
	$(document).ready(function() {
		window['CardChartsScroll'] = {};
		const isInsideIframe = window.frameElement != undefined || false;

		let $component = $('.CardCharts');
		let $header = $component.find('.CardCharts__Header');
		let $content = $component.find('.CardCharts__Content');
		let $properties = $component.find('.CardCharts__Properties');
		let $headerDiv = $component.find('.CardCharts__HeaderChart > div');
		let $fakeColumns = $('.FakeColumns');
		let $bodyContent = $('.LayoutPopup__body');

		if (isInsideIframe && !$fakeColumns.length) {
			$headerDiv.append(`<div class='FakeColumns'></div>`);
		}

		if (isInsideIframe) {
			$fakeColumns = $('.FakeColumns');

			$content.on('scroll', () => {
				clearTimeout(window['CardChartsScroll'].scrollFinished);
				window['CardChartsScroll'].scrollFinished = setTimeout(function() {
					if ($content.scrollTop() > 0) $header.addClass('ShadowMedium');
					else $header.removeClass('ShadowMedium');
				}, 50);
			});
		}

		$(window).resize(function() {
			$component = $('.CardCharts');
			$header = $component.find('.CardCharts__Header');
			$content = $component.find('.CardCharts__Content');
			$properties = $component.find('.CardCharts__Properties');
			$fakeColumns = $('.FakeColumns');
			$bodyContent = $('.LayoutPopup__body');

			let headerTitleHeight = 63;
			const headerPropertiesHeight = 56;

			const $charts = $content.find('.CardCharts__Charts .OSChart');

			$charts.each(function() {
				const $chart = $(this);

				const newWidth = $content.width() - $properties.width() + 40;
				$chart.highcharts().setSize(newWidth, $chart.height());
			});

			if (isInsideIframe) {
				const timeoutHeight = setTimeout(() => {
					const $headerTitle = $component.find('.CardCharts__HeaderTitle');

					headerTitleHeight = $headerTitle.length ? $headerTitle.outerHeight() : headerTitleHeight - 6;

					const newHeight = $(window.frameElement).height() - headerTitleHeight;

					$fakeColumns.css('height', `${newHeight + headerPropertiesHeight}px`);
					$content.css('height', `${newHeight - headerPropertiesHeight}px`);

					clearTimeout(timeoutHeight);
				}, 500);
			}
		});

		// See MutationObserver (LayoutPopup)
		SapphireWidgets.PopupsToAvoidMutations = ['ChartsPopup'];
	});
};


/***/ }),

/***/ "./src/components/05-components/v3-pat/collapsible-side-panel/scripts.js":
/*!*******************************************************************************!*\
  !*** ./src/components/05-components/v3-pat/collapsible-side-panel/scripts.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* Component CollapsibleSidePanel */
(function($, window, SapphireWidgets) {
	class CollapsibleSidePanel {
		constructor(config) {
			this.options = {
				...config,
			};

			this.onComponentInit();
		}

		openCloseSidePanel(toOpen) {
			if (toOpen) {
				this.$content.css('display', 'grid');

				setTimeout(() => {
					this.$component.addClass('CollapsibleSidePanel--open');
				}, 50);
			} else {
				this.$component.removeClass('CollapsibleSidePanel--open');

				setTimeout(() => {
					$('.CollapsibleSidePanel__Content').css('display', 'none');
				}, 350);
			}
		}

		onComponentInit() {
			this.$component = $(`#${this.options.widgetId}`);
			this.$header = this.$component.find('.CollapsibleSidePanel__Header');
			this.$content = this.$component.find('.CollapsibleSidePanel__Content');
			this.$counter1 = this.$component.find('.CollapsibleSidePanel__Title span.Counter');
			this.$counter2 = this.$component.find('.CollapsibleSidePanel__PanelTitle span.Counter');
			this.$panelContent = this.$component.find('.CollapsibleSidePanel__PanelContent');
			this.$close = this.$component.find('.CollapsibleSidePanel__PanelHeader .icon');
			this.$closeEventLink = this.$component.find('.CollapsibleSidePanel__PanelHeader .PanelCloseButton');

			this.$header.on('click', () => this.openCloseSidePanel(true));
			this.$close.on('click', () => {
				this.openCloseSidePanel(false);

				this.$closeEventLink.click();

				if ($('.PanelContentEmpty').length) {
					SapphireWidgets.CollapsibleSidePanel.close(this.options.widgetId, true);
				}
			});

			if (this.options.isAutoCounter) {
				calculateCounter(this.$panelContent, this.$counter1, this.$counter2);

				this.$counter1.removeClass('Hidden');
				this.$counter2.removeClass('Hidden');
			}

			const hasEmptyMessage = this.$panelContent.find('.CollapsibleEmptyMessage');
			const contentToVerify = hasEmptyMessage.length ? this.$panelContent.find('>:first-child') : this.$panelContent;

			if (this.options.hideWhenEmpty && !contentToVerify.text()) {
				this.$component.hide();
			}

			$(document).ready(function() {
				$('.CollapsibleSidePanel:visible').addClass('MultiMarginTopSmall');
				$('.CollapsibleSidePanel:visible:first').addClass('MultiMarginTopLarge');
			});
		}
	}

	const calculateCounter = (panelContent, counter1, counter2) => {
		let total = 0;
		const counters = panelContent.find('.ExapandablePlaceholder.Counter');

		counters.each(function() {
			total += +$(this).text();
		});

		counter1.text(total);
		counter2.text(total);

		if (total === 0) counter2.addClass('ColorLightGreyBG');
	};

	const updateCounter = (widgetId, counter) => {
		this.$component = $(`#${widgetId}`);
		this.counter1 = this.$component.find('.CollapsibleSidePanel__Title span.Counter');
		this.counter2 = this.$component.find('.CollapsibleSidePanel__PanelTitle span.Counter');

		this.counter1.text(counter);
		this.counter2.text(counter);

		if (+counter === 0) this.counter2.addClass('ColorLightGreyBG');
	};

	const close = (widgetId, hideHeader, updateCounter) => {
		this.$component = $(`#${widgetId}`);

		if (!this.$component.hasClass('CollapsibleSidePanel')) {
			this.$component = $(`#${widgetId}`).find('.CollapsibleSidePanel');
		}

		if (hideHeader) {
			this.$component.addClass('CollapsibleSidePanel--headerHidden');
		}

		this.$component.removeClass('CollapsibleSidePanel--open');

		$('.CollapsibleSidePanel:visible').removeClass('MultiMarginTopSmall');
		$('.CollapsibleSidePanel:visible:first').removeClass('MultiMarginTopLarge');
	};

	const checkEmpty = widgetId => {
		this.$component = $(`#${widgetId}`).find('.CollapsibleSidePanel');
		this.$panelContent = this.$component.find('.CollapsibleSidePanel__PanelContent');
		this.$counter1 = this.$component.find('.CollapsibleSidePanel__Title span.Counter');
		this.$counter2 = this.$component.find('.CollapsibleSidePanel__PanelTitle span.Counter');
		this.$emptyMessage = this.$component.find('.CollapsibleEmptyMessage');

		this.$emptyMessage.show();

		calculateCounter(this.$panelContent, this.$counter1, this.$counter2);
	};

	const create = config => (window[config.widgetId] = new CollapsibleSidePanel(config));

	SapphireWidgets.CollapsibleSidePanel = { create, close, updateCounter, checkEmpty };
})(jQuery, window, SapphireWidgets);


/***/ }),

/***/ "./src/components/05-components/v3-pat/comp-line/scripts.js":
/*!******************************************************************!*\
  !*** ./src/components/05-components/v3-pat/comp-line/scripts.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* Component CompLine */
(function($, window, SapphireWidgets) {
	function SectionCompline() {
		var that = this;

		// Object to save stats
		var previewstat = [];

		var transitionEvent = SilkUI.whichTransitionEvent();
		// set click events
		function clickEvents(ob) {
			// store querys in a single var
			var holder = $(ob).closest('.CompLine');
			var Section = $(ob).closest('.CompLineExpandable');
			var SectionContent = Section.children('.CompLine_Expand');

			// get id
			var id = holder.attr('id');

			var tempHeight = 0;

			// has class expanded
			if (Section.hasClass('expanded')) {
				// Calc and set a fixed height, during this process, transitions are disabled
				SectionContent.addClass('noTransition');
				SectionContent.height(SectionContent.height());
				SectionContent[0].offsetHeight; // hack to force a repaint
				SectionContent.removeClass('noTransition');

				// Collapse content
				SectionContent.height(0);
				Section.removeClass('expanded');
				SectionContent.css('overflow', 'hidden');

				// Remove class, set height and save state
				previewstat[id]['client'] = false;

				if (holder.hasClass('notRenderInteractions')) {
					holder.find('.CompLine-toggle-interactions').trigger('click');
				}
			} else {
				// Calc and set a fixed height
				SectionContent.height('auto');
				tempHeight = SectionContent.height();
				SectionContent.height(0);
				SectionContent.height(tempHeight);
				SectionContent.css('overflow', 'hidden');

				// remove class, set height and save state
				Section.addClass('expanded');
				previewstat[id]['client'] = true;

				if ($('.Page').hasClass('ie8') || $('.Page').hasClass('ie9')) {
					SectionContent.height('auto');
					SectionContent.css('overflow', 'visible');
				}

				// add event transition end to overflow:visible for tooltips and dropdowns issues
				SectionContent.on(transitionEvent, function() {
					if (Section.hasClass('expanded')) {
						SectionContent.css('overflow', 'visible');
						SectionContent.addClass('noTransition');
						SectionContent.height('auto');
						SectionContent[0].offsetHeight; // hack to force a repaint
						SectionContent.removeClass('noTransition');
					}
				});

				if (holder.hasClass('notRenderInteractions')) {
					holder.find('.CompLine-toggle-interactions').trigger('click');
				}
			}
		}

		// ajax refres function
		that.ajaxRefresh = function() {
			// remove click events
			$('.CompLine_headLine').off();

			// add stop prepagation
			$('.CompLine_headLine input, .CompLine_headLine select, .CompLine_headLine a').click(function(event) {
				event.stopPropagation();
			});

			// add new click events
			$('.CompLine__expandIcon').unbind('click');
			$('.CompLine__expandIcon').on('click', function() {
				clickEvents(this.parentElement);
			});

			// each all sections
			$('.CompLineExpandable').each(function() {
				// if new SectionExpandable then add to previewstat array
				if (
					previewstat[
						$(this)
							.closest('.CompLine')
							.attr('id')
					] == null
				) {
					// add stat on array
					var stat = false;
					// if open
					if ($(this).hasClass('expanded')) {
						stat = true;
					}
					// add row
					previewstat[
						$(this)
							.closest('.CompLine')
							.attr('id')
					] = {
						client: stat,
						server: stat,
					};
				}

				// curent state (ajax state x initial state)
				var curState = false;

				// check if start expandable
				if ($(this).hasClass('expanded')) {
					curState = true;
				}

				// check if ajax != initial server
				if (
					curState !=
					previewstat[
						$(this)
							.closest('.CompLine')
							.attr('id')
					]['server']
				) {
					// curstate
					previewstat[
						$(this)
							.closest('.CompLine')
							.attr('id')
					]['client'] = curState;
					previewstat[
						$(this)
							.closest('.CompLine')
							.attr('id')
					]['server'] = curState;
				} else {
					// has class expanded
					if (
						previewstat[
							$(this)
								.closest('.CompLine')
								.attr('id')
						]['client'] == false &&
						$(this).hasClass('expanded')
					) {
						$(this).removeClass('expanded');
						$(this)
							.children('.CompLine_Expand')
							.height(0);
					} else if (
						previewstat[
							$(this)
								.closest('.CompLine')
								.attr('id')
						]['client'] == true &&
						!$(this).hasClass('expanded')
					) {
						$(this).addClass('expanded');
					}
				}
			});
		};

		// set events
		that.init = function() {
			// each all sections to create array stat
			$('.CompLineExpandable').each(function() {
				// add stat on array
				var stat = false;

				// if open
				if ($(this).hasClass('expanded')) {
					stat = true;
				}

				// add row
				previewstat[
					$(this)
						.closest('.CompLine')
						.attr('id')
				] = {
					client: stat,
					server: stat,
				};
			});

			// add click events
			$('.CompLine__expandIcon').unbind('click');
			$('.CompLine__expandIcon').on('click', function() {
				clickEvents(this.parentElement);
			});

			// add stop prepagation
			$('.CompLine_headLine input, .CompLine_headLine select, .CompLine_headLine a').click(function(event) {
				event.stopPropagation();
			});

			// remove unecessary behaviors

			// event ajax
			osAjaxBackend.BindAfterAjaxRequest(that.ajaxRefresh);
		};
	}

	const create = () => {
		SilkUI.SectionExpandable = new SectionCompline();
		SilkUI.Execute(SilkUI.SectionExpandable.init, 'Error on Sapphirev2_Patters/CompLine');
	};

	SapphireWidgets.CompLine = { create };
})(jQuery, window, SapphireWidgets);


/***/ }),

/***/ "./src/components/05-components/v3-pat/country-phone/scripts.js":
/*!**********************************************************************!*\
  !*** ./src/components/05-components/v3-pat/country-phone/scripts.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* Component CountryPhone */
(function($, window, SapphireWidgets) {
	const create = config => {
		const $element = document.querySelector(`#${config.widgetId}`);
		const additionalValidations = config.additionalValidations;

		const countryPhoneInput = window.intlTelInput($element, {
			initialCountry: config.initialCountry,
			preferredCountries: config.preferredCountries,
			separateDialCode: config.separateDialCode,
			nationalMode: config.nationalMode,
			autoPlaceholder: config.autoPlaceholder ? 'polite' : false,
			formatOnDisplay: false,
			utilsScript: '/V3_Pat/js/utils.js',
		});

		const $input = $(`#${config.widgetId}`);

		$input.on('keyup', function(e) {
			if ($input.val() === '+' || $input.val() === '') {
				countryPhoneInput.setCountry(config.initialCountry);
			}
		});

		$input.on('keypress', function(e) {
			const selectedCountry = countryPhoneInput.getSelectedCountryData();
			const filter = additionalValidations.find(i => i.CountryPhoneValidations.CountryCode === selectedCountry.iso2);
			const value = $input.val().trim();

			let isValid = true;

			if (filter) {
				const withouCode = value.replace(`+${selectedCountry.dialCode}`, '');

				isValid = withouCode.trim().length + 1 <= filter.CountryPhoneValidations.PhoneLength;
			}

			if (value === `+${selectedCountry.dialCode}`) {
				$input.val(`+${selectedCountry.dialCode} `);
			}

			return (
				isValid &&
				(e.metaKey || // cmd/ctrl
				e.which <= 0 || // arrow keys
				e.which == 8 || // delete key
					(!value.length && e.key === '+') ||
					/[0-9]/.test(String.fromCharCode(e.which)))
			);
		});

		$element.addEventListener('countrychange', function() {
			onChangeCountry();
		});

		const onChangeCountry = () => {
			const $selectedCountryInput = $(`#${config.selectedCountryInput}`);
			const selectedCountry = countryPhoneInput.getSelectedCountryData();

			$selectedCountryInput.val(selectedCountry.iso2);
			$selectedCountryInput.trigger('change');
		};

		$(document).ready(function() {
			onChangeCountry();
		});
	};

	SapphireWidgets.CountryPhone = {
		create,
	};
})(jQuery, window, SapphireWidgets);


/***/ }),

/***/ "./src/components/05-components/v3-pat/data-tables/scripts.js":
/*!********************************************************************!*\
  !*** ./src/components/05-components/v3-pat/data-tables/scripts.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() {
	class DataTables {
		constructor(config) {
			this.config = config;
			this.$widget = $(`#${config.widgetId}`);
			this.$table = this.$widget.find('table');
			this.$table.addClass('cell-border compact');
			this.onInit();
		}

		onInit() {
			this.options = {
				...this.config,
				fixedColumns: true,
				info: false,
				ordering: false,
				paging: false,
				scrollCollapse: true,
				scrollX: true,
				searching: false,
			};

			$(() => {
				this.$table.DataTable(this.options);
			});
		}
	}

	const create = config => (window[config.widgetId] = new DataTables(config));

	SapphireWidgets.DataTables = {
		create,
	};
})();


/***/ }),

/***/ "./src/components/05-components/v3-pat/datetime-range-picker/scripts.js":
/*!******************************************************************************!*\
  !*** ./src/components/05-components/v3-pat/datetime-range-picker/scripts.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* Component DateTimeRangePicker */
(function($, window, document, SapphireWidgets) {
	var allDateTimeRangePickers = [];

	var create = function(config) {
		for (var i = 0; i < allDateTimeRangePickers.length; i++) {
			if (allDateTimeRangePickers[i].config.widgetId === config.widgetId) {
				allDateTimeRangePickers.splice(i, 1);
			}
		}
		window[config.widgetId] = new DateTimeRangePicker(config);
		allDateTimeRangePickers.push(window[config.widgetId]);
	};

	var DateTimeRangePicker = function(config) {
		this.config = config;
		this.currentLocale = config.currentLocale;

		this.$widget = $('#' + config.widgetId);
		this.$widget.addClass('DateTimeRangePicker');
		this.$clear = this.$widget.find('.DateTimeRangePicker-clear');
		this.$label = this.$widget.find('.DateTimeRangePicker-label');

		this.isEmptyHour = false;

		if (this.config.attachToInput) {
			this.$widget.addClass('attachedInput');
			this.$model = this.$widget.find('.DateTimeRangePicker-placeholder input[type="text"]');
			this.$model.attr('tabIndex', -1);
		}

		this.$input = $('#' + config.inputId);

		if (!this.config.allowsTyping) {
			this.$input.prop('readonly', true);
		}

		if (this.currentLocale === 'AR') {
			moment.locale('ar-kw');
		}

		var options = {};
		options.startDate = config.startDate;
		options.singleDatePicker = config.singleDatePicker;
		options.autoApply = config.autoApply;
		options.autoUpdateInput = config.autoUpdateInput;
		options.timePicker = config.timePicker;
		options.timePicker24Hour = config.timePicker24Hour;
		options.timePickerIncrement = config.timePickerIncrement;
		options.showDropdowns = config.hasDropdowns; // Month/Year Picker
		options.drops = config.drops;
		options.opens = config.currentLocale === 'AR' && config.opens != 'center' ? 'left' : config.opens;

		var stringConnection = '[, at]';

		if (config.timePicker) {
			if (!this.config.attachToInput) this.$input.prop('placeholder', 'DD-MM-YYYY HH:MM');

			if (options.timePicker24Hour) {
				this.config.formatInput = `${this.config.systemDateFormat} HH:mm`;
				this.config.formatLabel = this.config.hasYearWhenText
					? 'D MMM YYYY' + stringConnection + ' HH:mm'
					: 'D MMM' + stringConnection + ' HH:mm';
			} else {
				this.config.formatInput = `${this.config.systemDateFormat} hh:mm A`;
				this.config.formatLabel = this.config.hasYearWhenText
					? 'D MMM YYYY' + stringConnection + ' hh:mm A'
					: 'D MMM' + stringConnection + ' hh:mm A';
			}
		} else {
			this.$widget.addClass('onlyDate');

			if (!this.config.attachToInput) this.$input.prop('placeholder', 'DD-MM-YYYY');

			this.config.formatInput = this.config.systemDateFormat;
			this.config.formatLabel = this.config.hasYearWhenText ? 'D MMM YYYY' : 'D MMM';
		}

		if (!config.singleDatePicker) {
			this.$widget.addClass('rangeDates');
		}

		this.config.formatLabel = this.config.hasWeekDayNameWhenText
			? 'ddd[, ]' + this.config.formatLabel
			: this.config.formatLabel;

		options.locale = {
			direction: config.currentLocale === 'AR' ? 'rtl' : 'ltr',
			format: this.config.formatInput,
			cancelLabel: 'Cancel',
			applyLabel: 'Apply',
		};

		if (config.hasTextTrigger) {
			this.$widget.addClass('textTrigger');
		}

		const nulldDates = ['01-01-1900 00:00:00', '1900-01-01 00:00:00'];

		if (config.endDate && !nulldDates.some(i => i === config.endDate)) {
			options.endDate = config.endDate;
		}

		if (config.maxDate && !nulldDates.some(i => i === config.maxDate)) {
			options.maxDate = config.maxDate;
		}

		if (config.minDate && !nulldDates.some(i => i === config.minDate)) {
			options.minDate = config.minDate;
		}

		if (config.DisabledWeekDays) {
			var disabledWeekDays = config.DisabledWeekDays.split(',');
			options.isInvalidDate = function(date) {
				return disabledWeekDays.includes(
					moment(date)
						.day()
						.toString()
				);
			};
		}

		var _this = this;

		this.$input.daterangepicker(options, function(startDate, endDate, label) {
			// after a selection is made
			if (_this.config.attachToInput) {
				let format = '';

				if (_this.config.timePicker) {
					format = `${_this.config.systemDateFormat} HH:mm`;
				}

				if (_this.config.singleDatePicker) {
					if (_this.config.timePicker) _this.$model.val(startDate.format(format));
					else _this.$model.val(startDate.format(_this.config.systemDateFormat));
				} else {
					let start, end;

					if (_this.config.timePicker) {
						start = startDate.format(format);
						end = endDate.format(format);
					} else {
						start = startDate.format(_this.config.systemDateFormat);
						end = endDate.format(_this.config.systemDateFormat);
					}

					_this.$model.val(`${start}  ·  ${end}`);
				}

				_this.$model.trigger('change');
			}

			const initialValue = _this.$input.val();
			const allowsMMYY = _this.config.allowsTyping && _this.config.allowsTypeMMYY && _this.config.singleDatePicker;

			if (allowsMMYY && initialValue.length === 4) {
				_this.picker.setStartDate(moment(`01${initialValue}`, 'DDMMYY'));

				if (_this.config.attachToInput) {
					let format = '';

					if (_this.config.timePicker) format = `${_this.config.systemDateFormat} HH:mm`;
					else format = _this.config.systemDateFormat;

					_this.$model.val(_this.picker.startDate.format(format));
					_this.$model.trigger('change');
				}
			}
		});

		// now we have a proper instance
		this.picker = this.$input.data('daterangepicker');

		this.$calendar = $(this.picker.container);

		if (!!this.config.cssClass) {
			this.$calendar.addClass(this.config.cssClass);
		}

		this.$timeHolder = this.$calendar.find('.calendar-time');
		this.$buttonsHolder = this.$calendar.find('.drp-buttons');

		if (this.config.autoApply) {
			this.$buttonsHolder.hide();
		}

		if (config.isEmptyStartDate) {
			this.clear(false);
		} else if (config.isEmptyStartHour) {
			this.isEmptyHour = true;
			this.updateLabeling();
		} else {
			this.updateLabeling();
		}

		if (config.enabled) {
			this.nativeEvents();
			this.customEvents();
		} else {
			this.$clear.hide();
			this.$input.off('click focus keydown keyup');
		}

		if (this.config.attachToInput) {
			this.handleCustomValidation();
		}
	};

	DateTimeRangePicker.prototype.handleCustomValidation = function() {
		// TO DO
	};

	DateTimeRangePicker.prototype.nativeEvents = function() {
		const _this = this;

		this.$input.on('showCalendar.daterangepicker', function(event, picker) {
			if (_this.config.hasGoToday) {
				_this.$calendar
					.find('.calendar-table thead tr')
					.eq(0)
					.after(
						'<tr><td colspan="7" class="DateTimeRangePicker-calendar-gotoday">' +
							_this.config.goTodayLabel +
							'</td></tr>'
					);
				if (_this.config.drops === 'up') {
					_this.$calendar.css('top', _this.$calendar.offset().top - 24);
				}
			}
			_this.handleViewportPosition();

			if (!_this.config.singleDatePicker) {
				$('.drp-selected').each(function() {
					let text = $(this).text();
					text = text.replace(/-/gi, '·');

					$(this).text(text);
				});
			}
		});

		this.$input.on('show.daterangepicker', function(event, picker) {
			if (_this.config.timePicker && _this.config.hasClearHour) {
				_this.$calendar.find('.calendar-time').append('<span class="DateTimeRangePicker-calendar-clear"></span>');
				if (_this.isEmptyHour) {
					_this.$timeHolder.css('opacity', 0.5);
					_this.$calendar.find('.DateTimeRangePicker-calendar-clear').addClass('disabled');
				} else {
					_this.$timeHolder.css('opacity', 1);
					_this.$calendar.find('.DateTimeRangePicker-calendar-clear').removeClass('disabled');
				}
			}
			_this.handleViewportPosition();
			SapphireWidgets.DateTimeRangePicker.openedWidgetId = _this.config.widgetId;

			if (_this.config.cssClass === 'CalendarPopup' && window.frameElement) {
				const oldBodyHeight = $('body')[0].scrollHeight + 8;
				const calendarSafeHeight = _this.$calendar.outerHeight() + 32;

				const newHeight = oldBodyHeight > calendarSafeHeight ? oldBodyHeight : calendarSafeHeight;

				$('<div class="CalendarPopup__Overlay"></div>').insertAfter(_this.$calendar);

				$(window.frameElement).animate({ minHeight: newHeight });
				$('body').animate({ minHeight: newHeight });
			}
		});

		this.$input.on('hide.daterangepicker', function(event, picker) {
			_this.$calendar.find('.DateTimeRangePicker-calendar-clear').remove();
			_this.updateParentIframe();

			if (_this.config.cssClass === 'CalendarPopup' && window.frameElement) {
				$(window.frameElement).css({ minHeight: 'unset' });
				$('body').css({ minHeight: 'unset' });

				$('.CalendarPopup__Overlay').remove();
			}
		});

		this.$input.on('cancel.daterangepicker', function(event, picker) {});

		this.$input.on('outsideClick.daterangepicker', function(event, picker) {});

		this.$input.on('timechanged.daterangepicker', function(event, picker) {
			_this.isEmptyHour = false;
			_this.$timeHolder.css('opacity', 1);
			if (_this.config.hasClearHour) {
				_this.$calendar.find('.calendar-time').append('<span class="DateTimeRangePicker-calendar-clear"></span>');
			}
			if (_this.config.autoApply) {
				_this.$clear.removeClass('disabled');
				_this.updateLabeling();
				_this.sendNotification();
			}
		});

		this.$input.on('clickDate.daterangepicker', function(event, picker) {
			if (_this.config.autoApply) {
				_this.$clear.removeClass('disabled');
				_this.updateLabeling();
				_this.sendNotification();
			}
		});

		this.$input.on('apply.daterangepicker', function(event, picker) {
			_this.$clear.removeClass('disabled');
			_this.updateLabeling();
			_this.sendNotification();
		});
	};

	DateTimeRangePicker.prototype.customEvents = function() {
		var _this = this;
		this.$label.off('click').on('click', function(event) {
			_this.picker.toggle();
		});
		this.$clear.off('click').on('click', function(event) {
			_this.clear();
			_this.picker.hide();
		});
		this.$calendar.on('click', '.DateTimeRangePicker-calendar-clear', function() {
			if (_this.config.timePicker24Hour) {
				_this.$calendar
					.find('.hourselect')
					.val('0')
					.trigger('change');
			} else {
				_this.$calendar
					.find('.hourselect')
					.val('12')
					.trigger('change');
			}
			_this.$calendar
				.find('.minuteselect')
				.val('0')
				.trigger('change');
			_this.$calendar
				.find('.ampmselect')
				.val('AM')
				.trigger('change');
			_this.isEmptyHour = true;
			_this.$timeHolder.css('opacity', 0.5);
			_this.$calendar.find('.DateTimeRangePicker-calendar-clear').addClass('disabled');
		});
		this.$calendar.on('click', '.DateTimeRangePicker-calendar-gotoday', function() {
			_this.picker.setStartDate(moment());
			_this.picker.setEndDate(moment());
			_this.picker.hide();
			if (!_this.config.autoUpdateInput || _this.config.hasTextTrigger || _this.config.attachToInput) {
				_this.updateLabeling();
			}
			_this.sendNotification();
		});

		if (this.config.attachToInput) {
			// Nothing
		} else {
			this.$input.on('click', function() {
				window.setTimeout(function() {
					_this.updateParentIframe();
				}, 50);
			});
		}

		this.$input.on('blur', function(evt) {
			_this.sendNotification();
		});
	};

	DateTimeRangePicker.prototype.updateLabeling = function() {
		var labelMask = this.config.formatLabel;
		var inputMask = this.config.formatInput;

		if (moment(this.picker.startDate).isSame(moment(), 'day')) {
			if (labelMask.includes('D MMM YYYY')) {
				labelMask = labelMask.replace('D MMM YYYY', '[Today,] D MMM YYYY');
			} else if (labelMask.includes('D MMM')) {
				labelMask = labelMask.replace('D MMM', '[Today]');
			}
		}
		if (this.isEmptyHour) {
			labelMask = labelMask.replace('hh:mm A', '[--:--]').replace('HH:mm', '[--:--]');
			inputMask = inputMask.replace('hh:mm A', '[--:--]').replace('HH:mm', '[--:--]');

			if (this.config.hasTextTrigger) {
				this.$label.html(this.config.prefixTextTrigger + this.picker.startDate.format(labelMask));

				if (this.config.timePicker) {
					this.$input.val(this.picker.startDate.format(`${this.config.systemDateFormat} [00:00:00]`));
				} else {
					this.$input.val(this.picker.startDate.format(this.config.systemDateFormat));
				}
			} else {
				this.$input.val(this.picker.startDate.format(`${this.config.systemDateFormat} [00:00:00]`));
			}
		} else {
			if (this.config.hasTextTrigger) {
				this.$label.html(this.config.prefixTextTrigger + this.picker.startDate.format(labelMask));
				this.$input.val(this.picker.startDate.format(inputMask));
			} else {
				if (this.config.attachToInput) {
					if (this.config.singleDatePicker) {
						this.$input.val(this.picker.startDate.format(inputMask));
					} else {
						const startDate = this.picker.startDate.format(inputMask);
						const endDate = this.picker.endDate.format(inputMask);

						this.$input.val(`${startDate}  ·  ${endDate}`);
					}
				} else {
					if (this.config.singleDatePicker) {
						this.$input.val(this.picker.startDate.format(this.config.formatInput));
					} else {
						let startDate = this.picker.startDate.format(this.config.formatInput);
						let endDate = this.picker.endDate.format(this.config.formatInput);

						this.$input.val(`${startDate}  ·  ${endDate}`);
					}
				}
			}
		}
	};

	DateTimeRangePicker.prototype.handleViewportPosition = function() {
		if (
			window.frameElement &&
			($(window.frameElement.parentElement).hasClass('tooltipster-content') ||
				$(window.frameElement.parentElement).hasClass('os-internal-ui-dialog-content'))
		) {
			return;
		}

		if (!this.isInViewport()) {
			var coords = this.$calendar[0].getBoundingClientRect();
			if (this.$calendar.hasClass('drop-up') && this.$calendar[0].getBoundingClientRect().top < 0) {
				var point = window.scrollY + coords.bottom + this.$input.height() + 7;
				this.$calendar
					.removeClass('drop-up')
					.addClass('drop-down')
					.css('top', point);
			} else if (
				!this.$calendar.hasClass('drop-up') &&
				this.$calendar[0].getBoundingClientRect().bottom > (window.innerHeight || document.documentElement.clientHeight)
			) {
				var point = window.scrollY + coords.top - coords.height - this.$input.height() - 7;
				this.$calendar.addClass('drop-up').css('top', point);
			}
		}
	};

	DateTimeRangePicker.prototype.isInViewport = function() {
		var bounding = this.$calendar[0].getBoundingClientRect();
		return (
			bounding.top >= 0 && bounding.bottom <= (window.innerHeight + 5 || document.documentElement.clientHeight + 5)
		);
	};

	DateTimeRangePicker.prototype.clear = function(sendNotification) {
		this.picker.setStartDate(moment());
		this.picker.setEndDate(moment());
		this.isEmptyHour = false;
		this.$clear.addClass('disabled');
		if (this.config.hasTextTrigger) {
			this.$label.html('-- -- --');
		} else {
			this.$input.val('');
		}
		if (sendNotification || sendNotification == undefined) {
			this.sendNotification(false);
		}
	};

	DateTimeRangePicker.prototype.show = function() {
		this.picker.show();
	};

	DateTimeRangePicker.prototype.hide = function() {
		this.picker.hide();
	};

	DateTimeRangePicker.prototype.cancel = function() {
		this.picker.clickCancel();
	};

	DateTimeRangePicker.prototype.sendNotification = function(sendDate) {
		if (this.$widget.hasClass('attachedInput')) {
			this.$input.trigger('change');
			return false;
		}

		if (sendDate || sendDate == undefined) {
			if (this.isEmptyHour) {
				OsNotifyWidget(
					this.config.dateTimeRangePickerFakeNotifyId,
					this.picker.startDate.format(`${this.config.systemDateFormat} [00:00:00]`) + '|' + this.isEmptyHour
				);
			} else {
				if (this.config.timePicker) {
					OsNotifyWidget(
						this.config.dateTimeRangePickerFakeNotifyId,
						this.picker.startDate.format(`${this.config.systemDateFormat} HH:mm:ss`) + '|' + this.isEmptyHour
					);
				} else {
					OsNotifyWidget(
						this.config.dateTimeRangePickerFakeNotifyId,
						this.picker.startDate.format(this.config.systemDateFormat) + '|' + this.isEmptyHour
					);
				}
			}
		} else {
			OsNotifyWidget(this.config.dateTimeRangePickerFakeNotifyId, 'null|true');
		}
	};

	DateTimeRangePicker.prototype.updateParentIframe = function() {
		if (typeof SapphireWidgets.ResizeParentIframe === 'object') {
			SapphireWidgets.ResizeParentIframe.resize();
		}
		if ($('.Page.LayoutPopup').length === 1) {
			SapphireWidgets.LayoutPopup.redrawDialogWindow();
		}
	};

	SapphireWidgets.DateTimeRangePicker = {
		create: create,
		all: function() {
			return allDateTimeRangePickers;
		},
	};
})(jQuery, window, document, SapphireWidgets);


/***/ }),

/***/ "./src/components/05-components/v3-pat/drag-drop/scripts.js":
/*!******************************************************************!*\
  !*** ./src/components/05-components/v3-pat/drag-drop/scripts.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* Component DragDropArea */
(function($, window, document, SapphireWidgets) {
	var dragDropAreaWidget;

	var create = function(config) {
		window[config.dragDropAreaId] = new DragDropArea(config);
		dragDropAreaWidget = window[config.dragDropAreaId];

		$(window).load(function() {
			osAjaxBackend.BindAfterAjaxRequest(SapphireWidgets.DragDropArea.refreshDragDrop);
		});
	};

	var refreshDragDrop = function() {
		dragDropAreaWidget.setupDraggable();
		dragDropAreaWidget.setupDroppable();
	};

	var DragDropArea = function(config) {
		var _this = this;
		this.config = config;
		this.$area = $('#' + config.dragDropAreaId);
		this.$area.css('display', 'block');
		this.skin = config.skin;
		this.fakeNotifyWidgetId = config.fakeNotifyWidgetId;
		this.setupDroppable();
		if (config.sortable) {
			this.setupSortable();
		}
		this.setupDraggable();
		this.attachEvents();
		this.$area.find('.DragDrop-droppable').each(function() {
			_this.handleDroppable($(this));
		});
	};

	DragDropArea.prototype.setupDraggable = function() {
		var _this = this;

		this.$area.find('.DragDrop-draggable').draggable({
			disabled: this.config.disabled,
			containment: this.$area,
			scope: this.config.dragDropAreaId,
			delay: 0,
			scroll: true,
			revert: 'invalid',
			revertDuration: 0,
			connectToSortable: '.DragDrop-droppable',
			stop: function(event, ui) {
				if (ui.helper.hasClass('ui-draggable-dragging')) {
					const $target = _this.$area.find('.ui-droppable.ui-sortable');

					if (_this.skin === 'Teams') {
						//$(ui.helper).hide();
						OsNotifyWidget($target.data('fakenotify'), ui.helper.data('itemtype') + '|' + ui.helper.data('itemid'));
					} else {
						OsNotifyWidget(
							$target.data('fakenotify'),
							_this.$area.find('.DragDrop-draggable-placeholder').index() + '|' + ui.helper.data('itemid')
						);
					}
				}
			},
		});
	};

	DragDropArea.prototype.setupDroppable = function() {
		var _this = this;
		this.$area.find('.DragDrop-droppable').droppable({
			hoverClass: 'hovered',
			addClasses: true,
			disabled: this.config.disabled,
			scope: this.config.dragDropAreaId,
			tolerance: 'pointer',
			drop: function(event, ui) {
				if (_this.skin === 'Teams') {
					$(ui.draggable).hide();
					OsNotifyWidget(
						$(event.target).data('fakenotify'),
						ui.draggable.data('itemtype') + '|' + ui.draggable.data('itemid')
					);
				} else {
					OsNotifyWidget(
						$(event.target).data('fakenotify'),
						_this.$area.find('.DragDrop-draggable-placeholder').index() + '|' + ui.draggable.data('itemid')
					);
				}
			},
		});
	};

	DragDropArea.prototype.setupSortable = function() {
		this.$area.find('.DragDrop-droppable').sortable({
			disabled: this.config.disabled,
			forcePlaceholderSize: true,
			containment: this.$area,
			tolerance: 'pointer',
			revert: 200,
			items: '.DragDrop-droppable-items .DragDrop-draggable',
			placeholder: 'DragDrop-draggable-placeholder',
		});
	};

	DragDropArea.prototype.attachEvents = function() {
		var _this = this;
		this.$area.on('click', '.DragDrop-draggable', function(evt) {
			evt.stopPropagation();
			var $draggable = $(evt.currentTarget);
			$draggable.find('.DragDrop-draggable-select-action a').trigger('click');
			var $droppable = $draggable.closest('.DragDrop-droppable');
			if ($droppable.hasClass('allowMultiple')) {
				var $checkbox = $draggable.find('input[type="checkbox"]');
				if ($checkbox.prop('checked')) {
					$checkbox.prop('checked', false);
					$draggable.removeClass('selected');
				} else {
					$checkbox.prop('checked', true);
					$draggable.addClass('selected');
				}
				_this.handleDroppable($droppable);
			}
		});
		this.$area.on('click', '.DragDrop-draggable-select-action a', function(evt) {
			evt.stopPropagation();
		});
	};

	DragDropArea.prototype.handleDroppable = function($droppable) {
		if ($droppable.hasClass('allowMultiple')) {
			var $actions = $droppable.find('.DragDrop-droppable-intro');
			var chkSelected = $droppable.find('input[type="checkbox"]:checked').length;
			if (chkSelected > 0) {
				$actions.find('a, button').attr('disabled', false);
			} else {
				$actions.find('a, button').attr('disabled', true);
			}
		} else {
			$droppable.find('input[type="checkbox"]').prop('disabled', true);
		}
	};

	SapphireWidgets.DragDropArea = {
		create: create,
		refreshDragDrop: refreshDragDrop,
	};
})(jQuery, window, document, SapphireWidgets);


/***/ }),

/***/ "./src/components/05-components/v3-pat/dropdown-categories/scripts.js":
/*!****************************************************************************!*\
  !*** ./src/components/05-components/v3-pat/dropdown-categories/scripts.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* Component DropdownCategories */
(function ($, window, SapphireWidgets) {
	function optGroupSetValue(selectId, inputBoxId, buttonId) {
		var v = document.getElementById(selectId).value;
		$('#' + inputBoxId).val(v);
		$('#' + selectId + ' option[selected]').removeAttr('selected');

		if (v > -1) {
			$('#' + selectId + ' option[value="' + v + '"]').attr('selected', 'selected');
		}

		$('#' + buttonId).click();
		$('#s2id_' + selectId).removeClass('select2-container-active');
	}

	function OsCustomValidatorOptGroup(a, b) {
		var _e = $('#' + a.controltovalidate);
		var isValid = _e.find('option[selected]').length;
		var hasSibling_MandatorySelect2 = _e.prev('div.select2-container.Mandatory').length;

		if (hasSibling_MandatorySelect2) {
			if (isValid) {
				_e.prev('div.select2-container.Mandatory').removeClass('Not_Valid');
			} else {
				_e.prev('div.select2-container.Mandatory').addClass('Not_Valid');
			}
		}

		return isValid;
	}

	function addOptGroupValidator(optGroupElementId) {
		OsPage_Validators.push({
			controltovalidate: optGroupElementId,
			enabled: true,
			errormessage: 'Required field!',
			evaluationfunction: 'SapphireWidgets.DropdownCategories.OsCustomValidatorOptGroup',
			initialvalue: '',
			isvalid: true,
		});
	}

	SapphireWidgets.DropdownCategories = {
		optGroupSetValue,
		OsCustomValidatorOptGroup,
		addOptGroupValidator,
	};
})(jQuery, window, SapphireWidgets);

/***/ }),

/***/ "./src/components/05-components/v3-pat/dropzone/dropzone.js":
/*!******************************************************************!*\
  !*** ./src/components/05-components/v3-pat/dropzone/dropzone.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* Component Dropzone */
(function($, window, document, SapphireWidgets) {
	const create = function(config) {
		window.Dropzone.autoDiscover = false;

		$(document).ready(function() {
			bindEvents(config);

			const myDropzone = new window.Dropzone(config.hiddenInputContainer, {
				...config,
				init: function() {
					let prevFile;

					const filesList = config.filesList ? config.filesList.split(',') : [];

					for (const item of filesList) {
						const mockFile = { name: item, size: 12345678 };

						this.emit('addedfile', mockFile);
						this.emit('complete', mockFile);
						this.files.push(mockFile);

						$(`${config.hiddenInputContainer} .dz-filename`).attr('title', item);

						prevFile = mockFile;
					}

					if (+config.maxFiles === 1 && config.isReplacePrevious) {
						this.on('addedfile', function() {
							if (prevFile !== undefined) {
								this.removeFile(prevFile);
							}
						});
					}

					const $notifyInput = $(`#${config.notifyInputId}`);

					this.on('success', function(file, responseText) {
						prevFile = file;

						$(`#${config.notifyInputId} .dz-filename`).attr('title', file.name);
						$notifyInput.val(responseText);
						$notifyInput.change();
					});

					this.on('error', function(file, responseText) {
						prevFile = file;

						$notifyInput.val(responseText);
						$notifyInput.change();
					});
				},
			});
		});
	};

	const bindEvents = function(config) {
		$(`#${config.widgetId} .UploadMessageClass`).on('click', () => {
			$(`#${config.widgetId} .dz-clickable`).click();
		});
	};

	SapphireWidgets.Dropzone = { create };
})(jQuery, window, document, SapphireWidgets);


/***/ }),

/***/ "./src/components/05-components/v3-pat/expandable-link/scripts.js":
/*!************************************************************************!*\
  !*** ./src/components/05-components/v3-pat/expandable-link/scripts.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* Component ExpandableLink */
(function($, window, SapphireWidgets) {
	const create = widgetID => {
		const $elementWrapper = $(`#${widgetID}`);

		if ($elementWrapper.parent('.ExpandableList').hasClass('HideWhenEmpty')) {
			const text = $elementWrapper.find('.ExpandableLink__Content').text();

			if (text.length === 0) $elementWrapper.parent('.ExpandableList').hide();
		}

		bindEvents(widgetID);
	};

	const bindEvents = widgetID => {
		$(`#${widgetID} .ExpandableLink__Header`).click(() => openClose(`#${widgetID}`));
	};

	const openClose = elementID => {
		// When the expandables are inside a container with class ExpandableLinkGroup, will act like a expandable group
		const $linkGroup = $(elementID).closest('.ExpandableLinkGroup');

		if ($linkGroup.length) {
			const $expandables = $linkGroup.find('.ExpandableLink--expanded').not(elementID);

			$expandables.removeClass('ExpandableLink--expanded');
		}

		$(elementID).toggleClass('ExpandableLink--expanded');

		if (SapphireWidgets.ResizeParentIframe) {
			SapphireWidgets.ResizeParentIframe.resize();
		}
	};

	SapphireWidgets.ExpandableLink = { create };
})(jQuery, window, SapphireWidgets);


/***/ }),

/***/ "./src/components/05-components/v3-pat/fullscreen-tabs-wrapper/scripts.js":
/*!********************************************************************************!*\
  !*** ./src/components/05-components/v3-pat/fullscreen-tabs-wrapper/scripts.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* Component FullScreenTabsWrapper */
SapphireWidgets.FullScreenTabsWrapper = () => {
	$(document).ready(function() {
		$('.TabWrapper').click(function() {
			const $wrapper = $(this).closest('.FullScreenTabsWrapper__Tabs');
			$wrapper.find('*').removeClass('Active');

			$(this).addClass('Active');
		});
	});
};


/***/ }),

/***/ "./src/components/05-components/v3-pat/generic-gallery/scripts.js":
/*!************************************************************************!*\
  !*** ./src/components/05-components/v3-pat/generic-gallery/scripts.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* Component GenericGallery */
(function($, window, document, SapphireWidgets) {
	var create = function(config) {
		window[config.widgetId] = new GenericGallery(config);
	};

	var GenericGallery = function(config) {
		this.config = config;
		this.$widget = $('#' + this.config.widgetId).css('display', 'block');
		this.equalHeight = this.config.equalHeight;
		if (
			this.$widget.find('> .GenericGallery-content > span').length === 1 &&
			this.$widget.find('.GenericGallery-content > span').hasClass('ListRecords')
		) {
			this.$gallery = this.$widget.find('> .GenericGallery-content > span.ListRecords');
		} else {
			this.$gallery = this.$widget.find('> .GenericGallery-content');
		}

		let templateColumn = 'repeat(' + this.config.columnSizing + ', minmax(' + this.config.columnMinWidth + ', 1fr))';

		if (this.config.maxItemsRow > 0) {
			templateColumn = `repeat(${this.config.columnSizing}, minmax(max(${this.config.columnMinWidth}, (100% - (${this.config.maxItemsRow} - 1) * ${this.config.gapColumn}px) / ${this.config.maxItemsRow}), 1fr))`;
		}

		this.$gallery.css({
			display: 'grid',
			gridTemplateColumns: templateColumn,
		});

		this.$galleryItems = this.$gallery.children();
		this.$galleryItems.each(function() {
			if (!$(this).hasClass('GenericGallery-item')) {
				$(this).wrap('<div class="GenericGallery-item"></div>');
			}
		});
	};

	SapphireWidgets.GenericGallery = {
		create: create,
	};
})(jQuery, window, document, SapphireWidgets);


/***/ }),

/***/ "./src/components/05-components/v3-pat/generic-grid/scripts.js":
/*!*********************************************************************!*\
  !*** ./src/components/05-components/v3-pat/generic-grid/scripts.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* Component GenericGrid */
(function ($, window, document, SapphireWidgets) {
	var allGenericGrids = [];

	var create = function (config) {
		window[config.widgetId] = new GenericGrid(config);
		allGenericGrids.push(window[config.widgetId]);
	};

	var GenericGrid = function (config) {
		var _this = this;
		this.config = config;
		console.log(this.config);
	};

	SapphireWidgets.GenericGrid = {
		create: create,
	};

})(jQuery, window, document, SapphireWidgets);

/***/ }),

/***/ "./src/components/05-components/v3-pat/horizontal-toolbar/scripts.js":
/*!***************************************************************************!*\
  !*** ./src/components/05-components/v3-pat/horizontal-toolbar/scripts.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* Component HorizontalToolbar */
(function($, window, SapphireWidgets) {
	const create = config => {
		const $widget = $('#' + config.widgetId);

		$(document).ready(() => init($widget, config));

		if (config.isArrowNavigation) {
			$(window).load(() => {
				const $itemWrapper = $widget.find('.MenuItemWrapper.Active');
				if ($itemWrapper.length) {
					$itemWrapper[0].scrollIntoView({
						behavior: 'auto',
						block: 'end',
					});
				}
			});
		}
	};

	const init = ($widget, config) => {
		if (config.isArrowNavigation) {
			handleArrows($widget);

			const $toolbarItems = $widget.find('.Toolbar__Items');
			const $listItems = $widget.find('.Toolbar__Items .ListRecords');
			const $btnRight = $widget.find('.Toolbar__rightBtn');
			const $btnLeft = $widget.find('.Toolbar__leftBtn');

			$toolbarItems.scroll(() => handleArrows($widget));

			$btnRight.click(function() {
				var currentScroll = $toolbarItems.scrollLeft();
				var maxScrolll = $listItems.width() - $toolbarItems.width();
				var sideWidth = maxScrolll - 50;
				$toolbarItems.scrollLeft(currentScroll + 50);

				if (currentScroll == sideWidth) $btnRight.addClass('Disabled');
				if (currentScroll != 50) $btnLeft.removeClass('Disabled');
			});

			$btnLeft.click(function() {
				var currentScroll = $toolbarItems.scrollLeft();
				var maxScrolll = $listItems.width() - $toolbarItems.width();
				var sideWidth = maxScrolll - 50;
				$toolbarItems.scrollLeft(currentScroll - 50);

				if (currentScroll != sideWidth) $btnRight.removeClass('Disabled');
				if (currentScroll == 50) $btnLeft.addClass('Disabled');
			});

			$(window).on('resize.toolbar', () => handleArrows($widget));
		} else {
			handleResize($widget);
			bindEventsClick($widget);

			$(window).on('resize.toolbar', () => handleResize($widget));

			window.addEventListener('ToolbarFixed', () => handleResize($widget), false);
		}
	};

	handleArrows = $widget => {
		const $toolbarItems = $widget.find('.Toolbar__Items');
		const $listItems = $widget.find('.Toolbar__Items .ListRecords');
		const $btnRight = $widget.find('.Toolbar__rightBtn');
		const $btnLeft = $widget.find('.Toolbar__leftBtn');

		let currentScroll = $toolbarItems.scrollLeft();
		let menuWidth = $listItems.width();
		let externalWidth = $toolbarItems.width();
		var maxScrolll = menuWidth - externalWidth;

		if (externalWidth > menuWidth) {
			$btnLeft.hide();
			$btnRight.hide();

			$widget.find('.Toolbar_container').addClass('Toolbar_container--noarrows');
		} else {
			$btnLeft.show();
			$btnRight.show();

			$widget.find('.Toolbar_container').removeClass('Toolbar_container--noarrows');
		}

		if (currentScroll === 0) $btnLeft.addClass('Disabled');
		else $btnLeft.removeClass('Disabled');

		if (currentScroll >= maxScrolll) $btnRight.addClass('Disabled');
		else $btnRight.removeClass('Disabled');
	};

	handleResize = $widget => {
		let itemsTotal = 0;
		let hasItemsHidden = false;

		const $listItems = $widget.find('.Toolbar__Items .ListRecords');
		$listItems.find('> a[ui]').css('display', 'none');

		const menuWidth = $widget.find('.Toolbar__Items').outerWidth(true);

		$listItems.find('a[ui]').each(function() {
			itemsTotal += parseInt($(this).outerWidth(true), 10);

			if (itemsTotal + 90 < menuWidth) {
				$(this).css('display', 'block');
			} else {
				hasItemsHidden = true;

				return false;
			}
		});

		if (hasItemsHidden && !$listItems.find('.Toolbar__MoreOptions').length) {
			$widget
				.find('.Toolbar__MoreOptions')
				.clone()
				.css('display', 'block')
				.appendTo($listItems);

			hasItemsHidden = false;
		}

		const $optionsList = $widget.find('.Toolbar__Items .Toolbar__MoreOptionsList');

		$listItems.find('.Toolbar__MoreOptions').css('display', $optionsList.length ? 'block' : 'none');

		const $hiddenItems = $listItems.find('> a[ui]').filter(function() {
			return $(this).css('display') == 'none';
		});

		$optionsList.empty();

		const hasNotificationHidden = $hiddenItems.find('.MenuItemWrapper_Badge:not(:empty)').length !== 0;
		const $trigger = $widget.find('.Toolbar__Items .Toolbar__MoreOptionsIcon');

		if (hasNotificationHidden) $trigger.addClass('Toolbar__MoreOptionsIcon--notification');
		else $trigger.removeClass('Toolbar__MoreOptionsIcon--notification');

		$hiddenItems
			.clone()
			.css('display', 'block')
			.appendTo($optionsList);
	};

	bindEventsClick = $widget => {
		const $moreOptions = $widget.find('.Toolbar__Items .Toolbar__MoreOptions');
		const $trigger = $widget.find('.Toolbar__Items .Toolbar__MoreOptionsIcon');
		const $optionsList = $widget.find('.Toolbar__MoreOptionsList');

		$trigger.on('click', event => {
			$moreOptions.toggleClass('Toolbar__MoreOptions--open');
			event.stopPropagation();
		});

		$optionsList.on('mousewheel', event => {
			event.stopPropagation();
		});

		$('body').on('mouseup', event => {
			const $target = $(event.target).parents();

			if (!$target.andSelf().is($moreOptions)) {
				$moreOptions.removeClass('Toolbar__MoreOptions--open');
			}
		});
	};

	SapphireWidgets.HorizontalToolbar = {
		create,
	};
})(jQuery, window, SapphireWidgets);


/***/ }),

/***/ "./src/components/05-components/v3-pat/hour-picker/scripts.js":
/*!********************************************************************!*\
  !*** ./src/components/05-components/v3-pat/hour-picker/scripts.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* Component HourPicker */
(function($, window, SapphireWidgets) {
	class HourPicker {
		constructor(config) {
			// Options used by jQuery Timerpicker (External Lib)
			this.options = {
				...config,
			};

			SapphireWidgets.HourPicker.allIntances.push(config.widgetId);

			this.onComponentInit();
		}

		isComponentValid() {
			let valid = true;
			let message = `Component HourPicker (${this.options.widgetId}):`;
			let errors = '';

			if (this.$model.length && this.$model.length > 1) {
				errors = `${errors} - Needs one - and just one - Input element.`;
				valid = false;
			}

			if (!this.$model.length && this.$component.find('.HourPicker__Placeholder input').length) {
				errors = `${errors}\n - The Input element must be of type Text.`;
				valid = false;
			}

			if (!valid) console.error(`${message} ${errors}`);

			return valid;
		}

		setComponentPosition() {
			const $widget = $('.ui-timepicker-container');
			const labelLeft = this.$label.offset().left;
			const labelWidth = this.$label.width();
			const labelOuterWidth = this.$label.outerWidth();
			const widgetOuterWidth = $widget.outerWidth();
			const widgetMinWidth = +$widget.css('min-width').replace('px', '');
			const isOutsideWindow =
				labelLeft + labelOuterWidth > $(window).scrollLeft() + $(window).width() - widgetOuterWidth;

			$widget.css({
				left: () => {
					let value = labelLeft - (widgetMinWidth - labelWidth) / 2;

					if (isOutsideWindow) value = labelLeft + labelWidth - widgetOuterWidth;
					else if (value < 0) value = labelLeft;

					return value;
				},
			});
		}

		setElementClass(selector, className) {
			return className ? $(selector).addClass(className) : false;
		}

		defineTimeFormat() {
			let format = [];
			let amPm = '';

			format.push(this.options.is24hFormat ? 'HH' : 'hh');
			if (this.options.showMinutes) format.push('mm');
			if (this.options.showSeconds) format.push('ss');
			if (!this.options.is24hFormat) amPm = ' p';

			return `${format.join(':')}${amPm}`;
		}

		convertTime12to24(value) {
			const [time, modifier] = value.split(' ');
			let [hours, minutes = '00', seconds = '00'] = time.split(':');

			if (hours === '12') hours = '00';
			if (modifier === 'PM') hours = parseInt(hours, 10) + 12;

			return `${hours}:${minutes}:${seconds}`;
		}

		convertTimeFormatToMask(value = '') {
			return value.replace(/[a-zA-Z]+/g, '--');
		}

		onChangeEvent(value = '') {
			let model = '01-01-1900 00:00:00'; //i.e. null
			let label = this.convertTimeFormatToMask(this.options.timeFormat);

			if (value && !!value.trim()) {
				// This condition is correct, model always uses the 24h format
				model = this.options.is24hFormat ? value : this.convertTime12to24(value);
				label = value;
			}

			if (this.options.isNotifyEnabled) OsNotifyWidget(this.options.hourPickerFakeNotifyId, model);
			if (this.options.isTextTriggerable) this.$label.text(label);

			this.$model.val(model);
			this.$model.change();

			return;
		}

		onComponentInit() {
			this.$component = $(`#${this.options.widgetId}`);
			this.$model = this.$component.find('.HourPicker__Placeholder input[type="text"]');
			this.$input = this.$component.find('.HourPicker__Displayed .HourPicker__InputValue');
			this.$element = this.$input;

			this.options.timeFormat = this.defineTimeFormat();

			if (!this.isComponentValid()) return;
			else {
				const $container = this.$component;

				if (this.options.isTextTriggerable) {
					$container.addClass('HourPicker--textTrigger');

					this.$label = $container.find('.HourPicker__Displayed .HourPicker__LabelValue');
					this.$element = this.$label;

					this.$label.text(this.convertTimeFormatToMask(this.options.timeFormat));

					this.$label.on('click', () => {
						this.$label.timepicker().open();

						this.setComponentPosition();
					});
				}

				if (this.options.isClearable) {
					this.$buttonClear = $container.find('.HourPicker__Displayed .HourPicker__ButtonClear');

					this.$buttonClear.on('click', () => {
						this.$input.val('');
						this.onChangeEvent();
					});
				}

				this.$element.timepicker({
					...this.options,
					change: time => this.onChangeEvent(time ? $().timepicker.formatTime(this.options.timeFormat, time) : null),
				});

				this.setElementClass('.ui-timepicker-container', this.options.currentLocale === 'AR' ? 'rtl' : 'ltr');

				this.$input.prop('readonly', !this.options.isTypeEnabled);
				this.$input.prop('placeholder', this.options.timeFormat);
			}
		}
	}

	const create = config => {
		window[config.widgetId] = new HourPicker(config);
	};

	SapphireWidgets.HourPicker = {
		create,
		allIntances: [],
	};
})(jQuery, window, SapphireWidgets);


/***/ }),

/***/ "./src/components/05-components/v3-pat/input-lasa/scripts.js":
/*!*******************************************************************!*\
  !*** ./src/components/05-components/v3-pat/input-lasa/scripts.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* Component InputLASA */
(function() {
	var setupInput = function(config) {
		$('body').off('click', '#' + config.labelId);
		$('body').off('blur change input', '#' + config.inputId);

		$('#' + config.inputId).css('width', '100%');
		$('#' + config.labelId).css('width', '100%');

		$('#' + config.inputId).hide();
		$('#' + config.labelId).show();

		SapphireWidgets.MarkWordsFromList.handlePrompt(config);

		$('body').on('click', '#' + config.labelId, function() {
			$('#' + config.labelId).hide();
			$('#' + config.inputId).show();
			$('#' + config.inputId).focus();
		});

		$('body').on('blur', '#' + config.inputId, function() {
			SapphireWidgets.MarkWordsFromList.handlePrompt(config);
			$('#' + config.inputId).hide();
			$('#' + config.labelId).show();
			window.setTimeout(function() {
				SapphireWidgets.MarkWordsFromList.handlePrompt(config);
				SapphireWidgets.MarkWordsFromList.applyMarking({ target: config.labelId });
			}, 250);
		});

		$('body').on('change input', '#' + config.inputId, function() {
			$('#' + config.labelId).text($('#' + config.inputId).val());
			window.setTimeout(function() {
				SapphireWidgets.MarkWordsFromList.applyMarking({ target: 'page' });
			}, 250);
		});
	};

	var handlePrompt = function(config) {
		if (!$('#' + config.inputId).val().length) {
			$('#' + config.labelId)
				.text($('#' + config.inputId).prop('placeholder'))
				.css('color', '#999');
		} else {
			$('#' + config.labelId)
				.text($('#' + config.inputId).val())
				.css('color', '');
		}
	};

	SapphireWidgets.MarkWordsFromList = SapphireWidgets.MarkWordsFromList = SapphireWidgets.MarkWordsFromList || {};
	SapphireWidgets.MarkWordsFromList.setupInput = setupInput;
	SapphireWidgets.MarkWordsFromList.handlePrompt = handlePrompt;
})();


/***/ }),

/***/ "./src/components/05-components/v3-pat/input-with-clear/scripts.js":
/*!*************************************************************************!*\
  !*** ./src/components/05-components/v3-pat/input-with-clear/scripts.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() {
	class InputWithClear {
		constructor(config) {
			this.config = config;
			this.$widget = $(`#${config.widgetId}`);
			this.$input = this.$widget.find('input[type]');
			this.$clear = this.$widget.find('.InputWithClear-clear');
			this.$notifyLink = this.$widget.find('.InputWithClear-notify-link');
			this.$widgetShield = this.$widget.find('.InputWithClear--shield');
			this.onInit();
		}

		onInit() {
			this.$input.on('keyup', e => {
				if (this.$input.val() !== '') this.$clear.show();
				else this.$clear.show();
			});

			this.$input.on('blur', () => {
				if (this.$input.val() === '') {
					window.setTimeout(() => {
						if ($('.daterangepicker:visible').length === 1) {
							return false;
						}
						this.$clear.hide();
						this.$notifyLink.trigger('click');
					}, 100);
				}
			});
			this.$clear.on('click', () => {
				this.$input.val('');
				this.$clear.hide();
				this.$notifyLink.trigger('click');
			});
			if (this.config.hasShield) {
				window.setTimeout(() => {
					this.$widgetShield.hide();
				}, this.config.shieldTimeout);
				if (this.config.shieldTimeout > 0) {
					this.$widgetShield.on('click', () => {
						this.$clear.hide();
					});
				}
			}
		}
	}

	const create = config => (window[config.widgetId] = new InputWithClear(config));

	SapphireWidgets.InputWithClear = {
		create,
	};
})();


/***/ }),

/***/ "./src/components/05-components/v3-pat/input-with-list/scripts.js":
/*!************************************************************************!*\
  !*** ./src/components/05-components/v3-pat/input-with-list/scripts.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() {
	class InputWithList {
		constructor(config) {
			this.config = config;
			this.$widget = $(`#${config.widgetId}`);
			this.$input = this.$widget.find('input[type]');
			this.$list = this.$widget.find('.InputWithList__List');

			this.$input.val('');

			this.onInit();
		}

		onInit() {
			this.$input.on('keyup', e => {
				// Getting elements again in order to work when this component is cloned (e.g. when using inside ActionsMenu)
				this.$widget = $(`#${this.config.widgetId}`);
				const $input = this.$widget.find('input[type]');
				const $list = this.$widget.find('.InputWithList__List');
				this.$hiddenInput = this.$widget.find('.InputWithList__HiddenInput input');

				if ($input.val().trim() !== '') {
					$list.empty();

					$list.append(`<div><b>Create:</b> ${$input.val()}</div>`);

					if (!$list.is(':visible')) $list.show();
				} else {
					$list.hide();
				}
			});

			this.$list.on('click', e => {
				const $linkNotify = this.$widget.find('.InputWithList-notify-link');
				const $list = this.$widget.find('.InputWithList__List');
				const $input = this.$widget.find('input[type]');

				this.$hiddenInput.val($input.val());
				this.$hiddenInput.change();

				$linkNotify.click();
				$list.hide();
			});
		}
	}

	const create = config => (window[config.widgetId] = new InputWithList(config));

	SapphireWidgets.InputWithList = {
		create,
	};
})();


/***/ }),

/***/ "./src/components/05-components/v3-pat/line-add/scripts.js":
/*!*****************************************************************!*\
  !*** ./src/components/05-components/v3-pat/line-add/scripts.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* Component LineAdd */
(function($, window, SapphireWidgets) {
	const create = function(config) {
		$(window).load(function() {
			setWidth(config.widgetId);
			SapphireWidgets.LineAdd.widgetId = config.widgetId;

			osAjaxBackend.BindAfterAjaxRequest(() => setWidth(config.widgetId));
		});

		$(window).on('resize.LineAdd', () => setWidth(config.widgetId));
	};

	const setWidth = function(widgetId) {
		window.setTimeout(function() {
			const $widget = $(`#${widgetId || SapphireWidgets.LineAdd.widgetId}`);
			const widths = [];

			for (i = 1; i < 8; i++) {
				let maxWidthContent = Math.max.apply(
					null,
					$widget
						.find('.lacol' + i)
						.map(function() {
							return $(this).width();
						})
						.get()
				);

				widths.push(maxWidthContent);
				$widget.find('.lacol' + i).width(maxWidthContent);
			}
		}, 100);
	};

	SapphireWidgets.LineAdd = { create, setWidth };
})(jQuery, window, SapphireWidgets);


/***/ }),

/***/ "./src/components/05-components/v3-pat/line-details-expand-box/script.js":
/*!*******************************************************************************!*\
  !*** ./src/components/05-components/v3-pat/line-details-expand-box/script.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* Component LineDetailsExpandBox */
(function($, window, SapphireWidgets) {
	const init = config => {
		$(`#${config.widgetId} + .LineDetailsExpandBox_action`).click(event => {
			event.stopPropagation();
		});
	};

	const create = config => $(document).ready(() => init(config));

	SapphireWidgets.LineDetailsExpandBox = { create };
})(jQuery, window, SapphireWidgets);


/***/ }),

/***/ "./src/components/05-components/v3-pat/location-box/scripts.js":
/*!*********************************************************************!*\
  !*** ./src/components/05-components/v3-pat/location-box/scripts.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* Component LocationBox */
SapphireWidgets.LocationBox = function(widgetId) {
	const $component = $(`#${widgetId}`);

	if ($component.hasClass('On')) {
		$('.DisableRoom').each(function() {
			$(this)
				.removeClass('Off')
				.removeClass('On');
			$(this)
				.parent('.RoomBox')
				.css({
					opacity: '1',
				})
				.removeClass('Selected');
		});
	} else {
		$component
			.addClass('On')
			.removeClass('Off')
			.parent('.RoomBox')
			.css({
				opacity: '1',
			})
			.addClass('Selected');

		$('.DisableRoom:not(#' + widgetId + ')').each(function() {
			$(this).addClass('Off');
			$(this).removeClass('On');
		});

		$('.DisableRoom.Off')
			.parent('.RoomBox')
			.css({
				opacity: '0.50',
			})
			.removeClass('Selected');
	}
};


/***/ }),

/***/ "./src/components/05-components/v3-pat/main-interactive-card/scripts.js":
/*!******************************************************************************!*\
  !*** ./src/components/05-components/v3-pat/main-interactive-card/scripts.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* Component MainInteractiveCard */
(function($, window, document, SapphireWidgets) {
	var allMainInteractiveCards = [];
	var defaultDuration = 300;

	var create = function(config) {
		for (var i = 0; i < allMainInteractiveCards.length; i++) {
			if (allMainInteractiveCards[i].config.widgetId === config.widgetId) {
				allMainInteractiveCards.splice(i, 1);
			}
		}
		window[config.widgetId] = new MainInteractiveCard(config);
		allMainInteractiveCards.push(window[config.widgetId]);

		if (!!!SapphireWidgets.MainInteractiveCard.afterAjaxRequestBinded && !!osAjaxBackend) {
			osAjaxBackend.BindAfterAjaxRequest(function() {
				var allMainInteractiveCards = SapphireWidgets.MainInteractiveCard.all();
				allMainInteractiveCards.forEach(function(element) {
					element.handleHeaderWithAbsoluteButtons();
				});
			});
			SapphireWidgets.MainInteractiveCard.afterAjaxRequestBinded = true;
		}
	};

	var MainInteractiveCard = function(config) {
		var _this = this;
		this.config = config;
		this.isLockedOnClose = false;
		this.isOpen = config.isOpen;
		this.isEnabled = config.isEnabled;
		this.isSelectable = config.isSelectable;
		this.allowOpening = config.allowOpening;
		this.allowMultipleOpen = config.allowMultipleOpen;
		this.emitNotifyOnOpen = config.emitNotifyOnOpen;
		this.hideActionsOnOpen = config.hideActionsOnOpen;
		this.hideCaptionOnOpen = config.hideCaptionOnOpen;
		this.hideTitleOnOpen = config.hideTitleOnOpen;
		this.hideSubTitleOnOpen = config.hideSubTitleOnOpen;
		this.headerHeightWhenOpen = config.headerHeightWhenOpen;
		this.MainInteractiveCardFakeNotifyId = config.mainInteractiveCardFakeNotifyId;

		this.$widget = $('#' + config.widgetId);
		this.$widget.css('display', 'block');
		this.$card = this.$widget.find('> .MainInteractiveCard');
		this.$header = this.$widget.find('> .MainInteractiveCard > .MainInteractiveCard-header');
		this.$headerText = this.$header.find('.MainInteractiveCard-header-text');
		this.$expandIcon = this.$header.find('.MainInteractiveCard-expand-icon');
		this.$body = this.$widget.find('> .MainInteractiveCard > div > .MainInteractiveCard-body');
		this.$actions = this.$widget.find(
			'> .MainInteractiveCard > .MainInteractiveCard-header .MainInteractiveCard-header-actions'
		);
		this.$caption = this.$widget.find(
			'> .MainInteractiveCard > .MainInteractiveCard-header .MainInteractiveCard-header-text-caption'
		);
		this.$title = this.$widget.find(
			'> .MainInteractiveCard > .MainInteractiveCard-header .MainInteractiveCard-header-text-title'
		);
		this.$subTitle = this.$widget.find(
			'> .MainInteractiveCard > .MainInteractiveCard-header .MainInteractiveCard-header-text-subtitle'
		);
		this.$selectTrigger = this.$widget.find(
			'> .MainInteractiveCard > .MainInteractiveCard-header > .MainInteractiveCard-header-selectable > .MainInteractiveCard-header-selectable-trigger'
		);
		this.$selectPlaceholder = this.$widget.find(
			'> .MainInteractiveCard > .MainInteractiveCard-header .MainInteractiveCard-header-selectable-placeholder'
		);
		this.$triggerPlaceholder = this.$widget.find(
			'> .MainInteractiveCard > .MainInteractiveCard-header-triggerAction-placeholder'
		);

		if (this.$triggerPlaceholder.find('a').length === 1) {
			this.$trigger = this.$triggerPlaceholder.find('a');
		}

		if (this.isOpen) {
			this.open(false, -1);
			this.$card.addClass('forceOpen');
		}

		this.$card.addClass(this.headerHeightWhenOpen + 'Header');

		if (this.allowOpening) {
			this.$card.addClass('allowOpening');
		}

		this.attachEvents();

		var observer = new MutationObserver(function(mutations) {
			mutations.forEach(function(mutation, index) {
				_this.handleHeaderWithAbsoluteButtons();
			});
		});

		observer.observe(document.getElementById(config.widgetId), {
			childList: true,
			subtree: true,
			attributes: false,
		});
	};

	MainInteractiveCard.prototype.handleHeaderWithAbsoluteButtons = function() {
		var _this = this;
		if (!!this.$body.find('> div .MainInteractiveCard-absolute-actions').length && this.isOpen) {
			var absoluteActionsWidth = Math.max.apply(
				Math,
				this.$body
					.find('> div .MainInteractiveCard-absolute-actions')
					.map(function() {
						return $(this).outerWidth(true);
					})
					.get()
			);
			var headerMaxWidth = this.$header.width() - absoluteActionsWidth;
			if (headerMaxWidth > 10) {
				this.$headerText.css({
					maxWidth: headerMaxWidth + 'px',
				});
			}
			this.$body
				.find('> div .MainInteractiveCard-absolute-actions .MainInteractiveCard--close')
				.off('click')
				.on('click', function(e) {
					e.preventDefault();
					_this.close();
				});
		}
	};

	MainInteractiveCard.prototype.attachEvents = function() {
		var _this = this;
		this.$header
			.find('.MainInteractiveCard--open:not([disabled])')
			.off('click')
			.on('click', function(e) {
				e.preventDefault();
				_this.open(true);
			});
		this.$header
			.find('.MainInteractiveCard--close')
			.off('click')
			.on('click', function(e) {
				e.preventDefault();
				_this.close();
			});
		if (this.allowOpening) {
			const clickAction = function(evt) {
				if ($(evt.target).hasClass('Button')) {
					// the user clicked on a Button inside the header, nothing to do here
				} else {
					if (_this.isOpen) {
						if (
							_this.$widget.find('iframe').length === 1 &&
							!_this.$widget.find('iframe').hasClass('cke_wysiwyg_frame')
						) {
							// do not close when and iframe exists
						} else if (
							_this.$actions.find('a').length > 0 &&
							_this.$actions.find('.MainInteractiveCard--close').length > 0
						) {
							// do not close when the card has actions
						} else {
							_this.close();
						}
					} else {
						_this.open(true);
					}
				}
			};

			this.$headerText.off('click').on('click', function(e) {
				clickAction(e);
			});
			this.$expandIcon.off('click').on('click', function(e) {
				clickAction(e);
			});
		}
		if (this.isSelectable) {
			this.$selectTrigger.off('click').on('click', function(e) {
				if (_this.$selectPlaceholder.find('a').length === 1) {
					_this.$selectPlaceholder.find('a').click();
				} else {
					console.warn('You need 1 link in this placeholder.');
				}
			});
		}
	};

	MainInteractiveCard.prototype.open = function(sendNotify, duration) {
		var duration = duration || defaultDuration;
		this.isOpen = true;
		this.$card.addClass('isOpen');
		if (this.hideActionsOnOpen) {
			this.$actions.css('display', 'none');
		}
		if (this.hideTitleOnOpen) {
			this.$title.css('display', 'none');
		}
		if (this.hideSubTitleOnOpen) {
			this.$subTitle.css('display', 'none');
		}
		if (this.hideCaptionOnOpen) {
			this.$caption.css('display', 'none');
		}
		if (this.emitNotifyOnOpen) {
			if (sendNotify) {
				OsNotifyWidget(this.MainInteractiveCardFakeNotifyId, 'open');
			}
			this.$body.css('display', 'block');
		} else if (this.$trigger) {
			this.$trigger.click();
			this.$body.css('display', 'block');
		} else {
			if (duration > 0) {
				this.$body.slideDown(duration);
			} else {
				this.$body.css('display', 'block');
			}
		}
		if (this.$widget.find('iframe').length === 1 && !this.$widget.find('iframe').hasClass('cke_wysiwyg_frame')) {
			var iframeContents = this.$widget.find('iframe').contents();
			iframeContents.find('.MainInteractiveCard-iframe-actions').css('visibility', 'visible');
		} else {
			this.handleHeaderWithAbsoluteButtons();
		}
		if (!this.allowMultipleOpen) {
			allMainInteractiveCards.forEach(item => (item !== this && item.allowOpening ? item.close(duration) : null));
		}
	};

	MainInteractiveCard.prototype.close = function(duration) {
		var self = this;
		var duration = duration || defaultDuration;
		this.isOpen = false;
		this.$card.removeClass('isOpen');
		if (this.$widget.find('iframe').length === 1 && !this.$widget.find('iframe').hasClass('cke_wysiwyg_frame')) {
			this.$widget
				.find('iframe')
				.find('.MainInteractiveCard-iframe-actions')
				.css('visibility', 'hidden');
		}
		this.$body.slideUp(duration, function() {
			if (self.$card.hasClass('forceOpen')) {
				self.$card.removeClass('forceOpen');
			}
		});
		if (this.hideActionsOnOpen) {
			this.$actions.show();
		}
		if (this.hideTitleOnOpen) {
			this.$title.css('display', 'block');
		}
		if (this.hideSubTitleOnOpen) {
			this.$subTitle.css('display', 'block');
		}
		if (this.hideCaptionOnOpen) {
			this.$caption.css('display', 'block');
		}

		if (this.$header.width() - this.$actions.width() > 10) {
			this.$headerText.css({
				maxWidth: this.$header.width() - this.$actions.width() + 'px',
			});
		}
	};

	MainInteractiveCard.prototype.isOpen = function() {
		return this.isOpen;
	};

	SapphireWidgets.MainInteractiveCard = {
		create: create,
		all: function() {
			return allMainInteractiveCards;
		},
	};
})(jQuery, window, document, SapphireWidgets);

$(window).load(function() {
	if (!!$('.MainInteractiveCard').length) {
		if (!!!SapphireWidgets.MainInteractiveCard.afterAjaxRequestBinded) {
			osAjaxBackend.BindAfterAjaxRequest(function() {
				var allMainInteractiveCards = SapphireWidgets.MainInteractiveCard.all();
				allMainInteractiveCards.forEach(function(element) {
					element.handleHeaderWithAbsoluteButtons();
				});
			});
			SapphireWidgets.MainInteractiveCard.afterAjaxRequestBinded = true;
		}
	}

	setTimeout(function() {
		var allMainInteractiveCards = SapphireWidgets.MainInteractiveCard.all();
		allMainInteractiveCards.forEach(function(element) {
			element.handleHeaderWithAbsoluteButtons();
		});
	}, 1000);
});


/***/ }),

/***/ "./src/components/05-components/v3-pat/menu-bar/scripts.js":
/*!*****************************************************************!*\
  !*** ./src/components/05-components/v3-pat/menu-bar/scripts.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* Component MenuBar */
SapphireWidgets.MenuBar = function(config) {
	$(function() {
		var $menuWidget = $('#' + config.menuWidget);

		var menuResider = function() {
			var navWidth = 0;
			var availabeEspace = $menuWidget.find('.Menubar_item').width();

			$menuWidget.find('.Menubar_item .MenuItem').each(function() {
				navWidth += $(this).outerWidth(true);
			});

			if (navWidth > availabeEspace) {
				var lastItem = $menuWidget.find('.Menubar_item .MenuItem').last();
				lastItem.attr('data-width', lastItem.outerWidth(true));
				lastItem.prependTo($menuWidget.find('.Menubar__extraContainer'));
				menuResider();
			} else {
				var firstMoreElement = $menuWidget.find('.Menubar__extraContainer .MenuItem').first();
				if (navWidth + firstMoreElement.data('width') < availabeEspace) {
					firstMoreElement.insertAfter($menuWidget.find('.Menubar_item .MenuItem').last());
					menuResider();
				}
			}

			if (!$menuWidget.find('.Menubar__extraContainer').is(':empty')) {
				$menuWidget.find('.Menubar_extraItem').addClass('show');
			} else {
				$menuWidget.find('.Menubar_extraItem').removeClass('show');
			}
		};

		$menuWidget.find('.MenuItem').click(function() {
			if (
				!$(this)
					.parent()
					.hasClass('Menubar__extraContainer')
			) {
				if (!$(this).hasClass('active') && !$(this).hasClass('activeIndicator')) {
					$(this).addClass('active');
					$menuWidget.find('.activeIndicator').addClass('shadow');
					$(this)
						.find('.MenuItem_subItems')
						.toggleClass('show');
				} else if (!$(this).hasClass('active') && $(this).hasClass('activeIndicator')) {
					$(this).addClass('active');
					$(this)
						.find('.MenuItem_subItems')
						.toggleClass('show');
				}
			} else {
				$(this)
					.find('.MenuItem_subItems')
					.toggleClass('show');
			}
		});

		$menuWidget.find('.Menubar_extraItem .icon').click(function() {
			$menuWidget.find('.Menubar__extraContainer ').toggleClass('show');
		});

		$(document).mouseup(e => {
			var $menu = $menuWidget.find('.MenuItem.active');
			var $moreOptions = $menuWidget.find('.Menubar_extraItem');

			// if the target of the click isn't the menu or a descendant of the menu
			if ($menu.length > 0) {
				if (!$menu.is(e.target) && $menu.has(e.target).length === 0) {
					$menu.find('.MenuItem_subItems').removeClass('show');
					$('.activeIndicator').removeClass('shadow');
					$menuWidget.find('.MenuItem.active').removeClass('active');
				}
			}

			if (!$moreOptions.is(e.target) && $moreOptions.has(e.target).length === 0) {
				$moreOptions.find('.Menubar__extraContainer').removeClass('show');
				$('.activeIndicator').removeClass('shadow');
			}
		});

		$(window).on('resize load', function() {
			menuResider();
		});
	});
};


/***/ }),

/***/ "./src/components/05-components/v3-pat/multiple-selection-button/scripts.js":
/*!**********************************************************************************!*\
  !*** ./src/components/05-components/v3-pat/multiple-selection-button/scripts.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* Component MultipleSelectionButton */
SapphireWidgets.MultipleSelectionButton = function(WrapperId) {
	const $widget = $(WrapperId);
	const $control = $widget.find('input[type="checkbox"]');

	if ($(WrapperId + ' input[type="checkbox"]').is(':disabled')) {
		$widget.addClass('disabled');
	} else {
		$widget.removeClass('disabled');
	}

	if ($(WrapperId + ' input[type="checkbox"]').is(':checked')) {
		$widget.addClass('active');
	} else {
		$widget.removeClass('active');
	}

	$widget.find('input[type="checkbox"]').change(function() {
		const $parent = $(this).parent();

		if ($(this).is(':checked')) $parent.parent().addClass('active');
		else $parent.parent().removeClass('active');
	});

	$widget.find('.MultipleSelectionButton-label').click(function() {
		$control[0].click();

		setTimeout(function() {
			if ($control.is(':checked')) $widget.addClass('active');
			else $widget.removeClass('active');
		}, 10);
	});
};


/***/ }),

/***/ "./src/components/05-components/v3-pat/panel/confirmation-panel.js":
/*!*************************************************************************!*\
  !*** ./src/components/05-components/v3-pat/panel/confirmation-panel.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* Component ConfirmationPanel3Options ConfirmationPanel same javascript code*/

SapphireWidgets.ConfirmationPanel = {
	isAnyPanelOpened: function() {
		return $('body').hasClass('PanelOpened') && $('.PanelContainer:visible').length;
	},

	togglePanel: function(PanelId) {
		if (!OsValidatorOnSubmit()) return;

		if (!SapphireWidgets.ConfirmationPanel.isAnyPanelOpened()) {
			$('body').addClass('PanelOpened');
			$('#' + PanelId).fadeIn(140);

			setTimeout(function() {
				$('#' + PanelId)
					.find('.PanelContainer')
					.slideToggle(150);
			}, 100);

			if (window.frameElement) {
				SapphireWidgets.RemoteAppointment.setModalMinimized();
			}
		}
	},

	closePanel: function(PanelId) {
		$('body').removeClass('PanelOpened');
		$('#' + PanelId).fadeOut(140);

		setTimeout(function() {
			$('#' + PanelId)
				.find('.PanelContainer')
				.slideUp(150);
		}, 100);
	},

	setPanelBehavior: function() {
		$('.Panel[confirmation-panel-trigger-elementid]').each(function() {
			var this_panel = $(this);
			$('#' + this_panel.attr('confirmation-panel-trigger-elementid') + '')
				.off('click')
				.on('click', function() {
					SapphireWidgets.ConfirmationPanel.togglePanel(this_panel.attr('id'));
					return false;
				});
		});
	},
};

$(document).ready(function() {
	SapphireWidgets.ConfirmationPanel.setPanelBehavior();
	if (osAjaxBackend.EventHandlers.AfterAjaxRequest.toString().indexOf('setPanelBehavior') == -1) {
		osAjaxBackend.BindAfterAjaxRequest(SapphireWidgets.ConfirmationPanel.setPanelBehavior);
	}
});


/***/ }),

/***/ "./src/components/05-components/v3-pat/panel/confirmation-popup.js":
/*!*************************************************************************!*\
  !*** ./src/components/05-components/v3-pat/panel/confirmation-popup.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* Component ConfirmationPopup */
var _isInIframe = window.frameElement != undefined || false;
SapphireWidgets.ConfirmationPopup = {
	isAnyConfirmationOpened: function() {
		if (_isInIframe) {
			return window.top.$('body').hasClass('confirmation-opened') && window.top.$('.confirm-container:visible').length;
		} else {
			return $('body').hasClass('confirmation-opened') && $('.confirm-container:visible').length;
		}
	},

	toggleConfirm: function(_id, _question, _message, _notifyId, _HasNotifyOnCancel) {
		if (!OsValidatorOnSubmit()) return;

		if (!this.isAnyConfirmationOpened()) {
			var _body = $('body');
			var _bodyJS = document.body;
			if (_isInIframe) {
				_body = window.top.$('body');
				_bodyJS = window.top.document.body;
			}

			_body.addClass('confirmation-opened');

			var _confirmId = 'confirm_' + _id;

			var _container = document.createElement('DIV');
			_container.setAttribute('id', _confirmId);
			_container.setAttribute('class', 'confirm confirm-wb');
			_container.setAttribute('confirm-trigger-elementid', _id);

			var _background = document.createElement('DIV');
			_background.setAttribute('class', 'confirm-background confirm-wb');
			_background.setAttribute('id', 'bg_' + _confirmId);
			_container.appendChild(_background);

			var _confirm = document.createElement('DIV');
			_confirm.setAttribute('class', 'confirm-container confirm-wb');
			_container.appendChild(_confirm);

			var _confirmTitle = document.createElement('DIV');
			_confirmTitle.setAttribute('class', 'confirm-title');
			var _title = document.createTextNode(_question);
			_confirmTitle.appendChild(_title);
			_confirm.appendChild(_confirmTitle);

			var _confirmMsg = document.createElement('DIV');
			_confirmMsg.setAttribute('class', 'confirm-message');

			_confirmMsg.innerHTML = _message; /* Set HTML to render the message HTML tags, similar to the Escape Content set as No. */
			_confirm.appendChild(_confirmMsg);

			var _confirmActions = document.createElement('DIV');
			_confirmActions.setAttribute('class', 'confirm-actions');
			_confirm.appendChild(_confirmActions);

			var _noBtnLnk = document.createElement('A');
			_noBtnLnk.setAttribute('class', 'Button Third MultiMarginRight10');
			_noBtnLnk.setAttribute('cancel-button', 'cancel-button');
			_noBtnLnk.setAttribute('ui', 'ConfirmNo1');
			if (_HasNotifyOnCancel == 'True') {
				if (_isInIframe) {
					_noBtnLnk.setAttribute(
						'onclick',
						'document.getElementById("' +
							'iframe_' +
							_id +
							'").contentWindow.OsNotifyWidget("' +
							_notifyId +
							'","CANCEL"); SapphireWidgets.ConfirmationPopup.closeConfirmPopup("' +
							_confirmId +
							'");'
					);
				} else {
					_noBtnLnk.setAttribute(
						'onclick',
						'OsNotifyWidget("' +
							_notifyId +
							'","CANCEL"); SapphireWidgets.ConfirmationPopup.closeConfirmPopup("' +
							_confirmId +
							'");'
					);
				}
			} else {
				if (_isInIframe) {
					_noBtnLnk.setAttribute(
						'onclick',
						'SapphireWidgets.ConfirmationPopup.closeConfirmPopup("' + _confirmId + '");'
					);
				} else {
					_noBtnLnk.setAttribute(
						'onclick',
						'SapphireWidgets.ConfirmationPopup.closeConfirmPopup("' + _confirmId + '");'
					);
				}
			}

			var _noBtn = document.createTextNode('No');
			_noBtnLnk.appendChild(_noBtn);
			_confirmActions.appendChild(_noBtnLnk);

			var _yesBtnLnk = document.createElement('A');
			_yesBtnLnk.setAttribute('class', 'Button SetAsValid Is_Default');
			_yesBtnLnk.setAttribute('cancel-button', '');
			_yesBtnLnk.setAttribute('ui', 'ConfirmYes1');

			if (_isInIframe) {
				_yesBtnLnk.setAttribute(
					'onclick',
					'document.getElementById("' +
						'iframe_' +
						_id +
						'").contentWindow.OsNotifyWidget("' +
						_notifyId +
						'","OK"); SapphireWidgets.ConfirmationPopup.closeConfirmPopup("' +
						_confirmId +
						'");'
				);
			} else {
				_yesBtnLnk.setAttribute(
					'onclick',
					'OsNotifyWidget("' +
						_notifyId +
						'","OK"); SapphireWidgets.ConfirmationPopup.closeConfirmPopup("' +
						_confirmId +
						'");'
				);
			}
			var _yesBtn = document.createTextNode('Yes');
			_yesBtnLnk.appendChild(_yesBtn);
			_confirmActions.appendChild(_yesBtnLnk);

			_confirm.appendChild(_confirmActions);

			_container.appendChild(_confirm);

			_bodyJS.appendChild(_container);

			if (_isInIframe) {
				window.top.$('#bg_' + _confirmId).fadeIn(140);
				setTimeout(function() {
					window.top
						.$('#' + _confirmId)
						.find('.confirm-container')
						.slideToggle(150);
					window.top.$('#' + _confirmId + ' [cancel-button]').focus();
				}, 100);

				SapphireWidgets.RemoteAppointment.setModalMinimized();
			} else {
				$('#bg_' + _confirmId).fadeIn(140);
				setTimeout(function() {
					$('#' + _confirmId)
						.find('.confirm-container')
						.slideToggle(150);
					$('#' + _confirmId + ' [cancel-button]').focus();
				}, 100);
			}
		}
	},

	closeConfirmPopup: function(_confirmId) {
		$('body').removeClass('confirmation-opened');
		$('body').css('overflow-y', 'scroll');
		$('#bg_' + _confirmId).fadeOut(140);

		setTimeout(function() {
			$('#' + _confirmId)
				.find('.confirm-container')
				.slideUp(150);
			$('#' + _confirmId).remove();
		}, 100);
	},

	create: function(_id, _question, _message, _notifyId, _HasNotifyOnCancel) {
		$(document).ready(function() {
			$('#' + _id)
				.off('click')
				.on('click', function() {
					SapphireWidgets.ConfirmationPopup.toggleConfirm(_id, _question, _message, _notifyId, _HasNotifyOnCancel);
					if (_isInIframe) {
						window.frameElement.setAttribute('menu-id', _id);
						window.frameElement.setAttribute('id', 'iframe_' + _id);
					}
					return false;
				});
		});
	},
};


/***/ }),

/***/ "./src/components/05-components/v3-pat/panel/modal-popup.js":
/*!******************************************************************!*\
  !*** ./src/components/05-components/v3-pat/panel/modal-popup.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* Component ModalPopup */

var _isInIframe = window.frameElement != undefined || false;

SapphireWidgets.ModalPopup = {
	create: function(widgetId) {
		$(document).ready(function() {
			// Use this code to append the component to the root body
			// window.frameElement && $(window.frameElement).closest('.MainInteractiveCard-body').length > 0
			if (false) {} else {
				const $widget = $(`#${widgetId}`);
				const $btnClose = $widget.find('.modalPopup_close');

				if (window.frameElement) {
					const $modalRemoteAppt = window.top.$('.RemoteAppointment');

					if ($modalRemoteAppt.length) {
						const $minimizeModal = $modalRemoteAppt.find('.Minimize');
						$minimizeModal.click();
					}
				}

				$btnClose.click(function() {
					$widget.removeClass('Open');
					$widget.removeClass('showclose');
				});
			}
		});
	},
};


/***/ }),

/***/ "./src/components/05-components/v3-pat/panel/panel-by-id-notify.js":
/*!*************************************************************************!*\
  !*** ./src/components/05-components/v3-pat/panel/panel-by-id-notify.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* Component PanelByIDNotify */
var panelNotifyWidget;
SapphireWidgets.PanelByIdNotify = {
	isAnyPanelOpenedDeprecated: function() {
		return $('body').hasClass('PanelOpened');
	},
	togglePanelByNotify: function(Id) {
		if (!isAnyPanelOpenedDeprecated()) {
			$('body').addClass('PanelOpened');
			$('#' + Id)
				.parents('.ToggleButton')
				.parent()
				.children('.Panel')
				.fadeIn(140);

			try {
				if (justDragged == false) {
					$('.PanelContainer')
						.css('margin-left', panelMarginLeft)
						.css('left', panelLeft)
						.addClass(panelArrowClass);
				}
			} catch (e) {
				console.log(e);
			}

			setTimeout(function() {
				$('#' + Id)
					.parents('.ToggleButton')
					.parent()
					.children('.Panel')
					.children('.PanelContainer')
					.slideDown(150);
			}, 100);
		} else {
			$('body').removeClass('PanelOpened');
			$('#' + Id)
				.parents('.ToggleButton')
				.parent()
				.children('.Panel')
				.fadeOut(140);
			setTimeout(function() {
				$('#' + Id)
					.parents('.ToggleButton')
					.parent()
					.children('.Panel')
					.children('.PanelContainer')
					.slideUp(150);
			}, 100);
		}
	},
	togglePanelNotifyById: function(Id) {
		$('body').toggleClass('PanelOpened');
		$('#' + Id)
			.parents('.ToggleButton')
			.parent()
			.children('.Panel')
			.fadeToggle(140);

		panelNotifyWidget = $('#' + Id)
			.parents('.ToggleButton')
			.attr('NotifyId');

		setTimeout(function() {
			$('#' + Id)
				.parents('.ToggleButton')
				.parent()
				.children('.Panel')
				.children('.PanelContainer')
				.slideToggle(150);
		}, 100);
	},
};


/***/ }),

/***/ "./src/components/05-components/v3-pat/panel/panel-by-id.js":
/*!******************************************************************!*\
  !*** ./src/components/05-components/v3-pat/panel/panel-by-id.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* Component PanelByID */
SapphireWidgets.PanelById = {
	isAnyPanelOpenedDeprecated: function() {
		return $('body').hasClass('PanelOpened');
	},

	toggleButton: function(id) {
		const $toggleButton = $(`#${id}`).parents('.ToggleButton').length
			? $(`#${id}`).parents('.ToggleButton')
			: $(`#${id}`);

		$toggleButton.click();
	},

	togglePanelById: function(Id) {
		const $toggleButton = $(`#${Id}`).parents('.ToggleButton');
		const $panel = $toggleButton.parent().children('.Panel');
		const $panelContainer = $panel.children('.PanelContainer');
		const $panelBackground = $panel.children('.PanelBackground');

		if (!this.isAnyPanelOpenedDeprecated()) {
			$('body').addClass('PanelOpened');
			$('body').css('overflow-y', 'hidden');

			$panel.show();
			$panelContainer.slideDown(200);

			try {
				if (typeof justDragged !== 'undefined') {
					if (justDragged == false) {
						$('.PanelByIdNew_PanelContainer')
							.css('margin-left', panelMarginLeft)
							.css('left', panelLeft)
							.addClass(panelArrowClass);
					}
				}
			} catch (e) {
				console.log(e);
			}

			setTimeout(function() {
				$panelBackground.fadeIn(80);

				$toggleButton.click();
			}, 50);
		} else {
			$panelContainer.slideUp(200);

			$panelBackground.fadeOut(80, () => {
				$toggleButton.click();

				$('body').css('overflow-y', 'scroll');
				$('body').removeClass('PanelOpened');

				$panel.hide();
			});
		}
	},
};


/***/ }),

/***/ "./src/components/05-components/v3-pat/panel/popup-menu.js":
/*!*****************************************************************!*\
  !*** ./src/components/05-components/v3-pat/panel/popup-menu.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* Component PopUpMenu */
SapphireWidgets.PopUpMenu = {
	menuPosition: function(id, Context, Locale) {
		/* Hide any other menus on page and set button as collapsed. */
		$('.popup-menu:visible').hide();

		//var _this = $(this);
		var _this = $('#' + id);
		var Xx = 0;
		var Yy = 0;
		var Ww = 0;
		var Hh = 0;

		//_this.children('.button-expand:visible').hide();

		/* Get the menu element. */
		var _el = _this.next('.popup-menu');

		/* Display the menu. */
		_el.show();

		/* Set button collapse. */
		_this.children('.button-collapse').show();

		/* Get the dimensions of the button. */
		buttonHh = _this.outerHeight();
		buttonWw = _this.outerWidth();

		var buttonY = _this.position().top + buttonHh + 10;
		var buttonX = _this.offset().left;
		//var buttonX = _this.position().left;

		/* Get the distance of menu button and the parent element */
		var popupParentXx = _this.offset().left - _this.position().left;

		var popupXx = _el.offset().left;
		var popupWw = _el.outerWidth();

		Xx = Math.abs(buttonX - $('body').scrollLeft() - popupParentXx);
		Yy = Math.abs(buttonHh - buttonY - $('body').scrollTop());

		if (Locale != 'AR') {
			/* Check if clicked position plus the popup width exceed the window width. */
			if (buttonX + popupWw - $('body').scrollLeft() > $(Context).width()) {
				Xx = buttonX - popupWw - $('body').scrollLeft() - popupParentXx + buttonWw;
				//Xx = ($(window).width() - popupWw) - $('body').scrollLeft();
			}
		}

		/* Set menu position. */
		_el.css({
			left: Xx + 'px',
			top: buttonY + 'px',
		});

		/* Refresh value */
		popupXx = _el.offset().left;

		var _balloonEl = _el.children('.popup-menu-balloon');

		var _balloonXx = _balloonEl.offset().left;
		var _balloonWw = _balloonEl.outerWidth();
		var _balloonPosXx = Math.abs(buttonX - Xx - popupParentXx);

		/* Is the balloon icon positioned out of the popup menu? */
		if (_balloonPosXx + Xx + _balloonWw > Xx + popupWw) {
			_balloonPosXx = _balloonPosXx - _balloonWw;
		}

		/* Set position of the balloon effect. */
		_balloonEl.css('left', _balloonPosXx + 'px');
	},
	menuEvents: function(Context, Locale) {
		$('.popup-button')
			.off('click')
			.on('click', function(e) {
				var id = $(this).attr('id');
				SapphireWidgets.PopUpMenu.menuPosition(id, Context, Locale);

				/*e.stopPropagation();*/

				/* Prevent link submission */
				return false;
			});

		/* v *** Hide popup when click outside *** v */
		function PMClickOutside(event) {
			if (event.hasOwnProperty('target')) {
				var target = $(event.target);
				/*if ((target.parents().index($('a[sapphirehospital], .HospitalPopUp')) == -1)) {}*/
				if (
					!$(event.target).closest(
						'.popup-button, .popup-menu, .os-internal-ui-autocomplete, .os-internal-ui-menu-item, .os-internal-ui-corner-all, ui-autocomplete-item'
					).length
				) {
					$('.popup-menu:visible').hide();
					$('.button-collapse:visible').hide();
					//$('.button-expand').show();
				}
			}
		}

		var _PMIsDrag = false;
		var _PMIsClick = false;
		$(document).on('touchstart', function(event) {
			_PMIsDrag = false;
			_PMIsClick = true;
		});
		$(document).on('touchmove', function(event) {
			_PMIsDrag = true;
		});
		$(document).on('click', function(event) {
			PMClickOutside(event);
			_PMIsDrag = false;
			_PMIsClick = false;
		});
		$(document).on('touchend', function(event) {
			if (!_PMIsDrag && _PMIsClick) {
				PMClickOutside(event);
			}
			_PMIsDrag = false;
			_PMIsClick = false;
		});

		$('.button-collapse').on('click', function(event) {
			$('body').trigger('click');
			return false;
		});
		/* ^ *** Hide popup when click outside *** ^ */
	},
};


/***/ }),

/***/ "./src/components/05-components/v3-pat/panel/sapphire-panel.js":
/*!*********************************************************************!*\
  !*** ./src/components/05-components/v3-pat/panel/sapphire-panel.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* Component SapphirePanel */
SapphireWidgets.SapphirePanel = {
	checkOpenPanel: function() {
		return $('body').hasClass('SapphirePanelOpen') && $('.SapphirePanel_Container:visible').length;
	},

	toggleSapphirePanel: function(PanelId) {
		if (!OsValidatorOnSubmit()) {
			return;
		}

		if (!SapphireWidgets.SapphirePanel.checkOpenPanel()) {
			$('body').addClass('SapphirePanelOpen');
			$('#' + PanelId).fadeIn(140);

			setTimeout(function() {
				$('#' + PanelId)
					.find('.SapphirePanel_Container')
					.slideToggle(150);
			}, 100);
		}
	},

	closeSapphirePanel: function(PanelId) {
		$('body').removeClass('SapphirePanelOpen');
		$('#' + PanelId).fadeOut(140);

		setTimeout(function() {
			$('#' + PanelId)
				.find('.SapphirePanel_Container')
				.slideUp(150);
		}, 100);
	},

	setPanelBehavior: function() {
		$('.Panel[panel-trigger-elementid]').each(function() {
			var this_panel = $(this);
			$('#' + this_panel.attr('panel-trigger-elementid') + '')
				.off('click')
				.on('click', function() {
					SapphireWidgets.SapphirePanel.toggleSapphirePanel(this_panel.attr('id'));
					return false;
				});
		});
	},
};

$(document).ready(function() {
	SapphireWidgets.SapphirePanel.setPanelBehavior();

	if (osAjaxBackend.EventHandlers.AfterAjaxRequest.toString().indexOf('setPanelBehavior') == -1) {
		osAjaxBackend.BindAfterAjaxRequest(SapphireWidgets.SapphirePanel.setPanelBehavior);
	}
});


/***/ }),

/***/ "./src/components/05-components/v3-pat/panel/scripts.js":
/*!**************************************************************!*\
  !*** ./src/components/05-components/v3-pat/panel/scripts.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ./confirmation-panel */ "./src/components/05-components/v3-pat/panel/confirmation-panel.js");
__webpack_require__(/*! ./modal-popup */ "./src/components/05-components/v3-pat/panel/modal-popup.js");
__webpack_require__(/*! ./panel-by-id */ "./src/components/05-components/v3-pat/panel/panel-by-id.js");
__webpack_require__(/*! ./popup-menu */ "./src/components/05-components/v3-pat/panel/popup-menu.js");
__webpack_require__(/*! ./sapphire-panel */ "./src/components/05-components/v3-pat/panel/sapphire-panel.js");


/***/ }),

/***/ "./src/components/05-components/v3-pat/patient-call-cancel/patient-call-cancel-structure.js":
/*!**************************************************************************************************!*\
  !*** ./src/components/05-components/v3-pat/patient-call-cancel/patient-call-cancel-structure.js ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* Component PatientCallCancelStructure */
(function($, window, document, SapphireWidgets) {
	const create = function(config) {
		const $widget = $('#' + config.widgetId).find('.PatientCallCancelStructure');
		const $listQueueWrapper = $widget.find('.PatientCallCancelStructure__ListQueues');
		const $dropdown = $listQueueWrapper.find('.InlineDropdown_label');

		$listQueueWrapper.on('click', event => {
			if (!$dropdown.length) return;
			event.stopPropagation();

			$widget.toggleClass('PatientCallCancelStructure--active');

			$(document).on('click.PatientCallCancelStructure', () => {
				$widget.removeClass('PatientCallCancelStructure--active');
				$(document).off('click.PatientCallCancelStructure');
			});

			$dropdown.trigger('click');
			event.preventDefault();
		});
	};

	SapphireWidgets.PatientCallCancelStructure = { create };
})(jQuery, window, document, SapphireWidgets);


/***/ }),

/***/ "./src/components/05-components/v3-pat/patient-call-cancel/patient-call-cancel.js":
/*!****************************************************************************************!*\
  !*** ./src/components/05-components/v3-pat/patient-call-cancel/patient-call-cancel.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* Component PatientCallCancel */
(function($, window, document, SapphireWidgets) {
	const create = function(config) {
		const $widget = $('#' + config.widgetId);
		const $countdown = $widget.find('[ui=data-counter]');
		let $callButton = $widget.find('[ui=data-button-call]');
		let $cancelButton = $widget.find('[ui=data-button-cancel]');
		const $otherContent = $widget.find('.PatientCallCancel__Other');

		let interval;
		let timeCounter;

		const callPatient = function($widget) {
			toggleCallingState();

			if (config.showCountdown) $countdown.text(config.txtCallingIn + ' ' + config.timeToCancel);
			else $countdown.text(config.txtCallingIn);

			startCounter();
		};

		const toggleCallingState = () => {
			$widget.toggleClass('CallingPatient');
			$countdown.text(config.txtCallPatient);
		};

		const setInitialState = () => {
			$widget.removeClass('CallingPatient');
			$callButton.show();
			$otherContent.show();
		};

		const startCounter = () => {
			timeCounter = config.timeToCancel;
			interval = window.setInterval(updateCounter, 1000);
		};

		const updateCounter = () => {
			timeCounter--;

			if (timeCounter === 0) {
				clearInterval(interval);
				OsNotifyWidget(config.patientCallFakeNotifyId, '');

				setInitialState();
			}

			if (config.showCountdown) $countdown.text(config.txtCallingIn + ' ' + timeCounter);
			else $countdown.text(config.txtCallingIn);
		};

		if (config.startCounting) callPatient($widget);

		$callButton.on('click', () => {
			if ($widget.hasClass('CallingPatient')) return;

			callPatient($widget);

			$callButton.hide();
			$otherContent.hide();
		});

		$cancelButton.on('click', event => {
			timeCounter = config.timeToCancel;
			$countdown.text(timeCounter);
			clearInterval(interval);

			toggleCallingState();

			$callButton.show();
			$otherContent.show();
		});
	};

	SapphireWidgets.PatientCallCancel = { create };
})(jQuery, window, document, SapphireWidgets);


/***/ }),

/***/ "./src/components/05-components/v3-pat/person-card/scripts.js":
/*!********************************************************************!*\
  !*** ./src/components/05-components/v3-pat/person-card/scripts.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* Component PersonCard */
$(document).ready(function() {
	var PersonCardEvent = function() {
		$('.IsExpandable .PersonCard__headerLeftInfo, .IsExpandable .PersonCard__content')
			.off('click')
			.on('click', function() {
				const $header = $(this).closest('.PersonCard_header');
				const $onCardOpenLink = $header.find('.PersonCard__OnCardOpenLink');
				const $onCardCloseLink = $header.find('.PersonCard__OnCardCloseClick');
				const $content = $header.next();

				if ($content.children().length > 0) {
					const $card = $(this).closest('.PersonCard');

					$content.removeClass('IsExpanded');

					if ($card.hasClass('IsOpen')) {
						$onCardCloseLink.triggerHandler('click');
						$card.removeClass('IsOpen');
					} else {
						$onCardOpenLink.triggerHandler('click');

						$content.addClass('IsExpanded');

						$card.addClass('IsOpen');
					}
				}
			});
	};

	$('.StopPropagation').click(function(event) {
		event.stopPropagation();
	});

	PersonCardEvent();

	osAjaxBackend.BindAfterAjaxRequest(PersonCardEvent);
});


/***/ }),

/***/ "./src/components/05-components/v3-pat/prescription-card/scripts.js":
/*!**************************************************************************!*\
  !*** ./src/components/05-components/v3-pat/prescription-card/scripts.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* Component PrescriptionCard */
(function($, window, SapphireWidgets) {
	const create = config => {
		const $component = $(`#${config.widgetId} .PrescriptionCard`);

		if (config.isExpandable) {
			const $expandLink = $component.find('.PrescriptionCard__ExpandIcon');

			$expandLink.click(() => {
				$component.toggleClass('PrescriptionCard--expanded');
			});
		}
	};

	SapphireWidgets.PrescriptionCard = { create };
})(jQuery, window, SapphireWidgets);


/***/ }),

/***/ "./src/components/05-components/v3-pat/prescription-expandable/scripts.js":
/*!********************************************************************************!*\
  !*** ./src/components/05-components/v3-pat/prescription-expandable/scripts.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* Component PrescriptionExpandable */
(function($, window, SapphireWidgets) {
	const PrescriptionExpandable = function(config) {
		const widgetId = config.widgetId;
		const previewstat = [];
		const transitionEvent = SilkUI.whichTransitionEvent();

		const $elementWrapper = $(`#${config.widgetId}`);

		const clickEvents = ob => {
			if ($(ob).hasClass('PrescriptionExpandable_header__LinksDiv')) {
				var Section = $(ob)
					.parent()
					.parent()
					.parent();
			} else {
				var Section = $(ob).parent();
			}

			var SectionContent = Section.children('.PrescriptionExpandable_content');

			// get id
			var id = Section.attr('id');

			var tempHeight = 0;

			// has class expanded
			if (Section.hasClass('expanded')) {
				// Calc and set a fixed height, during this process, transitions are disabled
				SectionContent.addClass('noTransition');
				SectionContent.height(SectionContent.height());
				SectionContent[0].offsetHeight; // hack to force a repaint
				SectionContent.removeClass('noTransition');

				// Collapse content
				SectionContent.height(0);
				Section.removeClass('expanded');
				SectionContent.css('overflow', 'hidden');

				// Remove class, set height and save state
				previewstat[id]['client'] = false;
			} else {
				// Calc and set a fixed height
				SectionContent.height('auto');
				tempHeight = SectionContent.height();
				SectionContent.height(0);
				SectionContent.height(tempHeight);
				SectionContent.css('overflow', 'hidden');

				// remove class, set height and save state
				Section.addClass('expanded');
				previewstat[id]['client'] = true;

				// add event transition end to overflow:visible for tooltips and dropdowns issues
				SectionContent.on(transitionEvent, function() {
					if (Section.hasClass('expanded')) {
						SectionContent.css('overflow', 'visible');
						SectionContent.addClass('noTransition');
						SectionContent.height('auto');
						SectionContent[0].offsetHeight; // hack to force a repaint
						SectionContent.removeClass('noTransition');
					}
				});
			}
		};

		this.init = () => {
			const $header = $elementWrapper.find('.PrescriptionExpandable_header');
			const $links = $header.find('.PrescriptionExpandable_header__LinksDiv');

			// Create array stat
			$('.SectionPrescriptionExpandableArea').each(() => {
				const stat = $header.hasClass('expanded') ? true : false;
				previewstat[widgetId] = { client: stat, server: stat };
			});

			if ($header.hasClass('NotExpandable')) {
				$header.on('click', e => e.preventDefault());
			} else if ($header.hasClass('isLinkEpandableClick')) {
				$links.on('click', e => clickEvents($links));
			} else {
				$header.on('click', e => clickEvents($header));
			}

			const elements =
				'.PrescriptionExpandable_header input, .PrescriptionExpandable_header select, .PrescriptionExpandable_header a';
			$(elements).click(function(event) {
				event.stopPropagation();
			});

			osAjaxBackend.BindAfterAjaxRequest(ajaxRefresh);
		};

		const ajaxRefresh = function(event) {
			// remove click events
			//$('.PrescriptionExpandable_header').off();

			// add stop prepagation
			$(
				'.PrescriptionExpandable_header input, .PrescriptionExpandable_header select, .PrescriptionExpandable_header a'
			).click(function(event) {
				event.stopPropagation();
			});

			// each all sections
			$('.SectionPrescriptionExpandableArea').each(function() {
				// if new SectionExpandable then add to previewstat array
				if (previewstat[$(this).attr('id')] == null) {
					// add stat on array
					var stat = false;
					// if open
					if ($(this).hasClass('expanded')) {
						stat = true;
					}
					// add row
					previewstat[$(this).attr('id')] = { client: stat, server: stat };
				}

				// curent state (ajax state x initial state)
				var curState = false;

				// check if start expandable
				if ($(this).hasClass('expanded')) {
					curState = true;
				}

				// check if ajax != initial server
				if (curState != previewstat[$(this).attr('id')]['server']) {
					// curstate
					previewstat[$(this).attr('id')]['client'] = curState;
					previewstat[$(this).attr('id')]['server'] = curState;
				} else {
					// has class expanded
					if (previewstat[$(this).attr('id')]['client'] == false && $(this).hasClass('expanded')) {
						$(this).removeClass('expanded');
						$(this)
							.children('.PrescriptionExpandable_content')
							.height(0);
					} else if (previewstat[$(this).attr('id')]['client'] == true && !$(this).hasClass('expanded')) {
						$(this).addClass('expanded');
					}
				}
			});
		};
	};

	const create = config => {
		SilkUI.SectionExpandable = new PrescriptionExpandable(config);
		SilkUI.Execute(SilkUI.SectionExpandable.init, 'Error on WebPatterns/Content/SectionExpandable');
	};

	SapphireWidgets.PrescriptionExpandable = { create };
})(jQuery, window, SapphireWidgets);


/***/ }),

/***/ "./src/components/05-components/v3-pat/sapphire-header/scripts.js":
/*!************************************************************************!*\
  !*** ./src/components/05-components/v3-pat/sapphire-header/scripts.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* Component SapphireHeader */
(function($, window, document, SapphireWidgets) {
	var create = function(config) {
		window[config.widgetId] = new SapphireHeader(config);
		SapphireWidgets.SapphireHeader.widgetId = config.widgetId;
	};

	var handleDemographics = function() {
		window[SapphireWidgets.SapphireHeader.widgetId].handleDemographics();
	};

	var SapphireHeader = function(config) {
		var _this = this;
		this.config = config;
		this.isConfidential = config.isConfidential;
		this.$widget = $('#' + config.widgetId);
		this.$widget.css({
			display: 'block',
		});
		this.$header = this.$widget.find('.SapphireHeader');
		this.$navigation = this.$widget.find('.SapphireHeader-navigation');
		this.$identification = this.$widget.find('.SapphireHeader-identification');
		this.$demographic = this.$widget.find('.SapphireHeader-demographics');
		this.$information = this.$widget.find('.SapphireHeader-information');
		this.$actions = this.$widget.find('.SapphireHeader-actions');
		this.$additionalTrigger = this.$widget.find('.SapphireHeader-additional-trigger');
		this.$additionalContent = this.$widget.find('.SapphireHeader-additional-content');

		this.handleResize();
		this.attachEvents();

		if (this.$information.text() === '') {
			this.$information.hide();
		}
	};

	SapphireHeader.prototype.getConfig = function() {
		return this.config;
	};

	SapphireHeader.prototype.handleResize = function() {
		var _this = this;
		$(window).resize(function() {
			_this.handleDemographics();
		});
	};

	SapphireHeader.prototype.attachEvents = function() {
		var _this = this;
		this.$additionalTrigger.on('click', function() {
			if (_this.$header.hasClass('isOpen')) {
				_this.$header.removeClass('isOpen');
				//$('.LayoutBase-header').css('z-index', 2);
			} else {
				_this.$header.addClass('isOpen');
				//$('.LayoutBase-header').css('z-index', 3);
			}
		});
	};

	SapphireHeader.prototype.handleDemographics = function() {
		const _this = this;
		this.$demographic.find('.Demographic-item').css('display', 'none');

		this.$additionalTrigger.hide();
		this.$additionalContent.empty();

		const demographicWidth = this.$demographic.outerWidth(true);
		let itemsTotal = 0;

		const componentWidth = this.$widget.outerWidth(true);
		const navigationWidth = this.$navigation.width();
		const identificationWidth = this.$identification.width();
		const demographicsWidth = this.$demographic.width();
		const informationWidth = this.$information.width();
		const actionsWidth = this.$actions.width();


		this.$demographic.find('.Demographic-item').each(function(index) {
			itemsTotal += parseInt($(this).outerWidth(true), 10);

			// 64 -> margins and 99 -> More Info button
			if (itemsTotal + 64 + 110 < demographicWidth) {
				$(this).css('display', 'inline-block');
			} else {
				$(this)
					.clone()
					.css('display', 'inline-block')
					.appendTo(_this.$additionalContent);
				_this.$additionalTrigger.show();
			}
		});

		if (this.$additionalContent.find('.Demographic-item').length === 0) {
			this.$header.removeClass('isOpen');
		}
	};

	SapphireHeader.prototype.showAdditional = function() {
		return this.$header.addClass('isOpen');
	};

	SapphireHeader.prototype.hideAdditional = function() {
		return this.$header.removeClass('isOpen');
	};

	SapphireWidgets.SapphireHeader = {
		create: create,
		handleDemographics: handleDemographics,
	};
})(jQuery, window, document, SapphireWidgets);

$(window).load(function() {
	if (!!SapphireWidgets.SapphireHeader.widgetId) {
		window[SapphireWidgets.SapphireHeader.widgetId].handleDemographics();
	}
	if (!!$('.SapphireHeader-demographics').length) {
		osAjaxBackend.BindAfterAjaxRequest(function() {
			window[SapphireWidgets.SapphireHeader.widgetId].handleDemographics();
		});
	}
});


/***/ }),

/***/ "./src/components/05-components/v3-pat/sapphire-popup/scripts.js":
/*!***********************************************************************!*\
  !*** ./src/components/05-components/v3-pat/sapphire-popup/scripts.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* Component SapphirePopup */
var RichWidgets_Popup_Editor_notifyWidget;

(function($, window, SapphireWidgets) {
	// Check if the widget is loaded inside an iFrame
	let isInsideIframe = window.frameElement != undefined || false;

	// Constants
	const POPUP_INITIAL_WIDTH = 300;
	const POPUP_INITIAL_HEIGHT = 100;
	const POPUP_WINDOW_INDEX = 4010;
	const POPUP_CLOSING_TAG = 'closing';
	const POPUP_CLOSING_VALUE = 'true';

	let POPUP_NOTIFY_WIDGET;
	let POPUP_PARENT_URL;

	const create = config => {
		if (config.ignoreIframe) isInsideIframe = false;

		$().ready(function($) {
			const _id = config.linkId;
			const linkQuery = `#${config.linkId}`;
			let linkWidget;

			try {
				linkWidget = $(linkQuery).get(0);
			} catch (e) {}

			if (typeof linkWidget == 'undefined') {
				//Case the widget is inexistent or invisible, it will show no errors.
				return;
			}

			POPUP_PARENT_URL = config.parentUrl;

			const linkResult = getLinkHREF(linkWidget);
			const linkHref = linkResult[0];
			const isAButton = linkResult[1];

			if (typeof linkHref == 'undefined' || linkHref == '' || linkHref == '#' || linkHref.indexOf('javascript:') == 0) {
				try {
					window.OsHandleException(
						new Error('Popup link id must be the id of a Link or Button Widget with Method Navigate.'),
						outsystems.osErrorCodes.SystemJavascriptError,
						'Popup_Editor'
					);
				} catch (e) {}

				return;
			}

			// Remove the existing on-click event
			if (isAButton) {
				linkWidget.setAttribute(
					'onclick',
					linkWidget
						.getAttribute('onclick')
						.toString()
						.replace('window.location.href=', 'return false;window.location.href=')
				);
			}

			// If there's a confirmation message, store in an attribute the result
			if (linkWidget.getAttribute('onclick') != null) {
				linkWidget.setAttribute(
					'onclick',
					linkWidget
						.getAttribute('onclick')
						.toString()
						.replace(
							'if( ret != true )',
							"$('" + linkQuery + "').get(0).setAttribute('confirmed', ret); if( ret != true )"
						)
				);
			}

			const clickHandler = function(event) {
				// The clickHandler event is registered in osjs and $ for compatibillity reasons, they must not run both for the same click.
				// Variable is set to false in resize function.
				if ($.data(event.target, 'os-internal-processing') == true) {
					return false;
				} else {
					$.data(event.target, 'os-internal-processing', true);
				}

				// Check if the clicked link is disabled
				if (linkWidget.getAttribute('disabled') != null) {
					var linkDisabled = linkWidget
						.getAttribute('disabled')
						.toString()
						.toLowerCase();

					if (linkDisabled == 'disabled' || linkDisabled.indexOf('true') != -1) {
						return false;
					}
				}

				if (linkWidget.getAttribute('confirmed') == 'false') return false;
				if (OsIsIE()) osFocusBackend.ClearFocusedElement();

				let popupDiv;
				let pleaseWaitDiv;

				const waitText = `<div style="margin-top: 36px;">${config.loadingMessage}</div>`;
				const imgHTML = '<div class="lds-ring"><div></div></div>';
				const loadingElement = `<div class="LayoutPopup-loading">${imgHTML} ${waitText}</div>`;
				const iFrameElement = `<iframe id="iframe_${_id}" width="100%" scrolling="no" height="100%" frameborder="0" src="javascript:void(0);"/>`;

				if (isInsideIframe) {
					let _div = document.createElement('DIV');
					_div.setAttribute('style', 'text-align: center; display: none;');
					_div.setAttribute('id', 'window_' + _id);
					window.top.document.body.appendChild(_div);

					popupDiv = window.top.$('#window_' + _id);
					popupDiv.append(iFrameElement);

					pleaseWaitDiv = popupDiv.prepend(loadingElement);
				} else {
					popupDiv = $("<div style='text-align: center; display: none;'></div>").appendTo('body');
					popupDiv.append(iFrameElement);

					pleaseWaitDiv = popupDiv.prepend(loadingElement);
				}

				const loadTargetPage = function() {
					if (isInsideIframe) {
						window.top.POPUP_NOTIFY_WIDGET = config.notifyId;
						// Create a reference to the iframe object on the document parent
						window.top._iframePopup = window.frameElement.contentWindow;
					} else {
						window.top._iframePopup = window;
					}

					POPUP_NOTIFY_WIDGET = config.notifyId;
					RichWidgets_Popup_Editor_notifyWidget = config.notifyId;
					window.top._iframePopup.RichWidgets_Popup_Editor_notifyWidget = config.notifyId;

					// Load target page
					const ohref = getLinkHREF(linkWidget)[0];
					const rhref = ohref.replace(/(\?|&)_=.*?(&|$)/, '$1_=' + +new Date().now + '$2');
					const xhref = rhref + (rhref == ohref ? (rhref.indexOf('?') >= 0 ? '&' : '?') + '_=' + +new Date() : '');

					popupDiv.find('iframe').attr('src', xhref);

					(function(popupDiv) {
						popupDiv.find('iframe').load(function() {
							// After loading try to resize
							resize(popupDiv, _id, config.setWidth, config.setHeight, true, event);
						});
					})(popupDiv);

					popupDiv = null;
					pleaseWaitDiv = null;
				};

				openPopup(popupDiv, pleaseWaitDiv, loadTargetPage, event, config);

				return false;
			};

			$(linkQuery).click(clickHandler);

			SapphireWidgets.SapphirePopup.popupWidth = config.setWidth || POPUP_INITIAL_WIDTH;
		});
	};

	const resize = (divToPopup, _id, setWidth, setHeight, recenter, event) => {
		// Code to support old resize method Popup_Window_resize(setWidth, setHeight, recenter)
		if (typeof recenter == 'undefined') {
			recenter = setHeight;
			setHeight = setWidth;
			setWidth = divToPopup;

			if (isInsideIframe) {
				divToPopup = window.top.$('.os-internal-ui-dialog-content');
			} else {
				divToPopup = $('.os-internal-ui-dialog-content');
			}
		}

		// Resize must bail out immediately if the popup is marked as closing, and not start the animation.
		if ($.data(divToPopup.get(0), POPUP_CLOSING_TAG) == POPUP_CLOSING_VALUE) {
			return false;
		}

		let documentServer;
		let frameObj = divToPopup.find('iframe')[0];

		if (typeof frameObj == 'undefined') {
			frameObj = window.top.$('#iframe_' + _id)[0];
		}

		if (isInsideIframe) {
			documentServer = window.top.document.location.href.replace(/(https?:\/\/[^\/]*).*/, '$1');
		} else {
			documentServer = document.location.href.replace(/(https?:\/\/[^\/]*).*/, '$1');
		}

		if (typeof frameObj != 'undefined') {
			const frameServer = frameObj.src.replace(/(https?:\/\/[^\/]*).*/, '$1');
			const sameOrigin = frameServer.toLowerCase() == documentServer.toLowerCase() || frameServer.indexOf('http') != 0;

			if (!sameOrigin && (setWidth == -1 || setHeight == -1)) {
				throw new Error('A Popup with a screen from a different server (or https) needs explicict width, height set.');
			}

			if (sameOrigin) {
				if (frameObj.contentDocument !== null || frameObj.contentWindow !== null) {
					var innerDoc = frameObj.contentDocument ? frameObj.contentDocument : frameObj.contentWindow.document;
					if (innerDoc.documentElement.scrollHeight == 0)
						// Strangely this event is also triggered on close
						return false;
				}
			}

			let oldHeight;
			if (isInsideIframe) {
				oldHeight = window.top
					.$(divToPopup)
					.parents('.os-internal-Popup')
					.outerHeight();
			} else {
				oldHeight = $(divToPopup)
					.parents('.os-internal-Popup')
					.outerHeight();
			}

			let width = setWidth == -1 ? $(innerDoc).width() : setWidth;
			let height = setHeight == -1 ? $(innerDoc).height() : setHeight;

			var titleHeight;
			if (isInsideIframe) {
				titleHeight = window.top.$('.os-internal-ui-dialog-titlebar').height();
			} else {
				titleHeight = $('.os-internal-ui-dialog-titlebar').height();
			}

			// Verify if the parent window width is less than the pop-up window, if so set the responsive class on the iframe body (for responsive themes)
			if (window.innerWidth < width) {
				// only set the class if the origin is the same
				if (sameOrigin) {
					$(innerDoc)
						.find('body')
						.addClass('Responsive');
					width = window.innerWidth - 20; // 10px "padding" effect, to keep the popup look and feel on top of content
				}
			}

			// Fix issues with scrollbars
			if (setHeight == -1) {
				// IE7 needs a little more space to remove the scrollbars
				if ($.browser.msie) height = height + 1;
			} else {
				//when explicitly setting the height
				if (sameOrigin) innerDoc.body.style.height = 'auto';
			}

			if (isInsideIframe) {
				window.top.$(divToPopup).height(height);
			} else {
				$(divToPopup).height(height);
			}

			//Hide ECT
			if (isInsideIframe) {
				window.top
					.$(innerDoc)
					.find('.ECT_FeedbackContainer')
					.hide();
				var divPopupOuterWindow = window.top.$(divToPopup).parents('.os-internal-Popup');
			} else {
				$(innerDoc)
					.find('.ECT_FeedbackContainer')
					.hide();
				var divPopupOuterWindow = $(divToPopup).parents('.os-internal-Popup');
			}

			var animateFinal = {};

			if (setHeight == -1) {
				var oldTop = parseInt(divPopupOuterWindow.css('top'));
				if (recenter) animateFinal.top = Math.max(20, oldTop + (oldHeight - (height + titleHeight)) / 2);
				animateFinal.height = height + titleHeight;
			}

			if (setWidth == -1) {
				var oldLeft = parseInt(divPopupOuterWindow.css('left'));
				if (recenter) animateFinal.left = oldLeft + (divPopupOuterWindow.width() - width) / 2;
				animateFinal.width = width;
			}

			if (
				divPopupOuterWindow.width() == animateFinal.width &&
				divPopupOuterWindow.height() == animateFinal.height - ($.browser.msie ? 1 : 0)
			) {
				$('.os-internal-ui-dialog-content>.LayoutPopup-loading').hide();
				$(divToPopup).height(height - ($.browser.msie ? 1 : 0)); // restore size
				return true; // nothing to do...
			}

			// hide content in first resize - readjustments will not flickr
			if (divPopupOuterWindow.width() == POPUP_INITIAL_WIDTH && divPopupOuterWindow.height() == POPUP_INITIAL_HEIGHT) {
				$(frameObj).height(0);
			}

			var onAnimationComplete = function() {
				setTimeout(function() {
					if (isInsideIframe) {
						window.top.$('.os-internal-ui-dialog-titlebar-close-no-title').css('display', 'block');
						window.top
							.$(divToPopup)
							.find('iframe')
							.height('100%')
							.width(animateFinal.width);
					} else {
						$('.os-internal-ui-dialog-titlebar-close-no-title').css('display', 'block');
						$(divToPopup)
							.find('iframe')
							.height('100%')
							.width(animateFinal.width);
					}
				}, 13);
			};

			var divPleaseWait;
			if (isInsideIframe) {
				divPleaseWait = window.top.$('.os-internal-ui-dialog-content>.LayoutPopup-loading');
			} else {
				divPleaseWait = $('.os-internal-ui-dialog-content>.LayoutPopup-loading');
			}

			divPleaseWait.hide();

			if (setHeight == -1 || setWidth == -1) {
				divPopupOuterWindow.animate(animateFinal, {
					duration: 200,
					complete: onAnimationComplete,
				});
			} else {
				onAnimationComplete();
			}
			innerDoc = null;
			divPopupOuterWindow = null;
			if (isInsideIframe) {
				window.top.$.data(event.target, 'os-internal-processing', false);
			} else {
				$.data(event.target, 'os-internal-processing', false);
			}
			return true;
		}
	};

	const close = () => {
		let popupToClose;
		let popupContainer;

		if (isInsideIframe) {
			popupToClose = window.top.$('.os-internal-ui-dialog-content');
			popupContainer = window.top.$('.SapphirePopup');
		} else {
			popupToClose = $('.os-internal-ui-dialog-content');
			popupContainer = $('.SapphirePopup');
		}

		popupToClose.data(POPUP_CLOSING_TAG, POPUP_CLOSING_VALUE);

		//setTimeout(function() {
		if (popupToClose.length) popupToClose.dialog('close');

		popupToClose.remove();
		popupContainer.remove();
		//}, 0);
	};

	const getLinkHREF = widget => {
		let linkHref;
		let isAButton = false;

		try {
			//Checks if the id is from a link or not
			linkHref = $(widget).attr('href');

			//Tests for visibility/existence
			if (typeof linkHref == 'undefined') {
				const onClick = widget.getAttribute('onclick');

				if (typeof onClick != 'undefined') {
					isAButton = true;

					if (onClick != null) {
						let hrefMatch;

						if ((hrefMatch = onClick.toString().match(/href='([^']*)'/)) != null) {
							linkHref = hrefMatch[1];
						}
					}
				}
			}
		} catch (e) {}

		return [linkHref, isAButton];
	};

	const openPopup = (divToPopup, divPleaseWait, loadTargetPage, event, config) => {
		// Destroy any previous dialog
		close(null);

		if (isInsideIframe) {
			const $jParent = window.top.$;
			$jParent('.os-internal-Popup').remove();
		}

		// If any close is pending, schedule to execute itself asynchronously exit
		// If no close is pending, continue with open operation
		let closingPopups;

		if (isInsideIframe) closingPopups = window.top.$('.os-internal-ui-dialog-content');
		else closingPopups = $('.os-internal-ui-dialog-content');

		for (var i = 0; i < closingPopups.length; i++) {
			if ($.data(closingPopups.get(i), POPUP_CLOSING_TAG) == POPUP_CLOSING_VALUE) {
				setTimeout(function() {
					openPopup(divToPopup, divPleaseWait, loadTargetPage, event, config);
				}, 13);

				return false;
			}
		}

		let _dialog;

		if (isInsideIframe) {
			const popupContainer = document.createElement('DIV');
			popupContainer.setAttribute('class', 'SapphirePopup');

			window.top.document.body.appendChild(popupContainer);

			_dialog = window.top.$(divToPopup);
		} else {
			$('<div class="SapphirePopup"></div>').appendTo('body');

			_dialog = $(divToPopup);
		}

		$(divPleaseWait).show();

		if ($('.ISidebar').length) window.parent.SapphireWidgets.LayoutBase.openSidebarIframe(0);

		_dialog.show().dialog({
			appendTo: '.SapphirePopup',
			dialogClass: 'os-internal-Popup',
			resizable: false,
			autoResize: false,
			closeOnEscape: !config.hideCloseButton,
			bgiframe: true,
			draggable: false,
			autoOpen: true,
			title: config.setTitle,
			modal: !(config.useModal === false),
			height: config.setHeight == -1 ? POPUP_INITIAL_HEIGHT : config.setHeight,
			position: 'center',
			width: config.setWidth == -1 ? POPUP_INITIAL_WIDTH : config.setWidth,
			zIndex: POPUP_WINDOW_INDEX,
			close: function() {
				// If the popup is closed before it is resized (ESC) we need to set the processing event to false.
				$.data(event.target, 'os-internal-processing', false);

				_dialog.find('iframe').unbind('load');
				_dialog.find('iframe').attr('src', 'about:blank');

				setTimeout(function() {
					_dialog.find('iframe').empty();
					_dialog.empty();
				}, 13);
			},
		});

		_dialog.find('iframe').height(0);
		_dialog.parents('.os-internal-ui-dialog').dropShadow();

		if (config.CssClasses !== ' ') {
			if (isInsideIframe) window.top.$('.os-internal-ui-dialog').addClass(config.CssClasses);
			else $('.os-internal-ui-dialog').addClass(config.CssClasses);
		}

		loadTargetPage();
	};

	SapphireWidgets.SapphirePopup = { create, close, resize };
})(jQuery, window, SapphireWidgets);


/***/ }),

/***/ "./src/components/05-components/v3-pat/sapphire-radio-button/scripts.js":
/*!******************************************************************************!*\
  !*** ./src/components/05-components/v3-pat/sapphire-radio-button/scripts.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* Component SapphireRadioButton */
SapphireWidgets.SapphireRadioButton = widgetId => {
	const $widget = $(`#${widgetId}`);
	const $input = $widget.find('input[type="radio"]');
	const $label = $widget.find('.ButtonRadioInp_radioText');
	const name = $input.prop('name');

	const addRemoveClass = ($el, toAdd) => {
		if (toAdd) $el.addClass('active');
		else $el.removeClass('active');
	};

	const isChecked = $el => {
		if ($el.is(':checked')) addRemoveClass($widget, true);
		else addRemoveClass($widget, false);
	};

	$input.click(function() {
		$widget.removeClass('active');

		$(`input[type="radio"][name="${name}"]`).each(function() {
			addRemoveClass($(this).closest('.ButtonRadioInp'), $(this).is(':checked'));
		});
	});

	$input.on('change', function() {
		isChecked($(this));
	});

	$label.click(function() {
		const $closestElement = $(this).closest('.ButtonRadioInp');

		if ($closestElement.hasClass('disabled')) return false;

		$input[0].click();
		//isChecked($input);
	});

	isChecked($input);
};


/***/ }),

/***/ "./src/components/05-components/v3-pat/scales/scale-main-structure.js":
/*!****************************************************************************!*\
  !*** ./src/components/05-components/v3-pat/scales/scale-main-structure.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* Component ScaleMainStructure */
(function($, window, SapphireWidgets) {
	const create = config => {
		$(document).ready(function() {
			setupScale();
			bindClicks();

			osAjaxBackend.BindAfterAjaxRequest(function() {
				setTimeout(function() {
					bindClicks();
				}, 1000);
			});
		});
	};

	ScaleCount = conf => {
		$(function() {
			var CardScale = conf.IsCardScale;
			var RulerScale = conf.IsRulerScale;
			var MultipleScale = conf.IsMultipleScale;
			var $totalPlace = $('.ScaleMainStructure_footerResult');
			var totalCardScale = 0;
			var totalMultipleScale = 0;
			var totalRulerScale = 0;

			var ScaleTypeCard = function() {
				var totalSelected = $('.ScaleList.CardScale').find('.ScaleCard.active').length;
				var totalNumber = 0;
				$(".ScaleList.CardScale:not('.isTitle')").each(function() {
					if ($(this).find('.ScaleCard').length > 0) {
						totalNumber += 1;
					}
				});

				if (totalNumber === totalSelected) {
					var total = [];
					var inputValue = '';
					var $scaleRow = $('.ScaleList.CardScale:not(.isTitle)');
					$scaleRow.each(function() {
						inputValue = $(this)
							.find('.ScaleCard.active')
							.data('value');
						$(this)
							.find('.ScaleList_inputValue input')
							.val(inputValue);
					});

					$('.ScaleList.CardScale .ScaleCard.active').each(function() {
						total.push($(this).data('value'));
					});
					var finalTotal = eval(total.join('+'));
					return finalTotal;
				}
			};

			var ScaleTypeRuler = function() {
				var activeRulerValue = '';
				var $activeRuler = $('.RulerScale_number.active');
				if ($activeRuler.length > 0) {
					var activeRulerValue = $('.RulerScale_number.active')
						.closest('.RulerScale')
						.data().value;
					$('.ScaleList.Ruler')
						.find('.ScaleList_inputValue input')
						.val(activeRulerValue);

					return activeRulerValue;
				}
				return activeRulerValue;
			};

			var ScaleTypeMultiple = function() {
				var numberofCols = $('.ScaleList.MultipleScale')
					.first()
					.find('.ButtonGroupScale').length;
				var numberofRows = $('.ButtonGroupScale').closest('.ScaleList.MultipleScale:not(.isTitle):not(.isSubtotal)')
					.length;
				var total = [];
				var i = 0;
				var j = 0;
				var countActive = 0;
				var countallActiveCols = 0;
				var totalOfItems = numberofCols * numberofRows;
				var totalScore = [];

				for (i = 0; i < numberofCols; i++) {
					for (j = 0; j < numberofRows; j++) {
						var ScaleListSelected = document.querySelectorAll(
							'.ScaleList.MultipleScale:not(.isTitle):not(.isSubtotal)'
						)[j];
						var ButtonScaleSelected = ScaleListSelected.querySelectorAll('.ButtonGroupScale')[i];

						if (ButtonScaleSelected.querySelectorAll('.ButtonGroup_button.active').length > 0) {
							var ScaleValue = ButtonScaleSelected.querySelectorAll('.active')[0].innerText;
							total.push(parseInt(ScaleValue));
							totalScore.push(parseInt(ScaleValue));
							countActive = countActive + 1;
						}
					}
					if ($('.ScaleList.MultipleScale.isSubtotal').length > 0) {
						if (countActive === numberofRows) {
							var subTotal = eval(total.join('+'));
							var subtotalScale = document.querySelectorAll('.ScaleList.MultipleScale.isSubtotal .ButtonGroupScale')[i];
							subtotalScale.innerText = subTotal;
							countallActiveCols = countallActiveCols + 1;
						}
					}
					countActive = 0;
					total = [];
				}

				if (document.querySelectorAll('.ButtonGroup_button.active').length === totalOfItems) {
					var i = 0;
					var j = 0;
					for (i = 0; i < numberofRows; i++) {
						var ScaleListRow = $('.ScaleList.MultipleScale:not(.isTitle):not(.isSubttotal)')[i];
						var $ScaleListInput = $(ScaleListRow).find('.ScaleList_inputValue input');
						var valuesSelected = '';
						for (j = 0; j < numberofCols; j++) {
							var ActiveButton = $(ScaleListRow).find('.ButtonGroup_button.active')[j];
							var ActiveValue = ActiveButton.innerText;
							//valuesSelected=valuesSelected+','+ActiveValue;
							if (j === numberofCols - 1) {
								valuesSelected += ActiveValue;
							} else {
								valuesSelected += ActiveValue + ',';
							}
						}
						$ScaleListInput.val(valuesSelected);
					}
					var getTotal = eval(totalScore.join('+'));
					return getTotal;
				}
			};

			const TotalCalc = function() {
				let isEmpty = false;

				if (CardScale === true) {
					totalCardScale = ScaleTypeCard();
					isEmpty = totalCardScale === '';
				}

				if (RulerScale === true) {
					totalRulerScale = ScaleTypeRuler();
					isEmpty = totalRulerScale === '';
				}

				if (MultipleScale === true) {
					totalMultipleScale = ScaleTypeMultiple();
					isEmpty = totalMultipleScale === '';
				}

				const $footerResult = $('.ScaleMainStructure_footerResult');
				const $totalScore = $('.ScaleMainStructure_totalScore');
				const $scoreLabel = $('.ScaleMainStructure_footerResult .TotalLabel');

				if (isEmpty) {
					$totalScore.text('---');
					$scoreLabel.text('-');

					$footerResult.removeClass('ColorZetaBG');
				} else if (!isNaN(totalMultipleScale) && !isNaN(totalCardScale) && !isNaN(totalRulerScale)) {
					const totalAbsoluteScore = totalCardScale + totalMultipleScale + totalRulerScale;
					const totalAbsoluteLabel = totalAbsoluteScore > 11 ? 'High' : 'Low';

					$totalScore.text(totalAbsoluteLabel);
					$scoreLabel.text(totalAbsoluteScore);

					$footerResult.addClass('ColorZetaBG');

					const $hiddenLink = $('.ScaleMainStructure_hiddingLink a');

					if ($hiddenLink.length > 0) $hiddenLink.click();
				}
			};

			if (CardScale === true) {
				$('.ScaleCard').click(function() {
					if (!$(this).hasClass('disabled')) {
						$parentScaleCard = $(this).closest('.ScaleList.CardScale');
						$parentScaleCard.find('.ScaleCard').removeClass('active');
						$(this).addClass('active');
						TotalCalc();
					}
				});
				TotalCalc();
			}

			if (RulerScale === true) {
				$('.RulerScale').click(function() {
					if ($(this).find('.viewmode').length === 0) {
						var $rulerScaleList = $(this).closest('.ScaleList.Ruler');
						$rulerScaleList.find('.RulerScale_number').removeClass('active');
						$(this)
							.find('.RulerScale_number')
							.addClass('active');
						TotalCalc();
					}
				});
				TotalCalc();
			}

			if (MultipleScale === true) {
				var counter;
				var ScaleListTitle = document.querySelector('.ScaleList.MultipleScale.isTitle');
				var ScaleListSubTotal = document.querySelector('.ScaleList.MultipleScale.isSubtotal');
				var ScaleList = document.querySelector('.ScaleList.MultipleScale:not(.isTitle):not(.isSubtotal)');

				$('.ButtonGroupScale')
					.closest('.ScaleList.MultipleScale:nth-child(2n)')
					.addClass('EvenLine');
				var numberOfGroupScale = ScaleList.querySelectorAll('.ButtonGroupScale').length;

				$('.ScaleList.MultipleScale.isSubtotal .ButtonGroupScale').text(0);
				// Check if Multiple Scale Title exists then adjust title width
				if ($('.ScaleList.MultipleScale.isTitle').length > 0) {
					for (counter = 0; counter < numberOfGroupScale; counter++) {
						var ScaleListWidth = ScaleList.querySelectorAll('.ButtonGroupScale')[counter].offsetWidth;
						ScaleListTitle.querySelectorAll('.ButtonGroupScale')[counter].style.width = ScaleListWidth + 'px';
						ScaleListSubTotal.querySelectorAll('.ButtonGroupScale')[counter].style.width = ScaleListWidth + 'px';
					}
				}

				$('.ButtonGroup_button').click(function() {
					TotalCalc();
				});
				TotalCalc();
			}
		});
	};

	setupScale = () => {
		var IsCardScale;
		var IsRulerScale;
		var IsMultipleScale;

		$('.ScaleCard').length > 0 ? (IsCardScale = true) : (IsCardScale = false);
		$('.ButtonGroupScale').length > 0 ? (IsMultipleScale = true) : (IsMultipleScale = false);
		$('.RulerScale').length > 0 ? (IsRulerScale = true) : (IsRulerScale = false);

		setTimeout(function() {
			ScaleCount({
				IsCardScale: IsCardScale,
				IsRulerScale: IsRulerScale,
				IsMultipleScale: IsMultipleScale,
			});
		}, 500);

		if ($('.ScaleMainStructure_options .ToggleItemControl').length > 0) {
			$('.ScaleMainStructure_options .ToggleItemControl').click(function() {
				$('.ScaleMainStructure_totalScore').text('---');
			});
		}
	};

	resetScales = () => {
		$('.ScaleMainStructure_content').css('visibility', 'hidden');
		$('.ScaleMainStructure_options .ToggleItemControl').addClass('disabled');
		setTimeout(function() {
			$('.ScaleMainStructure_totalScore').text('---');
			setupScale();
		}, 600);
		setTimeout(function() {
			$('.ScaleMainStructure_content').css('visibility', 'visible');
			$('.ScaleMainStructure_options .ToggleItemControl').removeClass('disabled');
		}, 1000);
	};

	bindClicks = () => {
		if ($('.ScaleMainStructure_options .ToggleItemControl ').length > 0) {
			$('.ScaleMainStructure')
				.off('click')
				.on('click', '.ToggleItemControl', function() {
					resetScales();
				});
		}

		if ($('.Navigation_control').length > 0) {
			$('.Navigation_right').click(function() {
				if (
					!$(this)
						.find('a')[0]
						.hasAttribute('disabled')
				) {
					resetScales();
				}
			});

			$('.Navigation_left').click(function() {
				if (
					!$(this)
						.find('a')[0]
						.hasAttribute('disabled')
				) {
					resetScales();
				}
			});
		}
	};

	SapphireWidgets.ScaleMainStructure = { create };
})(jQuery, window, SapphireWidgets);


/***/ }),

/***/ "./src/components/05-components/v3-pat/scales/toggle-item-control.js":
/*!***************************************************************************!*\
  !*** ./src/components/05-components/v3-pat/scales/toggle-item-control.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* Component ToggleItemControl */
SapphireWidgets.ToggleItemControl = () => {
	$(document).ready(function() {
		$('.ToggleItemControl input[type="radio"]').each(function() {
			if ($(this).is(':checked')) {
				$(this)
					.parent()
					.parent()
					.addClass('active');
			}
		});

		$('.ToggleItemControl')
			.off('click')
			.on('click', function() {
				$('.ToggleItemControl').removeClass('active');
				$(this)
					.find('input[type="radio"]')
					.not(':checked')
					.prop('checked', true)
					.click();
				if (
					$(this)
						.find('input[type="radio"]')
						.is(':checked')
				) {
					$(this).addClass('active');
				} else {
					$(this).removeClass('active');
				}
			});

		osAjaxBackend.BindAfterAjaxRequest(function() {
			$('.ToggleItemControl input[type="radio"]').each(function() {
				if ($(this).is(':checked')) {
					$(this)
						.parent()
						.parent()
						.addClass('active');
				}
			});

			$('.ToggleItemControl')
				.off('click')
				.on('click', function() {
					$('.ToggleItemControl').removeClass('active');

					if (
						$(this)
							.find('input[type="radio"]')
							.is(':checked')
					) {
						$(this).addClass('active');
					} else {
						$(this).removeClass('active');
					}
				});
		});
	});
};


/***/ }),

/***/ "./src/components/05-components/v3-pat/search-and-select/select-ssd.js":
/*!*****************************************************************************!*\
  !*** ./src/components/05-components/v3-pat/search-and-select/select-ssd.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var SearchSelectDefine = (window.SearchSelectDefine = window.SearchSelectDefine || {});

SapphireWidgets.SelectSSD = function SSDSelectSetup(config) {
	$(function() {
		var $SSDselectId = $('#' + config.SSDSelectId);
		var isMultiple = config.isMultiple;

		var $ComponentSSD = $SSDselectId.closest('.SearchSD');
		var $ComponentSSDinput = $ComponentSSD.find('.SearchSD___input input');
		var Componentinputlength = $ComponentSSDinput.val().length;

		if (Componentinputlength > 0) {
			$SSDselectId.find('.SelectSD__contentTitle').highlight($ComponentSSDinput.val(), {
				className: 'SelectSD-searched-term',
				caseSensitive: false,
				wordsOnly: false,
			});
		}

		var $favoritesSearchInput = $ComponentSSD.find('.SearchSD_filterfavorites input');

		if ($favoritesSearchInput.length) {
			var favoritesSearchLength = $favoritesSearchInput.val().length;

			if (config.HasFavorite === 'True' && favoritesSearchLength > 0) {
				$SSDselectId.find('.SelectSD__contentTitle').highlight($favoritesSearchInput.val(), {
					className: 'SelectSD-searched-term',
					caseSensitive: false,
					wordsOnly: false,
				});
			}
		}

		var OpenConfirmPopup = function($SSDselectId) {
			$ComponentSSD = $SSDselectId.closest('.SearchSD');
			$PopupID = $ComponentSSD.siblings('.SSDPopupWrapper');

			$PopupID.fadeIn('fast', function() {
				$ComponentSSD.addClass('Dont_Close');
				$PopupID
					.find('.SSDpopupOk')
					.off('click')
					.on('click', function() {
						$PopupID.fadeOut('fast', function() {
							$SSDselectId.find('.SelectSD__starTrigger > a').click();
							setTimeout($ComponentSSD.removeClass('Dont_Close'), 500);
						});
					});

				$PopupID
					.find('.SSDpopupCancel')
					.off('click')
					.on('click', function() {
						$PopupID.fadeOut('fast', function() {
							setTimeout($ComponentSSD.removeClass('Dont_Close'), 500);
						});
					});
			});
		};

		var SSDCheckBoxSelect = function($widgetId) {
			var checkBoxCount = 0;
			if (isMultiple === 'True') {
				checkBoxCount = $widgetId
					.closest('.SearchSD.showFavorite')
					.find('.SelectSD__multiple > input[type="checkbox"]:checked').length;

				$allListcard = $widgetId.closest('.SearchSD_content');

				if (checkBoxCount > 0) {
					$widgetId.closest('.SearchSD.showFavorite').addClass('MultiSelectActive');
					$widgetId.closest('.SearchSD_content .SelectSD').each(function() {
						$(this)
							.find('.SelectSD_contentWrapper')
							.off('click');
						$(this)
							.find('.SelectSD_actionLink')
							.off('click');
					});
				} else {
					$widgetId.closest('.SearchSD.showFavorite').removeClass('MultiSelectActive');
					$widgetId.closest('.SearchSD_content .SelectSD ').each(function() {
						$(this)
							.find('.SelectSD_contentWrapper')
							.on('click', function(e) {
								$(this)
									.find('.LineActionLINK > a')
									.click();
							});
						$(this)
							.find('.SelectSD_actionLink')
							.on('click', function(e) {
								$(this)
									.find('.LineActionLINK > a')
									.click();
							});
					});
				}
			}
		};

		if (isMultiple === 'True') {
			$SSDselectId.find('.SelectSD__multiple > input').click(function() {
				SSDCheckBoxSelect($SSDselectId);
			});
		}

		$SSDselectId.find('.SelectSD__starLink').on('click', function(e) {
			if (!$SSDselectId.find('.SelectSD .SelectSD__starWrapper').hasClass('starDisabled')) {
				if ($SSDselectId.find('.SelectSD .SelectSD__starWrapper').hasClass('starSelected')) {
					OpenConfirmPopup($SSDselectId);
				} else {
					$SSDselectId.find('.SelectSD__starTrigger > a').click();
				}
			}
		});

		$SSDselectId.find('.SelectSD_contentWrapper').on('click', function(e) {
			$ComponentSSD = $SSDselectId.closest('.SearchSD');
			$SSDselectId.find('.LineActionLINK > a').click();
			if (!$ComponentSSD.hasClass('MultiSelectActive')) {
				SearchSelectDefine.SSDSearch.returnToSearch($SSDselectId.closest('.SearchSD'));
				SearchSelectDefine.SSDSearch.closeSSD($SSDselectId.closest('.SearchSD'));
			}

			$ComponentSSDinput.val('');
		});

		$SSDselectId.find('.SelectSD_actionLink').on('click', function(e) {
			$ComponentSSD = $SSDselectId.closest('.SearchSD');
			$SSDselectId.find('.LineActionLINK > a').click();
			if (!$ComponentSSD.hasClass('MultiSelectActive')) {
				SearchSelectDefine.SSDSearch.returnToSearch($SSDselectId.closest('.SearchSD'));
				SearchSelectDefine.SSDSearch.closeSSD($SSDselectId.closest('.SearchSD'));
			}
		});
	});
};


/***/ }),

/***/ "./src/components/05-components/v3-pat/search-and-select/ssd-search.js":
/*!*****************************************************************************!*\
  !*** ./src/components/05-components/v3-pat/search-and-select/ssd-search.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var SearchSelectDefine = (window.SearchSelectDefine = window.SearchSelectDefine || {});

SapphireWidgets.SSDSearch = function SSDsearchSetup(config) {
	$(function() {
		var $SSDwidget = $('#' + config.SSDWidgetId); // SSDComponent map not used again
		var $SSDComponent = $SSDwidget.find('.SearchSD'); // SSDSearch Component id for use in the function and manipulate classes
		var $SSDComponentContent = $SSDComponent.find('.SearchSD_content'); // SSDcomponent content
		var hasClone = config.HasClone; // HasClone variable input parameter value
		var hasFavorite = config.HasFavorite; // HasFavorite variable input parameter value
		var showClones = config.ShowClones; // ShowClones variable input parameter value
		var letterLimit = config.LimitLetter; // Number of letter to enter before trigger the search action
		var hasShield = config.HasShield;
		var shieldTimeout = config.ShieldTimeout;
		var inputLength = config.SearchInputLength;
		var $widgetShield = $SSDComponent.find('.SearchSD--shield');
		var searchTriggerTimer;
		const $SSDClearButton = $SSDComponent.find('.SearchSD___remove');
		const $SSDInputElement = $SSDComponent.find('.SearchSD___input input');

		$SSDInputElement.attr('maxLength', inputLength);

		var executeSearch = function() {
			clearTimeout(searchTriggerTimer);
			searchTriggerTimer = setTimeout(function() {
				TriggerSearch($SSDComponent);
			}, 700);
		};

		if (hasShield) {
			window.setTimeout(function() {
				$widgetShield.hide();
			}, shieldTimeout);
		}

		/*  Returns a function, that, as long as it continues to be invoked, will not
		 *   be triggered. The function will be called after it stops being called for
		 *   N milliseconds. If `immediate` is passed, trigger the function on the
		 *   leading edge, instead of the trailing.
		 */
		var debounce = function(func, wait, immediate) {
			var timeout;
			return function executedFunction() {
				var context = this;
				var args = arguments;

				var later = function() {
					timeout = null;
					if (!immediate) func.apply(context, args);
				};

				var callNow = immediate && !timeout;
				clearTimeout(timeout);
				timeout = setTimeout(later, wait);
				if (callNow) func.apply(context, args);
			};
		};

		/****
		 *   Reset Search UI to the initial state
		 */
		var resetUI = function($SSDComponent) {
			$SSDComponent.find('.SearchSD__inputWrapper').show();
			$SSDComponent.find('.SearchSD_search_favoriteLink').hide();
			$SSDComponent.find('.SearchSD___goToFavorite').hide();
			$SSDComponent.find('.SearchSD__FavoriteActions').hide();
			$SSDComponent.find('.SearchSD__FavoriteRemove').hide();
			$SSDComponent.find('.SearchSD__cloneWrapper').hide();
			$SSDComponent.find('.SearchSD__inputWrapper .SearchSD__return').hide();

			if ($SSDInputElement.val().trim() === '') {
				$SSDComponent.find('.SearchSD___remove').hide();
			}

			$SSDComponent.removeClass('showFavorite');
			$SSDComponent.removeClass('showClone');
		};

		/*
		 *
		 *  Go to Favorites UI
		 *  --  rest SSDcomponent
		 *  --  show Favorite features
		 *  --  remove class showClone if component have that class
		 *  --  add class showFavorite to have component control
		 *  --  addClass Open with slide
		 */
		var goToFavorites = function($SSDComponent) {
			resetUI($SSDComponent);

			$SSDComponent.find('.SearchSD___input input').val('');
			$SSDComponent.removeClass('Open');
			$SSDComponent.removeClass('MultiSelectActive');
			$SSDComponent.find('.SearchSD__return').hide();
			$SSDComponent.find('.SearchSD__inputWrapper').hide();

			if ($SSDComponent.hasClass('showClone')) {
				$SSDComponent.removeClass('showClone');
			}

			$SSDComponent.find('.SearchSD_search_favoriteLink ').show();
			$SSDComponent.find('.SearchSD__FavoriteRemove ').show();
			$SSDComponent.find('.SearchSD__FavoriteActions').show();
			$SSDComponent.addClass('showFavorite');
			$SSDComponent.find('.SelectSD.hasFavorite > a').focus();
			$SSDComponent.addClass('Open');

			// loading show hide list
			$SSDComponent.find('.SearchSD_contentList').hide();
			$SSDComponent.find('.SearchSD__loading').show();
			if ($SSDComponent.find('.SearchSD_showMore a').length > 0) {
				$SSDComponent.find('.SearchSD_showMore').hide();
			}
		};

		/**************
		 *
		 *  Go to Clone UI
		 *  --  remove class Open
		 *  -- Add ShowClone class
		 *  -- SlideDown effect and add Open Class
		 */
		var goToClone = function($SSDComponent) {
			// loading show hide list
			$SSDComponent.find('.SearchSD_contentList').hide();
			$SSDComponent.find('.SearchSD__loading').show();
			if ($SSDComponent.find('.SearchSD_showMore a').length > 0) {
				$SSDComponent.find('.SearchSD_showMore').hide();
			}

			$SSDComponent.find('.SearchSD___input input').val('');
			$SSDComponent.removeClass('Open');

			if (!$SSDComponent.hasClass('showClone')) {
				$SSDComponent.addClass('showClone');
			}
			$SSDComponent.addClass('Open');
		};

		/*
		 * Return to search from favorite or clone
		 */
		var returnToSearch = function($SSDComponent) {
			// loading show hide list
			$SSDComponent.find('.SearchSD_contentList').hide();
			$SSDComponent.find('.SearchSD__loading').show();
			if ($SSDComponent.find('.SearchSD_showMore a').length > 0) {
				$SSDComponent.find('.SearchSD_showMore').hide();
			}

			resetUI($SSDComponent);
			$SSDComponent.removeClass('showClone');
			$SSDComponent.removeClass('showFavorite');
			$SSDComponent.removeClass('Open');
			$SSDComponent.removeClass('MultiSelectActive');

			$SSDComponent.find('.SearchSD__inputWrapper .SearchSD__return').hide();

			if ($SSDComponent.hasClass('hasClone')) {
				$SSDComponent.addClass('hasClone');
				$SSDComponent.find('.SearchSD__cloneWrapper').css('display', 'flex');
			}
			if ($SSDComponent.hasClass('hasFavorite')) {
				$SSDComponent.addClass('hasFavorite');
				$SSDComponent.find('.SearchSD_search_favoriteLink').show();
			}
		};

		/*
		 *   SSDClear closes SSDSearch container
		 *   and clear ssd filter input
		 */
		var ssdClear = function($SSDComponent) {
			$SSDComponent.removeClass('Open');
			$SSDComponent.find('.SearchSD___input input').val('');
		};

		/*
		 *   CloseSSD closes SSDSearch container
		 *   must remove hightlightSelection done by keyboard navigation
		 */
		var closeSSD = function($SSDComponent) {
			$SSDComponent.removeClass('Open');
			$SSDComponentContent.slideUp('250');
			$SSDComponent.find('.selected').removeClass('.selected');
		};

		/*
		 *   Add Open class to SSDComponent
		 *   if SSDComponent has class Open then focus
		 *   makes open effect, check the characters inside the input to filter
		 */
		var ssdFocus = function($SSDComponent) {
			if (!$SSDComponent.hasClass('Open')) {
				// loading show hide list
				$SSDComponent.find('.SearchSD_contentList').hide();
				$SSDComponent.find('.SearchSD__loading').show();
				if ($SSDComponent.find('.SearchSD_showMore a').length > 0) {
					$SSDComponent.find('.SearchSD_showMore').hide();
				}

				$SSDComponent.removeClass('Open');
				$SSDComponent.removeClass('.showClone');
				$SSDComponent.removeClass('.showFavorite');

				if (!$SSDComponent.hasClass('Open')) {
					$SSDComponent.find('.SearchLinkInput a').click();
					$SSDComponent.addClass('Open');
				}
			}
		};

		/*
		 *   When clicking clicking outside the component
		 *   the SSD must close and return to initial state
		 */
		var ClickOut = function(e, $SSDComponent) {
			if (!$SSDComponent.is(e.target) && $SSDComponent.has(e.target).length === 0) {
				returnToSearch($SSDComponent);
				$SSDComponent.removeClass('MultiSelectActive');
			}
		};

		/*
		 *   Triggers the link to initialize
		 *   the database search based on current length of the string inserted on the input
		 */
		var TriggerSearch = function($SSDComponent) {
			var currentWord = $SSDComponent.find('.SearchSD___input input').val();
			var currentCount = currentWord.length;
			if (currentCount >= letterLimit || currentCount === 0) {
				$SSDComponent.find('.SearchLinkInput > a').click();
			}
		};

		/*
		 *   Removes all favorite checked boxes
		 *   and ends MultipleSelect
		 */
		var MultiUncheck = function($SSDComponent) {
			$checkBoxes = $SSDComponent.parent().find('.SelectSD__multiple > input[type="checkbox"]');
			$SSDComponent.removeClass('MultiSelectActive');

			$SSDComponent
				.parent()
				.find('.SelectSD__multiple > input[type="checkbox"]')
				.each(function() {
					$(this).prop('checked', false);
				});
		};

		/*
		 *   KeyBoard events up down and enter if not filter
		 */
		var keyboardEvents = function(e, $SSDComponent) {
			if ($SSDComponent.hasClass('Open')) {
				var currentSelected = $SSDComponentContent.find('.ListRecords > span.selected'); // Current selectable item
				var $firstSelect = $SSDComponentContent.find('.ListRecords > span:first-child'); // First selectable item
				var $lastSelect = $SSDComponentContent.find('.ListRecords > span:last-child'); // Last selectable item
				var countSelected = currentSelected.length; // Number of selected item

				if (e.which == 38) {
					// if key pressed is up arrow
					if (countSelected === 0) {
						currentSelected = $lastSelect;
						$lastSelect.addClass('selected');
					} else {
						currentSelected.removeClass('selected');
						next = currentSelected.prev();

						if (next.length > 0) {
							currentSelected = next.addClass('selected');
						} else {
							currentSelected = currentSelected.last().addClass('selected');
						}
					}
				} else if (e.which == 40) {
					// if key pressed is down arrow
					if (countSelected === 0) {
						$firstSelect.addClass('selected');
					} else {
						next = currentSelected.next();
						currentSelected.removeClass('selected');

						if (next.length > 0) {
							currentSelected = next.addClass('selected');
						} else {
							currentSelected = currentSelected.eq(0).addClass('selected');
						}
					}
				} else if (e.which == 13) {
					// if key pressed is enter
					if (countSelected > 0) {
						e.preventDefault();
						currentSelected.find('.SelectSD .SelectSD_actionLink').click();
						ssdClear($SSDComponent);

						return true;
					} else if ($SSDComponent.find('SearchSD___input input').is(':active') && countSelected === 0) {
						e.preventDefault();
						return true;
					}
				} else {
					executeSearch();
				}
			}
		};

		/*
		 *   The first step is to reset the seetings to default
		 */
		resetUI($SSDComponent);

		/*
		 *  Remove autoComplete from search input
		 */
		$SSDComponent.find('.SearchSD___input input').attr('autocomplete', 'off');

		/*
		 *   If SSD has Clone and the clone list is visible
		 *   onclick "Clone previous medication" then
		 *   remove Open and show items to clone list
		 */
		if (hasClone === 'True') {
			$SSDComponent.addClass('hasClone');
			$SSDComponent.find('.SearchSD__cloneWrapper').css('display', 'flex');
		}

		if (hasFavorite === 'True') {
			$SSDComponent.addClass('hasFavorite');
			$SSDComponent.find('.SearchSD_search_favoriteLink').show();
		}

		if ((hasClone === 'True') & (showClones === 'True')) {
			$SSDComponent.find('.SearchSD_cloneWrapper').click(function() {
				$SSDComponent.addClass('Open');
			});
		}

		$SSDComponent.find('.SearchSD__FavoriteRemove').click(function() {
			ssdClear($SSDComponent);
			returnToSearch($SSDComponent);
			debounce(TriggerSearch($SSDComponent), 550);
			debounce($SSDComponent.find('.SearchSD___input input').focus(), 560);
		});

		$SSDComponent.find('.SearchSD__cloneWrapper').click(function() {
			goToClone($SSDComponent);
			$SSDComponent.find('.SearchSD___goToClone > a').click();
		});

		$SSDComponent.find('.SearchSD__inputWrapper').click(function() {
			if ($SSDComponent.hasClass('showClone')) {
				returnToSearch($SSDComponent);
			}
		});

		$SSDComponent.find('.SearchSD__FavoriteActionsCancel').click(function() {
			MultiUncheck($SSDComponent);
		});

		$SSDComponent.find('.SearchSD___input input').focus(function() {
			debounce(ssdFocus($SSDComponent), 600);
		});

		$('body').mouseup(function(e) {
			ClickOut(e, $SSDComponent);
		});
		/*
		 *   KeyBoard events on key press
		 */
		$SSDComponent
			.find('.SearchSD___input input')
			.add($SSDComponent.find('.SelectSD_actionLink'))
			.on('keyup', function(e) {
				if (!e.which != 13) {
					keyboardEvents(e, $SSDComponent);
				}

				if ($SSDInputElement.val().trim() === '') {
					$SSDClearButton.animate({ opacity: 'hide' }, 300);
				} else {
					$SSDClearButton.animate({ opacity: 'show' }, 300);
				}
			});

		/*
		 *   Prevent form submission on enter,
		 *   instead go to keyboard events to trigger
		 *   the selection
		 */
		$($SSDComponent).on('keydown', function(e) {
			if (e.which == 13) {
				keyboardEvents(e, $SSDComponent);
			}
		});

		$SSDComponent.find('.SearchSD___remove').click(function() {
			ssdClear($SSDComponent);
			debounce(returnToSearch($SSDComponent), 600);
		});

		$SSDComponent.find('.SearchSD_search_favoriteLink').click(function() {
			ssdClear($SSDComponent);
			goToFavorites($SSDComponent);
			$SSDComponent.find('.SearchSD___goToFavorite > a').click();
		});

		$SSDComponent.find('.SearchSD__FavoriteActionsAdd > a').click(function() {
			debounce(TriggerSearch($SSDComponent), 200);
			debounce(returnToSearch($SSDComponent), 350);
		});

		/*
		 *   On Ajax Request hide loading div if the SSD is open then show the
		 *   ListRecords
		 */
		osAjaxBackend.BindAfterAjaxRequest(function() {
			if ($SSDComponent.hasClass('Open')) {
				$SSDComponent.find('.SearchSD__loading').hide();
				$SSDComponentContent.slideDown('1000', function() {
					$SSDComponent.find('.SearchSD_contentList').show();
					if ($SSDComponent.find('.SearchSD_showMore a').length > 0) {
						$SSDComponent.find('.SearchSD_showMore').show();
					}
				});
			}
		});

		$('form').append('<input type="submit" name="ssdInput" onclick="return false;"  style="display:none;" />');

		window.SearchSelectDefine.SSDSearch = {
			returnToSearch: returnToSearch,
			resetUI: resetUI,
			closeSSD: closeSSD,
			ssdFocus: ssdFocus,
			TriggerSearch: TriggerSearch,
			ssdClear: ssdClear,
		};
	});
};
// Added to close the select list if we click the prescription Iframe;
window.addEventListener('DOMContentLoaded', event => {
	var rootElement = document.querySelector('body');
	rootElement.addEventListener(
		'click',
		function(event) {
			document.querySelector("iframe[src*='Prescriptions_CW']") &&
				document
					.querySelector("iframe[src*='Prescriptions_CW']")
					.contentWindow.document.addEventListener('click', e => {
						e.stopPropagation();
						document.querySelector('.SearchSD').classList.remove('Open');
						var allInput = document.querySelector('.SearchSD___input').children;
						for (const element in allInput) {
							return allInput[element].value != undefined ? (allInput[element].value = '') : null;
						}
					});
		},
		true
	);
});


/***/ }),

/***/ "./src/components/05-components/v3-pat/searchable-client-side/scripts.js":
/*!*******************************************************************************!*\
  !*** ./src/components/05-components/v3-pat/searchable-client-side/scripts.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* Component SearchClientSide */
(function($, window, SapphireWidgets) {
	class SearchClientSide {
		constructor(config) {
			this.options = {
				...config,
			};

			this.onComponentInit();

			$(window).load(() => {
				osAjaxBackend.BindAfterAjaxRequest(() => {
					setTimeout(() => {
						$('#' + this.options.inputId).trigger('change');
					}, 200);
				});
			});
		}

		onComponentInit() {
			$('#' + this.options.inputId).on('change keydown paste input', e => {
				if (e.keyCode === 13) {
					e.preventDefault();
				} else {
					this.searchClientSide(
						this.options.inputId,
						this.options.searchableElementSelector,
						this.options.searchableChildSelector
					);
				}
			});
		}

		searchClientSide(inputId, selector, childSelector) {
			if ($('#' + inputId).is(':visible')) {
				var searchText = osjs('#' + inputId)
					.val()
					.toLowerCase();
				var searchCounter = 0;
				var selecion = osjs(selector);

				selecion.removeClass('searchNotFound');
				selecion.removeClass('searchFound');
				selecion.unhighlight();

				if (childSelector) {
					const elementToSearch = osjs(childSelector);
					elementToSearch.unhighlight();
				}

				if (searchText.length > 1) {
					selecion.each(function() {
						const textToCompare = childSelector
							? $(this)
									.find(childSelector)
									.text()
							: this.innerText;

						if (
							textToCompare
								.trim()
								.toLowerCase()
								.indexOf(searchText) > -1
						) {
							osjs(this).addClass('searchFound');
							searchCounter++;
							osjs(this).highlight(searchText);
						} else {
							osjs(this).addClass('searchNotFound');
						}
					});
				}
			}
		}
	}

	const create = config => (window[config.widgetId] = new SearchClientSide(config));

	SapphireWidgets.SearchClientSide = {
		create,
	};
})(jQuery, window, SapphireWidgets);


/***/ }),

/***/ "./src/components/05-components/v3-pat/section-expandable-custom/scripts.js":
/*!**********************************************************************************!*\
  !*** ./src/components/05-components/v3-pat/section-expandable-custom/scripts.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* Component SectionExpandable */
(function($, window, SapphireWidgets) {
	function SectionExpandableCustom() {
		var that = this;

		// Object to save stats
		var previewstat = [];

		var transitionEvent = SilkUI.whichTransitionEvent();
		// set click events
		function clickEvents(ob) {
			// store querys in a single var
			var Section = $(ob).parent();
			var SectionContent = Section.children('.SectionExpandableCustom_content');

			// get id
			var id = Section.attr('id');

			var tempHeight = 0;

			// has class expanded
			if (Section.hasClass('expanded')) {
				// Calc and set a fixed height, during this process, transitions are disabled
				SectionContent.addClass('noTransition');
				SectionContent.height(SectionContent.height());
				SectionContent[0].offsetHeight; // hack to force a repaint
				SectionContent.removeClass('noTransition');

				// Collapse content
				SectionContent.height(0);
				Section.removeClass('expanded');
				SectionContent.css('overflow', 'hidden');

				// Remove class, set height and save state
				previewstat[id]['client'] = false;
			} else {
				// Calc and set a fixed height
				SectionContent.height('auto');
				tempHeight = SectionContent.height();
				SectionContent.height(0);
				SectionContent.height(tempHeight);
				SectionContent.css('overflow', 'hidden');

				// remove class, set height and save state
				Section.addClass('expanded');
				previewstat[id]['client'] = true;

				if ($('.Page').hasClass('ie8') || $('.Page').hasClass('ie9')) {
					SectionContent.height('auto');
					SectionContent.css('overflow', 'visible');
				}

				// add event transition end to overflow:visible for tooltips and dropdowns issues
				SectionContent.on(transitionEvent, function() {
					if (Section.hasClass('expanded')) {
						SectionContent.css('overflow', 'visible');
						SectionContent.addClass('noTransition');
						SectionContent.height('auto');
						SectionContent[0].offsetHeight; // hack to force a repaint
						SectionContent.removeClass('noTransition');
					}
				});
			}
		}

		// ajax refres function
		that.ajaxRefresh = function() {
			// remove click events
			$('.SectionExpandable_headerCustom').off();

			// add stop prepagation
			$(
				'.SectionExpandable_headerCustom input, .SectionExpandable_headerCustom select, .SectionExpandable_headerCustom a'
			).click(function(event) {
				event.stopPropagation();
			});

			// add new click events
			$('.SectionExpandable_headerCustom').on('click', function() {
				clickEvents(this);
			});

			// each all sections
			$('.SectionExpandableCustom').each(function() {
				// if new SectionExpandable then add to previewstat array
				if (previewstat[$(this).attr('id')] == null) {
					// add stat on array
					var stat = false;
					// if open
					if ($(this).hasClass('expanded')) {
						stat = true;
					}
					// add row
					previewstat[$(this).attr('id')] = {
						client: stat,
						server: stat,
					};
				}

				// curent state (ajax state x initial state)
				var curState = false;

				// check if start expandable
				if ($(this).hasClass('expanded')) {
					curState = true;
				}

				// check if ajax != initial server
				if (curState != previewstat[$(this).attr('id')]['server']) {
					// curstate
					previewstat[$(this).attr('id')]['client'] = curState;
					previewstat[$(this).attr('id')]['server'] = curState;
				} else {
					// has class expanded
					if (previewstat[$(this).attr('id')]['client'] == false && $(this).hasClass('expanded')) {
						$(this).removeClass('expanded');
						$(this)
							.children('.SectionExpandableCustom_content')
							.height(0);
					} else if (previewstat[$(this).attr('id')]['client'] == true && !$(this).hasClass('expanded')) {
						$(this).addClass('expanded');
					}
				}
			});
		};

		// set events
		that.init = function() {
			// each all sections to create array stat
			$('.SectionExpandableCustom').each(function() {
				// add stat on array
				var stat = false;

				// if open
				if ($(this).hasClass('expanded')) {
					stat = true;
				}

				// add row
				previewstat[$(this).attr('id')] = {
					client: stat,
					server: stat,
				};

				if (
					$(this).hasClass('HideWhenEmpty') &&
					$(this)
						.find('.SectionExpandableCustom_content')
						.text().length === 0
				) {
					$(this).hide();
				}

				// hack to display a message when SectionExpandableCustom has no child items
				var isEmpty = true;
				$(this)
					.find('.SectionExpandableCustom_content div, .SectionExpandableCustom_content span')
					.not('.SectionExpandableCustom_content--empty')
					.each(function() {
						if ($(this).text().length > 0) {
							isEmpty = false;
							return false;
						}
					});
				if (!isEmpty) {
					$(this)
						.find('.SectionExpandableCustom_content--empty')
						.css({
							display: 'none',
						});
				}

				var $expandableInstance = $(this);
				var $toggler = $(this).find('> .SectionExpandable-toggler');
				if ($toggler.length === 1) {
					var $togglerState = false;
					$toggler.find('[data-labelvalue]').text($toggler.find('[data-labelshow]').data('labelshow'));
					$toggler.off('click').on('click', function(evt) {
						evt.stopPropagation();
						$togglerState = !$togglerState;
						if ($togglerState) {
							$expandableInstance.find('.SectionExpandable-toggled').show();
							$toggler.find('[data-labelvalue]').text($toggler.find('[data-labelhide]').data('labelhide'));
						} else {
							$expandableInstance.find('.SectionExpandable-toggled').hide();
							$toggler.find('[data-labelvalue]').text($toggler.find('[data-labelshow]').data('labelshow'));
						}
					});
				}
			});

			// add click events
			$('.SectionExpandable_headerCustom')
				.off('click')
				.on('click', function() {
					clickEvents(this);
				});

			// add stop prepagation
			$(
				'.SectionExpandable_headerCustom input, .SectionExpandable_headerCustom select, .SectionExpandable_headerCustom a'
			).click(function(event) {
				event.stopPropagation();
			});

			// event ajax
			osAjaxBackend.BindAfterAjaxRequest(that.ajaxRefresh);
		};
	}

	const create = () => {
		SilkUI.SectionExpandable = new SectionExpandableCustom();
		SilkUI.Execute(SilkUI.SectionExpandable.init, 'Error on SilkUIFramework/Content/SectionExpandable');
	};

	SapphireWidgets.SectionExpandable = {
		create,
	};
})(jQuery, window, SapphireWidgets);


/***/ }),

/***/ "./src/components/05-components/v3-pat/section-expandable-inside/scripts.js":
/*!**********************************************************************************!*\
  !*** ./src/components/05-components/v3-pat/section-expandable-inside/scripts.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* Component SectionExpandableInside */
(function($, window, SapphireWidgets) {
	function SectionExpandableInside() {
		var that = this;

		// Object to save stats
		var previewstat = [];

		var transitionEvent = SilkUI.whichTransitionEvent();
		// set click events
		function clickEvents(ob) {
			// store querys in a single var
			var Section = $(ob).parent();
			var SectionContent = Section.children('.SectionExpandableInside_content');

			// get id
			var id = Section.attr('id');

			var tempHeight = 0;

			// has class expanded
			if (Section.hasClass('expanded')) {
				// Calc and set a fixed height, during this process, transitions are disabled
				SectionContent.addClass('noTransition');
				SectionContent.height(SectionContent.height());
				SectionContent[0].offsetHeight; // hack to force a repaint
				SectionContent.removeClass('noTransition');

				// Collapse content
				SectionContent.height(0);
				Section.removeClass('expanded');
				SectionContent.css('overflow', 'hidden');

				// Remove class, set height and save state
				previewstat[id]['client'] = false;
			} else {
				// Calc and set a fixed height
				SectionContent.height('auto');
				// tempHeight = SectionContent.height();
				// SectionContent.height(0);
				// SectionContent.height(tempHeight);
				SectionContent.css('overflow', 'hidden');

				// remove class, set height and save state
				Section.addClass('expanded');
				previewstat[id]['client'] = true;

				// add event transition end to overflow:visible for tooltips and dropdowns issues
				SectionContent.on(transitionEvent, function() {
					if (Section.hasClass('expanded')) {
						SectionContent.css('overflow', 'visible');
						SectionContent.addClass('noTransition');
						SectionContent.height('auto');
						SectionContent[0].offsetHeight; // hack to force a repaint
						SectionContent.removeClass('noTransition');
					}
				});
			}
		}

		// ajax refres function
		that.ajaxRefresh = function() {
			// remove click events
			$('.SectionExpandableInside .SectionExpandableInside_header').off();

			// add stop prepagation
			$(
				'.SectionExpandableInside .SectionExpandableInside_header input, .SectionExpandableInside .SectionExpandableInside_header select, .SectionExpandableInside .SectionExpandableInside_header a'
			).click(function(event) {
				event.stopPropagation();
			});

			// add new click events
			$('.SectionExpandableInside .SectionExpandableInside_header').on('click', function() {
				clickEvents(this);
			});

			// each all sections
			$('.SectionExpandableInside').each(function() {
				// if new SectionExpandable then add to previewstat array
				if (previewstat[$(this).attr('id')] == null) {
					// add stat on array
					var stat = false;
					// if open
					if ($(this).hasClass('expanded')) {
						stat = true;
					}
					// add row
					previewstat[$(this).attr('id')] = { client: stat, server: stat };
				}

				// curent state (ajax state x initial state)
				var curState = false;

				// check if start expandable
				if ($(this).hasClass('expanded')) {
					curState = true;
				}

				// check if ajax != initial server
				if (curState != previewstat[$(this).attr('id')]['server']) {
					// curstate
					previewstat[$(this).attr('id')]['client'] = curState;
					previewstat[$(this).attr('id')]['server'] = curState;
				} else {
					// has class expanded
					if (previewstat[$(this).attr('id')]['client'] == false && $(this).hasClass('expanded')) {
						$(this).removeClass('expanded');
						$(this)
							.children('.SectionExpandableInside_content')
							.height(0);
					} else if (previewstat[$(this).attr('id')]['client'] == true && !$(this).hasClass('expanded')) {
						$(this).addClass('expanded');
					}
				}
			});
		};

		// set events
		that.init = function() {
			// each all sections to create array stat
			$('.SectionExpandableInside').each(function() {
				// add stat on array
				var stat = false;

				// if open
				if ($(this).hasClass('expanded')) {
					stat = true;
				}

				// add row
				previewstat[$(this).attr('id')] = { client: stat, server: stat };
			});

			// add click events
			$('.SectionExpandableInside .SectionExpandableInside_header')
				.off('click')
				.on('click', function() {
					clickEvents(this);
				});

			// add stop prepagation
			$(
				'.SectionExpandableInside .SectionExpandableInside_header input, .SectionExpandableInside .SectionExpandableInside_header select, .SectionExpandableInside .SectionExpandableInside_header a'
			).click(function(event) {
				event.stopPropagation();
			});

			// event ajax
			osAjaxBackend.BindAfterAjaxRequest(that.ajaxRefresh);
		};
	}

	const setOpenCloseClass = id => {
		id.click(function() {
			if (id.parent().hasClass('expanded')) {
				$(this)
					.find('.HeaderIcon')
					.removeClass('open');
				$(this)
					.find('.HeaderIcon')
					.addClass('closed');
			} else {
				$(this)
					.find('.HeaderIcon')
					.removeClass('closed');
				$(this)
					.find('.HeaderIcon')
					.addClass('open');
			}
		});
	};

	const create = () => {
		SilkUI.SectionExpandable = new SectionExpandableInside();
		SilkUI.Execute(SilkUI.SectionExpandable.init, 'Error on SilkUIFramework/Content/SectionExpandable');
	};

	SapphireWidgets.SectionExpandableInside = {
		create,
		setOpenCloseClass,
	};
})(jQuery, window, SapphireWidgets);


/***/ }),

/***/ "./src/components/05-components/v3-pat/select-system/scripts.js":
/*!**********************************************************************!*\
  !*** ./src/components/05-components/v3-pat/select-system/scripts.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* Component SelectSystem */
SapphireWidgets.SelectSystem = config => {
	$(function() {
		var WidgetId = config.WidgetId; //Combo Box Id to be used.
		var Class = config.Class; //All Combo boxes with this class will be be transformed.
		var NoResultsText = config.NoResultsText; //Text to display when there are no results.
		var inputType = config.InpuType; //Options: FIlters, Dropdown, Select2
		var Prompt = config.Prompt; //Prompt in search
		var Select2Type = config.SelectType; // Type of select2 configuration
		var HasSearch = config.HasSearch; // has search
		var OnSelectingJS = config.OnSelectingJS;
		var OnUnSelectingJS = config.OnUnSelectingJS;
		var MaximumLength = config.MaximumLength;
		var SelectedValue = config.SelectedValue;
		var allowClear = config.allowClear;
		//  Select2 Ajax Configuration
		var AjaxURL = config.AjaxURL;
		var AjaxDelay = config.AjaxDelay;
		var PaginationSize = config.PaginationSize;
		var MinimumInputLenght = config.MinimumInputLenght;
		var SearchTerm = config.SearchTerm;
		var SearchExtraParam1 = config.SearchExtraParam1;
		var PageTerm = config.PageTerm;
		var AmountPage = config.PageAmount;
		var isMultiple = config.isMultiple;
		var Select2Options = {};
		var $WidgetIdentifier;

		if (config.locale === 'AR' || config.locale === 'FA') {
			Select2Options.dir = 'rtl';
		}

		Select2Options.theme = 'default SelectSystem';

		/*  
          Change select2 search display 
              -Multiple Select2 search UI like Single Select2
      */
		$.fn.select2.amd.define(
			'SearchLikeSingle',
			[
				'select2/utils',
				'select2/dropdown',
				'select2/dropdown/attachBody',
				'select2/dropdown/attachContainer',
				'select2/dropdown/search',
				'select2/dropdown/minimumResultsForSearch',
			],
			function(Utils, Dropdown, AttachBody, AttachContainer, Search, minimumResultsForSearch) {
				let dropdownSearch = Utils.Decorate(Dropdown, Search);
				dropdownSearch.prototype.render = function() {
					var $rendered = Dropdown.prototype.render.call(this);
					// Add ability for a placeholder in the search box
					let placeholder = this.options.get('placeholderForSearch') || '';
					var $search = $(
						'<span class="select2-search select2-search--dropdown">' +
							'<input class="select2-search__field" placeholder="' +
							placeholder +
							'" type="search"' +
							' tabindex="-1" autocomplete="off" autocorrect="off" autocapitalize="off"' +
							' spellcheck="false" role="textbox" />' +
							'</span>'
					);

					this.$searchContainer = $search;
					this.$search = $search.find('input');
					$search.addClass('MultipleSelect');

					$rendered.prepend($search);
					$search.parent().addClass('MultipleSelect');
					return $rendered;
				};

				// Decorate the dropdown+search with the containers
				let adapter = Utils.Decorate(dropdownSearch, AttachContainer);
				adapter = Utils.Decorate(adapter, AttachBody);

				return adapter;
			}
		);

		/**
		 * Default Configuration needed to associate the widget to the select2 plugin
		 */
		if (WidgetId === '' && Class != '') {
			$WidgetIdentifier = $('.' + Class);
		} else {
			$WidgetIdentifier = $('#' + WidgetId);
		}
		Select2Options.containerCssClass = 'select-hide ' + inputType;

		//  Select2Options.dropdownParent= $('#'+ParentDiv);

		var formatResult = function(result) {
			var $selectedOptionsValue = $WidgetIdentifier.find(':selected');
			var selectedOptions = $selectedOptionsValue.length;
			var totalOptions = $WidgetIdentifier.find('option').length;
			var selectAllOpt = $WidgetIdentifier.find('option:first-child:selected').length;
			var activeValues = '';
			var allOptExceptAll = $WidgetIdentifier.find(':selected:not(".SelectedAll")').length;
			var $allOptExceptAllObj = $WidgetIdentifier.find(':selected:not(".SelectedAll")');

			if (selectedOptions === totalOptions) {
				if (totalOptions - 1 > 3) {
					return 'All Selected';
				} else {
					$allOptExceptAllObj.each(function() {
						activeValues = activeValues + ' ' + $(this)[0].innerText;
					});
					activeValues = activeValues.replace(/,\s*$/, '');
					return activeValues;
				}
			} else {
				var totalopt = totalOptions - 1;
				if (selectedOptions > 3) {
					return selectedOptions + ' of ' + totalopt + ' selected';
				} else {
					if (selectedOptions > 0) {
						$selectedOptionsValue.each(function() {
							activeValues = activeValues + ' ' + $(this)[0].innerText + ', ';
						});
						activeValues = activeValues.replace(/,\s*$/, '');
						return activeValues;
					} else {
						return 'Select an option';
					}
				}
			}
		};

		if (NoResultsText != '') {
			Select2Options.formatNoMatches = function() {
				return NoResultsText;
			};
		}

		if (inputType != '') {
			Select2Options.dropdownCssClass = inputType;
		}

		if (allowClear === 'True') {
			Select2Options.allowClear = true;
		}

		if (MaximumLength != '') {
			Select2Options.maximumInputLength = MaximumLength;
		}

		if (Prompt != '') {
			Select2Options.placeholder = Prompt;
		} else {
			Select2Options.placeholder = {
				id: '-1', // the value of the option
				text: 'Select an option',
			};
		}

		if (Select2Type === '3') {
			// Select2 Ajax
			Select2Options = {};

			if (config.locale === 'AR' || config.locale === 'FA') {
				Select2Options.dir = 'rtl';
			}

			Select2Options.allowClear = false;

			Select2Options.templateSelection = function(repo) {
				if (!repo.element) {
					return Prompt;
				}

				return repo.full_name || repo.text;
			};

			Select2Options.templateResult = function(repo) {
				if (repo.loading) {
					return repo.text;
				}
				var markup = '<div class=""Clearfix"">' + '<div class=""ThemeGrid_Width12"">' + repo.text + '</div>';
				if (repo.description) {
					markup += '<div class=""OSAutoMarginTop"">' + repo.description + '</div>';
				}
				markup += '</div>';
				return markup;
			};

			(Select2Options.ajax = {
				url: AjaxURL,
				dataType: 'json',
				delay: AjaxDelay,
				data: function(params) {
					var Select2AjaxOpt = {};
					var SplitParameter = SearchExtraParam1.split(',');
					Select2AjaxOpt.SearchParameter = params.term;
					Select2AjaxOpt.Page = params.page || 1;
					Select2AjaxOpt.PageAmount = AmountPage;

					SplitParameter.forEach(function(el) {
						var splitText = el.split(':');
						Select2AjaxOpt[splitText[0]] = splitText[1];
					});

					return Select2AjaxOpt;
				},
				processResults: function(data, params) {
					params.page = params.page || 1;

					return {
						results: data.items,
						pagination: {
							more: params.page * PaginationSize < data.total_count,
						},
					};
				},
				cache: true,
			}),
				(Select2Options.minimumInputLength = MinimumInputLenght);

			Select2Options.escapeMarkup = function(markup) {
				return markup;
			};

			if (config.isMultiple) {
				Select2Options.multiple = true;
				Select2Options.containerCssClass = 'Select2Ajax Multiple';
				Select2Options.dropdownCssClass = 'Select2Ajax Multiple';
			} else {
				Select2Options.multiple = false;
				Select2Options.containerCssClass = 'Select2Ajax';
				Select2Options.dropdownCssClass = 'Select2Ajax';
			}

			if (SelectedValue !== '') {
				try {
					const data = JSON.parse(SelectedValue);
					const option = new Option(data.Value, data.Id, true, true);

					$WidgetIdentifier.append(option).trigger('change');
				} catch (error) {
					console.error(`Component SelectSystem (${WidgetId}): SelectedValue must be a valid JSON!`);
				}
			}

			Select2Options.minimumResultsForSearch = 0;
			Select2Options.tags = config.HasTags;
			Select2Options.closeOnselect = true;
		}

		if (Select2Type === '2') {
			//Select2 with CheckBox

			var isAllSelected = false;
			if ($WidgetIdentifier[0].options.length === $WidgetIdentifier[0].selectedOptions.length) {
				isAllSelected = true;
			}

			if (WidgetId != '') {
				option = new Option('Select All', 'All', true, isAllSelected);
				$WidgetIdentifier.prepend(option);
				$WidgetIdentifier.find('option:first-child').addClass('SelectedAll');
			}
			Select2Options.multiple = true;
			Select2Options.closeOnSelect = false;
			Select2Options.allowHtml = false;
			Select2Options.tags = false;

			if (HasSearch === 'True') {
				Select2Options.dropdownAdapter = $.fn.select2.amd.require('SearchLikeSingle');
			} else {
				Select2Options.minimumResultsForSearch = -1;
			}

			Select2Options.containerCssClass = 'MultipleSelect';
			Select2Options.dropdownCssClass = 'MultipleSelect';
			Select2Options.templateSelection = formatResult;
		}

		if (Select2Type === '6') {
			// Select2 HtmlOptions
			Select2Options = {};
			if (config.locale === 'AR' || config.locale === 'FA') {
				Select2Options.dir = 'rtl';
			}

			var dataHtmlOption = [];
			$WidgetIdentifier.find('option').each(function(key, value) {
				var optionObject = {
					id: $(this).val(),
					text: $(this).text(),
					html: $(this).text(),
				};
				dataHtmlOption.push(optionObject);
			});

			Select2Options.containerCssClass = 'customSelect';
			Select2Options.dropdownCssClass = 'dropdownCustom';
			Select2Options.data = dataHtmlOption;
			Select2Options.escapeMarkup = function(markup) {
				return markup;
			};

			if (SelectedValue != '') {
				$WidgetIdentifier.val(SelectedValue).trigger('change');
			} else {
				$WidgetIdentifier.val('').trigger('change');
			}
		}

		if (Select2Type === '1') {
			// Select2 TagCustom
			Select2Options.tags = true;
			Select2Options.containerCssClass = 'tagCustom';
			Select2Options.dropdownCssClass = 'tagCustom';
			Select2Options.TokenSeparatos = [',', ' '];
			Select2Options.createSearchChoice = function(term, data) {
				if (
					$(data).filter(function() {
						return this.text.localeCompare(term) === 0;
					}).length === 0
				) {
					return {
						id: term,
						text: term,
					};
				}
			};
		}

		if (Select2Type === '5') {
			// Select2 TagMultiple
			Select2Options.tags = true;
			Select2Options.containerCssClass = 'tagSystem';
			Select2Options.dropdownCssClass = 'tagSystem';
			Select2Options.createTag = function(params) {
				var term = $.trim(params.term);
				if (term === '') {
					return null;
				}
				return {
					id: '#' + term,
					text: term,
					newTag: true, // add additional parameters
				};
			};
		}

		if (HasSearch === 'False') {
			Select2Options.minimumResultsForSearch = -1;
		}

		if (OnUnSelectingJS != '' || OnSelectingJS != '') {
			$WidgetIdentifier
				.select2(Select2Options)
				.on('select2:unselecting', function(e) {
					$(this).data('unselecting', true);
					OnUnSelectingJS;
				})
				.on('select:selecting', function(e) {
					OnSelectingJS;
				})
				.on('select:opening', function(e) {
					if ($(this).data('unselecting')) {
						$(this).removeData('unselecting');
						e.preventDefault();
					}
				})
				.on('select:open', function(evt) {
					evt.preventDefault();
				})
				.on('select2:close', function(evt) {
					evt.preventDefault();
				});
		} else {
			if (Select2Type === '2') {
				$WidgetIdentifier.select2(Select2Options);
				var idwidget = '#' + WidgetId;

				$WidgetIdentifier.on('select2:select', function(e) {
					UnselectedId = e.params.data.id;
					if (UnselectedId === 'All') {
						var selectedItems = [];
						var allOptions = $(idwidget + ' option');
						allOptions.each(function() {
							selectedItems.push($(this).val());
						});
						$WidgetIdentifier.select2('destroy');
						$WidgetIdentifier.val(selectedItems).trigger('change');
						$WidgetIdentifier.select2(Select2Options);
						$WidgetIdentifier.select2('open');
					} else {
						var selectedOptions = $WidgetIdentifier.find('option:selected').length;
						var totalOptions = $WidgetIdentifier.find('option').length;
						if (selectedOptions === totalOptions - 1 && $(idwidget + ' >  option:selected:first-child').length === 0) {
							var selectedItems = [];
							var allOptions = $(idwidget + ' option');
							allOptions.each(function() {
								selectedItems.push($(this).val());
							});
							$WidgetIdentifier.select2('destroy');
							$WidgetIdentifier.val(selectedItems).trigger('change');
							$WidgetIdentifier.select2(Select2Options);
							$WidgetIdentifier.select2('open');
						}
					}
				});

				$WidgetIdentifier.on('select2:unselect', function(e) {
					UnselectedId = e.params.data.id;
					if (UnselectedId === 'All') {
						$(idwidget + ' > option').removeAttr('selected');
						$WidgetIdentifier.select2('destroy');
						$WidgetIdentifier.select2(Select2Options);
						$WidgetIdentifier.select2('open');
						$(idwidget)
							.val('')
							.trigger('change');
						//$(idwidget +' > option').attr('selected', "selected");
					} else {
						$(idwidget + ' > option:first-child').removeAttr('selected');
						$WidgetIdentifier.select2(Select2Options);
						$WidgetIdentifier.select2('open');
					}
				});
			} else {
				$WidgetIdentifier.select2(Select2Options);
			}
		}
	});
};


/***/ }),

/***/ "./src/components/05-components/v3-pat/shift-container/scripts.js":
/*!************************************************************************!*\
  !*** ./src/components/05-components/v3-pat/shift-container/scripts.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* Component ShiftContainer */
(function($, window, document, SapphireWidgets) {
	let shiftTimelineResizeTimer;
	let $shiftContainerId = $();

	const create = shiftContainerId => {
		// $('.ShiftCard_timeLine').css('visibility', 'hidden');

		$('.ShiftExpandable_container .ActionsMenu ').css('display', 'none');

		$shiftContainerId = $(shiftContainerId);

		hasScrollBar();
		handleShiftTable();

		// setTimeout(function () {
		// 	$('.ShiftCard_timeLine').css('visibility', 'visible');
		// 	$('.ShiftExpandable_container .ActionsMenu ').css('display', 'block');
		// }, 1500);

		$('.ShiftExpandable__arrow')
			.off('mousedown')
			.on('mousedown', function() {
				setTimeout(function() {
					redrawShiftTimeline();
				}, 1500);
			});
	};

	const handleShiftTable = () => {
		$('.ShiftExpandable').each(function(index, el) {
			var $elFlag = $(this)
				.parent()
				.find('.FlagLine');
			var $elFlagTime = $(this)
				.parent()
				.find('.FlagLine_time');
			var $columnFlag = $elFlag.data('column');
			var $minutesFlag = $elFlag.data('minutes');
			var $slots = $(this)
				.closest('.ShiftContainer')
				.find('.ShiftContainer_header')
				.find('.ShiftCellContent');
			var $slotWidth = Math.round($slots.eq(0).width());
			var minutesPosition = ($minutesFlag * $slotWidth) / 60;

			// handle current time flog horizontal positioning
			var slotsPosition = [];
			$slots.each(function(index, el) {
				slotsPosition.push($(this).position().left);
			});
			$elFlag.css('left', slotsPosition[$columnFlag - 1] + minutesPosition);
			$elFlag.css('display', 'block');
			if ($columnFlag === $slots.length) {
				$elFlagTime.css({
					right: '1px',
					left: 'auto',
				});
			}

			// handle cells that might span over several slots
			$(this)
				.find('.ShiftCard')
				.each(function(index, elRow) {
					var rowHasSpannedCell = false;
					$(elRow)
						.find('.ShiftCellContent')
						.each(function(index, elCell) {
							var colspan = $(elCell).data('colspan');
							if (colspan === slotsPosition.length || rowHasSpannedCell) {
								$(elCell).css({
									display: 'inline-block',
									flex: '1 1 auto',
								});
							} else if (colspan > 1) {
								rowHasSpannedCell = true;
								$(elCell).css({
									display: 'inline-block',
									flex: 'none',
									width: +(slotsPosition[colspan] - slotsPosition[0]) + 'px',
								});
							}
						});
				});

			// handle horizontal scroll behavior
			if (el.scrollWidth > el.clientWidth) {
				$(el).width(el.scrollWidth);
				$(this)
					.closest('.ShiftContainer')
					.find('.ShiftContainer_header')
					.width(el.scrollWidth);
			} else {
				$(el).width('auto');
				$(this)
					.closest('.ShiftContainer')
					.find('.ShiftContainer_header')
					.width('auto');
			}
		});
	};

	const hasScrollBar = () => {
		var $ScrollableDiv = $shiftContainerId.find('.ShiftExpandable_container');
		if ($shiftContainerId.find('.ShiftExpandable_container').length > 0) {
			if ($ScrollableDiv.get(0).scrollHeight > $ScrollableDiv.height()) {
				var $lastCell = $shiftContainerId.find('.IsTimer:last-child');
				$lastCell.css('padding-right', '7px');
			}
		}
	};

	const redrawShiftTimeline = () => {
		clearTimeout(shiftTimelineResizeTimer);
		shiftTimelineResizeTimer = setTimeout(function() {
			hasScrollBar();
			handleShiftTable();
		}, 400);
	};

	const checkScroll = () => {
		var hContent = $('.Content').height();
		var hWindow = $(window).height();

		if (hContent > hWindow) redrawShiftTimeline();
	};

	SapphireWidgets.ShiftContainer = {
		create,
		checkScroll,
		redrawShiftTimeline,
	};
})(jQuery, window, document, SapphireWidgets);

$(window)
	.off('resize.GenericGallery')
	.on('resize.GenericGallery', function() {
		$('.ShiftCard_timeLine').css('visibility', 'hidden');
		$('.ShiftExpandable_container .ActionsMenu').css('display', 'none');

		SapphireWidgets.ShiftContainer.redrawShiftTimeline();

		if (osAjaxBackend) osAjaxBackend.BindAfterAjaxRequest(SapphireWidgets.ShiftContainer.redrawShiftTimeline);

		setTimeout(SapphireWidgets.ShiftContainer.checkScroll, 1000);

		setTimeout(function() {
			$('.ShiftCard_timeLine').css('visibility', 'visible');
			$('.ShiftExpandable_container .ActionsMenu').css('display', 'block');
		}, 1500);
	});

$(window).load(function() {
	if (!!$('.ShiftContainer').length) {
		$('.ShiftCard_timeLine').css('visibility', 'hidden');
		$('.ShiftExpandable_container .ActionsMenu').css('display', 'none');

		setTimeout(function() {
			SapphireWidgets.ShiftContainer.redrawShiftTimeline();
		}, 400);

		setTimeout(SapphireWidgets.ShiftContainer.checkScroll, 500);

		setTimeout(function() {
			$('.ShiftCard_timeLine').css('visibility', 'visible');
			$('.ShiftExpandable_container .ActionsMenu').css('display', 'block');
		}, 600);

		$('.navigation-control-item')
			.off('click')
			.on('click', function() {
				$('.ShiftCard_timeLine').css('visibility', 'hidden');
				$('.ShiftExpandable_container .ActionsMenu').css('display', 'none');
			});

		//Verify the scroll if tooltip opened
		$('.ShiftExpandable_container').on('scroll', function() {
			if ($('.tooltipster-base').is(':visible')) {
				$('.tooltipster-base').css('visibility', 'hidden');
			}
		});

		osAjaxBackend.BindAfterAjaxRequest(function() {
			setTimeout(function() {
				SapphireWidgets.ShiftContainer.redrawShiftTimeline();
			}, 400);

			setTimeout(SapphireWidgets.ShiftContainer.checkScroll, 500);

			setTimeout(function() {
				$('.ShiftCard_timeLine').css('visibility', 'visible');
				$('.ShiftExpandable_container .ActionsMenu').css('display', 'block');
			}, 600);

			// SapphireWidgets.ShiftContainer.redrawShiftTimeline;
		});
	}
});


/***/ }),

/***/ "./src/components/05-components/v3-pat/shift-table/shiftTable.js":
/*!***********************************************************************!*\
  !*** ./src/components/05-components/v3-pat/shift-table/shiftTable.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* Component ShiftTable */
SapphireWidgets.ShiftTable = widgetId => {
	$(document).ready(() => {
		setTimeout(() => {
			const $shiftTable = $(`#${widgetId}`);
			const $headerCellList = $shiftTable.find('.ShiftTable__HeaderLabels .ShiftTableCell');
			const $hourLine = $shiftTable.find('.HourLine');

			const columnLine = $hourLine.data('column');
			const minutesLine = $hourLine.data('minutes');

			const cellWidth = $headerCellList.eq(0).width();
			const minutesPosition = (cellWidth / 60) * minutesLine;

			// Handle current hour line horizontal positioning
			const cellPosition = [];

			$headerCellList.each(function(index, el) {
				cellPosition.push($(this).position().left);
			});

			$hourLine.css('left', cellPosition[columnLine - 1] + minutesPosition);
			$hourLine.css('display', 'flex');
		}, 500);
	});
};


/***/ }),

/***/ "./src/components/05-components/v3-pat/shift-table/shiftTableCard.js":
/*!***************************************************************************!*\
  !*** ./src/components/05-components/v3-pat/shift-table/shiftTableCard.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* Component ShiftTableCard */
SapphireWidgets.ShiftTableCard = widgetId => {
	const $component = $(`#${widgetId}`);
	const $actions = $component.find('.MoreActions');
	const hasActions = $actions.length > 0;

	if (hasActions) {
		$actions.on('click', e => {
			e.stopPropagation();

			$('.ShiftTableCard').removeClass('ShiftTableCard--selected');
			$component.addClass('ShiftTableCard--selected');

			window.addEventListener('click', onClickOutside);
		});

		const onClickOutside = e => {
			const $target = $(e.target);

			if (!e.target.className.includes($component) && !$target.parents($component).is($component)) {
				$component.removeClass('ShiftTableCard--selected');

				window.removeEventListener('click', onClickOutside);
			}
		};
	}
};


/***/ }),

/***/ "./src/components/05-components/v3-pat/shift-table/shiftTableCardProgress.js":
/*!***********************************************************************************!*\
  !*** ./src/components/05-components/v3-pat/shift-table/shiftTableCardProgress.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

SapphireWidgets.ShiftTableCardProgress = config => {
	const DEFAULT_PADDING = 8;
	const DEFAULT_CARD_HEIGHT = 56;

	const setTableCardProgress = () => {
		const cardProgresID = config.widgetId;
		const startColumn = config.startColumn;
		const endColumn = config.endColumn;

		const $cardProgress = $('#' + cardProgresID);
		const $shiftTable = $cardProgress.closest('.ShiftTable');
		const $tableCellList = $shiftTable.find('.ShiftTable__Content .ShiftTableCell');
		const $tableRowContent = $cardProgress.closest('.ShiftTableRow__Content');
		const $tableCard = $tableRowContent.find('.ShiftTableCard');
		const $cardProgressList = $tableRowContent.find('.ShiftTableCardProgress');
		const $progressBarList = $cardProgress.find('.ProgressBarWrap');
		const $actions = $cardProgress.find('.MoreActions');

		const cardsTotal = $tableCard.length;
		const timeSlotWidth = $tableCellList[1].getBoundingClientRect().width;
		const colFill = parseInt(endColumn) - parseInt(startColumn) + 1;
		const minuteValueWidth = timeSlotWidth / 60;
		const hasActions = $actions.length > 0;

		let totalLeft = 0;

		for (let i = 1; i < parseInt(startColumn); i++) {
			totalLeft += $tableCellList[i].getBoundingClientRect().width;
		}

		let roundWidth = Math.round((timeSlotWidth + Number.EPSILON) * 100) / 100;
		const paddingOffset = DEFAULT_PADDING * 2;
		const newWidth = colFill * roundWidth - paddingOffset;
		const direction = $('.Page').hasClass('AR') || $('.Page').hasClass('FA') ? 'right' : 'left';

		$cardProgress.css('width', `${newWidth}px`);
		$cardProgress.css('max-width', 'unset');
		$cardProgress.css(direction, `${(totalLeft += DEFAULT_PADDING)}px`);

		if (cardsTotal > 0) {
			let count = 0;

			$tableCard.each(function() {
				const $this = $(this);
				const isOverlaped = checkForOverlap($cardProgress[0], $this[0]);

				if (isOverlaped === true && count < $cardProgressList.length) {
					$cardProgress.css('top', $this[0].offsetTop + $cardProgress.height());
				}

				count = count++;
			});

			$cardProgressList.each(function() {
				const $this = $(this);

				const helper = helperObj($this, $cardProgress, $cardProgressList);

				if (helper.isOverlaped) {
					$cardProgress.css('top', $this[0].offsetTop + 130);
				} else {
					$cardProgress.css('top', $tableRowContent.height() - DEFAULT_PADDING);
				}
			});

			const offset = 4 + DEFAULT_CARD_HEIGHT + DEFAULT_PADDING * 2;

			$tableRowContent.height($cardProgressList.last().position().top + offset);
		} else {
			$cardProgressList.each(function() {
				const $this = $(this);

				const helper = helperObj($this, $cardProgress, $cardProgressList);

				if (helper.isOverlaped) {
					const offset = DEFAULT_CARD_HEIGHT + DEFAULT_PADDING * 2;

					$cardProgress.css('top', $cardProgress[0].offsetTop + offset + 'px');
					helper.$shiftCard.height(helper.$shiftCard.height() + $this[0].offsetHeight);
				}
			});
		}

		setTimeout(() => {
			if (timeSlotWidth !== $tableCellList[1].getBoundingClientRect().width) {
				setTableCardProgress(config);
			}
		}, 500);

		if (hasActions) {
			$actions.on('click', e => {
				e.stopPropagation();

				$cardProgress.addClass('ShiftTableCardProgress--selected');

				window.addEventListener('click', onClickOutside);
			});

			const onClickOutside = e => {
				const $target = $(e.target);

				if (!e.target.className.includes($cardProgress) && !$target.parents($cardProgress).is($cardProgress)) {
					$cardProgress.removeClass('ShiftTableCardProgress--selected');

					window.removeEventListener('click', onClickOutside);
				}
			};
		}

		/*$progressBarList.each(function(index) {
			const beginslot = $(this).data('beginslot');
			const beginminute = $(this).data('beginminute');
			const endslot = $(this).data('endslot');
			const endminute = $(this).data('endminute');
			const actionsWidth = 56;

			const progressBarMinutes = (endslot - beginslot) * 60 + endminute - beginminute;
			const progressendWithPer = progressBarMinutes * minuteValueWidth;

			const $progressTotal = $(this).find('.ProgressBar__animation');

			//$(this).css('left', ((beginslot - 1) * 60 + beginminute) * minuteValueWidth + 'px');
			$progressTotal.css('width', progressendWithPer - actionsWidth + 'px');
		});*/
	};

	const checkForOverlap = (el1, el2) => {
		const bounds1 = el1.getBoundingClientRect();
		const bounds2 = el2.getBoundingClientRect();

		const firstIstLeftmost = bounds1.left <= bounds2.left;
		const leftest = firstIstLeftmost ? bounds1 : bounds2;
		const rightest = firstIstLeftmost ? bounds2 : bounds1;

		// Replace > to to >= if border overlap should count
		if (leftest.right > rightest.left) {
			const firstIsTopmost = bounds1.top <= bounds2.top;
			const topest = firstIsTopmost ? bounds1 : bounds2;
			const bottomest = firstIsTopmost ? bounds2 : bounds1;

			// Replace > to >= if border should count
			return topest.bottom > bottomest.top;
		} else return false;
	};

	const helperObj = ($this, $cardProgress, $cardProgressList) => {
		const $shiftCard = $this.closest('.ShiftTableRow__Content');
		let isOverlaped = checkForOverlap($cardProgress[0], $this[0]);
		const createdId = $cardProgress.attr('id');
		const loopedId = $this.attr('id');
		const $firstSlotCreated = $cardProgressList[0];

		isOverlaped = isOverlaped === true && createdId != loopedId && createdId != $firstSlotCreated.id;

		return { $shiftCard, createdId, loopedId, $firstSlotCreated, isOverlaped };
	};

	$(document).ready(function() {
		setTableCardProgress(config);
	});

	$(window).resize(function() {
		if (window[config.widgetId]) {
			clearTimeout(window[config.widgetId].resizedFinished);
			window[config.widgetId].resizedFinished = setTimeout(function() {
				setTableCardProgress(config);
			}, 250);
		}
	});
};


/***/ }),

/***/ "./src/components/05-components/v3-pat/shift-table/shiftTableHover.js":
/*!****************************************************************************!*\
  !*** ./src/components/05-components/v3-pat/shift-table/shiftTableHover.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* Component ShiftTableCardHover */
SapphireWidgets.ShiftTableCardHover = widgetId => {
	$(document).ready(function() {
		const $card = $(`#${widgetId}`);
		const $cardContent = $card.find('.ShiftTableCardHover__Content');

		$cardContent.on('click', e => {
			e.stopPropagation();

			$card.addClass('ShiftTableCardHover--selected');

			window.addEventListener('click', onClickOutside);
		});

		const onClickOutside = e => {
			const $target = $(e.target);

			if (!e.target.className.includes($card) && !$target.parents($card).is($card)) {
				$card.removeClass('ShiftTableCardHover--selected');

				window.removeEventListener('click', onClickOutside);
			}
		};
	});
};


/***/ }),

/***/ "./src/components/05-components/v3-pat/side-menu/scripts.js":
/*!******************************************************************!*\
  !*** ./src/components/05-components/v3-pat/side-menu/scripts.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* Component SideMenuStructure */
(function($, window, SapphireWidgets) {
	class SideMenu {
		constructor(config) {
			this.options = {
				...config,
			};

			this.onComponentInit();
		}

		setMainMenuWidth() {
			$(document).ready(() => {
				const $sideBarIframe = $('.LayoutBase-iframesidebar.notExpandable');

				if ($sideBarIframe.length) {
					const $mainMenu = $('.LayoutBase-MainMenu');
					$mainMenu.css({
						width: 'calc(100% - 262px)',
					});
				}
			});
		}

		openCloseMenu(toOpen) {
			if (toOpen) {
				this.$component.addClass('SideMenu--open');

				$('.LayoutBase-iframesidebar').css({
					zIndex: 0,
				});
			} else {
				this.$component.removeClass('SideMenu--open');

				$('.LayoutBase-iframesidebar').css({
					zIndex: 70,
				});
			}
		}

		windowClick($component) {
			$(window)
				.off('click.SideMenuStructure')
				.on('click.SideMenuStructure', event => {
					const isMenuItem = event.target.offsetParent && $(event.target.offsetParent).hasClass('MenuItem');

					if (!isMenuItem) {
						$component.find('.SideMenu__MenuItems .active').removeClass('active');
						$component.find('.SideMenu__MenuItems .show').removeClass('show');

						$(window).off('click.SideMenuStructure');
					}
				});
		}

		onComponentInit() {
			this.setMainMenuWidth();

			this.$component = $(`#${this.options.widgetId}`);
			this.$trigger = this.$component.find('.SideMenu__Trigger');
			this.$shield = this.$component.find('.SideMenu__Shield');
			this.$closeButton = this.$component.find('.SideMenu__MenuClose');
			this.$tabItem = this.$component.find('.SideMenu__TabItems .MenuItem');
			this.$menuItem = this.$component.find('.SideMenu__MenuItems .MenuItem__ItemTitle');
			this.$subItem = this.$component.find('.SideMenu__MenuItems .MenuItem_subItems');
			this.$department = this.$component.find('.SideMenu__Tabs .DepartmentName');

			//this.$trigger.hide();
			this.$department.hide();

			this.$iframeContainer = this.$component.find('.iframeContainer');
			this.$iframeContainer.append('<div class="lds-ring OI"><div></div><div></div><div></div><div></div></div>');
			this.$iframeContainer.find('iframe').load(() => {
				this.$iframeContainer.find('.lds-ring').fadeOut();

				if (!this.$component.hasClass('SideMenu--tabsTheme')) {
					//this.$trigger.show();
					this.$department.show();
				}
			});

			this.$trigger.on('click', () => this.openCloseMenu(true));
			this.$shield.on('click', () => this.openCloseMenu(false));
			this.$closeButton.on('click', () => this.openCloseMenu(false));

			this.$tabItem.on('click', event => {
				const $target = $(event.currentTarget);
				const $link = $target.find('.MenuItem_label a');

				if ($link.length) $link.get(0).click();
			});

			this.$menuItem.on('click', event => {
				const isIcon = event.target.className === 'icon icon-changedown';
				if (event.target !== event.currentTarget && !isIcon) return;

				const $target = $(event.currentTarget).parent();
				const $subItems = $target.find('.MenuItem_subItems');
				const $link = $target.find('.MenuItem_label a');

				if ($link.length) $link.get(0).click();

				if ($target.hasClass('active')) {
					$target.removeClass('active');
					$subItems.removeClass('show');
				} else {
					this.$component
						.find('.SideMenu__MenuItems .active')
						.not($target)
						.removeClass('active');

					this.$component
						.find('.SideMenu__MenuItems .show')
						.not($target)
						.removeClass('show');

					$target.toggleClass('active');
					$subItems.toggleClass('show');

					if (this.$component.hasClass('SideMenu--tabsTheme')) {
						this.windowClick(this.$component);
					}
				}
			});

			this.$subItem.on('click', event => event.stopPropagation());

			this.$component
				.find('.SideMenu__TabItems > div:empty')
				.parent()
				.hide();
		}
	}

	const resizeTabs = ($component, $menuTabs, isRecursive) => {
		const $menuTrigger = $component.find('.SideMenu__Trigger');
		const headerWidth = $component.find('.SideMenu__Header').outerWidth();
		const $menuItems = $menuTabs.find('.SideMenu__MenuItems');
		const tabsWidth = $menuItems.length ? $menuItems.outerWidth() : $menuTabs.outerWidth();

		const fixedValue = $(window.parent).width() < 1024 ? 180 : 196;
		let hasItemToRemove = true;

		if (tabsWidth > 0 && tabsWidth + fixedValue > headerWidth && hasItemToRemove) {
			const $moreOptions = $component.find('.SideMenu__Content');
			const $lastItem = $menuTabs
				.find('.SideMenu__MenuItems .MenuItem')
				.last()
				.detach();

			if (!$moreOptions.find('.SideMenu__MenuItems').length) {
				$('<div class="SideMenu__MenuItems"></div>').appendTo($moreOptions);
			}

			const $menuItems = $moreOptions.find('.SideMenu__MenuItems');
			$lastItem.prependTo($menuItems);

			$menuTrigger.css('visibility', 'visible');

			hasItemToRemove = !!$lastItem.length;

			resizeTabs($component, $menuTabs, !!$lastItem.length);
		} else if (!isRecursive) {
			const $menuItems = $menuTabs.find('.SideMenu__MenuItems');
			let $firstItem = $component.find('.SideMenu__Content .SideMenu__MenuItems .MenuItem').first();

			const newLinkWidth = 140 * 1.16 + 16; // Font-size + padding between items (gap)
			const newItemsWidth = newLinkWidth + $menuItems.outerWidth();

			if (newItemsWidth + fixedValue < headerWidth) {
				$firstItem = $firstItem.detach();
				$firstItem.appendTo($menuTabs.find('.SideMenu__MenuItems'));

				if ($component.find('.SideMenu__Content .SideMenu__MenuItems .MenuItem').length) {
					resizeTabs($component, $menuTabs);
				} else {
					$menuTrigger.css('visibility', 'hidden');
				}
			}
		}
	};

	const setTabsTheme = () => {
		$(top.document).ready(function() {
			$('.SideMenu', window.parent.document).addClass('SideMenu--tabsTheme');

			const $component = $('.SideMenu', window.parent.document);
			const $menuTabs = $component.find('.SideMenu__Tabs');

			$menuTabs.find('> div:empty').hide();

			const $items = $component.find('.SideMenu__MenuItems').detach();
			$items.appendTo($menuTabs);

			$(document).ready(function() {
				resizeTabs($component, $menuTabs, true);
			});

			$(window.parent).resize(function() {
				clearTimeout(window.resizedFinished);
				window.resizedFinished = setTimeout(function() {
					resizeTabs($component, $menuTabs);
				}, 250);
			});
		});
	};

	const create = config => (window[config.widgetId] = new SideMenu(config));

	SapphireWidgets.SideMenu = { create, setTabsTheme };
})(jQuery, window, SapphireWidgets);


/***/ }),

/***/ "./src/components/05-components/v3-pat/sidebar/sidebar-structure.js":
/*!**************************************************************************!*\
  !*** ./src/components/05-components/v3-pat/sidebar/sidebar-structure.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* Component ISidebar */
(function($, window, document, SapphireWidgets) {
	var create = function(config) {
		window[config.widgetId] = new Sidebar(config);
		SapphireWidgets.Sidebar.widgetId = config.widgetId;
	};

	var close = function() {
		window[SapphireWidgets.Sidebar.widgetId].close();
	};

	var Sidebar = function(config) {
		var _this = this;
		this.isExpandable = config.isExpandable;
		this.$widget = $('#' + config.widgetId);
		this.$sidebar = this.$widget.find('.ISidebar');
		this.$sidebarMenu = this.$widget.find('.ISidebar-menu');
		this.$sidebarMenuItem = this.$widget.find('.SidebarMenuItem');
		this.$sidebarShield = this.$widget.find('.ISidebar-shield');
		this.$sidebarContent = this.$widget.find('.ISidebar-content');
		this.$sidebarContent.find('> div').each(function() {
			if ($(this).hasClass('PH') && $(this).text() === '') {
				$(this).remove();
			}
		});
		this.attachEvents();
		if (!this.isExpandable) {
			this.openMenuItem(0);
		}
		$(function() {
			if (!config.isExpandable) {
				$(`.${config.selectedTab}`).click();
			}

			window.parent.$('.LayoutBase-iframesidebar .lds-ring').fadeOut();

			if (!this.isExpandable) {
				$('input[type="text"]:visible')
					.eq(0)
					.focus();
			}
		});

		$(window).unload(function() {
			window.parent.$('.LayoutBase-iframesidebar .lds-ring').fadeOut();
		});
	};

	Sidebar.prototype.attachEvents = function() {
		var _this = this;
		this.$sidebarMenu.on('click', function(evt) {
			evt.stopPropagation();
			if (!_this.$sidebar.hasClass('open')) {
				_this.openMenuItem(0);
			}
		});
		this.$sidebarMenuItem.on('click', function() {
			var selectedPosition = $(this).index();
			_this.openMenuItem(selectedPosition);
		});
		this.$sidebarShield.on('click', function() {
			_this.close();
		});
		this.$sidebar.on('click', '.SearchSideBarFields .ButtonGroup_button:first-child', function() {
			_this.$sidebar
				.find('.FieldsSlider')
				.addClass('Tab1')
				.removeClass('Tab2');
			_this.setFieldFocus(_this.$sidebarContent.find('.TextInput:visible').eq(0));
		});
		this.$sidebar.on('click', '.SearchSideBarFields .ButtonGroup_button:last-child', function() {
			_this.$sidebar
				.find('.FieldsSlider')
				.addClass('Tab2')
				.removeClass('Tab1');
			_this.setFieldFocus(_this.$sidebarContent.find('.TextInput:visible').eq(0));
		});
	};

	Sidebar.prototype.openMenuItem = function(selectedPosition) {
		var _this = this;
		this.$sidebar
			.find('.SidebarMenuItem')
			.removeClass('active')
			.eq(selectedPosition)
			.addClass('active');
		this.$sidebar
			.find('.ISidebar-content > .ISidebar-content-panel')
			.hide()
			.eq(selectedPosition)
			.show();
		this.$sidebar.addClass('open');
		if (window.parent.length && this.isExpandable) {
			window.parent.SapphireWidgets.LayoutBase.openSidebarIframe(0);
		}
		if (this.$sidebarContent.find('.TextInput:visible').length > 0) {
			this.setFieldFocus(this.$sidebarContent.find('.TextInput:visible').eq(0));
		}
		if (window.parent.$('.select2-container--open').length) {
			window.parent.$('.select2-hidden-accessible').select2('close');
		}
	};

	Sidebar.prototype.setFieldFocus = function($input) {
		window.setTimeout(function() {
			$input.click().select();
		}, 250);
	};

	Sidebar.prototype.close = function() {
		var _this = this;
		if (window.parent.length) {
			window.parent.SapphireWidgets.LayoutBase.closeSidebarIframe(0);
		}
		if (this.isExpandable) {
			this.$sidebar.removeClass('open');
			this.$sidebar.find('.SidebarMenuItem').removeClass('active');
			this.$sidebar.find('.ISidebar-content > .ISidebar-content-panel').hide();
		}
	};

	SapphireWidgets.Sidebar = {
		create: create,
		close: close,
	};
})(jQuery, window, document, SapphireWidgets);


/***/ }),

/***/ "./src/components/05-components/v3-pat/small-box-selectable/scripts.js":
/*!*****************************************************************************!*\
  !*** ./src/components/05-components/v3-pat/small-box-selectable/scripts.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

SapphireWidgets.SmallBoxSelectable = function(config) {
	const $component = $(`#${config.widgetId}`);

	if (config.selectOnClick) {
		$component.click(() => {
			const $list = $('.SmallBoxList .SmallBoxSelectable').not($component);

			$list.removeClass('SmallBoxSelectable--selected');
			$component.toggleClass('SmallBoxSelectable--selected');
		});
	}
};


/***/ }),

/***/ "./src/components/05-components/v3-pat/spinner-horizontal/scripts.js":
/*!***************************************************************************!*\
  !*** ./src/components/05-components/v3-pat/spinner-horizontal/scripts.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* Component SpinnerHorizontal */
SapphireWidgets.SpinnerHorizontal = {
	create: config => {
		const $input = $(`#${config.widgetId} input`);
		const $plus = $(`#${config.widgetId} a.Plus`);
		const $minus = $(`#${config.widgetId} a.Minus`);

		let val = $input.val();

		if (val <= +config.minValue) {
			$minus.attr('disabled', 'disabled');
		} else if (val >= +config.maxValue) {
			$plus.attr('disabled', 'disabled');
		}

		$input.on('change', function() {
			val = Math.abs(parseInt(this.value, 10) || +config.minValue);
			this.value = val > +config.maxValue ? +config.maxValue : val < +config.minValue ? +config.minValue : val;

			if (val <= +config.minValue) $minus.attr('disabled', 'disabled');
			else $minus.removeAttr('disabled');

			if (val >= +config.maxValue) $plus.attr('disabled', 'disabled');
			else $plus.removeAttr('disabled');
		});
	},
	increment: function(elementId, minValue, maxValue, triggerOnChange) {
		var _element = $(elementId)
			.find('input[type="number"]')
			.first();
		if (_element.val() == undefined || _element.val() == '' || isNaN(parseFloat(_element.val()))) {
			_element.val(minValue);
			if (triggerOnChange) {
				_element.trigger('change');
			}
		} else {
			if (parseFloat(_element.val()) < maxValue) {
				_element.val(parseFloat(_element.val()) + 1);
				if (triggerOnChange) {
					_element.trigger('change');
				}
				$(elementId)
					.find('a.Minus')
					.removeAttr('disabled');
			}
			if (parseFloat(_element.val()) >= maxValue) {
				$(elementId)
					.find('a.Plus')
					.attr('disabled', 'disabled');
			}
		}
	},
	decrement: function(elementId, minValue, triggerOnChange) {
		var _element = $(elementId)
			.find('input[type="number"]')
			.first();
		if (_element.val() == undefined || _element.val() == '' || isNaN(parseFloat(_element.val()))) {
			_element.val(minValue);
			if (triggerOnChange) {
				_element.trigger('change');
			}
		} else {
			if (parseFloat(_element.val()) > minValue) {
				_element.val(parseFloat(_element.val()) - 1);
				if (triggerOnChange) {
					_element.trigger('change');
				}
				$(elementId)
					.find('a.Plus')
					.removeAttr('disabled');
			}
			if (parseFloat(_element.val()) <= minValue) {
				$(elementId)
					.find('a.Minus')
					.attr('disabled', 'disabled');
			}
		}
	},
};


/***/ }),

/***/ "./src/components/05-components/v3-pat/spinner-vertical/scripts.js":
/*!*************************************************************************!*\
  !*** ./src/components/05-components/v3-pat/spinner-vertical/scripts.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* Component SpinnerVertical */
(function($, window, document, SapphireWidgets) {
	const create = function(config) {
		$(document).ready(function() {
			const $minusVertical = $(`#${config.widgetId}`).find('.MinusVertical');
			const $inputSpinner = $(`#${config.widgetId} .SpinnerInputVertical input`);

			$inputSpinner.on('blur keyup input', function(event) {
				const currentInputValue = $inputSpinner.val();

				if (config.numberList && event.type === 'blur') {
					const inputValueInt = parseInt(currentInputValue);
					const arrayToSpin = config.numberList;
					const $errorMessage = $(`#${config.widgetId} .SpinnerErrorMessage`);

					$errorMessage.css('display', arrayToSpin.indexOf(inputValueInt) === -1 ? 'block' : 'none');
				}

				if (currentInputValue < config.minValue) $minusVertical.addClass('DisabledSpin');
				else $minusVertical.removeClass('DisabledSpin');
			});

			if ($inputSpinner.val() <= config.minValue) {
				$minusVertical.addClass('DisabledSpin');
			}

			if (config.numberList && $inputSpinner.val() === '') {
				let currentNumber = 0;
				const arrayToSpin = config.numberList.split(',');

				$inputSpinner.val(arrayToSpin[currentNumber]);
				$minusVertical.addClass('DisabledSpin');
			}

			if (config.isCursorOnFocus) {
				$('body').on('focus', `#${config.inputID} input`, function() {
					var that = this;

					setTimeout(function() {
						that.focus();
						var val = that.value;
						that.value = '';
						that.value = val;
					}, 1);
				});
			}

			if (config.isInputEmpty) {
				$inputSpinner.attr('value', '');
				$minusVertical.addClass('DisabledSpin');
			}
		});
	};

	const increment = (elementId, minValue, maxValue, triggerOnChange, triggerOnInput, listTospin = []) => {
		const $spinner = $(elementId);
		let $input = $spinner.find('input[type="text"], input[type="number"]').first();

		var forceInteger = $(elementId).data('forceinteger') === 'True' ? true : false;
		var currentValue = parseFloat($input.val());
		var incrementUnit = 1;
		var isDecimals = currentValue % 1 != 0;
		var arraytospin = listTospin;

		const $minusVertical = $(elementId).find('.MinusVertical');
		const $plusVertical = $(elementId).find('.PlusVertical');

		$minusVertical.removeClass('DisabledSpin');

		if (arraytospin.length) {
			var currentPosition = arraytospin.indexOf(parseInt($input.val()));
			var maximumToSpin = arraytospin.lastIndexOf(arraytospin.slice(-1)[0]);

			$plusVertical.removeClass('DisabledSpin');

			if (maximumToSpin - 1 === currentPosition) {
				currentPosition = currentPosition + 1;
				$input.val(arraytospin[currentPosition]);

				if (triggerOnChange) $input.trigger('change');
				if (triggerOnInput) $input.trigger('input');
			} else if (maximumToSpin === currentPosition) {
				currentPosition = currentPosition % maximumToSpin;
				$input.val(arraytospin[currentPosition]);

				triggerEvents($input, triggerOnChange, triggerOnInput);
			} else {
				currentPosition = (currentPosition + 1) % maximumToSpin;
				$input.val(arraytospin[currentPosition]);

				triggerEvents($input, triggerOnChange, triggerOnInput);
			}

			if (currentPosition === maximumToSpin) $plusVertical.addClass('DisabledSpin');
			if (currentPosition === 0) $minusVertical.addClass('DisabledSpin');

			$spinner.find('.SpinnerErrorMessage').css('display', 'none');
		} else {
			if (parseFloat(currentValue) < minValue) {
				$minusVertical.addClass('DisabledSpin');
			} else {
				$minusVertical.removeClass('DisabledSpin');
			}

			if (!forceInteger && isDecimals) incrementUnit = parseFloat(0.1);

			if (currentValue === undefined || currentValue === '' || isNaN(parseFloat(currentValue))) {
				$input.val(minValue);

				triggerEvents($input, triggerOnChange, triggerOnInput);
			} else {
				if (parseFloat(currentValue) < maxValue) {
					if (currentValue === 0 && !forceInteger) incrementUnit = parseFloat(0.1);

					$input.val(parseFloat((currentValue + incrementUnit).toFixed(1)));

					triggerEvents($input, triggerOnChange, triggerOnInput);

					$minusVertical.removeAttr('disabled');
				} else {
					$plusVertical.attr('disabled', 'disabled');
				}
			}

			checkDisabledStatus(elementId, parseFloat($input.val()), minValue, maxValue);
		}
	};

	const decrement = (elementId, minValue, maxValue, triggerOnChange, triggerOnInput, listTospin = []) => {
		const $spinner = $(elementId);
		const $input = $spinner.find('input[type="text"], input[type="number"]').first();

		let forceInteger = $(elementId).data('forceinteger') === 'True' ? true : false;
		let currentValue = parseFloat($input.val());
		let incrementUnit = 1;
		let isDecimals = currentValue % 1 != 0;
		let arraytospin = listTospin;

		const $minusVertical = $(elementId).find('.MinusVertical');
		const $plusVertical = $(elementId).find('.PlusVertical');

		if (arraytospin.length) {
			let currentPosition = arraytospin.indexOf(parseInt($input.val()));
			let maximumToSpin = arraytospin.lastIndexOf(arraytospin.slice(-1)[0]);

			if (currentPosition == 0) {
				$input.val(arraytospin[maximumToSpin]);

				if (triggerOnChange) $input.trigger('change');
				if (triggerOnInput) $input.trigger('input');
			} else {
				currentPosition = (currentPosition - 1) % maximumToSpin;
				$input.val(arraytospin[currentPosition]);

				triggerEvents($input, triggerOnChange, triggerOnInput);
			}

			$spinner.find('.SpinnerErrorMessage').css('display', 'none');
		} else {
			if (!forceInteger && isDecimals) incrementUnit = parseFloat(0.1);

			if (currentValue === undefined || currentValue === '' || isNaN(parseFloat(currentValue))) {
				$input.val(minValue);

				triggerEvents($input, triggerOnChange, triggerOnInput);
			} else {
				if (parseFloat(currentValue) > minValue) {
					if (currentValue === 1 && !forceInteger) incrementUnit = parseFloat(0.1);

					$input.val(parseFloat((currentValue - incrementUnit).toFixed(1)));

					triggerEvents($input, triggerOnChange, triggerOnInput);

					$plusVertical.removeAttr('disabled');
				} else {
					$minusVertical.attr('disabled', 'disabled');
				}
			}

			checkDisabledStatus(elementId, parseFloat($input.val()), minValue, maxValue);
		}
	};

	const triggerEvents = (input, triggerOnChange, triggerOnInput) => {
		if (triggerOnChange) input.trigger('change');
		if (triggerOnInput) input.trigger('input');
	};

	const checkDisabledStatus = (elementId, valueToCheck, minValue, maxValue) => {
		if (valueToCheck <= minValue) {
			$(elementId)
				.find('a.MinusVertical')
				.attr('disabled', 'disabled');
		} else {
			$(elementId)
				.find('a.MinusVertical')
				.removeAttr('disabled');
		}
		if (valueToCheck >= maxValue) {
			$(elementId)
				.find('a.PlusVertical')
				.attr('disabled', 'disabled');
		} else {
			$(elementId)
				.find('a.PlusVertical')
				.removeAttr('disabled');
		}
	};

	SapphireWidgets.SpinnerVertical = {
		create,
		increment,
		decrement,
	};
})(jQuery, window, document, SapphireWidgets);


/***/ }),

/***/ "./src/components/05-components/v3-pat/split-button/scripts.js":
/*!*********************************************************************!*\
  !*** ./src/components/05-components/v3-pat/split-button/scripts.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* Component SplitButton */
(function($, window, document, SapphireWidgets) {
	var create = function(config) {
		window[config.widgetId] = new SplitButton(config);
	};

	var SplitButton = function(config) {
		var _this = this;
		this.config = config;
		this.$widget = $('#' + this.config.widgetId);
		this.$button = this.$widget.find('.SplitButton-button');
		this.$buttonLink = this.$button.find('> a');
		this.$trigger = this.$widget.find('.SplitButton-trigger');
		this.$actions = this.$widget.find('.SplitButton-actions');
		if (!!this.$actions.text()) {
			this.$widget.find('> .SplitButton').addClass('hasTrigger');
			this.buildActionsTrigger();
		}
	};

	SplitButton.prototype.buildActionsTrigger = function() {
		var _this = this;
		var classList = this.$buttonLink[0].classList.value;
		this.$trigger.addClass(classList);
		$(function() {
			// inside a document ready due to sapphire popup binded events
			if (!_this.$trigger.hasClass('tooltipstered')) {
				_this.$trigger.tooltipster({
					arrow: true,
					content: $('<section/>').append(_this.$actions.clone(true)),
					trigger: _this.config.triggerEvent,
					position: _this.config.position,
					maxWidth: _this.config.maxWidth,
					theme: 'tooltipster-splitbutton Padding-' + _this.config.padding,
				});
				_this.$actions.remove();
			}
		});
	};

	SapphireWidgets.SplitButton = {
		create: create,
	};
})(jQuery, window, document, SapphireWidgets);


/***/ }),

/***/ "./src/components/05-components/v3-pat/ssd-component-block/scripts.js":
/*!****************************************************************************!*\
  !*** ./src/components/05-components/v3-pat/ssd-component-block/scripts.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var milisecondpassed = 0;
var stoptimer = true;
var myTimout  = null;

function onKeydownFunction() {
    milisecondpassed = 0;
  
    stoptimer=true;
    clearInterval(myTimout);
    myTimout = null;
  };
  
  function onKeyUpFunction(elementToClick) {
  stoptimer = false;
  
  if(milisecondpassed == 0 && myTimout==null){
      myTimout = setInterval(
        function() {
          milisecondpassed+=100;
         
          if (milisecondpassed >= 400 && stoptimer==false) {
            milisecondpassed = 0;
            stoptimer=true;
            clearInterval(myTimout);
            myTimout = null;
            elementToClick.click();
          
          }
          else{
            if(stoptimer==true){
            clearInterval(myTimout);
            myTimout = null;
            }
          }
        }, 100);
        if(stoptimer==true){
            clearInterval(myTimout);
            myTimout = null;
        }
    }
    else{
        if(stoptimer==true){
            clearInterval(myTimout);
            myTimout = null;
        }   
    }
};

if(typeof(ssdComponent) === 'undefined') {

    ssdComponent = {
        length: 0,
        numberOfActive: 0,
        isRTL: false,
        id: '',
        toDestroy: false,
        onBlurDestroy: function() {
            if (ssdComponent.id != '') {
                var _ssdComponent = $('#' + ssdComponent.id);
                var _wrapper = $('[data-ssd-placeholder=' + ssdComponent.id + ']');
                if (ssdComponent.toDestroy) {
                    _wrapper.find('.SSDListRefreshHandler').find('a.to-destroy').click();
                    _wrapper.remove();
                }
                else {
                     var _wrapper = $('[data-ssd-placeholder=' + ssdComponent.id + ']');
                    _wrapper.find('input').val('');
                    ssdComponent.blur();
                }
            }
        },
        focus: function(ssdComponentWidget) {
            var _ssdComponentWidget = $(ssdComponentWidget).children('div.SSD-Wrapper:not(.Selected)');
            
            if(!_ssdComponentWidget.length)
                return; //If this SSD-Wrapper is already Selected, return.
            
            if(ssdComponent.numberOfActive)
                ssdComponent.blur(); //Blurs the other focused SSD's.
            
            ssdComponent.numberOfActive++;
            if(!_ssdComponentWidget.parent().hasClass('SSDPopup')){
                _ssdComponentWidget.children('.SSD-Component')
                .css({
                    'width': function() {
                        return $(this).outerWidth();
                    },
                    'top': function() {
                        return this.getBoundingClientRect().top + $(document).scrollTop();
                    },
                    'left': function() {
                        if(ssdComponent.isRTL)
                            return 'auto';
                        return this.getBoundingClientRect().left;
                    },
                    'right': function() {
                        if(ssdComponent.isRTL)
                            return $(window).width() - $(this).outerWidth() - this.getBoundingClientRect().left;
                        return 'auto';
                    }
                })
                .children('.SSD-Bar').css({
                    'width': function() {
                        return $(this).outerWidth();
                    }
                })
                .siblings('.SSD-List').attr('current-focus', 0);
            }
            else{
                _ssdComponentWidget.children('.SSD-Component')
                .css({
                    'width': function() {
                        return $(this).outerWidth();
                    }
                })
                .children('.SSD-Bar').css({
                    'width': function() {
                        return $(this).outerWidth();
                    }
                })
                .siblings('.SSD-List').attr('current-focus', 0);
            }
            
            if(!_ssdComponentWidget.parent().hasClass('SSDPopup')){
                _ssdComponentWidget.closest('form').append(_ssdComponentWidget);
            }
            _ssdComponentWidget.addClass('Positioned');
            
            setTimeout(
                function() {
                    _ssdComponentWidget.addClass('Selected');
                }
                , 1
            );
            
        },
        
        
        
        blur: function() {
            if(!ssdComponent.numberOfActive)
                return;
            
            var _wrapper = $('div.SSD-Wrapper.Positioned.Selected');
            
            _wrapper.each(function() {
                var parent = $('#' + $(this).attr('data-ssd-placeholder'));
                parent.append($(this));
            });
            
            _wrapper.removeClass('Positioned')
            .children('.SSD-Component')
                .css({
                    'width': '',
                    'top': '',
                    'left': '',
                    'right': ''
                })
                .removeClass('Searching Fixed KeyboardNav')
            .children('.SSD-Bar').css({
                'width': ''
            });
                
            setTimeout(
                function() {
                    _wrapper.removeClass('Selected')
                    .find('.SSD-Bar').each(function() {
                        ssdComponent.tabsClear(this);
                    });
                }
                , 1
            );
                
            ssdComponent.numberOfActive--;
            $(".SSD_ListRecords span, .SSD_ListLine.ShowMore, .SSD_DeleteOnBlur").remove();
        },
        resize: function() {
            if(!ssdComponent.numberOfActive)
                return; //If there's no SSD active, there's no need to resize it.
            
            var _ssdWrapper = $('div.SSD-Wrapper.Selected').first();
            var _ssdComponentWidget = $('#' + _ssdWrapper.attr('data-ssd-placeholder'))[0];
            var _ssdComponent = _ssdWrapper.children('.SSD-Component');
            
            if (typeof _ssdComponentWidget.getBoundingClientRect !== "undefined") {
                _ssdComponent.css({
                    'width': function() {
                        return $(_ssdComponentWidget).width();
                    }/*,
                    'top': function() {
                        return _ssdComponentWidget.getBoundingClientRect().top + $(document).scrollTop();
                    },
                    'left': function() {
                        if(ssdComponent.isRTL)
                            return 'auto';
                        return _ssdComponentWidget.getBoundingClientRect().left;
                    },
                    'right': function() {
                        if(ssdComponent.isRTL)
                            return $(window).width() - $(_ssdComponentWidget).outerWidth() - _ssdComponentWidget.getBoundingClientRect().left;
                        return 'auto';
                    }*/
                }).children('.SSD-Bar').css({
                    'width': function() {
                        return $(this).closest('.SSD-Component').innerWidth();
                    }
                });
            }
        },
        tabSelect: function(ssdComponentWidget, ssdBar, selectedTab, isInputEvent) {
            var _selectedTab = $(selectedTab);

            if(ssdComponent.numberOfActive == 0) {
                ssdComponent.focus(ssdComponentWidget);
            }
            
            if(!_selectedTab.is('.Selected')) {
                ssdComponent.tabsClear(ssdBar);
                _selectedTab.addClass('Selected');
            }
            
            ssdComponent.focusSelectedTab(ssdBar,isInputEvent);
        },
        focusSelectedTab: function(ssdBar,isInputEvent) {
            // Selected tab is the Search input?
            if(ssdBar.children('.SearchInput-Container.Selected').length) {
                var elementToClick = ssdBar.siblings('.SSDListRefreshHandler').find('a:not(.to-destroy)');
                
                if(isInputEvent){
                    onKeyUpFunction(elementToClick);
                }
                else{
                    elementToClick.click();
                }
                ssdBar.find('.InputPlaceholder input[type="text"]:not(:focus)').first().select().focus();
                return;
            }
            
            // Selected tab is the Short list?
            if(ssdBar.children('.ShortListSelector-Container.Selected').length) {
                ssdBar.find('.ShortListSelector-Container > a').focus();
                return;
            }
        },
        /*
         * Method being called by user action js_ssdComponent_focusCurrentRow
         */
        focusCurrentRow: function() {
            var _ssdComponent = $('div.SSD-Wrapper.Selected .SSD-Component').first();
            var _ssdList = _ssdComponent.find('.SSD-List');
            var _currentFocus = _ssdList.attr('current-focus');

            _ssdComponent.addClass('KeyboardNav');
            _ssdList.find('span.SSD_ListRecords > span:nth-child(' + _currentFocus + ')').addClass('focus');
        },
        tabsClear: function(ssdBar) {
            $(ssdBar).children().removeClass('Selected');
        },
        searchIcon: function(event) {
            ssdComponent.tabSelect(event.data.ssdComponentWidget, event.data.ssdBar, $(event.data.ssdBar).children('.SearchInput-Container'),false);
        },
        /*
         * @name inputEvent
         * @description 
         */
        inputEvent: function(event) {
            var _inputContainer = $(event.data.input).closest('.SearchInput-Container');
            
            ssdComponent.tabSelect(event.data.ssdComponentWidget, event.data.ssdBar, _inputContainer,true);
            
            if($(event.data.input).val() == '') {
                _inputContainer.closest('.SSD-Component').removeClass('Searching');
            }
            else {
                _inputContainer.closest('.SSD-Component').addClass('Searching');
            }
        },
        keydownEvent: function(event) {
           onKeydownFunction();          
          
        },
        keyboardHandler: function(event) {
            if(event.key == "Shift" || event.key == "Control")
                return;

            var _ssdComponent = $('div.SSD-Wrapper.Selected .SSD-Component').first();
            var _ssdList = _ssdComponent.find('.SSD-List');

            if(event.key == "Enter" && _ssdList.find('.SSD_ListLine.ShowMore.focus').length)
                return;

            if(event.key == "Tab") {
                _ssdComponent.addClass('KeyboardNav');
                return;
            }
            
            if(event.key == "ArrowUp" || event.key == "ArrowDown") {
                var _currentFocus = _ssdList.attr('current-focus');
                var _selectedElement = $(null);
                
                if(_ssdList.find('.SSD_ListLine.ShowMore.focus').length) {
                    _selectedElement = _ssdList.find('.SSD_ListLine.ShowMore.focus');
                }
                else if(_currentFocus > 0) {
                    _selectedElement = _ssdList.find('span.SSD_ListRecords > span:nth-child(' + _currentFocus + ')');
                }
                
                _ssdComponent.addClass('KeyboardNav')
                
                if(event.key == "ArrowUp") {
                    if(_selectedElement.length) {
                        
                        if(_selectedElement.is('.SSD_ListLine.ShowMore.focus')) {
                            _selectedElement.removeClass('focus');
                            _selectedElement = _ssdList.find('span.SSD_ListRecords > span:last-child');
                        }
                        else {
                            _selectedElement = _selectedElement.removeClass('focus').prev();
                        }

                        _currentFocus--;
                    }
                    else {
                        _currentFocus = _ssdList.find('span.SSD_ListRecords > span').length;

                        if(_ssdList.find('.SSD_ListLine.ShowMore').length) {
                            _selectedElement = _ssdList.find('.SSD_ListLine.ShowMore');
                            _currentFocus++;
                        }
                        else {
                            _selectedElement = _ssdList.find('span.SSD_ListRecords > span:last-child');
                        }
                    }
                }
                
                if(event.key == "ArrowDown") {
                    if(_selectedElement.length) {
                        
                        if(_selectedElement.is('.SSD_ListLine.ShowMore.focus')) {
                            _selectedElement.removeClass('focus');
                            _selectedElement = $(null);
                        }
                        else {
                            _selectedElement = _selectedElement.removeClass('focus').next();
                            
                            if(!_selectedElement.length && _ssdList.find('.SSD_ListLine.ShowMore').length) {
                                _selectedElement = _ssdList.find('.SSD_ListLine.ShowMore');
                            }
                        }
                        
                        _currentFocus++;
                    }
                    else {
                        _selectedElement = _ssdList.find('span.SSD_ListRecords > span:first-child');
                        _currentFocus = 1;
                    }
                }
                
                _selectedElement.addClass('focus');
                
                if(!_selectedElement.length) {
                    ssdComponent.focusSelectedTab(_ssdComponent.find('.SSD-Bar'),false);
                    _currentFocus = 0;
                }
                else if (!_selectedElement.find('.SSD_ListLine.Disabled').length){
                    _selectedElement.find('.ExpandControl > a').focus();
                }
                else {
                    _ssdList.find('a.OtherControlLink').focus();
                }
                
                _ssdList.attr('current-focus', _currentFocus);

                return;
            }
            
            ssdComponent.clearKeyboardNavStatus(_ssdComponent);
        },
        clearKeyboardNavStatus: function(ssdComponent) {
            var _ssdComponent = $(ssdComponent);
            var _ssdList = _ssdComponent.find('.SSD-List');

            if(_ssdList.find('.SSD_ListLine.ShowMore.focus').length)
                return;

            _ssdComponent.removeClass('KeyboardNav');
            _ssdList.attr('current-focus', 0)
                .find('span.SSD_ListRecords > span.focus').removeClass('focus')
                .find('.ExpandControl > a').blur();
        },
        scrollHandler: function() {
            var _ssdComponent = $('div.SSD-Wrapper.Selected .SSD-Component').first();
            if(Math.max(document.documentElement.clientWidth, window.innerWidth || 0) <= 1024){
                if(_ssdComponent[0].getBoundingClientRect().top > $(".toolbar-wrapper.Fixed").outerHeight()) {
                    _ssdComponent.removeClass('Fixed');
                    return;
                }else{
                    $('.SSD-Wrapper.Selected > .SSD-Component.Fixed > .SSD-Bar').css('top', $(".toolbar-wrapper.Fixed").outerHeight() + 'px'); 
                    
                    
                }
            }else{
                /*Not Mobile apply fixed behaviour*/
                if(_ssdComponent[0].getBoundingClientRect().top > ($('.TopPatientHeader').outerHeight(true) + $('.Header').outerHeight(true) + $(".toolbar-wrapper").outerHeight()+ $('.CTTASLevelAssessmentMainContainer').outerHeight(true) )) {
                    _ssdComponent.removeClass('Fixed');
                    return;
                }else{
                    $('.SSD-Wrapper.Selected > .SSD-Component.Fixed > .SSD-Bar').css('top',($('.TopPatientHeader').outerHeight(true) + $('.Header').outerHeight(true) + $(".toolbar-wrapper").outerHeight() + $('.CTTASLevelAssessmentMainContainer').outerHeight(true)) + 'px'); 
                }
            }


            _ssdComponent.addClass('Fixed');
        },
        destroy: function(_inputId) { /* Used to destroy a specific ssd component by receive the input identifier as parameter and determine the wrapper to remove. */
            $('[data-ssd-placeholder=' + ssdComponent.id + ']').remove();
        },
        init: function(ssdComponentWidget,_toDestroy) {
            ssdComponent.length++;
            ssdComponent.numberOfActive = 0;
            ssdComponent.isRTL = $('html').is('.rtl');
            ssdComponent.toDestroy = _toDestroy;
            if (typeof ssdComponentWidget != 'undefined') {
                ssdComponent.id = $(ssdComponentWidget).attr('id');
            }
            var _ssdComponentWidget = $(ssdComponentWidget);
            var _ssdComponent = _ssdComponentWidget.find('.SSD-Component');
            var _ssdBar = _ssdComponent.children('.SSD-Bar').first();
            var _searchIcon = _ssdBar.find('.SearchIcon').first();
            var _input = _ssdBar.find('input[type="text"]').first();
            var _clearControl = _ssdBar.find('.ClearControl').first();
            
            _searchIcon.off('click').on('click', {
                ssdComponentWidget: _ssdComponentWidget,
                ssdBar: _ssdBar
            }, ssdComponent.searchIcon);
            
            _ssdBar.children('div').off('click').on('click', {
                ssdComponentWidget: _ssdComponentWidget,
                ssdBar: _ssdBar
            }, function(event) {
                ssdComponent.tabSelect(event.data.ssdComponentWidget, event.data.ssdBar, this,false);
            });
            
            _clearControl.off('click').on('click', ssdComponent.onBlurDestroy);
            
            _input.off('keyup').on('keyup', {
                ssdComponentWidget: _ssdComponentWidget,
                ssdBar: _ssdBar,
                input: _input
            }, ssdComponent.inputEvent);
            
            _input.off('keydown').on('keydown', {
                ssdComponentWidget: _ssdComponentWidget,
                ssdBar: _ssdBar,
                input: _input
            }, ssdComponent.keydownEvent);
            
            $(_ssdComponent).off('click').on('click', {
                ssdComponent: _ssdComponent
            }, function(event) {
                ssdComponent.clearKeyboardNavStatus(event.data.ssdComponent);
            });
        }
    }
}

$(document).ready(function() {
    $(window).on('resize', function(event) {
        ssdComponent.resize();
    });
    
    $(document).on('click', function(event) {
        if(!$(event.target).is(':visible')) { /* Clicks on hidden elements are dismissed. */
            return;
        }
        
        var e = $(event.target).closest('.SSD-Component');
        
        if(!e.length) { // User clicked outside the SSD-Component?
            ssdComponent.onBlurDestroy();
        }
    });
    
    $(document).on('keydown', function(event) {
        if(ssdComponent.numberOfActive > 0) {
            if(event.keyCode == "27") { // User hit Escape
                ssdComponent.onBlurDestroy();
            }
            if(event.key == "ArrowUp" || event.key == "ArrowDown") {
                event.preventDefault();
            }
        }
    });
    
    $(document).on('keyup', function(event) {
        if(ssdComponent.numberOfActive > 0) { // If there's an SSD component active, go for Keyboard handler
            ssdComponent.keyboardHandler(event);
        }
    });
    
    $(document).on('scroll', function() {
        if(ssdComponent.numberOfActive > 0) { // If there's an SSD component active, go for scroll handler
            ssdComponent.scrollHandler();
        }
    });
});


/***/ }),

/***/ "./src/components/05-components/v3-pat/ssd-list-line/scripts.js":
/*!**********************************************************************!*\
  !*** ./src/components/05-components/v3-pat/ssd-list-line/scripts.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* Component SSDListLine */
SapphireWidgets.SSDListLine = {
	toggle: (lineId, lineHandler = '') => {
		var _line = $(lineId).is('.SSD_ListLine')
			? $(lineId)
			: $(lineId)
					.children('.SSD_ListLine')
					.first();

		if (!_line.length) return;

		var _expandControl = $('.expand-control-custom-width');

		if (_expandControl.length != 0) {
			_expandControl.removeClass('expand-control-custom-width');
			_expandControl.css('width', '');
		}

		if (!_line.is('.Active')) {
			var _lineHeader = _line
				.closest('div.SelectableList, .SelectableList-ListRecords')
				.find('div.SelectableList-Line.Active')
				.not(_line);

			_lineHeader.find('a[hide-action]').click();
			_lineHeader
				.removeClass('Active')
				.children('span')
				.hide(200);
			_line.addClass('Active');

			if ($(lineHandler).length) {
				$(lineHandler).click();
			}
		} else {
			_line.removeClass('Active');
		}
	},
};


/***/ }),

/***/ "./src/components/05-components/v3-pat/table-form/scripts.js":
/*!*******************************************************************!*\
  !*** ./src/components/05-components/v3-pat/table-form/scripts.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* Component TableForm */
(function($, window, SapphireWidgets) {
	const addEmptyLine = config => {
		const $list = $('.TableFormColumn:not(.TableFormColumn--editMode) .TableFormColumn__Fields > .ListRecords');

		$list.append('<div class="TableFormColumn__EmptyItem"></div>');
	};

	const removeEmptyLine = config => {
		const $list = $('.TableFormColumn:not(.TableFormColumn--editMode) .TableFormColumn__Fields > .ListRecords');

		$list.each(function(index) {
			$(this)
				.find('> .TableFormColumn__EmptyItem:first')
				.remove();
		});
	};

	const onComponentReload = widgetId => {
		const $table = $(`#${widgetId}`);
		const $editing = $table.find('.TableFormColumn--editMode');

		if ($editing.length) {
			$table.addClass('TableForm--scrollDisabled');
		} else {
			$table.removeClass('TableForm--scrollDisabled');
		}
	};

	SapphireWidgets.TableForm = { addEmptyLine, onComponentReload, removeEmptyLine };
})(jQuery, window, SapphireWidgets);


/***/ }),

/***/ "./src/components/05-components/v3-pat/tabs-extended/scripts.js":
/*!**********************************************************************!*\
  !*** ./src/components/05-components/v3-pat/tabs-extended/scripts.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* Component TabsExtended */
SapphireWidgets.TabsExtended = function(config) {
	$(document).ready(function() {
		const $component = $(`#${config.widgetId} .Tabs_Extended`);
		const $tabHeader = $component.find('.Tabs_header');
		const $tabContainer = $component.find('.TabsContainer');
		const $tabs = $tabHeader.find('> .Tabs__tab');
		const $tabsEnabled = $tabHeader.find('> .Tabs__tab:not(.disabled)');
		const $tabsInput = $component.find('.Tabs_Input input');

		$tabs.each(function() {
			if ($(this).text() === '') {
				$(this).remove();
			}
		});

		$tabsEnabled.on('click', function() {
			$tabContainer.attr('activetab', $(this).attr('value'));

			$tabsInput.val($(this).attr('value'));
			$tabsInput.change();
		});

		$tabsEnabled.off('mousedown').on('mousedown', function(evt) {
			var $tabsExtended = $(evt.target).closest('.Tabs_Extended');
			$tabsExtended.removeClass('isClosed');
		});

		$('.Tabs_Extended.HideActiveOnClick .Tabs_header')
			.off('mousedown')
			.on('mousedown', '.Tabs__tab.active', function(evt) {
				var $tabsExtended = $(evt.target).closest('.Tabs_Extended');
				var $tabsBody = $tabsExtended.find('.Tabs_body');

				if ($tabsBody.hasClass('Tabs_body--closed')) {
					$tabsBody.removeClass('Tabs_body--closed');
					$tabsExtended.removeClass('isClosed');
				} else {
					$tabsBody.addClass('Tabs_body--closed');
					$tabsExtended.addClass('isClosed');
				}
			});

		$tabHeader.find('.Tabs_Extended--disabled').each(function(index, el) {
			$(el)
				.parent()
				.css('cursor', 'default')
				.off('click');
		});

		$component.each(function(index, el) {
			if ($(el).hasClass('Tabs_Extended--closedonstart')) {
				$(el)
					.find('.Tabs_body')
					.addClass('Tabs_body--closed');
				$(el).addClass('isClosed');
				$(el).removeClass('Tabs_Extended--closedonstart');
			}

			$(el)
				.off('click')
				.on('click', '.Tabs_Extended--close', function(evt) {
					$(evt.target)
						.closest('.Tabs_body')
						.addClass('Tabs_body--closed');
				});
		});

		if (!config.tab1Enabled) $tabHeader.find('> .Tabs__tab[value=1]').addClass('disabled');
		if (!config.tab2Enabled) $tabHeader.find('> .Tabs__tab[value=2]').addClass('disabled');
		if (!config.tab3Enabled) $tabHeader.find('> .Tabs__tab[value=3]').addClass('disabled');
		if (!config.tab4Enabled) $tabHeader.find('> .Tabs__tab[value=4]').addClass('disabled');
		if (!config.tab5Enabled) $tabHeader.find('> .Tabs__tab[value=5]').addClass('disabled');
	});
};


/***/ }),

/***/ "./src/components/05-components/v3-pat/tabular-list/scripts.js":
/*!*********************************************************************!*\
  !*** ./src/components/05-components/v3-pat/tabular-list/scripts.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* Component TabularList */
(function($, window, document, SapphireWidgets) {
	var allTabularLists = [];

	var create = function(config) {
		window[config.tabularListId] = new TabularList(config);
		allTabularLists.push(window[config.tabularListId]);

		$(window).load(function() {
			var allTabularLists = SapphireWidgets.TabularList.all();
			allTabularLists.forEach(function(element, i) {
				element.handleTabularListColumns();
				element.handleResponsiveClasses(200);
			});
		});

		$(window).on('resize.tabularlist', function() {
			var allTabularLists = SapphireWidgets.TabularList.all();
			allTabularLists.forEach(function(element, i) {
				element.handleResponsiveClasses(200);
			});
		});
	};

	var TabularList = function(config) {
		var _this = this;
		this.config = config;
		this.tabularListResizeTimer = 0;
		this.$widget = $('#' + config.tabularListId);
		this.$widgetList = this.$widget.find('> .TabularList');
		this.$widget.find('.TabularListRow').each(function(i, row) {
			_this.columnsCount = 0;
			$(row)
				.find('.TabularListRow-values .TabularListRow-item')
				.each(function(i, el) {
					$(el).addClass('TabularListColumn' + (i + 1));
					_this.columnsCount++;
				});
		});
		if (!!config.breakOn) {
			this.breakOnOrder = parseInt(config.breakOn);
		} else {
			this.breakOnOrder = 0;
		}
		this.handleTabularListColumns();
	};

	TabularList.prototype.handleTabularListColumns = function() {
		if (this.config.columnsWidth === 'Auto') {
			if (this.$widgetList.width() > 1) {
				for (i = 1; i <= this.columnsCount; i++) {
					var maxWidthContent = Math.max.apply(
						null,
						this.$widget
							.find('.TabularListColumn' + i)
							.map(function() {
								return $(this).outerWidth(true);
							})
							.get()
					);
					this.$widget.find('.TabularListColumn' + i).width(maxWidthContent);
					this.$widget.find('.TabularListColumn' + i).css('opacity', 1);
				}
			}
		}
		if (!!this.config.propertyMinWidth) {
			this.$widget.find('.TabularListRow-property').css('min-width', convertInCSSValue(this.config.propertyMinWidth));
		}
		if (!!this.config.propertyMaxWidth) {
			this.$widget.find('.TabularListRow-property').css('max-width', convertInCSSValue(this.config.propertyMaxWidth));
		}
		if (!!this.config.actionsMinWidth) {
			this.$widget.find('.TabularListRow-actions').css('min-width', convertInCSSValue(this.config.actionsMinWidth));
		}
		if (!!this.config.actionsMaxWidth) {
			this.$widget.find('.TabularListRow-actions').css('max-width', convertInCSSValue(this.config.actionsMaxWidth));
		}
	};

	TabularList.prototype.handleResponsiveClasses = function(timeout) {
		var _this = this;
		window.clearTimeout(this.tabularListResizeTimer);
		this.tabularListResizeTimer = window.setTimeout(function() {
			_this.$widgetList.removeClass(function(index, className) {
				return (className.match(/(^|\s)screen-\S+/g) || []).join(' ');
			});

			_this.$widgetList.removeClass('isBreaking');

			var widgetWidth = _this.$widgetList.outerWidth(true);
			if (widgetWidth === 0) {
				widgetWidth = _this.$widgetList
					.parents(':visible')
					.eq(0)
					.outerWidth(true);
			}

			if (widgetWidth >= 1900) {
				_this.$widgetList.addClass('screen-DesktopHD');
				if (_this.breakOnOrder >= 6) {
					_this.$widgetList.addClass('isBreaking');
				}
			} else if (widgetWidth >= 1600) {
				_this.$widgetList.addClass('screen-DesktopBig');
				if (_this.breakOnOrder >= 5) {
					_this.$widgetList.addClass('isBreaking');
				}
			} else if (widgetWidth >= 1366) {
				_this.$widgetList.addClass('screen-Desktop');
				if (_this.breakOnOrder >= 4) {
					_this.$widgetList.addClass('isBreaking');
				}
			} else if (widgetWidth >= 1024) {
				_this.$widgetList.addClass('screen-DesktopSmall');
				if (_this.breakOnOrder >= 3) {
					_this.$widgetList.addClass('isBreaking');
				}
			} else if (widgetWidth >= 420) {
				_this.$widgetList.addClass('screen-Tablet');
				if (_this.breakOnOrder >= 2) {
					_this.$widgetList.addClass('isBreaking');
				}
			} else {
				_this.$widgetList.addClass('screen-Phone');
				if (_this.breakOnOrder >= 1) {
					_this.$widgetList.addClass('isBreaking');
				}
			}
		}, timeout);
	};

	SapphireWidgets.TabularList = {
		create: create,
		all: function() {
			return allTabularLists;
		},
	};
})(jQuery, window, document, SapphireWidgets);

function convertInCSSValue(value_in) {
	var returned;
	if (value_in.includes('px') || value_in.includes('%')) {
		returned = value_in;
	} else {
		returned = value_in + 'px';
	}
	return returned;
}


/***/ }),

/***/ "./src/components/05-components/v3-pat/tabular-scroll/scripts.js":
/*!***********************************************************************!*\
  !*** ./src/components/05-components/v3-pat/tabular-scroll/scripts.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* Component TabularScroll */
(function($, window, document, SapphireWidgets) {
	const create = function(config) {
		$(document).ready(function() {
			$('.TabularScroll').each(function(i, el) {
				setupTabularScroll($(el));
			});
		});

		$(window).load(function() {
			osAjaxBackend.BindAfterAjaxRequest(function() {
				$('.TabularScroll').each(function(i, el) {
					setupTabularScroll($(el));
					resizeRows($(el));
				});
			});
		});

		$(window).on('resize.tabularscroll', function() {
			$('.TabularScroll').each(function(i, el) {
				var $centerTable = $(el).find('.TabularScroll-center-table');
				var tableWidth = $centerTable.find('table').width();
				$(el)
					.find('.TabularScroll-center .TopScrollDragger')
					.width(tableWidth);
				if ($centerTable[0].scrollWidth > $centerTable.width()) {
					$(el)
						.find('.TopScrollWrapper')
						.css('visibility', 'visible');
				} else {
					$(el)
						.find('.TopScrollWrapper')
						.css('visibility', 'hidden');
				}
			});
		});
	};

	const setupTabularScroll = function($tabularScroll) {
		var $topScrollWrapper = $tabularScroll.find('.TopScrollWrapper');
		var $centerTable = $tabularScroll.find('.TabularScroll-center-table');
		$tabularScroll.find('.TopScrollWrapper').scroll(function() {
			$centerTable.scrollLeft($topScrollWrapper.scrollLeft());
		});
		$centerTable.scroll(function() {
			$topScrollWrapper.scrollLeft($centerTable.scrollLeft());
		});
		// similar to Resize
		var tableWidth = $centerTable.find('table').width();
		$tabularScroll.find('.TabularScroll-center .TopScrollDragger').width(tableWidth);
		if ($centerTable[0].scrollWidth > $centerTable.width()) {
			$tabularScroll.find('.TopScrollWrapper').css('visibility', 'visible');
		} else {
			$tabularScroll.find('.TopScrollWrapper').css('visibility', 'hidden');
		}
	};

	const resizeRows = function($tabularScroll) {
		let arrrayHeight = [];
		const $tableCenter = $tabularScroll.find('.TabularScroll-center-table table tbody');
		const $tableRight = $tabularScroll.find('.TabularScroll-right .ListRecords');
		const $tableLeft = $tabularScroll.find('.TabularScroll-left .ListRecords');

		arrrayHeight = $tableCenter
			.children('tr')
			.map(function() {
				return $(this).height();
			})
			.get();

		$tableRight.children().each(function(index) {
			$(this).css('height', arrrayHeight[index] + 'px');
		});

		$tableLeft.children().each(function(index) {
			$(this).css('height', arrrayHeight[index] + 'px');
		});
	};

	SapphireWidgets.TabularScroll = { create };
})(jQuery, window, document, SapphireWidgets);


/***/ }),

/***/ "./src/components/05-components/v3-pat/timeline/scripts.js":
/*!*****************************************************************!*\
  !*** ./src/components/05-components/v3-pat/timeline/scripts.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* Timeline Helpers */
SapphireWidgets.TimelineCounterItems = function(titleItemID, label) {
	$(document).ready(function() {
		const $section = $(`#${titleItemID}`).parents('.TimelineItemSection');
		const $title = $section.find('.TimelineItemHeader a');
		const $items = $section.find('.TimelineItem');

		$title.append($(`<div class='ColorGreyText TextLarge TextRegular'> (${$items.length})</div>`));
	});
};

SapphireWidgets.ScrollToEvent = function(elementId) {
	SapphireWidgets.LayoutBase.scrollToElement($(`#${elementId}:first`, window.top.document), 52);
};

SapphireWidgets.LineTimelineComponent = function(widgetId, hasContent, isExpandable) {
	$(document).ready(function() {
		const $component = $(`#${widgetId}`);

		if (hasContent && isExpandable) {
			const $expandableLink = $component.find('.LineTimeLine__Header');
			const $actions = $component.find('.LineTimeLine__Actions');

			$expandableLink.click(() => {
				$component.toggleClass('LineTimeLine--expanded');

				return false;
			});

			$actions.click(function(e) {
				e.stopPropagation();
			});
		}
	});
};

SapphireWidgets.TimelinePageEvents = function(showMoreTimelineLink) {
	$(document).ready(function() {
		$(window)
			.off('scroll.Timeline')
			.on('scroll.Timeline', function() {
				if (window.scrollY === 0) {
					const $item = $('.TimelineAnchor').first();
					const $list = $('.TimelinePage__Navigation .ListRecords');

					selectItem($item.attr('id'));
					clearTimeout(window.scrollFinished);

					$list.scrollTop(0);
				} else {
					clearTimeout(window.scrollFinished);
					window.scrollFinished = setTimeout(function() {
						let id = 0;

						$('.TimelineAnchor').each(function(index) {
							if ($(window).scrollTop() + 190 >= $(this).offset().top) {
								id = $(this).attr('id');

								if (index == $('.TimelineAnchor').length - 1) selectItem(id);
							} else {
								selectItem(id, true);

								window.lastItemID = id;

								return false;
							}
						});

						if ($(document).height() - $(this).height() - 150 < $(this).scrollTop()) {
							const $list = $('.TimelinePage__Navigation .ListRecords');

							$(`#${showMoreTimelineLink}`).click();
							$('.TimelinePage__Right .TimelinePage__LoadingMore').css('display', 'flex');

							window.scrollListPosition = $list.scrollTop();
						}
					}, 100);
				}

				checkEndOfPage();
			});

		infiniteScrollList(showMoreTimelineLink);
	});
};

SapphireWidgets.TimelineRestoreEvents = function(showMoreTimelineLink) {
	$('.TimelinePage__Navigation .ListRecords').scrollTop(window.scrollListPosition);
	$('.TimelinePage__LoadingMore').css('display', 'none');

	window.alreadyClicked = false;

	infiniteScrollList(showMoreTimelineLink);

	if (window.lastItemID) selectItem(window.lastItemID);
};

function selectItem(id, scrollTo) {
	const $navItem = $(`[data-item=event-${id}] .TimelineItem`);

	$('.TimelineItem.TimelineItem--active').removeClass('TimelineItem--active');
	$navItem.addClass('TimelineItem--active');

	if (scrollTo && $navItem.length) scrollToView($navItem);
}

function scrollToView(element) {
	const $parentDiv = $('.TimelinePage__Navigation .ListRecords');

	$parentDiv.scrollTop(
		$parentDiv.scrollTop() + element.position().top - $parentDiv.height() / 2 + element.height() / 2
	);

	return true;
}

function infiniteScrollList(showMoreNavLink, name) {
	const $list = $('.TimelinePage__Navigation .ListRecords');

	$list.off('mousewheel.TimelineNav').on('mousewheel.TimelineNav', function() {
		const listHeight = $list.height();
		const scrollTop = $list.scrollTop();
		const scrollHeight = $list.prop('scrollHeight');

		if (listHeight + scrollTop + 100 > scrollHeight && scrollTop > 0 && !window.alreadyClicked) {
			clearTimeout(window.scrollListFinished);
			window.scrollListFinished = setTimeout(function() {
				$(`#${showMoreNavLink}`).click();

				$('.TimelinePage__LoadingMore').css('display', 'flex');

				window.scrollListPosition = $list.scrollTop();
				window.alreadyClicked = true;
			}, 100);
		}
	});
}

function checkEndOfPage() {
	if (window.innerHeight + window.pageYOffset >= document.body.offsetHeight) {
		const $item = $('.TimelineAnchor').last();
		window.lastItemID = $item.attr('id');
	}
}


/***/ }),

/***/ "./src/components/05-components/v3-pat/trigger-iframe-tooltip/trigger-iframe-tooltip.js":
/*!**********************************************************************************************!*\
  !*** ./src/components/05-components/v3-pat/trigger-iframe-tooltip/trigger-iframe-tooltip.js ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* Component TriggerIframeTooltip */
(function($, window, document, SapphireWidgets) {
	var create = function(config) {
		var $elementId = $('#' + config.elementId);

		$elementId.addClass('tooltip');

		if (config.triggerId === 'click') $elementId.addClass('tooltipstered--pointer');

		const widgetNotifyDiv = $.find('[data-iframetooltiptriggerid="' + config.elementId + '"]');
		let widgetNotifyId = '';

		if (widgetNotifyDiv.length === 1) {
			widgetNotifyId = $(widgetNotifyDiv).data('iframetooltipnotifyid');
		}

		$elementId.tooltipster({
			contentAsHTML: true,
			theme: config.theme,
			interactive: true,
			position: config.positionId,
			trigger: config.triggerId,
			minWidth: config.minWidth,
			maxWidth: config.maxWidth,
			zindex: config.zindex,
			onlyOne: true,
			content: `<iframe id="tooltipster-frame" data-ui="iframe-tooltip" src="${config.URL}" style="border:none; min-height:${config.minHeight}px;" data-iframetooltiptriggerid="${config.elementId}" iframetooltipnotifyid="${widgetNotifyId}"></iframe>`,
			functionReady: function(instance, helper) {
				$(helper).css({ visibility: 'hidden' });

				if (config.noPadding) $('.tooltipster-content').addClass('tooltipster--noPadding');
				if (config.customClass) $('.tooltipster-content').addClass(config.customClass);

				setTimeout(function() {
					$('.tooltipster-base').css({
						visibility: 'visible',
						minHeight: config.minHeight > 0 ? config.minHeight : 'auto',
					});
				}, 500);

				$('.tooltipster-content').prepend('<div class="TooltipsterLoading"><div class="lds-ring"><div></div></div>');

				const isLeftOrRight = config.positionId === 'left' || config.positionId === 'right';

				// Set a fixed height in order to keep the arrow in the same position
				if (isLeftOrRight) {
					setFixHeight();

					$(window)
						.off('scroll.Tooltip')
						.on('scroll.Tooltip', function() {
							setTimeout(() => {
								setFixHeight();
							}, 500);
						});
				}
			},
			functionAfter: function() {
				$(window).off('scroll.Tooltip');
			},
		});
	};

	const setFixHeight = () => {
		const $arrow = $('.tooltipster-arrow');

		$arrow.height($arrow.height());
	};

	SapphireWidgets.TriggerIframeTooltip = { create };
})(jQuery, window, document, SapphireWidgets);


/***/ }),

/***/ "./src/components/05-components/v3-pat/truncated-content/scripts.js":
/*!**************************************************************************!*\
  !*** ./src/components/05-components/v3-pat/truncated-content/scripts.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* Component TruncatedContent */
(function($, window, document, SapphireWidgets) {
	const create = function(config = {}) {
		$(document).ready(function() {
			var $allTruncated = $([]);
			var rootSelector = `#${config.widgetId}`;
			var openerSelector = '.TruncatedContent--all';
			var bodySelector = '.TruncatedContent--body';

			$(rootSelector).each(function() {
				var $el = $(this);
				$allTruncated = $allTruncated.add($el);
				var $elBody = $el.find(bodySelector);
				var maxLines = $el.data('maxlines');
				var lineHeight = window
					.getComputedStyle($el.find('> div')[0])
					.getPropertyValue('line-height')
					.replace('px', '');
				var lineCount = Math.ceil($el.height() / lineHeight);
				if (lineCount > maxLines) {
					$elBody.css({
						maxHeight: lineHeight * maxLines + 'px',
					});
					var sentence = $el.data('additional').replace('{n}', lineCount - maxLines);
					$el.append('<p class="' + openerSelector.replace('.', '') + '">' + sentence + '</p>');
				}
			});

			$(rootSelector).on('click', openerSelector, function() {
				var el = $(this).closest(rootSelector);
				openTruncatedContent(el);
			});

			openTruncatedContent = function(el) {
				$(el)
					.find(bodySelector)
					.css('max-height', 'none');
				$(el)
					.find(openerSelector)
					.css('display', 'none');
			};

			if (window.frameElement && window.frameElement.id === 'tooltipster-frame') {
				$(rootSelector).off('click', openerSelector);
				$(openerSelector).addClass('in-tooltip');
			}
		});
	};

	SapphireWidgets.TruncatedContent = {
		create,
		open: function(el) {
			openTruncatedContent(el);
		},
		openAll: function() {
			$allTruncated.each(function() {
				openTruncatedContent($(this));
			});
		},
	};
})(jQuery, window, document, SapphireWidgets);


/***/ }),

/***/ "./src/components/08-pages/clinicianWorkArea.js":
/*!******************************************************!*\
  !*** ./src/components/08-pages/clinicianWorkArea.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

SapphireWidgets.ClinicianWorkArea = function(containerID) {
	$(document).ready(function() {
		const $container = $(`#${containerID}`);
		const $toggler = $container.find('.SectionExpandable-toggler');

		if ($toggler.length === 1) {
			let $togglerState = false;

			$toggler.find('[data-labelvalue]').text($toggler.find('[data-labelshow]').data('labelshow'));

			$toggler.off('click').on('click', function(evt) {
				evt.stopPropagation();

				buttonClick();
			});

			const buttonClick = function() {
				$togglerState = !$togglerState;

				if ($togglerState) {
					$container.find('.SectionExpandable-toggled').show();
					$toggler.find('[data-labelvalue]').text($toggler.find('[data-labelhide]').data('labelhide'));

					$toggler.hide();

					const $cancelButton = $('.SectionExpandable-toggled .ButtonCancelSearch');
					$cancelButton.click(() => buttonClick());
				} else {
					$container.find('.SectionExpandable-toggled').hide();
					$toggler.find('[data-labelvalue]').text($toggler.find('[data-labelshow]').data('labelshow'));

					$toggler.show();

					const $cancelButton = $('.SectionExpandable-toggled .ButtonCancelSearch');
					$cancelButton.off('click');
				}
			};
		}
	});
};


/***/ }),

/***/ "./src/components/08-pages/eSignature.js":
/*!***********************************************!*\
  !*** ./src/components/08-pages/eSignature.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

SapphireWidgets.QRCodeScanner = function(options) {
	Html5Qrcode.getCameras()
		.then(devices => {
			if (devices && devices.length) startCamera(devices[0].id);
		})
		.catch(err => {
			// App doesn't have access to the camera...

			setTimeout(() => {
				const $checkbox = $('.AccessCodeOption');

				$checkbox.attr('checked', true).trigger('click');
				$('.LayoutScanCode').addClass('LayoutScanCode--modeOnlyCode');

				$('.LayoutScanCode__Splash').fadeOut(500);
			}, 500);
		});

	function startCamera(cameraID) {
		const html5QrCode = new Html5Qrcode('qrreader');
		const config = { fps: 5, qrbox: 250 };

		const successCallback = response => {
			if ($('.ModeAccessCode').length) return;

			$('.ScanOverlay').addClass('ScanOverlay--correctCode');

			OsNotifyWidget(options.widgetFakeNotifyId, response);

			//setTimeout(() => html5QrCode.stop(), 1000);
		};

		const errorCallback = response => {
			// console.error(response);
		};

		html5QrCode
			.start({ facingMode: 'environment' }, config, successCallback, errorCallback)
			.then(() => {
				setTimeout(() => $('.LayoutScanCode__Splash').fadeOut(500), 500);
			})
			.catch(err => {
				console.error(err);
			});
	}

	let isPortrait = window.matchMedia('(orientation: portrait)').matches;
	let isOrientarionChanged = false;

	$(window).on('orientationchange', function(event) {
		if ($('.ModeAccessCode').length) {
			isOrientarionChanged = window.matchMedia('(orientation: portrait)').matches;
			SapphireWidgets.IsOrientarionChanged = !(isPortrait ^ isOrientarionChanged);

			return;
		}

		window.location.reload();
	});
};

SapphireWidgets.OnModeChange = function() {
	$('.ScanOverlay').removeClass('ScanOverlay--correctCode');
	$('.ScanOverlay').removeClass('ScanOverlay--incorrectCode');

	if (SapphireWidgets.IsOrientarionChanged && !$('.ModeAccessCode').length) {
		window.location.reload();
	}
};

SapphireWidgets.GoNextInput = function(currentInput, nextInputClass) {
	const key = event.keyCode || event.charCode;
	const isNumber = !isNaN(event.key) && !isNaN(parseFloat(event.key));

	const $curr = $(currentInput);
	const $next = $(`.${nextInputClass}`);
	const $prev = $curr.prevAll('input').first();

	if (key === 8 || key === 46) {
		$prev.focus();
		$curr.removeClass('ColorAlphaBorder');

		return;
	}

	if (isNumber) {
		$next.focus();
		$curr.addClass('ColorAlphaBorder');
		$('.ValidateInputButton').click();
	} else event.preventDefault();
};


/***/ }),

/***/ "./src/components/08-pages/remoteAppointment.js":
/*!******************************************************!*\
  !*** ./src/components/08-pages/remoteAppointment.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function($, window, SapphireWidgets) {
	const create = () => {
		const $widget = $('.RemoteAppointment');
		const $header = $widget.find('.RemoteAppointment__Header');
		const $minimize = $header.find('.Minimize');
		const $smallSize = $header.find('.Small');
		const $mediumSize = $header.find('.Medium');
		const $fullScreen = $header.find('.FullScreen');
		const $restoreWindow = $widget.find('.RemoteAppointment__RestoreWindow');

		let isPreviousSmall = $smallSize.is(':visible');

		$minimize.click(() => {
			isPreviousSmall = $mediumSize.is(':visible');

			//$widget.draggable({ disabled: true });

			$widget.addClass('RemoteAppointment--minimized');
			$minimize.hide();
			$mediumSize.show();

			$widget.animate(minimizedPosition($header.height()));
		});

		$smallSize.click(() => {
			$widget.removeClass('RemoteAppointment--minimized');
			$minimize.show();
			$smallSize.hide();
			$mediumSize.show();

			$widget.animate({
				top: '50%',
				right: '50%',
				left: '50%',
				width: '280px',
				height: '380px',
			});
		});

		$mediumSize.click(() => {
			const isCallStarted = $widget.hasClass('RemoteAppointment--callStarted');

			//$widget.draggable('enable');

			$widget.removeClass('RemoteAppointment--minimized');
			$minimize.show();
			$mediumSize.hide();
			if (isCallStarted) $smallSize.show();

			$widget.animate({
				top: '50%',
				right: '50%',
				left: '50%',
				width: isCallStarted ? '45vw' : '450px',
				height: isCallStarted ? '45vh' : '260px',
			});
		});

		$fullScreen.click(() => {
			const iframe = document.querySelector('.RemoteAppointment iframe');

			if (iframe.requestFullscreen) {
				iframe.requestFullscreen();
			} else if (iframe.webkitRequestFullscreen) {
				iframe.webkitRequestFullscreen();
			}
		});

		$restoreWindow.click(() => {
			if (isPreviousSmall) $smallSize.click();
			else $mediumSize.click();
		});

		$(document).ready(function() {
			$widget.draggable({
				containment: 'window',
				handle: $header,
				scroll: false,
				snap: true,
				iframeFix: true,
			});

			fakeAjaxRefresh();
		});

		checkIframeLoaded();
	};

	const minimizedPosition = (headerHeight = 48) => {
		return {
			top: $(window).height() - headerHeight - 16,
			right: '76px',
			left: $(window).width() - 280 - 60 - 16,
			width: '275px',
			height: '48px',
		};
	};

	const resizeWhenJoin = () => {
		const $widget = $('.RemoteAppointment');
		const $smallSize = $widget.find('.Small');

		$smallSize.show();
		$widget.addClass('RemoteAppointment--callStarted');

		$widget.css({
			height: '45vh',
			width: '45vw',
		});

		const centerPx = ($(window.top).width() - $widget.width()) / 2;

		$widget.css({
			inset: `230px auto auto ${centerPx}px`,
		});

		let timeout;

		function warning(e) {
			timeout = setTimeout(function() {
				// Hack to keep the current tab selected if user doesn't go to another page
				const iframeContents = window.top.$('.MainContent > iframe').contents();
				const tabItems = iframeContents.find('.TabWrapper');

				tabItems.removeClass('Active');
				tabItems.first().addClass('Active');
			}, 1000);

			return (e.returnValue = 'You are leaving the page');
		}

		function noTimeout() {
			clearTimeout(timeout);
		}

		window.top.onbeforeunload = warning;
		window.top.unload = noTimeout;

		/*window.top.addEventListener('beforeunload', function(e) {
			e.preventDefault();
			e.returnValue = '123';
		});*/
	};

	const setInitialState = () => {
		const $widget = $('.RemoteAppointment');
		const $smallSize = $widget.find('.Small');
		const $mediumSize = $widget.find('.Medium');

		$smallSize.hide();
		$mediumSize.hide();
		$widget.removeClass('RemoteAppointment--callStarted');

		window.top.unload = null;
		window.top.onbeforeunload = null;

		$('.RemoteAppointment').css({
			display: 'initial',
			right: '22%',
			top: '30%',
			height: '260px',
			width: '450px',
		});
	};

	const setModalMinimized = () => {
		// To use only inside Sapphire iFrame pages
		const $modalRemoteAppt = window.top.$('.RemoteAppointment');

		if ($modalRemoteAppt.length) {
			const $minimizeModal = $modalRemoteAppt.find('.Minimize');
			$minimizeModal.click();
		}
	};

	const checkIframeLoaded = () => {
		const iframe = document.getElementsByClassName('SapphireFrame')[0];
		const iframeDoc = iframe.contentDocument || iframe.contentWindow.document;

		if (iframeDoc.readyState == 'complete') {
			iframe.contentWindow.onload = function() {
				setInitialState();
			};

			return;
		}

		window.setTimeout(checkIframeLoaded, 100);
	};

	const setCallStarted = () => {};

	const fakeAjaxRefresh = () => {
		const $iframe = $('.SapphireFrame');

		$iframe.on('load', function() {
			$iframe[0].contentWindow.onbeforeunload = function(e) {
				$('.Feedback_AjaxWait').show();
			};

			$('.Feedback_AjaxWait').hide();
		});
	};

	const openModalLeaveContext = url => {
		SapphireWidgets.RemoteAppointment.leaveURL = url;

		window.top.unload = null;
		window.top.onbeforeunload = null;

		$('.OpenModalLeaveContext').click();
	};

	SapphireWidgets.RemoteAppointment = {
		create,
		resizeWhenJoin,
		setCallStarted,
		setInitialState,
		fakeAjaxRefresh,
		setModalMinimized,
		openModalLeaveContext,
	};
})(jQuery, window, SapphireWidgets);


/***/ }),

/***/ "./src/components/globals.js":
/*!***********************************!*\
  !*** ./src/components/globals.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

//SapphireWidgets = window.SapphireWidgets = window.SapphireWidgets || {};


/***/ }),

/***/ "./src/components/index.scss":
/*!***********************************!*\
  !*** ./src/components/index.scss ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cyBzeW5jIFxcLmpzJCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy8wMC1zZXR0aW5ncy9jb25maWcuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvMDUtY29tcG9uZW50cy9sYXlvdXQvbGF5b3V0LWJhc2UuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvMDUtY29tcG9uZW50cy9sYXlvdXQvbGF5b3V0LWJsYW5rLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzLzA1LWNvbXBvbmVudHMvbGF5b3V0L2xheW91dC1lbWVyZ2VuY3kuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvMDUtY29tcG9uZW50cy9sYXlvdXQvbGF5b3V0LXBvcHVwLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzLzA1LWNvbXBvbmVudHMvdjMtcGF0L2FjdGlvbnMtbWVudS9zY3JpcHRzLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzLzA1LWNvbXBvbmVudHMvdjMtcGF0L2J1dHRvbi1saW5rL3NjcmlwdHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvMDUtY29tcG9uZW50cy92My1wYXQvY2FyZC1jaGFydHMvc2NyaXB0cy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy8wNS1jb21wb25lbnRzL3YzLXBhdC9jb2xsYXBzaWJsZS1zaWRlLXBhbmVsL3NjcmlwdHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvMDUtY29tcG9uZW50cy92My1wYXQvY29tcC1saW5lL3NjcmlwdHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvMDUtY29tcG9uZW50cy92My1wYXQvY291bnRyeS1waG9uZS9zY3JpcHRzLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzLzA1LWNvbXBvbmVudHMvdjMtcGF0L2RhdGEtdGFibGVzL3NjcmlwdHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvMDUtY29tcG9uZW50cy92My1wYXQvZGF0ZXRpbWUtcmFuZ2UtcGlja2VyL3NjcmlwdHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvMDUtY29tcG9uZW50cy92My1wYXQvZHJhZy1kcm9wL3NjcmlwdHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvMDUtY29tcG9uZW50cy92My1wYXQvZHJvcGRvd24tY2F0ZWdvcmllcy9zY3JpcHRzLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzLzA1LWNvbXBvbmVudHMvdjMtcGF0L2Ryb3B6b25lL2Ryb3B6b25lLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzLzA1LWNvbXBvbmVudHMvdjMtcGF0L2V4cGFuZGFibGUtbGluay9zY3JpcHRzLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzLzA1LWNvbXBvbmVudHMvdjMtcGF0L2Z1bGxzY3JlZW4tdGFicy13cmFwcGVyL3NjcmlwdHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvMDUtY29tcG9uZW50cy92My1wYXQvZ2VuZXJpYy1nYWxsZXJ5L3NjcmlwdHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvMDUtY29tcG9uZW50cy92My1wYXQvZ2VuZXJpYy1ncmlkL3NjcmlwdHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvMDUtY29tcG9uZW50cy92My1wYXQvaG9yaXpvbnRhbC10b29sYmFyL3NjcmlwdHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvMDUtY29tcG9uZW50cy92My1wYXQvaG91ci1waWNrZXIvc2NyaXB0cy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy8wNS1jb21wb25lbnRzL3YzLXBhdC9pbnB1dC1sYXNhL3NjcmlwdHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvMDUtY29tcG9uZW50cy92My1wYXQvaW5wdXQtd2l0aC1jbGVhci9zY3JpcHRzLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzLzA1LWNvbXBvbmVudHMvdjMtcGF0L2lucHV0LXdpdGgtbGlzdC9zY3JpcHRzLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzLzA1LWNvbXBvbmVudHMvdjMtcGF0L2xpbmUtYWRkL3NjcmlwdHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvMDUtY29tcG9uZW50cy92My1wYXQvbGluZS1kZXRhaWxzLWV4cGFuZC1ib3gvc2NyaXB0LmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzLzA1LWNvbXBvbmVudHMvdjMtcGF0L2xvY2F0aW9uLWJveC9zY3JpcHRzLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzLzA1LWNvbXBvbmVudHMvdjMtcGF0L21haW4taW50ZXJhY3RpdmUtY2FyZC9zY3JpcHRzLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzLzA1LWNvbXBvbmVudHMvdjMtcGF0L21lbnUtYmFyL3NjcmlwdHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvMDUtY29tcG9uZW50cy92My1wYXQvbXVsdGlwbGUtc2VsZWN0aW9uLWJ1dHRvbi9zY3JpcHRzLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzLzA1LWNvbXBvbmVudHMvdjMtcGF0L3BhbmVsL2NvbmZpcm1hdGlvbi1wYW5lbC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy8wNS1jb21wb25lbnRzL3YzLXBhdC9wYW5lbC9jb25maXJtYXRpb24tcG9wdXAuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvMDUtY29tcG9uZW50cy92My1wYXQvcGFuZWwvbW9kYWwtcG9wdXAuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvMDUtY29tcG9uZW50cy92My1wYXQvcGFuZWwvcGFuZWwtYnktaWQtbm90aWZ5LmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzLzA1LWNvbXBvbmVudHMvdjMtcGF0L3BhbmVsL3BhbmVsLWJ5LWlkLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzLzA1LWNvbXBvbmVudHMvdjMtcGF0L3BhbmVsL3BvcHVwLW1lbnUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvMDUtY29tcG9uZW50cy92My1wYXQvcGFuZWwvc2FwcGhpcmUtcGFuZWwuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvMDUtY29tcG9uZW50cy92My1wYXQvcGFuZWwvc2NyaXB0cy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy8wNS1jb21wb25lbnRzL3YzLXBhdC9wYXRpZW50LWNhbGwtY2FuY2VsL3BhdGllbnQtY2FsbC1jYW5jZWwtc3RydWN0dXJlLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzLzA1LWNvbXBvbmVudHMvdjMtcGF0L3BhdGllbnQtY2FsbC1jYW5jZWwvcGF0aWVudC1jYWxsLWNhbmNlbC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy8wNS1jb21wb25lbnRzL3YzLXBhdC9wZXJzb24tY2FyZC9zY3JpcHRzLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzLzA1LWNvbXBvbmVudHMvdjMtcGF0L3ByZXNjcmlwdGlvbi1jYXJkL3NjcmlwdHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvMDUtY29tcG9uZW50cy92My1wYXQvcHJlc2NyaXB0aW9uLWV4cGFuZGFibGUvc2NyaXB0cy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy8wNS1jb21wb25lbnRzL3YzLXBhdC9zYXBwaGlyZS1oZWFkZXIvc2NyaXB0cy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy8wNS1jb21wb25lbnRzL3YzLXBhdC9zYXBwaGlyZS1wb3B1cC9zY3JpcHRzLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzLzA1LWNvbXBvbmVudHMvdjMtcGF0L3NhcHBoaXJlLXJhZGlvLWJ1dHRvbi9zY3JpcHRzLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzLzA1LWNvbXBvbmVudHMvdjMtcGF0L3NjYWxlcy9zY2FsZS1tYWluLXN0cnVjdHVyZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy8wNS1jb21wb25lbnRzL3YzLXBhdC9zY2FsZXMvdG9nZ2xlLWl0ZW0tY29udHJvbC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy8wNS1jb21wb25lbnRzL3YzLXBhdC9zZWFyY2gtYW5kLXNlbGVjdC9zZWxlY3Qtc3NkLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzLzA1LWNvbXBvbmVudHMvdjMtcGF0L3NlYXJjaC1hbmQtc2VsZWN0L3NzZC1zZWFyY2guanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvMDUtY29tcG9uZW50cy92My1wYXQvc2VhcmNoYWJsZS1jbGllbnQtc2lkZS9zY3JpcHRzLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzLzA1LWNvbXBvbmVudHMvdjMtcGF0L3NlY3Rpb24tZXhwYW5kYWJsZS1jdXN0b20vc2NyaXB0cy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy8wNS1jb21wb25lbnRzL3YzLXBhdC9zZWN0aW9uLWV4cGFuZGFibGUtaW5zaWRlL3NjcmlwdHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvMDUtY29tcG9uZW50cy92My1wYXQvc2VsZWN0LXN5c3RlbS9zY3JpcHRzLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzLzA1LWNvbXBvbmVudHMvdjMtcGF0L3NoaWZ0LWNvbnRhaW5lci9zY3JpcHRzLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzLzA1LWNvbXBvbmVudHMvdjMtcGF0L3NoaWZ0LXRhYmxlL3NoaWZ0VGFibGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvMDUtY29tcG9uZW50cy92My1wYXQvc2hpZnQtdGFibGUvc2hpZnRUYWJsZUNhcmQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvMDUtY29tcG9uZW50cy92My1wYXQvc2hpZnQtdGFibGUvc2hpZnRUYWJsZUNhcmRQcm9ncmVzcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy8wNS1jb21wb25lbnRzL3YzLXBhdC9zaGlmdC10YWJsZS9zaGlmdFRhYmxlSG92ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvMDUtY29tcG9uZW50cy92My1wYXQvc2lkZS1tZW51L3NjcmlwdHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvMDUtY29tcG9uZW50cy92My1wYXQvc2lkZWJhci9zaWRlYmFyLXN0cnVjdHVyZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy8wNS1jb21wb25lbnRzL3YzLXBhdC9zbWFsbC1ib3gtc2VsZWN0YWJsZS9zY3JpcHRzLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzLzA1LWNvbXBvbmVudHMvdjMtcGF0L3NwaW5uZXItaG9yaXpvbnRhbC9zY3JpcHRzLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzLzA1LWNvbXBvbmVudHMvdjMtcGF0L3NwaW5uZXItdmVydGljYWwvc2NyaXB0cy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy8wNS1jb21wb25lbnRzL3YzLXBhdC9zcGxpdC1idXR0b24vc2NyaXB0cy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy8wNS1jb21wb25lbnRzL3YzLXBhdC9zc2QtY29tcG9uZW50LWJsb2NrL3NjcmlwdHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvMDUtY29tcG9uZW50cy92My1wYXQvc3NkLWxpc3QtbGluZS9zY3JpcHRzLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzLzA1LWNvbXBvbmVudHMvdjMtcGF0L3RhYmxlLWZvcm0vc2NyaXB0cy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy8wNS1jb21wb25lbnRzL3YzLXBhdC90YWJzLWV4dGVuZGVkL3NjcmlwdHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvMDUtY29tcG9uZW50cy92My1wYXQvdGFidWxhci1saXN0L3NjcmlwdHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvMDUtY29tcG9uZW50cy92My1wYXQvdGFidWxhci1zY3JvbGwvc2NyaXB0cy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy8wNS1jb21wb25lbnRzL3YzLXBhdC90aW1lbGluZS9zY3JpcHRzLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzLzA1LWNvbXBvbmVudHMvdjMtcGF0L3RyaWdnZXItaWZyYW1lLXRvb2x0aXAvdHJpZ2dlci1pZnJhbWUtdG9vbHRpcC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy8wNS1jb21wb25lbnRzL3YzLXBhdC90cnVuY2F0ZWQtY29udGVudC9zY3JpcHRzLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzLzA4LXBhZ2VzL2NsaW5pY2lhbldvcmtBcmVhLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzLzA4LXBhZ2VzL2VTaWduYXR1cmUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvMDgtcGFnZXMvcmVtb3RlQXBwb2ludG1lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvZ2xvYmFscy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9pbmRleC5zY3NzPzNjZjUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7UUFBQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsR0FBRzs7UUFFSDtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsS0FBSztRQUNMO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLE1BQU07UUFDTjtRQUNBO1FBQ0EsTUFBTTtRQUNOO1FBQ0E7UUFDQSxNQUFNO1FBQ047UUFDQTtRQUNBO1FBQ0EsT0FBTztRQUNQO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLElBQUk7UUFDSjs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLE1BQU07UUFDTjtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxLQUFLO1FBQ0w7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxNQUFNO1FBQ047UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLEtBQUs7O1FBRUw7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsNkJBQTZCO1FBQzdCLDZCQUE2QjtRQUM3QjtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHFCQUFxQixnQkFBZ0I7UUFDckM7UUFDQTtRQUNBLEtBQUs7UUFDTDtRQUNBO1FBQ0E7UUFDQSxxQkFBcUIsZ0JBQWdCO1FBQ3JDO1FBQ0E7UUFDQSxLQUFLO1FBQ0w7UUFDQTtRQUNBLEtBQUs7UUFDTDtRQUNBO1FBQ0EsS0FBSztRQUNMO1FBQ0E7UUFDQTtRQUNBLEtBQUs7UUFDTDtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLEtBQUs7O1FBRUw7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsS0FBSztRQUNMO1FBQ0E7UUFDQSxLQUFLO1FBQ0w7UUFDQTtRQUNBO1FBQ0EsS0FBSzs7UUFFTDtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0Esa0JBQWtCLDhCQUE4QjtRQUNoRDtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLEtBQUs7UUFDTDtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsSUFBSTtRQUNKOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsSUFBSTtRQUNKO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsTUFBTTtRQUNOO1FBQ0E7UUFDQTtRQUNBLE9BQU87UUFDUDtRQUNBO1FB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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSixHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBLDBEQUEwRDtBQUMxRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7Ozs7Ozs7Ozs7OztBQ3RORDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsRTs7Ozs7Ozs7Ozs7QUNQRDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBLENBQUM7Ozs7Ozs7Ozs7OztBQ3JCRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EscUNBQXFDOztBQUVyQztBQUNBO0FBQ0Esa0NBQWtDO0FBQ2xDOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2REFBNkQsRUFBRTtBQUMvRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxLQUFLO0FBQ0wsSUFBSTs7QUFFSjtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7O0FBRUo7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTs7QUFFSjtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7O0FBRUo7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0osR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxDQUFDOzs7Ozs7Ozs7Ozs7QUMxU0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtB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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUNBQXFDLDZCQUE2QjtBQUNsRTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQSxzQ0FBc0MsNkJBQTZCO0FBQ25FO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLENBQUM7Ozs7Ozs7Ozs7OztBQ25oQkQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSixHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtB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Q0EsS0FBSztBQUNMO0FBQ0EsR0FBRztBQUNILEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ3RDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGlCQUFpQixvQ0FBb0M7QUFDckQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsSUFBSTtBQUNKO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSixHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxJQUFJO0FBQ0o7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNILEVBQUU7QUFDRixDQUFDOzs7Ozs7Ozs7Ozs7QUN6U0Q7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxJQUFJOztBQUVKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBLEdBQUc7QUFDSCxFQUFFO0FBQ0Y7Ozs7Ozs7Ozs7OztBQ3JGQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEVBQUU7O0FBRUY7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsRUFBRTtBQUNGOzs7Ozs7Ozs7Ozs7QUNoQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsRUFBRTs7QUFFRjtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7O0FBRUo7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFOztBQUVGO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSCxFQUFFOztBQUVGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsR0FBRztBQUNILEVBQUU7QUFDRjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7Ozs7Ozs7Ozs7O0FDdkREO0FBQ0E7QUFDQTtBQUNB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QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsSUFBSTtBQUNKLEdBQUc7QUFDSDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxJQUFJO0FBQ0o7QUFDQSxFQUFFO0FBQ0Y7Ozs7Ozs7Ozs7OztBQzFEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSwwQkFBMEI7O0FBRTFCO0FBQ0E7QUFDQSxJQUFJOztBQUVKO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0ZBQXNGO0FBQ3RGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsRUFBRTtBQUNGOzs7Ozs7Ozs7Ozs7QUNsSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFOztBQUVGO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBLEVBQUU7O0FBRUY7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFD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QUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLDJDQUEyQztBQUMzQyxDQUFDOzs7Ozs7Ozs7Ozs7QUN4SkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxDQUFDOzs7Ozs7Ozs7Ozs7QUN6SEQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EseUJBQXlCLGNBQWM7QUFDdkM7O0FBRUE7QUFDQTtBQUNBLElBQUk7O0FBRUo7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0RBQXNEO0FBQ3REO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUVBQXFFO0FBQ3JFO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxtREFBbUQsSUFBSSxzQkFBc0I7QUFDN0U7QUFDQSwrREFBK0QsUUFBUSxHQUFHLFNBQVM7QUFDbkYsZ0RBQWdELElBQUksb0ZBQW9GOztBQUV4STtBQUNBO0FBQ0Esb0RBQW9ELGVBQWU7QUFDbkU7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsS0FBSztBQUNMLGtEQUFrRCxlQUFlO0FBQ2pFOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUCxNQUFNOztBQUVOO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0NBQW9DO0FBQ3BDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNERBQTREO0FBQzVELGdCQUFnQjtBQUNoQjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFD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QUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTs7QUFFSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7O0FBRUEsdUNBQXVDO0FBQ3ZDLENBQUM7Ozs7Ozs7Ozs7OztBQzlTRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxJQUFJOztBQUVKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJOztBQUVKO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0EsS0FBSztBQUNMLEdBQUc7QUFDSCxFQUFFO0FBQ0Y7Ozs7Ozs7Ozs7OztBQzNEQSxxRkFBcUY7O0FBRXJGO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsTUFBTTs7QUFFTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsTUFBTTtBQUNOLElBQUk7QUFDSjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUixNQUFNO0FBQ047QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSCxFQUFFO0FBQ0Y7Ozs7Ozs7Ozs7OztBQ3pJQSxxRkFBcUY7O0FBRXJGO0FBQ0E7QUFDQSwrQ0FBK0M7QUFDL0MsbURBQW1EO0FBQ25ELHFFQUFxRTtBQUNyRSxpQ0FBaUM7QUFDakMsdUNBQXVDO0FBQ3ZDLHFDQUFxQztBQUNyQyx1Q0FBdUM7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9GQUFvRjtBQUNwRixvRkFBb0Y7QUFDcEYsa0ZBQWtGO0FB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QTtBQUNBO0FBQ0EscUNBQXFDO0FBQ3JDO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTs7QUFFSjtBQUNBO0FBQ0E7QUFDQSxJQUFJOztBQUVKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBLElBQUk7O0FBRUo7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7O0FBRUo7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7Ozs7Ozs7Ozs7O0FDMU5EO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FB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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE1BQU07O0FBRU47QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBLEtBQUs7QUFDTDtBQUNBLElBQUk7QUFDSjs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxLQUFLO0FBQ0wsOENBQThDLFNBQVM7QUFDdkQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJOztBQUVKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7Ozs7Ozs7Ozs7OztBQzdhQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsTUFBTTs7QUFFTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLElBQUk7QUFDSjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxPQUFPO0FBQ1AsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFD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QSxNQUFNO0FBQ047QUFDQSxJQUFJO0FBQ0o7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsSUFBSTtBQUNKOztBQUVBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7O0FBRUEsMkJBQTJCLHNCQUFzQjtBQUNqRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTs7QUFFSjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsSUFBSTs7QUFFSjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTs7QUFFSjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBLEdBQUc7QUFDSDtBQUNBOztBQUVBLHdDQUF3QztBQUN4Qzs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLElBQUk7O0FBRUo7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsSUFBSTtBQUNKLEdBQUc7QUFDSDs7QUFFQTs7QUFFQSw2QkFBNkI7QUFDN0Is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O0FBRUE7O0FBRUE7O0FBRUE7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxJQUFJO0FBQ0o7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOzs7Ozs7Ozs7Ozs7QUN0TkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7Ozs7Ozs7Ozs7O0FDM0NEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFM7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTs7QUFFQTtBQUNBLHVCQUF1Qjs7QUFFdkI7QUFDQSxvQ0FBb0M7O0FBRXBDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxTQUFTOzs7O0FBSVQ7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0EsYUFBYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSx1QkFBdUI7O0FBRXZCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQSxTQUFTO0FBQ1Q7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLCtCOztBQUVBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNB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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTs7QUFFSjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNuSkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxJQUFJO0FBQ0osR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjs7QUFFQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBLGtDQUFrQztBQUNsQyxDQUFD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QTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIOztBQUVBO0FBQ0EsNkJBQTZCLFNBQVM7QUFDdEMsR0FBRzs7QUFFSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxJQUFJOztBQUVKO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRyxFQUFFO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOzs7Ozs7Ozs7Ozs7QUM5TkQ7Ozs7Ozs7Ozs7OztBQ0FBLHVDIiwiZmlsZSI6ImRldi5hcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHRmdW5jdGlvbiBob3REaXNwb3NlQ2h1bmsoY2h1bmtJZCkge1xuIFx0XHRkZWxldGUgaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdO1xuIFx0fVxuIFx0dmFyIHBhcmVudEhvdFVwZGF0ZUNhbGxiYWNrID0gd2luZG93W1wid2VicGFja0hvdFVwZGF0ZVwiXTtcbiBcdHdpbmRvd1tcIndlYnBhY2tIb3RVcGRhdGVcIl0gPSAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW51c2VkLXZhcnNcbiBcdGZ1bmN0aW9uIHdlYnBhY2tIb3RVcGRhdGVDYWxsYmFjayhjaHVua0lkLCBtb3JlTW9kdWxlcykge1xuIFx0XHRob3RBZGRVcGRhdGVDaHVuayhjaHVua0lkLCBtb3JlTW9kdWxlcyk7XG4gXHRcdGlmIChwYXJlbnRIb3RVcGRhdGVDYWxsYmFjaykgcGFyZW50SG90VXBkYXRlQ2FsbGJhY2soY2h1bmtJZCwgbW9yZU1vZHVsZXMpO1xuIFx0fSA7XG5cbiBcdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bnVzZWQtdmFyc1xuIFx0ZnVuY3Rpb24gaG90RG93bmxvYWRVcGRhdGVDaHVuayhjaHVua0lkKSB7XG4gXHRcdHZhciBzY3JpcHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2NyaXB0XCIpO1xuIFx0XHRzY3JpcHQuY2hhcnNldCA9IFwidXRmLThcIjtcbiBcdFx0c2NyaXB0LnNyYyA9IF9fd2VicGFja19yZXF1aXJlX18ucCArIFwiXCIgKyBjaHVua0lkICsgXCIuXCIgKyBob3RDdXJyZW50SGFzaCArIFwiLmhvdC11cGRhdGUuanNcIjtcbiBcdFx0aWYgKG51bGwpIHNjcmlwdC5jcm9zc09yaWdpbiA9IG51bGw7XG4gXHRcdGRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQoc2NyaXB0KTtcbiBcdH1cblxuIFx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVudXNlZC12YXJzXG4gXHRmdW5jdGlvbiBob3REb3dubG9hZE1hbmlmZXN0KHJlcXVlc3RUaW1lb3V0KSB7XG4gXHRcdHJlcXVlc3RUaW1lb3V0ID0gcmVxdWVzdFRpbWVvdXQgfHwgMTAwMDA7XG4gXHRcdHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbihyZXNvbHZlLCByZWplY3QpIHtcbiBcdFx0XHRpZiAodHlwZW9mIFhNTEh0dHBSZXF1ZXN0ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gXHRcdFx0XHRyZXR1cm4gcmVqZWN0KG5ldyBFcnJvcihcIk5vIGJyb3dzZXIgc3VwcG9ydFwiKSk7XG4gXHRcdFx0fVxuIFx0XHRcdHRyeSB7XG4gXHRcdFx0XHR2YXIgcmVxdWVzdCA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xuIFx0XHRcdFx0dmFyIHJlcXVlc3RQYXRoID0gX193ZWJwYWNrX3JlcXVpcmVfXy5wICsgXCJcIiArIGhvdEN1cnJlbnRIYXNoICsgXCIuaG90LXVwZGF0ZS5qc29uXCI7XG4gXHRcdFx0XHRyZXF1ZXN0Lm9wZW4oXCJHRVRcIiwgcmVxdWVzdFBhdGgsIHRydWUpO1xuIFx0XHRcdFx0cmVxdWVzdC50aW1lb3V0ID0gcmVxdWVzdFRpbWVvdXQ7XG4gXHRcdFx0XHRyZXF1ZXN0LnNlbmQobnVsbCk7XG4gXHRcdFx0fSBjYXRjaCAoZXJyKSB7XG4gXHRcdFx0XHRyZXR1cm4gcmVqZWN0KGVycik7XG4gXHRcdFx0fVxuIFx0XHRcdHJlcXVlc3Qub25yZWFkeXN0YXRlY2hhbmdlID0gZnVuY3Rpb24oKSB7XG4gXHRcdFx0XHRpZiAocmVxdWVzdC5yZWFkeVN0YXRlICE9PSA0KSByZXR1cm47XG4gXHRcdFx0XHRpZiAocmVxdWVzdC5zdGF0dXMgPT09IDApIHtcbiBcdFx0XHRcdFx0Ly8gdGltZW91dFxuIFx0XHRcdFx0XHRyZWplY3QoXG4gXHRcdFx0XHRcdFx0bmV3IEVycm9yKFwiTWFuaWZlc3QgcmVxdWVzdCB0byBcIiArIHJlcXVlc3RQYXRoICsgXCIgdGltZWQgb3V0LlwiKVxuIFx0XHRcdFx0XHQpO1xuIFx0XHRcdFx0fSBlbHNlIGlmIChyZXF1ZXN0LnN0YXR1cyA9PT0gNDA0KSB7XG4gXHRcdFx0XHRcdC8vIG5vIHVwZGF0ZSBhdmFpbGFibGVcbiBcdFx0XHRcdFx0cmVzb2x2ZSgpO1xuIFx0XHRcdFx0fSBlbHNlIGlmIChyZXF1ZXN0LnN0YXR1cyAhPT0gMjAwICYmIHJlcXVlc3Quc3RhdHVzICE9PSAzMDQpIHtcbiBcdFx0XHRcdFx0Ly8gb3RoZXIgZmFpbHVyZVxuIFx0XHRcdFx0XHRyZWplY3QobmV3IEVycm9yKFwiTWFuaWZlc3QgcmVxdWVzdCB0byBcIiArIHJlcXVlc3RQYXRoICsgXCIgZmFpbGVkLlwiKSk7XG4gXHRcdFx0XHR9IGVsc2Uge1xuIFx0XHRcdFx0XHQvLyBzdWNjZXNzXG4gXHRcdFx0XHRcdHRyeSB7XG4gXHRcdFx0XHRcdFx0dmFyIHVwZGF0ZSA9IEpTT04ucGFyc2UocmVxdWVzdC5yZXNwb25zZVRleHQpO1xuIFx0XHRcdFx0XHR9IGNhdGNoIChlKSB7XG4gXHRcdFx0XHRcdFx0cmVqZWN0KGUpO1xuIFx0XHRcdFx0XHRcdHJldHVybjtcbiBcdFx0XHRcdFx0fVxuIFx0XHRcdFx0XHRyZXNvbHZlKHVwZGF0ZSk7XG4gXHRcdFx0XHR9XG4gXHRcdFx0fTtcbiBcdFx0fSk7XG4gXHR9XG5cbiBcdHZhciBob3RBcHBseU9uVXBkYXRlID0gdHJ1ZTtcbiBcdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bnVzZWQtdmFyc1xuIFx0dmFyIGhvdEN1cnJlbnRIYXNoID0gXCI2MjYwMzA5MTA3YTJiOGEzODExN1wiO1xuIFx0dmFyIGhvdFJlcXVlc3RUaW1lb3V0ID0gMTAwMDA7XG4gXHR2YXIgaG90Q3VycmVudE1vZHVsZURhdGEgPSB7fTtcbiBcdHZhciBob3RDdXJyZW50Q2hpbGRNb2R1bGU7XG4gXHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW51c2VkLXZhcnNcbiBcdHZhciBob3RDdXJyZW50UGFyZW50cyA9IFtdO1xuIFx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVudXNlZC12YXJzXG4gXHR2YXIgaG90Q3VycmVudFBhcmVudHNUZW1wID0gW107XG5cbiBcdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bnVzZWQtdmFyc1xuIFx0ZnVuY3Rpb24gaG90Q3JlYXRlUmVxdWlyZShtb2R1bGVJZCkge1xuIFx0XHR2YXIgbWUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0aWYgKCFtZSkgcmV0dXJuIF9fd2VicGFja19yZXF1aXJlX187XG4gXHRcdHZhciBmbiA9IGZ1bmN0aW9uKHJlcXVlc3QpIHtcbiBcdFx0XHRpZiAobWUuaG90LmFjdGl2ZSkge1xuIFx0XHRcdFx0aWYgKGluc3RhbGxlZE1vZHVsZXNbcmVxdWVzdF0pIHtcbiBcdFx0XHRcdFx0aWYgKGluc3RhbGxlZE1vZHVsZXNbcmVxdWVzdF0ucGFyZW50cy5pbmRleE9mKG1vZHVsZUlkKSA9PT0gLTEpIHtcbiBcdFx0XHRcdFx0XHRpbnN0YWxsZWRNb2R1bGVzW3JlcXVlc3RdLnBhcmVudHMucHVzaChtb2R1bGVJZCk7XG4gXHRcdFx0XHRcdH1cbiBcdFx0XHRcdH0gZWxzZSB7XG4gXHRcdFx0XHRcdGhvdEN1cnJlbnRQYXJlbnRzID0gW21vZHVsZUlkXTtcbiBcdFx0XHRcdFx0aG90Q3VycmVudENoaWxkTW9kdWxlID0gcmVxdWVzdDtcbiBcdFx0XHRcdH1cbiBcdFx0XHRcdGlmIChtZS5jaGlsZHJlbi5pbmRleE9mKHJlcXVlc3QpID09PSAtMSkge1xuIFx0XHRcdFx0XHRtZS5jaGlsZHJlbi5wdXNoKHJlcXVlc3QpO1xuIFx0XHRcdFx0fVxuIFx0XHRcdH0gZWxzZSB7XG4gXHRcdFx0XHRjb25zb2xlLndhcm4oXG4gXHRcdFx0XHRcdFwiW0hNUl0gdW5leHBlY3RlZCByZXF1aXJlKFwiICtcbiBcdFx0XHRcdFx0XHRyZXF1ZXN0ICtcbiBcdFx0XHRcdFx0XHRcIikgZnJvbSBkaXNwb3NlZCBtb2R1bGUgXCIgK1xuIFx0XHRcdFx0XHRcdG1vZHVsZUlkXG4gXHRcdFx0XHQpO1xuIFx0XHRcdFx0aG90Q3VycmVudFBhcmVudHMgPSBbXTtcbiBcdFx0XHR9XG4gXHRcdFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18ocmVxdWVzdCk7XG4gXHRcdH07XG4gXHRcdHZhciBPYmplY3RGYWN0b3J5ID0gZnVuY3Rpb24gT2JqZWN0RmFjdG9yeShuYW1lKSB7XG4gXHRcdFx0cmV0dXJuIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGZ1bmN0aW9uKCkge1xuIFx0XHRcdFx0XHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfX1tuYW1lXTtcbiBcdFx0XHRcdH0sXG4gXHRcdFx0XHRzZXQ6IGZ1bmN0aW9uKHZhbHVlKSB7XG4gXHRcdFx0XHRcdF9fd2VicGFja19yZXF1aXJlX19bbmFtZV0gPSB2YWx1ZTtcbiBcdFx0XHRcdH1cbiBcdFx0XHR9O1xuIFx0XHR9O1xuIFx0XHRmb3IgKHZhciBuYW1lIGluIF9fd2VicGFja19yZXF1aXJlX18pIHtcbiBcdFx0XHRpZiAoXG4gXHRcdFx0XHRPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoX193ZWJwYWNrX3JlcXVpcmVfXywgbmFtZSkgJiZcbiBcdFx0XHRcdG5hbWUgIT09IFwiZVwiICYmXG4gXHRcdFx0XHRuYW1lICE9PSBcInRcIlxuIFx0XHRcdCkge1xuIFx0XHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGZuLCBuYW1lLCBPYmplY3RGYWN0b3J5KG5hbWUpKTtcbiBcdFx0XHR9XG4gXHRcdH1cbiBcdFx0Zm4uZSA9IGZ1bmN0aW9uKGNodW5rSWQpIHtcbiBcdFx0XHRpZiAoaG90U3RhdHVzID09PSBcInJlYWR5XCIpIGhvdFNldFN0YXR1cyhcInByZXBhcmVcIik7XG4gXHRcdFx0aG90Q2h1bmtzTG9hZGluZysrO1xuIFx0XHRcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fLmUoY2h1bmtJZCkudGhlbihmaW5pc2hDaHVua0xvYWRpbmcsIGZ1bmN0aW9uKGVycikge1xuIFx0XHRcdFx0ZmluaXNoQ2h1bmtMb2FkaW5nKCk7XG4gXHRcdFx0XHR0aHJvdyBlcnI7XG4gXHRcdFx0fSk7XG5cbiBcdFx0XHRmdW5jdGlvbiBmaW5pc2hDaHVua0xvYWRpbmcoKSB7XG4gXHRcdFx0XHRob3RDaHVua3NMb2FkaW5nLS07XG4gXHRcdFx0XHRpZiAoaG90U3RhdHVzID09PSBcInByZXBhcmVcIikge1xuIFx0XHRcdFx0XHRpZiAoIWhvdFdhaXRpbmdGaWxlc01hcFtjaHVua0lkXSkge1xuIFx0XHRcdFx0XHRcdGhvdEVuc3VyZVVwZGF0ZUNodW5rKGNodW5rSWQpO1xuIFx0XHRcdFx0XHR9XG4gXHRcdFx0XHRcdGlmIChob3RDaHVua3NMb2FkaW5nID09PSAwICYmIGhvdFdhaXRpbmdGaWxlcyA9PT0gMCkge1xuIFx0XHRcdFx0XHRcdGhvdFVwZGF0ZURvd25sb2FkZWQoKTtcbiBcdFx0XHRcdFx0fVxuIFx0XHRcdFx0fVxuIFx0XHRcdH1cbiBcdFx0fTtcbiBcdFx0Zm4udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdFx0aWYgKG1vZGUgJiAxKSB2YWx1ZSA9IGZuKHZhbHVlKTtcbiBcdFx0XHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXy50KHZhbHVlLCBtb2RlICYgfjEpO1xuIFx0XHR9O1xuIFx0XHRyZXR1cm4gZm47XG4gXHR9XG5cbiBcdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bnVzZWQtdmFyc1xuIFx0ZnVuY3Rpb24gaG90Q3JlYXRlTW9kdWxlKG1vZHVsZUlkKSB7XG4gXHRcdHZhciBob3QgPSB7XG4gXHRcdFx0Ly8gcHJpdmF0ZSBzdHVmZlxuIFx0XHRcdF9hY2NlcHRlZERlcGVuZGVuY2llczoge30sXG4gXHRcdFx0X2RlY2xpbmVkRGVwZW5kZW5jaWVzOiB7fSxcbiBcdFx0XHRfc2VsZkFjY2VwdGVkOiBmYWxzZSxcbiBcdFx0XHRfc2VsZkRlY2xpbmVkOiBmYWxzZSxcbiBcdFx0XHRfc2VsZkludmFsaWRhdGVkOiBmYWxzZSxcbiBcdFx0XHRfZGlzcG9zZUhhbmRsZXJzOiBbXSxcbiBcdFx0XHRfbWFpbjogaG90Q3VycmVudENoaWxkTW9kdWxlICE9PSBtb2R1bGVJZCxcblxuIFx0XHRcdC8vIE1vZHVsZSBBUElcbiBcdFx0XHRhY3RpdmU6IHRydWUsXG4gXHRcdFx0YWNjZXB0OiBmdW5jdGlvbihkZXAsIGNhbGxiYWNrKSB7XG4gXHRcdFx0XHRpZiAoZGVwID09PSB1bmRlZmluZWQpIGhvdC5fc2VsZkFjY2VwdGVkID0gdHJ1ZTtcbiBcdFx0XHRcdGVsc2UgaWYgKHR5cGVvZiBkZXAgPT09IFwiZnVuY3Rpb25cIikgaG90Ll9zZWxmQWNjZXB0ZWQgPSBkZXA7XG4gXHRcdFx0XHRlbHNlIGlmICh0eXBlb2YgZGVwID09PSBcIm9iamVjdFwiKVxuIFx0XHRcdFx0XHRmb3IgKHZhciBpID0gMDsgaSA8IGRlcC5sZW5ndGg7IGkrKylcbiBcdFx0XHRcdFx0XHRob3QuX2FjY2VwdGVkRGVwZW5kZW5jaWVzW2RlcFtpXV0gPSBjYWxsYmFjayB8fCBmdW5jdGlvbigpIHt9O1xuIFx0XHRcdFx0ZWxzZSBob3QuX2FjY2VwdGVkRGVwZW5kZW5jaWVzW2RlcF0gPSBjYWxsYmFjayB8fCBmdW5jdGlvbigpIHt9O1xuIFx0XHRcdH0sXG4gXHRcdFx0ZGVjbGluZTogZnVuY3Rpb24oZGVwKSB7XG4gXHRcdFx0XHRpZiAoZGVwID09PSB1bmRlZmluZWQpIGhvdC5fc2VsZkRlY2xpbmVkID0gdHJ1ZTtcbiBcdFx0XHRcdGVsc2UgaWYgKHR5cGVvZiBkZXAgPT09IFwib2JqZWN0XCIpXG4gXHRcdFx0XHRcdGZvciAodmFyIGkgPSAwOyBpIDwgZGVwLmxlbmd0aDsgaSsrKVxuIFx0XHRcdFx0XHRcdGhvdC5fZGVjbGluZWREZXBlbmRlbmNpZXNbZGVwW2ldXSA9IHRydWU7XG4gXHRcdFx0XHRlbHNlIGhvdC5fZGVjbGluZWREZXBlbmRlbmNpZXNbZGVwXSA9IHRydWU7XG4gXHRcdFx0fSxcbiBcdFx0XHRkaXNwb3NlOiBmdW5jdGlvbihjYWxsYmFjaykge1xuIFx0XHRcdFx0aG90Ll9kaXNwb3NlSGFuZGxlcnMucHVzaChjYWxsYmFjayk7XG4gXHRcdFx0fSxcbiBcdFx0XHRhZGREaXNwb3NlSGFuZGxlcjogZnVuY3Rpb24oY2FsbGJhY2spIHtcbiBcdFx0XHRcdGhvdC5fZGlzcG9zZUhhbmRsZXJzLnB1c2goY2FsbGJhY2spO1xuIFx0XHRcdH0sXG4gXHRcdFx0cmVtb3ZlRGlzcG9zZUhhbmRsZXI6IGZ1bmN0aW9uKGNhbGxiYWNrKSB7XG4gXHRcdFx0XHR2YXIgaWR4ID0gaG90Ll9kaXNwb3NlSGFuZGxlcnMuaW5kZXhPZihjYWxsYmFjayk7XG4gXHRcdFx0XHRpZiAoaWR4ID49IDApIGhvdC5fZGlzcG9zZUhhbmRsZXJzLnNwbGljZShpZHgsIDEpO1xuIFx0XHRcdH0sXG4gXHRcdFx0aW52YWxpZGF0ZTogZnVuY3Rpb24oKSB7XG4gXHRcdFx0XHR0aGlzLl9zZWxmSW52YWxpZGF0ZWQgPSB0cnVlO1xuIFx0XHRcdFx0c3dpdGNoIChob3RTdGF0dXMpIHtcbiBcdFx0XHRcdFx0Y2FzZSBcImlkbGVcIjpcbiBcdFx0XHRcdFx0XHRob3RVcGRhdGUgPSB7fTtcbiBcdFx0XHRcdFx0XHRob3RVcGRhdGVbbW9kdWxlSWRdID0gbW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdFx0XHRcdFx0aG90U2V0U3RhdHVzKFwicmVhZHlcIik7XG4gXHRcdFx0XHRcdFx0YnJlYWs7XG4gXHRcdFx0XHRcdGNhc2UgXCJyZWFkeVwiOlxuIFx0XHRcdFx0XHRcdGhvdEFwcGx5SW52YWxpZGF0ZWRNb2R1bGUobW9kdWxlSWQpO1xuIFx0XHRcdFx0XHRcdGJyZWFrO1xuIFx0XHRcdFx0XHRjYXNlIFwicHJlcGFyZVwiOlxuIFx0XHRcdFx0XHRjYXNlIFwiY2hlY2tcIjpcbiBcdFx0XHRcdFx0Y2FzZSBcImRpc3Bvc2VcIjpcbiBcdFx0XHRcdFx0Y2FzZSBcImFwcGx5XCI6XG4gXHRcdFx0XHRcdFx0KGhvdFF1ZXVlZEludmFsaWRhdGVkTW9kdWxlcyA9XG4gXHRcdFx0XHRcdFx0XHRob3RRdWV1ZWRJbnZhbGlkYXRlZE1vZHVsZXMgfHwgW10pLnB1c2gobW9kdWxlSWQpO1xuIFx0XHRcdFx0XHRcdGJyZWFrO1xuIFx0XHRcdFx0XHRkZWZhdWx0OlxuIFx0XHRcdFx0XHRcdC8vIGlnbm9yZSByZXF1ZXN0cyBpbiBlcnJvciBzdGF0ZXNcbiBcdFx0XHRcdFx0XHRicmVhaztcbiBcdFx0XHRcdH1cbiBcdFx0XHR9LFxuXG4gXHRcdFx0Ly8gTWFuYWdlbWVudCBBUElcbiBcdFx0XHRjaGVjazogaG90Q2hlY2ssXG4gXHRcdFx0YXBwbHk6IGhvdEFwcGx5LFxuIFx0XHRcdHN0YXR1czogZnVuY3Rpb24obCkge1xuIFx0XHRcdFx0aWYgKCFsKSByZXR1cm4gaG90U3RhdHVzO1xuIFx0XHRcdFx0aG90U3RhdHVzSGFuZGxlcnMucHVzaChsKTtcbiBcdFx0XHR9LFxuIFx0XHRcdGFkZFN0YXR1c0hhbmRsZXI6IGZ1bmN0aW9uKGwpIHtcbiBcdFx0XHRcdGhvdFN0YXR1c0hhbmRsZXJzLnB1c2gobCk7XG4gXHRcdFx0fSxcbiBcdFx0XHRyZW1vdmVTdGF0dXNIYW5kbGVyOiBmdW5jdGlvbihsKSB7XG4gXHRcdFx0XHR2YXIgaWR4ID0gaG90U3RhdHVzSGFuZGxlcnMuaW5kZXhPZihsKTtcbiBcdFx0XHRcdGlmIChpZHggPj0gMCkgaG90U3RhdHVzSGFuZGxlcnMuc3BsaWNlKGlkeCwgMSk7XG4gXHRcdFx0fSxcblxuIFx0XHRcdC8vaW5oZXJpdCBmcm9tIHByZXZpb3VzIGRpc3Bvc2UgY2FsbFxuIFx0XHRcdGRhdGE6IGhvdEN1cnJlbnRNb2R1bGVEYXRhW21vZHVsZUlkXVxuIFx0XHR9O1xuIFx0XHRob3RDdXJyZW50Q2hpbGRNb2R1bGUgPSB1bmRlZmluZWQ7XG4gXHRcdHJldHVybiBob3Q7XG4gXHR9XG5cbiBcdHZhciBob3RTdGF0dXNIYW5kbGVycyA9IFtdO1xuIFx0dmFyIGhvdFN0YXR1cyA9IFwiaWRsZVwiO1xuXG4gXHRmdW5jdGlvbiBob3RTZXRTdGF0dXMobmV3U3RhdHVzKSB7XG4gXHRcdGhvdFN0YXR1cyA9IG5ld1N0YXR1cztcbiBcdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBob3RTdGF0dXNIYW5kbGVycy5sZW5ndGg7IGkrKylcbiBcdFx0XHRob3RTdGF0dXNIYW5kbGVyc1tpXS5jYWxsKG51bGwsIG5ld1N0YXR1cyk7XG4gXHR9XG5cbiBcdC8vIHdoaWxlIGRvd25sb2FkaW5nXG4gXHR2YXIgaG90V2FpdGluZ0ZpbGVzID0gMDtcbiBcdHZhciBob3RDaHVua3NMb2FkaW5nID0gMDtcbiBcdHZhciBob3RXYWl0aW5nRmlsZXNNYXAgPSB7fTtcbiBcdHZhciBob3RSZXF1ZXN0ZWRGaWxlc01hcCA9IHt9O1xuIFx0dmFyIGhvdEF2YWlsYWJsZUZpbGVzTWFwID0ge307XG4gXHR2YXIgaG90RGVmZXJyZWQ7XG5cbiBcdC8vIFRoZSB1cGRhdGUgaW5mb1xuIFx0dmFyIGhvdFVwZGF0ZSwgaG90VXBkYXRlTmV3SGFzaCwgaG90UXVldWVkSW52YWxpZGF0ZWRNb2R1bGVzO1xuXG4gXHRmdW5jdGlvbiB0b01vZHVsZUlkKGlkKSB7XG4gXHRcdHZhciBpc051bWJlciA9ICtpZCArIFwiXCIgPT09IGlkO1xuIFx0XHRyZXR1cm4gaXNOdW1iZXIgPyAraWQgOiBpZDtcbiBcdH1cblxuIFx0ZnVuY3Rpb24gaG90Q2hlY2soYXBwbHkpIHtcbiBcdFx0aWYgKGhvdFN0YXR1cyAhPT0gXCJpZGxlXCIpIHtcbiBcdFx0XHR0aHJvdyBuZXcgRXJyb3IoXCJjaGVjaygpIGlzIG9ubHkgYWxsb3dlZCBpbiBpZGxlIHN0YXR1c1wiKTtcbiBcdFx0fVxuIFx0XHRob3RBcHBseU9uVXBkYXRlID0gYXBwbHk7XG4gXHRcdGhvdFNldFN0YXR1cyhcImNoZWNrXCIpO1xuIFx0XHRyZXR1cm4gaG90RG93bmxvYWRNYW5pZmVzdChob3RSZXF1ZXN0VGltZW91dCkudGhlbihmdW5jdGlvbih1cGRhdGUpIHtcbiBcdFx0XHRpZiAoIXVwZGF0ZSkge1xuIFx0XHRcdFx0aG90U2V0U3RhdHVzKGhvdEFwcGx5SW52YWxpZGF0ZWRNb2R1bGVzKCkgPyBcInJlYWR5XCIgOiBcImlkbGVcIik7XG4gXHRcdFx0XHRyZXR1cm4gbnVsbDtcbiBcdFx0XHR9XG4gXHRcdFx0aG90UmVxdWVzdGVkRmlsZXNNYXAgPSB7fTtcbiBcdFx0XHRob3RXYWl0aW5nRmlsZXNNYXAgPSB7fTtcbiBcdFx0XHRob3RBdmFpbGFibGVGaWxlc01hcCA9IHVwZGF0ZS5jO1xuIFx0XHRcdGhvdFVwZGF0ZU5ld0hhc2ggPSB1cGRhdGUuaDtcblxuIFx0XHRcdGhvdFNldFN0YXR1cyhcInByZXBhcmVcIik7XG4gXHRcdFx0dmFyIHByb21pc2UgPSBuZXcgUHJvbWlzZShmdW5jdGlvbihyZXNvbHZlLCByZWplY3QpIHtcbiBcdFx0XHRcdGhvdERlZmVycmVkID0ge1xuIFx0XHRcdFx0XHRyZXNvbHZlOiByZXNvbHZlLFxuIFx0XHRcdFx0XHRyZWplY3Q6IHJlamVjdFxuIFx0XHRcdFx0fTtcbiBcdFx0XHR9KTtcbiBcdFx0XHRob3RVcGRhdGUgPSB7fTtcbiBcdFx0XHR2YXIgY2h1bmtJZCA9IFwiYXBwXCI7XG4gXHRcdFx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWxvbmUtYmxvY2tzXG4gXHRcdFx0e1xuIFx0XHRcdFx0aG90RW5zdXJlVXBkYXRlQ2h1bmsoY2h1bmtJZCk7XG4gXHRcdFx0fVxuIFx0XHRcdGlmIChcbiBcdFx0XHRcdGhvdFN0YXR1cyA9PT0gXCJwcmVwYXJlXCIgJiZcbiBcdFx0XHRcdGhvdENodW5rc0xvYWRpbmcgPT09IDAgJiZcbiBcdFx0XHRcdGhvdFdhaXRpbmdGaWxlcyA9PT0gMFxuIFx0XHRcdCkge1xuIFx0XHRcdFx0aG90VXBkYXRlRG93bmxvYWRlZCgpO1xuIFx0XHRcdH1cbiBcdFx0XHRyZXR1cm4gcHJvbWlzZTtcbiBcdFx0fSk7XG4gXHR9XG5cbiBcdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bnVzZWQtdmFyc1xuIFx0ZnVuY3Rpb24gaG90QWRkVXBkYXRlQ2h1bmsoY2h1bmtJZCwgbW9yZU1vZHVsZXMpIHtcbiBcdFx0aWYgKCFob3RBdmFpbGFibGVGaWxlc01hcFtjaHVua0lkXSB8fCAhaG90UmVxdWVzdGVkRmlsZXNNYXBbY2h1bmtJZF0pXG4gXHRcdFx0cmV0dXJuO1xuIFx0XHRob3RSZXF1ZXN0ZWRGaWxlc01hcFtjaHVua0lkXSA9IGZhbHNlO1xuIFx0XHRmb3IgKHZhciBtb2R1bGVJZCBpbiBtb3JlTW9kdWxlcykge1xuIFx0XHRcdGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobW9yZU1vZHVsZXMsIG1vZHVsZUlkKSkge1xuIFx0XHRcdFx0aG90VXBkYXRlW21vZHVsZUlkXSA9IG1vcmVNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0XHR9XG4gXHRcdH1cbiBcdFx0aWYgKC0taG90V2FpdGluZ0ZpbGVzID09PSAwICYmIGhvdENodW5rc0xvYWRpbmcgPT09IDApIHtcbiBcdFx0XHRob3RVcGRhdGVEb3dubG9hZGVkKCk7XG4gXHRcdH1cbiBcdH1cblxuIFx0ZnVuY3Rpb24gaG90RW5zdXJlVXBkYXRlQ2h1bmsoY2h1bmtJZCkge1xuIFx0XHRpZiAoIWhvdEF2YWlsYWJsZUZpbGVzTWFwW2NodW5rSWRdKSB7XG4gXHRcdFx0aG90V2FpdGluZ0ZpbGVzTWFwW2NodW5rSWRdID0gdHJ1ZTtcbiBcdFx0fSBlbHNlIHtcbiBcdFx0XHRob3RSZXF1ZXN0ZWRGaWxlc01hcFtjaHVua0lkXSA9IHRydWU7XG4gXHRcdFx0aG90V2FpdGluZ0ZpbGVzKys7XG4gXHRcdFx0aG90RG93bmxvYWRVcGRhdGVDaHVuayhjaHVua0lkKTtcbiBcdFx0fVxuIFx0fVxuXG4gXHRmdW5jdGlvbiBob3RVcGRhdGVEb3dubG9hZGVkKCkge1xuIFx0XHRob3RTZXRTdGF0dXMoXCJyZWFkeVwiKTtcbiBcdFx0dmFyIGRlZmVycmVkID0gaG90RGVmZXJyZWQ7XG4gXHRcdGhvdERlZmVycmVkID0gbnVsbDtcbiBcdFx0aWYgKCFkZWZlcnJlZCkgcmV0dXJuO1xuIFx0XHRpZiAoaG90QXBwbHlPblVwZGF0ZSkge1xuIFx0XHRcdC8vIFdyYXAgZGVmZXJyZWQgb2JqZWN0IGluIFByb21pc2UgdG8gbWFyayBpdCBhcyBhIHdlbGwtaGFuZGxlZCBQcm9taXNlIHRvXG4gXHRcdFx0Ly8gYXZvaWQgdHJpZ2dlcmluZyB1bmNhdWdodCBleGNlcHRpb24gd2FybmluZyBpbiBDaHJvbWUuXG4gXHRcdFx0Ly8gU2VlIGh0dHBzOi8vYnVncy5jaHJvbWl1bS5vcmcvcC9jaHJvbWl1bS9pc3N1ZXMvZGV0YWlsP2lkPTQ2NTY2NlxuIFx0XHRcdFByb21pc2UucmVzb2x2ZSgpXG4gXHRcdFx0XHQudGhlbihmdW5jdGlvbigpIHtcbiBcdFx0XHRcdFx0cmV0dXJuIGhvdEFwcGx5KGhvdEFwcGx5T25VcGRhdGUpO1xuIFx0XHRcdFx0fSlcbiBcdFx0XHRcdC50aGVuKFxuIFx0XHRcdFx0XHRmdW5jdGlvbihyZXN1bHQpIHtcbiBcdFx0XHRcdFx0XHRkZWZlcnJlZC5yZXNvbHZlKHJlc3VsdCk7XG4gXHRcdFx0XHRcdH0sXG4gXHRcdFx0XHRcdGZ1bmN0aW9uKGVycikge1xuIFx0XHRcdFx0XHRcdGRlZmVycmVkLnJlamVjdChlcnIpO1xuIFx0XHRcdFx0XHR9XG4gXHRcdFx0XHQpO1xuIFx0XHR9IGVsc2Uge1xuIFx0XHRcdHZhciBvdXRkYXRlZE1vZHVsZXMgPSBbXTtcbiBcdFx0XHRmb3IgKHZhciBpZCBpbiBob3RVcGRhdGUpIHtcbiBcdFx0XHRcdGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoaG90VXBkYXRlLCBpZCkpIHtcbiBcdFx0XHRcdFx0b3V0ZGF0ZWRNb2R1bGVzLnB1c2godG9Nb2R1bGVJZChpZCkpO1xuIFx0XHRcdFx0fVxuIFx0XHRcdH1cbiBcdFx0XHRkZWZlcnJlZC5yZXNvbHZlKG91dGRhdGVkTW9kdWxlcyk7XG4gXHRcdH1cbiBcdH1cblxuIFx0ZnVuY3Rpb24gaG90QXBwbHkob3B0aW9ucykge1xuIFx0XHRpZiAoaG90U3RhdHVzICE9PSBcInJlYWR5XCIpXG4gXHRcdFx0dGhyb3cgbmV3IEVycm9yKFwiYXBwbHkoKSBpcyBvbmx5IGFsbG93ZWQgaW4gcmVhZHkgc3RhdHVzXCIpO1xuIFx0XHRvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiBcdFx0cmV0dXJuIGhvdEFwcGx5SW50ZXJuYWwob3B0aW9ucyk7XG4gXHR9XG5cbiBcdGZ1bmN0aW9uIGhvdEFwcGx5SW50ZXJuYWwob3B0aW9ucykge1xuIFx0XHRob3RBcHBseUludmFsaWRhdGVkTW9kdWxlcygpO1xuXG4gXHRcdHZhciBjYjtcbiBcdFx0dmFyIGk7XG4gXHRcdHZhciBqO1xuIFx0XHR2YXIgbW9kdWxlO1xuIFx0XHR2YXIgbW9kdWxlSWQ7XG5cbiBcdFx0ZnVuY3Rpb24gZ2V0QWZmZWN0ZWRTdHVmZih1cGRhdGVNb2R1bGVJZCkge1xuIFx0XHRcdHZhciBvdXRkYXRlZE1vZHVsZXMgPSBbdXBkYXRlTW9kdWxlSWRdO1xuIFx0XHRcdHZhciBvdXRkYXRlZERlcGVuZGVuY2llcyA9IHt9O1xuXG4gXHRcdFx0dmFyIHF1ZXVlID0gb3V0ZGF0ZWRNb2R1bGVzLm1hcChmdW5jdGlvbihpZCkge1xuIFx0XHRcdFx0cmV0dXJuIHtcbiBcdFx0XHRcdFx0Y2hhaW46IFtpZF0sXG4gXHRcdFx0XHRcdGlkOiBpZFxuIFx0XHRcdFx0fTtcbiBcdFx0XHR9KTtcbiBcdFx0XHR3aGlsZSAocXVldWUubGVuZ3RoID4gMCkge1xuIFx0XHRcdFx0dmFyIHF1ZXVlSXRlbSA9IHF1ZXVlLnBvcCgpO1xuIFx0XHRcdFx0dmFyIG1vZHVsZUlkID0gcXVldWVJdGVtLmlkO1xuIFx0XHRcdFx0dmFyIGNoYWluID0gcXVldWVJdGVtLmNoYWluO1xuIFx0XHRcdFx0bW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdFx0XHRpZiAoXG4gXHRcdFx0XHRcdCFtb2R1bGUgfHxcbiBcdFx0XHRcdFx0KG1vZHVsZS5ob3QuX3NlbGZBY2NlcHRlZCAmJiAhbW9kdWxlLmhvdC5fc2VsZkludmFsaWRhdGVkKVxuIFx0XHRcdFx0KVxuIFx0XHRcdFx0XHRjb250aW51ZTtcbiBcdFx0XHRcdGlmIChtb2R1bGUuaG90Ll9zZWxmRGVjbGluZWQpIHtcbiBcdFx0XHRcdFx0cmV0dXJuIHtcbiBcdFx0XHRcdFx0XHR0eXBlOiBcInNlbGYtZGVjbGluZWRcIixcbiBcdFx0XHRcdFx0XHRjaGFpbjogY2hhaW4sXG4gXHRcdFx0XHRcdFx0bW9kdWxlSWQ6IG1vZHVsZUlkXG4gXHRcdFx0XHRcdH07XG4gXHRcdFx0XHR9XG4gXHRcdFx0XHRpZiAobW9kdWxlLmhvdC5fbWFpbikge1xuIFx0XHRcdFx0XHRyZXR1cm4ge1xuIFx0XHRcdFx0XHRcdHR5cGU6IFwidW5hY2NlcHRlZFwiLFxuIFx0XHRcdFx0XHRcdGNoYWluOiBjaGFpbixcbiBcdFx0XHRcdFx0XHRtb2R1bGVJZDogbW9kdWxlSWRcbiBcdFx0XHRcdFx0fTtcbiBcdFx0XHRcdH1cbiBcdFx0XHRcdGZvciAodmFyIGkgPSAwOyBpIDwgbW9kdWxlLnBhcmVudHMubGVuZ3RoOyBpKyspIHtcbiBcdFx0XHRcdFx0dmFyIHBhcmVudElkID0gbW9kdWxlLnBhcmVudHNbaV07XG4gXHRcdFx0XHRcdHZhciBwYXJlbnQgPSBpbnN0YWxsZWRNb2R1bGVzW3BhcmVudElkXTtcbiBcdFx0XHRcdFx0aWYgKCFwYXJlbnQpIGNvbnRpbnVlO1xuIFx0XHRcdFx0XHRpZiAocGFyZW50LmhvdC5fZGVjbGluZWREZXBlbmRlbmNpZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0XHRcdFx0cmV0dXJuIHtcbiBcdFx0XHRcdFx0XHRcdHR5cGU6IFwiZGVjbGluZWRcIixcbiBcdFx0XHRcdFx0XHRcdGNoYWluOiBjaGFpbi5jb25jYXQoW3BhcmVudElkXSksXG4gXHRcdFx0XHRcdFx0XHRtb2R1bGVJZDogbW9kdWxlSWQsXG4gXHRcdFx0XHRcdFx0XHRwYXJlbnRJZDogcGFyZW50SWRcbiBcdFx0XHRcdFx0XHR9O1xuIFx0XHRcdFx0XHR9XG4gXHRcdFx0XHRcdGlmIChvdXRkYXRlZE1vZHVsZXMuaW5kZXhPZihwYXJlbnRJZCkgIT09IC0xKSBjb250aW51ZTtcbiBcdFx0XHRcdFx0aWYgKHBhcmVudC5ob3QuX2FjY2VwdGVkRGVwZW5kZW5jaWVzW21vZHVsZUlkXSkge1xuIFx0XHRcdFx0XHRcdGlmICghb3V0ZGF0ZWREZXBlbmRlbmNpZXNbcGFyZW50SWRdKVxuIFx0XHRcdFx0XHRcdFx0b3V0ZGF0ZWREZXBlbmRlbmNpZXNbcGFyZW50SWRdID0gW107XG4gXHRcdFx0XHRcdFx0YWRkQWxsVG9TZXQob3V0ZGF0ZWREZXBlbmRlbmNpZXNbcGFyZW50SWRdLCBbbW9kdWxlSWRdKTtcbiBcdFx0XHRcdFx0XHRjb250aW51ZTtcbiBcdFx0XHRcdFx0fVxuIFx0XHRcdFx0XHRkZWxldGUgb3V0ZGF0ZWREZXBlbmRlbmNpZXNbcGFyZW50SWRdO1xuIFx0XHRcdFx0XHRvdXRkYXRlZE1vZHVsZXMucHVzaChwYXJlbnRJZCk7XG4gXHRcdFx0XHRcdHF1ZXVlLnB1c2goe1xuIFx0XHRcdFx0XHRcdGNoYWluOiBjaGFpbi5jb25jYXQoW3BhcmVudElkXSksXG4gXHRcdFx0XHRcdFx0aWQ6IHBhcmVudElkXG4gXHRcdFx0XHRcdH0pO1xuIFx0XHRcdFx0fVxuIFx0XHRcdH1cblxuIFx0XHRcdHJldHVybiB7XG4gXHRcdFx0XHR0eXBlOiBcImFjY2VwdGVkXCIsXG4gXHRcdFx0XHRtb2R1bGVJZDogdXBkYXRlTW9kdWxlSWQsXG4gXHRcdFx0XHRvdXRkYXRlZE1vZHVsZXM6IG91dGRhdGVkTW9kdWxlcyxcbiBcdFx0XHRcdG91dGRhdGVkRGVwZW5kZW5jaWVzOiBvdXRkYXRlZERlcGVuZGVuY2llc1xuIFx0XHRcdH07XG4gXHRcdH1cblxuIFx0XHRmdW5jdGlvbiBhZGRBbGxUb1NldChhLCBiKSB7XG4gXHRcdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBiLmxlbmd0aDsgaSsrKSB7XG4gXHRcdFx0XHR2YXIgaXRlbSA9IGJbaV07XG4gXHRcdFx0XHRpZiAoYS5pbmRleE9mKGl0ZW0pID09PSAtMSkgYS5wdXNoKGl0ZW0pO1xuIFx0XHRcdH1cbiBcdFx0fVxuXG4gXHRcdC8vIGF0IGJlZ2luIGFsbCB1cGRhdGVzIG1vZHVsZXMgYXJlIG91dGRhdGVkXG4gXHRcdC8vIHRoZSBcIm91dGRhdGVkXCIgc3RhdHVzIGNhbiBwcm9wYWdhdGUgdG8gcGFyZW50cyBpZiB0aGV5IGRvbid0IGFjY2VwdCB0aGUgY2hpbGRyZW5cbiBcdFx0dmFyIG91dGRhdGVkRGVwZW5kZW5jaWVzID0ge307XG4gXHRcdHZhciBvdXRkYXRlZE1vZHVsZXMgPSBbXTtcbiBcdFx0dmFyIGFwcGxpZWRVcGRhdGUgPSB7fTtcblxuIFx0XHR2YXIgd2FyblVuZXhwZWN0ZWRSZXF1aXJlID0gZnVuY3Rpb24gd2FyblVuZXhwZWN0ZWRSZXF1aXJlKCkge1xuIFx0XHRcdGNvbnNvbGUud2FybihcbiBcdFx0XHRcdFwiW0hNUl0gdW5leHBlY3RlZCByZXF1aXJlKFwiICsgcmVzdWx0Lm1vZHVsZUlkICsgXCIpIHRvIGRpc3Bvc2VkIG1vZHVsZVwiXG4gXHRcdFx0KTtcbiBcdFx0fTtcblxuIFx0XHRmb3IgKHZhciBpZCBpbiBob3RVcGRhdGUpIHtcbiBcdFx0XHRpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGhvdFVwZGF0ZSwgaWQpKSB7XG4gXHRcdFx0XHRtb2R1bGVJZCA9IHRvTW9kdWxlSWQoaWQpO1xuIFx0XHRcdFx0LyoqIEB0eXBlIHtUT0RPfSAqL1xuIFx0XHRcdFx0dmFyIHJlc3VsdDtcbiBcdFx0XHRcdGlmIChob3RVcGRhdGVbaWRdKSB7XG4gXHRcdFx0XHRcdHJlc3VsdCA9IGdldEFmZmVjdGVkU3R1ZmYobW9kdWxlSWQpO1xuIFx0XHRcdFx0fSBlbHNlIHtcbiBcdFx0XHRcdFx0cmVzdWx0ID0ge1xuIFx0XHRcdFx0XHRcdHR5cGU6IFwiZGlzcG9zZWRcIixcbiBcdFx0XHRcdFx0XHRtb2R1bGVJZDogaWRcbiBcdFx0XHRcdFx0fTtcbiBcdFx0XHRcdH1cbiBcdFx0XHRcdC8qKiBAdHlwZSB7RXJyb3J8ZmFsc2V9ICovXG4gXHRcdFx0XHR2YXIgYWJvcnRFcnJvciA9IGZhbHNlO1xuIFx0XHRcdFx0dmFyIGRvQXBwbHkgPSBmYWxzZTtcbiBcdFx0XHRcdHZhciBkb0Rpc3Bvc2UgPSBmYWxzZTtcbiBcdFx0XHRcdHZhciBjaGFpbkluZm8gPSBcIlwiO1xuIFx0XHRcdFx0aWYgKHJlc3VsdC5jaGFpbikge1xuIFx0XHRcdFx0XHRjaGFpbkluZm8gPSBcIlxcblVwZGF0ZSBwcm9wYWdhdGlvbjogXCIgKyByZXN1bHQuY2hhaW4uam9pbihcIiAtPiBcIik7XG4gXHRcdFx0XHR9XG4gXHRcdFx0XHRzd2l0Y2ggKHJlc3VsdC50eXBlKSB7XG4gXHRcdFx0XHRcdGNhc2UgXCJzZWxmLWRlY2xpbmVkXCI6XG4gXHRcdFx0XHRcdFx0aWYgKG9wdGlvbnMub25EZWNsaW5lZCkgb3B0aW9ucy5vbkRlY2xpbmVkKHJlc3VsdCk7XG4gXHRcdFx0XHRcdFx0aWYgKCFvcHRpb25zLmlnbm9yZURlY2xpbmVkKVxuIFx0XHRcdFx0XHRcdFx0YWJvcnRFcnJvciA9IG5ldyBFcnJvcihcbiBcdFx0XHRcdFx0XHRcdFx0XCJBYm9ydGVkIGJlY2F1c2Ugb2Ygc2VsZiBkZWNsaW5lOiBcIiArXG4gXHRcdFx0XHRcdFx0XHRcdFx0cmVzdWx0Lm1vZHVsZUlkICtcbiBcdFx0XHRcdFx0XHRcdFx0XHRjaGFpbkluZm9cbiBcdFx0XHRcdFx0XHRcdCk7XG4gXHRcdFx0XHRcdFx0YnJlYWs7XG4gXHRcdFx0XHRcdGNhc2UgXCJkZWNsaW5lZFwiOlxuIFx0XHRcdFx0XHRcdGlmIChvcHRpb25zLm9uRGVjbGluZWQpIG9wdGlvbnMub25EZWNsaW5lZChyZXN1bHQpO1xuIFx0XHRcdFx0XHRcdGlmICghb3B0aW9ucy5pZ25vcmVEZWNsaW5lZClcbiBcdFx0XHRcdFx0XHRcdGFib3J0RXJyb3IgPSBuZXcgRXJyb3IoXG4gXHRcdFx0XHRcdFx0XHRcdFwiQWJvcnRlZCBiZWNhdXNlIG9mIGRlY2xpbmVkIGRlcGVuZGVuY3k6IFwiICtcbiBcdFx0XHRcdFx0XHRcdFx0XHRyZXN1bHQubW9kdWxlSWQgK1xuIFx0XHRcdFx0XHRcdFx0XHRcdFwiIGluIFwiICtcbiBcdFx0XHRcdFx0XHRcdFx0XHRyZXN1bHQucGFyZW50SWQgK1xuIFx0XHRcdFx0XHRcdFx0XHRcdGNoYWluSW5mb1xuIFx0XHRcdFx0XHRcdFx0KTtcbiBcdFx0XHRcdFx0XHRicmVhaztcbiBcdFx0XHRcdFx0Y2FzZSBcInVuYWNjZXB0ZWRcIjpcbiBcdFx0XHRcdFx0XHRpZiAob3B0aW9ucy5vblVuYWNjZXB0ZWQpIG9wdGlvbnMub25VbmFjY2VwdGVkKHJlc3VsdCk7XG4gXHRcdFx0XHRcdFx0aWYgKCFvcHRpb25zLmlnbm9yZVVuYWNjZXB0ZWQpXG4gXHRcdFx0XHRcdFx0XHRhYm9ydEVycm9yID0gbmV3IEVycm9yKFxuIFx0XHRcdFx0XHRcdFx0XHRcIkFib3J0ZWQgYmVjYXVzZSBcIiArIG1vZHVsZUlkICsgXCIgaXMgbm90IGFjY2VwdGVkXCIgKyBjaGFpbkluZm9cbiBcdFx0XHRcdFx0XHRcdCk7XG4gXHRcdFx0XHRcdFx0YnJlYWs7XG4gXHRcdFx0XHRcdGNhc2UgXCJhY2NlcHRlZFwiOlxuIFx0XHRcdFx0XHRcdGlmIChvcHRpb25zLm9uQWNjZXB0ZWQpIG9wdGlvbnMub25BY2NlcHRlZChyZXN1bHQpO1xuIFx0XHRcdFx0XHRcdGRvQXBwbHkgPSB0cnVlO1xuIFx0XHRcdFx0XHRcdGJyZWFrO1xuIFx0XHRcdFx0XHRjYXNlIFwiZGlzcG9zZWRcIjpcbiBcdFx0XHRcdFx0XHRpZiAob3B0aW9ucy5vbkRpc3Bvc2VkKSBvcHRpb25zLm9uRGlzcG9zZWQocmVzdWx0KTtcbiBcdFx0XHRcdFx0XHRkb0Rpc3Bvc2UgPSB0cnVlO1xuIFx0XHRcdFx0XHRcdGJyZWFrO1xuIFx0XHRcdFx0XHRkZWZhdWx0OlxuIFx0XHRcdFx0XHRcdHRocm93IG5ldyBFcnJvcihcIlVuZXhjZXB0aW9uIHR5cGUgXCIgKyByZXN1bHQudHlwZSk7XG4gXHRcdFx0XHR9XG4gXHRcdFx0XHRpZiAoYWJvcnRFcnJvcikge1xuIFx0XHRcdFx0XHRob3RTZXRTdGF0dXMoXCJhYm9ydFwiKTtcbiBcdFx0XHRcdFx0cmV0dXJuIFByb21pc2UucmVqZWN0KGFib3J0RXJyb3IpO1xuIFx0XHRcdFx0fVxuIFx0XHRcdFx0aWYgKGRvQXBwbHkpIHtcbiBcdFx0XHRcdFx0YXBwbGllZFVwZGF0ZVttb2R1bGVJZF0gPSBob3RVcGRhdGVbbW9kdWxlSWRdO1xuIFx0XHRcdFx0XHRhZGRBbGxUb1NldChvdXRkYXRlZE1vZHVsZXMsIHJlc3VsdC5vdXRkYXRlZE1vZHVsZXMpO1xuIFx0XHRcdFx0XHRmb3IgKG1vZHVsZUlkIGluIHJlc3VsdC5vdXRkYXRlZERlcGVuZGVuY2llcykge1xuIFx0XHRcdFx0XHRcdGlmIChcbiBcdFx0XHRcdFx0XHRcdE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChcbiBcdFx0XHRcdFx0XHRcdFx0cmVzdWx0Lm91dGRhdGVkRGVwZW5kZW5jaWVzLFxuIFx0XHRcdFx0XHRcdFx0XHRtb2R1bGVJZFxuIFx0XHRcdFx0XHRcdFx0KVxuIFx0XHRcdFx0XHRcdCkge1xuIFx0XHRcdFx0XHRcdFx0aWYgKCFvdXRkYXRlZERlcGVuZGVuY2llc1ttb2R1bGVJZF0pXG4gXHRcdFx0XHRcdFx0XHRcdG91dGRhdGVkRGVwZW5kZW5jaWVzW21vZHVsZUlkXSA9IFtdO1xuIFx0XHRcdFx0XHRcdFx0YWRkQWxsVG9TZXQoXG4gXHRcdFx0XHRcdFx0XHRcdG91dGRhdGVkRGVwZW5kZW5jaWVzW21vZHVsZUlkXSxcbiBcdFx0XHRcdFx0XHRcdFx0cmVzdWx0Lm91dGRhdGVkRGVwZW5kZW5jaWVzW21vZHVsZUlkXVxuIFx0XHRcdFx0XHRcdFx0KTtcbiBcdFx0XHRcdFx0XHR9XG4gXHRcdFx0XHRcdH1cbiBcdFx0XHRcdH1cbiBcdFx0XHRcdGlmIChkb0Rpc3Bvc2UpIHtcbiBcdFx0XHRcdFx0YWRkQWxsVG9TZXQob3V0ZGF0ZWRNb2R1bGVzLCBbcmVzdWx0Lm1vZHVsZUlkXSk7XG4gXHRcdFx0XHRcdGFwcGxpZWRVcGRhdGVbbW9kdWxlSWRdID0gd2FyblVuZXhwZWN0ZWRSZXF1aXJlO1xuIFx0XHRcdFx0fVxuIFx0XHRcdH1cbiBcdFx0fVxuXG4gXHRcdC8vIFN0b3JlIHNlbGYgYWNjZXB0ZWQgb3V0ZGF0ZWQgbW9kdWxlcyB0byByZXF1aXJlIHRoZW0gbGF0ZXIgYnkgdGhlIG1vZHVsZSBzeXN0ZW1cbiBcdFx0dmFyIG91dGRhdGVkU2VsZkFjY2VwdGVkTW9kdWxlcyA9IFtdO1xuIFx0XHRmb3IgKGkgPSAwOyBpIDwgb3V0ZGF0ZWRNb2R1bGVzLmxlbmd0aDsgaSsrKSB7XG4gXHRcdFx0bW9kdWxlSWQgPSBvdXRkYXRlZE1vZHVsZXNbaV07XG4gXHRcdFx0aWYgKFxuIFx0XHRcdFx0aW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gJiZcbiBcdFx0XHRcdGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmhvdC5fc2VsZkFjY2VwdGVkICYmXG4gXHRcdFx0XHQvLyByZW1vdmVkIHNlbGYtYWNjZXB0ZWQgbW9kdWxlcyBzaG91bGQgbm90IGJlIHJlcXVpcmVkXG4gXHRcdFx0XHRhcHBsaWVkVXBkYXRlW21vZHVsZUlkXSAhPT0gd2FyblVuZXhwZWN0ZWRSZXF1aXJlICYmXG4gXHRcdFx0XHQvLyB3aGVuIGNhbGxlZCBpbnZhbGlkYXRlIHNlbGYtYWNjZXB0aW5nIGlzIG5vdCBwb3NzaWJsZVxuIFx0XHRcdFx0IWluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmhvdC5fc2VsZkludmFsaWRhdGVkXG4gXHRcdFx0KSB7XG4gXHRcdFx0XHRvdXRkYXRlZFNlbGZBY2NlcHRlZE1vZHVsZXMucHVzaCh7XG4gXHRcdFx0XHRcdG1vZHVsZTogbW9kdWxlSWQsXG4gXHRcdFx0XHRcdHBhcmVudHM6IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLnBhcmVudHMuc2xpY2UoKSxcbiBcdFx0XHRcdFx0ZXJyb3JIYW5kbGVyOiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5ob3QuX3NlbGZBY2NlcHRlZFxuIFx0XHRcdFx0fSk7XG4gXHRcdFx0fVxuIFx0XHR9XG5cbiBcdFx0Ly8gTm93IGluIFwiZGlzcG9zZVwiIHBoYXNlXG4gXHRcdGhvdFNldFN0YXR1cyhcImRpc3Bvc2VcIik7XG4gXHRcdE9iamVjdC5rZXlzKGhvdEF2YWlsYWJsZUZpbGVzTWFwKS5mb3JFYWNoKGZ1bmN0aW9uKGNodW5rSWQpIHtcbiBcdFx0XHRpZiAoaG90QXZhaWxhYmxlRmlsZXNNYXBbY2h1bmtJZF0gPT09IGZhbHNlKSB7XG4gXHRcdFx0XHRob3REaXNwb3NlQ2h1bmsoY2h1bmtJZCk7XG4gXHRcdFx0fVxuIFx0XHR9KTtcblxuIFx0XHR2YXIgaWR4O1xuIFx0XHR2YXIgcXVldWUgPSBvdXRkYXRlZE1vZHVsZXMuc2xpY2UoKTtcbiBcdFx0d2hpbGUgKHF1ZXVlLmxlbmd0aCA+IDApIHtcbiBcdFx0XHRtb2R1bGVJZCA9IHF1ZXVlLnBvcCgpO1xuIFx0XHRcdG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHRcdGlmICghbW9kdWxlKSBjb250aW51ZTtcblxuIFx0XHRcdHZhciBkYXRhID0ge307XG5cbiBcdFx0XHQvLyBDYWxsIGRpc3Bvc2UgaGFuZGxlcnNcbiBcdFx0XHR2YXIgZGlzcG9zZUhhbmRsZXJzID0gbW9kdWxlLmhvdC5fZGlzcG9zZUhhbmRsZXJzO1xuIFx0XHRcdGZvciAoaiA9IDA7IGogPCBkaXNwb3NlSGFuZGxlcnMubGVuZ3RoOyBqKyspIHtcbiBcdFx0XHRcdGNiID0gZGlzcG9zZUhhbmRsZXJzW2pdO1xuIFx0XHRcdFx0Y2IoZGF0YSk7XG4gXHRcdFx0fVxuIFx0XHRcdGhvdEN1cnJlbnRNb2R1bGVEYXRhW21vZHVsZUlkXSA9IGRhdGE7XG5cbiBcdFx0XHQvLyBkaXNhYmxlIG1vZHVsZSAodGhpcyBkaXNhYmxlcyByZXF1aXJlcyBmcm9tIHRoaXMgbW9kdWxlKVxuIFx0XHRcdG1vZHVsZS5ob3QuYWN0aXZlID0gZmFsc2U7XG5cbiBcdFx0XHQvLyByZW1vdmUgbW9kdWxlIGZyb20gY2FjaGVcbiBcdFx0XHRkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG5cbiBcdFx0XHQvLyB3aGVuIGRpc3Bvc2luZyB0aGVyZSBpcyBubyBuZWVkIHRvIGNhbGwgZGlzcG9zZSBoYW5kbGVyXG4gXHRcdFx0ZGVsZXRlIG91dGRhdGVkRGVwZW5kZW5jaWVzW21vZHVsZUlkXTtcblxuIFx0XHRcdC8vIHJlbW92ZSBcInBhcmVudHNcIiByZWZlcmVuY2VzIGZyb20gYWxsIGNoaWxkcmVuXG4gXHRcdFx0Zm9yIChqID0gMDsgaiA8IG1vZHVsZS5jaGlsZHJlbi5sZW5ndGg7IGorKykge1xuIFx0XHRcdFx0dmFyIGNoaWxkID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGUuY2hpbGRyZW5bal1dO1xuIFx0XHRcdFx0aWYgKCFjaGlsZCkgY29udGludWU7XG4gXHRcdFx0XHRpZHggPSBjaGlsZC5wYXJlbnRzLmluZGV4T2YobW9kdWxlSWQpO1xuIFx0XHRcdFx0aWYgKGlkeCA+PSAwKSB7XG4gXHRcdFx0XHRcdGNoaWxkLnBhcmVudHMuc3BsaWNlKGlkeCwgMSk7XG4gXHRcdFx0XHR9XG4gXHRcdFx0fVxuIFx0XHR9XG5cbiBcdFx0Ly8gcmVtb3ZlIG91dGRhdGVkIGRlcGVuZGVuY3kgZnJvbSBtb2R1bGUgY2hpbGRyZW5cbiBcdFx0dmFyIGRlcGVuZGVuY3k7XG4gXHRcdHZhciBtb2R1bGVPdXRkYXRlZERlcGVuZGVuY2llcztcbiBcdFx0Zm9yIChtb2R1bGVJZCBpbiBvdXRkYXRlZERlcGVuZGVuY2llcykge1xuIFx0XHRcdGlmIChcbiBcdFx0XHRcdE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvdXRkYXRlZERlcGVuZGVuY2llcywgbW9kdWxlSWQpXG4gXHRcdFx0KSB7XG4gXHRcdFx0XHRtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0XHRcdGlmIChtb2R1bGUpIHtcbiBcdFx0XHRcdFx0bW9kdWxlT3V0ZGF0ZWREZXBlbmRlbmNpZXMgPSBvdXRkYXRlZERlcGVuZGVuY2llc1ttb2R1bGVJZF07XG4gXHRcdFx0XHRcdGZvciAoaiA9IDA7IGogPCBtb2R1bGVPdXRkYXRlZERlcGVuZGVuY2llcy5sZW5ndGg7IGorKykge1xuIFx0XHRcdFx0XHRcdGRlcGVuZGVuY3kgPSBtb2R1bGVPdXRkYXRlZERlcGVuZGVuY2llc1tqXTtcbiBcdFx0XHRcdFx0XHRpZHggPSBtb2R1bGUuY2hpbGRyZW4uaW5kZXhPZihkZXBlbmRlbmN5KTtcbiBcdFx0XHRcdFx0XHRpZiAoaWR4ID49IDApIG1vZHVsZS5jaGlsZHJlbi5zcGxpY2UoaWR4LCAxKTtcbiBcdFx0XHRcdFx0fVxuIFx0XHRcdFx0fVxuIFx0XHRcdH1cbiBcdFx0fVxuXG4gXHRcdC8vIE5vdyBpbiBcImFwcGx5XCIgcGhhc2VcbiBcdFx0aG90U2V0U3RhdHVzKFwiYXBwbHlcIik7XG5cbiBcdFx0aWYgKGhvdFVwZGF0ZU5ld0hhc2ggIT09IHVuZGVmaW5lZCkge1xuIFx0XHRcdGhvdEN1cnJlbnRIYXNoID0gaG90VXBkYXRlTmV3SGFzaDtcbiBcdFx0XHRob3RVcGRhdGVOZXdIYXNoID0gdW5kZWZpbmVkO1xuIFx0XHR9XG4gXHRcdGhvdFVwZGF0ZSA9IHVuZGVmaW5lZDtcblxuIFx0XHQvLyBpbnNlcnQgbmV3IGNvZGVcbiBcdFx0Zm9yIChtb2R1bGVJZCBpbiBhcHBsaWVkVXBkYXRlKSB7XG4gXHRcdFx0aWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChhcHBsaWVkVXBkYXRlLCBtb2R1bGVJZCkpIHtcbiBcdFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdID0gYXBwbGllZFVwZGF0ZVttb2R1bGVJZF07XG4gXHRcdFx0fVxuIFx0XHR9XG5cbiBcdFx0Ly8gY2FsbCBhY2NlcHQgaGFuZGxlcnNcbiBcdFx0dmFyIGVycm9yID0gbnVsbDtcbiBcdFx0Zm9yIChtb2R1bGVJZCBpbiBvdXRkYXRlZERlcGVuZGVuY2llcykge1xuIFx0XHRcdGlmIChcbiBcdFx0XHRcdE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvdXRkYXRlZERlcGVuZGVuY2llcywgbW9kdWxlSWQpXG4gXHRcdFx0KSB7XG4gXHRcdFx0XHRtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0XHRcdGlmIChtb2R1bGUpIHtcbiBcdFx0XHRcdFx0bW9kdWxlT3V0ZGF0ZWREZXBlbmRlbmNpZXMgPSBvdXRkYXRlZERlcGVuZGVuY2llc1ttb2R1bGVJZF07XG4gXHRcdFx0XHRcdHZhciBjYWxsYmFja3MgPSBbXTtcbiBcdFx0XHRcdFx0Zm9yIChpID0gMDsgaSA8IG1vZHVsZU91dGRhdGVkRGVwZW5kZW5jaWVzLmxlbmd0aDsgaSsrKSB7XG4gXHRcdFx0XHRcdFx0ZGVwZW5kZW5jeSA9IG1vZHVsZU91dGRhdGVkRGVwZW5kZW5jaWVzW2ldO1xuIFx0XHRcdFx0XHRcdGNiID0gbW9kdWxlLmhvdC5fYWNjZXB0ZWREZXBlbmRlbmNpZXNbZGVwZW5kZW5jeV07XG4gXHRcdFx0XHRcdFx0aWYgKGNiKSB7XG4gXHRcdFx0XHRcdFx0XHRpZiAoY2FsbGJhY2tzLmluZGV4T2YoY2IpICE9PSAtMSkgY29udGludWU7XG4gXHRcdFx0XHRcdFx0XHRjYWxsYmFja3MucHVzaChjYik7XG4gXHRcdFx0XHRcdFx0fVxuIFx0XHRcdFx0XHR9XG4gXHRcdFx0XHRcdGZvciAoaSA9IDA7IGkgPCBjYWxsYmFja3MubGVuZ3RoOyBpKyspIHtcbiBcdFx0XHRcdFx0XHRjYiA9IGNhbGxiYWNrc1tpXTtcbiBcdFx0XHRcdFx0XHR0cnkge1xuIFx0XHRcdFx0XHRcdFx0Y2IobW9kdWxlT3V0ZGF0ZWREZXBlbmRlbmNpZXMpO1xuIFx0XHRcdFx0XHRcdH0gY2F0Y2ggKGVycikge1xuIFx0XHRcdFx0XHRcdFx0aWYgKG9wdGlvbnMub25FcnJvcmVkKSB7XG4gXHRcdFx0XHRcdFx0XHRcdG9wdGlvbnMub25FcnJvcmVkKHtcbiBcdFx0XHRcdFx0XHRcdFx0XHR0eXBlOiBcImFjY2VwdC1lcnJvcmVkXCIsXG4gXHRcdFx0XHRcdFx0XHRcdFx0bW9kdWxlSWQ6IG1vZHVsZUlkLFxuIFx0XHRcdFx0XHRcdFx0XHRcdGRlcGVuZGVuY3lJZDogbW9kdWxlT3V0ZGF0ZWREZXBlbmRlbmNpZXNbaV0sXG4gXHRcdFx0XHRcdFx0XHRcdFx0ZXJyb3I6IGVyclxuIFx0XHRcdFx0XHRcdFx0XHR9KTtcbiBcdFx0XHRcdFx0XHRcdH1cbiBcdFx0XHRcdFx0XHRcdGlmICghb3B0aW9ucy5pZ25vcmVFcnJvcmVkKSB7XG4gXHRcdFx0XHRcdFx0XHRcdGlmICghZXJyb3IpIGVycm9yID0gZXJyO1xuIFx0XHRcdFx0XHRcdFx0fVxuIFx0XHRcdFx0XHRcdH1cbiBcdFx0XHRcdFx0fVxuIFx0XHRcdFx0fVxuIFx0XHRcdH1cbiBcdFx0fVxuXG4gXHRcdC8vIExvYWQgc2VsZiBhY2NlcHRlZCBtb2R1bGVzXG4gXHRcdGZvciAoaSA9IDA7IGkgPCBvdXRkYXRlZFNlbGZBY2NlcHRlZE1vZHVsZXMubGVuZ3RoOyBpKyspIHtcbiBcdFx0XHR2YXIgaXRlbSA9IG91dGRhdGVkU2VsZkFjY2VwdGVkTW9kdWxlc1tpXTtcbiBcdFx0XHRtb2R1bGVJZCA9IGl0ZW0ubW9kdWxlO1xuIFx0XHRcdGhvdEN1cnJlbnRQYXJlbnRzID0gaXRlbS5wYXJlbnRzO1xuIFx0XHRcdGhvdEN1cnJlbnRDaGlsZE1vZHVsZSA9IG1vZHVsZUlkO1xuIFx0XHRcdHRyeSB7XG4gXHRcdFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKTtcbiBcdFx0XHR9IGNhdGNoIChlcnIpIHtcbiBcdFx0XHRcdGlmICh0eXBlb2YgaXRlbS5lcnJvckhhbmRsZXIgPT09IFwiZnVuY3Rpb25cIikge1xuIFx0XHRcdFx0XHR0cnkge1xuIFx0XHRcdFx0XHRcdGl0ZW0uZXJyb3JIYW5kbGVyKGVycik7XG4gXHRcdFx0XHRcdH0gY2F0Y2ggKGVycjIpIHtcbiBcdFx0XHRcdFx0XHRpZiAob3B0aW9ucy5vbkVycm9yZWQpIHtcbiBcdFx0XHRcdFx0XHRcdG9wdGlvbnMub25FcnJvcmVkKHtcbiBcdFx0XHRcdFx0XHRcdFx0dHlwZTogXCJzZWxmLWFjY2VwdC1lcnJvci1oYW5kbGVyLWVycm9yZWRcIixcbiBcdFx0XHRcdFx0XHRcdFx0bW9kdWxlSWQ6IG1vZHVsZUlkLFxuIFx0XHRcdFx0XHRcdFx0XHRlcnJvcjogZXJyMixcbiBcdFx0XHRcdFx0XHRcdFx0b3JpZ2luYWxFcnJvcjogZXJyXG4gXHRcdFx0XHRcdFx0XHR9KTtcbiBcdFx0XHRcdFx0XHR9XG4gXHRcdFx0XHRcdFx0aWYgKCFvcHRpb25zLmlnbm9yZUVycm9yZWQpIHtcbiBcdFx0XHRcdFx0XHRcdGlmICghZXJyb3IpIGVycm9yID0gZXJyMjtcbiBcdFx0XHRcdFx0XHR9XG4gXHRcdFx0XHRcdFx0aWYgKCFlcnJvcikgZXJyb3IgPSBlcnI7XG4gXHRcdFx0XHRcdH1cbiBcdFx0XHRcdH0gZWxzZSB7XG4gXHRcdFx0XHRcdGlmIChvcHRpb25zLm9uRXJyb3JlZCkge1xuIFx0XHRcdFx0XHRcdG9wdGlvbnMub25FcnJvcmVkKHtcbiBcdFx0XHRcdFx0XHRcdHR5cGU6IFwic2VsZi1hY2NlcHQtZXJyb3JlZFwiLFxuIFx0XHRcdFx0XHRcdFx0bW9kdWxlSWQ6IG1vZHVsZUlkLFxuIFx0XHRcdFx0XHRcdFx0ZXJyb3I6IGVyclxuIFx0XHRcdFx0XHRcdH0pO1xuIFx0XHRcdFx0XHR9XG4gXHRcdFx0XHRcdGlmICghb3B0aW9ucy5pZ25vcmVFcnJvcmVkKSB7XG4gXHRcdFx0XHRcdFx0aWYgKCFlcnJvcikgZXJyb3IgPSBlcnI7XG4gXHRcdFx0XHRcdH1cbiBcdFx0XHRcdH1cbiBcdFx0XHR9XG4gXHRcdH1cblxuIFx0XHQvLyBoYW5kbGUgZXJyb3JzIGluIGFjY2VwdCBoYW5kbGVycyBhbmQgc2VsZiBhY2NlcHRlZCBtb2R1bGUgbG9hZFxuIFx0XHRpZiAoZXJyb3IpIHtcbiBcdFx0XHRob3RTZXRTdGF0dXMoXCJmYWlsXCIpO1xuIFx0XHRcdHJldHVybiBQcm9taXNlLnJlamVjdChlcnJvcik7XG4gXHRcdH1cblxuIFx0XHRpZiAoaG90UXVldWVkSW52YWxpZGF0ZWRNb2R1bGVzKSB7XG4gXHRcdFx0cmV0dXJuIGhvdEFwcGx5SW50ZXJuYWwob3B0aW9ucykudGhlbihmdW5jdGlvbihsaXN0KSB7XG4gXHRcdFx0XHRvdXRkYXRlZE1vZHVsZXMuZm9yRWFjaChmdW5jdGlvbihtb2R1bGVJZCkge1xuIFx0XHRcdFx0XHRpZiAobGlzdC5pbmRleE9mKG1vZHVsZUlkKSA8IDApIGxpc3QucHVzaChtb2R1bGVJZCk7XG4gXHRcdFx0XHR9KTtcbiBcdFx0XHRcdHJldHVybiBsaXN0O1xuIFx0XHRcdH0pO1xuIFx0XHR9XG5cbiBcdFx0aG90U2V0U3RhdHVzKFwiaWRsZVwiKTtcbiBcdFx0cmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUpIHtcbiBcdFx0XHRyZXNvbHZlKG91dGRhdGVkTW9kdWxlcyk7XG4gXHRcdH0pO1xuIFx0fVxuXG4gXHRmdW5jdGlvbiBob3RBcHBseUludmFsaWRhdGVkTW9kdWxlcygpIHtcbiBcdFx0aWYgKGhvdFF1ZXVlZEludmFsaWRhdGVkTW9kdWxlcykge1xuIFx0XHRcdGlmICghaG90VXBkYXRlKSBob3RVcGRhdGUgPSB7fTtcbiBcdFx0XHRob3RRdWV1ZWRJbnZhbGlkYXRlZE1vZHVsZXMuZm9yRWFjaChob3RBcHBseUludmFsaWRhdGVkTW9kdWxlKTtcbiBcdFx0XHRob3RRdWV1ZWRJbnZhbGlkYXRlZE1vZHVsZXMgPSB1bmRlZmluZWQ7XG4gXHRcdFx0cmV0dXJuIHRydWU7XG4gXHRcdH1cbiBcdH1cblxuIFx0ZnVuY3Rpb24gaG90QXBwbHlJbnZhbGlkYXRlZE1vZHVsZShtb2R1bGVJZCkge1xuIFx0XHRpZiAoIU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChob3RVcGRhdGUsIG1vZHVsZUlkKSlcbiBcdFx0XHRob3RVcGRhdGVbbW9kdWxlSWRdID0gbW9kdWxlc1ttb2R1bGVJZF07XG4gXHR9XG5cbiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9LFxuIFx0XHRcdGhvdDogaG90Q3JlYXRlTW9kdWxlKG1vZHVsZUlkKSxcbiBcdFx0XHRwYXJlbnRzOiAoaG90Q3VycmVudFBhcmVudHNUZW1wID0gaG90Q3VycmVudFBhcmVudHMsIGhvdEN1cnJlbnRQYXJlbnRzID0gW10sIGhvdEN1cnJlbnRQYXJlbnRzVGVtcCksXG4gXHRcdFx0Y2hpbGRyZW46IFtdXG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIGhvdENyZWF0ZVJlcXVpcmUobW9kdWxlSWQpKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9kaXN0L1wiO1xuXG4gXHQvLyBfX3dlYnBhY2tfaGFzaF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSBmdW5jdGlvbigpIHsgcmV0dXJuIGhvdEN1cnJlbnRIYXNoOyB9O1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIGhvdENyZWF0ZVJlcXVpcmUoXCIuL3NyYy9hcHAuanNcIikoX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9hcHAuanNcIik7XG4iLCJyZXF1aXJlKCcuL2NvbXBvbmVudHMvaW5kZXguc2NzcycpO1xuXG4vL0ltcG9ydCBhbGwgSlMgZmlsZXNcbmNvbnN0IHJlcXVpcmVBbGwgPSByID0+IHIua2V5cygpLmZvckVhY2gocik7XG5yZXF1aXJlQWxsKHJlcXVpcmUuY29udGV4dCgnLi9jb21wb25lbnRzJywgdHJ1ZSwgL1xcLmpzJC8pKTtcbiIsInZhciBtYXAgPSB7XG5cdFwiLi8wMC1zZXR0aW5ncy9jb25maWcuanNcIjogXCIuL3NyYy9jb21wb25lbnRzLzAwLXNldHRpbmdzL2NvbmZpZy5qc1wiLFxuXHRcIi4vMDUtY29tcG9uZW50cy9sYXlvdXQvbGF5b3V0LWJhc2UuanNcIjogXCIuL3NyYy9jb21wb25lbnRzLzA1LWNvbXBvbmVudHMvbGF5b3V0L2xheW91dC1iYXNlLmpzXCIsXG5cdFwiLi8wNS1jb21wb25lbnRzL2xheW91dC9sYXlvdXQtYmxhbmsuanNcIjogXCIuL3NyYy9jb21wb25lbnRzLzA1LWNvbXBvbmVudHMvbGF5b3V0L2xheW91dC1ibGFuay5qc1wiLFxuXHRcIi4vMDUtY29tcG9uZW50cy9sYXlvdXQvbGF5b3V0LWVtZXJnZW5jeS5qc1wiOiBcIi4vc3JjL2NvbXBvbmVudHMvMDUtY29tcG9uZW50cy9sYXlvdXQvbGF5b3V0LWVtZXJnZW5jeS5qc1wiLFxuXHRcIi4vMDUtY29tcG9uZW50cy9sYXlvdXQvbGF5b3V0LXBvcHVwLmpzXCI6IFwiLi9zcmMvY29tcG9uZW50cy8wNS1jb21wb25lbnRzL2xheW91dC9sYXlvdXQtcG9wdXAuanNcIixcblx0XCIuLzA1LWNvbXBvbmVudHMvdjMtcGF0L2FjdGlvbnMtbWVudS9zY3JpcHRzLmpzXCI6IFwiLi9zcmMvY29tcG9uZW50cy8wNS1jb21wb25lbnRzL3YzLXBhdC9hY3Rpb25zLW1lbnUvc2NyaXB0cy5qc1wiLFxuXHRcIi4vMDUtY29tcG9uZW50cy92My1wYXQvYnV0dG9uLWxpbmsvc2NyaXB0cy5qc1wiOiBcIi4vc3JjL2NvbXBvbmVudHMvMDUtY29tcG9uZW50cy92My1wYXQvYnV0dG9uLWxpbmsvc2NyaXB0cy5qc1wiLFxuXHRcIi4vMDUtY29tcG9uZW50cy92My1wYXQvY2FyZC1jaGFydHMvc2NyaXB0cy5qc1wiOiBcIi4vc3JjL2NvbXBvbmVudHMvMDUtY29tcG9uZW50cy92My1wYXQvY2FyZC1jaGFydHMvc2NyaXB0cy5qc1wiLFxuXHRcIi4vMDUtY29tcG9uZW50cy92My1wYXQvY29sbGFwc2libGUtc2lkZS1wYW5lbC9zY3JpcHRzLmpzXCI6IFwiLi9zcmMvY29tcG9uZW50cy8wNS1jb21wb25lbnRzL3YzLXBhdC9jb2xsYXBzaWJsZS1zaWRlLXBhbmVsL3NjcmlwdHMuanNcIixcblx0XCIuLzA1LWNvbXBvbmVudHMvdjMtcGF0L2NvbXAtbGluZS9zY3JpcHRzLmpzXCI6IFwiLi9zcmMvY29tcG9uZW50cy8wNS1jb21wb25lbnRzL3YzLXBhdC9jb21wLWxpbmUvc2NyaXB0cy5qc1wiLFxuXHRcIi4vMDUtY29tcG9uZW50cy92My1wYXQvY291bnRyeS1waG9uZS9zY3JpcHRzLmpzXCI6IFwiLi9zcmMvY29tcG9uZW50cy8wNS1jb21wb25lbnRzL3YzLXBhdC9jb3VudHJ5LXBob25lL3NjcmlwdHMuanNcIixcblx0XCIuLzA1LWNvbXBvbmVudHMvdjMtcGF0L2RhdGEtdGFibGVzL3NjcmlwdHMuanNcIjogXCIuL3NyYy9jb21wb25lbnRzLzA1LWNvbXBvbmVudHMvdjMtcGF0L2RhdGEtdGFibGVzL3NjcmlwdHMuanNcIixcblx0XCIuLzA1LWNvbXBvbmVudHMvdjMtcGF0L2RhdGV0aW1lLXJhbmdlLXBpY2tlci9zY3JpcHRzLmpzXCI6IFwiLi9zcmMvY29tcG9uZW50cy8wNS1jb21wb25lbnRzL3YzLXBhdC9kYXRldGltZS1yYW5nZS1waWNrZXIvc2NyaXB0cy5qc1wiLFxuXHRcIi4vMDUtY29tcG9uZW50cy92My1wYXQvZHJhZy1kcm9wL3NjcmlwdHMuanNcIjogXCIuL3NyYy9jb21wb25lbnRzLzA1LWNvbXBvbmVudHMvdjMtcGF0L2RyYWctZHJvcC9zY3JpcHRzLmpzXCIsXG5cdFwiLi8wNS1jb21wb25lbnRzL3YzLXBhdC9kcm9wZG93bi1jYXRlZ29yaWVzL3NjcmlwdHMuanNcIjogXCIuL3NyYy9jb21wb25lbnRzLzA1LWNvbXBvbmVudHMvdjMtcGF0L2Ryb3Bkb3duLWNhdGVnb3JpZXMvc2NyaXB0cy5qc1wiLFxuXHRcIi4vMDUtY29tcG9uZW50cy92My1wYXQvZHJvcHpvbmUvZHJvcHpvbmUuanNcIjogXCIuL3NyYy9jb21wb25lbnRzLzA1LWNvbXBvbmVudHMvdjMtcGF0L2Ryb3B6b25lL2Ryb3B6b25lLmpzXCIsXG5cdFwiLi8wNS1jb21wb25lbnRzL3YzLXBhdC9leHBhbmRhYmxlLWxpbmsvc2NyaXB0cy5qc1wiOiBcIi4vc3JjL2NvbXBvbmVudHMvMDUtY29tcG9uZW50cy92My1wYXQvZXhwYW5kYWJsZS1saW5rL3NjcmlwdHMuanNcIixcblx0XCIuLzA1LWNvbXBvbmVudHMvdjMtcGF0L2Z1bGxzY3JlZW4tdGFicy13cmFwcGVyL3NjcmlwdHMuanNcIjogXCIuL3NyYy9jb21wb25lbnRzLzA1LWNvbXBvbmVudHMvdjMtcGF0L2Z1bGxzY3JlZW4tdGFicy13cmFwcGVyL3NjcmlwdHMuanNcIixcblx0XCIuLzA1LWNvbXBvbmVudHMvdjMtcGF0L2dlbmVyaWMtZ2FsbGVyeS9zY3JpcHRzLmpzXCI6IFwiLi9zcmMvY29tcG9uZW50cy8wNS1jb21wb25lbnRzL3YzLXBhdC9nZW5lcmljLWdhbGxlcnkvc2NyaXB0cy5qc1wiLFxuXHRcIi4vMDUtY29tcG9uZW50cy92My1wYXQvZ2VuZXJpYy1ncmlkL3NjcmlwdHMuanNcIjogXCIuL3NyYy9jb21wb25lbnRzLzA1LWNvbXBvbmVudHMvdjMtcGF0L2dlbmVyaWMtZ3JpZC9zY3JpcHRzLmpzXCIsXG5cdFwiLi8wNS1jb21wb25lbnRzL3YzLXBhdC9ob3Jpem9udGFsLXRvb2xiYXIvc2NyaXB0cy5qc1wiOiBcIi4vc3JjL2NvbXBvbmVudHMvMDUtY29tcG9uZW50cy92My1wYXQvaG9yaXpvbnRhbC10b29sYmFyL3NjcmlwdHMuanNcIixcblx0XCIuLzA1LWNvbXBvbmVudHMvdjMtcGF0L2hvdXItcGlja2VyL3NjcmlwdHMuanNcIjogXCIuL3NyYy9jb21wb25lbnRzLzA1LWNvbXBvbmVudHMvdjMtcGF0L2hvdXItcGlja2VyL3NjcmlwdHMuanNcIixcblx0XCIuLzA1LWNvbXBvbmVudHMvdjMtcGF0L2lucHV0LWxhc2Evc2NyaXB0cy5qc1wiOiBcIi4vc3JjL2NvbXBvbmVudHMvMDUtY29tcG9uZW50cy92My1wYXQvaW5wdXQtbGFzYS9zY3JpcHRzLmpzXCIsXG5cdFwiLi8wNS1jb21wb25lbnRzL3YzLXBhdC9pbnB1dC13aXRoLWNsZWFyL3NjcmlwdHMuanNcIjogXCIuL3NyYy9jb21wb25lbnRzLzA1LWNvbXBvbmVudHMvdjMtcGF0L2lucHV0LXdpdGgtY2xlYXIvc2NyaXB0cy5qc1wiLFxuXHRcIi4vMDUtY29tcG9uZW50cy92My1wYXQvaW5wdXQtd2l0aC1saXN0L3NjcmlwdHMuanNcIjogXCIuL3NyYy9jb21wb25lbnRzLzA1LWNvbXBvbmVudHMvdjMtcGF0L2lucHV0LXdpdGgtbGlzdC9zY3JpcHRzLmpzXCIsXG5cdFwiLi8wNS1jb21wb25lbnRzL3YzLXBhdC9saW5lLWFkZC9zY3JpcHRzLmpzXCI6IFwiLi9zcmMvY29tcG9uZW50cy8wNS1jb21wb25lbnRzL3YzLXBhdC9saW5lLWFkZC9zY3JpcHRzLmpzXCIsXG5cdFwiLi8wNS1jb21wb25lbnRzL3YzLXBhdC9saW5lLWRldGFpbHMtZXhwYW5kLWJveC9zY3JpcHQuanNcIjogXCIuL3NyYy9jb21wb25lbnRzLzA1LWNvbXBvbmVudHMvdjMtcGF0L2xpbmUtZGV0YWlscy1leHBhbmQtYm94L3NjcmlwdC5qc1wiLFxuXHRcIi4vMDUtY29tcG9uZW50cy92My1wYXQvbG9jYXRpb24tYm94L3NjcmlwdHMuanNcIjogXCIuL3NyYy9jb21wb25lbnRzLzA1LWNvbXBvbmVudHMvdjMtcGF0L2xvY2F0aW9uLWJveC9zY3JpcHRzLmpzXCIsXG5cdFwiLi8wNS1jb21wb25lbnRzL3YzLXBhdC9tYWluLWludGVyYWN0aXZlLWNhcmQvc2NyaXB0cy5qc1wiOiBcIi4vc3JjL2NvbXBvbmVudHMvMDUtY29tcG9uZW50cy92My1wYXQvbWFpbi1pbnRlcmFjdGl2ZS1jYXJkL3NjcmlwdHMuanNcIixcblx0XCIuLzA1LWNvbXBvbmVudHMvdjMtcGF0L21lbnUtYmFyL3NjcmlwdHMuanNcIjogXCIuL3NyYy9jb21wb25lbnRzLzA1LWNvbXBvbmVudHMvdjMtcGF0L21lbnUtYmFyL3NjcmlwdHMuanNcIixcblx0XCIuLzA1LWNvbXBvbmVudHMvdjMtcGF0L211bHRpcGxlLXNlbGVjdGlvbi1idXR0b24vc2NyaXB0cy5qc1wiOiBcIi4vc3JjL2NvbXBvbmVudHMvMDUtY29tcG9uZW50cy92My1wYXQvbXVsdGlwbGUtc2VsZWN0aW9uLWJ1dHRvbi9zY3JpcHRzLmpzXCIsXG5cdFwiLi8wNS1jb21wb25lbnRzL3YzLXBhdC9wYW5lbC9jb25maXJtYXRpb24tcGFuZWwuanNcIjogXCIuL3NyYy9jb21wb25lbnRzLzA1LWNvbXBvbmVudHMvdjMtcGF0L3BhbmVsL2NvbmZpcm1hdGlvbi1wYW5lbC5qc1wiLFxuXHRcIi4vMDUtY29tcG9uZW50cy92My1wYXQvcGFuZWwvY29uZmlybWF0aW9uLXBvcHVwLmpzXCI6IFwiLi9zcmMvY29tcG9uZW50cy8wNS1jb21wb25lbnRzL3YzLXBhdC9wYW5lbC9jb25maXJtYXRpb24tcG9wdXAuanNcIixcblx0XCIuLzA1LWNvbXBvbmVudHMvdjMtcGF0L3BhbmVsL21vZGFsLXBvcHVwLmpzXCI6IFwiLi9zcmMvY29tcG9uZW50cy8wNS1jb21wb25lbnRzL3YzLXBhdC9wYW5lbC9tb2RhbC1wb3B1cC5qc1wiLFxuXHRcIi4vMDUtY29tcG9uZW50cy92My1wYXQvcGFuZWwvcGFuZWwtYnktaWQtbm90aWZ5LmpzXCI6IFwiLi9zcmMvY29tcG9uZW50cy8wNS1jb21wb25lbnRzL3YzLXBhdC9wYW5lbC9wYW5lbC1ieS1pZC1ub3RpZnkuanNcIixcblx0XCIuLzA1LWNvbXBvbmVudHMvdjMtcGF0L3BhbmVsL3BhbmVsLWJ5LWlkLmpzXCI6IFwiLi9zcmMvY29tcG9uZW50cy8wNS1jb21wb25lbnRzL3YzLXBhdC9wYW5lbC9wYW5lbC1ieS1pZC5qc1wiLFxuXHRcIi4vMDUtY29tcG9uZW50cy92My1wYXQvcGFuZWwvcG9wdXAtbWVudS5qc1wiOiBcIi4vc3JjL2NvbXBvbmVudHMvMDUtY29tcG9uZW50cy92My1wYXQvcGFuZWwvcG9wdXAtbWVudS5qc1wiLFxuXHRcIi4vMDUtY29tcG9uZW50cy92My1wYXQvcGFuZWwvc2FwcGhpcmUtcGFuZWwuanNcIjogXCIuL3NyYy9jb21wb25lbnRzLzA1LWNvbXBvbmVudHMvdjMtcGF0L3BhbmVsL3NhcHBoaXJlLXBhbmVsLmpzXCIsXG5cdFwiLi8wNS1jb21wb25lbnRzL3YzLXBhdC9wYW5lbC9zY3JpcHRzLmpzXCI6IFwiLi9zcmMvY29tcG9uZW50cy8wNS1jb21wb25lbnRzL3YzLXBhdC9wYW5lbC9zY3JpcHRzLmpzXCIsXG5cdFwiLi8wNS1jb21wb25lbnRzL3YzLXBhdC9wYXRpZW50LWNhbGwtY2FuY2VsL3BhdGllbnQtY2FsbC1jYW5jZWwtc3RydWN0dXJlLmpzXCI6IFwiLi9zcmMvY29tcG9uZW50cy8wNS1jb21wb25lbnRzL3YzLXBhdC9wYXRpZW50LWNhbGwtY2FuY2VsL3BhdGllbnQtY2FsbC1jYW5jZWwtc3RydWN0dXJlLmpzXCIsXG5cdFwiLi8wNS1jb21wb25lbnRzL3YzLXBhdC9wYXRpZW50LWNhbGwtY2FuY2VsL3BhdGllbnQtY2FsbC1jYW5jZWwuanNcIjogXCIuL3NyYy9jb21wb25lbnRzLzA1LWNvbXBvbmVudHMvdjMtcGF0L3BhdGllbnQtY2FsbC1jYW5jZWwvcGF0aWVudC1jYWxsLWNhbmNlbC5qc1wiLFxuXHRcIi4vMDUtY29tcG9uZW50cy92My1wYXQvcGVyc29uLWNhcmQvc2NyaXB0cy5qc1wiOiBcIi4vc3JjL2NvbXBvbmVudHMvMDUtY29tcG9uZW50cy92My1wYXQvcGVyc29uLWNhcmQvc2NyaXB0cy5qc1wiLFxuXHRcIi4vMDUtY29tcG9uZW50cy92My1wYXQvcHJlc2NyaXB0aW9uLWNhcmQvc2NyaXB0cy5qc1wiOiBcIi4vc3JjL2NvbXBvbmVudHMvMDUtY29tcG9uZW50cy92My1wYXQvcHJlc2NyaXB0aW9uLWNhcmQvc2NyaXB0cy5qc1wiLFxuXHRcIi4vMDUtY29tcG9uZW50cy92My1wYXQvcHJlc2NyaXB0aW9uLWV4cGFuZGFibGUvc2NyaXB0cy5qc1wiOiBcIi4vc3JjL2NvbXBvbmVudHMvMDUtY29tcG9uZW50cy92My1wYXQvcHJlc2NyaXB0aW9uLWV4cGFuZGFibGUvc2NyaXB0cy5qc1wiLFxuXHRcIi4vMDUtY29tcG9uZW50cy92My1wYXQvc2FwcGhpcmUtaGVhZGVyL3NjcmlwdHMuanNcIjogXCIuL3NyYy9jb21wb25lbnRzLzA1LWNvbXBvbmVudHMvdjMtcGF0L3NhcHBoaXJlLWhlYWRlci9zY3JpcHRzLmpzXCIsXG5cdFwiLi8wNS1jb21wb25lbnRzL3YzLXBhdC9zYXBwaGlyZS1wb3B1cC9zY3JpcHRzLmpzXCI6IFwiLi9zcmMvY29tcG9uZW50cy8wNS1jb21wb25lbnRzL3YzLXBhdC9zYXBwaGlyZS1wb3B1cC9zY3JpcHRzLmpzXCIsXG5cdFwiLi8wNS1jb21wb25lbnRzL3YzLXBhdC9zYXBwaGlyZS1yYWRpby1idXR0b24vc2NyaXB0cy5qc1wiOiBcIi4vc3JjL2NvbXBvbmVudHMvMDUtY29tcG9uZW50cy92My1wYXQvc2FwcGhpcmUtcmFkaW8tYnV0dG9uL3NjcmlwdHMuanNcIixcblx0XCIuLzA1LWNvbXBvbmVudHMvdjMtcGF0L3NjYWxlcy9zY2FsZS1tYWluLXN0cnVjdHVyZS5qc1wiOiBcIi4vc3JjL2NvbXBvbmVudHMvMDUtY29tcG9uZW50cy92My1wYXQvc2NhbGVzL3NjYWxlLW1haW4tc3RydWN0dXJlLmpzXCIsXG5cdFwiLi8wNS1jb21wb25lbnRzL3YzLXBhdC9zY2FsZXMvdG9nZ2xlLWl0ZW0tY29udHJvbC5qc1wiOiBcIi4vc3JjL2NvbXBvbmVudHMvMDUtY29tcG9uZW50cy92My1wYXQvc2NhbGVzL3RvZ2dsZS1pdGVtLWNvbnRyb2wuanNcIixcblx0XCIuLzA1LWNvbXBvbmVudHMvdjMtcGF0L3NlYXJjaC1hbmQtc2VsZWN0L3NlbGVjdC1zc2QuanNcIjogXCIuL3NyYy9jb21wb25lbnRzLzA1LWNvbXBvbmVudHMvdjMtcGF0L3NlYXJjaC1hbmQtc2VsZWN0L3NlbGVjdC1zc2QuanNcIixcblx0XCIuLzA1LWNvbXBvbmVudHMvdjMtcGF0L3NlYXJjaC1hbmQtc2VsZWN0L3NzZC1zZWFyY2guanNcIjogXCIuL3NyYy9jb21wb25lbnRzLzA1LWNvbXBvbmVudHMvdjMtcGF0L3NlYXJjaC1hbmQtc2VsZWN0L3NzZC1zZWFyY2guanNcIixcblx0XCIuLzA1LWNvbXBvbmVudHMvdjMtcGF0L3NlYXJjaGFibGUtY2xpZW50LXNpZGUvc2NyaXB0cy5qc1wiOiBcIi4vc3JjL2NvbXBvbmVudHMvMDUtY29tcG9uZW50cy92My1wYXQvc2VhcmNoYWJsZS1jbGllbnQtc2lkZS9zY3JpcHRzLmpzXCIsXG5cdFwiLi8wNS1jb21wb25lbnRzL3YzLXBhdC9zZWN0aW9uLWV4cGFuZGFibGUtY3VzdG9tL3NjcmlwdHMuanNcIjogXCIuL3NyYy9jb21wb25lbnRzLzA1LWNvbXBvbmVudHMvdjMtcGF0L3NlY3Rpb24tZXhwYW5kYWJsZS1jdXN0b20vc2NyaXB0cy5qc1wiLFxuXHRcIi4vMDUtY29tcG9uZW50cy92My1wYXQvc2VjdGlvbi1leHBhbmRhYmxlLWluc2lkZS9zY3JpcHRzLmpzXCI6IFwiLi9zcmMvY29tcG9uZW50cy8wNS1jb21wb25lbnRzL3YzLXBhdC9zZWN0aW9uLWV4cGFuZGFibGUtaW5zaWRlL3NjcmlwdHMuanNcIixcblx0XCIuLzA1LWNvbXBvbmVudHMvdjMtcGF0L3NlbGVjdC1zeXN0ZW0vc2NyaXB0cy5qc1wiOiBcIi4vc3JjL2NvbXBvbmVudHMvMDUtY29tcG9uZW50cy92My1wYXQvc2VsZWN0LXN5c3RlbS9zY3JpcHRzLmpzXCIsXG5cdFwiLi8wNS1jb21wb25lbnRzL3YzLXBhdC9zaGlmdC1jb250YWluZXIvc2NyaXB0cy5qc1wiOiBcIi4vc3JjL2NvbXBvbmVudHMvMDUtY29tcG9uZW50cy92My1wYXQvc2hpZnQtY29udGFpbmVyL3NjcmlwdHMuanNcIixcblx0XCIuLzA1LWNvbXBvbmVudHMvdjMtcGF0L3NoaWZ0LXRhYmxlL3NoaWZ0VGFibGUuanNcIjogXCIuL3NyYy9jb21wb25lbnRzLzA1LWNvbXBvbmVudHMvdjMtcGF0L3NoaWZ0LXRhYmxlL3NoaWZ0VGFibGUuanNcIixcblx0XCIuLzA1LWNvbXBvbmVudHMvdjMtcGF0L3NoaWZ0LXRhYmxlL3NoaWZ0VGFibGVDYXJkLmpzXCI6IFwiLi9zcmMvY29tcG9uZW50cy8wNS1jb21wb25lbnRzL3YzLXBhdC9zaGlmdC10YWJsZS9zaGlmdFRhYmxlQ2FyZC5qc1wiLFxuXHRcIi4vMDUtY29tcG9uZW50cy92My1wYXQvc2hpZnQtdGFibGUvc2hpZnRUYWJsZUNhcmRQcm9ncmVzcy5qc1wiOiBcIi4vc3JjL2NvbXBvbmVudHMvMDUtY29tcG9uZW50cy92My1wYXQvc2hpZnQtdGFibGUvc2hpZnRUYWJsZUNhcmRQcm9ncmVzcy5qc1wiLFxuXHRcIi4vMDUtY29tcG9uZW50cy92My1wYXQvc2hpZnQtdGFibGUvc2hpZnRUYWJsZUhvdmVyLmpzXCI6IFwiLi9zcmMvY29tcG9uZW50cy8wNS1jb21wb25lbnRzL3YzLXBhdC9zaGlmdC10YWJsZS9zaGlmdFRhYmxlSG92ZXIuanNcIixcblx0XCIuLzA1LWNvbXBvbmVudHMvdjMtcGF0L3NpZGUtbWVudS9zY3JpcHRzLmpzXCI6IFwiLi9zcmMvY29tcG9uZW50cy8wNS1jb21wb25lbnRzL3YzLXBhdC9zaWRlLW1lbnUvc2NyaXB0cy5qc1wiLFxuXHRcIi4vMDUtY29tcG9uZW50cy92My1wYXQvc2lkZWJhci9zaWRlYmFyLXN0cnVjdHVyZS5qc1wiOiBcIi4vc3JjL2NvbXBvbmVudHMvMDUtY29tcG9uZW50cy92My1wYXQvc2lkZWJhci9zaWRlYmFyLXN0cnVjdHVyZS5qc1wiLFxuXHRcIi4vMDUtY29tcG9uZW50cy92My1wYXQvc21hbGwtYm94LXNlbGVjdGFibGUvc2NyaXB0cy5qc1wiOiBcIi4vc3JjL2NvbXBvbmVudHMvMDUtY29tcG9uZW50cy92My1wYXQvc21hbGwtYm94LXNlbGVjdGFibGUvc2NyaXB0cy5qc1wiLFxuXHRcIi4vMDUtY29tcG9uZW50cy92My1wYXQvc3Bpbm5lci1ob3Jpem9udGFsL3NjcmlwdHMuanNcIjogXCIuL3NyYy9jb21wb25lbnRzLzA1LWNvbXBvbmVudHMvdjMtcGF0L3NwaW5uZXItaG9yaXpvbnRhbC9zY3JpcHRzLmpzXCIsXG5cdFwiLi8wNS1jb21wb25lbnRzL3YzLXBhdC9zcGlubmVyLXZlcnRpY2FsL3NjcmlwdHMuanNcIjogXCIuL3NyYy9jb21wb25lbnRzLzA1LWNvbXBvbmVudHMvdjMtcGF0L3NwaW5uZXItdmVydGljYWwvc2NyaXB0cy5qc1wiLFxuXHRcIi4vMDUtY29tcG9uZW50cy92My1wYXQvc3BsaXQtYnV0dG9uL3NjcmlwdHMuanNcIjogXCIuL3NyYy9jb21wb25lbnRzLzA1LWNvbXBvbmVudHMvdjMtcGF0L3NwbGl0LWJ1dHRvbi9zY3JpcHRzLmpzXCIsXG5cdFwiLi8wNS1jb21wb25lbnRzL3YzLXBhdC9zc2QtY29tcG9uZW50LWJsb2NrL3NjcmlwdHMuanNcIjogXCIuL3NyYy9jb21wb25lbnRzLzA1LWNvbXBvbmVudHMvdjMtcGF0L3NzZC1jb21wb25lbnQtYmxvY2svc2NyaXB0cy5qc1wiLFxuXHRcIi4vMDUtY29tcG9uZW50cy92My1wYXQvc3NkLWxpc3QtbGluZS9zY3JpcHRzLmpzXCI6IFwiLi9zcmMvY29tcG9uZW50cy8wNS1jb21wb25lbnRzL3YzLXBhdC9zc2QtbGlzdC1saW5lL3NjcmlwdHMuanNcIixcblx0XCIuLzA1LWNvbXBvbmVudHMvdjMtcGF0L3RhYmxlLWZvcm0vc2NyaXB0cy5qc1wiOiBcIi4vc3JjL2NvbXBvbmVudHMvMDUtY29tcG9uZW50cy92My1wYXQvdGFibGUtZm9ybS9zY3JpcHRzLmpzXCIsXG5cdFwiLi8wNS1jb21wb25lbnRzL3YzLXBhdC90YWJzLWV4dGVuZGVkL3NjcmlwdHMuanNcIjogXCIuL3NyYy9jb21wb25lbnRzLzA1LWNvbXBvbmVudHMvdjMtcGF0L3RhYnMtZXh0ZW5kZWQvc2NyaXB0cy5qc1wiLFxuXHRcIi4vMDUtY29tcG9uZW50cy92My1wYXQvdGFidWxhci1saXN0L3NjcmlwdHMuanNcIjogXCIuL3NyYy9jb21wb25lbnRzLzA1LWNvbXBvbmVudHMvdjMtcGF0L3RhYnVsYXItbGlzdC9zY3JpcHRzLmpzXCIsXG5cdFwiLi8wNS1jb21wb25lbnRzL3YzLXBhdC90YWJ1bGFyLXNjcm9sbC9zY3JpcHRzLmpzXCI6IFwiLi9zcmMvY29tcG9uZW50cy8wNS1jb21wb25lbnRzL3YzLXBhdC90YWJ1bGFyLXNjcm9sbC9zY3JpcHRzLmpzXCIsXG5cdFwiLi8wNS1jb21wb25lbnRzL3YzLXBhdC90aW1lbGluZS9zY3JpcHRzLmpzXCI6IFwiLi9zcmMvY29tcG9uZW50cy8wNS1jb21wb25lbnRzL3YzLXBhdC90aW1lbGluZS9zY3JpcHRzLmpzXCIsXG5cdFwiLi8wNS1jb21wb25lbnRzL3YzLXBhdC90cmlnZ2VyLWlmcmFtZS10b29sdGlwL3RyaWdnZXItaWZyYW1lLXRvb2x0aXAuanNcIjogXCIuL3NyYy9jb21wb25lbnRzLzA1LWNvbXBvbmVudHMvdjMtcGF0L3RyaWdnZXItaWZyYW1lLXRvb2x0aXAvdHJpZ2dlci1pZnJhbWUtdG9vbHRpcC5qc1wiLFxuXHRcIi4vMDUtY29tcG9uZW50cy92My1wYXQvdHJ1bmNhdGVkLWNvbnRlbnQvc2NyaXB0cy5qc1wiOiBcIi4vc3JjL2NvbXBvbmVudHMvMDUtY29tcG9uZW50cy92My1wYXQvdHJ1bmNhdGVkLWNvbnRlbnQvc2NyaXB0cy5qc1wiLFxuXHRcIi4vMDgtcGFnZXMvY2xpbmljaWFuV29ya0FyZWEuanNcIjogXCIuL3NyYy9jb21wb25lbnRzLzA4LXBhZ2VzL2NsaW5pY2lhbldvcmtBcmVhLmpzXCIsXG5cdFwiLi8wOC1wYWdlcy9lU2lnbmF0dXJlLmpzXCI6IFwiLi9zcmMvY29tcG9uZW50cy8wOC1wYWdlcy9lU2lnbmF0dXJlLmpzXCIsXG5cdFwiLi8wOC1wYWdlcy9yZW1vdGVBcHBvaW50bWVudC5qc1wiOiBcIi4vc3JjL2NvbXBvbmVudHMvMDgtcGFnZXMvcmVtb3RlQXBwb2ludG1lbnQuanNcIixcblx0XCIuL2dsb2JhbHMuanNcIjogXCIuL3NyYy9jb21wb25lbnRzL2dsb2JhbHMuanNcIlxufTtcblxuXG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dChyZXEpIHtcblx0dmFyIGlkID0gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSk7XG5cdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKGlkKTtcbn1cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpIHtcblx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhtYXAsIHJlcSkpIHtcblx0XHR2YXIgZSA9IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIgKyByZXEgKyBcIidcIik7XG5cdFx0ZS5jb2RlID0gJ01PRFVMRV9OT1RfRk9VTkQnO1xuXHRcdHRocm93IGU7XG5cdH1cblx0cmV0dXJuIG1hcFtyZXFdO1xufVxud2VicGFja0NvbnRleHQua2V5cyA9IGZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0S2V5cygpIHtcblx0cmV0dXJuIE9iamVjdC5rZXlzKG1hcCk7XG59O1xud2VicGFja0NvbnRleHQucmVzb2x2ZSA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZTtcbm1vZHVsZS5leHBvcnRzID0gd2VicGFja0NvbnRleHQ7XG53ZWJwYWNrQ29udGV4dC5pZCA9IFwiLi9zcmMvY29tcG9uZW50cyBzeW5jIHJlY3Vyc2l2ZSBcXFxcLmpzJFwiOyIsIlNhcHBoaXJlV2lkZ2V0cyA9IHdpbmRvdy5TYXBwaGlyZVdpZGdldHMgPSB3aW5kb3cuU2FwcGhpcmVXaWRnZXRzIHx8IHt9O1xuIiwiLyogQ29tcG9uZW50IExheW91dEJhc2UgKi9cclxuKGZ1bmN0aW9uKCQsIHdpbmRvdywgZG9jdW1lbnQsIFNhcHBoaXJlV2lkZ2V0cykge1xyXG5cdHZhciBjcmVhdGUgPSBmdW5jdGlvbihjb25maWcpIHtcclxuXHRcdHdpbmRvd1tjb25maWcud2lkZ2V0SWRdID0gbmV3IExheW91dEJhc2UoY29uZmlnKTtcclxuXHRcdFNhcHBoaXJlV2lkZ2V0cy5MYXlvdXRCYXNlLndpZGdldElkID0gY29uZmlnLndpZGdldElkO1xyXG5cdH07XHJcblxyXG5cdHZhciBvcGVuU2lkZWJhcklmcmFtZSA9IGZ1bmN0aW9uKGR1cmF0aW9uKSB7XHJcblx0XHR3aW5kb3dbU2FwcGhpcmVXaWRnZXRzLkxheW91dEJhc2Uud2lkZ2V0SWRdLm9wZW5TaWRlYmFySWZyYW1lKGR1cmF0aW9uKTtcclxuXHR9O1xyXG5cclxuXHR2YXIgY2xvc2VTaWRlYmFySWZyYW1lID0gZnVuY3Rpb24oZHVyYXRpb24pIHtcclxuXHRcdHdpbmRvd1tTYXBwaGlyZVdpZGdldHMuTGF5b3V0QmFzZS53aWRnZXRJZF0uY2xvc2VTaWRlYmFySWZyYW1lKGR1cmF0aW9uKTtcclxuXHR9O1xyXG5cclxuXHR2YXIgc2Nyb2xsVG9FbGVtZW50ID0gZnVuY3Rpb24oJGVsZW1lbnQsIG9mZnNldCA9IDApIHtcclxuXHRcdHZhciAkdGFyZ2V0RWxlbWVudCA9ICRlbGVtZW50O1xyXG5cclxuXHRcdGlmICghISR0YXJnZXRFbGVtZW50Lmxlbmd0aCkge1xyXG5cdFx0XHR2YXIgc2Nyb2xsVG9PZmZzZXRJbnRlcnZhbDtcclxuXHJcblx0XHRcdHNjcm9sbFRvT2Zmc2V0SW50ZXJ2YWwgPSBzZXRJbnRlcnZhbChmdW5jdGlvbigpIHtcclxuXHRcdFx0XHRpZiAod2luZG93W1NhcHBoaXJlV2lkZ2V0cy5MYXlvdXRCYXNlLndpZGdldElkXS5nZXRUaHJlc2hvbGRzKCkuc2Vjb25kYXJ5VGhyZXNob2xkID4gMCkge1xyXG5cdFx0XHRcdFx0Y2xlYXJJbnRlcnZhbChzY3JvbGxUb09mZnNldEludGVydmFsKTtcclxuXHJcblx0XHRcdFx0XHRsZXQgdGFyZ2V0RWxlbWVudE9mZnNldFRvcCA9ICR0YXJnZXRFbGVtZW50Lm9mZnNldCgpLnRvcDtcclxuXHJcblx0XHRcdFx0XHRjb25zdCBpc0ZpeGVkID0gJCgnLkxheW91dEJhc2Utc2Vjb25kYXJ5JykuaGFzQ2xhc3MoJ2lzRml4ZWQnKTtcclxuXHRcdFx0XHRcdGNvbnN0IGlzRW1lcmdlbmN5ID0gISEkKCcuTGF5b3V0QmFzZS1lbWVyZ2VuY3knKS50ZXh0KCk7XHJcblxyXG5cdFx0XHRcdFx0Y29uc3QgaGVhZGVySGVpZ2h0ID0gJCgnLlNhcHBoaXJlSGVhZGVyJykuaGVpZ2h0KCk7XHJcblx0XHRcdFx0XHRjb25zdCBzZWNvbmRhcnlIZWlnaHQgPSAkKCcuTGF5b3V0QmFzZS1zZWNvbmRhcnknKS5vdXRlckhlaWdodCgpO1xyXG5cdFx0XHRcdFx0Y29uc3QgZW1lcmdlbmN5SGVpZ2h0ID0gaXNFbWVyZ2VuY3kgPyAkKCcuTGF5b3V0QmFzZS1lbWVyZ2VuY3knKS5oZWlnaHQoKSA6IDA7XHJcblxyXG5cdFx0XHRcdFx0Ly9jb25zdCBzZWNvbmRhcnlGaXhlZCA9IGlzRml4ZWQgPyBzZWNvbmRhcnlIZWlnaHQgOiBzZWNvbmRhcnlIZWlnaHQgLSAyNjtcclxuXHRcdFx0XHRcdHRhcmdldEVsZW1lbnRPZmZzZXRUb3AgPSB0YXJnZXRFbGVtZW50T2Zmc2V0VG9wIC0gKGhlYWRlckhlaWdodCArIHNlY29uZGFyeUhlaWdodCArIGVtZXJnZW5jeUhlaWdodCk7XHJcblxyXG5cdFx0XHRcdFx0JCgnYm9keSwgaHRtbCcpLnNjcm9sbFRvcCh0YXJnZXRFbGVtZW50T2Zmc2V0VG9wIC0gMTYpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSwgMjUwKTtcclxuXHRcdH1cclxuXHR9O1xyXG5cclxuXHR2YXIgTGF5b3V0QmFzZSA9IGZ1bmN0aW9uKGNvbmZpZykge1xyXG5cdFx0dmFyIF90aGlzID0gdGhpcztcclxuXHRcdHRoaXMubGF5b3V0QmFzZVJlZHJhd1RpbWVyID0gMDtcclxuXHRcdHRoaXMuaGFzSGVhZGVyID0gY29uZmlnLmhhc0hlYWRlcjtcclxuXHRcdHRoaXMuaXNFeHBhbmRhYmxlID0gY29uZmlnLmlzRXhwYW5kYWJsZTtcclxuXHRcdHRoaXMuaXNUb3BXaW5kb3cgPSB3aW5kb3cudG9wID09PSB3aW5kb3cuc2VsZiA/IHRydWUgOiBmYWxzZTtcclxuXHRcdHRoaXMuJHdpZGdldCA9ICQoJyMnICsgY29uZmlnLndpZGdldElkKTtcclxuXHRcdHRoaXMuJHdyYXBwZXIgPSB0aGlzLiR3aWRnZXQuZmluZCgnLkxheW91dEJhc2UtV3JhcHBlcicpO1xyXG5cdFx0dGhpcy4kc3BhY2VyID0gdGhpcy4kd2lkZ2V0LmZpbmQoJy5MYXlvdXRCYXNlLXNwYWNlcicpO1xyXG5cdFx0dGhpcy4kbWFpbk1lbnUgPSB0aGlzLiR3aWRnZXQuZmluZCgnLkxheW91dEJhc2UtTWFpbk1lbnUnKTtcclxuXHRcdHRoaXMuJGhlYWRlciA9IHRoaXMuJHdpZGdldC5maW5kKCcuTGF5b3V0QmFzZS1oZWFkZXInKTtcclxuXHRcdHRoaXMuJGhlYWRlckJvZHkgPSB0aGlzLiR3aWRnZXQuZmluZCgnLlNhcHBoaXJlSGVhZGVyLWJvZHknKTtcclxuXHRcdHRoaXMuJHByaW1hcnlNZW51ID0gdGhpcy4kd2lkZ2V0LmZpbmQoJy5MYXlvdXRCYXNlLXByaW1hcnktbWVudScpO1xyXG5cdFx0dGhpcy4kZW1lcmdlbmN5ID0gdGhpcy4kd2lkZ2V0LmZpbmQoJy5MYXlvdXRCYXNlLWVtZXJnZW5jeScpO1xyXG5cdFx0dGhpcy4kc2Vjb25kYXJ5ID0gdGhpcy4kd2lkZ2V0LmZpbmQoJy5MYXlvdXRCYXNlLXNlY29uZGFyeScpO1xyXG5cdFx0dGhpcy4kc2Vjb25kYXJ5TWVudSA9IHRoaXMuJHdpZGdldC5maW5kKCcuTGF5b3V0QmFzZS1zZWNvbmRhcnktbWVudScpO1xyXG5cdFx0dGhpcy4kaWZyYW1lU2lkZWJhciA9IHRoaXMuJHdpZGdldC5maW5kKCcuTGF5b3V0QmFzZS1pZnJhbWVzaWRlYmFyJyk7XHJcblx0XHR0aGlzLiRoZWFkZXJBZGRpdGlvbmFsQ29udGVudCA9IHRoaXMuJHdpZGdldC5maW5kKCcuU2FwcGhpcmVIZWFkZXItYWRkaXRpb25hbC1jb250ZW50Jyk7XHJcblx0XHR0aGlzLiR0b3BmaXhlZENvbnRlbnQgPSB0aGlzLiR3aWRnZXQuZmluZCgnLkxheW91dEJhc2UtdG9wZml4ZWRjb250ZW50Jyk7XHJcblx0XHR0aGlzLiRib3R0b21maXhlZENvbnRlbnQgPSB0aGlzLiR3aWRnZXQuZmluZCgnLkxheW91dEJhc2UtYm90dG9tZml4ZWRjb250ZW50Jyk7XHJcblx0XHR0aGlzLiRtYWluQ29udGVudCA9IHRoaXMuJHdpZGdldC5maW5kKCcuTGF5b3V0QmFzZS1NYWluQ29udGVudCcpO1xyXG5cdFx0dGhpcy5leHRyYVBhZGRpbmdFbWVyZ2VuY3kgPSAwO1xyXG5cdFx0dGhpcy5leHRyYVBhZGRpbmdTZWNvbmRhcnkgPSAwO1xyXG5cdFx0dGhpcy5zZXR1cFdpbmRvd0V2ZW50cygpO1xyXG5cdFx0dGhpcy4kaWZyYW1lU2lkZWJhci5hcHBlbmQoJzxkaXYgY2xhc3M9XCJsZHMtcmluZyAxXCI+PGRpdj48L2Rpdj48ZGl2PjwvZGl2PjxkaXY+PC9kaXY+PGRpdj48L2Rpdj48L2Rpdj4nKTtcclxuXHJcblx0XHQkKGZ1bmN0aW9uKCkge1xyXG5cdFx0XHQkKCdib2R5JykuYWRkQ2xhc3MoJ0xheW91dEJhc2UnKTtcclxuXHRcdFx0aWYgKF90aGlzLmlzVG9wV2luZG93KSB7XHJcblx0XHRcdFx0JCgnYm9keScpLmNzcygnb3ZlcmZsb3cteScsICdzY3JvbGwnKTtcclxuXHRcdFx0fVxyXG5cdFx0fSk7XHJcblxyXG5cdFx0JCh3aW5kb3cpLmxvYWQoZnVuY3Rpb24oKSB7XHJcblx0XHRcdCQoJ2JvZHknKS5jbGljaygpO1xyXG5cdFx0XHQkKHdpbmRvdykuc2Nyb2xsKCk7XHJcblxyXG5cdFx0XHRfdGhpcy4kaWZyYW1lU2lkZWJhci5maW5kKCcubGRzLXJpbmcnKS5mYWRlT3V0KCk7XHJcblx0XHR9KTtcclxuXHR9O1xyXG5cclxuXHRMYXlvdXRCYXNlLnByb3RvdHlwZS5zZXR1cFdpbmRvd0V2ZW50cyA9IGZ1bmN0aW9uKCkge1xyXG5cdFx0dmFyIF90aGlzID0gdGhpcztcclxuXHRcdHZhciBjdXJzb3JQb3NpdG9uID0gMDtcclxuXHJcblx0XHQkKHdpbmRvdykucmVzaXplKGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRfdGhpcy51cGRhdGVUaHJlc2hvbGRzKCk7XHJcblx0XHRcdF90aGlzLmhhbmRsZU9wdGlvbmFsQ29udGFpbmVycygpO1xyXG5cdFx0XHRfdGhpcy5oYW5kbGVMYXlvdXRUb3BQYWRkaW5nKCk7XHJcblx0XHRcdF90aGlzLmhhbmRsZUxheW91dEJvdHRvbVBhZGRpbmcoKTtcclxuXHRcdH0pO1xyXG5cclxuXHRcdCQod2luZG93KS5zY3JvbGwoZnVuY3Rpb24oKSB7XHJcblx0XHRcdHZhciBuZXdQb3NpdGlvbiA9ICQod2luZG93KS5zY3JvbGxUb3AoKTtcclxuXHJcblx0XHRcdHdpbmRvdy5jbGVhclRpbWVvdXQoX3RoaXMubGF5b3V0QmFzZVJlZHJhd1RpbWVyKTtcclxuXHRcdFx0X3RoaXMubGF5b3V0QmFzZVJlZHJhd1RpbWVyID0gd2luZG93LnNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0X3RoaXMudXBkYXRlVGhyZXNob2xkcygpO1xyXG5cdFx0XHRcdF90aGlzLmhhbmRsZU9wdGlvbmFsQ29udGFpbmVycygpO1xyXG5cdFx0XHRcdF90aGlzLmhhbmRsZUxheW91dFRvcFBhZGRpbmcoKTtcclxuXHRcdFx0XHRfdGhpcy5oYW5kbGVMYXlvdXRCb3R0b21QYWRkaW5nKCk7XHJcblx0XHRcdFx0X3RoaXMuaGFuZGxlTWFuYWdlUXVldWVDYXJkKGN1cnNvclBvc2l0b24sIG5ld1Bvc2l0aW9uKTtcclxuXHRcdFx0XHRjdXJzb3JQb3NpdG9uID0gbmV3UG9zaXRpb247XHJcblx0XHRcdH0sIDEwMCk7XHJcblx0XHR9KTtcclxuXHR9O1xyXG5cclxuXHRMYXlvdXRCYXNlLnByb3RvdHlwZS5oYW5kbGVPcHRpb25hbENvbnRhaW5lcnMgPSBmdW5jdGlvbigpIHtcclxuXHRcdC8qY29uc3Qgc2Nyb2xsVG9wID0gJCh3aW5kb3cpLnNjcm9sbFRvcCgpO1xyXG5cdFx0Y29uc3QgaXNFbWVyZ2VuY3kgPSAhISQoJy5MYXlvdXRCYXNlLWVtZXJnZW5jeScpLnRleHQoKTsqL1xyXG5cdH07XHJcblxyXG5cdExheW91dEJhc2UucHJvdG90eXBlLmhhbmRsZUxheW91dFRvcFBhZGRpbmcgPSBmdW5jdGlvbigpIHtcclxuXHRcdHZhciBwYWRkaW5nVG9wID0gdGhpcy5jb250ZW50VGhyZXNob2xkICsgdGhpcy5leHRyYVBhZGRpbmdFbWVyZ2VuY3kgKyB0aGlzLmV4dHJhUGFkZGluZ1NlY29uZGFyeTtcclxuXHRcdHRoaXMuJHNwYWNlci5zdG9wKCkuYW5pbWF0ZShcclxuXHRcdFx0e1xyXG5cdFx0XHRcdGhlaWdodDogcGFkZGluZ1RvcCxcclxuXHRcdFx0fSxcclxuXHRcdFx0MCxcclxuXHRcdFx0J2xpbmVhcidcclxuXHRcdCk7XHJcblx0XHRpZiAodGhpcy4kdG9wZml4ZWRDb250ZW50Lmxlbmd0aCA9PT0gMSkge1xyXG5cdFx0XHR0aGlzLiR0b3BmaXhlZENvbnRlbnQuY3NzKHtcclxuXHRcdFx0XHR3aWR0aDogJCgnLkxheW91dEJhc2UtTWFpbkNvbnRlbnQnKS53aWR0aCgpLFxyXG5cdFx0XHRcdHRvcDogdGhpcy50b3BmaXhlZENvbnRlbnRUaHJlc2hvbGQgKyAncHgnLFxyXG5cdFx0XHR9KTtcclxuXHRcdH1cclxuXHR9O1xyXG5cclxuXHRMYXlvdXRCYXNlLnByb3RvdHlwZS5oYW5kbGVMYXlvdXRCb3R0b21QYWRkaW5nID0gZnVuY3Rpb24oKSB7XHJcblx0XHRpZiAodGhpcy4kYm90dG9tZml4ZWRDb250ZW50Lmxlbmd0aCA9PT0gMSkge1xyXG5cdFx0XHRpZiAoJCgnYm9keScpWzBdLnNjcm9sbEhlaWdodCA+ICQoJ2JvZHknKS5oZWlnaHQoKSkge1xyXG5cdFx0XHRcdHZhciBib3R0b21GaXhlZEhlaWdodCA9IHRoaXMuJGJvdHRvbWZpeGVkQ29udGVudC5vdXRlckhlaWdodCh0cnVlKTtcclxuXHRcdFx0XHR0aGlzLiR3cmFwcGVyLmFkZENsYXNzKCdoYXNGaXhlZEJvdHRvbScpLmNzcygncGFkZGluZy1ib3R0b20nLCBib3R0b21GaXhlZEhlaWdodCArICdweCcpO1xyXG5cdFx0XHRcdHRoaXMuJGJvdHRvbWZpeGVkQ29udGVudC5jc3Moe1xyXG5cdFx0XHRcdFx0d2lkdGg6ICQoJy5MYXlvdXRCYXNlLU1haW5Db250ZW50Jykub3V0ZXJXaWR0aCh0cnVlKSxcclxuXHRcdFx0XHR9KTtcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHR0aGlzLiR3cmFwcGVyLnJlbW92ZUNsYXNzKCdoYXNGaXhlZEJvdHRvbScpLmNzcygncGFkZGluZy1ib3R0b20nLCAnJyk7XHJcblx0XHRcdFx0dGhpcy4kYm90dG9tZml4ZWRDb250ZW50LmNzcyh7XHJcblx0XHRcdFx0XHR3aWR0aDogJycsXHJcblx0XHRcdFx0fSk7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9O1xyXG5cclxuXHRMYXlvdXRCYXNlLnByb3RvdHlwZS51cGRhdGVUaHJlc2hvbGRzID0gZnVuY3Rpb24oKSB7XHJcblx0XHR2YXIgbWFpbk1lbnVIZWlnaHQgPSB0aGlzLiRtYWluTWVudS5vdXRlckhlaWdodCh0cnVlKSB8fCAwO1xyXG5cdFx0dmFyIGhlYWRlckJvZHlIZWlnaHQgPSB0aGlzLiRoZWFkZXJCb2R5Lm91dGVySGVpZ2h0KHRydWUpIHx8IHRoaXMuJGhlYWRlci5vdXRlckhlaWdodCh0cnVlKSB8fCAwO1xyXG5cdFx0dmFyIHRvcGZpeGVkQ29udGVudEhlaWdodCA9IHRoaXMuJHRvcGZpeGVkQ29udGVudC5vdXRlckhlaWdodCh0cnVlKSB8fCAwO1xyXG5cdFx0dmFyIHByaW1hcnlNZW51SGVpZ2h0ID0gdGhpcy4kcHJpbWFyeU1lbnUub3V0ZXJIZWlnaHQodHJ1ZSkgfHwgMDtcclxuXHRcdHZhciBlbWVyZ2VuY3lIZWlnaHQgPSB0aGlzLiRlbWVyZ2VuY3kub3V0ZXJIZWlnaHQodHJ1ZSkgfHwgMDtcclxuXHRcdHRoaXMudG9wZml4ZWRDb250ZW50VGhyZXNob2xkID0gbWFpbk1lbnVIZWlnaHQgKyBoZWFkZXJCb2R5SGVpZ2h0O1xyXG5cdFx0dGhpcy5jb250ZW50VGhyZXNob2xkID0gbWFpbk1lbnVIZWlnaHQgKyBoZWFkZXJCb2R5SGVpZ2h0ICsgdG9wZml4ZWRDb250ZW50SGVpZ2h0O1xyXG5cdFx0dGhpcy5lbWVyZ2VuY3lUaHJlc2hvbGQgPSBtYWluTWVudUhlaWdodCArIGhlYWRlckJvZHlIZWlnaHQgKyB0b3BmaXhlZENvbnRlbnRIZWlnaHQgKyBwcmltYXJ5TWVudUhlaWdodDtcclxuXHRcdHRoaXMuc2Vjb25kYXJ5VGhyZXNob2xkID1cclxuXHRcdFx0bWFpbk1lbnVIZWlnaHQgKyBoZWFkZXJCb2R5SGVpZ2h0ICsgdG9wZml4ZWRDb250ZW50SGVpZ2h0ICsgcHJpbWFyeU1lbnVIZWlnaHQgKyBlbWVyZ2VuY3lIZWlnaHQ7XHJcblx0fTtcclxuXHJcblx0TGF5b3V0QmFzZS5wcm90b3R5cGUuZ2V0VGhyZXNob2xkcyA9IGZ1bmN0aW9uKCkge1xyXG5cdFx0cmV0dXJuIHtcclxuXHRcdFx0dG9wZml4ZWRDb250ZW50VGhyZXNob2xkOiB0aGlzLnRvcGZpeGVkQ29udGVudFRocmVzaG9sZCxcclxuXHRcdFx0Y29udGVudFRocmVzaG9sZDogdGhpcy5jb250ZW50VGhyZXNob2xkLFxyXG5cdFx0XHRlbWVyZ2VuY3lUaHJlc2hvbGQ6IHRoaXMuZW1lcmdlbmN5VGhyZXNob2xkLFxyXG5cdFx0XHRzZWNvbmRhcnlUaHJlc2hvbGQ6IHRoaXMuc2Vjb25kYXJ5VGhyZXNob2xkLFxyXG5cdFx0fTtcclxuXHR9O1xyXG5cclxuXHRMYXlvdXRCYXNlLnByb3RvdHlwZS5vcGVuU2lkZWJhcklmcmFtZSA9IGZ1bmN0aW9uKGR1cmF0aW9uX2luKSB7XHJcblx0XHR2YXIgZHVyYXRpb24gPSBkdXJhdGlvbl9pbiA+PSAwID8gZHVyYXRpb25faW4gOiAxMDA7XHJcblx0XHR0aGlzLiRpZnJhbWVTaWRlYmFyLmFuaW1hdGUoXHJcblx0XHRcdHtcclxuXHRcdFx0XHR3aWR0aDogJzEwMCUnLFxyXG5cdFx0XHR9LFxyXG5cdFx0XHRkdXJhdGlvblxyXG5cdFx0KTtcclxuXHRcdCQoJ2JvZHknKVxyXG5cdFx0XHQuY3NzKCdvdmVyZmxvdy15JywgJ3Njcm9sbCcpXHJcblx0XHRcdC5jbGljaygpO1xyXG5cdH07XHJcblxyXG5cdExheW91dEJhc2UucHJvdG90eXBlLmNsb3NlU2lkZWJhcklmcmFtZSA9IGZ1bmN0aW9uKGR1cmF0aW9uX2luKSB7XHJcblx0XHR2YXIgZHVyYXRpb24gPSBkdXJhdGlvbl9pbiA+PSAwID8gZHVyYXRpb25faW4gOiAxMDA7XHJcblx0XHR2YXIgdGFyZ2V0V2lkdGggPSB0aGlzLmlzRXhwYW5kYWJsZSA/IDQwIDogMjYyO1xyXG5cdFx0dGhpcy4kaWZyYW1lU2lkZWJhci5hbmltYXRlKFxyXG5cdFx0XHR7XHJcblx0XHRcdFx0d2lkdGg6IHRhcmdldFdpZHRoLFxyXG5cdFx0XHR9LFxyXG5cdFx0XHRkdXJhdGlvblxyXG5cdFx0KTtcclxuXHRcdCQoJ2JvZHknKS5jc3MoJ292ZXJmbG93LXknLCAnc2Nyb2xsJyk7XHJcblx0fTtcclxuXHJcblx0TGF5b3V0QmFzZS5wcm90b3R5cGUuaGFuZGxlTWFuYWdlUXVldWVDYXJkID0gZnVuY3Rpb24oY3Vyc29yUG9zaXRvbiwgbmV3UG9zaXRpb24pIHtcclxuXHRcdGNvbnN0ICRtYW5hZ2VRdWV1ZSA9ICQoJy5NYW5hZ2VRdWV1ZUNvbnRhaW5lcicpO1xyXG5cclxuXHRcdGlmICgkbWFuYWdlUXVldWUubGVuZ3RoKSB7XHJcblx0XHRcdGlmIChuZXdQb3NpdGlvbiA+IGN1cnNvclBvc2l0b24pIHtcclxuXHRcdFx0XHQkbWFuYWdlUXVldWUuYWRkQ2xhc3MoJ01hbmFnZVF1ZXVlQ29udGFpbmVyLS1jbG9zZWQnKTtcclxuXHRcdFx0fSBlbHNlIGlmIChuZXdQb3NpdGlvbiA8IGN1cnNvclBvc2l0b24pIHtcclxuXHRcdFx0XHQkbWFuYWdlUXVldWUucmVtb3ZlQ2xhc3MoJ01hbmFnZVF1ZXVlQ29udGFpbmVyLS1jbG9zZWQnKTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH07XHJcblxyXG5cdFNhcHBoaXJlV2lkZ2V0cy5MYXlvdXRCYXNlID0ge1xyXG5cdFx0Y3JlYXRlLFxyXG5cdFx0Y2xvc2VTaWRlYmFySWZyYW1lLFxyXG5cdFx0b3BlblNpZGViYXJJZnJhbWUsXHJcblx0XHRzY3JvbGxUb0VsZW1lbnQsXHJcblx0fTtcclxufSkoalF1ZXJ5LCB3aW5kb3csIGRvY3VtZW50LCBTYXBwaGlyZVdpZGdldHMpO1xyXG4iLCIvKiBDb21wb25lbnQgTGF5b3V0QmxhbmsgKi9cbiQoZnVuY3Rpb24gKCkge1xuXHRpZiAod2luZG93LmZyYW1lRWxlbWVudCkge1xuXHRcdGlmICghISQodGhpcy5mcmFtZUVsZW1lbnQpLmNsb3Nlc3QoJy5NYWluSW50ZXJhY3RpdmVDYXJkJykubGVuZ3RoKSB7XG5cdFx0XHQkKCcuTGF5b3V0QmxhbmsuUGFnZScpLmFkZENsYXNzKCdNYWluSW50ZXJhY3RpdmVDYXJkJyk7XG5cdFx0fVxuXHR9XG59KTsiLCIoZnVuY3Rpb24oJCwgd2luZG93LCBkb2N1bWVudCwgU2FwcGhpcmVXaWRnZXRzKSB7XG5cdGNvbnN0IEZvcndhcmRQYXRpZW50Q29tcG9uZW50ID0gKCkgPT4ge1xuXHRcdGNvbnN0ICRhbGxPcHRpb25zID0gJCgnLkZvcndhcmRMb2NhdGlvbnNDb250ZW50Jyk7XG5cdFx0Y29uc3QgJG11bHRpcGxlID0gJCgnLkZvcndhcmRMb2NhdGlvbnNEaXYnKTtcblx0XHRjb25zdCAkc2luZ2xlID0gJCgnLlNpbmdsZUxvY2F0aW9uJyk7XG5cblx0XHQkKCdib2R5JykubW91c2V1cChmdW5jdGlvbihlKSB7XG5cdFx0XHRjb25zdCBub3RDbGlja0luQWxsT3B0aW9ucyA9ICEkYWxsT3B0aW9ucy5pcyhlLnRhcmdldCkgJiYgJGFsbE9wdGlvbnMuaGFzKGUudGFyZ2V0KS5sZW5ndGggPT09IDA7XG5cdFx0XHRjb25zdCBub3RDbGlja0luTXVsdGlwbGUgPSAhJG11bHRpcGxlLmlzKGUudGFyZ2V0KSAmJiAkbXVsdGlwbGUuaGFzKGUudGFyZ2V0KS5sZW5ndGggPT09IDA7XG5cdFx0XHRjb25zdCBub3RDbGlja0luU2luZ2xlID0gISRzaW5nbGUuaXMoZS50YXJnZXQpICYmICRzaW5nbGUuaGFzKGUudGFyZ2V0KS5sZW5ndGggPT09IDA7XG5cdFx0XHRjb25zdCBpc09wZW4gPSAkbXVsdGlwbGUuaXMoJzp2aXNpYmxlJyk7XG5cblx0XHRcdGlmIChub3RDbGlja0luQWxsT3B0aW9ucyAmJiBub3RDbGlja0luTXVsdGlwbGUgJiYgbm90Q2xpY2tJblNpbmdsZSAmJiBpc09wZW4pIHtcblx0XHRcdFx0JG11bHRpcGxlLmNsaWNrKCk7XG5cdFx0XHR9XG5cdFx0fSk7XG5cdH07XG5cblx0U2FwcGhpcmVXaWRnZXRzLkxheW91dEVtZXJnZW5jeSA9IHtcblx0XHRGb3J3YXJkUGF0aWVudENvbXBvbmVudCxcblx0fTtcbn0pKGpRdWVyeSwgd2luZG93LCBkb2N1bWVudCwgU2FwcGhpcmVXaWRnZXRzKTtcbiIsIi8qIENvbXBvbmVudCBMYXlvdXRQb3B1cCAqL1xyXG4oZnVuY3Rpb24oJCwgd2luZG93LCBkb2N1bWVudCwgU2FwcGhpcmVXaWRnZXRzKSB7XHJcblx0dmFyIHBvcHVwV2lkdGg7XHJcblx0dmFyIHBvcHVwTWluV2lkdGg7XHJcblx0dmFyIHBvcHVwSGVpZ2h0O1xyXG5cdHZhciBwb3B1cE1pbkhlaWdodDtcclxuXHR2YXIgcG9wdXBNYXhIZWlnaHQ7XHJcblx0dmFyIHBvcHVwV2lkdGhQZXJjZW50YWdlO1xyXG5cdHZhciBsYXlvdXRQb3B1cFJlc2l6ZVRpbWVyO1xyXG5cclxuXHR2YXIgJHBvcHVwID0gJCgnLkxheW91dFBvcHVwJyk7XHJcblx0dmFyICRvc1BvcHVwID0gd2luZG93LnBhcmVudC4kKCcub3MtaW50ZXJuYWwtUG9wdXAub3MtaW50ZXJuYWwtdWktZGlhbG9nJyk7XHJcblx0dmFyICRvc1BvcHVwQ29udGVudCA9IHdpbmRvdy5wYXJlbnQuJCgnLm9zLWludGVybmFsLXVpLWRpYWxvZy1jb250ZW50Lm9zLWludGVybmFsLXVpLXdpZGdldC1jb250ZW50Jyk7XHJcblx0dmFyICRvdmVybGF5ID0gd2luZG93LnBhcmVudC4kKCcub3MtaW50ZXJuYWwtdWktd2lkZ2V0LW92ZXJsYXknKTtcclxuXHR2YXIgcG9wdXBTaXplO1xyXG5cdHZhciBwYWRkaW5nQm9keTtcclxuXHJcblx0Y29uc3QgQk9EWV9QQURESU5HX1RPUF9CT1RUT00gPSAzMjtcclxuXHJcblx0Y29uc3QgY3JlYXRlID0gZnVuY3Rpb24oY29uZmlnKSB7XHJcblx0XHRTYXBwaGlyZVdpZGdldHMuTGF5b3V0UG9wdXAuY29uZmlnID0gY29uZmlnO1xyXG5cdFx0cG9wdXBTaXplID0gU2FwcGhpcmVXaWRnZXRzLkxheW91dFBvcHVwLmNvbmZpZy5Qb3B1cFNpemU7XHJcblx0XHRwYWRkaW5nQm9keSA9IGNvbmZpZy5ub0NvbnRlbnRQYWRkaW5nID8gMCA6IEJPRFlfUEFERElOR19UT1BfQk9UVE9NO1xyXG5cclxuXHRcdCQoZnVuY3Rpb24oKSB7XHJcblx0XHRcdCQoJ2JvZHknKS5hZGRDbGFzcygnTGF5b3V0UG9wdXAnKTsgLy8gYmVjYXVzZSBkYXRldGltZXJhbmdlcGlja2VyIGlzIGF0dGFjaGVkIHRvIGJvZHlcclxuXHJcblx0XHRcdGlmIChTYXBwaGlyZVdpZGdldHMuTGF5b3V0UG9wdXAuY29uZmlnLmlzVG91Y2gpIHtcclxuXHRcdFx0XHQkcG9wdXAuYWRkQ2xhc3MoJ2lzVG91Y2gnKTtcclxuXHRcdFx0XHQkKCdib2R5JykuYWRkQ2xhc3MoJ2lzVG91Y2gnKTsgLy8gYmVjYXVzZSBzZWxlY3QyIGlzIGF0dGFjaGVkIHRvIGJvZHlcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0dmFyIG9ic2VydmVyID0gbmV3IE11dGF0aW9uT2JzZXJ2ZXIoZnVuY3Rpb24obXV0YXRpb25zKSB7XHJcblx0XHRcdFx0bXV0YXRpb25zLmZvckVhY2goZnVuY3Rpb24obXV0YXRpb24sIGluZGV4KSB7XHJcblx0XHRcdFx0XHQvLyBBdm9pZCB0byByZWRyYXcgdGhlIGRpYWxvZyBpZiBpdCBpcyBvbmUgdGhlIGZvbGxvd2luZyBwb3B1cHNcclxuXHRcdFx0XHRcdGlmIChcclxuXHRcdFx0XHRcdFx0U2FwcGhpcmVXaWRnZXRzLlBvcHVwc1RvQXZvaWRNdXRhdGlvbnMgJiZcclxuXHRcdFx0XHRcdFx0U2FwcGhpcmVXaWRnZXRzLlBvcHVwc1RvQXZvaWRNdXRhdGlvbnMuc29tZShlID0+ICQoYC4ke2V9YCkubGVuZ3RoKVxyXG5cdFx0XHRcdFx0KSB7XHJcblx0XHRcdFx0XHRcdHJldHVybiBmYWxzZTtcclxuXHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0XHRyZWRyYXdEaWFsb2dXaW5kb3coKTtcclxuXHRcdFx0XHR9KTtcclxuXHRcdFx0fSk7XHJcblxyXG5cdFx0XHRvYnNlcnZlci5vYnNlcnZlKGRvY3VtZW50LmJvZHksIHtcclxuXHRcdFx0XHRjaGlsZExpc3Q6IHRydWUsXHJcblx0XHRcdFx0c3VidHJlZTogdHJ1ZSxcclxuXHRcdFx0XHRhdHRyaWJ1dGVzOiBmYWxzZSxcclxuXHRcdFx0fSk7XHJcblxyXG5cdFx0XHQkKCdib2R5JykuY3NzKCd2aXNpYmlsaXR5JywgJ2hpZGRlbicpO1xyXG5cdFx0fSk7XHJcblxyXG5cdFx0JCh3aW5kb3cpLmxvYWQoZnVuY3Rpb24oKSB7XHJcblx0XHRcdCQodGhpcy5mcmFtZUVsZW1lbnQpLmNzcyh7XHJcblx0XHRcdFx0d2lkdGg6ICcxMDAlJyxcclxuXHRcdFx0XHRoZWlnaHQ6ICcxMDAlJyxcclxuXHRcdFx0fSk7XHJcblxyXG5cdFx0XHRzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdHJlc2l6ZURpYWxvZygpO1xyXG5cdFx0XHRcdHJlc2l6ZUNvbnRlbnQoKTtcclxuXHRcdFx0XHQkKCdib2R5JykuY3NzKCd2aXNpYmlsaXR5JywgJ3Zpc2libGUnKTtcclxuXHRcdFx0fSwgMTUwKTtcclxuXHJcblx0XHRcdG9zQWpheEJhY2tlbmQuQmluZEFmdGVyQWpheFJlcXVlc3QoU2FwcGhpcmVXaWRnZXRzLkxheW91dFBvcHVwLnJlZHJhd0RpYWxvZ1dpbmRvdyk7XHJcblx0XHR9KTtcclxuXHJcblx0XHQkKHdpbmRvdy5wYXJlbnQpXHJcblx0XHRcdC5vZmYoJ3Jlc2l6ZS5MYXlvdXRQb3B1cCcpXHJcblx0XHRcdC5vbigncmVzaXplLkxheW91dFBvcHVwJywgZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0cmVkcmF3RGlhbG9nV2luZG93KCk7XHJcblx0XHRcdH0pO1xyXG5cdH07XHJcblxyXG5cdGNvbnN0IHJlZHJhd0RpYWxvZ1dpbmRvdyA9IGZ1bmN0aW9uKCkge1xyXG5cdFx0Y2xlYXJUaW1lb3V0KGxheW91dFBvcHVwUmVzaXplVGltZXIpO1xyXG5cdFx0bGF5b3V0UG9wdXBSZXNpemVUaW1lciA9IHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XHJcblx0XHRcdHJlc2l6ZURpYWxvZygpO1xyXG5cdFx0XHRyZXNpemVDb250ZW50KCk7XHJcblx0XHRcdCQoJ2JvZHknKS5jc3MoJ3Zpc2liaWxpdHknLCAndmlzaWJsZScpO1xyXG5cdFx0fSwgMzAwKTtcclxuXHR9O1xyXG5cclxuXHRjb25zdCByZXNpemVEaWFsb2cgPSBmdW5jdGlvbigpIHtcclxuXHRcdGlmIChTYXBwaGlyZVdpZGdldHMuTGF5b3V0UG9wdXAuY29uZmlnLmhhc0Nsb3NlKSB7XHJcblx0XHRcdHdpbmRvdy5wYXJlbnQuJCgnLm9zLWludGVybmFsLXVpLWRpYWxvZy10aXRsZWJhcicpLnNob3coKTtcclxuXHJcblx0XHRcdGlmICh3aW5kb3cudG9wLl9pZnJhbWVQb3B1cCAhPSB1bmRlZmluZWQgfHwgZmFsc2UpIHtcclxuXHRcdFx0XHRjb25zdCAkY2xvc2VCdXR0b24gPSB3aW5kb3cucGFyZW50LiQoJy5vcy1pbnRlcm5hbC11aS1kaWFsb2ctdGl0bGViYXItY2xvc2UnKTtcclxuXHJcblx0XHRcdFx0JGNsb3NlQnV0dG9uLnJlbW92ZUF0dHIoJ2hyZWYnKTtcclxuXHRcdFx0XHQkY2xvc2VCdXR0b24ub2ZmKCdjbGljaycpLm9uKCdjbGljaycsICgpID0+IHdpbmRvdy50b3AuX2lmcmFtZVBvcHVwLlNhcHBoaXJlV2lkZ2V0cy5TYXBwaGlyZVBvcHVwLmNsb3NlKCkpO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblxyXG5cdFx0aWYgKHdpbmRvdy50b3AuJCgnYm9keScpLmhhc0NsYXNzKCdMYXlvdXRCYXNlJykpIHtcclxuXHRcdFx0d2luZG93LnRvcC4kKCdib2R5JykuY3NzKHtcclxuXHRcdFx0XHRvdmVyZmxvd1k6ICdoaWRkZW4nLFxyXG5cdFx0XHR9KTtcclxuXHRcdH1cclxuXHJcblx0XHQkb3ZlcmxheS53aWR0aCgnMTAwJScpO1xyXG5cclxuXHRcdGNhbGNXaWR0aFBlcmNlbnRhZ2UocG9wdXBTaXplLCAkb3NQb3B1cENvbnRlbnQpO1xyXG5cclxuXHRcdCRvc1BvcHVwLmNzcyh7XHJcblx0XHRcdGxlZnQ6ICd1bnNldCcsXHJcblx0XHRcdHRvcDogJ3Vuc2V0JyxcclxuXHRcdFx0aGVpZ2h0OiAnYXV0bycsXHJcblx0XHRcdG1pbldpZHRoOiBwb3B1cE1pbldpZHRoICsgJ3B4JyxcclxuXHRcdFx0d2lkdGg6IHBvcHVwV2lkdGggKyAncHgnLFxyXG5cdFx0fSk7XHJcblx0fTtcclxuXHJcblx0Y29uc3QgcmVzaXplQ29udGVudCA9IGZ1bmN0aW9uKCkge1xyXG5cdFx0dmFyICRib2R5ID0gJCgnLkxheW91dFBvcHVwX19ib2R5X19jb250ZW50Jyk7XHJcblx0XHR2YXIgY29udGVudFNjcm9sbFRvcCA9ICRib2R5LnNjcm9sbFRvcCgpO1xyXG5cclxuXHRcdGlmIChwb3B1cFNpemUgPT09ICdTbWFsbCcgJiYgJCgnLmRhdGVyYW5nZXBpY2tlcjp2aXNpYmxlJykubGVuZ3RoID4gMCkge1xyXG5cdFx0XHQvLyBza2lwIHRoZSByZXNldCBvZiAuTGF5b3V0UG9wdXBfX2JvZHlfX2NvbnRlbnRcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdCRib2R5LmNzcyh7XHJcblx0XHRcdFx0aGVpZ2h0OiAnYXV0bycsXHJcblx0XHRcdH0pO1xyXG5cdFx0fVxyXG5cclxuXHRcdGxldCBib2R5Q29udGVudCA9IHBhZGRpbmdCb2R5XHJcblx0XHRcdD8gJCgnLkxheW91dFBvcHVwX19ib2R5X19jb250ZW50JylbMF0uc2Nyb2xsSGVpZ2h0XHJcblx0XHRcdDogJCgnLkxheW91dFBvcHVwX19ib2R5X19jb250ZW50JykuaGVpZ2h0KCk7XHJcblxyXG5cdFx0dmFyIGhlYWRlckhlaWdodCA9ICQoJy5MYXlvdXRQb3B1cF9faGVhZGVyJykuaW5uZXJIZWlnaHQoKSB8fCAwO1xyXG5cdFx0dmFyIGludHJvSGVpZ2h0ID0gJCgnLkxheW91dFBvcHVwX19pbnRybycpLmlubmVySGVpZ2h0KCkgfHwgMDtcclxuXHRcdHZhciBib2R5SGVpZ2h0ID0gYm9keUNvbnRlbnQgfHwgMDtcclxuXHRcdHZhciBmb290ZXJIZWlnaHQgPSAkKCcuTGF5b3V0UG9wdXBfX2Zvb3RlcicpLmlubmVySGVpZ2h0KCkgfHwgMDtcclxuXHRcdHZhciBjb250ZW50SGVpZ2h0ID0gaGVhZGVySGVpZ2h0ICsgaW50cm9IZWlnaHQgKyBib2R5SGVpZ2h0ICsgZm9vdGVySGVpZ2h0ICsgcGFkZGluZ0JvZHk7XHJcblx0XHR2YXIgZGlhbG9nSGVpZ2h0ID0gd2luZG93LnBhcmVudC4kKCcub3MtaW50ZXJuYWwtUG9wdXAub3MtaW50ZXJuYWwtdWktZGlhbG9nJykub3V0ZXJIZWlnaHQoKTtcclxuXHRcdGNvbnN0IHdpbmRvd0hlaWdodCA9ICQod2luZG93LnBhcmVudCkuaGVpZ2h0KCk7XHJcblxyXG5cdFx0aWYgKHBvcHVwU2l6ZSA9PT0gJ1NtYWxsJykge1xyXG5cdFx0XHR2YXIgcGFyZW50SGVpZ2h0ID0gJCh3aW5kb3cucGFyZW50KS5oZWlnaHQoKTtcclxuXHJcblx0XHRcdGlmIChjb250ZW50SGVpZ2h0ID4gcGFyZW50SGVpZ2h0KSB7XHJcblx0XHRcdFx0JG9zUG9wdXBDb250ZW50LmhlaWdodChwYXJlbnRIZWlnaHQgLSA3MCk7XHJcblx0XHRcdFx0JGJvZHkuaGVpZ2h0KCRvc1BvcHVwQ29udGVudC5oZWlnaHQoKSAtIHBhZGRpbmdCb2R5KTtcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHQkb3NQb3B1cENvbnRlbnQuaGVpZ2h0KGNvbnRlbnRIZWlnaHQpO1xyXG5cdFx0XHR9XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHRpZiAoY29udGVudEhlaWdodCA8IGRpYWxvZ0hlaWdodCAmJiBTYXBwaGlyZVdpZGdldHMuTGF5b3V0UG9wdXAuY29uZmlnLmlzRml4ZWRIZWlnaHQpIHtcclxuXHRcdFx0XHR2YXIgZm9yY2VkQm9keUhlaWdodCA9IGRpYWxvZ0hlaWdodCAtIGhlYWRlckhlaWdodCAtIGludHJvSGVpZ2h0IC0gZm9vdGVySGVpZ2h0IC0gcGFkZGluZ0JvZHk7XHJcblx0XHRcdFx0JGJvZHkuaGVpZ2h0KGZvcmNlZEJvZHlIZWlnaHQpO1xyXG5cdFx0XHR9IGVsc2UgaWYgKGNvbnRlbnRIZWlnaHQgPCBkaWFsb2dIZWlnaHQpIHtcclxuXHRcdFx0XHQkb3NQb3B1cENvbnRlbnQuaGVpZ2h0KGNvbnRlbnRIZWlnaHQpO1xyXG5cdFx0XHRcdGlmIChjb250ZW50SGVpZ2h0IDwgcG9wdXBNaW5IZWlnaHQpIHtcclxuXHRcdFx0XHRcdHZhciBkaWZlcmVuY2UgPSBwb3B1cE1pbkhlaWdodCAtIGNvbnRlbnRIZWlnaHQ7XHJcblx0XHRcdFx0XHQkYm9keS5oZWlnaHQoYm9keUhlaWdodCArIGRpZmVyZW5jZSk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9IGVsc2UgaWYgKGNvbnRlbnRIZWlnaHQgPj0gZGlhbG9nSGVpZ2h0ICYmIFNhcHBoaXJlV2lkZ2V0cy5MYXlvdXRQb3B1cC5jb25maWcuaXNGaXhlZEhlaWdodCkge1xyXG5cdFx0XHRcdHZhciBmb3JjZWRCb2R5SGVpZ2h0ID0gZGlhbG9nSGVpZ2h0IC0gaGVhZGVySGVpZ2h0IC0gaW50cm9IZWlnaHQgLSBmb290ZXJIZWlnaHQgLSBwYWRkaW5nQm9keTtcclxuXHRcdFx0XHQkYm9keS5oZWlnaHQoZm9yY2VkQm9keUhlaWdodCk7XHJcblx0XHRcdH0gZWxzZSBpZiAoY29udGVudEhlaWdodCA+PSBkaWFsb2dIZWlnaHQpIHtcclxuXHRcdFx0XHRpZiAoY29udGVudEhlaWdodCA+IHBvcHVwTWF4SGVpZ2h0KSB7XHJcblx0XHRcdFx0XHQkb3NQb3B1cENvbnRlbnQuaGVpZ2h0KHBvcHVwTWF4SGVpZ2h0KTtcclxuXHRcdFx0XHRcdHZhciBmb3JjZWRCb2R5SGVpZ2h0ID0gcG9wdXBNYXhIZWlnaHQgLSBoZWFkZXJIZWlnaHQgLSBpbnRyb0hlaWdodCAtIGZvb3RlckhlaWdodCAtIHBhZGRpbmdCb2R5O1xyXG5cdFx0XHRcdFx0JGJvZHkuaGVpZ2h0KGZvcmNlZEJvZHlIZWlnaHQpO1xyXG5cdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHQkb3NQb3B1cENvbnRlbnQuaGVpZ2h0KGNvbnRlbnRIZWlnaHQpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRjb25zb2xlLndhcm4oJ1VuZXhwZWN0ZWQgY29tYmluYXRpb24uLi4nKTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cclxuXHRcdC8vIEhhbmRsZSB3aGVuIERhdGVUaW1lUmFuZ2VQaWNrZXIgaXMgb3BlbmVkXHJcblx0XHR2YXIgZGF0ZVJhbmdlUGlja2VyID0gJCgnLmRhdGVyYW5nZXBpY2tlcjp2aXNpYmxlJyk7XHJcblx0XHRpZiAoZGF0ZVJhbmdlUGlja2VyLmxlbmd0aCA9PT0gMSkge1xyXG5cdFx0XHRpZiAoZGF0ZVJhbmdlUGlja2VyWzBdLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmJvdHRvbSA+IGRpYWxvZ0hlaWdodCkge1xyXG5cdFx0XHRcdHZhciBkaWZmZXJlbmNlID0gZGF0ZVJhbmdlUGlja2VyWzBdLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmJvdHRvbSAtIGRpYWxvZ0hlaWdodDtcclxuXHRcdFx0XHR2YXIgYm9keUhlaWdodCA9ICQoJy5MYXlvdXRQb3B1cF9fYm9keV9fY29udGVudCcpLm91dGVySGVpZ2h0KHRydWUpO1xyXG5cclxuXHRcdFx0XHQkKCcuTGF5b3V0UG9wdXBfX2JvZHlfX2NvbnRlbnQnKS5oZWlnaHQoYm9keUhlaWdodCArIGRpZmZlcmVuY2UgKyBwYWRkaW5nQm9keSk7XHJcblx0XHRcdFx0JG9zUG9wdXBDb250ZW50LmhlaWdodCgkKCdib2R5JylbMF0uc2Nyb2xsSGVpZ2h0KTtcclxuXHJcblx0XHRcdFx0Y29uc3QgcG9wdXBUb3RhbEhlaWdodCA9ICRvc1BvcHVwQ29udGVudC5oZWlnaHQoKTtcclxuXHRcdFx0XHRjb25zdCBuZXdDb250ZW50SGVpZ2h0ID0gJCgnLkxheW91dFBvcHVwX19ib2R5Jykub3V0ZXJIZWlnaHQodHJ1ZSkgKyBoZWFkZXJIZWlnaHQgKyBpbnRyb0hlaWdodCArIGZvb3RlckhlaWdodDtcclxuXHJcblx0XHRcdFx0aWYgKHdpbmRvd0hlaWdodCA8IDcyMCkge1xyXG5cdFx0XHRcdFx0Y29uc3QgY29vcmRzID0gZGF0ZVJhbmdlUGlja2VyWzBdLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xyXG5cdFx0XHRcdFx0dmFyIHBvaW50ID0gd2luZG93LnBhcmVudC5zY3JvbGxZICsgY29vcmRzLnRvcCAtIGNvb3Jkcy5oZWlnaHQ7XHJcblx0XHRcdFx0XHRkYXRlUmFuZ2VQaWNrZXIuYWRkQ2xhc3MoJ2Ryb3AtdXAnKS5jc3MoJ3RvcCcsIHBvaW50KTtcclxuXHRcdFx0XHR9IGVsc2UgaWYgKHdpbmRvd0hlaWdodCA8IDk4MCAmJiBuZXdDb250ZW50SGVpZ2h0ID4gcG9wdXBUb3RhbEhlaWdodCkge1xyXG5cdFx0XHRcdFx0JG9zUG9wdXBDb250ZW50LmNzcyh7XHJcblx0XHRcdFx0XHRcdG1heEhlaWdodDogbmV3Q29udGVudEhlaWdodCArICdweCcsXHJcblx0XHRcdFx0XHR9KTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHJcblx0XHQkYm9keS5zY3JvbGxUb3AoY29udGVudFNjcm9sbFRvcCk7XHJcblx0fTtcclxuXHJcblx0Y29uc3QgaW5jcmVhc2VIZWlnaHQgPSBmdW5jdGlvbihkaWZlcmVuY2UpIHtcclxuXHRcdCRvc1BvcHVwQ29udGVudC5oZWlnaHQoJG9zUG9wdXBDb250ZW50LmhlaWdodCgpICsgZGlmZXJlbmNlKTtcclxuXHR9O1xyXG5cclxuXHRjb25zdCBzY3JvbGxUb0VsZW1lbnQgPSBmdW5jdGlvbigkZWxlbWVudCkge1xyXG5cdFx0dmFyICR0YXJnZXRFbGVtZW50ID0gJGVsZW1lbnQ7XHJcblx0XHRpZiAoISEkdGFyZ2V0RWxlbWVudC5sZW5ndGgpIHtcclxuXHRcdFx0dmFyIHNjcm9sbFRvT2Zmc2V0SW50ZXJ2YWw7XHJcblx0XHRcdHNjcm9sbFRvT2Zmc2V0SW50ZXJ2YWwgPSBzZXRJbnRlcnZhbChmdW5jdGlvbigpIHtcclxuXHRcdFx0XHRjbGVhckludGVydmFsKHNjcm9sbFRvT2Zmc2V0SW50ZXJ2YWwpO1xyXG5cdFx0XHRcdHZhciBoZWFkZXJIZWlnaHQgPSAkKCcuTGF5b3V0UG9wdXBfX2hlYWRlcicpLm91dGVySGVpZ2h0KHRydWUpIHx8IDA7XHJcblx0XHRcdFx0dmFyIGludHJvSGVpZ2h0ID0gJCgnLkxheW91dFBvcHVwX19pbnRybycpLm91dGVySGVpZ2h0KHRydWUpIHx8IDA7XHJcblx0XHRcdFx0dmFyIGN1cnJlbnRCb2R5U2Nyb2xsID0gJCgnLkxheW91dFBvcHVwX19ib2R5X19jb250ZW50JylbMF0uc2Nyb2xsVG9wIHx8IDA7XHJcblx0XHRcdFx0dmFyIHRhcmdldEVsZW1lbnRPZmZzZXRUb3AgPSAkdGFyZ2V0RWxlbWVudC5vZmZzZXQoKS50b3AgLSBoZWFkZXJIZWlnaHQgLSBpbnRyb0hlaWdodCArIGN1cnJlbnRCb2R5U2Nyb2xsIC0gMjA7XHJcblx0XHRcdFx0JCgnLkxheW91dFBvcHVwX19ib2R5X19jb250ZW50Jykuc2Nyb2xsVG9wKHRhcmdldEVsZW1lbnRPZmZzZXRUb3ApO1xyXG5cdFx0XHR9LCAyNTApO1xyXG5cdFx0fVxyXG5cdH07XHJcblxyXG5cdGNvbnN0IGNhbGNXaWR0aFBlcmNlbnRhZ2UgPSAoKSA9PiB7XHJcblx0XHRjb25zdCB3aW5kb3dIZWlnaHQgPSAkKHdpbmRvdy5wYXJlbnQpLmhlaWdodCgpO1xyXG5cdFx0Y29uc3Qgd2luZG93V2lkdGggPSAkKHdpbmRvdy5wYXJlbnQpLndpZHRoKCk7XHJcblxyXG5cdFx0aWYgKHBvcHVwU2l6ZSA9PT0gJ1NtYWxsJykge1xyXG5cdFx0XHRsZXQgcGVyY2VudGFnZSA9IDAuMzM7XHJcblxyXG5cdFx0XHRpZiAod2luZG93V2lkdGggPD0gMTAyNCkgcGVyY2VudGFnZSA9IDAuNTtcclxuXHRcdFx0ZWxzZSBpZiAod2luZG93V2lkdGggPiAxMDI0ICYmIHdpbmRvd1dpZHRoIDw9IDE0NDApIHBlcmNlbnRhZ2UgPSAwLjQ7XHJcblxyXG5cdFx0XHRwb3B1cFdpZHRoID0gcGFyc2VJbnQod2luZG93V2lkdGggKiBwZXJjZW50YWdlKTtcclxuXHRcdFx0cG9wdXBNaW5XaWR0aCA9IDQwMDtcclxuXHRcdH0gZWxzZSBpZiAocG9wdXBTaXplID09PSAnTWVkaXVtJykge1xyXG5cdFx0XHRpZiAod2luZG93V2lkdGggPD0gMTAyNCkgcG9wdXBXaWR0aFBlcmNlbnRhZ2UgPSAwLjg7XHJcblx0XHRcdGVsc2Uge1xyXG5cdFx0XHRcdHN3aXRjaCAoU2FwcGhpcmVXaWRnZXRzLkxheW91dFBvcHVwLmNvbmZpZy5Qb3B1cFdpZHRoKSB7XHJcblx0XHRcdFx0XHRjYXNlICdYU21hbGwnOlxyXG5cdFx0XHRcdFx0XHRwb3B1cE1pbldpZHRoID0gMjAwO1xyXG5cdFx0XHRcdFx0XHRwb3B1cFdpZHRoUGVyY2VudGFnZSA9IDAuMjtcclxuXHRcdFx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdFx0XHRjYXNlICdTbWFsbCc6XHJcblx0XHRcdFx0XHRcdHBvcHVwTWluV2lkdGggPSAzMDA7XHJcblx0XHRcdFx0XHRcdHBvcHVwV2lkdGhQZXJjZW50YWdlID0gMC4zO1xyXG5cdFx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0XHRcdGNhc2UgJ01lZGl1bSc6XHJcblx0XHRcdFx0XHRcdHBvcHVwTWluV2lkdGggPSA3MDA7XHJcblx0XHRcdFx0XHRcdHBvcHVwV2lkdGhQZXJjZW50YWdlID0gMC42O1xyXG5cdFx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0XHRcdGRlZmF1bHQ6XHJcblx0XHRcdFx0XHRcdHBvcHVwTWluV2lkdGggPSA3MDA7XHJcblx0XHRcdFx0XHRcdHBvcHVwV2lkdGhQZXJjZW50YWdlID0gMC43O1xyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0cG9wdXBXaWR0aFBlcmNlbnRhZ2UgPSBTYXBwaGlyZVdpZGdldHMuTGF5b3V0UG9wdXAuY29uZmlnLmlzVG91Y2ggPyAwLjggOiBwb3B1cFdpZHRoUGVyY2VudGFnZTtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0cG9wdXBXaWR0aCA9IHBhcnNlSW50KHdpbmRvd1dpZHRoICogcG9wdXBXaWR0aFBlcmNlbnRhZ2UpO1xyXG5cdFx0XHRwb3B1cE1pbkhlaWdodCA9IDEwMDtcclxuXHRcdFx0cG9wdXBNYXhIZWlnaHQgPSBTYXBwaGlyZVdpZGdldHMuTGF5b3V0UG9wdXAuY29uZmlnLmlzVG91Y2hcclxuXHRcdFx0XHQ/IHBhcnNlSW50KHdpbmRvd0hlaWdodCAqIDAuOSlcclxuXHRcdFx0XHQ6IHBhcnNlSW50KHdpbmRvd0hlaWdodCAqIDAuNyk7XHJcblxyXG5cdFx0XHRpZiAoU2FwcGhpcmVXaWRnZXRzLkxheW91dFBvcHVwLmNvbmZpZy5pc0ZpeGVkSGVpZ2h0KSBwb3B1cEhlaWdodCA9IHBvcHVwTWF4SGVpZ2h0O1xyXG5cdFx0XHRlbHNlIHBvcHVwSGVpZ2h0ID0gd2luZG93LnBhcmVudC4kKCcub3MtaW50ZXJuYWwtUG9wdXAub3MtaW50ZXJuYWwtdWktZGlhbG9nJykub3V0ZXJIZWlnaHQoKTtcclxuXHJcblx0XHRcdCRvc1BvcHVwQ29udGVudC5jc3Moe1xyXG5cdFx0XHRcdG1heEhlaWdodDogcG9wdXBNYXhIZWlnaHQgKyAncHgnLFxyXG5cdFx0XHRcdG1pbkhlaWdodDogcG9wdXBNaW5IZWlnaHQgKyAncHgnLFxyXG5cdFx0XHRcdGhlaWdodDogcG9wdXBIZWlnaHQgKyAncHgnLFxyXG5cdFx0XHR9KTtcclxuXHRcdH0gZWxzZSBpZiAocG9wdXBTaXplID09PSAnTGFyZ2UnKSB7XHJcblx0XHRcdHBvcHVwTWluV2lkdGggPSBwYXJzZUludCh3aW5kb3dXaWR0aCAqIDAuOCk7XHJcblx0XHRcdHBvcHVwTWF4SGVpZ2h0ID0gcGFyc2VJbnQod2luZG93SGVpZ2h0ICogMC45KTtcclxuXHRcdH0gZWxzZSBpZiAocG9wdXBTaXplID09PSAnRml4ZWQnKSB7XHJcblx0XHRcdHBvcHVwV2lkdGggPSBTYXBwaGlyZVdpZGdldHMuU2FwcGhpcmVQb3B1cC5wb3B1cFdpZHRoO1xyXG5cdFx0XHRwb3B1cE1pbldpZHRoID0gU2FwcGhpcmVXaWRnZXRzLlNhcHBoaXJlUG9wdXAucG9wdXBXaWR0aDtcclxuXHRcdH1cclxuXHR9O1xyXG5cclxuXHRTYXBwaGlyZVdpZGdldHMuTGF5b3V0UG9wdXAgPSB7XHJcblx0XHRjcmVhdGUsXHJcblx0XHRyZXNpemVEaWFsb2csXHJcblx0XHRyZXNpemVDb250ZW50LFxyXG5cdFx0aW5jcmVhc2VIZWlnaHQsXHJcblx0XHRyZWRyYXdEaWFsb2dXaW5kb3csXHJcblx0XHRzY3JvbGxUb0VsZW1lbnQsXHJcblx0fTtcclxufSkoalF1ZXJ5LCB3aW5kb3csIGRvY3VtZW50LCBTYXBwaGlyZVdpZGdldHMpO1xyXG5cclxuJCh3aW5kb3cpLnVubG9hZChmdW5jdGlvbigpIHtcclxuXHRpZiAoISEkKCcuTGF5b3V0UG9wdXAnKS5sZW5ndGgpIHtcclxuXHRcdHdpbmRvdy50b3AuJCgnYm9keScpLmNzcyh7XHJcblx0XHRcdG92ZXJmbG93WTogJ3Njcm9sbCcsXHJcblx0XHR9KTtcclxuXHR9XHJcbn0pO1xyXG4iLCIvKiBDb21wb25lbnQgQWN0aW9uc01lbnUgKi9cbihmdW5jdGlvbigkLCB3aW5kb3csIFNhcHBoaXJlV2lkZ2V0cykge1xuXHR2YXIgY3JlYXRlID0gZnVuY3Rpb24oY29uZmlnKSB7XG5cdFx0dmFyICR0cmlnZ2VyRWxlbWVudCA9ICQoJyMnICsgY29uZmlnLnRyaWdnZXJFbGVtZW50KTtcblx0XHR2YXIgJGNvbnRlbnRFbGVtZW50ID0gJCgnIycgKyBjb25maWcuY29udGVudEVsZW1lbnQpO1xuXG5cdFx0aWYgKCRjb250ZW50RWxlbWVudC50ZXh0KCkubGVuZ3RoIDwgMSkge1xuXHRcdFx0JHRyaWdnZXJFbGVtZW50LmhpZGUoKTtcblx0XHR9XG5cblx0XHQkKGZ1bmN0aW9uKCkge1xuXHRcdFx0Ly8gaW5zaWRlIGEgZG9jdW1lbnQgcmVhZHkgZHVlIHRvIHNhcHBoaXJlIHBvcHVwIGJpbmRlZCBldmVudHNcblx0XHRcdHdpbmRvdy5zZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuXHRcdFx0XHR2YXIgcG9zaXRpb24gPSBjb25maWcucG9zaXRpb247XG5cdFx0XHRcdGlmIChjb25maWcubG9jYWxlID09PSAnQVInKSB7XG5cdFx0XHRcdFx0c3dpdGNoIChjb25maWcucG9zaXRpb24pIHtcblx0XHRcdFx0XHRcdGNhc2UgJ3JpZ2h0Jzpcblx0XHRcdFx0XHRcdFx0cG9zaXRpb24gPSAnbGVmdCc7XG5cdFx0XHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRcdFx0Y2FzZSAnbGVmdCc6XG5cdFx0XHRcdFx0XHRcdHBvc2l0aW9uID0gJ3JpZ2h0Jztcblx0XHRcdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdFx0XHRjYXNlICdib3R0b20tbGVmdCc6XG5cdFx0XHRcdFx0XHRcdHBvc2l0aW9uID0gJ2JvdHRvbS1yaWdodCc7XG5cdFx0XHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRcdFx0Y2FzZSAnYm90dG9tLXJpZ2h0Jzpcblx0XHRcdFx0XHRcdFx0cG9zaXRpb24gPSAnYm90dG9tLWxlZnQnO1xuXHRcdFx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0XHRcdGNhc2UgJ3RvcC1sZWZ0Jzpcblx0XHRcdFx0XHRcdFx0cG9zaXRpb24gPSAndG9wLXJpZ2h0Jztcblx0XHRcdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdFx0XHRjYXNlICd0b3AtcmlnaHQnOlxuXHRcdFx0XHRcdFx0XHRwb3NpdGlvbiA9ICd0b3AtbGVmdCc7XG5cdFx0XHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0XHQkdHJpZ2dlckVsZW1lbnQudG9vbHRpcHN0ZXIoe1xuXHRcdFx0XHRcdGNvbnRlbnQ6ICQoJzxzZWN0aW9uLz4nKS5hcHBlbmQoJGNvbnRlbnRFbGVtZW50LmNsb25lKHRydWUsIHRydWUpKSxcblx0XHRcdFx0XHR0cmlnZ2VyOiBjb25maWcudHJpZ2dlckV2ZW50LFxuXHRcdFx0XHRcdHBvc2l0aW9uOiBwb3NpdGlvbixcblx0XHRcdFx0XHRtYXhXaWR0aDogY29uZmlnLm1heFdpZHRoLFxuXHRcdFx0XHRcdHRoZW1lOlxuXHRcdFx0XHRcdFx0J3Rvb2x0aXBzdGVyLWxvY2F0aW9uLS0nICtcblx0XHRcdFx0XHRcdGNvbmZpZy5sb2NhdGlvbiArXG5cdFx0XHRcdFx0XHQnIEFjdGlvbnNNZW51LXRvb2x0aXAgUGFkZGluZy0tJyArXG5cdFx0XHRcdFx0XHRjb25maWcucGFkZGluZyArXG5cdFx0XHRcdFx0XHQnIEJvcmRlci0tJyArXG5cdFx0XHRcdFx0XHRjb25maWcuYm9yZGVyLFxuXHRcdFx0XHR9KTtcblx0XHRcdFx0JGNvbnRlbnRFbGVtZW50LnJlbW92ZSgpO1xuXHRcdFx0fSwgNTAwKTtcblx0XHR9KTtcblx0fTtcblxuXHRTYXBwaGlyZVdpZGdldHMuQWN0aW9uc01lbnUgPSB7XG5cdFx0Y3JlYXRlLFxuXHR9O1xufSkoalF1ZXJ5LCB3aW5kb3csIFNhcHBoaXJlV2lkZ2V0cyk7XG4iLCIvKiBDb21wb25lbnQgQnV0dG9uTGluayAqL1xuKGZ1bmN0aW9uKCQsIHdpbmRvdywgU2FwcGhpcmVXaWRnZXRzKSB7XG5cdGNvbnN0IGNyZWF0ZSA9IGNvbmZpZyA9PiB7XG5cdFx0JChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oKSB7XG5cdFx0XHRjb25zdCAkd2lkZ2V0ID0gJChgIyR7Y29uZmlnLndpZGdldElkfSAuQnV0dG9uQ2xpY2tgKTtcblxuXHRcdFx0JHdpZGdldC5vZmYoJ2NsaWNrJykub24oJ2NsaWNrJywgZnVuY3Rpb24oZSkge1xuXHRcdFx0XHRjb25zdCBfdGFyZ2V0ID0gJChlLnRhcmdldCk7XG5cblx0XHRcdFx0aWYgKF90YXJnZXQuY2xvc2VzdCgnLkJ1dHRvbkNsaWNrLmNsaWNrJykubGVuZ3RoID09IDApIHtcblx0XHRcdFx0XHQkKCcuQnV0dG9uQ2xpY2suY2xpY2snKS5yZW1vdmVDbGFzcygnY2xpY2snKTtcblx0XHRcdFx0XHQkKHRoaXMpLmFkZENsYXNzKCdjbGljaycpO1xuXHRcdFx0XHR9XG5cdFx0XHR9KTtcblx0XHR9KTtcblx0fTtcblxuXHRTYXBwaGlyZVdpZGdldHMuQnV0dG9uTGluayA9IHsgY3JlYXRlIH07XG59KShqUXVlcnksIHdpbmRvdywgU2FwcGhpcmVXaWRnZXRzKTtcbiIsIi8qIENvbXBvbmVudCBDYXJkQ2hhcnRzICovXG5TYXBwaGlyZVdpZGdldHMuQ2FyZENoYXJ0c1BvcHVwID0gKCkgPT4ge1xuXHQkKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigpIHtcblx0XHR3aW5kb3dbJ0NhcmRDaGFydHNTY3JvbGwnXSA9IHt9O1xuXHRcdGNvbnN0IGlzSW5zaWRlSWZyYW1lID0gd2luZG93LmZyYW1lRWxlbWVudCAhPSB1bmRlZmluZWQgfHwgZmFsc2U7XG5cblx0XHRsZXQgJGNvbXBvbmVudCA9ICQoJy5DYXJkQ2hhcnRzJyk7XG5cdFx0bGV0ICRoZWFkZXIgPSAkY29tcG9uZW50LmZpbmQoJy5DYXJkQ2hhcnRzX19IZWFkZXInKTtcblx0XHRsZXQgJGNvbnRlbnQgPSAkY29tcG9uZW50LmZpbmQoJy5DYXJkQ2hhcnRzX19Db250ZW50Jyk7XG5cdFx0bGV0ICRwcm9wZXJ0aWVzID0gJGNvbXBvbmVudC5maW5kKCcuQ2FyZENoYXJ0c19fUHJvcGVydGllcycpO1xuXHRcdGxldCAkaGVhZGVyRGl2ID0gJGNvbXBvbmVudC5maW5kKCcuQ2FyZENoYXJ0c19fSGVhZGVyQ2hhcnQgPiBkaXYnKTtcblx0XHRsZXQgJGZha2VDb2x1bW5zID0gJCgnLkZha2VDb2x1bW5zJyk7XG5cdFx0bGV0ICRib2R5Q29udGVudCA9ICQoJy5MYXlvdXRQb3B1cF9fYm9keScpO1xuXG5cdFx0aWYgKGlzSW5zaWRlSWZyYW1lICYmICEkZmFrZUNvbHVtbnMubGVuZ3RoKSB7XG5cdFx0XHQkaGVhZGVyRGl2LmFwcGVuZChgPGRpdiBjbGFzcz0nRmFrZUNvbHVtbnMnPjwvZGl2PmApO1xuXHRcdH1cblxuXHRcdGlmIChpc0luc2lkZUlmcmFtZSkge1xuXHRcdFx0JGZha2VDb2x1bW5zID0gJCgnLkZha2VDb2x1bW5zJyk7XG5cblx0XHRcdCRjb250ZW50Lm9uKCdzY3JvbGwnLCAoKSA9PiB7XG5cdFx0XHRcdGNsZWFyVGltZW91dCh3aW5kb3dbJ0NhcmRDaGFydHNTY3JvbGwnXS5zY3JvbGxGaW5pc2hlZCk7XG5cdFx0XHRcdHdpbmRvd1snQ2FyZENoYXJ0c1Njcm9sbCddLnNjcm9sbEZpbmlzaGVkID0gc2V0VGltZW91dChmdW5jdGlvbigpIHtcblx0XHRcdFx0XHRpZiAoJGNvbnRlbnQuc2Nyb2xsVG9wKCkgPiAwKSAkaGVhZGVyLmFkZENsYXNzKCdTaGFkb3dNZWRpdW0nKTtcblx0XHRcdFx0XHRlbHNlICRoZWFkZXIucmVtb3ZlQ2xhc3MoJ1NoYWRvd01lZGl1bScpO1xuXHRcdFx0XHR9LCA1MCk7XG5cdFx0XHR9KTtcblx0XHR9XG5cblx0XHQkKHdpbmRvdykucmVzaXplKGZ1bmN0aW9uKCkge1xuXHRcdFx0JGNvbXBvbmVudCA9ICQoJy5DYXJkQ2hhcnRzJyk7XG5cdFx0XHQkaGVhZGVyID0gJGNvbXBvbmVudC5maW5kKCcuQ2FyZENoYXJ0c19fSGVhZGVyJyk7XG5cdFx0XHQkY29udGVudCA9ICRjb21wb25lbnQuZmluZCgnLkNhcmRDaGFydHNfX0NvbnRlbnQnKTtcblx0XHRcdCRwcm9wZXJ0aWVzID0gJGNvbXBvbmVudC5maW5kKCcuQ2FyZENoYXJ0c19fUHJvcGVydGllcycpO1xuXHRcdFx0JGZha2VDb2x1bW5zID0gJCgnLkZha2VDb2x1bW5zJyk7XG5cdFx0XHQkYm9keUNvbnRlbnQgPSAkKCcuTGF5b3V0UG9wdXBfX2JvZHknKTtcblxuXHRcdFx0bGV0IGhlYWRlclRpdGxlSGVpZ2h0ID0gNjM7XG5cdFx0XHRjb25zdCBoZWFkZXJQcm9wZXJ0aWVzSGVpZ2h0ID0gNTY7XG5cblx0XHRcdGNvbnN0ICRjaGFydHMgPSAkY29udGVudC5maW5kKCcuQ2FyZENoYXJ0c19fQ2hhcnRzIC5PU0NoYXJ0Jyk7XG5cblx0XHRcdCRjaGFydHMuZWFjaChmdW5jdGlvbigpIHtcblx0XHRcdFx0Y29uc3QgJGNoYXJ0ID0gJCh0aGlzKTtcblxuXHRcdFx0XHRjb25zdCBuZXdXaWR0aCA9ICRjb250ZW50LndpZHRoKCkgLSAkcHJvcGVydGllcy53aWR0aCgpICsgNDA7XG5cdFx0XHRcdCRjaGFydC5oaWdoY2hhcnRzKCkuc2V0U2l6ZShuZXdXaWR0aCwgJGNoYXJ0LmhlaWdodCgpKTtcblx0XHRcdH0pO1xuXG5cdFx0XHRpZiAoaXNJbnNpZGVJZnJhbWUpIHtcblx0XHRcdFx0Y29uc3QgdGltZW91dEhlaWdodCA9IHNldFRpbWVvdXQoKCkgPT4ge1xuXHRcdFx0XHRcdGNvbnN0ICRoZWFkZXJUaXRsZSA9ICRjb21wb25lbnQuZmluZCgnLkNhcmRDaGFydHNfX0hlYWRlclRpdGxlJyk7XG5cblx0XHRcdFx0XHRoZWFkZXJUaXRsZUhlaWdodCA9ICRoZWFkZXJUaXRsZS5sZW5ndGggPyAkaGVhZGVyVGl0bGUub3V0ZXJIZWlnaHQoKSA6IGhlYWRlclRpdGxlSGVpZ2h0IC0gNjtcblxuXHRcdFx0XHRcdGNvbnN0IG5ld0hlaWdodCA9ICQod2luZG93LmZyYW1lRWxlbWVudCkuaGVpZ2h0KCkgLSBoZWFkZXJUaXRsZUhlaWdodDtcblxuXHRcdFx0XHRcdCRmYWtlQ29sdW1ucy5jc3MoJ2hlaWdodCcsIGAke25ld0hlaWdodCArIGhlYWRlclByb3BlcnRpZXNIZWlnaHR9cHhgKTtcblx0XHRcdFx0XHQkY29udGVudC5jc3MoJ2hlaWdodCcsIGAke25ld0hlaWdodCAtIGhlYWRlclByb3BlcnRpZXNIZWlnaHR9cHhgKTtcblxuXHRcdFx0XHRcdGNsZWFyVGltZW91dCh0aW1lb3V0SGVpZ2h0KTtcblx0XHRcdFx0fSwgNTAwKTtcblx0XHRcdH1cblx0XHR9KTtcblxuXHRcdC8vIFNlZSBNdXRhdGlvbk9ic2VydmVyIChMYXlvdXRQb3B1cClcblx0XHRTYXBwaGlyZVdpZGdldHMuUG9wdXBzVG9Bdm9pZE11dGF0aW9ucyA9IFsnQ2hhcnRzUG9wdXAnXTtcblx0fSk7XG59O1xuIiwiLyogQ29tcG9uZW50IENvbGxhcHNpYmxlU2lkZVBhbmVsICovXG4oZnVuY3Rpb24oJCwgd2luZG93LCBTYXBwaGlyZVdpZGdldHMpIHtcblx0Y2xhc3MgQ29sbGFwc2libGVTaWRlUGFuZWwge1xuXHRcdGNvbnN0cnVjdG9yKGNvbmZpZykge1xuXHRcdFx0dGhpcy5vcHRpb25zID0ge1xuXHRcdFx0XHQuLi5jb25maWcsXG5cdFx0XHR9O1xuXG5cdFx0XHR0aGlzLm9uQ29tcG9uZW50SW5pdCgpO1xuXHRcdH1cblxuXHRcdG9wZW5DbG9zZVNpZGVQYW5lbCh0b09wZW4pIHtcblx0XHRcdGlmICh0b09wZW4pIHtcblx0XHRcdFx0dGhpcy4kY29udGVudC5jc3MoJ2Rpc3BsYXknLCAnZ3JpZCcpO1xuXG5cdFx0XHRcdHNldFRpbWVvdXQoKCkgPT4ge1xuXHRcdFx0XHRcdHRoaXMuJGNvbXBvbmVudC5hZGRDbGFzcygnQ29sbGFwc2libGVTaWRlUGFuZWwtLW9wZW4nKTtcblx0XHRcdFx0fSwgNTApO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0dGhpcy4kY29tcG9uZW50LnJlbW92ZUNsYXNzKCdDb2xsYXBzaWJsZVNpZGVQYW5lbC0tb3BlbicpO1xuXG5cdFx0XHRcdHNldFRpbWVvdXQoKCkgPT4ge1xuXHRcdFx0XHRcdCQoJy5Db2xsYXBzaWJsZVNpZGVQYW5lbF9fQ29udGVudCcpLmNzcygnZGlzcGxheScsICdub25lJyk7XG5cdFx0XHRcdH0sIDM1MCk7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0b25Db21wb25lbnRJbml0KCkge1xuXHRcdFx0dGhpcy4kY29tcG9uZW50ID0gJChgIyR7dGhpcy5vcHRpb25zLndpZGdldElkfWApO1xuXHRcdFx0dGhpcy4kaGVhZGVyID0gdGhpcy4kY29tcG9uZW50LmZpbmQoJy5Db2xsYXBzaWJsZVNpZGVQYW5lbF9fSGVhZGVyJyk7XG5cdFx0XHR0aGlzLiRjb250ZW50ID0gdGhpcy4kY29tcG9uZW50LmZpbmQoJy5Db2xsYXBzaWJsZVNpZGVQYW5lbF9fQ29udGVudCcpO1xuXHRcdFx0dGhpcy4kY291bnRlcjEgPSB0aGlzLiRjb21wb25lbnQuZmluZCgnLkNvbGxhcHNpYmxlU2lkZVBhbmVsX19UaXRsZSBzcGFuLkNvdW50ZXInKTtcblx0XHRcdHRoaXMuJGNvdW50ZXIyID0gdGhpcy4kY29tcG9uZW50LmZpbmQoJy5Db2xsYXBzaWJsZVNpZGVQYW5lbF9fUGFuZWxUaXRsZSBzcGFuLkNvdW50ZXInKTtcblx0XHRcdHRoaXMuJHBhbmVsQ29udGVudCA9IHRoaXMuJGNvbXBvbmVudC5maW5kKCcuQ29sbGFwc2libGVTaWRlUGFuZWxfX1BhbmVsQ29udGVudCcpO1xuXHRcdFx0dGhpcy4kY2xvc2UgPSB0aGlzLiRjb21wb25lbnQuZmluZCgnLkNvbGxhcHNpYmxlU2lkZVBhbmVsX19QYW5lbEhlYWRlciAuaWNvbicpO1xuXHRcdFx0dGhpcy4kY2xvc2VFdmVudExpbmsgPSB0aGlzLiRjb21wb25lbnQuZmluZCgnLkNvbGxhcHNpYmxlU2lkZVBhbmVsX19QYW5lbEhlYWRlciAuUGFuZWxDbG9zZUJ1dHRvbicpO1xuXG5cdFx0XHR0aGlzLiRoZWFkZXIub24oJ2NsaWNrJywgKCkgPT4gdGhpcy5vcGVuQ2xvc2VTaWRlUGFuZWwodHJ1ZSkpO1xuXHRcdFx0dGhpcy4kY2xvc2Uub24oJ2NsaWNrJywgKCkgPT4ge1xuXHRcdFx0XHR0aGlzLm9wZW5DbG9zZVNpZGVQYW5lbChmYWxzZSk7XG5cblx0XHRcdFx0dGhpcy4kY2xvc2VFdmVudExpbmsuY2xpY2soKTtcblxuXHRcdFx0XHRpZiAoJCgnLlBhbmVsQ29udGVudEVtcHR5JykubGVuZ3RoKSB7XG5cdFx0XHRcdFx0U2FwcGhpcmVXaWRnZXRzLkNvbGxhcHNpYmxlU2lkZVBhbmVsLmNsb3NlKHRoaXMub3B0aW9ucy53aWRnZXRJZCwgdHJ1ZSk7XG5cdFx0XHRcdH1cblx0XHRcdH0pO1xuXG5cdFx0XHRpZiAodGhpcy5vcHRpb25zLmlzQXV0b0NvdW50ZXIpIHtcblx0XHRcdFx0Y2FsY3VsYXRlQ291bnRlcih0aGlzLiRwYW5lbENvbnRlbnQsIHRoaXMuJGNvdW50ZXIxLCB0aGlzLiRjb3VudGVyMik7XG5cblx0XHRcdFx0dGhpcy4kY291bnRlcjEucmVtb3ZlQ2xhc3MoJ0hpZGRlbicpO1xuXHRcdFx0XHR0aGlzLiRjb3VudGVyMi5yZW1vdmVDbGFzcygnSGlkZGVuJyk7XG5cdFx0XHR9XG5cblx0XHRcdGNvbnN0IGhhc0VtcHR5TWVzc2FnZSA9IHRoaXMuJHBhbmVsQ29udGVudC5maW5kKCcuQ29sbGFwc2libGVFbXB0eU1lc3NhZ2UnKTtcblx0XHRcdGNvbnN0IGNvbnRlbnRUb1ZlcmlmeSA9IGhhc0VtcHR5TWVzc2FnZS5sZW5ndGggPyB0aGlzLiRwYW5lbENvbnRlbnQuZmluZCgnPjpmaXJzdC1jaGlsZCcpIDogdGhpcy4kcGFuZWxDb250ZW50O1xuXG5cdFx0XHRpZiAodGhpcy5vcHRpb25zLmhpZGVXaGVuRW1wdHkgJiYgIWNvbnRlbnRUb1ZlcmlmeS50ZXh0KCkpIHtcblx0XHRcdFx0dGhpcy4kY29tcG9uZW50LmhpZGUoKTtcblx0XHRcdH1cblxuXHRcdFx0JChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oKSB7XG5cdFx0XHRcdCQoJy5Db2xsYXBzaWJsZVNpZGVQYW5lbDp2aXNpYmxlJykuYWRkQ2xhc3MoJ011bHRpTWFyZ2luVG9wU21hbGwnKTtcblx0XHRcdFx0JCgnLkNvbGxhcHNpYmxlU2lkZVBhbmVsOnZpc2libGU6Zmlyc3QnKS5hZGRDbGFzcygnTXVsdGlNYXJnaW5Ub3BMYXJnZScpO1xuXHRcdFx0fSk7XG5cdFx0fVxuXHR9XG5cblx0Y29uc3QgY2FsY3VsYXRlQ291bnRlciA9IChwYW5lbENvbnRlbnQsIGNvdW50ZXIxLCBjb3VudGVyMikgPT4ge1xuXHRcdGxldCB0b3RhbCA9IDA7XG5cdFx0Y29uc3QgY291bnRlcnMgPSBwYW5lbENvbnRlbnQuZmluZCgnLkV4YXBhbmRhYmxlUGxhY2Vob2xkZXIuQ291bnRlcicpO1xuXG5cdFx0Y291bnRlcnMuZWFjaChmdW5jdGlvbigpIHtcblx0XHRcdHRvdGFsICs9ICskKHRoaXMpLnRleHQoKTtcblx0XHR9KTtcblxuXHRcdGNvdW50ZXIxLnRleHQodG90YWwpO1xuXHRcdGNvdW50ZXIyLnRleHQodG90YWwpO1xuXG5cdFx0aWYgKHRvdGFsID09PSAwKSBjb3VudGVyMi5hZGRDbGFzcygnQ29sb3JMaWdodEdyZXlCRycpO1xuXHR9O1xuXG5cdGNvbnN0IHVwZGF0ZUNvdW50ZXIgPSAod2lkZ2V0SWQsIGNvdW50ZXIpID0+IHtcblx0XHR0aGlzLiRjb21wb25lbnQgPSAkKGAjJHt3aWRnZXRJZH1gKTtcblx0XHR0aGlzLmNvdW50ZXIxID0gdGhpcy4kY29tcG9uZW50LmZpbmQoJy5Db2xsYXBzaWJsZVNpZGVQYW5lbF9fVGl0bGUgc3Bhbi5Db3VudGVyJyk7XG5cdFx0dGhpcy5jb3VudGVyMiA9IHRoaXMuJGNvbXBvbmVudC5maW5kKCcuQ29sbGFwc2libGVTaWRlUGFuZWxfX1BhbmVsVGl0bGUgc3Bhbi5Db3VudGVyJyk7XG5cblx0XHR0aGlzLmNvdW50ZXIxLnRleHQoY291bnRlcik7XG5cdFx0dGhpcy5jb3VudGVyMi50ZXh0KGNvdW50ZXIpO1xuXG5cdFx0aWYgKCtjb3VudGVyID09PSAwKSB0aGlzLmNvdW50ZXIyLmFkZENsYXNzKCdDb2xvckxpZ2h0R3JleUJHJyk7XG5cdH07XG5cblx0Y29uc3QgY2xvc2UgPSAod2lkZ2V0SWQsIGhpZGVIZWFkZXIsIHVwZGF0ZUNvdW50ZXIpID0+IHtcblx0XHR0aGlzLiRjb21wb25lbnQgPSAkKGAjJHt3aWRnZXRJZH1gKTtcblxuXHRcdGlmICghdGhpcy4kY29tcG9uZW50Lmhhc0NsYXNzKCdDb2xsYXBzaWJsZVNpZGVQYW5lbCcpKSB7XG5cdFx0XHR0aGlzLiRjb21wb25lbnQgPSAkKGAjJHt3aWRnZXRJZH1gKS5maW5kKCcuQ29sbGFwc2libGVTaWRlUGFuZWwnKTtcblx0XHR9XG5cblx0XHRpZiAoaGlkZUhlYWRlcikge1xuXHRcdFx0dGhpcy4kY29tcG9uZW50LmFkZENsYXNzKCdDb2xsYXBzaWJsZVNpZGVQYW5lbC0taGVhZGVySGlkZGVuJyk7XG5cdFx0fVxuXG5cdFx0dGhpcy4kY29tcG9uZW50LnJlbW92ZUNsYXNzKCdDb2xsYXBzaWJsZVNpZGVQYW5lbC0tb3BlbicpO1xuXG5cdFx0JCgnLkNvbGxhcHNpYmxlU2lkZVBhbmVsOnZpc2libGUnKS5yZW1vdmVDbGFzcygnTXVsdGlNYXJnaW5Ub3BTbWFsbCcpO1xuXHRcdCQoJy5Db2xsYXBzaWJsZVNpZGVQYW5lbDp2aXNpYmxlOmZpcnN0JykucmVtb3ZlQ2xhc3MoJ011bHRpTWFyZ2luVG9wTGFyZ2UnKTtcblx0fTtcblxuXHRjb25zdCBjaGVja0VtcHR5ID0gd2lkZ2V0SWQgPT4ge1xuXHRcdHRoaXMuJGNvbXBvbmVudCA9ICQoYCMke3dpZGdldElkfWApLmZpbmQoJy5Db2xsYXBzaWJsZVNpZGVQYW5lbCcpO1xuXHRcdHRoaXMuJHBhbmVsQ29udGVudCA9IHRoaXMuJGNvbXBvbmVudC5maW5kKCcuQ29sbGFwc2libGVTaWRlUGFuZWxfX1BhbmVsQ29udGVudCcpO1xuXHRcdHRoaXMuJGNvdW50ZXIxID0gdGhpcy4kY29tcG9uZW50LmZpbmQoJy5Db2xsYXBzaWJsZVNpZGVQYW5lbF9fVGl0bGUgc3Bhbi5Db3VudGVyJyk7XG5cdFx0dGhpcy4kY291bnRlcjIgPSB0aGlzLiRjb21wb25lbnQuZmluZCgnLkNvbGxhcHNpYmxlU2lkZVBhbmVsX19QYW5lbFRpdGxlIHNwYW4uQ291bnRlcicpO1xuXHRcdHRoaXMuJGVtcHR5TWVzc2FnZSA9IHRoaXMuJGNvbXBvbmVudC5maW5kKCcuQ29sbGFwc2libGVFbXB0eU1lc3NhZ2UnKTtcblxuXHRcdHRoaXMuJGVtcHR5TWVzc2FnZS5zaG93KCk7XG5cblx0XHRjYWxjdWxhdGVDb3VudGVyKHRoaXMuJHBhbmVsQ29udGVudCwgdGhpcy4kY291bnRlcjEsIHRoaXMuJGNvdW50ZXIyKTtcblx0fTtcblxuXHRjb25zdCBjcmVhdGUgPSBjb25maWcgPT4gKHdpbmRvd1tjb25maWcud2lkZ2V0SWRdID0gbmV3IENvbGxhcHNpYmxlU2lkZVBhbmVsKGNvbmZpZykpO1xuXG5cdFNhcHBoaXJlV2lkZ2V0cy5Db2xsYXBzaWJsZVNpZGVQYW5lbCA9IHsgY3JlYXRlLCBjbG9zZSwgdXBkYXRlQ291bnRlciwgY2hlY2tFbXB0eSB9O1xufSkoalF1ZXJ5LCB3aW5kb3csIFNhcHBoaXJlV2lkZ2V0cyk7XG4iLCIvKiBDb21wb25lbnQgQ29tcExpbmUgKi9cbihmdW5jdGlvbigkLCB3aW5kb3csIFNhcHBoaXJlV2lkZ2V0cykge1xuXHRmdW5jdGlvbiBTZWN0aW9uQ29tcGxpbmUoKSB7XG5cdFx0dmFyIHRoYXQgPSB0aGlzO1xuXG5cdFx0Ly8gT2JqZWN0IHRvIHNhdmUgc3RhdHNcblx0XHR2YXIgcHJldmlld3N0YXQgPSBbXTtcblxuXHRcdHZhciB0cmFuc2l0aW9uRXZlbnQgPSBTaWxrVUkud2hpY2hUcmFuc2l0aW9uRXZlbnQoKTtcblx0XHQvLyBzZXQgY2xpY2sgZXZlbnRzXG5cdFx0ZnVuY3Rpb24gY2xpY2tFdmVudHMob2IpIHtcblx0XHRcdC8vIHN0b3JlIHF1ZXJ5cyBpbiBhIHNpbmdsZSB2YXJcblx0XHRcdHZhciBob2xkZXIgPSAkKG9iKS5jbG9zZXN0KCcuQ29tcExpbmUnKTtcblx0XHRcdHZhciBTZWN0aW9uID0gJChvYikuY2xvc2VzdCgnLkNvbXBMaW5lRXhwYW5kYWJsZScpO1xuXHRcdFx0dmFyIFNlY3Rpb25Db250ZW50ID0gU2VjdGlvbi5jaGlsZHJlbignLkNvbXBMaW5lX0V4cGFuZCcpO1xuXG5cdFx0XHQvLyBnZXQgaWRcblx0XHRcdHZhciBpZCA9IGhvbGRlci5hdHRyKCdpZCcpO1xuXG5cdFx0XHR2YXIgdGVtcEhlaWdodCA9IDA7XG5cblx0XHRcdC8vIGhhcyBjbGFzcyBleHBhbmRlZFxuXHRcdFx0aWYgKFNlY3Rpb24uaGFzQ2xhc3MoJ2V4cGFuZGVkJykpIHtcblx0XHRcdFx0Ly8gQ2FsYyBhbmQgc2V0IGEgZml4ZWQgaGVpZ2h0LCBkdXJpbmcgdGhpcyBwcm9jZXNzLCB0cmFuc2l0aW9ucyBhcmUgZGlzYWJsZWRcblx0XHRcdFx0U2VjdGlvbkNvbnRlbnQuYWRkQ2xhc3MoJ25vVHJhbnNpdGlvbicpO1xuXHRcdFx0XHRTZWN0aW9uQ29udGVudC5oZWlnaHQoU2VjdGlvbkNvbnRlbnQuaGVpZ2h0KCkpO1xuXHRcdFx0XHRTZWN0aW9uQ29udGVudFswXS5vZmZzZXRIZWlnaHQ7IC8vIGhhY2sgdG8gZm9yY2UgYSByZXBhaW50XG5cdFx0XHRcdFNlY3Rpb25Db250ZW50LnJlbW92ZUNsYXNzKCdub1RyYW5zaXRpb24nKTtcblxuXHRcdFx0XHQvLyBDb2xsYXBzZSBjb250ZW50XG5cdFx0XHRcdFNlY3Rpb25Db250ZW50LmhlaWdodCgwKTtcblx0XHRcdFx0U2VjdGlvbi5yZW1vdmVDbGFzcygnZXhwYW5kZWQnKTtcblx0XHRcdFx0U2VjdGlvbkNvbnRlbnQuY3NzKCdvdmVyZmxvdycsICdoaWRkZW4nKTtcblxuXHRcdFx0XHQvLyBSZW1vdmUgY2xhc3MsIHNldCBoZWlnaHQgYW5kIHNhdmUgc3RhdGVcblx0XHRcdFx0cHJldmlld3N0YXRbaWRdWydjbGllbnQnXSA9IGZhbHNlO1xuXG5cdFx0XHRcdGlmIChob2xkZXIuaGFzQ2xhc3MoJ25vdFJlbmRlckludGVyYWN0aW9ucycpKSB7XG5cdFx0XHRcdFx0aG9sZGVyLmZpbmQoJy5Db21wTGluZS10b2dnbGUtaW50ZXJhY3Rpb25zJykudHJpZ2dlcignY2xpY2snKTtcblx0XHRcdFx0fVxuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0Ly8gQ2FsYyBhbmQgc2V0IGEgZml4ZWQgaGVpZ2h0XG5cdFx0XHRcdFNlY3Rpb25Db250ZW50LmhlaWdodCgnYXV0bycpO1xuXHRcdFx0XHR0ZW1wSGVpZ2h0ID0gU2VjdGlvbkNvbnRlbnQuaGVpZ2h0KCk7XG5cdFx0XHRcdFNlY3Rpb25Db250ZW50LmhlaWdodCgwKTtcblx0XHRcdFx0U2VjdGlvbkNvbnRlbnQuaGVpZ2h0KHRlbXBIZWlnaHQpO1xuXHRcdFx0XHRTZWN0aW9uQ29udGVudC5jc3MoJ292ZXJmbG93JywgJ2hpZGRlbicpO1xuXG5cdFx0XHRcdC8vIHJlbW92ZSBjbGFzcywgc2V0IGhlaWdodCBhbmQgc2F2ZSBzdGF0ZVxuXHRcdFx0XHRTZWN0aW9uLmFkZENsYXNzKCdleHBhbmRlZCcpO1xuXHRcdFx0XHRwcmV2aWV3c3RhdFtpZF1bJ2NsaWVudCddID0gdHJ1ZTtcblxuXHRcdFx0XHRpZiAoJCgnLlBhZ2UnKS5oYXNDbGFzcygnaWU4JykgfHwgJCgnLlBhZ2UnKS5oYXNDbGFzcygnaWU5JykpIHtcblx0XHRcdFx0XHRTZWN0aW9uQ29udGVudC5oZWlnaHQoJ2F1dG8nKTtcblx0XHRcdFx0XHRTZWN0aW9uQ29udGVudC5jc3MoJ292ZXJmbG93JywgJ3Zpc2libGUnKTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdC8vIGFkZCBldmVudCB0cmFuc2l0aW9uIGVuZCB0byBvdmVyZmxvdzp2aXNpYmxlIGZvciB0b29sdGlwcyBhbmQgZHJvcGRvd25zIGlzc3Vlc1xuXHRcdFx0XHRTZWN0aW9uQ29udGVudC5vbih0cmFuc2l0aW9uRXZlbnQsIGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRcdGlmIChTZWN0aW9uLmhhc0NsYXNzKCdleHBhbmRlZCcpKSB7XG5cdFx0XHRcdFx0XHRTZWN0aW9uQ29udGVudC5jc3MoJ292ZXJmbG93JywgJ3Zpc2libGUnKTtcblx0XHRcdFx0XHRcdFNlY3Rpb25Db250ZW50LmFkZENsYXNzKCdub1RyYW5zaXRpb24nKTtcblx0XHRcdFx0XHRcdFNlY3Rpb25Db250ZW50LmhlaWdodCgnYXV0bycpO1xuXHRcdFx0XHRcdFx0U2VjdGlvbkNvbnRlbnRbMF0ub2Zmc2V0SGVpZ2h0OyAvLyBoYWNrIHRvIGZvcmNlIGEgcmVwYWludFxuXHRcdFx0XHRcdFx0U2VjdGlvbkNvbnRlbnQucmVtb3ZlQ2xhc3MoJ25vVHJhbnNpdGlvbicpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSk7XG5cblx0XHRcdFx0aWYgKGhvbGRlci5oYXNDbGFzcygnbm90UmVuZGVySW50ZXJhY3Rpb25zJykpIHtcblx0XHRcdFx0XHRob2xkZXIuZmluZCgnLkNvbXBMaW5lLXRvZ2dsZS1pbnRlcmFjdGlvbnMnKS50cmlnZ2VyKCdjbGljaycpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0Ly8gYWpheCByZWZyZXMgZnVuY3Rpb25cblx0XHR0aGF0LmFqYXhSZWZyZXNoID0gZnVuY3Rpb24oKSB7XG5cdFx0XHQvLyByZW1vdmUgY2xpY2sgZXZlbnRzXG5cdFx0XHQkKCcuQ29tcExpbmVfaGVhZExpbmUnKS5vZmYoKTtcblxuXHRcdFx0Ly8gYWRkIHN0b3AgcHJlcGFnYXRpb25cblx0XHRcdCQoJy5Db21wTGluZV9oZWFkTGluZSBpbnB1dCwgLkNvbXBMaW5lX2hlYWRMaW5lIHNlbGVjdCwgLkNvbXBMaW5lX2hlYWRMaW5lIGEnKS5jbGljayhmdW5jdGlvbihldmVudCkge1xuXHRcdFx0XHRldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcblx0XHRcdH0pO1xuXG5cdFx0XHQvLyBhZGQgbmV3IGNsaWNrIGV2ZW50c1xuXHRcdFx0JCgnLkNvbXBMaW5lX19leHBhbmRJY29uJykudW5iaW5kKCdjbGljaycpO1xuXHRcdFx0JCgnLkNvbXBMaW5lX19leHBhbmRJY29uJykub24oJ2NsaWNrJywgZnVuY3Rpb24oKSB7XG5cdFx0XHRcdGNsaWNrRXZlbnRzKHRoaXMucGFyZW50RWxlbWVudCk7XG5cdFx0XHR9KTtcblxuXHRcdFx0Ly8gZWFjaCBhbGwgc2VjdGlvbnNcblx0XHRcdCQoJy5Db21wTGluZUV4cGFuZGFibGUnKS5lYWNoKGZ1bmN0aW9uKCkge1xuXHRcdFx0XHQvLyBpZiBuZXcgU2VjdGlvbkV4cGFuZGFibGUgdGhlbiBhZGQgdG8gcHJldmlld3N0YXQgYXJyYXlcblx0XHRcdFx0aWYgKFxuXHRcdFx0XHRcdHByZXZpZXdzdGF0W1xuXHRcdFx0XHRcdFx0JCh0aGlzKVxuXHRcdFx0XHRcdFx0XHQuY2xvc2VzdCgnLkNvbXBMaW5lJylcblx0XHRcdFx0XHRcdFx0LmF0dHIoJ2lkJylcblx0XHRcdFx0XHRdID09IG51bGxcblx0XHRcdFx0KSB7XG5cdFx0XHRcdFx0Ly8gYWRkIHN0YXQgb24gYXJyYXlcblx0XHRcdFx0XHR2YXIgc3RhdCA9IGZhbHNlO1xuXHRcdFx0XHRcdC8vIGlmIG9wZW5cblx0XHRcdFx0XHRpZiAoJCh0aGlzKS5oYXNDbGFzcygnZXhwYW5kZWQnKSkge1xuXHRcdFx0XHRcdFx0c3RhdCA9IHRydWU7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdC8vIGFkZCByb3dcblx0XHRcdFx0XHRwcmV2aWV3c3RhdFtcblx0XHRcdFx0XHRcdCQodGhpcylcblx0XHRcdFx0XHRcdFx0LmNsb3Nlc3QoJy5Db21wTGluZScpXG5cdFx0XHRcdFx0XHRcdC5hdHRyKCdpZCcpXG5cdFx0XHRcdFx0XSA9IHtcblx0XHRcdFx0XHRcdGNsaWVudDogc3RhdCxcblx0XHRcdFx0XHRcdHNlcnZlcjogc3RhdCxcblx0XHRcdFx0XHR9O1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0Ly8gY3VyZW50IHN0YXRlIChhamF4IHN0YXRlIHggaW5pdGlhbCBzdGF0ZSlcblx0XHRcdFx0dmFyIGN1clN0YXRlID0gZmFsc2U7XG5cblx0XHRcdFx0Ly8gY2hlY2sgaWYgc3RhcnQgZXhwYW5kYWJsZVxuXHRcdFx0XHRpZiAoJCh0aGlzKS5oYXNDbGFzcygnZXhwYW5kZWQnKSkge1xuXHRcdFx0XHRcdGN1clN0YXRlID0gdHJ1ZTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdC8vIGNoZWNrIGlmIGFqYXggIT0gaW5pdGlhbCBzZXJ2ZXJcblx0XHRcdFx0aWYgKFxuXHRcdFx0XHRcdGN1clN0YXRlICE9XG5cdFx0XHRcdFx0cHJldmlld3N0YXRbXG5cdFx0XHRcdFx0XHQkKHRoaXMpXG5cdFx0XHRcdFx0XHRcdC5jbG9zZXN0KCcuQ29tcExpbmUnKVxuXHRcdFx0XHRcdFx0XHQuYXR0cignaWQnKVxuXHRcdFx0XHRcdF1bJ3NlcnZlciddXG5cdFx0XHRcdCkge1xuXHRcdFx0XHRcdC8vIGN1cnN0YXRlXG5cdFx0XHRcdFx0cHJldmlld3N0YXRbXG5cdFx0XHRcdFx0XHQkKHRoaXMpXG5cdFx0XHRcdFx0XHRcdC5jbG9zZXN0KCcuQ29tcExpbmUnKVxuXHRcdFx0XHRcdFx0XHQuYXR0cignaWQnKVxuXHRcdFx0XHRcdF1bJ2NsaWVudCddID0gY3VyU3RhdGU7XG5cdFx0XHRcdFx0cHJldmlld3N0YXRbXG5cdFx0XHRcdFx0XHQkKHRoaXMpXG5cdFx0XHRcdFx0XHRcdC5jbG9zZXN0KCcuQ29tcExpbmUnKVxuXHRcdFx0XHRcdFx0XHQuYXR0cignaWQnKVxuXHRcdFx0XHRcdF1bJ3NlcnZlciddID0gY3VyU3RhdGU7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0Ly8gaGFzIGNsYXNzIGV4cGFuZGVkXG5cdFx0XHRcdFx0aWYgKFxuXHRcdFx0XHRcdFx0cHJldmlld3N0YXRbXG5cdFx0XHRcdFx0XHRcdCQodGhpcylcblx0XHRcdFx0XHRcdFx0XHQuY2xvc2VzdCgnLkNvbXBMaW5lJylcblx0XHRcdFx0XHRcdFx0XHQuYXR0cignaWQnKVxuXHRcdFx0XHRcdFx0XVsnY2xpZW50J10gPT0gZmFsc2UgJiZcblx0XHRcdFx0XHRcdCQodGhpcykuaGFzQ2xhc3MoJ2V4cGFuZGVkJylcblx0XHRcdFx0XHQpIHtcblx0XHRcdFx0XHRcdCQodGhpcykucmVtb3ZlQ2xhc3MoJ2V4cGFuZGVkJyk7XG5cdFx0XHRcdFx0XHQkKHRoaXMpXG5cdFx0XHRcdFx0XHRcdC5jaGlsZHJlbignLkNvbXBMaW5lX0V4cGFuZCcpXG5cdFx0XHRcdFx0XHRcdC5oZWlnaHQoMCk7XG5cdFx0XHRcdFx0fSBlbHNlIGlmIChcblx0XHRcdFx0XHRcdHByZXZpZXdzdGF0W1xuXHRcdFx0XHRcdFx0XHQkKHRoaXMpXG5cdFx0XHRcdFx0XHRcdFx0LmNsb3Nlc3QoJy5Db21wTGluZScpXG5cdFx0XHRcdFx0XHRcdFx0LmF0dHIoJ2lkJylcblx0XHRcdFx0XHRcdF1bJ2NsaWVudCddID09IHRydWUgJiZcblx0XHRcdFx0XHRcdCEkKHRoaXMpLmhhc0NsYXNzKCdleHBhbmRlZCcpXG5cdFx0XHRcdFx0KSB7XG5cdFx0XHRcdFx0XHQkKHRoaXMpLmFkZENsYXNzKCdleHBhbmRlZCcpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fSk7XG5cdFx0fTtcblxuXHRcdC8vIHNldCBldmVudHNcblx0XHR0aGF0LmluaXQgPSBmdW5jdGlvbigpIHtcblx0XHRcdC8vIGVhY2ggYWxsIHNlY3Rpb25zIHRvIGNyZWF0ZSBhcnJheSBzdGF0XG5cdFx0XHQkKCcuQ29tcExpbmVFeHBhbmRhYmxlJykuZWFjaChmdW5jdGlvbigpIHtcblx0XHRcdFx0Ly8gYWRkIHN0YXQgb24gYXJyYXlcblx0XHRcdFx0dmFyIHN0YXQgPSBmYWxzZTtcblxuXHRcdFx0XHQvLyBpZiBvcGVuXG5cdFx0XHRcdGlmICgkKHRoaXMpLmhhc0NsYXNzKCdleHBhbmRlZCcpKSB7XG5cdFx0XHRcdFx0c3RhdCA9IHRydWU7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHQvLyBhZGQgcm93XG5cdFx0XHRcdHByZXZpZXdzdGF0W1xuXHRcdFx0XHRcdCQodGhpcylcblx0XHRcdFx0XHRcdC5jbG9zZXN0KCcuQ29tcExpbmUnKVxuXHRcdFx0XHRcdFx0LmF0dHIoJ2lkJylcblx0XHRcdFx0XSA9IHtcblx0XHRcdFx0XHRjbGllbnQ6IHN0YXQsXG5cdFx0XHRcdFx0c2VydmVyOiBzdGF0LFxuXHRcdFx0XHR9O1xuXHRcdFx0fSk7XG5cblx0XHRcdC8vIGFkZCBjbGljayBldmVudHNcblx0XHRcdCQoJy5Db21wTGluZV9fZXhwYW5kSWNvbicpLnVuYmluZCgnY2xpY2snKTtcblx0XHRcdCQoJy5Db21wTGluZV9fZXhwYW5kSWNvbicpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRjbGlja0V2ZW50cyh0aGlzLnBhcmVudEVsZW1lbnQpO1xuXHRcdFx0fSk7XG5cblx0XHRcdC8vIGFkZCBzdG9wIHByZXBhZ2F0aW9uXG5cdFx0XHQkKCcuQ29tcExpbmVfaGVhZExpbmUgaW5wdXQsIC5Db21wTGluZV9oZWFkTGluZSBzZWxlY3QsIC5Db21wTGluZV9oZWFkTGluZSBhJykuY2xpY2soZnVuY3Rpb24oZXZlbnQpIHtcblx0XHRcdFx0ZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG5cdFx0XHR9KTtcblxuXHRcdFx0Ly8gcmVtb3ZlIHVuZWNlc3NhcnkgYmVoYXZpb3JzXG5cblx0XHRcdC8vIGV2ZW50IGFqYXhcblx0XHRcdG9zQWpheEJhY2tlbmQuQmluZEFmdGVyQWpheFJlcXVlc3QodGhhdC5hamF4UmVmcmVzaCk7XG5cdFx0fTtcblx0fVxuXG5cdGNvbnN0IGNyZWF0ZSA9ICgpID0+IHtcblx0XHRTaWxrVUkuU2VjdGlvbkV4cGFuZGFibGUgPSBuZXcgU2VjdGlvbkNvbXBsaW5lKCk7XG5cdFx0U2lsa1VJLkV4ZWN1dGUoU2lsa1VJLlNlY3Rpb25FeHBhbmRhYmxlLmluaXQsICdFcnJvciBvbiBTYXBwaGlyZXYyX1BhdHRlcnMvQ29tcExpbmUnKTtcblx0fTtcblxuXHRTYXBwaGlyZVdpZGdldHMuQ29tcExpbmUgPSB7IGNyZWF0ZSB9O1xufSkoalF1ZXJ5LCB3aW5kb3csIFNhcHBoaXJlV2lkZ2V0cyk7XG4iLCIvKiBDb21wb25lbnQgQ291bnRyeVBob25lICovXG4oZnVuY3Rpb24oJCwgd2luZG93LCBTYXBwaGlyZVdpZGdldHMpIHtcblx0Y29uc3QgY3JlYXRlID0gY29uZmlnID0+IHtcblx0XHRjb25zdCAkZWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCMke2NvbmZpZy53aWRnZXRJZH1gKTtcblx0XHRjb25zdCBhZGRpdGlvbmFsVmFsaWRhdGlvbnMgPSBjb25maWcuYWRkaXRpb25hbFZhbGlkYXRpb25zO1xuXG5cdFx0Y29uc3QgY291bnRyeVBob25lSW5wdXQgPSB3aW5kb3cuaW50bFRlbElucHV0KCRlbGVtZW50LCB7XG5cdFx0XHRpbml0aWFsQ291bnRyeTogY29uZmlnLmluaXRpYWxDb3VudHJ5LFxuXHRcdFx0cHJlZmVycmVkQ291bnRyaWVzOiBjb25maWcucHJlZmVycmVkQ291bnRyaWVzLFxuXHRcdFx0c2VwYXJhdGVEaWFsQ29kZTogY29uZmlnLnNlcGFyYXRlRGlhbENvZGUsXG5cdFx0XHRuYXRpb25hbE1vZGU6IGNvbmZpZy5uYXRpb25hbE1vZGUsXG5cdFx0XHRhdXRvUGxhY2Vob2xkZXI6IGNvbmZpZy5hdXRvUGxhY2Vob2xkZXIgPyAncG9saXRlJyA6IGZhbHNlLFxuXHRcdFx0Zm9ybWF0T25EaXNwbGF5OiBmYWxzZSxcblx0XHRcdHV0aWxzU2NyaXB0OiAnL1YzX1BhdC9qcy91dGlscy5qcycsXG5cdFx0fSk7XG5cblx0XHRjb25zdCAkaW5wdXQgPSAkKGAjJHtjb25maWcud2lkZ2V0SWR9YCk7XG5cblx0XHQkaW5wdXQub24oJ2tleXVwJywgZnVuY3Rpb24oZSkge1xuXHRcdFx0aWYgKCRpbnB1dC52YWwoKSA9PT0gJysnIHx8ICRpbnB1dC52YWwoKSA9PT0gJycpIHtcblx0XHRcdFx0Y291bnRyeVBob25lSW5wdXQuc2V0Q291bnRyeShjb25maWcuaW5pdGlhbENvdW50cnkpO1xuXHRcdFx0fVxuXHRcdH0pO1xuXG5cdFx0JGlucHV0Lm9uKCdrZXlwcmVzcycsIGZ1bmN0aW9uKGUpIHtcblx0XHRcdGNvbnN0IHNlbGVjdGVkQ291bnRyeSA9IGNvdW50cnlQaG9uZUlucHV0LmdldFNlbGVjdGVkQ291bnRyeURhdGEoKTtcblx0XHRcdGNvbnN0IGZpbHRlciA9IGFkZGl0aW9uYWxWYWxpZGF0aW9ucy5maW5kKGkgPT4gaS5Db3VudHJ5UGhvbmVWYWxpZGF0aW9ucy5Db3VudHJ5Q29kZSA9PT0gc2VsZWN0ZWRDb3VudHJ5LmlzbzIpO1xuXHRcdFx0Y29uc3QgdmFsdWUgPSAkaW5wdXQudmFsKCkudHJpbSgpO1xuXG5cdFx0XHRsZXQgaXNWYWxpZCA9IHRydWU7XG5cblx0XHRcdGlmIChmaWx0ZXIpIHtcblx0XHRcdFx0Y29uc3Qgd2l0aG91Q29kZSA9IHZhbHVlLnJlcGxhY2UoYCske3NlbGVjdGVkQ291bnRyeS5kaWFsQ29kZX1gLCAnJyk7XG5cblx0XHRcdFx0aXNWYWxpZCA9IHdpdGhvdUNvZGUudHJpbSgpLmxlbmd0aCArIDEgPD0gZmlsdGVyLkNvdW50cnlQaG9uZVZhbGlkYXRpb25zLlBob25lTGVuZ3RoO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiAodmFsdWUgPT09IGArJHtzZWxlY3RlZENvdW50cnkuZGlhbENvZGV9YCkge1xuXHRcdFx0XHQkaW5wdXQudmFsKGArJHtzZWxlY3RlZENvdW50cnkuZGlhbENvZGV9IGApO1xuXHRcdFx0fVxuXG5cdFx0XHRyZXR1cm4gKFxuXHRcdFx0XHRpc1ZhbGlkICYmXG5cdFx0XHRcdChlLm1ldGFLZXkgfHwgLy8gY21kL2N0cmxcblx0XHRcdFx0ZS53aGljaCA8PSAwIHx8IC8vIGFycm93IGtleXNcblx0XHRcdFx0ZS53aGljaCA9PSA4IHx8IC8vIGRlbGV0ZSBrZXlcblx0XHRcdFx0XHQoIXZhbHVlLmxlbmd0aCAmJiBlLmtleSA9PT0gJysnKSB8fFxuXHRcdFx0XHRcdC9bMC05XS8udGVzdChTdHJpbmcuZnJvbUNoYXJDb2RlKGUud2hpY2gpKSlcblx0XHRcdCk7XG5cdFx0fSk7XG5cblx0XHQkZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjb3VudHJ5Y2hhbmdlJywgZnVuY3Rpb24oKSB7XG5cdFx0XHRvbkNoYW5nZUNvdW50cnkoKTtcblx0XHR9KTtcblxuXHRcdGNvbnN0IG9uQ2hhbmdlQ291bnRyeSA9ICgpID0+IHtcblx0XHRcdGNvbnN0ICRzZWxlY3RlZENvdW50cnlJbnB1dCA9ICQoYCMke2NvbmZpZy5zZWxlY3RlZENvdW50cnlJbnB1dH1gKTtcblx0XHRcdGNvbnN0IHNlbGVjdGVkQ291bnRyeSA9IGNvdW50cnlQaG9uZUlucHV0LmdldFNlbGVjdGVkQ291bnRyeURhdGEoKTtcblxuXHRcdFx0JHNlbGVjdGVkQ291bnRyeUlucHV0LnZhbChzZWxlY3RlZENvdW50cnkuaXNvMik7XG5cdFx0XHQkc2VsZWN0ZWRDb3VudHJ5SW5wdXQudHJpZ2dlcignY2hhbmdlJyk7XG5cdFx0fTtcblxuXHRcdCQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKCkge1xuXHRcdFx0b25DaGFuZ2VDb3VudHJ5KCk7XG5cdFx0fSk7XG5cdH07XG5cblx0U2FwcGhpcmVXaWRnZXRzLkNvdW50cnlQaG9uZSA9IHtcblx0XHRjcmVhdGUsXG5cdH07XG59KShqUXVlcnksIHdpbmRvdywgU2FwcGhpcmVXaWRnZXRzKTtcbiIsIihmdW5jdGlvbigpIHtcblx0Y2xhc3MgRGF0YVRhYmxlcyB7XG5cdFx0Y29uc3RydWN0b3IoY29uZmlnKSB7XG5cdFx0XHR0aGlzLmNvbmZpZyA9IGNvbmZpZztcblx0XHRcdHRoaXMuJHdpZGdldCA9ICQoYCMke2NvbmZpZy53aWRnZXRJZH1gKTtcblx0XHRcdHRoaXMuJHRhYmxlID0gdGhpcy4kd2lkZ2V0LmZpbmQoJ3RhYmxlJyk7XG5cdFx0XHR0aGlzLiR0YWJsZS5hZGRDbGFzcygnY2VsbC1ib3JkZXIgY29tcGFjdCcpO1xuXHRcdFx0dGhpcy5vbkluaXQoKTtcblx0XHR9XG5cblx0XHRvbkluaXQoKSB7XG5cdFx0XHR0aGlzLm9wdGlvbnMgPSB7XG5cdFx0XHRcdC4uLnRoaXMuY29uZmlnLFxuXHRcdFx0XHRmaXhlZENvbHVtbnM6IHRydWUsXG5cdFx0XHRcdGluZm86IGZhbHNlLFxuXHRcdFx0XHRvcmRlcmluZzogZmFsc2UsXG5cdFx0XHRcdHBhZ2luZzogZmFsc2UsXG5cdFx0XHRcdHNjcm9sbENvbGxhcHNlOiB0cnVlLFxuXHRcdFx0XHRzY3JvbGxYOiB0cnVlLFxuXHRcdFx0XHRzZWFyY2hpbmc6IGZhbHNlLFxuXHRcdFx0fTtcblxuXHRcdFx0JCgoKSA9PiB7XG5cdFx0XHRcdHRoaXMuJHRhYmxlLkRhdGFUYWJsZSh0aGlzLm9wdGlvbnMpO1xuXHRcdFx0fSk7XG5cdFx0fVxuXHR9XG5cblx0Y29uc3QgY3JlYXRlID0gY29uZmlnID0+ICh3aW5kb3dbY29uZmlnLndpZGdldElkXSA9IG5ldyBEYXRhVGFibGVzKGNvbmZpZykpO1xuXG5cdFNhcHBoaXJlV2lkZ2V0cy5EYXRhVGFibGVzID0ge1xuXHRcdGNyZWF0ZSxcblx0fTtcbn0pKCk7XG4iLCIvKiBDb21wb25lbnQgRGF0ZVRpbWVSYW5nZVBpY2tlciAqL1xyXG4oZnVuY3Rpb24oJCwgd2luZG93LCBkb2N1bWVudCwgU2FwcGhpcmVXaWRnZXRzKSB7XHJcblx0dmFyIGFsbERhdGVUaW1lUmFuZ2VQaWNrZXJzID0gW107XHJcblxyXG5cdHZhciBjcmVhdGUgPSBmdW5jdGlvbihjb25maWcpIHtcclxuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgYWxsRGF0ZVRpbWVSYW5nZVBpY2tlcnMubGVuZ3RoOyBpKyspIHtcclxuXHRcdFx0aWYgKGFsbERhdGVUaW1lUmFuZ2VQaWNrZXJzW2ldLmNvbmZpZy53aWRnZXRJZCA9PT0gY29uZmlnLndpZGdldElkKSB7XHJcblx0XHRcdFx0YWxsRGF0ZVRpbWVSYW5nZVBpY2tlcnMuc3BsaWNlKGksIDEpO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0XHR3aW5kb3dbY29uZmlnLndpZGdldElkXSA9IG5ldyBEYXRlVGltZVJhbmdlUGlja2VyKGNvbmZpZyk7XHJcblx0XHRhbGxEYXRlVGltZVJhbmdlUGlja2Vycy5wdXNoKHdpbmRvd1tjb25maWcud2lkZ2V0SWRdKTtcclxuXHR9O1xyXG5cclxuXHR2YXIgRGF0ZVRpbWVSYW5nZVBpY2tlciA9IGZ1bmN0aW9uKGNvbmZpZykge1xyXG5cdFx0dGhpcy5jb25maWcgPSBjb25maWc7XHJcblx0XHR0aGlzLmN1cnJlbnRMb2NhbGUgPSBjb25maWcuY3VycmVudExvY2FsZTtcclxuXHJcblx0XHR0aGlzLiR3aWRnZXQgPSAkKCcjJyArIGNvbmZpZy53aWRnZXRJZCk7XHJcblx0XHR0aGlzLiR3aWRnZXQuYWRkQ2xhc3MoJ0RhdGVUaW1lUmFuZ2VQaWNrZXInKTtcclxuXHRcdHRoaXMuJGNsZWFyID0gdGhpcy4kd2lkZ2V0LmZpbmQoJy5EYXRlVGltZVJhbmdlUGlja2VyLWNsZWFyJyk7XHJcblx0XHR0aGlzLiRsYWJlbCA9IHRoaXMuJHdpZGdldC5maW5kKCcuRGF0ZVRpbWVSYW5nZVBpY2tlci1sYWJlbCcpO1xyXG5cclxuXHRcdHRoaXMuaXNFbXB0eUhvdXIgPSBmYWxzZTtcclxuXHJcblx0XHRpZiAodGhpcy5jb25maWcuYXR0YWNoVG9JbnB1dCkge1xyXG5cdFx0XHR0aGlzLiR3aWRnZXQuYWRkQ2xhc3MoJ2F0dGFjaGVkSW5wdXQnKTtcclxuXHRcdFx0dGhpcy4kbW9kZWwgPSB0aGlzLiR3aWRnZXQuZmluZCgnLkRhdGVUaW1lUmFuZ2VQaWNrZXItcGxhY2Vob2xkZXIgaW5wdXRbdHlwZT1cInRleHRcIl0nKTtcclxuXHRcdFx0dGhpcy4kbW9kZWwuYXR0cigndGFiSW5kZXgnLCAtMSk7XHJcblx0XHR9XHJcblxyXG5cdFx0dGhpcy4kaW5wdXQgPSAkKCcjJyArIGNvbmZpZy5pbnB1dElkKTtcclxuXHJcblx0XHRpZiAoIXRoaXMuY29uZmlnLmFsbG93c1R5cGluZykge1xyXG5cdFx0XHR0aGlzLiRpbnB1dC5wcm9wKCdyZWFkb25seScsIHRydWUpO1xyXG5cdFx0fVxyXG5cclxuXHRcdGlmICh0aGlzLmN1cnJlbnRMb2NhbGUgPT09ICdBUicpIHtcclxuXHRcdFx0bW9tZW50LmxvY2FsZSgnYXIta3cnKTtcclxuXHRcdH1cclxuXHJcblx0XHR2YXIgb3B0aW9ucyA9IHt9O1xyXG5cdFx0b3B0aW9ucy5zdGFydERhdGUgPSBjb25maWcuc3RhcnREYXRlO1xyXG5cdFx0b3B0aW9ucy5zaW5nbGVEYXRlUGlja2VyID0gY29uZmlnLnNpbmdsZURhdGVQaWNrZXI7XHJcblx0XHRvcHRpb25zLmF1dG9BcHBseSA9IGNvbmZpZy5hdXRvQXBwbHk7XHJcblx0XHRvcHRpb25zLmF1dG9VcGRhdGVJbnB1dCA9IGNvbmZpZy5hdXRvVXBkYXRlSW5wdXQ7XHJcblx0XHRvcHRpb25zLnRpbWVQaWNrZXIgPSBjb25maWcudGltZVBpY2tlcjtcclxuXHRcdG9wdGlvbnMudGltZVBpY2tlcjI0SG91ciA9IGNvbmZpZy50aW1lUGlja2VyMjRIb3VyO1xyXG5cdFx0b3B0aW9ucy50aW1lUGlja2VySW5jcmVtZW50ID0gY29uZmlnLnRpbWVQaWNrZXJJbmNyZW1lbnQ7XHJcblx0XHRvcHRpb25zLnNob3dEcm9wZG93bnMgPSBjb25maWcuaGFzRHJvcGRvd25zOyAvLyBNb250aC9ZZWFyIFBpY2tlclxyXG5cdFx0b3B0aW9ucy5kcm9wcyA9IGNvbmZpZy5kcm9wcztcclxuXHRcdG9wdGlvbnMub3BlbnMgPSBjb25maWcuY3VycmVudExvY2FsZSA9PT0gJ0FSJyAmJiBjb25maWcub3BlbnMgIT0gJ2NlbnRlcicgPyAnbGVmdCcgOiBjb25maWcub3BlbnM7XHJcblxyXG5cdFx0dmFyIHN0cmluZ0Nvbm5lY3Rpb24gPSAnWywgYXRdJztcclxuXHJcblx0XHRpZiAoY29uZmlnLnRpbWVQaWNrZXIpIHtcclxuXHRcdFx0aWYgKCF0aGlzLmNvbmZpZy5hdHRhY2hUb0lucHV0KSB0aGlzLiRpbnB1dC5wcm9wKCdwbGFjZWhvbGRlcicsICdERC1NTS1ZWVlZIEhIOk1NJyk7XHJcblxyXG5cdFx0XHRpZiAob3B0aW9ucy50aW1lUGlja2VyMjRIb3VyKSB7XHJcblx0XHRcdFx0dGhpcy5jb25maWcuZm9ybWF0SW5wdXQgPSBgJHt0aGlzLmNvbmZpZy5zeXN0ZW1EYXRlRm9ybWF0fSBISDptbWA7XHJcblx0XHRcdFx0dGhpcy5jb25maWcuZm9ybWF0TGFiZWwgPSB0aGlzLmNvbmZpZy5oYXNZZWFyV2hlblRleHRcclxuXHRcdFx0XHRcdD8gJ0QgTU1NIFlZWVknICsgc3RyaW5nQ29ubmVjdGlvbiArICcgSEg6bW0nXHJcblx0XHRcdFx0XHQ6ICdEIE1NTScgKyBzdHJpbmdDb25uZWN0aW9uICsgJyBISDptbSc7XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0dGhpcy5jb25maWcuZm9ybWF0SW5wdXQgPSBgJHt0aGlzLmNvbmZpZy5zeXN0ZW1EYXRlRm9ybWF0fSBoaDptbSBBYDtcclxuXHRcdFx0XHR0aGlzLmNvbmZpZy5mb3JtYXRMYWJlbCA9IHRoaXMuY29uZmlnLmhhc1llYXJXaGVuVGV4dFxyXG5cdFx0XHRcdFx0PyAnRCBNTU0gWVlZWScgKyBzdHJpbmdDb25uZWN0aW9uICsgJyBoaDptbSBBJ1xyXG5cdFx0XHRcdFx0OiAnRCBNTU0nICsgc3RyaW5nQ29ubmVjdGlvbiArICcgaGg6bW0gQSc7XHJcblx0XHRcdH1cclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdHRoaXMuJHdpZGdldC5hZGRDbGFzcygnb25seURhdGUnKTtcclxuXHJcblx0XHRcdGlmICghdGhpcy5jb25maWcuYXR0YWNoVG9JbnB1dCkgdGhpcy4kaW5wdXQucHJvcCgncGxhY2Vob2xkZXInLCAnREQtTU0tWVlZWScpO1xyXG5cclxuXHRcdFx0dGhpcy5jb25maWcuZm9ybWF0SW5wdXQgPSB0aGlzLmNvbmZpZy5zeXN0ZW1EYXRlRm9ybWF0O1xyXG5cdFx0XHR0aGlzLmNvbmZpZy5mb3JtYXRMYWJlbCA9IHRoaXMuY29uZmlnLmhhc1llYXJXaGVuVGV4dCA/ICdEIE1NTSBZWVlZJyA6ICdEIE1NTSc7XHJcblx0XHR9XHJcblxyXG5cdFx0aWYgKCFjb25maWcuc2luZ2xlRGF0ZVBpY2tlcikge1xyXG5cdFx0XHR0aGlzLiR3aWRnZXQuYWRkQ2xhc3MoJ3JhbmdlRGF0ZXMnKTtcclxuXHRcdH1cclxuXHJcblx0XHR0aGlzLmNvbmZpZy5mb3JtYXRMYWJlbCA9IHRoaXMuY29uZmlnLmhhc1dlZWtEYXlOYW1lV2hlblRleHRcclxuXHRcdFx0PyAnZGRkWywgXScgKyB0aGlzLmNvbmZpZy5mb3JtYXRMYWJlbFxyXG5cdFx0XHQ6IHRoaXMuY29uZmlnLmZvcm1hdExhYmVsO1xyXG5cclxuXHRcdG9wdGlvbnMubG9jYWxlID0ge1xyXG5cdFx0XHRkaXJlY3Rpb246IGNvbmZpZy5jdXJyZW50TG9jYWxlID09PSAnQVInID8gJ3J0bCcgOiAnbHRyJyxcclxuXHRcdFx0Zm9ybWF0OiB0aGlzLmNvbmZpZy5mb3JtYXRJbnB1dCxcclxuXHRcdFx0Y2FuY2VsTGFiZWw6ICdDYW5jZWwnLFxyXG5cdFx0XHRhcHBseUxhYmVsOiAnQXBwbHknLFxyXG5cdFx0fTtcclxuXHJcblx0XHRpZiAoY29uZmlnLmhhc1RleHRUcmlnZ2VyKSB7XHJcblx0XHRcdHRoaXMuJHdpZGdldC5hZGRDbGFzcygndGV4dFRyaWdnZXInKTtcclxuXHRcdH1cclxuXHJcblx0XHRjb25zdCBudWxsZERhdGVzID0gWycwMS0wMS0xOTAwIDAwOjAwOjAwJywgJzE5MDAtMDEtMDEgMDA6MDA6MDAnXTtcclxuXHJcblx0XHRpZiAoY29uZmlnLmVuZERhdGUgJiYgIW51bGxkRGF0ZXMuc29tZShpID0+IGkgPT09IGNvbmZpZy5lbmREYXRlKSkge1xyXG5cdFx0XHRvcHRpb25zLmVuZERhdGUgPSBjb25maWcuZW5kRGF0ZTtcclxuXHRcdH1cclxuXHJcblx0XHRpZiAoY29uZmlnLm1heERhdGUgJiYgIW51bGxkRGF0ZXMuc29tZShpID0+IGkgPT09IGNvbmZpZy5tYXhEYXRlKSkge1xyXG5cdFx0XHRvcHRpb25zLm1heERhdGUgPSBjb25maWcubWF4RGF0ZTtcclxuXHRcdH1cclxuXHJcblx0XHRpZiAoY29uZmlnLm1pbkRhdGUgJiYgIW51bGxkRGF0ZXMuc29tZShpID0+IGkgPT09IGNvbmZpZy5taW5EYXRlKSkge1xyXG5cdFx0XHRvcHRpb25zLm1pbkRhdGUgPSBjb25maWcubWluRGF0ZTtcclxuXHRcdH1cclxuXHJcblx0XHRpZiAoY29uZmlnLkRpc2FibGVkV2Vla0RheXMpIHtcclxuXHRcdFx0dmFyIGRpc2FibGVkV2Vla0RheXMgPSBjb25maWcuRGlzYWJsZWRXZWVrRGF5cy5zcGxpdCgnLCcpO1xyXG5cdFx0XHRvcHRpb25zLmlzSW52YWxpZERhdGUgPSBmdW5jdGlvbihkYXRlKSB7XHJcblx0XHRcdFx0cmV0dXJuIGRpc2FibGVkV2Vla0RheXMuaW5jbHVkZXMoXHJcblx0XHRcdFx0XHRtb21lbnQoZGF0ZSlcclxuXHRcdFx0XHRcdFx0LmRheSgpXHJcblx0XHRcdFx0XHRcdC50b1N0cmluZygpXHJcblx0XHRcdFx0KTtcclxuXHRcdFx0fTtcclxuXHRcdH1cclxuXHJcblx0XHR2YXIgX3RoaXMgPSB0aGlzO1xyXG5cclxuXHRcdHRoaXMuJGlucHV0LmRhdGVyYW5nZXBpY2tlcihvcHRpb25zLCBmdW5jdGlvbihzdGFydERhdGUsIGVuZERhdGUsIGxhYmVsKSB7XHJcblx0XHRcdC8vIGFmdGVyIGEgc2VsZWN0aW9uIGlzIG1hZGVcclxuXHRcdFx0aWYgKF90aGlzLmNvbmZpZy5hdHRhY2hUb0lucHV0KSB7XHJcblx0XHRcdFx0bGV0IGZvcm1hdCA9ICcnO1xyXG5cclxuXHRcdFx0XHRpZiAoX3RoaXMuY29uZmlnLnRpbWVQaWNrZXIpIHtcclxuXHRcdFx0XHRcdGZvcm1hdCA9IGAke190aGlzLmNvbmZpZy5zeXN0ZW1EYXRlRm9ybWF0fSBISDptbWA7XHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRpZiAoX3RoaXMuY29uZmlnLnNpbmdsZURhdGVQaWNrZXIpIHtcclxuXHRcdFx0XHRcdGlmIChfdGhpcy5jb25maWcudGltZVBpY2tlcikgX3RoaXMuJG1vZGVsLnZhbChzdGFydERhdGUuZm9ybWF0KGZvcm1hdCkpO1xyXG5cdFx0XHRcdFx0ZWxzZSBfdGhpcy4kbW9kZWwudmFsKHN0YXJ0RGF0ZS5mb3JtYXQoX3RoaXMuY29uZmlnLnN5c3RlbURhdGVGb3JtYXQpKTtcclxuXHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0bGV0IHN0YXJ0LCBlbmQ7XHJcblxyXG5cdFx0XHRcdFx0aWYgKF90aGlzLmNvbmZpZy50aW1lUGlja2VyKSB7XHJcblx0XHRcdFx0XHRcdHN0YXJ0ID0gc3RhcnREYXRlLmZvcm1hdChmb3JtYXQpO1xyXG5cdFx0XHRcdFx0XHRlbmQgPSBlbmREYXRlLmZvcm1hdChmb3JtYXQpO1xyXG5cdFx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdFx0c3RhcnQgPSBzdGFydERhdGUuZm9ybWF0KF90aGlzLmNvbmZpZy5zeXN0ZW1EYXRlRm9ybWF0KTtcclxuXHRcdFx0XHRcdFx0ZW5kID0gZW5kRGF0ZS5mb3JtYXQoX3RoaXMuY29uZmlnLnN5c3RlbURhdGVGb3JtYXQpO1xyXG5cdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdF90aGlzLiRtb2RlbC52YWwoYCR7c3RhcnR9ICDCtyAgJHtlbmR9YCk7XHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRfdGhpcy4kbW9kZWwudHJpZ2dlcignY2hhbmdlJyk7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdGNvbnN0IGluaXRpYWxWYWx1ZSA9IF90aGlzLiRpbnB1dC52YWwoKTtcclxuXHRcdFx0Y29uc3QgYWxsb3dzTU1ZWSA9IF90aGlzLmNvbmZpZy5hbGxvd3NUeXBpbmcgJiYgX3RoaXMuY29uZmlnLmFsbG93c1R5cGVNTVlZICYmIF90aGlzLmNvbmZpZy5zaW5nbGVEYXRlUGlja2VyO1xyXG5cclxuXHRcdFx0aWYgKGFsbG93c01NWVkgJiYgaW5pdGlhbFZhbHVlLmxlbmd0aCA9PT0gNCkge1xyXG5cdFx0XHRcdF90aGlzLnBpY2tlci5zZXRTdGFydERhdGUobW9tZW50KGAwMSR7aW5pdGlhbFZhbHVlfWAsICdERE1NWVknKSk7XHJcblxyXG5cdFx0XHRcdGlmIChfdGhpcy5jb25maWcuYXR0YWNoVG9JbnB1dCkge1xyXG5cdFx0XHRcdFx0bGV0IGZvcm1hdCA9ICcnO1xyXG5cclxuXHRcdFx0XHRcdGlmIChfdGhpcy5jb25maWcudGltZVBpY2tlcikgZm9ybWF0ID0gYCR7X3RoaXMuY29uZmlnLnN5c3RlbURhdGVGb3JtYXR9IEhIOm1tYDtcclxuXHRcdFx0XHRcdGVsc2UgZm9ybWF0ID0gX3RoaXMuY29uZmlnLnN5c3RlbURhdGVGb3JtYXQ7XHJcblxyXG5cdFx0XHRcdFx0X3RoaXMuJG1vZGVsLnZhbChfdGhpcy5waWNrZXIuc3RhcnREYXRlLmZvcm1hdChmb3JtYXQpKTtcclxuXHRcdFx0XHRcdF90aGlzLiRtb2RlbC50cmlnZ2VyKCdjaGFuZ2UnKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdH0pO1xyXG5cclxuXHRcdC8vIG5vdyB3ZSBoYXZlIGEgcHJvcGVyIGluc3RhbmNlXHJcblx0XHR0aGlzLnBpY2tlciA9IHRoaXMuJGlucHV0LmRhdGEoJ2RhdGVyYW5nZXBpY2tlcicpO1xyXG5cclxuXHRcdHRoaXMuJGNhbGVuZGFyID0gJCh0aGlzLnBpY2tlci5jb250YWluZXIpO1xyXG5cclxuXHRcdGlmICghIXRoaXMuY29uZmlnLmNzc0NsYXNzKSB7XHJcblx0XHRcdHRoaXMuJGNhbGVuZGFyLmFkZENsYXNzKHRoaXMuY29uZmlnLmNzc0NsYXNzKTtcclxuXHRcdH1cclxuXHJcblx0XHR0aGlzLiR0aW1lSG9sZGVyID0gdGhpcy4kY2FsZW5kYXIuZmluZCgnLmNhbGVuZGFyLXRpbWUnKTtcclxuXHRcdHRoaXMuJGJ1dHRvbnNIb2xkZXIgPSB0aGlzLiRjYWxlbmRhci5maW5kKCcuZHJwLWJ1dHRvbnMnKTtcclxuXHJcblx0XHRpZiAodGhpcy5jb25maWcuYXV0b0FwcGx5KSB7XHJcblx0XHRcdHRoaXMuJGJ1dHRvbnNIb2xkZXIuaGlkZSgpO1xyXG5cdFx0fVxyXG5cclxuXHRcdGlmIChjb25maWcuaXNFbXB0eVN0YXJ0RGF0ZSkge1xyXG5cdFx0XHR0aGlzLmNsZWFyKGZhbHNlKTtcclxuXHRcdH0gZWxzZSBpZiAoY29uZmlnLmlzRW1wdHlTdGFydEhvdXIpIHtcclxuXHRcdFx0dGhpcy5pc0VtcHR5SG91ciA9IHRydWU7XHJcblx0XHRcdHRoaXMudXBkYXRlTGFiZWxpbmcoKTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdHRoaXMudXBkYXRlTGFiZWxpbmcoKTtcclxuXHRcdH1cclxuXHJcblx0XHRpZiAoY29uZmlnLmVuYWJsZWQpIHtcclxuXHRcdFx0dGhpcy5uYXRpdmVFdmVudHMoKTtcclxuXHRcdFx0dGhpcy5jdXN0b21FdmVudHMoKTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdHRoaXMuJGNsZWFyLmhpZGUoKTtcclxuXHRcdFx0dGhpcy4kaW5wdXQub2ZmKCdjbGljayBmb2N1cyBrZXlkb3duIGtleXVwJyk7XHJcblx0XHR9XHJcblxyXG5cdFx0aWYgKHRoaXMuY29uZmlnLmF0dGFjaFRvSW5wdXQpIHtcclxuXHRcdFx0dGhpcy5oYW5kbGVDdXN0b21WYWxpZGF0aW9uKCk7XHJcblx0XHR9XHJcblx0fTtcclxuXHJcblx0RGF0ZVRpbWVSYW5nZVBpY2tlci5wcm90b3R5cGUuaGFuZGxlQ3VzdG9tVmFsaWRhdGlvbiA9IGZ1bmN0aW9uKCkge1xyXG5cdFx0Ly8gVE8gRE9cclxuXHR9O1xyXG5cclxuXHREYXRlVGltZVJhbmdlUGlja2VyLnByb3RvdHlwZS5uYXRpdmVFdmVudHMgPSBmdW5jdGlvbigpIHtcclxuXHRcdGNvbnN0IF90aGlzID0gdGhpcztcclxuXHJcblx0XHR0aGlzLiRpbnB1dC5vbignc2hvd0NhbGVuZGFyLmRhdGVyYW5nZXBpY2tlcicsIGZ1bmN0aW9uKGV2ZW50LCBwaWNrZXIpIHtcclxuXHRcdFx0aWYgKF90aGlzLmNvbmZpZy5oYXNHb1RvZGF5KSB7XHJcblx0XHRcdFx0X3RoaXMuJGNhbGVuZGFyXHJcblx0XHRcdFx0XHQuZmluZCgnLmNhbGVuZGFyLXRhYmxlIHRoZWFkIHRyJylcclxuXHRcdFx0XHRcdC5lcSgwKVxyXG5cdFx0XHRcdFx0LmFmdGVyKFxyXG5cdFx0XHRcdFx0XHQnPHRyPjx0ZCBjb2xzcGFuPVwiN1wiIGNsYXNzPVwiRGF0ZVRpbWVSYW5nZVBpY2tlci1jYWxlbmRhci1nb3RvZGF5XCI+JyArXHJcblx0XHRcdFx0XHRcdFx0X3RoaXMuY29uZmlnLmdvVG9kYXlMYWJlbCArXHJcblx0XHRcdFx0XHRcdFx0JzwvdGQ+PC90cj4nXHJcblx0XHRcdFx0XHQpO1xyXG5cdFx0XHRcdGlmIChfdGhpcy5jb25maWcuZHJvcHMgPT09ICd1cCcpIHtcclxuXHRcdFx0XHRcdF90aGlzLiRjYWxlbmRhci5jc3MoJ3RvcCcsIF90aGlzLiRjYWxlbmRhci5vZmZzZXQoKS50b3AgLSAyNCk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHRcdF90aGlzLmhhbmRsZVZpZXdwb3J0UG9zaXRpb24oKTtcclxuXHJcblx0XHRcdGlmICghX3RoaXMuY29uZmlnLnNpbmdsZURhdGVQaWNrZXIpIHtcclxuXHRcdFx0XHQkKCcuZHJwLXNlbGVjdGVkJykuZWFjaChmdW5jdGlvbigpIHtcclxuXHRcdFx0XHRcdGxldCB0ZXh0ID0gJCh0aGlzKS50ZXh0KCk7XHJcblx0XHRcdFx0XHR0ZXh0ID0gdGV4dC5yZXBsYWNlKC8tL2dpLCAnwrcnKTtcclxuXHJcblx0XHRcdFx0XHQkKHRoaXMpLnRleHQodGV4dCk7XHJcblx0XHRcdFx0fSk7XHJcblx0XHRcdH1cclxuXHRcdH0pO1xyXG5cclxuXHRcdHRoaXMuJGlucHV0Lm9uKCdzaG93LmRhdGVyYW5nZXBpY2tlcicsIGZ1bmN0aW9uKGV2ZW50LCBwaWNrZXIpIHtcclxuXHRcdFx0aWYgKF90aGlzLmNvbmZpZy50aW1lUGlja2VyICYmIF90aGlzLmNvbmZpZy5oYXNDbGVhckhvdXIpIHtcclxuXHRcdFx0XHRfdGhpcy4kY2FsZW5kYXIuZmluZCgnLmNhbGVuZGFyLXRpbWUnKS5hcHBlbmQoJzxzcGFuIGNsYXNzPVwiRGF0ZVRpbWVSYW5nZVBpY2tlci1jYWxlbmRhci1jbGVhclwiPjwvc3Bhbj4nKTtcclxuXHRcdFx0XHRpZiAoX3RoaXMuaXNFbXB0eUhvdXIpIHtcclxuXHRcdFx0XHRcdF90aGlzLiR0aW1lSG9sZGVyLmNzcygnb3BhY2l0eScsIDAuNSk7XHJcblx0XHRcdFx0XHRfdGhpcy4kY2FsZW5kYXIuZmluZCgnLkRhdGVUaW1lUmFuZ2VQaWNrZXItY2FsZW5kYXItY2xlYXInKS5hZGRDbGFzcygnZGlzYWJsZWQnKTtcclxuXHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0X3RoaXMuJHRpbWVIb2xkZXIuY3NzKCdvcGFjaXR5JywgMSk7XHJcblx0XHRcdFx0XHRfdGhpcy4kY2FsZW5kYXIuZmluZCgnLkRhdGVUaW1lUmFuZ2VQaWNrZXItY2FsZW5kYXItY2xlYXInKS5yZW1vdmVDbGFzcygnZGlzYWJsZWQnKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdFx0X3RoaXMuaGFuZGxlVmlld3BvcnRQb3NpdGlvbigpO1xyXG5cdFx0XHRTYXBwaGlyZVdpZGdldHMuRGF0ZVRpbWVSYW5nZVBpY2tlci5vcGVuZWRXaWRnZXRJZCA9IF90aGlzLmNvbmZpZy53aWRnZXRJZDtcclxuXHJcblx0XHRcdGlmIChfdGhpcy5jb25maWcuY3NzQ2xhc3MgPT09ICdDYWxlbmRhclBvcHVwJyAmJiB3aW5kb3cuZnJhbWVFbGVtZW50KSB7XHJcblx0XHRcdFx0Y29uc3Qgb2xkQm9keUhlaWdodCA9ICQoJ2JvZHknKVswXS5zY3JvbGxIZWlnaHQgKyA4O1xyXG5cdFx0XHRcdGNvbnN0IGNhbGVuZGFyU2FmZUhlaWdodCA9IF90aGlzLiRjYWxlbmRhci5vdXRlckhlaWdodCgpICsgMzI7XHJcblxyXG5cdFx0XHRcdGNvbnN0IG5ld0hlaWdodCA9IG9sZEJvZHlIZWlnaHQgPiBjYWxlbmRhclNhZmVIZWlnaHQgPyBvbGRCb2R5SGVpZ2h0IDogY2FsZW5kYXJTYWZlSGVpZ2h0O1xyXG5cclxuXHRcdFx0XHQkKCc8ZGl2IGNsYXNzPVwiQ2FsZW5kYXJQb3B1cF9fT3ZlcmxheVwiPjwvZGl2PicpLmluc2VydEFmdGVyKF90aGlzLiRjYWxlbmRhcik7XHJcblxyXG5cdFx0XHRcdCQod2luZG93LmZyYW1lRWxlbWVudCkuYW5pbWF0ZSh7IG1pbkhlaWdodDogbmV3SGVpZ2h0IH0pO1xyXG5cdFx0XHRcdCQoJ2JvZHknKS5hbmltYXRlKHsgbWluSGVpZ2h0OiBuZXdIZWlnaHQgfSk7XHJcblx0XHRcdH1cclxuXHRcdH0pO1xyXG5cclxuXHRcdHRoaXMuJGlucHV0Lm9uKCdoaWRlLmRhdGVyYW5nZXBpY2tlcicsIGZ1bmN0aW9uKGV2ZW50LCBwaWNrZXIpIHtcclxuXHRcdFx0X3RoaXMuJGNhbGVuZGFyLmZpbmQoJy5EYXRlVGltZVJhbmdlUGlja2VyLWNhbGVuZGFyLWNsZWFyJykucmVtb3ZlKCk7XHJcblx0XHRcdF90aGlzLnVwZGF0ZVBhcmVudElmcmFtZSgpO1xyXG5cclxuXHRcdFx0aWYgKF90aGlzLmNvbmZpZy5jc3NDbGFzcyA9PT0gJ0NhbGVuZGFyUG9wdXAnICYmIHdpbmRvdy5mcmFtZUVsZW1lbnQpIHtcclxuXHRcdFx0XHQkKHdpbmRvdy5mcmFtZUVsZW1lbnQpLmNzcyh7IG1pbkhlaWdodDogJ3Vuc2V0JyB9KTtcclxuXHRcdFx0XHQkKCdib2R5JykuY3NzKHsgbWluSGVpZ2h0OiAndW5zZXQnIH0pO1xyXG5cclxuXHRcdFx0XHQkKCcuQ2FsZW5kYXJQb3B1cF9fT3ZlcmxheScpLnJlbW92ZSgpO1xyXG5cdFx0XHR9XHJcblx0XHR9KTtcclxuXHJcblx0XHR0aGlzLiRpbnB1dC5vbignY2FuY2VsLmRhdGVyYW5nZXBpY2tlcicsIGZ1bmN0aW9uKGV2ZW50LCBwaWNrZXIpIHt9KTtcclxuXHJcblx0XHR0aGlzLiRpbnB1dC5vbignb3V0c2lkZUNsaWNrLmRhdGVyYW5nZXBpY2tlcicsIGZ1bmN0aW9uKGV2ZW50LCBwaWNrZXIpIHt9KTtcclxuXHJcblx0XHR0aGlzLiRpbnB1dC5vbigndGltZWNoYW5nZWQuZGF0ZXJhbmdlcGlja2VyJywgZnVuY3Rpb24oZXZlbnQsIHBpY2tlcikge1xyXG5cdFx0XHRfdGhpcy5pc0VtcHR5SG91ciA9IGZhbHNlO1xyXG5cdFx0XHRfdGhpcy4kdGltZUhvbGRlci5jc3MoJ29wYWNpdHknLCAxKTtcclxuXHRcdFx0aWYgKF90aGlzLmNvbmZpZy5oYXNDbGVhckhvdXIpIHtcclxuXHRcdFx0XHRfdGhpcy4kY2FsZW5kYXIuZmluZCgnLmNhbGVuZGFyLXRpbWUnKS5hcHBlbmQoJzxzcGFuIGNsYXNzPVwiRGF0ZVRpbWVSYW5nZVBpY2tlci1jYWxlbmRhci1jbGVhclwiPjwvc3Bhbj4nKTtcclxuXHRcdFx0fVxyXG5cdFx0XHRpZiAoX3RoaXMuY29uZmlnLmF1dG9BcHBseSkge1xyXG5cdFx0XHRcdF90aGlzLiRjbGVhci5yZW1vdmVDbGFzcygnZGlzYWJsZWQnKTtcclxuXHRcdFx0XHRfdGhpcy51cGRhdGVMYWJlbGluZygpO1xyXG5cdFx0XHRcdF90aGlzLnNlbmROb3RpZmljYXRpb24oKTtcclxuXHRcdFx0fVxyXG5cdFx0fSk7XHJcblxyXG5cdFx0dGhpcy4kaW5wdXQub24oJ2NsaWNrRGF0ZS5kYXRlcmFuZ2VwaWNrZXInLCBmdW5jdGlvbihldmVudCwgcGlja2VyKSB7XHJcblx0XHRcdGlmIChfdGhpcy5jb25maWcuYXV0b0FwcGx5KSB7XHJcblx0XHRcdFx0X3RoaXMuJGNsZWFyLnJlbW92ZUNsYXNzKCdkaXNhYmxlZCcpO1xyXG5cdFx0XHRcdF90aGlzLnVwZGF0ZUxhYmVsaW5nKCk7XHJcblx0XHRcdFx0X3RoaXMuc2VuZE5vdGlmaWNhdGlvbigpO1xyXG5cdFx0XHR9XHJcblx0XHR9KTtcclxuXHJcblx0XHR0aGlzLiRpbnB1dC5vbignYXBwbHkuZGF0ZXJhbmdlcGlja2VyJywgZnVuY3Rpb24oZXZlbnQsIHBpY2tlcikge1xyXG5cdFx0XHRfdGhpcy4kY2xlYXIucmVtb3ZlQ2xhc3MoJ2Rpc2FibGVkJyk7XHJcblx0XHRcdF90aGlzLnVwZGF0ZUxhYmVsaW5nKCk7XHJcblx0XHRcdF90aGlzLnNlbmROb3RpZmljYXRpb24oKTtcclxuXHRcdH0pO1xyXG5cdH07XHJcblxyXG5cdERhdGVUaW1lUmFuZ2VQaWNrZXIucHJvdG90eXBlLmN1c3RvbUV2ZW50cyA9IGZ1bmN0aW9uKCkge1xyXG5cdFx0dmFyIF90aGlzID0gdGhpcztcclxuXHRcdHRoaXMuJGxhYmVsLm9mZignY2xpY2snKS5vbignY2xpY2snLCBmdW5jdGlvbihldmVudCkge1xyXG5cdFx0XHRfdGhpcy5waWNrZXIudG9nZ2xlKCk7XHJcblx0XHR9KTtcclxuXHRcdHRoaXMuJGNsZWFyLm9mZignY2xpY2snKS5vbignY2xpY2snLCBmdW5jdGlvbihldmVudCkge1xyXG5cdFx0XHRfdGhpcy5jbGVhcigpO1xyXG5cdFx0XHRfdGhpcy5waWNrZXIuaGlkZSgpO1xyXG5cdFx0fSk7XHJcblx0XHR0aGlzLiRjYWxlbmRhci5vbignY2xpY2snLCAnLkRhdGVUaW1lUmFuZ2VQaWNrZXItY2FsZW5kYXItY2xlYXInLCBmdW5jdGlvbigpIHtcclxuXHRcdFx0aWYgKF90aGlzLmNvbmZpZy50aW1lUGlja2VyMjRIb3VyKSB7XHJcblx0XHRcdFx0X3RoaXMuJGNhbGVuZGFyXHJcblx0XHRcdFx0XHQuZmluZCgnLmhvdXJzZWxlY3QnKVxyXG5cdFx0XHRcdFx0LnZhbCgnMCcpXHJcblx0XHRcdFx0XHQudHJpZ2dlcignY2hhbmdlJyk7XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0X3RoaXMuJGNhbGVuZGFyXHJcblx0XHRcdFx0XHQuZmluZCgnLmhvdXJzZWxlY3QnKVxyXG5cdFx0XHRcdFx0LnZhbCgnMTInKVxyXG5cdFx0XHRcdFx0LnRyaWdnZXIoJ2NoYW5nZScpO1xyXG5cdFx0XHR9XHJcblx0XHRcdF90aGlzLiRjYWxlbmRhclxyXG5cdFx0XHRcdC5maW5kKCcubWludXRlc2VsZWN0JylcclxuXHRcdFx0XHQudmFsKCcwJylcclxuXHRcdFx0XHQudHJpZ2dlcignY2hhbmdlJyk7XHJcblx0XHRcdF90aGlzLiRjYWxlbmRhclxyXG5cdFx0XHRcdC5maW5kKCcuYW1wbXNlbGVjdCcpXHJcblx0XHRcdFx0LnZhbCgnQU0nKVxyXG5cdFx0XHRcdC50cmlnZ2VyKCdjaGFuZ2UnKTtcclxuXHRcdFx0X3RoaXMuaXNFbXB0eUhvdXIgPSB0cnVlO1xyXG5cdFx0XHRfdGhpcy4kdGltZUhvbGRlci5jc3MoJ29wYWNpdHknLCAwLjUpO1xyXG5cdFx0XHRfdGhpcy4kY2FsZW5kYXIuZmluZCgnLkRhdGVUaW1lUmFuZ2VQaWNrZXItY2FsZW5kYXItY2xlYXInKS5hZGRDbGFzcygnZGlzYWJsZWQnKTtcclxuXHRcdH0pO1xyXG5cdFx0dGhpcy4kY2FsZW5kYXIub24oJ2NsaWNrJywgJy5EYXRlVGltZVJhbmdlUGlja2VyLWNhbGVuZGFyLWdvdG9kYXknLCBmdW5jdGlvbigpIHtcclxuXHRcdFx0X3RoaXMucGlja2VyLnNldFN0YXJ0RGF0ZShtb21lbnQoKSk7XHJcblx0XHRcdF90aGlzLnBpY2tlci5zZXRFbmREYXRlKG1vbWVudCgpKTtcclxuXHRcdFx0X3RoaXMucGlja2VyLmhpZGUoKTtcclxuXHRcdFx0aWYgKCFfdGhpcy5jb25maWcuYXV0b1VwZGF0ZUlucHV0IHx8IF90aGlzLmNvbmZpZy5oYXNUZXh0VHJpZ2dlciB8fCBfdGhpcy5jb25maWcuYXR0YWNoVG9JbnB1dCkge1xyXG5cdFx0XHRcdF90aGlzLnVwZGF0ZUxhYmVsaW5nKCk7XHJcblx0XHRcdH1cclxuXHRcdFx0X3RoaXMuc2VuZE5vdGlmaWNhdGlvbigpO1xyXG5cdFx0fSk7XHJcblxyXG5cdFx0aWYgKHRoaXMuY29uZmlnLmF0dGFjaFRvSW5wdXQpIHtcclxuXHRcdFx0Ly8gTm90aGluZ1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0dGhpcy4kaW5wdXQub24oJ2NsaWNrJywgZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0d2luZG93LnNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0XHRfdGhpcy51cGRhdGVQYXJlbnRJZnJhbWUoKTtcclxuXHRcdFx0XHR9LCA1MCk7XHJcblx0XHRcdH0pO1xyXG5cdFx0fVxyXG5cclxuXHRcdHRoaXMuJGlucHV0Lm9uKCdibHVyJywgZnVuY3Rpb24oZXZ0KSB7XHJcblx0XHRcdF90aGlzLnNlbmROb3RpZmljYXRpb24oKTtcclxuXHRcdH0pO1xyXG5cdH07XHJcblxyXG5cdERhdGVUaW1lUmFuZ2VQaWNrZXIucHJvdG90eXBlLnVwZGF0ZUxhYmVsaW5nID0gZnVuY3Rpb24oKSB7XHJcblx0XHR2YXIgbGFiZWxNYXNrID0gdGhpcy5jb25maWcuZm9ybWF0TGFiZWw7XHJcblx0XHR2YXIgaW5wdXRNYXNrID0gdGhpcy5jb25maWcuZm9ybWF0SW5wdXQ7XHJcblxyXG5cdFx0aWYgKG1vbWVudCh0aGlzLnBpY2tlci5zdGFydERhdGUpLmlzU2FtZShtb21lbnQoKSwgJ2RheScpKSB7XHJcblx0XHRcdGlmIChsYWJlbE1hc2suaW5jbHVkZXMoJ0QgTU1NIFlZWVknKSkge1xyXG5cdFx0XHRcdGxhYmVsTWFzayA9IGxhYmVsTWFzay5yZXBsYWNlKCdEIE1NTSBZWVlZJywgJ1tUb2RheSxdIEQgTU1NIFlZWVknKTtcclxuXHRcdFx0fSBlbHNlIGlmIChsYWJlbE1hc2suaW5jbHVkZXMoJ0QgTU1NJykpIHtcclxuXHRcdFx0XHRsYWJlbE1hc2sgPSBsYWJlbE1hc2sucmVwbGFjZSgnRCBNTU0nLCAnW1RvZGF5XScpO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0XHRpZiAodGhpcy5pc0VtcHR5SG91cikge1xyXG5cdFx0XHRsYWJlbE1hc2sgPSBsYWJlbE1hc2sucmVwbGFjZSgnaGg6bW0gQScsICdbLS06LS1dJykucmVwbGFjZSgnSEg6bW0nLCAnWy0tOi0tXScpO1xyXG5cdFx0XHRpbnB1dE1hc2sgPSBpbnB1dE1hc2sucmVwbGFjZSgnaGg6bW0gQScsICdbLS06LS1dJykucmVwbGFjZSgnSEg6bW0nLCAnWy0tOi0tXScpO1xyXG5cclxuXHRcdFx0aWYgKHRoaXMuY29uZmlnLmhhc1RleHRUcmlnZ2VyKSB7XHJcblx0XHRcdFx0dGhpcy4kbGFiZWwuaHRtbCh0aGlzLmNvbmZpZy5wcmVmaXhUZXh0VHJpZ2dlciArIHRoaXMucGlja2VyLnN0YXJ0RGF0ZS5mb3JtYXQobGFiZWxNYXNrKSk7XHJcblxyXG5cdFx0XHRcdGlmICh0aGlzLmNvbmZpZy50aW1lUGlja2VyKSB7XHJcblx0XHRcdFx0XHR0aGlzLiRpbnB1dC52YWwodGhpcy5waWNrZXIuc3RhcnREYXRlLmZvcm1hdChgJHt0aGlzLmNvbmZpZy5zeXN0ZW1EYXRlRm9ybWF0fSBbMDA6MDA6MDBdYCkpO1xyXG5cdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHR0aGlzLiRpbnB1dC52YWwodGhpcy5waWNrZXIuc3RhcnREYXRlLmZvcm1hdCh0aGlzLmNvbmZpZy5zeXN0ZW1EYXRlRm9ybWF0KSk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdHRoaXMuJGlucHV0LnZhbCh0aGlzLnBpY2tlci5zdGFydERhdGUuZm9ybWF0KGAke3RoaXMuY29uZmlnLnN5c3RlbURhdGVGb3JtYXR9IFswMDowMDowMF1gKSk7XHJcblx0XHRcdH1cclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdGlmICh0aGlzLmNvbmZpZy5oYXNUZXh0VHJpZ2dlcikge1xyXG5cdFx0XHRcdHRoaXMuJGxhYmVsLmh0bWwodGhpcy5jb25maWcucHJlZml4VGV4dFRyaWdnZXIgKyB0aGlzLnBpY2tlci5zdGFydERhdGUuZm9ybWF0KGxhYmVsTWFzaykpO1xyXG5cdFx0XHRcdHRoaXMuJGlucHV0LnZhbCh0aGlzLnBpY2tlci5zdGFydERhdGUuZm9ybWF0KGlucHV0TWFzaykpO1xyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdGlmICh0aGlzLmNvbmZpZy5hdHRhY2hUb0lucHV0KSB7XHJcblx0XHRcdFx0XHRpZiAodGhpcy5jb25maWcuc2luZ2xlRGF0ZVBpY2tlcikge1xyXG5cdFx0XHRcdFx0XHR0aGlzLiRpbnB1dC52YWwodGhpcy5waWNrZXIuc3RhcnREYXRlLmZvcm1hdChpbnB1dE1hc2spKTtcclxuXHRcdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRcdGNvbnN0IHN0YXJ0RGF0ZSA9IHRoaXMucGlja2VyLnN0YXJ0RGF0ZS5mb3JtYXQoaW5wdXRNYXNrKTtcclxuXHRcdFx0XHRcdFx0Y29uc3QgZW5kRGF0ZSA9IHRoaXMucGlja2VyLmVuZERhdGUuZm9ybWF0KGlucHV0TWFzayk7XHJcblxyXG5cdFx0XHRcdFx0XHR0aGlzLiRpbnB1dC52YWwoYCR7c3RhcnREYXRlfSAgwrcgICR7ZW5kRGF0ZX1gKTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0aWYgKHRoaXMuY29uZmlnLnNpbmdsZURhdGVQaWNrZXIpIHtcclxuXHRcdFx0XHRcdFx0dGhpcy4kaW5wdXQudmFsKHRoaXMucGlja2VyLnN0YXJ0RGF0ZS5mb3JtYXQodGhpcy5jb25maWcuZm9ybWF0SW5wdXQpKTtcclxuXHRcdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRcdGxldCBzdGFydERhdGUgPSB0aGlzLnBpY2tlci5zdGFydERhdGUuZm9ybWF0KHRoaXMuY29uZmlnLmZvcm1hdElucHV0KTtcclxuXHRcdFx0XHRcdFx0bGV0IGVuZERhdGUgPSB0aGlzLnBpY2tlci5lbmREYXRlLmZvcm1hdCh0aGlzLmNvbmZpZy5mb3JtYXRJbnB1dCk7XHJcblxyXG5cdFx0XHRcdFx0XHR0aGlzLiRpbnB1dC52YWwoYCR7c3RhcnREYXRlfSAgwrcgICR7ZW5kRGF0ZX1gKTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9O1xyXG5cclxuXHREYXRlVGltZVJhbmdlUGlja2VyLnByb3RvdHlwZS5oYW5kbGVWaWV3cG9ydFBvc2l0aW9uID0gZnVuY3Rpb24oKSB7XHJcblx0XHRpZiAoXHJcblx0XHRcdHdpbmRvdy5mcmFtZUVsZW1lbnQgJiZcclxuXHRcdFx0KCQod2luZG93LmZyYW1lRWxlbWVudC5wYXJlbnRFbGVtZW50KS5oYXNDbGFzcygndG9vbHRpcHN0ZXItY29udGVudCcpIHx8XHJcblx0XHRcdFx0JCh3aW5kb3cuZnJhbWVFbGVtZW50LnBhcmVudEVsZW1lbnQpLmhhc0NsYXNzKCdvcy1pbnRlcm5hbC11aS1kaWFsb2ctY29udGVudCcpKVxyXG5cdFx0KSB7XHJcblx0XHRcdHJldHVybjtcclxuXHRcdH1cclxuXHJcblx0XHRpZiAoIXRoaXMuaXNJblZpZXdwb3J0KCkpIHtcclxuXHRcdFx0dmFyIGNvb3JkcyA9IHRoaXMuJGNhbGVuZGFyWzBdLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xyXG5cdFx0XHRpZiAodGhpcy4kY2FsZW5kYXIuaGFzQ2xhc3MoJ2Ryb3AtdXAnKSAmJiB0aGlzLiRjYWxlbmRhclswXS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS50b3AgPCAwKSB7XHJcblx0XHRcdFx0dmFyIHBvaW50ID0gd2luZG93LnNjcm9sbFkgKyBjb29yZHMuYm90dG9tICsgdGhpcy4kaW5wdXQuaGVpZ2h0KCkgKyA3O1xyXG5cdFx0XHRcdHRoaXMuJGNhbGVuZGFyXHJcblx0XHRcdFx0XHQucmVtb3ZlQ2xhc3MoJ2Ryb3AtdXAnKVxyXG5cdFx0XHRcdFx0LmFkZENsYXNzKCdkcm9wLWRvd24nKVxyXG5cdFx0XHRcdFx0LmNzcygndG9wJywgcG9pbnQpO1xyXG5cdFx0XHR9IGVsc2UgaWYgKFxyXG5cdFx0XHRcdCF0aGlzLiRjYWxlbmRhci5oYXNDbGFzcygnZHJvcC11cCcpICYmXHJcblx0XHRcdFx0dGhpcy4kY2FsZW5kYXJbMF0uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkuYm90dG9tID4gKHdpbmRvdy5pbm5lckhlaWdodCB8fCBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50SGVpZ2h0KVxyXG5cdFx0XHQpIHtcclxuXHRcdFx0XHR2YXIgcG9pbnQgPSB3aW5kb3cuc2Nyb2xsWSArIGNvb3Jkcy50b3AgLSBjb29yZHMuaGVpZ2h0IC0gdGhpcy4kaW5wdXQuaGVpZ2h0KCkgLSA3O1xyXG5cdFx0XHRcdHRoaXMuJGNhbGVuZGFyLmFkZENsYXNzKCdkcm9wLXVwJykuY3NzKCd0b3AnLCBwb2ludCk7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9O1xyXG5cclxuXHREYXRlVGltZVJhbmdlUGlja2VyLnByb3RvdHlwZS5pc0luVmlld3BvcnQgPSBmdW5jdGlvbigpIHtcclxuXHRcdHZhciBib3VuZGluZyA9IHRoaXMuJGNhbGVuZGFyWzBdLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xyXG5cdFx0cmV0dXJuIChcclxuXHRcdFx0Ym91bmRpbmcudG9wID49IDAgJiYgYm91bmRpbmcuYm90dG9tIDw9ICh3aW5kb3cuaW5uZXJIZWlnaHQgKyA1IHx8IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRIZWlnaHQgKyA1KVxyXG5cdFx0KTtcclxuXHR9O1xyXG5cclxuXHREYXRlVGltZVJhbmdlUGlja2VyLnByb3RvdHlwZS5jbGVhciA9IGZ1bmN0aW9uKHNlbmROb3RpZmljYXRpb24pIHtcclxuXHRcdHRoaXMucGlja2VyLnNldFN0YXJ0RGF0ZShtb21lbnQoKSk7XHJcblx0XHR0aGlzLnBpY2tlci5zZXRFbmREYXRlKG1vbWVudCgpKTtcclxuXHRcdHRoaXMuaXNFbXB0eUhvdXIgPSBmYWxzZTtcclxuXHRcdHRoaXMuJGNsZWFyLmFkZENsYXNzKCdkaXNhYmxlZCcpO1xyXG5cdFx0aWYgKHRoaXMuY29uZmlnLmhhc1RleHRUcmlnZ2VyKSB7XHJcblx0XHRcdHRoaXMuJGxhYmVsLmh0bWwoJy0tIC0tIC0tJyk7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHR0aGlzLiRpbnB1dC52YWwoJycpO1xyXG5cdFx0fVxyXG5cdFx0aWYgKHNlbmROb3RpZmljYXRpb24gfHwgc2VuZE5vdGlmaWNhdGlvbiA9PSB1bmRlZmluZWQpIHtcclxuXHRcdFx0dGhpcy5zZW5kTm90aWZpY2F0aW9uKGZhbHNlKTtcclxuXHRcdH1cclxuXHR9O1xyXG5cclxuXHREYXRlVGltZVJhbmdlUGlja2VyLnByb3RvdHlwZS5zaG93ID0gZnVuY3Rpb24oKSB7XHJcblx0XHR0aGlzLnBpY2tlci5zaG93KCk7XHJcblx0fTtcclxuXHJcblx0RGF0ZVRpbWVSYW5nZVBpY2tlci5wcm90b3R5cGUuaGlkZSA9IGZ1bmN0aW9uKCkge1xyXG5cdFx0dGhpcy5waWNrZXIuaGlkZSgpO1xyXG5cdH07XHJcblxyXG5cdERhdGVUaW1lUmFuZ2VQaWNrZXIucHJvdG90eXBlLmNhbmNlbCA9IGZ1bmN0aW9uKCkge1xyXG5cdFx0dGhpcy5waWNrZXIuY2xpY2tDYW5jZWwoKTtcclxuXHR9O1xyXG5cclxuXHREYXRlVGltZVJhbmdlUGlja2VyLnByb3RvdHlwZS5zZW5kTm90aWZpY2F0aW9uID0gZnVuY3Rpb24oc2VuZERhdGUpIHtcclxuXHRcdGlmICh0aGlzLiR3aWRnZXQuaGFzQ2xhc3MoJ2F0dGFjaGVkSW5wdXQnKSkge1xyXG5cdFx0XHR0aGlzLiRpbnB1dC50cmlnZ2VyKCdjaGFuZ2UnKTtcclxuXHRcdFx0cmV0dXJuIGZhbHNlO1xyXG5cdFx0fVxyXG5cclxuXHRcdGlmIChzZW5kRGF0ZSB8fCBzZW5kRGF0ZSA9PSB1bmRlZmluZWQpIHtcclxuXHRcdFx0aWYgKHRoaXMuaXNFbXB0eUhvdXIpIHtcclxuXHRcdFx0XHRPc05vdGlmeVdpZGdldChcclxuXHRcdFx0XHRcdHRoaXMuY29uZmlnLmRhdGVUaW1lUmFuZ2VQaWNrZXJGYWtlTm90aWZ5SWQsXHJcblx0XHRcdFx0XHR0aGlzLnBpY2tlci5zdGFydERhdGUuZm9ybWF0KGAke3RoaXMuY29uZmlnLnN5c3RlbURhdGVGb3JtYXR9IFswMDowMDowMF1gKSArICd8JyArIHRoaXMuaXNFbXB0eUhvdXJcclxuXHRcdFx0XHQpO1xyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdGlmICh0aGlzLmNvbmZpZy50aW1lUGlja2VyKSB7XHJcblx0XHRcdFx0XHRPc05vdGlmeVdpZGdldChcclxuXHRcdFx0XHRcdFx0dGhpcy5jb25maWcuZGF0ZVRpbWVSYW5nZVBpY2tlckZha2VOb3RpZnlJZCxcclxuXHRcdFx0XHRcdFx0dGhpcy5waWNrZXIuc3RhcnREYXRlLmZvcm1hdChgJHt0aGlzLmNvbmZpZy5zeXN0ZW1EYXRlRm9ybWF0fSBISDptbTpzc2ApICsgJ3wnICsgdGhpcy5pc0VtcHR5SG91clxyXG5cdFx0XHRcdFx0KTtcclxuXHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0T3NOb3RpZnlXaWRnZXQoXHJcblx0XHRcdFx0XHRcdHRoaXMuY29uZmlnLmRhdGVUaW1lUmFuZ2VQaWNrZXJGYWtlTm90aWZ5SWQsXHJcblx0XHRcdFx0XHRcdHRoaXMucGlja2VyLnN0YXJ0RGF0ZS5mb3JtYXQodGhpcy5jb25maWcuc3lzdGVtRGF0ZUZvcm1hdCkgKyAnfCcgKyB0aGlzLmlzRW1wdHlIb3VyXHJcblx0XHRcdFx0XHQpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0T3NOb3RpZnlXaWRnZXQodGhpcy5jb25maWcuZGF0ZVRpbWVSYW5nZVBpY2tlckZha2VOb3RpZnlJZCwgJ251bGx8dHJ1ZScpO1xyXG5cdFx0fVxyXG5cdH07XHJcblxyXG5cdERhdGVUaW1lUmFuZ2VQaWNrZXIucHJvdG90eXBlLnVwZGF0ZVBhcmVudElmcmFtZSA9IGZ1bmN0aW9uKCkge1xyXG5cdFx0aWYgKHR5cGVvZiBTYXBwaGlyZVdpZGdldHMuUmVzaXplUGFyZW50SWZyYW1lID09PSAnb2JqZWN0Jykge1xyXG5cdFx0XHRTYXBwaGlyZVdpZGdldHMuUmVzaXplUGFyZW50SWZyYW1lLnJlc2l6ZSgpO1xyXG5cdFx0fVxyXG5cdFx0aWYgKCQoJy5QYWdlLkxheW91dFBvcHVwJykubGVuZ3RoID09PSAxKSB7XHJcblx0XHRcdFNhcHBoaXJlV2lkZ2V0cy5MYXlvdXRQb3B1cC5yZWRyYXdEaWFsb2dXaW5kb3coKTtcclxuXHRcdH1cclxuXHR9O1xyXG5cclxuXHRTYXBwaGlyZVdpZGdldHMuRGF0ZVRpbWVSYW5nZVBpY2tlciA9IHtcclxuXHRcdGNyZWF0ZTogY3JlYXRlLFxyXG5cdFx0YWxsOiBmdW5jdGlvbigpIHtcclxuXHRcdFx0cmV0dXJuIGFsbERhdGVUaW1lUmFuZ2VQaWNrZXJzO1xyXG5cdFx0fSxcclxuXHR9O1xyXG59KShqUXVlcnksIHdpbmRvdywgZG9jdW1lbnQsIFNhcHBoaXJlV2lkZ2V0cyk7XHJcbiIsIi8qIENvbXBvbmVudCBEcmFnRHJvcEFyZWEgKi9cbihmdW5jdGlvbigkLCB3aW5kb3csIGRvY3VtZW50LCBTYXBwaGlyZVdpZGdldHMpIHtcblx0dmFyIGRyYWdEcm9wQXJlYVdpZGdldDtcblxuXHR2YXIgY3JlYXRlID0gZnVuY3Rpb24oY29uZmlnKSB7XG5cdFx0d2luZG93W2NvbmZpZy5kcmFnRHJvcEFyZWFJZF0gPSBuZXcgRHJhZ0Ryb3BBcmVhKGNvbmZpZyk7XG5cdFx0ZHJhZ0Ryb3BBcmVhV2lkZ2V0ID0gd2luZG93W2NvbmZpZy5kcmFnRHJvcEFyZWFJZF07XG5cblx0XHQkKHdpbmRvdykubG9hZChmdW5jdGlvbigpIHtcblx0XHRcdG9zQWpheEJhY2tlbmQuQmluZEFmdGVyQWpheFJlcXVlc3QoU2FwcGhpcmVXaWRnZXRzLkRyYWdEcm9wQXJlYS5yZWZyZXNoRHJhZ0Ryb3ApO1xuXHRcdH0pO1xuXHR9O1xuXG5cdHZhciByZWZyZXNoRHJhZ0Ryb3AgPSBmdW5jdGlvbigpIHtcblx0XHRkcmFnRHJvcEFyZWFXaWRnZXQuc2V0dXBEcmFnZ2FibGUoKTtcblx0XHRkcmFnRHJvcEFyZWFXaWRnZXQuc2V0dXBEcm9wcGFibGUoKTtcblx0fTtcblxuXHR2YXIgRHJhZ0Ryb3BBcmVhID0gZnVuY3Rpb24oY29uZmlnKSB7XG5cdFx0dmFyIF90aGlzID0gdGhpcztcblx0XHR0aGlzLmNvbmZpZyA9IGNvbmZpZztcblx0XHR0aGlzLiRhcmVhID0gJCgnIycgKyBjb25maWcuZHJhZ0Ryb3BBcmVhSWQpO1xuXHRcdHRoaXMuJGFyZWEuY3NzKCdkaXNwbGF5JywgJ2Jsb2NrJyk7XG5cdFx0dGhpcy5za2luID0gY29uZmlnLnNraW47XG5cdFx0dGhpcy5mYWtlTm90aWZ5V2lkZ2V0SWQgPSBjb25maWcuZmFrZU5vdGlmeVdpZGdldElkO1xuXHRcdHRoaXMuc2V0dXBEcm9wcGFibGUoKTtcblx0XHRpZiAoY29uZmlnLnNvcnRhYmxlKSB7XG5cdFx0XHR0aGlzLnNldHVwU29ydGFibGUoKTtcblx0XHR9XG5cdFx0dGhpcy5zZXR1cERyYWdnYWJsZSgpO1xuXHRcdHRoaXMuYXR0YWNoRXZlbnRzKCk7XG5cdFx0dGhpcy4kYXJlYS5maW5kKCcuRHJhZ0Ryb3AtZHJvcHBhYmxlJykuZWFjaChmdW5jdGlvbigpIHtcblx0XHRcdF90aGlzLmhhbmRsZURyb3BwYWJsZSgkKHRoaXMpKTtcblx0XHR9KTtcblx0fTtcblxuXHREcmFnRHJvcEFyZWEucHJvdG90eXBlLnNldHVwRHJhZ2dhYmxlID0gZnVuY3Rpb24oKSB7XG5cdFx0dmFyIF90aGlzID0gdGhpcztcblxuXHRcdHRoaXMuJGFyZWEuZmluZCgnLkRyYWdEcm9wLWRyYWdnYWJsZScpLmRyYWdnYWJsZSh7XG5cdFx0XHRkaXNhYmxlZDogdGhpcy5jb25maWcuZGlzYWJsZWQsXG5cdFx0XHRjb250YWlubWVudDogdGhpcy4kYXJlYSxcblx0XHRcdHNjb3BlOiB0aGlzLmNvbmZpZy5kcmFnRHJvcEFyZWFJZCxcblx0XHRcdGRlbGF5OiAwLFxuXHRcdFx0c2Nyb2xsOiB0cnVlLFxuXHRcdFx0cmV2ZXJ0OiAnaW52YWxpZCcsXG5cdFx0XHRyZXZlcnREdXJhdGlvbjogMCxcblx0XHRcdGNvbm5lY3RUb1NvcnRhYmxlOiAnLkRyYWdEcm9wLWRyb3BwYWJsZScsXG5cdFx0XHRzdG9wOiBmdW5jdGlvbihldmVudCwgdWkpIHtcblx0XHRcdFx0aWYgKHVpLmhlbHBlci5oYXNDbGFzcygndWktZHJhZ2dhYmxlLWRyYWdnaW5nJykpIHtcblx0XHRcdFx0XHRjb25zdCAkdGFyZ2V0ID0gX3RoaXMuJGFyZWEuZmluZCgnLnVpLWRyb3BwYWJsZS51aS1zb3J0YWJsZScpO1xuXG5cdFx0XHRcdFx0aWYgKF90aGlzLnNraW4gPT09ICdUZWFtcycpIHtcblx0XHRcdFx0XHRcdC8vJCh1aS5oZWxwZXIpLmhpZGUoKTtcblx0XHRcdFx0XHRcdE9zTm90aWZ5V2lkZ2V0KCR0YXJnZXQuZGF0YSgnZmFrZW5vdGlmeScpLCB1aS5oZWxwZXIuZGF0YSgnaXRlbXR5cGUnKSArICd8JyArIHVpLmhlbHBlci5kYXRhKCdpdGVtaWQnKSk7XG5cdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdE9zTm90aWZ5V2lkZ2V0KFxuXHRcdFx0XHRcdFx0XHQkdGFyZ2V0LmRhdGEoJ2Zha2Vub3RpZnknKSxcblx0XHRcdFx0XHRcdFx0X3RoaXMuJGFyZWEuZmluZCgnLkRyYWdEcm9wLWRyYWdnYWJsZS1wbGFjZWhvbGRlcicpLmluZGV4KCkgKyAnfCcgKyB1aS5oZWxwZXIuZGF0YSgnaXRlbWlkJylcblx0XHRcdFx0XHRcdCk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9LFxuXHRcdH0pO1xuXHR9O1xuXG5cdERyYWdEcm9wQXJlYS5wcm90b3R5cGUuc2V0dXBEcm9wcGFibGUgPSBmdW5jdGlvbigpIHtcblx0XHR2YXIgX3RoaXMgPSB0aGlzO1xuXHRcdHRoaXMuJGFyZWEuZmluZCgnLkRyYWdEcm9wLWRyb3BwYWJsZScpLmRyb3BwYWJsZSh7XG5cdFx0XHRob3ZlckNsYXNzOiAnaG92ZXJlZCcsXG5cdFx0XHRhZGRDbGFzc2VzOiB0cnVlLFxuXHRcdFx0ZGlzYWJsZWQ6IHRoaXMuY29uZmlnLmRpc2FibGVkLFxuXHRcdFx0c2NvcGU6IHRoaXMuY29uZmlnLmRyYWdEcm9wQXJlYUlkLFxuXHRcdFx0dG9sZXJhbmNlOiAncG9pbnRlcicsXG5cdFx0XHRkcm9wOiBmdW5jdGlvbihldmVudCwgdWkpIHtcblx0XHRcdFx0aWYgKF90aGlzLnNraW4gPT09ICdUZWFtcycpIHtcblx0XHRcdFx0XHQkKHVpLmRyYWdnYWJsZSkuaGlkZSgpO1xuXHRcdFx0XHRcdE9zTm90aWZ5V2lkZ2V0KFxuXHRcdFx0XHRcdFx0JChldmVudC50YXJnZXQpLmRhdGEoJ2Zha2Vub3RpZnknKSxcblx0XHRcdFx0XHRcdHVpLmRyYWdnYWJsZS5kYXRhKCdpdGVtdHlwZScpICsgJ3wnICsgdWkuZHJhZ2dhYmxlLmRhdGEoJ2l0ZW1pZCcpXG5cdFx0XHRcdFx0KTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRPc05vdGlmeVdpZGdldChcblx0XHRcdFx0XHRcdCQoZXZlbnQudGFyZ2V0KS5kYXRhKCdmYWtlbm90aWZ5JyksXG5cdFx0XHRcdFx0XHRfdGhpcy4kYXJlYS5maW5kKCcuRHJhZ0Ryb3AtZHJhZ2dhYmxlLXBsYWNlaG9sZGVyJykuaW5kZXgoKSArICd8JyArIHVpLmRyYWdnYWJsZS5kYXRhKCdpdGVtaWQnKVxuXHRcdFx0XHRcdCk7XG5cdFx0XHRcdH1cblx0XHRcdH0sXG5cdFx0fSk7XG5cdH07XG5cblx0RHJhZ0Ryb3BBcmVhLnByb3RvdHlwZS5zZXR1cFNvcnRhYmxlID0gZnVuY3Rpb24oKSB7XG5cdFx0dGhpcy4kYXJlYS5maW5kKCcuRHJhZ0Ryb3AtZHJvcHBhYmxlJykuc29ydGFibGUoe1xuXHRcdFx0ZGlzYWJsZWQ6IHRoaXMuY29uZmlnLmRpc2FibGVkLFxuXHRcdFx0Zm9yY2VQbGFjZWhvbGRlclNpemU6IHRydWUsXG5cdFx0XHRjb250YWlubWVudDogdGhpcy4kYXJlYSxcblx0XHRcdHRvbGVyYW5jZTogJ3BvaW50ZXInLFxuXHRcdFx0cmV2ZXJ0OiAyMDAsXG5cdFx0XHRpdGVtczogJy5EcmFnRHJvcC1kcm9wcGFibGUtaXRlbXMgLkRyYWdEcm9wLWRyYWdnYWJsZScsXG5cdFx0XHRwbGFjZWhvbGRlcjogJ0RyYWdEcm9wLWRyYWdnYWJsZS1wbGFjZWhvbGRlcicsXG5cdFx0fSk7XG5cdH07XG5cblx0RHJhZ0Ryb3BBcmVhLnByb3RvdHlwZS5hdHRhY2hFdmVudHMgPSBmdW5jdGlvbigpIHtcblx0XHR2YXIgX3RoaXMgPSB0aGlzO1xuXHRcdHRoaXMuJGFyZWEub24oJ2NsaWNrJywgJy5EcmFnRHJvcC1kcmFnZ2FibGUnLCBmdW5jdGlvbihldnQpIHtcblx0XHRcdGV2dC5zdG9wUHJvcGFnYXRpb24oKTtcblx0XHRcdHZhciAkZHJhZ2dhYmxlID0gJChldnQuY3VycmVudFRhcmdldCk7XG5cdFx0XHQkZHJhZ2dhYmxlLmZpbmQoJy5EcmFnRHJvcC1kcmFnZ2FibGUtc2VsZWN0LWFjdGlvbiBhJykudHJpZ2dlcignY2xpY2snKTtcblx0XHRcdHZhciAkZHJvcHBhYmxlID0gJGRyYWdnYWJsZS5jbG9zZXN0KCcuRHJhZ0Ryb3AtZHJvcHBhYmxlJyk7XG5cdFx0XHRpZiAoJGRyb3BwYWJsZS5oYXNDbGFzcygnYWxsb3dNdWx0aXBsZScpKSB7XG5cdFx0XHRcdHZhciAkY2hlY2tib3ggPSAkZHJhZ2dhYmxlLmZpbmQoJ2lucHV0W3R5cGU9XCJjaGVja2JveFwiXScpO1xuXHRcdFx0XHRpZiAoJGNoZWNrYm94LnByb3AoJ2NoZWNrZWQnKSkge1xuXHRcdFx0XHRcdCRjaGVja2JveC5wcm9wKCdjaGVja2VkJywgZmFsc2UpO1xuXHRcdFx0XHRcdCRkcmFnZ2FibGUucmVtb3ZlQ2xhc3MoJ3NlbGVjdGVkJyk7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0JGNoZWNrYm94LnByb3AoJ2NoZWNrZWQnLCB0cnVlKTtcblx0XHRcdFx0XHQkZHJhZ2dhYmxlLmFkZENsYXNzKCdzZWxlY3RlZCcpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdF90aGlzLmhhbmRsZURyb3BwYWJsZSgkZHJvcHBhYmxlKTtcblx0XHRcdH1cblx0XHR9KTtcblx0XHR0aGlzLiRhcmVhLm9uKCdjbGljaycsICcuRHJhZ0Ryb3AtZHJhZ2dhYmxlLXNlbGVjdC1hY3Rpb24gYScsIGZ1bmN0aW9uKGV2dCkge1xuXHRcdFx0ZXZ0LnN0b3BQcm9wYWdhdGlvbigpO1xuXHRcdH0pO1xuXHR9O1xuXG5cdERyYWdEcm9wQXJlYS5wcm90b3R5cGUuaGFuZGxlRHJvcHBhYmxlID0gZnVuY3Rpb24oJGRyb3BwYWJsZSkge1xuXHRcdGlmICgkZHJvcHBhYmxlLmhhc0NsYXNzKCdhbGxvd011bHRpcGxlJykpIHtcblx0XHRcdHZhciAkYWN0aW9ucyA9ICRkcm9wcGFibGUuZmluZCgnLkRyYWdEcm9wLWRyb3BwYWJsZS1pbnRybycpO1xuXHRcdFx0dmFyIGNoa1NlbGVjdGVkID0gJGRyb3BwYWJsZS5maW5kKCdpbnB1dFt0eXBlPVwiY2hlY2tib3hcIl06Y2hlY2tlZCcpLmxlbmd0aDtcblx0XHRcdGlmIChjaGtTZWxlY3RlZCA+IDApIHtcblx0XHRcdFx0JGFjdGlvbnMuZmluZCgnYSwgYnV0dG9uJykuYXR0cignZGlzYWJsZWQnLCBmYWxzZSk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHQkYWN0aW9ucy5maW5kKCdhLCBidXR0b24nKS5hdHRyKCdkaXNhYmxlZCcsIHRydWUpO1xuXHRcdFx0fVxuXHRcdH0gZWxzZSB7XG5cdFx0XHQkZHJvcHBhYmxlLmZpbmQoJ2lucHV0W3R5cGU9XCJjaGVja2JveFwiXScpLnByb3AoJ2Rpc2FibGVkJywgdHJ1ZSk7XG5cdFx0fVxuXHR9O1xuXG5cdFNhcHBoaXJlV2lkZ2V0cy5EcmFnRHJvcEFyZWEgPSB7XG5cdFx0Y3JlYXRlOiBjcmVhdGUsXG5cdFx0cmVmcmVzaERyYWdEcm9wOiByZWZyZXNoRHJhZ0Ryb3AsXG5cdH07XG59KShqUXVlcnksIHdpbmRvdywgZG9jdW1lbnQsIFNhcHBoaXJlV2lkZ2V0cyk7XG4iLCIvKiBDb21wb25lbnQgRHJvcGRvd25DYXRlZ29yaWVzICovXG4oZnVuY3Rpb24gKCQsIHdpbmRvdywgU2FwcGhpcmVXaWRnZXRzKSB7XG5cdGZ1bmN0aW9uIG9wdEdyb3VwU2V0VmFsdWUoc2VsZWN0SWQsIGlucHV0Qm94SWQsIGJ1dHRvbklkKSB7XG5cdFx0dmFyIHYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChzZWxlY3RJZCkudmFsdWU7XG5cdFx0JCgnIycgKyBpbnB1dEJveElkKS52YWwodik7XG5cdFx0JCgnIycgKyBzZWxlY3RJZCArICcgb3B0aW9uW3NlbGVjdGVkXScpLnJlbW92ZUF0dHIoJ3NlbGVjdGVkJyk7XG5cblx0XHRpZiAodiA+IC0xKSB7XG5cdFx0XHQkKCcjJyArIHNlbGVjdElkICsgJyBvcHRpb25bdmFsdWU9XCInICsgdiArICdcIl0nKS5hdHRyKCdzZWxlY3RlZCcsICdzZWxlY3RlZCcpO1xuXHRcdH1cblxuXHRcdCQoJyMnICsgYnV0dG9uSWQpLmNsaWNrKCk7XG5cdFx0JCgnI3MyaWRfJyArIHNlbGVjdElkKS5yZW1vdmVDbGFzcygnc2VsZWN0Mi1jb250YWluZXItYWN0aXZlJyk7XG5cdH1cblxuXHRmdW5jdGlvbiBPc0N1c3RvbVZhbGlkYXRvck9wdEdyb3VwKGEsIGIpIHtcblx0XHR2YXIgX2UgPSAkKCcjJyArIGEuY29udHJvbHRvdmFsaWRhdGUpO1xuXHRcdHZhciBpc1ZhbGlkID0gX2UuZmluZCgnb3B0aW9uW3NlbGVjdGVkXScpLmxlbmd0aDtcblx0XHR2YXIgaGFzU2libGluZ19NYW5kYXRvcnlTZWxlY3QyID0gX2UucHJldignZGl2LnNlbGVjdDItY29udGFpbmVyLk1hbmRhdG9yeScpLmxlbmd0aDtcblxuXHRcdGlmIChoYXNTaWJsaW5nX01hbmRhdG9yeVNlbGVjdDIpIHtcblx0XHRcdGlmIChpc1ZhbGlkKSB7XG5cdFx0XHRcdF9lLnByZXYoJ2Rpdi5zZWxlY3QyLWNvbnRhaW5lci5NYW5kYXRvcnknKS5yZW1vdmVDbGFzcygnTm90X1ZhbGlkJyk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRfZS5wcmV2KCdkaXYuc2VsZWN0Mi1jb250YWluZXIuTWFuZGF0b3J5JykuYWRkQ2xhc3MoJ05vdF9WYWxpZCcpO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdHJldHVybiBpc1ZhbGlkO1xuXHR9XG5cblx0ZnVuY3Rpb24gYWRkT3B0R3JvdXBWYWxpZGF0b3Iob3B0R3JvdXBFbGVtZW50SWQpIHtcblx0XHRPc1BhZ2VfVmFsaWRhdG9ycy5wdXNoKHtcblx0XHRcdGNvbnRyb2x0b3ZhbGlkYXRlOiBvcHRHcm91cEVsZW1lbnRJZCxcblx0XHRcdGVuYWJsZWQ6IHRydWUsXG5cdFx0XHRlcnJvcm1lc3NhZ2U6ICdSZXF1aXJlZCBmaWVsZCEnLFxuXHRcdFx0ZXZhbHVhdGlvbmZ1bmN0aW9uOiAnU2FwcGhpcmVXaWRnZXRzLkRyb3Bkb3duQ2F0ZWdvcmllcy5Pc0N1c3RvbVZhbGlkYXRvck9wdEdyb3VwJyxcblx0XHRcdGluaXRpYWx2YWx1ZTogJycsXG5cdFx0XHRpc3ZhbGlkOiB0cnVlLFxuXHRcdH0pO1xuXHR9XG5cblx0U2FwcGhpcmVXaWRnZXRzLkRyb3Bkb3duQ2F0ZWdvcmllcyA9IHtcblx0XHRvcHRHcm91cFNldFZhbHVlLFxuXHRcdE9zQ3VzdG9tVmFsaWRhdG9yT3B0R3JvdXAsXG5cdFx0YWRkT3B0R3JvdXBWYWxpZGF0b3IsXG5cdH07XG59KShqUXVlcnksIHdpbmRvdywgU2FwcGhpcmVXaWRnZXRzKTsiLCIvKiBDb21wb25lbnQgRHJvcHpvbmUgKi9cbihmdW5jdGlvbigkLCB3aW5kb3csIGRvY3VtZW50LCBTYXBwaGlyZVdpZGdldHMpIHtcblx0Y29uc3QgY3JlYXRlID0gZnVuY3Rpb24oY29uZmlnKSB7XG5cdFx0d2luZG93LkRyb3B6b25lLmF1dG9EaXNjb3ZlciA9IGZhbHNlO1xuXG5cdFx0JChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oKSB7XG5cdFx0XHRiaW5kRXZlbnRzKGNvbmZpZyk7XG5cblx0XHRcdGNvbnN0IG15RHJvcHpvbmUgPSBuZXcgd2luZG93LkRyb3B6b25lKGNvbmZpZy5oaWRkZW5JbnB1dENvbnRhaW5lciwge1xuXHRcdFx0XHQuLi5jb25maWcsXG5cdFx0XHRcdGluaXQ6IGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRcdGxldCBwcmV2RmlsZTtcblxuXHRcdFx0XHRcdGNvbnN0IGZpbGVzTGlzdCA9IGNvbmZpZy5maWxlc0xpc3QgPyBjb25maWcuZmlsZXNMaXN0LnNwbGl0KCcsJykgOiBbXTtcblxuXHRcdFx0XHRcdGZvciAoY29uc3QgaXRlbSBvZiBmaWxlc0xpc3QpIHtcblx0XHRcdFx0XHRcdGNvbnN0IG1vY2tGaWxlID0geyBuYW1lOiBpdGVtLCBzaXplOiAxMjM0NTY3OCB9O1xuXG5cdFx0XHRcdFx0XHR0aGlzLmVtaXQoJ2FkZGVkZmlsZScsIG1vY2tGaWxlKTtcblx0XHRcdFx0XHRcdHRoaXMuZW1pdCgnY29tcGxldGUnLCBtb2NrRmlsZSk7XG5cdFx0XHRcdFx0XHR0aGlzLmZpbGVzLnB1c2gobW9ja0ZpbGUpO1xuXG5cdFx0XHRcdFx0XHQkKGAke2NvbmZpZy5oaWRkZW5JbnB1dENvbnRhaW5lcn0gLmR6LWZpbGVuYW1lYCkuYXR0cigndGl0bGUnLCBpdGVtKTtcblxuXHRcdFx0XHRcdFx0cHJldkZpbGUgPSBtb2NrRmlsZTtcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRpZiAoK2NvbmZpZy5tYXhGaWxlcyA9PT0gMSAmJiBjb25maWcuaXNSZXBsYWNlUHJldmlvdXMpIHtcblx0XHRcdFx0XHRcdHRoaXMub24oJ2FkZGVkZmlsZScsIGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRcdFx0XHRpZiAocHJldkZpbGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdFx0XHRcdFx0XHRcdHRoaXMucmVtb3ZlRmlsZShwcmV2RmlsZSk7XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdH0pO1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdGNvbnN0ICRub3RpZnlJbnB1dCA9ICQoYCMke2NvbmZpZy5ub3RpZnlJbnB1dElkfWApO1xuXG5cdFx0XHRcdFx0dGhpcy5vbignc3VjY2VzcycsIGZ1bmN0aW9uKGZpbGUsIHJlc3BvbnNlVGV4dCkge1xuXHRcdFx0XHRcdFx0cHJldkZpbGUgPSBmaWxlO1xuXG5cdFx0XHRcdFx0XHQkKGAjJHtjb25maWcubm90aWZ5SW5wdXRJZH0gLmR6LWZpbGVuYW1lYCkuYXR0cigndGl0bGUnLCBmaWxlLm5hbWUpO1xuXHRcdFx0XHRcdFx0JG5vdGlmeUlucHV0LnZhbChyZXNwb25zZVRleHQpO1xuXHRcdFx0XHRcdFx0JG5vdGlmeUlucHV0LmNoYW5nZSgpO1xuXHRcdFx0XHRcdH0pO1xuXG5cdFx0XHRcdFx0dGhpcy5vbignZXJyb3InLCBmdW5jdGlvbihmaWxlLCByZXNwb25zZVRleHQpIHtcblx0XHRcdFx0XHRcdHByZXZGaWxlID0gZmlsZTtcblxuXHRcdFx0XHRcdFx0JG5vdGlmeUlucHV0LnZhbChyZXNwb25zZVRleHQpO1xuXHRcdFx0XHRcdFx0JG5vdGlmeUlucHV0LmNoYW5nZSgpO1xuXHRcdFx0XHRcdH0pO1xuXHRcdFx0XHR9LFxuXHRcdFx0fSk7XG5cdFx0fSk7XG5cdH07XG5cblx0Y29uc3QgYmluZEV2ZW50cyA9IGZ1bmN0aW9uKGNvbmZpZykge1xuXHRcdCQoYCMke2NvbmZpZy53aWRnZXRJZH0gLlVwbG9hZE1lc3NhZ2VDbGFzc2ApLm9uKCdjbGljaycsICgpID0+IHtcblx0XHRcdCQoYCMke2NvbmZpZy53aWRnZXRJZH0gLmR6LWNsaWNrYWJsZWApLmNsaWNrKCk7XG5cdFx0fSk7XG5cdH07XG5cblx0U2FwcGhpcmVXaWRnZXRzLkRyb3B6b25lID0geyBjcmVhdGUgfTtcbn0pKGpRdWVyeSwgd2luZG93LCBkb2N1bWVudCwgU2FwcGhpcmVXaWRnZXRzKTtcbiIsIi8qIENvbXBvbmVudCBFeHBhbmRhYmxlTGluayAqL1xyXG4oZnVuY3Rpb24oJCwgd2luZG93LCBTYXBwaGlyZVdpZGdldHMpIHtcclxuXHRjb25zdCBjcmVhdGUgPSB3aWRnZXRJRCA9PiB7XHJcblx0XHRjb25zdCAkZWxlbWVudFdyYXBwZXIgPSAkKGAjJHt3aWRnZXRJRH1gKTtcclxuXHJcblx0XHRpZiAoJGVsZW1lbnRXcmFwcGVyLnBhcmVudCgnLkV4cGFuZGFibGVMaXN0JykuaGFzQ2xhc3MoJ0hpZGVXaGVuRW1wdHknKSkge1xyXG5cdFx0XHRjb25zdCB0ZXh0ID0gJGVsZW1lbnRXcmFwcGVyLmZpbmQoJy5FeHBhbmRhYmxlTGlua19fQ29udGVudCcpLnRleHQoKTtcclxuXHJcblx0XHRcdGlmICh0ZXh0Lmxlbmd0aCA9PT0gMCkgJGVsZW1lbnRXcmFwcGVyLnBhcmVudCgnLkV4cGFuZGFibGVMaXN0JykuaGlkZSgpO1xyXG5cdFx0fVxyXG5cclxuXHRcdGJpbmRFdmVudHMod2lkZ2V0SUQpO1xyXG5cdH07XHJcblxyXG5cdGNvbnN0IGJpbmRFdmVudHMgPSB3aWRnZXRJRCA9PiB7XHJcblx0XHQkKGAjJHt3aWRnZXRJRH0gLkV4cGFuZGFibGVMaW5rX19IZWFkZXJgKS5jbGljaygoKSA9PiBvcGVuQ2xvc2UoYCMke3dpZGdldElEfWApKTtcclxuXHR9O1xyXG5cclxuXHRjb25zdCBvcGVuQ2xvc2UgPSBlbGVtZW50SUQgPT4ge1xyXG5cdFx0Ly8gV2hlbiB0aGUgZXhwYW5kYWJsZXMgYXJlIGluc2lkZSBhIGNvbnRhaW5lciB3aXRoIGNsYXNzIEV4cGFuZGFibGVMaW5rR3JvdXAsIHdpbGwgYWN0IGxpa2UgYSBleHBhbmRhYmxlIGdyb3VwXHJcblx0XHRjb25zdCAkbGlua0dyb3VwID0gJChlbGVtZW50SUQpLmNsb3Nlc3QoJy5FeHBhbmRhYmxlTGlua0dyb3VwJyk7XHJcblxyXG5cdFx0aWYgKCRsaW5rR3JvdXAubGVuZ3RoKSB7XHJcblx0XHRcdGNvbnN0ICRleHBhbmRhYmxlcyA9ICRsaW5rR3JvdXAuZmluZCgnLkV4cGFuZGFibGVMaW5rLS1leHBhbmRlZCcpLm5vdChlbGVtZW50SUQpO1xyXG5cclxuXHRcdFx0JGV4cGFuZGFibGVzLnJlbW92ZUNsYXNzKCdFeHBhbmRhYmxlTGluay0tZXhwYW5kZWQnKTtcclxuXHRcdH1cclxuXHJcblx0XHQkKGVsZW1lbnRJRCkudG9nZ2xlQ2xhc3MoJ0V4cGFuZGFibGVMaW5rLS1leHBhbmRlZCcpO1xyXG5cclxuXHRcdGlmIChTYXBwaGlyZVdpZGdldHMuUmVzaXplUGFyZW50SWZyYW1lKSB7XHJcblx0XHRcdFNhcHBoaXJlV2lkZ2V0cy5SZXNpemVQYXJlbnRJZnJhbWUucmVzaXplKCk7XHJcblx0XHR9XHJcblx0fTtcclxuXHJcblx0U2FwcGhpcmVXaWRnZXRzLkV4cGFuZGFibGVMaW5rID0geyBjcmVhdGUgfTtcclxufSkoalF1ZXJ5LCB3aW5kb3csIFNhcHBoaXJlV2lkZ2V0cyk7XHJcbiIsIi8qIENvbXBvbmVudCBGdWxsU2NyZWVuVGFic1dyYXBwZXIgKi9cblNhcHBoaXJlV2lkZ2V0cy5GdWxsU2NyZWVuVGFic1dyYXBwZXIgPSAoKSA9PiB7XG5cdCQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKCkge1xuXHRcdCQoJy5UYWJXcmFwcGVyJykuY2xpY2soZnVuY3Rpb24oKSB7XG5cdFx0XHRjb25zdCAkd3JhcHBlciA9ICQodGhpcykuY2xvc2VzdCgnLkZ1bGxTY3JlZW5UYWJzV3JhcHBlcl9fVGFicycpO1xuXHRcdFx0JHdyYXBwZXIuZmluZCgnKicpLnJlbW92ZUNsYXNzKCdBY3RpdmUnKTtcblxuXHRcdFx0JCh0aGlzKS5hZGRDbGFzcygnQWN0aXZlJyk7XG5cdFx0fSk7XG5cdH0pO1xufTtcbiIsIi8qIENvbXBvbmVudCBHZW5lcmljR2FsbGVyeSAqL1xuKGZ1bmN0aW9uKCQsIHdpbmRvdywgZG9jdW1lbnQsIFNhcHBoaXJlV2lkZ2V0cykge1xuXHR2YXIgY3JlYXRlID0gZnVuY3Rpb24oY29uZmlnKSB7XG5cdFx0d2luZG93W2NvbmZpZy53aWRnZXRJZF0gPSBuZXcgR2VuZXJpY0dhbGxlcnkoY29uZmlnKTtcblx0fTtcblxuXHR2YXIgR2VuZXJpY0dhbGxlcnkgPSBmdW5jdGlvbihjb25maWcpIHtcblx0XHR0aGlzLmNvbmZpZyA9IGNvbmZpZztcblx0XHR0aGlzLiR3aWRnZXQgPSAkKCcjJyArIHRoaXMuY29uZmlnLndpZGdldElkKS5jc3MoJ2Rpc3BsYXknLCAnYmxvY2snKTtcblx0XHR0aGlzLmVxdWFsSGVpZ2h0ID0gdGhpcy5jb25maWcuZXF1YWxIZWlnaHQ7XG5cdFx0aWYgKFxuXHRcdFx0dGhpcy4kd2lkZ2V0LmZpbmQoJz4gLkdlbmVyaWNHYWxsZXJ5LWNvbnRlbnQgPiBzcGFuJykubGVuZ3RoID09PSAxICYmXG5cdFx0XHR0aGlzLiR3aWRnZXQuZmluZCgnLkdlbmVyaWNHYWxsZXJ5LWNvbnRlbnQgPiBzcGFuJykuaGFzQ2xhc3MoJ0xpc3RSZWNvcmRzJylcblx0XHQpIHtcblx0XHRcdHRoaXMuJGdhbGxlcnkgPSB0aGlzLiR3aWRnZXQuZmluZCgnPiAuR2VuZXJpY0dhbGxlcnktY29udGVudCA+IHNwYW4uTGlzdFJlY29yZHMnKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGhpcy4kZ2FsbGVyeSA9IHRoaXMuJHdpZGdldC5maW5kKCc+IC5HZW5lcmljR2FsbGVyeS1jb250ZW50Jyk7XG5cdFx0fVxuXG5cdFx0bGV0IHRlbXBsYXRlQ29sdW1uID0gJ3JlcGVhdCgnICsgdGhpcy5jb25maWcuY29sdW1uU2l6aW5nICsgJywgbWlubWF4KCcgKyB0aGlzLmNvbmZpZy5jb2x1bW5NaW5XaWR0aCArICcsIDFmcikpJztcblxuXHRcdGlmICh0aGlzLmNvbmZpZy5tYXhJdGVtc1JvdyA+IDApIHtcblx0XHRcdHRlbXBsYXRlQ29sdW1uID0gYHJlcGVhdCgke3RoaXMuY29uZmlnLmNvbHVtblNpemluZ30sIG1pbm1heChtYXgoJHt0aGlzLmNvbmZpZy5jb2x1bW5NaW5XaWR0aH0sICgxMDAlIC0gKCR7dGhpcy5jb25maWcubWF4SXRlbXNSb3d9IC0gMSkgKiAke3RoaXMuY29uZmlnLmdhcENvbHVtbn1weCkgLyAke3RoaXMuY29uZmlnLm1heEl0ZW1zUm93fSksIDFmcikpYDtcblx0XHR9XG5cblx0XHR0aGlzLiRnYWxsZXJ5LmNzcyh7XG5cdFx0XHRkaXNwbGF5OiAnZ3JpZCcsXG5cdFx0XHRncmlkVGVtcGxhdGVDb2x1bW5zOiB0ZW1wbGF0ZUNvbHVtbixcblx0XHR9KTtcblxuXHRcdHRoaXMuJGdhbGxlcnlJdGVtcyA9IHRoaXMuJGdhbGxlcnkuY2hpbGRyZW4oKTtcblx0XHR0aGlzLiRnYWxsZXJ5SXRlbXMuZWFjaChmdW5jdGlvbigpIHtcblx0XHRcdGlmICghJCh0aGlzKS5oYXNDbGFzcygnR2VuZXJpY0dhbGxlcnktaXRlbScpKSB7XG5cdFx0XHRcdCQodGhpcykud3JhcCgnPGRpdiBjbGFzcz1cIkdlbmVyaWNHYWxsZXJ5LWl0ZW1cIj48L2Rpdj4nKTtcblx0XHRcdH1cblx0XHR9KTtcblx0fTtcblxuXHRTYXBwaGlyZVdpZGdldHMuR2VuZXJpY0dhbGxlcnkgPSB7XG5cdFx0Y3JlYXRlOiBjcmVhdGUsXG5cdH07XG59KShqUXVlcnksIHdpbmRvdywgZG9jdW1lbnQsIFNhcHBoaXJlV2lkZ2V0cyk7XG4iLCIvKiBDb21wb25lbnQgR2VuZXJpY0dyaWQgKi9cbihmdW5jdGlvbiAoJCwgd2luZG93LCBkb2N1bWVudCwgU2FwcGhpcmVXaWRnZXRzKSB7XG5cdHZhciBhbGxHZW5lcmljR3JpZHMgPSBbXTtcblxuXHR2YXIgY3JlYXRlID0gZnVuY3Rpb24gKGNvbmZpZykge1xuXHRcdHdpbmRvd1tjb25maWcud2lkZ2V0SWRdID0gbmV3IEdlbmVyaWNHcmlkKGNvbmZpZyk7XG5cdFx0YWxsR2VuZXJpY0dyaWRzLnB1c2god2luZG93W2NvbmZpZy53aWRnZXRJZF0pO1xuXHR9O1xuXG5cdHZhciBHZW5lcmljR3JpZCA9IGZ1bmN0aW9uIChjb25maWcpIHtcblx0XHR2YXIgX3RoaXMgPSB0aGlzO1xuXHRcdHRoaXMuY29uZmlnID0gY29uZmlnO1xuXHRcdGNvbnNvbGUubG9nKHRoaXMuY29uZmlnKTtcblx0fTtcblxuXHRTYXBwaGlyZVdpZGdldHMuR2VuZXJpY0dyaWQgPSB7XG5cdFx0Y3JlYXRlOiBjcmVhdGUsXG5cdH07XG5cbn0pKGpRdWVyeSwgd2luZG93LCBkb2N1bWVudCwgU2FwcGhpcmVXaWRnZXRzKTsiLCIvKiBDb21wb25lbnQgSG9yaXpvbnRhbFRvb2xiYXIgKi9cclxuKGZ1bmN0aW9uKCQsIHdpbmRvdywgU2FwcGhpcmVXaWRnZXRzKSB7XHJcblx0Y29uc3QgY3JlYXRlID0gY29uZmlnID0+IHtcclxuXHRcdGNvbnN0ICR3aWRnZXQgPSAkKCcjJyArIGNvbmZpZy53aWRnZXRJZCk7XHJcblxyXG5cdFx0JChkb2N1bWVudCkucmVhZHkoKCkgPT4gaW5pdCgkd2lkZ2V0LCBjb25maWcpKTtcclxuXHJcblx0XHRpZiAoY29uZmlnLmlzQXJyb3dOYXZpZ2F0aW9uKSB7XHJcblx0XHRcdCQod2luZG93KS5sb2FkKCgpID0+IHtcclxuXHRcdFx0XHRjb25zdCAkaXRlbVdyYXBwZXIgPSAkd2lkZ2V0LmZpbmQoJy5NZW51SXRlbVdyYXBwZXIuQWN0aXZlJyk7XHJcblx0XHRcdFx0aWYgKCRpdGVtV3JhcHBlci5sZW5ndGgpIHtcclxuXHRcdFx0XHRcdCRpdGVtV3JhcHBlclswXS5zY3JvbGxJbnRvVmlldyh7XHJcblx0XHRcdFx0XHRcdGJlaGF2aW9yOiAnYXV0bycsXHJcblx0XHRcdFx0XHRcdGJsb2NrOiAnZW5kJyxcclxuXHRcdFx0XHRcdH0pO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSk7XHJcblx0XHR9XHJcblx0fTtcclxuXHJcblx0Y29uc3QgaW5pdCA9ICgkd2lkZ2V0LCBjb25maWcpID0+IHtcclxuXHRcdGlmIChjb25maWcuaXNBcnJvd05hdmlnYXRpb24pIHtcclxuXHRcdFx0aGFuZGxlQXJyb3dzKCR3aWRnZXQpO1xyXG5cclxuXHRcdFx0Y29uc3QgJHRvb2xiYXJJdGVtcyA9ICR3aWRnZXQuZmluZCgnLlRvb2xiYXJfX0l0ZW1zJyk7XHJcblx0XHRcdGNvbnN0ICRsaXN0SXRlbXMgPSAkd2lkZ2V0LmZpbmQoJy5Ub29sYmFyX19JdGVtcyAuTGlzdFJlY29yZHMnKTtcclxuXHRcdFx0Y29uc3QgJGJ0blJpZ2h0ID0gJHdpZGdldC5maW5kKCcuVG9vbGJhcl9fcmlnaHRCdG4nKTtcclxuXHRcdFx0Y29uc3QgJGJ0bkxlZnQgPSAkd2lkZ2V0LmZpbmQoJy5Ub29sYmFyX19sZWZ0QnRuJyk7XHJcblxyXG5cdFx0XHQkdG9vbGJhckl0ZW1zLnNjcm9sbCgoKSA9PiBoYW5kbGVBcnJvd3MoJHdpZGdldCkpO1xyXG5cclxuXHRcdFx0JGJ0blJpZ2h0LmNsaWNrKGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdHZhciBjdXJyZW50U2Nyb2xsID0gJHRvb2xiYXJJdGVtcy5zY3JvbGxMZWZ0KCk7XHJcblx0XHRcdFx0dmFyIG1heFNjcm9sbGwgPSAkbGlzdEl0ZW1zLndpZHRoKCkgLSAkdG9vbGJhckl0ZW1zLndpZHRoKCk7XHJcblx0XHRcdFx0dmFyIHNpZGVXaWR0aCA9IG1heFNjcm9sbGwgLSA1MDtcclxuXHRcdFx0XHQkdG9vbGJhckl0ZW1zLnNjcm9sbExlZnQoY3VycmVudFNjcm9sbCArIDUwKTtcclxuXHJcblx0XHRcdFx0aWYgKGN1cnJlbnRTY3JvbGwgPT0gc2lkZVdpZHRoKSAkYnRuUmlnaHQuYWRkQ2xhc3MoJ0Rpc2FibGVkJyk7XHJcblx0XHRcdFx0aWYgKGN1cnJlbnRTY3JvbGwgIT0gNTApICRidG5MZWZ0LnJlbW92ZUNsYXNzKCdEaXNhYmxlZCcpO1xyXG5cdFx0XHR9KTtcclxuXHJcblx0XHRcdCRidG5MZWZ0LmNsaWNrKGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdHZhciBjdXJyZW50U2Nyb2xsID0gJHRvb2xiYXJJdGVtcy5zY3JvbGxMZWZ0KCk7XHJcblx0XHRcdFx0dmFyIG1heFNjcm9sbGwgPSAkbGlzdEl0ZW1zLndpZHRoKCkgLSAkdG9vbGJhckl0ZW1zLndpZHRoKCk7XHJcblx0XHRcdFx0dmFyIHNpZGVXaWR0aCA9IG1heFNjcm9sbGwgLSA1MDtcclxuXHRcdFx0XHQkdG9vbGJhckl0ZW1zLnNjcm9sbExlZnQoY3VycmVudFNjcm9sbCAtIDUwKTtcclxuXHJcblx0XHRcdFx0aWYgKGN1cnJlbnRTY3JvbGwgIT0gc2lkZVdpZHRoKSAkYnRuUmlnaHQucmVtb3ZlQ2xhc3MoJ0Rpc2FibGVkJyk7XHJcblx0XHRcdFx0aWYgKGN1cnJlbnRTY3JvbGwgPT0gNTApICRidG5MZWZ0LmFkZENsYXNzKCdEaXNhYmxlZCcpO1xyXG5cdFx0XHR9KTtcclxuXHJcblx0XHRcdCQod2luZG93KS5vbigncmVzaXplLnRvb2xiYXInLCAoKSA9PiBoYW5kbGVBcnJvd3MoJHdpZGdldCkpO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0aGFuZGxlUmVzaXplKCR3aWRnZXQpO1xyXG5cdFx0XHRiaW5kRXZlbnRzQ2xpY2soJHdpZGdldCk7XHJcblxyXG5cdFx0XHQkKHdpbmRvdykub24oJ3Jlc2l6ZS50b29sYmFyJywgKCkgPT4gaGFuZGxlUmVzaXplKCR3aWRnZXQpKTtcclxuXHJcblx0XHRcdHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdUb29sYmFyRml4ZWQnLCAoKSA9PiBoYW5kbGVSZXNpemUoJHdpZGdldCksIGZhbHNlKTtcclxuXHRcdH1cclxuXHR9O1xyXG5cclxuXHRoYW5kbGVBcnJvd3MgPSAkd2lkZ2V0ID0+IHtcclxuXHRcdGNvbnN0ICR0b29sYmFySXRlbXMgPSAkd2lkZ2V0LmZpbmQoJy5Ub29sYmFyX19JdGVtcycpO1xyXG5cdFx0Y29uc3QgJGxpc3RJdGVtcyA9ICR3aWRnZXQuZmluZCgnLlRvb2xiYXJfX0l0ZW1zIC5MaXN0UmVjb3JkcycpO1xyXG5cdFx0Y29uc3QgJGJ0blJpZ2h0ID0gJHdpZGdldC5maW5kKCcuVG9vbGJhcl9fcmlnaHRCdG4nKTtcclxuXHRcdGNvbnN0ICRidG5MZWZ0ID0gJHdpZGdldC5maW5kKCcuVG9vbGJhcl9fbGVmdEJ0bicpO1xyXG5cclxuXHRcdGxldCBjdXJyZW50U2Nyb2xsID0gJHRvb2xiYXJJdGVtcy5zY3JvbGxMZWZ0KCk7XHJcblx0XHRsZXQgbWVudVdpZHRoID0gJGxpc3RJdGVtcy53aWR0aCgpO1xyXG5cdFx0bGV0IGV4dGVybmFsV2lkdGggPSAkdG9vbGJhckl0ZW1zLndpZHRoKCk7XHJcblx0XHR2YXIgbWF4U2Nyb2xsbCA9IG1lbnVXaWR0aCAtIGV4dGVybmFsV2lkdGg7XHJcblxyXG5cdFx0aWYgKGV4dGVybmFsV2lkdGggPiBtZW51V2lkdGgpIHtcclxuXHRcdFx0JGJ0bkxlZnQuaGlkZSgpO1xyXG5cdFx0XHQkYnRuUmlnaHQuaGlkZSgpO1xyXG5cclxuXHRcdFx0JHdpZGdldC5maW5kKCcuVG9vbGJhcl9jb250YWluZXInKS5hZGRDbGFzcygnVG9vbGJhcl9jb250YWluZXItLW5vYXJyb3dzJyk7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHQkYnRuTGVmdC5zaG93KCk7XHJcblx0XHRcdCRidG5SaWdodC5zaG93KCk7XHJcblxyXG5cdFx0XHQkd2lkZ2V0LmZpbmQoJy5Ub29sYmFyX2NvbnRhaW5lcicpLnJlbW92ZUNsYXNzKCdUb29sYmFyX2NvbnRhaW5lci0tbm9hcnJvd3MnKTtcclxuXHRcdH1cclxuXHJcblx0XHRpZiAoY3VycmVudFNjcm9sbCA9PT0gMCkgJGJ0bkxlZnQuYWRkQ2xhc3MoJ0Rpc2FibGVkJyk7XHJcblx0XHRlbHNlICRidG5MZWZ0LnJlbW92ZUNsYXNzKCdEaXNhYmxlZCcpO1xyXG5cclxuXHRcdGlmIChjdXJyZW50U2Nyb2xsID49IG1heFNjcm9sbGwpICRidG5SaWdodC5hZGRDbGFzcygnRGlzYWJsZWQnKTtcclxuXHRcdGVsc2UgJGJ0blJpZ2h0LnJlbW92ZUNsYXNzKCdEaXNhYmxlZCcpO1xyXG5cdH07XHJcblxyXG5cdGhhbmRsZVJlc2l6ZSA9ICR3aWRnZXQgPT4ge1xyXG5cdFx0bGV0IGl0ZW1zVG90YWwgPSAwO1xyXG5cdFx0bGV0IGhhc0l0ZW1zSGlkZGVuID0gZmFsc2U7XHJcblxyXG5cdFx0Y29uc3QgJGxpc3RJdGVtcyA9ICR3aWRnZXQuZmluZCgnLlRvb2xiYXJfX0l0ZW1zIC5MaXN0UmVjb3JkcycpO1xyXG5cdFx0JGxpc3RJdGVtcy5maW5kKCc+IGFbdWldJykuY3NzKCdkaXNwbGF5JywgJ25vbmUnKTtcclxuXHJcblx0XHRjb25zdCBtZW51V2lkdGggPSAkd2lkZ2V0LmZpbmQoJy5Ub29sYmFyX19JdGVtcycpLm91dGVyV2lkdGgodHJ1ZSk7XHJcblxyXG5cdFx0JGxpc3RJdGVtcy5maW5kKCdhW3VpXScpLmVhY2goZnVuY3Rpb24oKSB7XHJcblx0XHRcdGl0ZW1zVG90YWwgKz0gcGFyc2VJbnQoJCh0aGlzKS5vdXRlcldpZHRoKHRydWUpLCAxMCk7XHJcblxyXG5cdFx0XHRpZiAoaXRlbXNUb3RhbCArIDkwIDwgbWVudVdpZHRoKSB7XHJcblx0XHRcdFx0JCh0aGlzKS5jc3MoJ2Rpc3BsYXknLCAnYmxvY2snKTtcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRoYXNJdGVtc0hpZGRlbiA9IHRydWU7XHJcblxyXG5cdFx0XHRcdHJldHVybiBmYWxzZTtcclxuXHRcdFx0fVxyXG5cdFx0fSk7XHJcblxyXG5cdFx0aWYgKGhhc0l0ZW1zSGlkZGVuICYmICEkbGlzdEl0ZW1zLmZpbmQoJy5Ub29sYmFyX19Nb3JlT3B0aW9ucycpLmxlbmd0aCkge1xyXG5cdFx0XHQkd2lkZ2V0XHJcblx0XHRcdFx0LmZpbmQoJy5Ub29sYmFyX19Nb3JlT3B0aW9ucycpXHJcblx0XHRcdFx0LmNsb25lKClcclxuXHRcdFx0XHQuY3NzKCdkaXNwbGF5JywgJ2Jsb2NrJylcclxuXHRcdFx0XHQuYXBwZW5kVG8oJGxpc3RJdGVtcyk7XHJcblxyXG5cdFx0XHRoYXNJdGVtc0hpZGRlbiA9IGZhbHNlO1xyXG5cdFx0fVxyXG5cclxuXHRcdGNvbnN0ICRvcHRpb25zTGlzdCA9ICR3aWRnZXQuZmluZCgnLlRvb2xiYXJfX0l0ZW1zIC5Ub29sYmFyX19Nb3JlT3B0aW9uc0xpc3QnKTtcclxuXHJcblx0XHQkbGlzdEl0ZW1zLmZpbmQoJy5Ub29sYmFyX19Nb3JlT3B0aW9ucycpLmNzcygnZGlzcGxheScsICRvcHRpb25zTGlzdC5sZW5ndGggPyAnYmxvY2snIDogJ25vbmUnKTtcclxuXHJcblx0XHRjb25zdCAkaGlkZGVuSXRlbXMgPSAkbGlzdEl0ZW1zLmZpbmQoJz4gYVt1aV0nKS5maWx0ZXIoZnVuY3Rpb24oKSB7XHJcblx0XHRcdHJldHVybiAkKHRoaXMpLmNzcygnZGlzcGxheScpID09ICdub25lJztcclxuXHRcdH0pO1xyXG5cclxuXHRcdCRvcHRpb25zTGlzdC5lbXB0eSgpO1xyXG5cclxuXHRcdGNvbnN0IGhhc05vdGlmaWNhdGlvbkhpZGRlbiA9ICRoaWRkZW5JdGVtcy5maW5kKCcuTWVudUl0ZW1XcmFwcGVyX0JhZGdlOm5vdCg6ZW1wdHkpJykubGVuZ3RoICE9PSAwO1xyXG5cdFx0Y29uc3QgJHRyaWdnZXIgPSAkd2lkZ2V0LmZpbmQoJy5Ub29sYmFyX19JdGVtcyAuVG9vbGJhcl9fTW9yZU9wdGlvbnNJY29uJyk7XHJcblxyXG5cdFx0aWYgKGhhc05vdGlmaWNhdGlvbkhpZGRlbikgJHRyaWdnZXIuYWRkQ2xhc3MoJ1Rvb2xiYXJfX01vcmVPcHRpb25zSWNvbi0tbm90aWZpY2F0aW9uJyk7XHJcblx0XHRlbHNlICR0cmlnZ2VyLnJlbW92ZUNsYXNzKCdUb29sYmFyX19Nb3JlT3B0aW9uc0ljb24tLW5vdGlmaWNhdGlvbicpO1xyXG5cclxuXHRcdCRoaWRkZW5JdGVtc1xyXG5cdFx0XHQuY2xvbmUoKVxyXG5cdFx0XHQuY3NzKCdkaXNwbGF5JywgJ2Jsb2NrJylcclxuXHRcdFx0LmFwcGVuZFRvKCRvcHRpb25zTGlzdCk7XHJcblx0fTtcclxuXHJcblx0YmluZEV2ZW50c0NsaWNrID0gJHdpZGdldCA9PiB7XHJcblx0XHRjb25zdCAkbW9yZU9wdGlvbnMgPSAkd2lkZ2V0LmZpbmQoJy5Ub29sYmFyX19JdGVtcyAuVG9vbGJhcl9fTW9yZU9wdGlvbnMnKTtcclxuXHRcdGNvbnN0ICR0cmlnZ2VyID0gJHdpZGdldC5maW5kKCcuVG9vbGJhcl9fSXRlbXMgLlRvb2xiYXJfX01vcmVPcHRpb25zSWNvbicpO1xyXG5cdFx0Y29uc3QgJG9wdGlvbnNMaXN0ID0gJHdpZGdldC5maW5kKCcuVG9vbGJhcl9fTW9yZU9wdGlvbnNMaXN0Jyk7XHJcblxyXG5cdFx0JHRyaWdnZXIub24oJ2NsaWNrJywgZXZlbnQgPT4ge1xyXG5cdFx0XHQkbW9yZU9wdGlvbnMudG9nZ2xlQ2xhc3MoJ1Rvb2xiYXJfX01vcmVPcHRpb25zLS1vcGVuJyk7XHJcblx0XHRcdGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xyXG5cdFx0fSk7XHJcblxyXG5cdFx0JG9wdGlvbnNMaXN0Lm9uKCdtb3VzZXdoZWVsJywgZXZlbnQgPT4ge1xyXG5cdFx0XHRldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcclxuXHRcdH0pO1xyXG5cclxuXHRcdCQoJ2JvZHknKS5vbignbW91c2V1cCcsIGV2ZW50ID0+IHtcclxuXHRcdFx0Y29uc3QgJHRhcmdldCA9ICQoZXZlbnQudGFyZ2V0KS5wYXJlbnRzKCk7XHJcblxyXG5cdFx0XHRpZiAoISR0YXJnZXQuYW5kU2VsZigpLmlzKCRtb3JlT3B0aW9ucykpIHtcclxuXHRcdFx0XHQkbW9yZU9wdGlvbnMucmVtb3ZlQ2xhc3MoJ1Rvb2xiYXJfX01vcmVPcHRpb25zLS1vcGVuJyk7XHJcblx0XHRcdH1cclxuXHRcdH0pO1xyXG5cdH07XHJcblxyXG5cdFNhcHBoaXJlV2lkZ2V0cy5Ib3Jpem9udGFsVG9vbGJhciA9IHtcclxuXHRcdGNyZWF0ZSxcclxuXHR9O1xyXG59KShqUXVlcnksIHdpbmRvdywgU2FwcGhpcmVXaWRnZXRzKTtcclxuIiwiLyogQ29tcG9uZW50IEhvdXJQaWNrZXIgKi9cbihmdW5jdGlvbigkLCB3aW5kb3csIFNhcHBoaXJlV2lkZ2V0cykge1xuXHRjbGFzcyBIb3VyUGlja2VyIHtcblx0XHRjb25zdHJ1Y3Rvcihjb25maWcpIHtcblx0XHRcdC8vIE9wdGlvbnMgdXNlZCBieSBqUXVlcnkgVGltZXJwaWNrZXIgKEV4dGVybmFsIExpYilcblx0XHRcdHRoaXMub3B0aW9ucyA9IHtcblx0XHRcdFx0Li4uY29uZmlnLFxuXHRcdFx0fTtcblxuXHRcdFx0U2FwcGhpcmVXaWRnZXRzLkhvdXJQaWNrZXIuYWxsSW50YW5jZXMucHVzaChjb25maWcud2lkZ2V0SWQpO1xuXG5cdFx0XHR0aGlzLm9uQ29tcG9uZW50SW5pdCgpO1xuXHRcdH1cblxuXHRcdGlzQ29tcG9uZW50VmFsaWQoKSB7XG5cdFx0XHRsZXQgdmFsaWQgPSB0cnVlO1xuXHRcdFx0bGV0IG1lc3NhZ2UgPSBgQ29tcG9uZW50IEhvdXJQaWNrZXIgKCR7dGhpcy5vcHRpb25zLndpZGdldElkfSk6YDtcblx0XHRcdGxldCBlcnJvcnMgPSAnJztcblxuXHRcdFx0aWYgKHRoaXMuJG1vZGVsLmxlbmd0aCAmJiB0aGlzLiRtb2RlbC5sZW5ndGggPiAxKSB7XG5cdFx0XHRcdGVycm9ycyA9IGAke2Vycm9yc30gLSBOZWVkcyBvbmUgLSBhbmQganVzdCBvbmUgLSBJbnB1dCBlbGVtZW50LmA7XG5cdFx0XHRcdHZhbGlkID0gZmFsc2U7XG5cdFx0XHR9XG5cblx0XHRcdGlmICghdGhpcy4kbW9kZWwubGVuZ3RoICYmIHRoaXMuJGNvbXBvbmVudC5maW5kKCcuSG91clBpY2tlcl9fUGxhY2Vob2xkZXIgaW5wdXQnKS5sZW5ndGgpIHtcblx0XHRcdFx0ZXJyb3JzID0gYCR7ZXJyb3JzfVxcbiAtIFRoZSBJbnB1dCBlbGVtZW50IG11c3QgYmUgb2YgdHlwZSBUZXh0LmA7XG5cdFx0XHRcdHZhbGlkID0gZmFsc2U7XG5cdFx0XHR9XG5cblx0XHRcdGlmICghdmFsaWQpIGNvbnNvbGUuZXJyb3IoYCR7bWVzc2FnZX0gJHtlcnJvcnN9YCk7XG5cblx0XHRcdHJldHVybiB2YWxpZDtcblx0XHR9XG5cblx0XHRzZXRDb21wb25lbnRQb3NpdGlvbigpIHtcblx0XHRcdGNvbnN0ICR3aWRnZXQgPSAkKCcudWktdGltZXBpY2tlci1jb250YWluZXInKTtcblx0XHRcdGNvbnN0IGxhYmVsTGVmdCA9IHRoaXMuJGxhYmVsLm9mZnNldCgpLmxlZnQ7XG5cdFx0XHRjb25zdCBsYWJlbFdpZHRoID0gdGhpcy4kbGFiZWwud2lkdGgoKTtcblx0XHRcdGNvbnN0IGxhYmVsT3V0ZXJXaWR0aCA9IHRoaXMuJGxhYmVsLm91dGVyV2lkdGgoKTtcblx0XHRcdGNvbnN0IHdpZGdldE91dGVyV2lkdGggPSAkd2lkZ2V0Lm91dGVyV2lkdGgoKTtcblx0XHRcdGNvbnN0IHdpZGdldE1pbldpZHRoID0gKyR3aWRnZXQuY3NzKCdtaW4td2lkdGgnKS5yZXBsYWNlKCdweCcsICcnKTtcblx0XHRcdGNvbnN0IGlzT3V0c2lkZVdpbmRvdyA9XG5cdFx0XHRcdGxhYmVsTGVmdCArIGxhYmVsT3V0ZXJXaWR0aCA+ICQod2luZG93KS5zY3JvbGxMZWZ0KCkgKyAkKHdpbmRvdykud2lkdGgoKSAtIHdpZGdldE91dGVyV2lkdGg7XG5cblx0XHRcdCR3aWRnZXQuY3NzKHtcblx0XHRcdFx0bGVmdDogKCkgPT4ge1xuXHRcdFx0XHRcdGxldCB2YWx1ZSA9IGxhYmVsTGVmdCAtICh3aWRnZXRNaW5XaWR0aCAtIGxhYmVsV2lkdGgpIC8gMjtcblxuXHRcdFx0XHRcdGlmIChpc091dHNpZGVXaW5kb3cpIHZhbHVlID0gbGFiZWxMZWZ0ICsgbGFiZWxXaWR0aCAtIHdpZGdldE91dGVyV2lkdGg7XG5cdFx0XHRcdFx0ZWxzZSBpZiAodmFsdWUgPCAwKSB2YWx1ZSA9IGxhYmVsTGVmdDtcblxuXHRcdFx0XHRcdHJldHVybiB2YWx1ZTtcblx0XHRcdFx0fSxcblx0XHRcdH0pO1xuXHRcdH1cblxuXHRcdHNldEVsZW1lbnRDbGFzcyhzZWxlY3RvciwgY2xhc3NOYW1lKSB7XG5cdFx0XHRyZXR1cm4gY2xhc3NOYW1lID8gJChzZWxlY3RvcikuYWRkQ2xhc3MoY2xhc3NOYW1lKSA6IGZhbHNlO1xuXHRcdH1cblxuXHRcdGRlZmluZVRpbWVGb3JtYXQoKSB7XG5cdFx0XHRsZXQgZm9ybWF0ID0gW107XG5cdFx0XHRsZXQgYW1QbSA9ICcnO1xuXG5cdFx0XHRmb3JtYXQucHVzaCh0aGlzLm9wdGlvbnMuaXMyNGhGb3JtYXQgPyAnSEgnIDogJ2hoJyk7XG5cdFx0XHRpZiAodGhpcy5vcHRpb25zLnNob3dNaW51dGVzKSBmb3JtYXQucHVzaCgnbW0nKTtcblx0XHRcdGlmICh0aGlzLm9wdGlvbnMuc2hvd1NlY29uZHMpIGZvcm1hdC5wdXNoKCdzcycpO1xuXHRcdFx0aWYgKCF0aGlzLm9wdGlvbnMuaXMyNGhGb3JtYXQpIGFtUG0gPSAnIHAnO1xuXG5cdFx0XHRyZXR1cm4gYCR7Zm9ybWF0LmpvaW4oJzonKX0ke2FtUG19YDtcblx0XHR9XG5cblx0XHRjb252ZXJ0VGltZTEydG8yNCh2YWx1ZSkge1xuXHRcdFx0Y29uc3QgW3RpbWUsIG1vZGlmaWVyXSA9IHZhbHVlLnNwbGl0KCcgJyk7XG5cdFx0XHRsZXQgW2hvdXJzLCBtaW51dGVzID0gJzAwJywgc2Vjb25kcyA9ICcwMCddID0gdGltZS5zcGxpdCgnOicpO1xuXG5cdFx0XHRpZiAoaG91cnMgPT09ICcxMicpIGhvdXJzID0gJzAwJztcblx0XHRcdGlmIChtb2RpZmllciA9PT0gJ1BNJykgaG91cnMgPSBwYXJzZUludChob3VycywgMTApICsgMTI7XG5cblx0XHRcdHJldHVybiBgJHtob3Vyc306JHttaW51dGVzfToke3NlY29uZHN9YDtcblx0XHR9XG5cblx0XHRjb252ZXJ0VGltZUZvcm1hdFRvTWFzayh2YWx1ZSA9ICcnKSB7XG5cdFx0XHRyZXR1cm4gdmFsdWUucmVwbGFjZSgvW2EtekEtWl0rL2csICctLScpO1xuXHRcdH1cblxuXHRcdG9uQ2hhbmdlRXZlbnQodmFsdWUgPSAnJykge1xuXHRcdFx0bGV0IG1vZGVsID0gJzAxLTAxLTE5MDAgMDA6MDA6MDAnOyAvL2kuZS4gbnVsbFxuXHRcdFx0bGV0IGxhYmVsID0gdGhpcy5jb252ZXJ0VGltZUZvcm1hdFRvTWFzayh0aGlzLm9wdGlvbnMudGltZUZvcm1hdCk7XG5cblx0XHRcdGlmICh2YWx1ZSAmJiAhIXZhbHVlLnRyaW0oKSkge1xuXHRcdFx0XHQvLyBUaGlzIGNvbmRpdGlvbiBpcyBjb3JyZWN0LCBtb2RlbCBhbHdheXMgdXNlcyB0aGUgMjRoIGZvcm1hdFxuXHRcdFx0XHRtb2RlbCA9IHRoaXMub3B0aW9ucy5pczI0aEZvcm1hdCA/IHZhbHVlIDogdGhpcy5jb252ZXJ0VGltZTEydG8yNCh2YWx1ZSk7XG5cdFx0XHRcdGxhYmVsID0gdmFsdWU7XG5cdFx0XHR9XG5cblx0XHRcdGlmICh0aGlzLm9wdGlvbnMuaXNOb3RpZnlFbmFibGVkKSBPc05vdGlmeVdpZGdldCh0aGlzLm9wdGlvbnMuaG91clBpY2tlckZha2VOb3RpZnlJZCwgbW9kZWwpO1xuXHRcdFx0aWYgKHRoaXMub3B0aW9ucy5pc1RleHRUcmlnZ2VyYWJsZSkgdGhpcy4kbGFiZWwudGV4dChsYWJlbCk7XG5cblx0XHRcdHRoaXMuJG1vZGVsLnZhbChtb2RlbCk7XG5cdFx0XHR0aGlzLiRtb2RlbC5jaGFuZ2UoKTtcblxuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdG9uQ29tcG9uZW50SW5pdCgpIHtcblx0XHRcdHRoaXMuJGNvbXBvbmVudCA9ICQoYCMke3RoaXMub3B0aW9ucy53aWRnZXRJZH1gKTtcblx0XHRcdHRoaXMuJG1vZGVsID0gdGhpcy4kY29tcG9uZW50LmZpbmQoJy5Ib3VyUGlja2VyX19QbGFjZWhvbGRlciBpbnB1dFt0eXBlPVwidGV4dFwiXScpO1xuXHRcdFx0dGhpcy4kaW5wdXQgPSB0aGlzLiRjb21wb25lbnQuZmluZCgnLkhvdXJQaWNrZXJfX0Rpc3BsYXllZCAuSG91clBpY2tlcl9fSW5wdXRWYWx1ZScpO1xuXHRcdFx0dGhpcy4kZWxlbWVudCA9IHRoaXMuJGlucHV0O1xuXG5cdFx0XHR0aGlzLm9wdGlvbnMudGltZUZvcm1hdCA9IHRoaXMuZGVmaW5lVGltZUZvcm1hdCgpO1xuXG5cdFx0XHRpZiAoIXRoaXMuaXNDb21wb25lbnRWYWxpZCgpKSByZXR1cm47XG5cdFx0XHRlbHNlIHtcblx0XHRcdFx0Y29uc3QgJGNvbnRhaW5lciA9IHRoaXMuJGNvbXBvbmVudDtcblxuXHRcdFx0XHRpZiAodGhpcy5vcHRpb25zLmlzVGV4dFRyaWdnZXJhYmxlKSB7XG5cdFx0XHRcdFx0JGNvbnRhaW5lci5hZGRDbGFzcygnSG91clBpY2tlci0tdGV4dFRyaWdnZXInKTtcblxuXHRcdFx0XHRcdHRoaXMuJGxhYmVsID0gJGNvbnRhaW5lci5maW5kKCcuSG91clBpY2tlcl9fRGlzcGxheWVkIC5Ib3VyUGlja2VyX19MYWJlbFZhbHVlJyk7XG5cdFx0XHRcdFx0dGhpcy4kZWxlbWVudCA9IHRoaXMuJGxhYmVsO1xuXG5cdFx0XHRcdFx0dGhpcy4kbGFiZWwudGV4dCh0aGlzLmNvbnZlcnRUaW1lRm9ybWF0VG9NYXNrKHRoaXMub3B0aW9ucy50aW1lRm9ybWF0KSk7XG5cblx0XHRcdFx0XHR0aGlzLiRsYWJlbC5vbignY2xpY2snLCAoKSA9PiB7XG5cdFx0XHRcdFx0XHR0aGlzLiRsYWJlbC50aW1lcGlja2VyKCkub3BlbigpO1xuXG5cdFx0XHRcdFx0XHR0aGlzLnNldENvbXBvbmVudFBvc2l0aW9uKCk7XG5cdFx0XHRcdFx0fSk7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRpZiAodGhpcy5vcHRpb25zLmlzQ2xlYXJhYmxlKSB7XG5cdFx0XHRcdFx0dGhpcy4kYnV0dG9uQ2xlYXIgPSAkY29udGFpbmVyLmZpbmQoJy5Ib3VyUGlja2VyX19EaXNwbGF5ZWQgLkhvdXJQaWNrZXJfX0J1dHRvbkNsZWFyJyk7XG5cblx0XHRcdFx0XHR0aGlzLiRidXR0b25DbGVhci5vbignY2xpY2snLCAoKSA9PiB7XG5cdFx0XHRcdFx0XHR0aGlzLiRpbnB1dC52YWwoJycpO1xuXHRcdFx0XHRcdFx0dGhpcy5vbkNoYW5nZUV2ZW50KCk7XG5cdFx0XHRcdFx0fSk7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHR0aGlzLiRlbGVtZW50LnRpbWVwaWNrZXIoe1xuXHRcdFx0XHRcdC4uLnRoaXMub3B0aW9ucyxcblx0XHRcdFx0XHRjaGFuZ2U6IHRpbWUgPT4gdGhpcy5vbkNoYW5nZUV2ZW50KHRpbWUgPyAkKCkudGltZXBpY2tlci5mb3JtYXRUaW1lKHRoaXMub3B0aW9ucy50aW1lRm9ybWF0LCB0aW1lKSA6IG51bGwpLFxuXHRcdFx0XHR9KTtcblxuXHRcdFx0XHR0aGlzLnNldEVsZW1lbnRDbGFzcygnLnVpLXRpbWVwaWNrZXItY29udGFpbmVyJywgdGhpcy5vcHRpb25zLmN1cnJlbnRMb2NhbGUgPT09ICdBUicgPyAncnRsJyA6ICdsdHInKTtcblxuXHRcdFx0XHR0aGlzLiRpbnB1dC5wcm9wKCdyZWFkb25seScsICF0aGlzLm9wdGlvbnMuaXNUeXBlRW5hYmxlZCk7XG5cdFx0XHRcdHRoaXMuJGlucHV0LnByb3AoJ3BsYWNlaG9sZGVyJywgdGhpcy5vcHRpb25zLnRpbWVGb3JtYXQpO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdGNvbnN0IGNyZWF0ZSA9IGNvbmZpZyA9PiB7XG5cdFx0d2luZG93W2NvbmZpZy53aWRnZXRJZF0gPSBuZXcgSG91clBpY2tlcihjb25maWcpO1xuXHR9O1xuXG5cdFNhcHBoaXJlV2lkZ2V0cy5Ib3VyUGlja2VyID0ge1xuXHRcdGNyZWF0ZSxcblx0XHRhbGxJbnRhbmNlczogW10sXG5cdH07XG59KShqUXVlcnksIHdpbmRvdywgU2FwcGhpcmVXaWRnZXRzKTtcbiIsIi8qIENvbXBvbmVudCBJbnB1dExBU0EgKi9cbihmdW5jdGlvbigpIHtcblx0dmFyIHNldHVwSW5wdXQgPSBmdW5jdGlvbihjb25maWcpIHtcblx0XHQkKCdib2R5Jykub2ZmKCdjbGljaycsICcjJyArIGNvbmZpZy5sYWJlbElkKTtcblx0XHQkKCdib2R5Jykub2ZmKCdibHVyIGNoYW5nZSBpbnB1dCcsICcjJyArIGNvbmZpZy5pbnB1dElkKTtcblxuXHRcdCQoJyMnICsgY29uZmlnLmlucHV0SWQpLmNzcygnd2lkdGgnLCAnMTAwJScpO1xuXHRcdCQoJyMnICsgY29uZmlnLmxhYmVsSWQpLmNzcygnd2lkdGgnLCAnMTAwJScpO1xuXG5cdFx0JCgnIycgKyBjb25maWcuaW5wdXRJZCkuaGlkZSgpO1xuXHRcdCQoJyMnICsgY29uZmlnLmxhYmVsSWQpLnNob3coKTtcblxuXHRcdFNhcHBoaXJlV2lkZ2V0cy5NYXJrV29yZHNGcm9tTGlzdC5oYW5kbGVQcm9tcHQoY29uZmlnKTtcblxuXHRcdCQoJ2JvZHknKS5vbignY2xpY2snLCAnIycgKyBjb25maWcubGFiZWxJZCwgZnVuY3Rpb24oKSB7XG5cdFx0XHQkKCcjJyArIGNvbmZpZy5sYWJlbElkKS5oaWRlKCk7XG5cdFx0XHQkKCcjJyArIGNvbmZpZy5pbnB1dElkKS5zaG93KCk7XG5cdFx0XHQkKCcjJyArIGNvbmZpZy5pbnB1dElkKS5mb2N1cygpO1xuXHRcdH0pO1xuXG5cdFx0JCgnYm9keScpLm9uKCdibHVyJywgJyMnICsgY29uZmlnLmlucHV0SWQsIGZ1bmN0aW9uKCkge1xuXHRcdFx0U2FwcGhpcmVXaWRnZXRzLk1hcmtXb3Jkc0Zyb21MaXN0LmhhbmRsZVByb21wdChjb25maWcpO1xuXHRcdFx0JCgnIycgKyBjb25maWcuaW5wdXRJZCkuaGlkZSgpO1xuXHRcdFx0JCgnIycgKyBjb25maWcubGFiZWxJZCkuc2hvdygpO1xuXHRcdFx0d2luZG93LnNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG5cdFx0XHRcdFNhcHBoaXJlV2lkZ2V0cy5NYXJrV29yZHNGcm9tTGlzdC5oYW5kbGVQcm9tcHQoY29uZmlnKTtcblx0XHRcdFx0U2FwcGhpcmVXaWRnZXRzLk1hcmtXb3Jkc0Zyb21MaXN0LmFwcGx5TWFya2luZyh7IHRhcmdldDogY29uZmlnLmxhYmVsSWQgfSk7XG5cdFx0XHR9LCAyNTApO1xuXHRcdH0pO1xuXG5cdFx0JCgnYm9keScpLm9uKCdjaGFuZ2UgaW5wdXQnLCAnIycgKyBjb25maWcuaW5wdXRJZCwgZnVuY3Rpb24oKSB7XG5cdFx0XHQkKCcjJyArIGNvbmZpZy5sYWJlbElkKS50ZXh0KCQoJyMnICsgY29uZmlnLmlucHV0SWQpLnZhbCgpKTtcblx0XHRcdHdpbmRvdy5zZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRTYXBwaGlyZVdpZGdldHMuTWFya1dvcmRzRnJvbUxpc3QuYXBwbHlNYXJraW5nKHsgdGFyZ2V0OiAncGFnZScgfSk7XG5cdFx0XHR9LCAyNTApO1xuXHRcdH0pO1xuXHR9O1xuXG5cdHZhciBoYW5kbGVQcm9tcHQgPSBmdW5jdGlvbihjb25maWcpIHtcblx0XHRpZiAoISQoJyMnICsgY29uZmlnLmlucHV0SWQpLnZhbCgpLmxlbmd0aCkge1xuXHRcdFx0JCgnIycgKyBjb25maWcubGFiZWxJZClcblx0XHRcdFx0LnRleHQoJCgnIycgKyBjb25maWcuaW5wdXRJZCkucHJvcCgncGxhY2Vob2xkZXInKSlcblx0XHRcdFx0LmNzcygnY29sb3InLCAnIzk5OScpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHQkKCcjJyArIGNvbmZpZy5sYWJlbElkKVxuXHRcdFx0XHQudGV4dCgkKCcjJyArIGNvbmZpZy5pbnB1dElkKS52YWwoKSlcblx0XHRcdFx0LmNzcygnY29sb3InLCAnJyk7XG5cdFx0fVxuXHR9O1xuXG5cdFNhcHBoaXJlV2lkZ2V0cy5NYXJrV29yZHNGcm9tTGlzdCA9IFNhcHBoaXJlV2lkZ2V0cy5NYXJrV29yZHNGcm9tTGlzdCA9IFNhcHBoaXJlV2lkZ2V0cy5NYXJrV29yZHNGcm9tTGlzdCB8fCB7fTtcblx0U2FwcGhpcmVXaWRnZXRzLk1hcmtXb3Jkc0Zyb21MaXN0LnNldHVwSW5wdXQgPSBzZXR1cElucHV0O1xuXHRTYXBwaGlyZVdpZGdldHMuTWFya1dvcmRzRnJvbUxpc3QuaGFuZGxlUHJvbXB0ID0gaGFuZGxlUHJvbXB0O1xufSkoKTtcbiIsIihmdW5jdGlvbigpIHtcclxuXHRjbGFzcyBJbnB1dFdpdGhDbGVhciB7XHJcblx0XHRjb25zdHJ1Y3Rvcihjb25maWcpIHtcclxuXHRcdFx0dGhpcy5jb25maWcgPSBjb25maWc7XHJcblx0XHRcdHRoaXMuJHdpZGdldCA9ICQoYCMke2NvbmZpZy53aWRnZXRJZH1gKTtcclxuXHRcdFx0dGhpcy4kaW5wdXQgPSB0aGlzLiR3aWRnZXQuZmluZCgnaW5wdXRbdHlwZV0nKTtcclxuXHRcdFx0dGhpcy4kY2xlYXIgPSB0aGlzLiR3aWRnZXQuZmluZCgnLklucHV0V2l0aENsZWFyLWNsZWFyJyk7XHJcblx0XHRcdHRoaXMuJG5vdGlmeUxpbmsgPSB0aGlzLiR3aWRnZXQuZmluZCgnLklucHV0V2l0aENsZWFyLW5vdGlmeS1saW5rJyk7XHJcblx0XHRcdHRoaXMuJHdpZGdldFNoaWVsZCA9IHRoaXMuJHdpZGdldC5maW5kKCcuSW5wdXRXaXRoQ2xlYXItLXNoaWVsZCcpO1xyXG5cdFx0XHR0aGlzLm9uSW5pdCgpO1xyXG5cdFx0fVxyXG5cclxuXHRcdG9uSW5pdCgpIHtcclxuXHRcdFx0dGhpcy4kaW5wdXQub24oJ2tleXVwJywgZSA9PiB7XHJcblx0XHRcdFx0aWYgKHRoaXMuJGlucHV0LnZhbCgpICE9PSAnJykgdGhpcy4kY2xlYXIuc2hvdygpO1xyXG5cdFx0XHRcdGVsc2UgdGhpcy4kY2xlYXIuc2hvdygpO1xyXG5cdFx0XHR9KTtcclxuXHJcblx0XHRcdHRoaXMuJGlucHV0Lm9uKCdibHVyJywgKCkgPT4ge1xyXG5cdFx0XHRcdGlmICh0aGlzLiRpbnB1dC52YWwoKSA9PT0gJycpIHtcclxuXHRcdFx0XHRcdHdpbmRvdy5zZXRUaW1lb3V0KCgpID0+IHtcclxuXHRcdFx0XHRcdFx0aWYgKCQoJy5kYXRlcmFuZ2VwaWNrZXI6dmlzaWJsZScpLmxlbmd0aCA9PT0gMSkge1xyXG5cdFx0XHRcdFx0XHRcdHJldHVybiBmYWxzZTtcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHR0aGlzLiRjbGVhci5oaWRlKCk7XHJcblx0XHRcdFx0XHRcdHRoaXMuJG5vdGlmeUxpbmsudHJpZ2dlcignY2xpY2snKTtcclxuXHRcdFx0XHRcdH0sIDEwMCk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9KTtcclxuXHRcdFx0dGhpcy4kY2xlYXIub24oJ2NsaWNrJywgKCkgPT4ge1xyXG5cdFx0XHRcdHRoaXMuJGlucHV0LnZhbCgnJyk7XHJcblx0XHRcdFx0dGhpcy4kY2xlYXIuaGlkZSgpO1xyXG5cdFx0XHRcdHRoaXMuJG5vdGlmeUxpbmsudHJpZ2dlcignY2xpY2snKTtcclxuXHRcdFx0fSk7XHJcblx0XHRcdGlmICh0aGlzLmNvbmZpZy5oYXNTaGllbGQpIHtcclxuXHRcdFx0XHR3aW5kb3cuc2V0VGltZW91dCgoKSA9PiB7XHJcblx0XHRcdFx0XHR0aGlzLiR3aWRnZXRTaGllbGQuaGlkZSgpO1xyXG5cdFx0XHRcdH0sIHRoaXMuY29uZmlnLnNoaWVsZFRpbWVvdXQpO1xyXG5cdFx0XHRcdGlmICh0aGlzLmNvbmZpZy5zaGllbGRUaW1lb3V0ID4gMCkge1xyXG5cdFx0XHRcdFx0dGhpcy4kd2lkZ2V0U2hpZWxkLm9uKCdjbGljaycsICgpID0+IHtcclxuXHRcdFx0XHRcdFx0dGhpcy4kY2xlYXIuaGlkZSgpO1xyXG5cdFx0XHRcdFx0fSk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRjb25zdCBjcmVhdGUgPSBjb25maWcgPT4gKHdpbmRvd1tjb25maWcud2lkZ2V0SWRdID0gbmV3IElucHV0V2l0aENsZWFyKGNvbmZpZykpO1xyXG5cclxuXHRTYXBwaGlyZVdpZGdldHMuSW5wdXRXaXRoQ2xlYXIgPSB7XHJcblx0XHRjcmVhdGUsXHJcblx0fTtcclxufSkoKTtcclxuIiwiKGZ1bmN0aW9uKCkge1xuXHRjbGFzcyBJbnB1dFdpdGhMaXN0IHtcblx0XHRjb25zdHJ1Y3Rvcihjb25maWcpIHtcblx0XHRcdHRoaXMuY29uZmlnID0gY29uZmlnO1xuXHRcdFx0dGhpcy4kd2lkZ2V0ID0gJChgIyR7Y29uZmlnLndpZGdldElkfWApO1xuXHRcdFx0dGhpcy4kaW5wdXQgPSB0aGlzLiR3aWRnZXQuZmluZCgnaW5wdXRbdHlwZV0nKTtcblx0XHRcdHRoaXMuJGxpc3QgPSB0aGlzLiR3aWRnZXQuZmluZCgnLklucHV0V2l0aExpc3RfX0xpc3QnKTtcblxuXHRcdFx0dGhpcy4kaW5wdXQudmFsKCcnKTtcblxuXHRcdFx0dGhpcy5vbkluaXQoKTtcblx0XHR9XG5cblx0XHRvbkluaXQoKSB7XG5cdFx0XHR0aGlzLiRpbnB1dC5vbigna2V5dXAnLCBlID0+IHtcblx0XHRcdFx0Ly8gR2V0dGluZyBlbGVtZW50cyBhZ2FpbiBpbiBvcmRlciB0byB3b3JrIHdoZW4gdGhpcyBjb21wb25lbnQgaXMgY2xvbmVkIChlLmcuIHdoZW4gdXNpbmcgaW5zaWRlIEFjdGlvbnNNZW51KVxuXHRcdFx0XHR0aGlzLiR3aWRnZXQgPSAkKGAjJHt0aGlzLmNvbmZpZy53aWRnZXRJZH1gKTtcblx0XHRcdFx0Y29uc3QgJGlucHV0ID0gdGhpcy4kd2lkZ2V0LmZpbmQoJ2lucHV0W3R5cGVdJyk7XG5cdFx0XHRcdGNvbnN0ICRsaXN0ID0gdGhpcy4kd2lkZ2V0LmZpbmQoJy5JbnB1dFdpdGhMaXN0X19MaXN0Jyk7XG5cdFx0XHRcdHRoaXMuJGhpZGRlbklucHV0ID0gdGhpcy4kd2lkZ2V0LmZpbmQoJy5JbnB1dFdpdGhMaXN0X19IaWRkZW5JbnB1dCBpbnB1dCcpO1xuXG5cdFx0XHRcdGlmICgkaW5wdXQudmFsKCkudHJpbSgpICE9PSAnJykge1xuXHRcdFx0XHRcdCRsaXN0LmVtcHR5KCk7XG5cblx0XHRcdFx0XHQkbGlzdC5hcHBlbmQoYDxkaXY+PGI+Q3JlYXRlOjwvYj4gJHskaW5wdXQudmFsKCl9PC9kaXY+YCk7XG5cblx0XHRcdFx0XHRpZiAoISRsaXN0LmlzKCc6dmlzaWJsZScpKSAkbGlzdC5zaG93KCk7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0JGxpc3QuaGlkZSgpO1xuXHRcdFx0XHR9XG5cdFx0XHR9KTtcblxuXHRcdFx0dGhpcy4kbGlzdC5vbignY2xpY2snLCBlID0+IHtcblx0XHRcdFx0Y29uc3QgJGxpbmtOb3RpZnkgPSB0aGlzLiR3aWRnZXQuZmluZCgnLklucHV0V2l0aExpc3Qtbm90aWZ5LWxpbmsnKTtcblx0XHRcdFx0Y29uc3QgJGxpc3QgPSB0aGlzLiR3aWRnZXQuZmluZCgnLklucHV0V2l0aExpc3RfX0xpc3QnKTtcblx0XHRcdFx0Y29uc3QgJGlucHV0ID0gdGhpcy4kd2lkZ2V0LmZpbmQoJ2lucHV0W3R5cGVdJyk7XG5cblx0XHRcdFx0dGhpcy4kaGlkZGVuSW5wdXQudmFsKCRpbnB1dC52YWwoKSk7XG5cdFx0XHRcdHRoaXMuJGhpZGRlbklucHV0LmNoYW5nZSgpO1xuXG5cdFx0XHRcdCRsaW5rTm90aWZ5LmNsaWNrKCk7XG5cdFx0XHRcdCRsaXN0LmhpZGUoKTtcblx0XHRcdH0pO1xuXHRcdH1cblx0fVxuXG5cdGNvbnN0IGNyZWF0ZSA9IGNvbmZpZyA9PiAod2luZG93W2NvbmZpZy53aWRnZXRJZF0gPSBuZXcgSW5wdXRXaXRoTGlzdChjb25maWcpKTtcblxuXHRTYXBwaGlyZVdpZGdldHMuSW5wdXRXaXRoTGlzdCA9IHtcblx0XHRjcmVhdGUsXG5cdH07XG59KSgpO1xuIiwiLyogQ29tcG9uZW50IExpbmVBZGQgKi9cbihmdW5jdGlvbigkLCB3aW5kb3csIFNhcHBoaXJlV2lkZ2V0cykge1xuXHRjb25zdCBjcmVhdGUgPSBmdW5jdGlvbihjb25maWcpIHtcblx0XHQkKHdpbmRvdykubG9hZChmdW5jdGlvbigpIHtcblx0XHRcdHNldFdpZHRoKGNvbmZpZy53aWRnZXRJZCk7XG5cdFx0XHRTYXBwaGlyZVdpZGdldHMuTGluZUFkZC53aWRnZXRJZCA9IGNvbmZpZy53aWRnZXRJZDtcblxuXHRcdFx0b3NBamF4QmFja2VuZC5CaW5kQWZ0ZXJBamF4UmVxdWVzdCgoKSA9PiBzZXRXaWR0aChjb25maWcud2lkZ2V0SWQpKTtcblx0XHR9KTtcblxuXHRcdCQod2luZG93KS5vbigncmVzaXplLkxpbmVBZGQnLCAoKSA9PiBzZXRXaWR0aChjb25maWcud2lkZ2V0SWQpKTtcblx0fTtcblxuXHRjb25zdCBzZXRXaWR0aCA9IGZ1bmN0aW9uKHdpZGdldElkKSB7XG5cdFx0d2luZG93LnNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG5cdFx0XHRjb25zdCAkd2lkZ2V0ID0gJChgIyR7d2lkZ2V0SWQgfHwgU2FwcGhpcmVXaWRnZXRzLkxpbmVBZGQud2lkZ2V0SWR9YCk7XG5cdFx0XHRjb25zdCB3aWR0aHMgPSBbXTtcblxuXHRcdFx0Zm9yIChpID0gMTsgaSA8IDg7IGkrKykge1xuXHRcdFx0XHRsZXQgbWF4V2lkdGhDb250ZW50ID0gTWF0aC5tYXguYXBwbHkoXG5cdFx0XHRcdFx0bnVsbCxcblx0XHRcdFx0XHQkd2lkZ2V0XG5cdFx0XHRcdFx0XHQuZmluZCgnLmxhY29sJyArIGkpXG5cdFx0XHRcdFx0XHQubWFwKGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRcdFx0XHRyZXR1cm4gJCh0aGlzKS53aWR0aCgpO1xuXHRcdFx0XHRcdFx0fSlcblx0XHRcdFx0XHRcdC5nZXQoKVxuXHRcdFx0XHQpO1xuXG5cdFx0XHRcdHdpZHRocy5wdXNoKG1heFdpZHRoQ29udGVudCk7XG5cdFx0XHRcdCR3aWRnZXQuZmluZCgnLmxhY29sJyArIGkpLndpZHRoKG1heFdpZHRoQ29udGVudCk7XG5cdFx0XHR9XG5cdFx0fSwgMTAwKTtcblx0fTtcblxuXHRTYXBwaGlyZVdpZGdldHMuTGluZUFkZCA9IHsgY3JlYXRlLCBzZXRXaWR0aCB9O1xufSkoalF1ZXJ5LCB3aW5kb3csIFNhcHBoaXJlV2lkZ2V0cyk7XG4iLCIvKiBDb21wb25lbnQgTGluZURldGFpbHNFeHBhbmRCb3ggKi9cbihmdW5jdGlvbigkLCB3aW5kb3csIFNhcHBoaXJlV2lkZ2V0cykge1xuXHRjb25zdCBpbml0ID0gY29uZmlnID0+IHtcblx0XHQkKGAjJHtjb25maWcud2lkZ2V0SWR9ICsgLkxpbmVEZXRhaWxzRXhwYW5kQm94X2FjdGlvbmApLmNsaWNrKGV2ZW50ID0+IHtcblx0XHRcdGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuXHRcdH0pO1xuXHR9O1xuXG5cdGNvbnN0IGNyZWF0ZSA9IGNvbmZpZyA9PiAkKGRvY3VtZW50KS5yZWFkeSgoKSA9PiBpbml0KGNvbmZpZykpO1xuXG5cdFNhcHBoaXJlV2lkZ2V0cy5MaW5lRGV0YWlsc0V4cGFuZEJveCA9IHsgY3JlYXRlIH07XG59KShqUXVlcnksIHdpbmRvdywgU2FwcGhpcmVXaWRnZXRzKTtcbiIsIi8qIENvbXBvbmVudCBMb2NhdGlvbkJveCAqL1xuU2FwcGhpcmVXaWRnZXRzLkxvY2F0aW9uQm94ID0gZnVuY3Rpb24od2lkZ2V0SWQpIHtcblx0Y29uc3QgJGNvbXBvbmVudCA9ICQoYCMke3dpZGdldElkfWApO1xuXG5cdGlmICgkY29tcG9uZW50Lmhhc0NsYXNzKCdPbicpKSB7XG5cdFx0JCgnLkRpc2FibGVSb29tJykuZWFjaChmdW5jdGlvbigpIHtcblx0XHRcdCQodGhpcylcblx0XHRcdFx0LnJlbW92ZUNsYXNzKCdPZmYnKVxuXHRcdFx0XHQucmVtb3ZlQ2xhc3MoJ09uJyk7XG5cdFx0XHQkKHRoaXMpXG5cdFx0XHRcdC5wYXJlbnQoJy5Sb29tQm94Jylcblx0XHRcdFx0LmNzcyh7XG5cdFx0XHRcdFx0b3BhY2l0eTogJzEnLFxuXHRcdFx0XHR9KVxuXHRcdFx0XHQucmVtb3ZlQ2xhc3MoJ1NlbGVjdGVkJyk7XG5cdFx0fSk7XG5cdH0gZWxzZSB7XG5cdFx0JGNvbXBvbmVudFxuXHRcdFx0LmFkZENsYXNzKCdPbicpXG5cdFx0XHQucmVtb3ZlQ2xhc3MoJ09mZicpXG5cdFx0XHQucGFyZW50KCcuUm9vbUJveCcpXG5cdFx0XHQuY3NzKHtcblx0XHRcdFx0b3BhY2l0eTogJzEnLFxuXHRcdFx0fSlcblx0XHRcdC5hZGRDbGFzcygnU2VsZWN0ZWQnKTtcblxuXHRcdCQoJy5EaXNhYmxlUm9vbTpub3QoIycgKyB3aWRnZXRJZCArICcpJykuZWFjaChmdW5jdGlvbigpIHtcblx0XHRcdCQodGhpcykuYWRkQ2xhc3MoJ09mZicpO1xuXHRcdFx0JCh0aGlzKS5yZW1vdmVDbGFzcygnT24nKTtcblx0XHR9KTtcblxuXHRcdCQoJy5EaXNhYmxlUm9vbS5PZmYnKVxuXHRcdFx0LnBhcmVudCgnLlJvb21Cb3gnKVxuXHRcdFx0LmNzcyh7XG5cdFx0XHRcdG9wYWNpdHk6ICcwLjUwJyxcblx0XHRcdH0pXG5cdFx0XHQucmVtb3ZlQ2xhc3MoJ1NlbGVjdGVkJyk7XG5cdH1cbn07XG4iLCIvKiBDb21wb25lbnQgTWFpbkludGVyYWN0aXZlQ2FyZCAqL1xuKGZ1bmN0aW9uKCQsIHdpbmRvdywgZG9jdW1lbnQsIFNhcHBoaXJlV2lkZ2V0cykge1xuXHR2YXIgYWxsTWFpbkludGVyYWN0aXZlQ2FyZHMgPSBbXTtcblx0dmFyIGRlZmF1bHREdXJhdGlvbiA9IDMwMDtcblxuXHR2YXIgY3JlYXRlID0gZnVuY3Rpb24oY29uZmlnKSB7XG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBhbGxNYWluSW50ZXJhY3RpdmVDYXJkcy5sZW5ndGg7IGkrKykge1xuXHRcdFx0aWYgKGFsbE1haW5JbnRlcmFjdGl2ZUNhcmRzW2ldLmNvbmZpZy53aWRnZXRJZCA9PT0gY29uZmlnLndpZGdldElkKSB7XG5cdFx0XHRcdGFsbE1haW5JbnRlcmFjdGl2ZUNhcmRzLnNwbGljZShpLCAxKTtcblx0XHRcdH1cblx0XHR9XG5cdFx0d2luZG93W2NvbmZpZy53aWRnZXRJZF0gPSBuZXcgTWFpbkludGVyYWN0aXZlQ2FyZChjb25maWcpO1xuXHRcdGFsbE1haW5JbnRlcmFjdGl2ZUNhcmRzLnB1c2god2luZG93W2NvbmZpZy53aWRnZXRJZF0pO1xuXG5cdFx0aWYgKCEhIVNhcHBoaXJlV2lkZ2V0cy5NYWluSW50ZXJhY3RpdmVDYXJkLmFmdGVyQWpheFJlcXVlc3RCaW5kZWQgJiYgISFvc0FqYXhCYWNrZW5kKSB7XG5cdFx0XHRvc0FqYXhCYWNrZW5kLkJpbmRBZnRlckFqYXhSZXF1ZXN0KGZ1bmN0aW9uKCkge1xuXHRcdFx0XHR2YXIgYWxsTWFpbkludGVyYWN0aXZlQ2FyZHMgPSBTYXBwaGlyZVdpZGdldHMuTWFpbkludGVyYWN0aXZlQ2FyZC5hbGwoKTtcblx0XHRcdFx0YWxsTWFpbkludGVyYWN0aXZlQ2FyZHMuZm9yRWFjaChmdW5jdGlvbihlbGVtZW50KSB7XG5cdFx0XHRcdFx0ZWxlbWVudC5oYW5kbGVIZWFkZXJXaXRoQWJzb2x1dGVCdXR0b25zKCk7XG5cdFx0XHRcdH0pO1xuXHRcdFx0fSk7XG5cdFx0XHRTYXBwaGlyZVdpZGdldHMuTWFpbkludGVyYWN0aXZlQ2FyZC5hZnRlckFqYXhSZXF1ZXN0QmluZGVkID0gdHJ1ZTtcblx0XHR9XG5cdH07XG5cblx0dmFyIE1haW5JbnRlcmFjdGl2ZUNhcmQgPSBmdW5jdGlvbihjb25maWcpIHtcblx0XHR2YXIgX3RoaXMgPSB0aGlzO1xuXHRcdHRoaXMuY29uZmlnID0gY29uZmlnO1xuXHRcdHRoaXMuaXNMb2NrZWRPbkNsb3NlID0gZmFsc2U7XG5cdFx0dGhpcy5pc09wZW4gPSBjb25maWcuaXNPcGVuO1xuXHRcdHRoaXMuaXNFbmFibGVkID0gY29uZmlnLmlzRW5hYmxlZDtcblx0XHR0aGlzLmlzU2VsZWN0YWJsZSA9IGNvbmZpZy5pc1NlbGVjdGFibGU7XG5cdFx0dGhpcy5hbGxvd09wZW5pbmcgPSBjb25maWcuYWxsb3dPcGVuaW5nO1xuXHRcdHRoaXMuYWxsb3dNdWx0aXBsZU9wZW4gPSBjb25maWcuYWxsb3dNdWx0aXBsZU9wZW47XG5cdFx0dGhpcy5lbWl0Tm90aWZ5T25PcGVuID0gY29uZmlnLmVtaXROb3RpZnlPbk9wZW47XG5cdFx0dGhpcy5oaWRlQWN0aW9uc09uT3BlbiA9IGNvbmZpZy5oaWRlQWN0aW9uc09uT3Blbjtcblx0XHR0aGlzLmhpZGVDYXB0aW9uT25PcGVuID0gY29uZmlnLmhpZGVDYXB0aW9uT25PcGVuO1xuXHRcdHRoaXMuaGlkZVRpdGxlT25PcGVuID0gY29uZmlnLmhpZGVUaXRsZU9uT3Blbjtcblx0XHR0aGlzLmhpZGVTdWJUaXRsZU9uT3BlbiA9IGNvbmZpZy5oaWRlU3ViVGl0bGVPbk9wZW47XG5cdFx0dGhpcy5oZWFkZXJIZWlnaHRXaGVuT3BlbiA9IGNvbmZpZy5oZWFkZXJIZWlnaHRXaGVuT3Blbjtcblx0XHR0aGlzLk1haW5JbnRlcmFjdGl2ZUNhcmRGYWtlTm90aWZ5SWQgPSBjb25maWcubWFpbkludGVyYWN0aXZlQ2FyZEZha2VOb3RpZnlJZDtcblxuXHRcdHRoaXMuJHdpZGdldCA9ICQoJyMnICsgY29uZmlnLndpZGdldElkKTtcblx0XHR0aGlzLiR3aWRnZXQuY3NzKCdkaXNwbGF5JywgJ2Jsb2NrJyk7XG5cdFx0dGhpcy4kY2FyZCA9IHRoaXMuJHdpZGdldC5maW5kKCc+IC5NYWluSW50ZXJhY3RpdmVDYXJkJyk7XG5cdFx0dGhpcy4kaGVhZGVyID0gdGhpcy4kd2lkZ2V0LmZpbmQoJz4gLk1haW5JbnRlcmFjdGl2ZUNhcmQgPiAuTWFpbkludGVyYWN0aXZlQ2FyZC1oZWFkZXInKTtcblx0XHR0aGlzLiRoZWFkZXJUZXh0ID0gdGhpcy4kaGVhZGVyLmZpbmQoJy5NYWluSW50ZXJhY3RpdmVDYXJkLWhlYWRlci10ZXh0Jyk7XG5cdFx0dGhpcy4kZXhwYW5kSWNvbiA9IHRoaXMuJGhlYWRlci5maW5kKCcuTWFpbkludGVyYWN0aXZlQ2FyZC1leHBhbmQtaWNvbicpO1xuXHRcdHRoaXMuJGJvZHkgPSB0aGlzLiR3aWRnZXQuZmluZCgnPiAuTWFpbkludGVyYWN0aXZlQ2FyZCA+IGRpdiA+IC5NYWluSW50ZXJhY3RpdmVDYXJkLWJvZHknKTtcblx0XHR0aGlzLiRhY3Rpb25zID0gdGhpcy4kd2lkZ2V0LmZpbmQoXG5cdFx0XHQnPiAuTWFpbkludGVyYWN0aXZlQ2FyZCA+IC5NYWluSW50ZXJhY3RpdmVDYXJkLWhlYWRlciAuTWFpbkludGVyYWN0aXZlQ2FyZC1oZWFkZXItYWN0aW9ucydcblx0XHQpO1xuXHRcdHRoaXMuJGNhcHRpb24gPSB0aGlzLiR3aWRnZXQuZmluZChcblx0XHRcdCc+IC5NYWluSW50ZXJhY3RpdmVDYXJkID4gLk1haW5JbnRlcmFjdGl2ZUNhcmQtaGVhZGVyIC5NYWluSW50ZXJhY3RpdmVDYXJkLWhlYWRlci10ZXh0LWNhcHRpb24nXG5cdFx0KTtcblx0XHR0aGlzLiR0aXRsZSA9IHRoaXMuJHdpZGdldC5maW5kKFxuXHRcdFx0Jz4gLk1haW5JbnRlcmFjdGl2ZUNhcmQgPiAuTWFpbkludGVyYWN0aXZlQ2FyZC1oZWFkZXIgLk1haW5JbnRlcmFjdGl2ZUNhcmQtaGVhZGVyLXRleHQtdGl0bGUnXG5cdFx0KTtcblx0XHR0aGlzLiRzdWJUaXRsZSA9IHRoaXMuJHdpZGdldC5maW5kKFxuXHRcdFx0Jz4gLk1haW5JbnRlcmFjdGl2ZUNhcmQgPiAuTWFpbkludGVyYWN0aXZlQ2FyZC1oZWFkZXIgLk1haW5JbnRlcmFjdGl2ZUNhcmQtaGVhZGVyLXRleHQtc3VidGl0bGUnXG5cdFx0KTtcblx0XHR0aGlzLiRzZWxlY3RUcmlnZ2VyID0gdGhpcy4kd2lkZ2V0LmZpbmQoXG5cdFx0XHQnPiAuTWFpbkludGVyYWN0aXZlQ2FyZCA+IC5NYWluSW50ZXJhY3RpdmVDYXJkLWhlYWRlciA+IC5NYWluSW50ZXJhY3RpdmVDYXJkLWhlYWRlci1zZWxlY3RhYmxlID4gLk1haW5JbnRlcmFjdGl2ZUNhcmQtaGVhZGVyLXNlbGVjdGFibGUtdHJpZ2dlcidcblx0XHQpO1xuXHRcdHRoaXMuJHNlbGVjdFBsYWNlaG9sZGVyID0gdGhpcy4kd2lkZ2V0LmZpbmQoXG5cdFx0XHQnPiAuTWFpbkludGVyYWN0aXZlQ2FyZCA+IC5NYWluSW50ZXJhY3RpdmVDYXJkLWhlYWRlciAuTWFpbkludGVyYWN0aXZlQ2FyZC1oZWFkZXItc2VsZWN0YWJsZS1wbGFjZWhvbGRlcidcblx0XHQpO1xuXHRcdHRoaXMuJHRyaWdnZXJQbGFjZWhvbGRlciA9IHRoaXMuJHdpZGdldC5maW5kKFxuXHRcdFx0Jz4gLk1haW5JbnRlcmFjdGl2ZUNhcmQgPiAuTWFpbkludGVyYWN0aXZlQ2FyZC1oZWFkZXItdHJpZ2dlckFjdGlvbi1wbGFjZWhvbGRlcidcblx0XHQpO1xuXG5cdFx0aWYgKHRoaXMuJHRyaWdnZXJQbGFjZWhvbGRlci5maW5kKCdhJykubGVuZ3RoID09PSAxKSB7XG5cdFx0XHR0aGlzLiR0cmlnZ2VyID0gdGhpcy4kdHJpZ2dlclBsYWNlaG9sZGVyLmZpbmQoJ2EnKTtcblx0XHR9XG5cblx0XHRpZiAodGhpcy5pc09wZW4pIHtcblx0XHRcdHRoaXMub3BlbihmYWxzZSwgLTEpO1xuXHRcdFx0dGhpcy4kY2FyZC5hZGRDbGFzcygnZm9yY2VPcGVuJyk7XG5cdFx0fVxuXG5cdFx0dGhpcy4kY2FyZC5hZGRDbGFzcyh0aGlzLmhlYWRlckhlaWdodFdoZW5PcGVuICsgJ0hlYWRlcicpO1xuXG5cdFx0aWYgKHRoaXMuYWxsb3dPcGVuaW5nKSB7XG5cdFx0XHR0aGlzLiRjYXJkLmFkZENsYXNzKCdhbGxvd09wZW5pbmcnKTtcblx0XHR9XG5cblx0XHR0aGlzLmF0dGFjaEV2ZW50cygpO1xuXG5cdFx0dmFyIG9ic2VydmVyID0gbmV3IE11dGF0aW9uT2JzZXJ2ZXIoZnVuY3Rpb24obXV0YXRpb25zKSB7XG5cdFx0XHRtdXRhdGlvbnMuZm9yRWFjaChmdW5jdGlvbihtdXRhdGlvbiwgaW5kZXgpIHtcblx0XHRcdFx0X3RoaXMuaGFuZGxlSGVhZGVyV2l0aEFic29sdXRlQnV0dG9ucygpO1xuXHRcdFx0fSk7XG5cdFx0fSk7XG5cblx0XHRvYnNlcnZlci5vYnNlcnZlKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGNvbmZpZy53aWRnZXRJZCksIHtcblx0XHRcdGNoaWxkTGlzdDogdHJ1ZSxcblx0XHRcdHN1YnRyZWU6IHRydWUsXG5cdFx0XHRhdHRyaWJ1dGVzOiBmYWxzZSxcblx0XHR9KTtcblx0fTtcblxuXHRNYWluSW50ZXJhY3RpdmVDYXJkLnByb3RvdHlwZS5oYW5kbGVIZWFkZXJXaXRoQWJzb2x1dGVCdXR0b25zID0gZnVuY3Rpb24oKSB7XG5cdFx0dmFyIF90aGlzID0gdGhpcztcblx0XHRpZiAoISF0aGlzLiRib2R5LmZpbmQoJz4gZGl2IC5NYWluSW50ZXJhY3RpdmVDYXJkLWFic29sdXRlLWFjdGlvbnMnKS5sZW5ndGggJiYgdGhpcy5pc09wZW4pIHtcblx0XHRcdHZhciBhYnNvbHV0ZUFjdGlvbnNXaWR0aCA9IE1hdGgubWF4LmFwcGx5KFxuXHRcdFx0XHRNYXRoLFxuXHRcdFx0XHR0aGlzLiRib2R5XG5cdFx0XHRcdFx0LmZpbmQoJz4gZGl2IC5NYWluSW50ZXJhY3RpdmVDYXJkLWFic29sdXRlLWFjdGlvbnMnKVxuXHRcdFx0XHRcdC5tYXAoZnVuY3Rpb24oKSB7XG5cdFx0XHRcdFx0XHRyZXR1cm4gJCh0aGlzKS5vdXRlcldpZHRoKHRydWUpO1xuXHRcdFx0XHRcdH0pXG5cdFx0XHRcdFx0LmdldCgpXG5cdFx0XHQpO1xuXHRcdFx0dmFyIGhlYWRlck1heFdpZHRoID0gdGhpcy4kaGVhZGVyLndpZHRoKCkgLSBhYnNvbHV0ZUFjdGlvbnNXaWR0aDtcblx0XHRcdGlmIChoZWFkZXJNYXhXaWR0aCA+IDEwKSB7XG5cdFx0XHRcdHRoaXMuJGhlYWRlclRleHQuY3NzKHtcblx0XHRcdFx0XHRtYXhXaWR0aDogaGVhZGVyTWF4V2lkdGggKyAncHgnLFxuXHRcdFx0XHR9KTtcblx0XHRcdH1cblx0XHRcdHRoaXMuJGJvZHlcblx0XHRcdFx0LmZpbmQoJz4gZGl2IC5NYWluSW50ZXJhY3RpdmVDYXJkLWFic29sdXRlLWFjdGlvbnMgLk1haW5JbnRlcmFjdGl2ZUNhcmQtLWNsb3NlJylcblx0XHRcdFx0Lm9mZignY2xpY2snKVxuXHRcdFx0XHQub24oJ2NsaWNrJywgZnVuY3Rpb24oZSkge1xuXHRcdFx0XHRcdGUucHJldmVudERlZmF1bHQoKTtcblx0XHRcdFx0XHRfdGhpcy5jbG9zZSgpO1xuXHRcdFx0XHR9KTtcblx0XHR9XG5cdH07XG5cblx0TWFpbkludGVyYWN0aXZlQ2FyZC5wcm90b3R5cGUuYXR0YWNoRXZlbnRzID0gZnVuY3Rpb24oKSB7XG5cdFx0dmFyIF90aGlzID0gdGhpcztcblx0XHR0aGlzLiRoZWFkZXJcblx0XHRcdC5maW5kKCcuTWFpbkludGVyYWN0aXZlQ2FyZC0tb3Blbjpub3QoW2Rpc2FibGVkXSknKVxuXHRcdFx0Lm9mZignY2xpY2snKVxuXHRcdFx0Lm9uKCdjbGljaycsIGZ1bmN0aW9uKGUpIHtcblx0XHRcdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdFx0XHRfdGhpcy5vcGVuKHRydWUpO1xuXHRcdFx0fSk7XG5cdFx0dGhpcy4kaGVhZGVyXG5cdFx0XHQuZmluZCgnLk1haW5JbnRlcmFjdGl2ZUNhcmQtLWNsb3NlJylcblx0XHRcdC5vZmYoJ2NsaWNrJylcblx0XHRcdC5vbignY2xpY2snLCBmdW5jdGlvbihlKSB7XG5cdFx0XHRcdGUucHJldmVudERlZmF1bHQoKTtcblx0XHRcdFx0X3RoaXMuY2xvc2UoKTtcblx0XHRcdH0pO1xuXHRcdGlmICh0aGlzLmFsbG93T3BlbmluZykge1xuXHRcdFx0Y29uc3QgY2xpY2tBY3Rpb24gPSBmdW5jdGlvbihldnQpIHtcblx0XHRcdFx0aWYgKCQoZXZ0LnRhcmdldCkuaGFzQ2xhc3MoJ0J1dHRvbicpKSB7XG5cdFx0XHRcdFx0Ly8gdGhlIHVzZXIgY2xpY2tlZCBvbiBhIEJ1dHRvbiBpbnNpZGUgdGhlIGhlYWRlciwgbm90aGluZyB0byBkbyBoZXJlXG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0aWYgKF90aGlzLmlzT3Blbikge1xuXHRcdFx0XHRcdFx0aWYgKFxuXHRcdFx0XHRcdFx0XHRfdGhpcy4kd2lkZ2V0LmZpbmQoJ2lmcmFtZScpLmxlbmd0aCA9PT0gMSAmJlxuXHRcdFx0XHRcdFx0XHQhX3RoaXMuJHdpZGdldC5maW5kKCdpZnJhbWUnKS5oYXNDbGFzcygnY2tlX3d5c2l3eWdfZnJhbWUnKVxuXHRcdFx0XHRcdFx0KSB7XG5cdFx0XHRcdFx0XHRcdC8vIGRvIG5vdCBjbG9zZSB3aGVuIGFuZCBpZnJhbWUgZXhpc3RzXG5cdFx0XHRcdFx0XHR9IGVsc2UgaWYgKFxuXHRcdFx0XHRcdFx0XHRfdGhpcy4kYWN0aW9ucy5maW5kKCdhJykubGVuZ3RoID4gMCAmJlxuXHRcdFx0XHRcdFx0XHRfdGhpcy4kYWN0aW9ucy5maW5kKCcuTWFpbkludGVyYWN0aXZlQ2FyZC0tY2xvc2UnKS5sZW5ndGggPiAwXG5cdFx0XHRcdFx0XHQpIHtcblx0XHRcdFx0XHRcdFx0Ly8gZG8gbm90IGNsb3NlIHdoZW4gdGhlIGNhcmQgaGFzIGFjdGlvbnNcblx0XHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRcdF90aGlzLmNsb3NlKCk7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdF90aGlzLm9wZW4odHJ1ZSk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9O1xuXG5cdFx0XHR0aGlzLiRoZWFkZXJUZXh0Lm9mZignY2xpY2snKS5vbignY2xpY2snLCBmdW5jdGlvbihlKSB7XG5cdFx0XHRcdGNsaWNrQWN0aW9uKGUpO1xuXHRcdFx0fSk7XG5cdFx0XHR0aGlzLiRleHBhbmRJY29uLm9mZignY2xpY2snKS5vbignY2xpY2snLCBmdW5jdGlvbihlKSB7XG5cdFx0XHRcdGNsaWNrQWN0aW9uKGUpO1xuXHRcdFx0fSk7XG5cdFx0fVxuXHRcdGlmICh0aGlzLmlzU2VsZWN0YWJsZSkge1xuXHRcdFx0dGhpcy4kc2VsZWN0VHJpZ2dlci5vZmYoJ2NsaWNrJykub24oJ2NsaWNrJywgZnVuY3Rpb24oZSkge1xuXHRcdFx0XHRpZiAoX3RoaXMuJHNlbGVjdFBsYWNlaG9sZGVyLmZpbmQoJ2EnKS5sZW5ndGggPT09IDEpIHtcblx0XHRcdFx0XHRfdGhpcy4kc2VsZWN0UGxhY2Vob2xkZXIuZmluZCgnYScpLmNsaWNrKCk7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0Y29uc29sZS53YXJuKCdZb3UgbmVlZCAxIGxpbmsgaW4gdGhpcyBwbGFjZWhvbGRlci4nKTtcblx0XHRcdFx0fVxuXHRcdFx0fSk7XG5cdFx0fVxuXHR9O1xuXG5cdE1haW5JbnRlcmFjdGl2ZUNhcmQucHJvdG90eXBlLm9wZW4gPSBmdW5jdGlvbihzZW5kTm90aWZ5LCBkdXJhdGlvbikge1xuXHRcdHZhciBkdXJhdGlvbiA9IGR1cmF0aW9uIHx8IGRlZmF1bHREdXJhdGlvbjtcblx0XHR0aGlzLmlzT3BlbiA9IHRydWU7XG5cdFx0dGhpcy4kY2FyZC5hZGRDbGFzcygnaXNPcGVuJyk7XG5cdFx0aWYgKHRoaXMuaGlkZUFjdGlvbnNPbk9wZW4pIHtcblx0XHRcdHRoaXMuJGFjdGlvbnMuY3NzKCdkaXNwbGF5JywgJ25vbmUnKTtcblx0XHR9XG5cdFx0aWYgKHRoaXMuaGlkZVRpdGxlT25PcGVuKSB7XG5cdFx0XHR0aGlzLiR0aXRsZS5jc3MoJ2Rpc3BsYXknLCAnbm9uZScpO1xuXHRcdH1cblx0XHRpZiAodGhpcy5oaWRlU3ViVGl0bGVPbk9wZW4pIHtcblx0XHRcdHRoaXMuJHN1YlRpdGxlLmNzcygnZGlzcGxheScsICdub25lJyk7XG5cdFx0fVxuXHRcdGlmICh0aGlzLmhpZGVDYXB0aW9uT25PcGVuKSB7XG5cdFx0XHR0aGlzLiRjYXB0aW9uLmNzcygnZGlzcGxheScsICdub25lJyk7XG5cdFx0fVxuXHRcdGlmICh0aGlzLmVtaXROb3RpZnlPbk9wZW4pIHtcblx0XHRcdGlmIChzZW5kTm90aWZ5KSB7XG5cdFx0XHRcdE9zTm90aWZ5V2lkZ2V0KHRoaXMuTWFpbkludGVyYWN0aXZlQ2FyZEZha2VOb3RpZnlJZCwgJ29wZW4nKTtcblx0XHRcdH1cblx0XHRcdHRoaXMuJGJvZHkuY3NzKCdkaXNwbGF5JywgJ2Jsb2NrJyk7XG5cdFx0fSBlbHNlIGlmICh0aGlzLiR0cmlnZ2VyKSB7XG5cdFx0XHR0aGlzLiR0cmlnZ2VyLmNsaWNrKCk7XG5cdFx0XHR0aGlzLiRib2R5LmNzcygnZGlzcGxheScsICdibG9jaycpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRpZiAoZHVyYXRpb24gPiAwKSB7XG5cdFx0XHRcdHRoaXMuJGJvZHkuc2xpZGVEb3duKGR1cmF0aW9uKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHRoaXMuJGJvZHkuY3NzKCdkaXNwbGF5JywgJ2Jsb2NrJyk7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGlmICh0aGlzLiR3aWRnZXQuZmluZCgnaWZyYW1lJykubGVuZ3RoID09PSAxICYmICF0aGlzLiR3aWRnZXQuZmluZCgnaWZyYW1lJykuaGFzQ2xhc3MoJ2NrZV93eXNpd3lnX2ZyYW1lJykpIHtcblx0XHRcdHZhciBpZnJhbWVDb250ZW50cyA9IHRoaXMuJHdpZGdldC5maW5kKCdpZnJhbWUnKS5jb250ZW50cygpO1xuXHRcdFx0aWZyYW1lQ29udGVudHMuZmluZCgnLk1haW5JbnRlcmFjdGl2ZUNhcmQtaWZyYW1lLWFjdGlvbnMnKS5jc3MoJ3Zpc2liaWxpdHknLCAndmlzaWJsZScpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR0aGlzLmhhbmRsZUhlYWRlcldpdGhBYnNvbHV0ZUJ1dHRvbnMoKTtcblx0XHR9XG5cdFx0aWYgKCF0aGlzLmFsbG93TXVsdGlwbGVPcGVuKSB7XG5cdFx0XHRhbGxNYWluSW50ZXJhY3RpdmVDYXJkcy5mb3JFYWNoKGl0ZW0gPT4gKGl0ZW0gIT09IHRoaXMgJiYgaXRlbS5hbGxvd09wZW5pbmcgPyBpdGVtLmNsb3NlKGR1cmF0aW9uKSA6IG51bGwpKTtcblx0XHR9XG5cdH07XG5cblx0TWFpbkludGVyYWN0aXZlQ2FyZC5wcm90b3R5cGUuY2xvc2UgPSBmdW5jdGlvbihkdXJhdGlvbikge1xuXHRcdHZhciBzZWxmID0gdGhpcztcblx0XHR2YXIgZHVyYXRpb24gPSBkdXJhdGlvbiB8fCBkZWZhdWx0RHVyYXRpb247XG5cdFx0dGhpcy5pc09wZW4gPSBmYWxzZTtcblx0XHR0aGlzLiRjYXJkLnJlbW92ZUNsYXNzKCdpc09wZW4nKTtcblx0XHRpZiAodGhpcy4kd2lkZ2V0LmZpbmQoJ2lmcmFtZScpLmxlbmd0aCA9PT0gMSAmJiAhdGhpcy4kd2lkZ2V0LmZpbmQoJ2lmcmFtZScpLmhhc0NsYXNzKCdja2Vfd3lzaXd5Z19mcmFtZScpKSB7XG5cdFx0XHR0aGlzLiR3aWRnZXRcblx0XHRcdFx0LmZpbmQoJ2lmcmFtZScpXG5cdFx0XHRcdC5maW5kKCcuTWFpbkludGVyYWN0aXZlQ2FyZC1pZnJhbWUtYWN0aW9ucycpXG5cdFx0XHRcdC5jc3MoJ3Zpc2liaWxpdHknLCAnaGlkZGVuJyk7XG5cdFx0fVxuXHRcdHRoaXMuJGJvZHkuc2xpZGVVcChkdXJhdGlvbiwgZnVuY3Rpb24oKSB7XG5cdFx0XHRpZiAoc2VsZi4kY2FyZC5oYXNDbGFzcygnZm9yY2VPcGVuJykpIHtcblx0XHRcdFx0c2VsZi4kY2FyZC5yZW1vdmVDbGFzcygnZm9yY2VPcGVuJyk7XG5cdFx0XHR9XG5cdFx0fSk7XG5cdFx0aWYgKHRoaXMuaGlkZUFjdGlvbnNPbk9wZW4pIHtcblx0XHRcdHRoaXMuJGFjdGlvbnMuc2hvdygpO1xuXHRcdH1cblx0XHRpZiAodGhpcy5oaWRlVGl0bGVPbk9wZW4pIHtcblx0XHRcdHRoaXMuJHRpdGxlLmNzcygnZGlzcGxheScsICdibG9jaycpO1xuXHRcdH1cblx0XHRpZiAodGhpcy5oaWRlU3ViVGl0bGVPbk9wZW4pIHtcblx0XHRcdHRoaXMuJHN1YlRpdGxlLmNzcygnZGlzcGxheScsICdibG9jaycpO1xuXHRcdH1cblx0XHRpZiAodGhpcy5oaWRlQ2FwdGlvbk9uT3Blbikge1xuXHRcdFx0dGhpcy4kY2FwdGlvbi5jc3MoJ2Rpc3BsYXknLCAnYmxvY2snKTtcblx0XHR9XG5cblx0XHRpZiAodGhpcy4kaGVhZGVyLndpZHRoKCkgLSB0aGlzLiRhY3Rpb25zLndpZHRoKCkgPiAxMCkge1xuXHRcdFx0dGhpcy4kaGVhZGVyVGV4dC5jc3Moe1xuXHRcdFx0XHRtYXhXaWR0aDogdGhpcy4kaGVhZGVyLndpZHRoKCkgLSB0aGlzLiRhY3Rpb25zLndpZHRoKCkgKyAncHgnLFxuXHRcdFx0fSk7XG5cdFx0fVxuXHR9O1xuXG5cdE1haW5JbnRlcmFjdGl2ZUNhcmQucHJvdG90eXBlLmlzT3BlbiA9IGZ1bmN0aW9uKCkge1xuXHRcdHJldHVybiB0aGlzLmlzT3Blbjtcblx0fTtcblxuXHRTYXBwaGlyZVdpZGdldHMuTWFpbkludGVyYWN0aXZlQ2FyZCA9IHtcblx0XHRjcmVhdGU6IGNyZWF0ZSxcblx0XHRhbGw6IGZ1bmN0aW9uKCkge1xuXHRcdFx0cmV0dXJuIGFsbE1haW5JbnRlcmFjdGl2ZUNhcmRzO1xuXHRcdH0sXG5cdH07XG59KShqUXVlcnksIHdpbmRvdywgZG9jdW1lbnQsIFNhcHBoaXJlV2lkZ2V0cyk7XG5cbiQod2luZG93KS5sb2FkKGZ1bmN0aW9uKCkge1xuXHRpZiAoISEkKCcuTWFpbkludGVyYWN0aXZlQ2FyZCcpLmxlbmd0aCkge1xuXHRcdGlmICghISFTYXBwaGlyZVdpZGdldHMuTWFpbkludGVyYWN0aXZlQ2FyZC5hZnRlckFqYXhSZXF1ZXN0QmluZGVkKSB7XG5cdFx0XHRvc0FqYXhCYWNrZW5kLkJpbmRBZnRlckFqYXhSZXF1ZXN0KGZ1bmN0aW9uKCkge1xuXHRcdFx0XHR2YXIgYWxsTWFpbkludGVyYWN0aXZlQ2FyZHMgPSBTYXBwaGlyZVdpZGdldHMuTWFpbkludGVyYWN0aXZlQ2FyZC5hbGwoKTtcblx0XHRcdFx0YWxsTWFpbkludGVyYWN0aXZlQ2FyZHMuZm9yRWFjaChmdW5jdGlvbihlbGVtZW50KSB7XG5cdFx0XHRcdFx0ZWxlbWVudC5oYW5kbGVIZWFkZXJXaXRoQWJzb2x1dGVCdXR0b25zKCk7XG5cdFx0XHRcdH0pO1xuXHRcdFx0fSk7XG5cdFx0XHRTYXBwaGlyZVdpZGdldHMuTWFpbkludGVyYWN0aXZlQ2FyZC5hZnRlckFqYXhSZXF1ZXN0QmluZGVkID0gdHJ1ZTtcblx0XHR9XG5cdH1cblxuXHRzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuXHRcdHZhciBhbGxNYWluSW50ZXJhY3RpdmVDYXJkcyA9IFNhcHBoaXJlV2lkZ2V0cy5NYWluSW50ZXJhY3RpdmVDYXJkLmFsbCgpO1xuXHRcdGFsbE1haW5JbnRlcmFjdGl2ZUNhcmRzLmZvckVhY2goZnVuY3Rpb24oZWxlbWVudCkge1xuXHRcdFx0ZWxlbWVudC5oYW5kbGVIZWFkZXJXaXRoQWJzb2x1dGVCdXR0b25zKCk7XG5cdFx0fSk7XG5cdH0sIDEwMDApO1xufSk7XG4iLCIvKiBDb21wb25lbnQgTWVudUJhciAqL1xuU2FwcGhpcmVXaWRnZXRzLk1lbnVCYXIgPSBmdW5jdGlvbihjb25maWcpIHtcblx0JChmdW5jdGlvbigpIHtcblx0XHR2YXIgJG1lbnVXaWRnZXQgPSAkKCcjJyArIGNvbmZpZy5tZW51V2lkZ2V0KTtcblxuXHRcdHZhciBtZW51UmVzaWRlciA9IGZ1bmN0aW9uKCkge1xuXHRcdFx0dmFyIG5hdldpZHRoID0gMDtcblx0XHRcdHZhciBhdmFpbGFiZUVzcGFjZSA9ICRtZW51V2lkZ2V0LmZpbmQoJy5NZW51YmFyX2l0ZW0nKS53aWR0aCgpO1xuXG5cdFx0XHQkbWVudVdpZGdldC5maW5kKCcuTWVudWJhcl9pdGVtIC5NZW51SXRlbScpLmVhY2goZnVuY3Rpb24oKSB7XG5cdFx0XHRcdG5hdldpZHRoICs9ICQodGhpcykub3V0ZXJXaWR0aCh0cnVlKTtcblx0XHRcdH0pO1xuXG5cdFx0XHRpZiAobmF2V2lkdGggPiBhdmFpbGFiZUVzcGFjZSkge1xuXHRcdFx0XHR2YXIgbGFzdEl0ZW0gPSAkbWVudVdpZGdldC5maW5kKCcuTWVudWJhcl9pdGVtIC5NZW51SXRlbScpLmxhc3QoKTtcblx0XHRcdFx0bGFzdEl0ZW0uYXR0cignZGF0YS13aWR0aCcsIGxhc3RJdGVtLm91dGVyV2lkdGgodHJ1ZSkpO1xuXHRcdFx0XHRsYXN0SXRlbS5wcmVwZW5kVG8oJG1lbnVXaWRnZXQuZmluZCgnLk1lbnViYXJfX2V4dHJhQ29udGFpbmVyJykpO1xuXHRcdFx0XHRtZW51UmVzaWRlcigpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0dmFyIGZpcnN0TW9yZUVsZW1lbnQgPSAkbWVudVdpZGdldC5maW5kKCcuTWVudWJhcl9fZXh0cmFDb250YWluZXIgLk1lbnVJdGVtJykuZmlyc3QoKTtcblx0XHRcdFx0aWYgKG5hdldpZHRoICsgZmlyc3RNb3JlRWxlbWVudC5kYXRhKCd3aWR0aCcpIDwgYXZhaWxhYmVFc3BhY2UpIHtcblx0XHRcdFx0XHRmaXJzdE1vcmVFbGVtZW50Lmluc2VydEFmdGVyKCRtZW51V2lkZ2V0LmZpbmQoJy5NZW51YmFyX2l0ZW0gLk1lbnVJdGVtJykubGFzdCgpKTtcblx0XHRcdFx0XHRtZW51UmVzaWRlcigpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdGlmICghJG1lbnVXaWRnZXQuZmluZCgnLk1lbnViYXJfX2V4dHJhQ29udGFpbmVyJykuaXMoJzplbXB0eScpKSB7XG5cdFx0XHRcdCRtZW51V2lkZ2V0LmZpbmQoJy5NZW51YmFyX2V4dHJhSXRlbScpLmFkZENsYXNzKCdzaG93Jyk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHQkbWVudVdpZGdldC5maW5kKCcuTWVudWJhcl9leHRyYUl0ZW0nKS5yZW1vdmVDbGFzcygnc2hvdycpO1xuXHRcdFx0fVxuXHRcdH07XG5cblx0XHQkbWVudVdpZGdldC5maW5kKCcuTWVudUl0ZW0nKS5jbGljayhmdW5jdGlvbigpIHtcblx0XHRcdGlmIChcblx0XHRcdFx0ISQodGhpcylcblx0XHRcdFx0XHQucGFyZW50KClcblx0XHRcdFx0XHQuaGFzQ2xhc3MoJ01lbnViYXJfX2V4dHJhQ29udGFpbmVyJylcblx0XHRcdCkge1xuXHRcdFx0XHRpZiAoISQodGhpcykuaGFzQ2xhc3MoJ2FjdGl2ZScpICYmICEkKHRoaXMpLmhhc0NsYXNzKCdhY3RpdmVJbmRpY2F0b3InKSkge1xuXHRcdFx0XHRcdCQodGhpcykuYWRkQ2xhc3MoJ2FjdGl2ZScpO1xuXHRcdFx0XHRcdCRtZW51V2lkZ2V0LmZpbmQoJy5hY3RpdmVJbmRpY2F0b3InKS5hZGRDbGFzcygnc2hhZG93Jyk7XG5cdFx0XHRcdFx0JCh0aGlzKVxuXHRcdFx0XHRcdFx0LmZpbmQoJy5NZW51SXRlbV9zdWJJdGVtcycpXG5cdFx0XHRcdFx0XHQudG9nZ2xlQ2xhc3MoJ3Nob3cnKTtcblx0XHRcdFx0fSBlbHNlIGlmICghJCh0aGlzKS5oYXNDbGFzcygnYWN0aXZlJykgJiYgJCh0aGlzKS5oYXNDbGFzcygnYWN0aXZlSW5kaWNhdG9yJykpIHtcblx0XHRcdFx0XHQkKHRoaXMpLmFkZENsYXNzKCdhY3RpdmUnKTtcblx0XHRcdFx0XHQkKHRoaXMpXG5cdFx0XHRcdFx0XHQuZmluZCgnLk1lbnVJdGVtX3N1Ykl0ZW1zJylcblx0XHRcdFx0XHRcdC50b2dnbGVDbGFzcygnc2hvdycpO1xuXHRcdFx0XHR9XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHQkKHRoaXMpXG5cdFx0XHRcdFx0LmZpbmQoJy5NZW51SXRlbV9zdWJJdGVtcycpXG5cdFx0XHRcdFx0LnRvZ2dsZUNsYXNzKCdzaG93Jyk7XG5cdFx0XHR9XG5cdFx0fSk7XG5cblx0XHQkbWVudVdpZGdldC5maW5kKCcuTWVudWJhcl9leHRyYUl0ZW0gLmljb24nKS5jbGljayhmdW5jdGlvbigpIHtcblx0XHRcdCRtZW51V2lkZ2V0LmZpbmQoJy5NZW51YmFyX19leHRyYUNvbnRhaW5lciAnKS50b2dnbGVDbGFzcygnc2hvdycpO1xuXHRcdH0pO1xuXG5cdFx0JChkb2N1bWVudCkubW91c2V1cChlID0+IHtcblx0XHRcdHZhciAkbWVudSA9ICRtZW51V2lkZ2V0LmZpbmQoJy5NZW51SXRlbS5hY3RpdmUnKTtcblx0XHRcdHZhciAkbW9yZU9wdGlvbnMgPSAkbWVudVdpZGdldC5maW5kKCcuTWVudWJhcl9leHRyYUl0ZW0nKTtcblxuXHRcdFx0Ly8gaWYgdGhlIHRhcmdldCBvZiB0aGUgY2xpY2sgaXNuJ3QgdGhlIG1lbnUgb3IgYSBkZXNjZW5kYW50IG9mIHRoZSBtZW51XG5cdFx0XHRpZiAoJG1lbnUubGVuZ3RoID4gMCkge1xuXHRcdFx0XHRpZiAoISRtZW51LmlzKGUudGFyZ2V0KSAmJiAkbWVudS5oYXMoZS50YXJnZXQpLmxlbmd0aCA9PT0gMCkge1xuXHRcdFx0XHRcdCRtZW51LmZpbmQoJy5NZW51SXRlbV9zdWJJdGVtcycpLnJlbW92ZUNsYXNzKCdzaG93Jyk7XG5cdFx0XHRcdFx0JCgnLmFjdGl2ZUluZGljYXRvcicpLnJlbW92ZUNsYXNzKCdzaGFkb3cnKTtcblx0XHRcdFx0XHQkbWVudVdpZGdldC5maW5kKCcuTWVudUl0ZW0uYWN0aXZlJykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdGlmICghJG1vcmVPcHRpb25zLmlzKGUudGFyZ2V0KSAmJiAkbW9yZU9wdGlvbnMuaGFzKGUudGFyZ2V0KS5sZW5ndGggPT09IDApIHtcblx0XHRcdFx0JG1vcmVPcHRpb25zLmZpbmQoJy5NZW51YmFyX19leHRyYUNvbnRhaW5lcicpLnJlbW92ZUNsYXNzKCdzaG93Jyk7XG5cdFx0XHRcdCQoJy5hY3RpdmVJbmRpY2F0b3InKS5yZW1vdmVDbGFzcygnc2hhZG93Jyk7XG5cdFx0XHR9XG5cdFx0fSk7XG5cblx0XHQkKHdpbmRvdykub24oJ3Jlc2l6ZSBsb2FkJywgZnVuY3Rpb24oKSB7XG5cdFx0XHRtZW51UmVzaWRlcigpO1xuXHRcdH0pO1xuXHR9KTtcbn07XG4iLCIvKiBDb21wb25lbnQgTXVsdGlwbGVTZWxlY3Rpb25CdXR0b24gKi9cblNhcHBoaXJlV2lkZ2V0cy5NdWx0aXBsZVNlbGVjdGlvbkJ1dHRvbiA9IGZ1bmN0aW9uKFdyYXBwZXJJZCkge1xuXHRjb25zdCAkd2lkZ2V0ID0gJChXcmFwcGVySWQpO1xuXHRjb25zdCAkY29udHJvbCA9ICR3aWRnZXQuZmluZCgnaW5wdXRbdHlwZT1cImNoZWNrYm94XCJdJyk7XG5cblx0aWYgKCQoV3JhcHBlcklkICsgJyBpbnB1dFt0eXBlPVwiY2hlY2tib3hcIl0nKS5pcygnOmRpc2FibGVkJykpIHtcblx0XHQkd2lkZ2V0LmFkZENsYXNzKCdkaXNhYmxlZCcpO1xuXHR9IGVsc2Uge1xuXHRcdCR3aWRnZXQucmVtb3ZlQ2xhc3MoJ2Rpc2FibGVkJyk7XG5cdH1cblxuXHRpZiAoJChXcmFwcGVySWQgKyAnIGlucHV0W3R5cGU9XCJjaGVja2JveFwiXScpLmlzKCc6Y2hlY2tlZCcpKSB7XG5cdFx0JHdpZGdldC5hZGRDbGFzcygnYWN0aXZlJyk7XG5cdH0gZWxzZSB7XG5cdFx0JHdpZGdldC5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XG5cdH1cblxuXHQkd2lkZ2V0LmZpbmQoJ2lucHV0W3R5cGU9XCJjaGVja2JveFwiXScpLmNoYW5nZShmdW5jdGlvbigpIHtcblx0XHRjb25zdCAkcGFyZW50ID0gJCh0aGlzKS5wYXJlbnQoKTtcblxuXHRcdGlmICgkKHRoaXMpLmlzKCc6Y2hlY2tlZCcpKSAkcGFyZW50LnBhcmVudCgpLmFkZENsYXNzKCdhY3RpdmUnKTtcblx0XHRlbHNlICRwYXJlbnQucGFyZW50KCkucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xuXHR9KTtcblxuXHQkd2lkZ2V0LmZpbmQoJy5NdWx0aXBsZVNlbGVjdGlvbkJ1dHRvbi1sYWJlbCcpLmNsaWNrKGZ1bmN0aW9uKCkge1xuXHRcdCRjb250cm9sWzBdLmNsaWNrKCk7XG5cblx0XHRzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuXHRcdFx0aWYgKCRjb250cm9sLmlzKCc6Y2hlY2tlZCcpKSAkd2lkZ2V0LmFkZENsYXNzKCdhY3RpdmUnKTtcblx0XHRcdGVsc2UgJHdpZGdldC5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XG5cdFx0fSwgMTApO1xuXHR9KTtcbn07XG4iLCIvKiBDb21wb25lbnQgQ29uZmlybWF0aW9uUGFuZWwzT3B0aW9ucyBDb25maXJtYXRpb25QYW5lbCBzYW1lIGphdmFzY3JpcHQgY29kZSovXG5cblNhcHBoaXJlV2lkZ2V0cy5Db25maXJtYXRpb25QYW5lbCA9IHtcblx0aXNBbnlQYW5lbE9wZW5lZDogZnVuY3Rpb24oKSB7XG5cdFx0cmV0dXJuICQoJ2JvZHknKS5oYXNDbGFzcygnUGFuZWxPcGVuZWQnKSAmJiAkKCcuUGFuZWxDb250YWluZXI6dmlzaWJsZScpLmxlbmd0aDtcblx0fSxcblxuXHR0b2dnbGVQYW5lbDogZnVuY3Rpb24oUGFuZWxJZCkge1xuXHRcdGlmICghT3NWYWxpZGF0b3JPblN1Ym1pdCgpKSByZXR1cm47XG5cblx0XHRpZiAoIVNhcHBoaXJlV2lkZ2V0cy5Db25maXJtYXRpb25QYW5lbC5pc0FueVBhbmVsT3BlbmVkKCkpIHtcblx0XHRcdCQoJ2JvZHknKS5hZGRDbGFzcygnUGFuZWxPcGVuZWQnKTtcblx0XHRcdCQoJyMnICsgUGFuZWxJZCkuZmFkZUluKDE0MCk7XG5cblx0XHRcdHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG5cdFx0XHRcdCQoJyMnICsgUGFuZWxJZClcblx0XHRcdFx0XHQuZmluZCgnLlBhbmVsQ29udGFpbmVyJylcblx0XHRcdFx0XHQuc2xpZGVUb2dnbGUoMTUwKTtcblx0XHRcdH0sIDEwMCk7XG5cblx0XHRcdGlmICh3aW5kb3cuZnJhbWVFbGVtZW50KSB7XG5cdFx0XHRcdFNhcHBoaXJlV2lkZ2V0cy5SZW1vdGVBcHBvaW50bWVudC5zZXRNb2RhbE1pbmltaXplZCgpO1xuXHRcdFx0fVxuXHRcdH1cblx0fSxcblxuXHRjbG9zZVBhbmVsOiBmdW5jdGlvbihQYW5lbElkKSB7XG5cdFx0JCgnYm9keScpLnJlbW92ZUNsYXNzKCdQYW5lbE9wZW5lZCcpO1xuXHRcdCQoJyMnICsgUGFuZWxJZCkuZmFkZU91dCgxNDApO1xuXG5cdFx0c2V0VGltZW91dChmdW5jdGlvbigpIHtcblx0XHRcdCQoJyMnICsgUGFuZWxJZClcblx0XHRcdFx0LmZpbmQoJy5QYW5lbENvbnRhaW5lcicpXG5cdFx0XHRcdC5zbGlkZVVwKDE1MCk7XG5cdFx0fSwgMTAwKTtcblx0fSxcblxuXHRzZXRQYW5lbEJlaGF2aW9yOiBmdW5jdGlvbigpIHtcblx0XHQkKCcuUGFuZWxbY29uZmlybWF0aW9uLXBhbmVsLXRyaWdnZXItZWxlbWVudGlkXScpLmVhY2goZnVuY3Rpb24oKSB7XG5cdFx0XHR2YXIgdGhpc19wYW5lbCA9ICQodGhpcyk7XG5cdFx0XHQkKCcjJyArIHRoaXNfcGFuZWwuYXR0cignY29uZmlybWF0aW9uLXBhbmVsLXRyaWdnZXItZWxlbWVudGlkJykgKyAnJylcblx0XHRcdFx0Lm9mZignY2xpY2snKVxuXHRcdFx0XHQub24oJ2NsaWNrJywgZnVuY3Rpb24oKSB7XG5cdFx0XHRcdFx0U2FwcGhpcmVXaWRnZXRzLkNvbmZpcm1hdGlvblBhbmVsLnRvZ2dsZVBhbmVsKHRoaXNfcGFuZWwuYXR0cignaWQnKSk7XG5cdFx0XHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdFx0XHR9KTtcblx0XHR9KTtcblx0fSxcbn07XG5cbiQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKCkge1xuXHRTYXBwaGlyZVdpZGdldHMuQ29uZmlybWF0aW9uUGFuZWwuc2V0UGFuZWxCZWhhdmlvcigpO1xuXHRpZiAob3NBamF4QmFja2VuZC5FdmVudEhhbmRsZXJzLkFmdGVyQWpheFJlcXVlc3QudG9TdHJpbmcoKS5pbmRleE9mKCdzZXRQYW5lbEJlaGF2aW9yJykgPT0gLTEpIHtcblx0XHRvc0FqYXhCYWNrZW5kLkJpbmRBZnRlckFqYXhSZXF1ZXN0KFNhcHBoaXJlV2lkZ2V0cy5Db25maXJtYXRpb25QYW5lbC5zZXRQYW5lbEJlaGF2aW9yKTtcblx0fVxufSk7XG4iLCIvKiBDb21wb25lbnQgQ29uZmlybWF0aW9uUG9wdXAgKi9cbnZhciBfaXNJbklmcmFtZSA9IHdpbmRvdy5mcmFtZUVsZW1lbnQgIT0gdW5kZWZpbmVkIHx8IGZhbHNlO1xuU2FwcGhpcmVXaWRnZXRzLkNvbmZpcm1hdGlvblBvcHVwID0ge1xuXHRpc0FueUNvbmZpcm1hdGlvbk9wZW5lZDogZnVuY3Rpb24oKSB7XG5cdFx0aWYgKF9pc0luSWZyYW1lKSB7XG5cdFx0XHRyZXR1cm4gd2luZG93LnRvcC4kKCdib2R5JykuaGFzQ2xhc3MoJ2NvbmZpcm1hdGlvbi1vcGVuZWQnKSAmJiB3aW5kb3cudG9wLiQoJy5jb25maXJtLWNvbnRhaW5lcjp2aXNpYmxlJykubGVuZ3RoO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRyZXR1cm4gJCgnYm9keScpLmhhc0NsYXNzKCdjb25maXJtYXRpb24tb3BlbmVkJykgJiYgJCgnLmNvbmZpcm0tY29udGFpbmVyOnZpc2libGUnKS5sZW5ndGg7XG5cdFx0fVxuXHR9LFxuXG5cdHRvZ2dsZUNvbmZpcm06IGZ1bmN0aW9uKF9pZCwgX3F1ZXN0aW9uLCBfbWVzc2FnZSwgX25vdGlmeUlkLCBfSGFzTm90aWZ5T25DYW5jZWwpIHtcblx0XHRpZiAoIU9zVmFsaWRhdG9yT25TdWJtaXQoKSkgcmV0dXJuO1xuXG5cdFx0aWYgKCF0aGlzLmlzQW55Q29uZmlybWF0aW9uT3BlbmVkKCkpIHtcblx0XHRcdHZhciBfYm9keSA9ICQoJ2JvZHknKTtcblx0XHRcdHZhciBfYm9keUpTID0gZG9jdW1lbnQuYm9keTtcblx0XHRcdGlmIChfaXNJbklmcmFtZSkge1xuXHRcdFx0XHRfYm9keSA9IHdpbmRvdy50b3AuJCgnYm9keScpO1xuXHRcdFx0XHRfYm9keUpTID0gd2luZG93LnRvcC5kb2N1bWVudC5ib2R5O1xuXHRcdFx0fVxuXG5cdFx0XHRfYm9keS5hZGRDbGFzcygnY29uZmlybWF0aW9uLW9wZW5lZCcpO1xuXG5cdFx0XHR2YXIgX2NvbmZpcm1JZCA9ICdjb25maXJtXycgKyBfaWQ7XG5cblx0XHRcdHZhciBfY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnRElWJyk7XG5cdFx0XHRfY29udGFpbmVyLnNldEF0dHJpYnV0ZSgnaWQnLCBfY29uZmlybUlkKTtcblx0XHRcdF9jb250YWluZXIuc2V0QXR0cmlidXRlKCdjbGFzcycsICdjb25maXJtIGNvbmZpcm0td2InKTtcblx0XHRcdF9jb250YWluZXIuc2V0QXR0cmlidXRlKCdjb25maXJtLXRyaWdnZXItZWxlbWVudGlkJywgX2lkKTtcblxuXHRcdFx0dmFyIF9iYWNrZ3JvdW5kID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnRElWJyk7XG5cdFx0XHRfYmFja2dyb3VuZC5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2NvbmZpcm0tYmFja2dyb3VuZCBjb25maXJtLXdiJyk7XG5cdFx0XHRfYmFja2dyb3VuZC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2JnXycgKyBfY29uZmlybUlkKTtcblx0XHRcdF9jb250YWluZXIuYXBwZW5kQ2hpbGQoX2JhY2tncm91bmQpO1xuXG5cdFx0XHR2YXIgX2NvbmZpcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdESVYnKTtcblx0XHRcdF9jb25maXJtLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnY29uZmlybS1jb250YWluZXIgY29uZmlybS13YicpO1xuXHRcdFx0X2NvbnRhaW5lci5hcHBlbmRDaGlsZChfY29uZmlybSk7XG5cblx0XHRcdHZhciBfY29uZmlybVRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnRElWJyk7XG5cdFx0XHRfY29uZmlybVRpdGxlLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnY29uZmlybS10aXRsZScpO1xuXHRcdFx0dmFyIF90aXRsZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKF9xdWVzdGlvbik7XG5cdFx0XHRfY29uZmlybVRpdGxlLmFwcGVuZENoaWxkKF90aXRsZSk7XG5cdFx0XHRfY29uZmlybS5hcHBlbmRDaGlsZChfY29uZmlybVRpdGxlKTtcblxuXHRcdFx0dmFyIF9jb25maXJtTXNnID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnRElWJyk7XG5cdFx0XHRfY29uZmlybU1zZy5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2NvbmZpcm0tbWVzc2FnZScpO1xuXG5cdFx0XHRfY29uZmlybU1zZy5pbm5lckhUTUwgPSBfbWVzc2FnZTsgLyogU2V0IEhUTUwgdG8gcmVuZGVyIHRoZSBtZXNzYWdlIEhUTUwgdGFncywgc2ltaWxhciB0byB0aGUgRXNjYXBlIENvbnRlbnQgc2V0IGFzIE5vLiAqL1xuXHRcdFx0X2NvbmZpcm0uYXBwZW5kQ2hpbGQoX2NvbmZpcm1Nc2cpO1xuXG5cdFx0XHR2YXIgX2NvbmZpcm1BY3Rpb25zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnRElWJyk7XG5cdFx0XHRfY29uZmlybUFjdGlvbnMuc2V0QXR0cmlidXRlKCdjbGFzcycsICdjb25maXJtLWFjdGlvbnMnKTtcblx0XHRcdF9jb25maXJtLmFwcGVuZENoaWxkKF9jb25maXJtQWN0aW9ucyk7XG5cblx0XHRcdHZhciBfbm9CdG5MbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdBJyk7XG5cdFx0XHRfbm9CdG5Mbmsuc2V0QXR0cmlidXRlKCdjbGFzcycsICdCdXR0b24gVGhpcmQgTXVsdGlNYXJnaW5SaWdodDEwJyk7XG5cdFx0XHRfbm9CdG5Mbmsuc2V0QXR0cmlidXRlKCdjYW5jZWwtYnV0dG9uJywgJ2NhbmNlbC1idXR0b24nKTtcblx0XHRcdF9ub0J0bkxuay5zZXRBdHRyaWJ1dGUoJ3VpJywgJ0NvbmZpcm1ObzEnKTtcblx0XHRcdGlmIChfSGFzTm90aWZ5T25DYW5jZWwgPT0gJ1RydWUnKSB7XG5cdFx0XHRcdGlmIChfaXNJbklmcmFtZSkge1xuXHRcdFx0XHRcdF9ub0J0bkxuay5zZXRBdHRyaWJ1dGUoXG5cdFx0XHRcdFx0XHQnb25jbGljaycsXG5cdFx0XHRcdFx0XHQnZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCInICtcblx0XHRcdFx0XHRcdFx0J2lmcmFtZV8nICtcblx0XHRcdFx0XHRcdFx0X2lkICtcblx0XHRcdFx0XHRcdFx0J1wiKS5jb250ZW50V2luZG93Lk9zTm90aWZ5V2lkZ2V0KFwiJyArXG5cdFx0XHRcdFx0XHRcdF9ub3RpZnlJZCArXG5cdFx0XHRcdFx0XHRcdCdcIixcIkNBTkNFTFwiKTsgU2FwcGhpcmVXaWRnZXRzLkNvbmZpcm1hdGlvblBvcHVwLmNsb3NlQ29uZmlybVBvcHVwKFwiJyArXG5cdFx0XHRcdFx0XHRcdF9jb25maXJtSWQgK1xuXHRcdFx0XHRcdFx0XHQnXCIpOydcblx0XHRcdFx0XHQpO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdF9ub0J0bkxuay5zZXRBdHRyaWJ1dGUoXG5cdFx0XHRcdFx0XHQnb25jbGljaycsXG5cdFx0XHRcdFx0XHQnT3NOb3RpZnlXaWRnZXQoXCInICtcblx0XHRcdFx0XHRcdFx0X25vdGlmeUlkICtcblx0XHRcdFx0XHRcdFx0J1wiLFwiQ0FOQ0VMXCIpOyBTYXBwaGlyZVdpZGdldHMuQ29uZmlybWF0aW9uUG9wdXAuY2xvc2VDb25maXJtUG9wdXAoXCInICtcblx0XHRcdFx0XHRcdFx0X2NvbmZpcm1JZCArXG5cdFx0XHRcdFx0XHRcdCdcIik7J1xuXHRcdFx0XHRcdCk7XG5cdFx0XHRcdH1cblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGlmIChfaXNJbklmcmFtZSkge1xuXHRcdFx0XHRcdF9ub0J0bkxuay5zZXRBdHRyaWJ1dGUoXG5cdFx0XHRcdFx0XHQnb25jbGljaycsXG5cdFx0XHRcdFx0XHQnU2FwcGhpcmVXaWRnZXRzLkNvbmZpcm1hdGlvblBvcHVwLmNsb3NlQ29uZmlybVBvcHVwKFwiJyArIF9jb25maXJtSWQgKyAnXCIpOydcblx0XHRcdFx0XHQpO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdF9ub0J0bkxuay5zZXRBdHRyaWJ1dGUoXG5cdFx0XHRcdFx0XHQnb25jbGljaycsXG5cdFx0XHRcdFx0XHQnU2FwcGhpcmVXaWRnZXRzLkNvbmZpcm1hdGlvblBvcHVwLmNsb3NlQ29uZmlybVBvcHVwKFwiJyArIF9jb25maXJtSWQgKyAnXCIpOydcblx0XHRcdFx0XHQpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdHZhciBfbm9CdG4gPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSgnTm8nKTtcblx0XHRcdF9ub0J0bkxuay5hcHBlbmRDaGlsZChfbm9CdG4pO1xuXHRcdFx0X2NvbmZpcm1BY3Rpb25zLmFwcGVuZENoaWxkKF9ub0J0bkxuayk7XG5cblx0XHRcdHZhciBfeWVzQnRuTG5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnQScpO1xuXHRcdFx0X3llc0J0bkxuay5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ0J1dHRvbiBTZXRBc1ZhbGlkIElzX0RlZmF1bHQnKTtcblx0XHRcdF95ZXNCdG5Mbmsuc2V0QXR0cmlidXRlKCdjYW5jZWwtYnV0dG9uJywgJycpO1xuXHRcdFx0X3llc0J0bkxuay5zZXRBdHRyaWJ1dGUoJ3VpJywgJ0NvbmZpcm1ZZXMxJyk7XG5cblx0XHRcdGlmIChfaXNJbklmcmFtZSkge1xuXHRcdFx0XHRfeWVzQnRuTG5rLnNldEF0dHJpYnV0ZShcblx0XHRcdFx0XHQnb25jbGljaycsXG5cdFx0XHRcdFx0J2RvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiJyArXG5cdFx0XHRcdFx0XHQnaWZyYW1lXycgK1xuXHRcdFx0XHRcdFx0X2lkICtcblx0XHRcdFx0XHRcdCdcIikuY29udGVudFdpbmRvdy5Pc05vdGlmeVdpZGdldChcIicgK1xuXHRcdFx0XHRcdFx0X25vdGlmeUlkICtcblx0XHRcdFx0XHRcdCdcIixcIk9LXCIpOyBTYXBwaGlyZVdpZGdldHMuQ29uZmlybWF0aW9uUG9wdXAuY2xvc2VDb25maXJtUG9wdXAoXCInICtcblx0XHRcdFx0XHRcdF9jb25maXJtSWQgK1xuXHRcdFx0XHRcdFx0J1wiKTsnXG5cdFx0XHRcdCk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRfeWVzQnRuTG5rLnNldEF0dHJpYnV0ZShcblx0XHRcdFx0XHQnb25jbGljaycsXG5cdFx0XHRcdFx0J09zTm90aWZ5V2lkZ2V0KFwiJyArXG5cdFx0XHRcdFx0XHRfbm90aWZ5SWQgK1xuXHRcdFx0XHRcdFx0J1wiLFwiT0tcIik7IFNhcHBoaXJlV2lkZ2V0cy5Db25maXJtYXRpb25Qb3B1cC5jbG9zZUNvbmZpcm1Qb3B1cChcIicgK1xuXHRcdFx0XHRcdFx0X2NvbmZpcm1JZCArXG5cdFx0XHRcdFx0XHQnXCIpOydcblx0XHRcdFx0KTtcblx0XHRcdH1cblx0XHRcdHZhciBfeWVzQnRuID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoJ1llcycpO1xuXHRcdFx0X3llc0J0bkxuay5hcHBlbmRDaGlsZChfeWVzQnRuKTtcblx0XHRcdF9jb25maXJtQWN0aW9ucy5hcHBlbmRDaGlsZChfeWVzQnRuTG5rKTtcblxuXHRcdFx0X2NvbmZpcm0uYXBwZW5kQ2hpbGQoX2NvbmZpcm1BY3Rpb25zKTtcblxuXHRcdFx0X2NvbnRhaW5lci5hcHBlbmRDaGlsZChfY29uZmlybSk7XG5cblx0XHRcdF9ib2R5SlMuYXBwZW5kQ2hpbGQoX2NvbnRhaW5lcik7XG5cblx0XHRcdGlmIChfaXNJbklmcmFtZSkge1xuXHRcdFx0XHR3aW5kb3cudG9wLiQoJyNiZ18nICsgX2NvbmZpcm1JZCkuZmFkZUluKDE0MCk7XG5cdFx0XHRcdHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG5cdFx0XHRcdFx0d2luZG93LnRvcFxuXHRcdFx0XHRcdFx0LiQoJyMnICsgX2NvbmZpcm1JZClcblx0XHRcdFx0XHRcdC5maW5kKCcuY29uZmlybS1jb250YWluZXInKVxuXHRcdFx0XHRcdFx0LnNsaWRlVG9nZ2xlKDE1MCk7XG5cdFx0XHRcdFx0d2luZG93LnRvcC4kKCcjJyArIF9jb25maXJtSWQgKyAnIFtjYW5jZWwtYnV0dG9uXScpLmZvY3VzKCk7XG5cdFx0XHRcdH0sIDEwMCk7XG5cblx0XHRcdFx0U2FwcGhpcmVXaWRnZXRzLlJlbW90ZUFwcG9pbnRtZW50LnNldE1vZGFsTWluaW1pemVkKCk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHQkKCcjYmdfJyArIF9jb25maXJtSWQpLmZhZGVJbigxNDApO1xuXHRcdFx0XHRzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRcdCQoJyMnICsgX2NvbmZpcm1JZClcblx0XHRcdFx0XHRcdC5maW5kKCcuY29uZmlybS1jb250YWluZXInKVxuXHRcdFx0XHRcdFx0LnNsaWRlVG9nZ2xlKDE1MCk7XG5cdFx0XHRcdFx0JCgnIycgKyBfY29uZmlybUlkICsgJyBbY2FuY2VsLWJ1dHRvbl0nKS5mb2N1cygpO1xuXHRcdFx0XHR9LCAxMDApO1xuXHRcdFx0fVxuXHRcdH1cblx0fSxcblxuXHRjbG9zZUNvbmZpcm1Qb3B1cDogZnVuY3Rpb24oX2NvbmZpcm1JZCkge1xuXHRcdCQoJ2JvZHknKS5yZW1vdmVDbGFzcygnY29uZmlybWF0aW9uLW9wZW5lZCcpO1xuXHRcdCQoJ2JvZHknKS5jc3MoJ292ZXJmbG93LXknLCAnc2Nyb2xsJyk7XG5cdFx0JCgnI2JnXycgKyBfY29uZmlybUlkKS5mYWRlT3V0KDE0MCk7XG5cblx0XHRzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuXHRcdFx0JCgnIycgKyBfY29uZmlybUlkKVxuXHRcdFx0XHQuZmluZCgnLmNvbmZpcm0tY29udGFpbmVyJylcblx0XHRcdFx0LnNsaWRlVXAoMTUwKTtcblx0XHRcdCQoJyMnICsgX2NvbmZpcm1JZCkucmVtb3ZlKCk7XG5cdFx0fSwgMTAwKTtcblx0fSxcblxuXHRjcmVhdGU6IGZ1bmN0aW9uKF9pZCwgX3F1ZXN0aW9uLCBfbWVzc2FnZSwgX25vdGlmeUlkLCBfSGFzTm90aWZ5T25DYW5jZWwpIHtcblx0XHQkKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigpIHtcblx0XHRcdCQoJyMnICsgX2lkKVxuXHRcdFx0XHQub2ZmKCdjbGljaycpXG5cdFx0XHRcdC5vbignY2xpY2snLCBmdW5jdGlvbigpIHtcblx0XHRcdFx0XHRTYXBwaGlyZVdpZGdldHMuQ29uZmlybWF0aW9uUG9wdXAudG9nZ2xlQ29uZmlybShfaWQsIF9xdWVzdGlvbiwgX21lc3NhZ2UsIF9ub3RpZnlJZCwgX0hhc05vdGlmeU9uQ2FuY2VsKTtcblx0XHRcdFx0XHRpZiAoX2lzSW5JZnJhbWUpIHtcblx0XHRcdFx0XHRcdHdpbmRvdy5mcmFtZUVsZW1lbnQuc2V0QXR0cmlidXRlKCdtZW51LWlkJywgX2lkKTtcblx0XHRcdFx0XHRcdHdpbmRvdy5mcmFtZUVsZW1lbnQuc2V0QXR0cmlidXRlKCdpZCcsICdpZnJhbWVfJyArIF9pZCk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdHJldHVybiBmYWxzZTtcblx0XHRcdFx0fSk7XG5cdFx0fSk7XG5cdH0sXG59O1xuIiwiLyogQ29tcG9uZW50IE1vZGFsUG9wdXAgKi9cblxudmFyIF9pc0luSWZyYW1lID0gd2luZG93LmZyYW1lRWxlbWVudCAhPSB1bmRlZmluZWQgfHwgZmFsc2U7XG5cblNhcHBoaXJlV2lkZ2V0cy5Nb2RhbFBvcHVwID0ge1xuXHRjcmVhdGU6IGZ1bmN0aW9uKHdpZGdldElkKSB7XG5cdFx0JChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oKSB7XG5cdFx0XHQvLyBVc2UgdGhpcyBjb2RlIHRvIGFwcGVuZCB0aGUgY29tcG9uZW50IHRvIHRoZSByb290IGJvZHlcblx0XHRcdC8vIHdpbmRvdy5mcmFtZUVsZW1lbnQgJiYgJCh3aW5kb3cuZnJhbWVFbGVtZW50KS5jbG9zZXN0KCcuTWFpbkludGVyYWN0aXZlQ2FyZC1ib2R5JykubGVuZ3RoID4gMFxuXHRcdFx0aWYgKGZhbHNlKSB7XG5cdFx0XHRcdGNvbnN0ICRwYXJlbnRCb2R5ID0gcGFyZW50LiQoJ2JvZHknKTtcblx0XHRcdFx0bGV0ICR3aWRnZXQgPSAkKGAjJHt3aWRnZXRJZH1gKTtcblxuXHRcdFx0XHRpZiAoJHBhcmVudEJvZHkuZmluZCgkd2lkZ2V0KS5sZW5ndGggPT09IDApIHtcblx0XHRcdFx0XHQkcGFyZW50Qm9keS5hcHBlbmQoXG5cdFx0XHRcdFx0XHQkd2lkZ2V0XG5cdFx0XHRcdFx0XHRcdC53cmFwKCc8ZGl2Lz4nKVxuXHRcdFx0XHRcdFx0XHQucGFyZW50KClcblx0XHRcdFx0XHRcdFx0LmRldGFjaCgpXG5cdFx0XHRcdFx0KTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdCR3aWRnZXQgPSBwYXJlbnQuJChgIyR7d2lkZ2V0SWR9YCk7XG5cdFx0XHRcdGNvbnN0ICRidG5DbG9zZSA9ICR3aWRnZXQuZmluZCgnLm1vZGFsUG9wdXBfY2xvc2UnKTtcblxuXHRcdFx0XHQkYnRuQ2xvc2UuY2xpY2soZnVuY3Rpb24oKSB7XG5cdFx0XHRcdFx0JHdpZGdldC5yZW1vdmVDbGFzcygnT3BlbicpO1xuXHRcdFx0XHRcdCR3aWRnZXQucmVtb3ZlQ2xhc3MoJ3Nob3djbG9zZScpO1xuXHRcdFx0XHR9KTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGNvbnN0ICR3aWRnZXQgPSAkKGAjJHt3aWRnZXRJZH1gKTtcblx0XHRcdFx0Y29uc3QgJGJ0bkNsb3NlID0gJHdpZGdldC5maW5kKCcubW9kYWxQb3B1cF9jbG9zZScpO1xuXG5cdFx0XHRcdGlmICh3aW5kb3cuZnJhbWVFbGVtZW50KSB7XG5cdFx0XHRcdFx0Y29uc3QgJG1vZGFsUmVtb3RlQXBwdCA9IHdpbmRvdy50b3AuJCgnLlJlbW90ZUFwcG9pbnRtZW50Jyk7XG5cblx0XHRcdFx0XHRpZiAoJG1vZGFsUmVtb3RlQXBwdC5sZW5ndGgpIHtcblx0XHRcdFx0XHRcdGNvbnN0ICRtaW5pbWl6ZU1vZGFsID0gJG1vZGFsUmVtb3RlQXBwdC5maW5kKCcuTWluaW1pemUnKTtcblx0XHRcdFx0XHRcdCRtaW5pbWl6ZU1vZGFsLmNsaWNrKCk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cblx0XHRcdFx0JGJ0bkNsb3NlLmNsaWNrKGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRcdCR3aWRnZXQucmVtb3ZlQ2xhc3MoJ09wZW4nKTtcblx0XHRcdFx0XHQkd2lkZ2V0LnJlbW92ZUNsYXNzKCdzaG93Y2xvc2UnKTtcblx0XHRcdFx0fSk7XG5cdFx0XHR9XG5cdFx0fSk7XG5cdH0sXG59O1xuIiwiLyogQ29tcG9uZW50IFBhbmVsQnlJRE5vdGlmeSAqL1xyXG52YXIgcGFuZWxOb3RpZnlXaWRnZXQ7XHJcblNhcHBoaXJlV2lkZ2V0cy5QYW5lbEJ5SWROb3RpZnkgPSB7XHJcblx0aXNBbnlQYW5lbE9wZW5lZERlcHJlY2F0ZWQ6IGZ1bmN0aW9uKCkge1xyXG5cdFx0cmV0dXJuICQoJ2JvZHknKS5oYXNDbGFzcygnUGFuZWxPcGVuZWQnKTtcclxuXHR9LFxyXG5cdHRvZ2dsZVBhbmVsQnlOb3RpZnk6IGZ1bmN0aW9uKElkKSB7XHJcblx0XHRpZiAoIWlzQW55UGFuZWxPcGVuZWREZXByZWNhdGVkKCkpIHtcclxuXHRcdFx0JCgnYm9keScpLmFkZENsYXNzKCdQYW5lbE9wZW5lZCcpO1xyXG5cdFx0XHQkKCcjJyArIElkKVxyXG5cdFx0XHRcdC5wYXJlbnRzKCcuVG9nZ2xlQnV0dG9uJylcclxuXHRcdFx0XHQucGFyZW50KClcclxuXHRcdFx0XHQuY2hpbGRyZW4oJy5QYW5lbCcpXHJcblx0XHRcdFx0LmZhZGVJbigxNDApO1xyXG5cclxuXHRcdFx0dHJ5IHtcclxuXHRcdFx0XHRpZiAoanVzdERyYWdnZWQgPT0gZmFsc2UpIHtcclxuXHRcdFx0XHRcdCQoJy5QYW5lbENvbnRhaW5lcicpXHJcblx0XHRcdFx0XHRcdC5jc3MoJ21hcmdpbi1sZWZ0JywgcGFuZWxNYXJnaW5MZWZ0KVxyXG5cdFx0XHRcdFx0XHQuY3NzKCdsZWZ0JywgcGFuZWxMZWZ0KVxyXG5cdFx0XHRcdFx0XHQuYWRkQ2xhc3MocGFuZWxBcnJvd0NsYXNzKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0gY2F0Y2ggKGUpIHtcclxuXHRcdFx0XHRjb25zb2xlLmxvZyhlKTtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0c2V0VGltZW91dChmdW5jdGlvbigpIHtcclxuXHRcdFx0XHQkKCcjJyArIElkKVxyXG5cdFx0XHRcdFx0LnBhcmVudHMoJy5Ub2dnbGVCdXR0b24nKVxyXG5cdFx0XHRcdFx0LnBhcmVudCgpXHJcblx0XHRcdFx0XHQuY2hpbGRyZW4oJy5QYW5lbCcpXHJcblx0XHRcdFx0XHQuY2hpbGRyZW4oJy5QYW5lbENvbnRhaW5lcicpXHJcblx0XHRcdFx0XHQuc2xpZGVEb3duKDE1MCk7XHJcblx0XHRcdH0sIDEwMCk7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHQkKCdib2R5JykucmVtb3ZlQ2xhc3MoJ1BhbmVsT3BlbmVkJyk7XHJcblx0XHRcdCQoJyMnICsgSWQpXHJcblx0XHRcdFx0LnBhcmVudHMoJy5Ub2dnbGVCdXR0b24nKVxyXG5cdFx0XHRcdC5wYXJlbnQoKVxyXG5cdFx0XHRcdC5jaGlsZHJlbignLlBhbmVsJylcclxuXHRcdFx0XHQuZmFkZU91dCgxNDApO1xyXG5cdFx0XHRzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdCQoJyMnICsgSWQpXHJcblx0XHRcdFx0XHQucGFyZW50cygnLlRvZ2dsZUJ1dHRvbicpXHJcblx0XHRcdFx0XHQucGFyZW50KClcclxuXHRcdFx0XHRcdC5jaGlsZHJlbignLlBhbmVsJylcclxuXHRcdFx0XHRcdC5jaGlsZHJlbignLlBhbmVsQ29udGFpbmVyJylcclxuXHRcdFx0XHRcdC5zbGlkZVVwKDE1MCk7XHJcblx0XHRcdH0sIDEwMCk7XHJcblx0XHR9XHJcblx0fSxcclxuXHR0b2dnbGVQYW5lbE5vdGlmeUJ5SWQ6IGZ1bmN0aW9uKElkKSB7XHJcblx0XHQkKCdib2R5JykudG9nZ2xlQ2xhc3MoJ1BhbmVsT3BlbmVkJyk7XHJcblx0XHQkKCcjJyArIElkKVxyXG5cdFx0XHQucGFyZW50cygnLlRvZ2dsZUJ1dHRvbicpXHJcblx0XHRcdC5wYXJlbnQoKVxyXG5cdFx0XHQuY2hpbGRyZW4oJy5QYW5lbCcpXHJcblx0XHRcdC5mYWRlVG9nZ2xlKDE0MCk7XHJcblxyXG5cdFx0cGFuZWxOb3RpZnlXaWRnZXQgPSAkKCcjJyArIElkKVxyXG5cdFx0XHQucGFyZW50cygnLlRvZ2dsZUJ1dHRvbicpXHJcblx0XHRcdC5hdHRyKCdOb3RpZnlJZCcpO1xyXG5cclxuXHRcdHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XHJcblx0XHRcdCQoJyMnICsgSWQpXHJcblx0XHRcdFx0LnBhcmVudHMoJy5Ub2dnbGVCdXR0b24nKVxyXG5cdFx0XHRcdC5wYXJlbnQoKVxyXG5cdFx0XHRcdC5jaGlsZHJlbignLlBhbmVsJylcclxuXHRcdFx0XHQuY2hpbGRyZW4oJy5QYW5lbENvbnRhaW5lcicpXHJcblx0XHRcdFx0LnNsaWRlVG9nZ2xlKDE1MCk7XHJcblx0XHR9LCAxMDApO1xyXG5cdH0sXHJcbn07XHJcbiIsIi8qIENvbXBvbmVudCBQYW5lbEJ5SUQgKi9cclxuU2FwcGhpcmVXaWRnZXRzLlBhbmVsQnlJZCA9IHtcclxuXHRpc0FueVBhbmVsT3BlbmVkRGVwcmVjYXRlZDogZnVuY3Rpb24oKSB7XHJcblx0XHRyZXR1cm4gJCgnYm9keScpLmhhc0NsYXNzKCdQYW5lbE9wZW5lZCcpO1xyXG5cdH0sXHJcblxyXG5cdHRvZ2dsZUJ1dHRvbjogZnVuY3Rpb24oaWQpIHtcclxuXHRcdGNvbnN0ICR0b2dnbGVCdXR0b24gPSAkKGAjJHtpZH1gKS5wYXJlbnRzKCcuVG9nZ2xlQnV0dG9uJykubGVuZ3RoXHJcblx0XHRcdD8gJChgIyR7aWR9YCkucGFyZW50cygnLlRvZ2dsZUJ1dHRvbicpXHJcblx0XHRcdDogJChgIyR7aWR9YCk7XHJcblxyXG5cdFx0JHRvZ2dsZUJ1dHRvbi5jbGljaygpO1xyXG5cdH0sXHJcblxyXG5cdHRvZ2dsZVBhbmVsQnlJZDogZnVuY3Rpb24oSWQpIHtcclxuXHRcdGNvbnN0ICR0b2dnbGVCdXR0b24gPSAkKGAjJHtJZH1gKS5wYXJlbnRzKCcuVG9nZ2xlQnV0dG9uJyk7XHJcblx0XHRjb25zdCAkcGFuZWwgPSAkdG9nZ2xlQnV0dG9uLnBhcmVudCgpLmNoaWxkcmVuKCcuUGFuZWwnKTtcclxuXHRcdGNvbnN0ICRwYW5lbENvbnRhaW5lciA9ICRwYW5lbC5jaGlsZHJlbignLlBhbmVsQ29udGFpbmVyJyk7XHJcblx0XHRjb25zdCAkcGFuZWxCYWNrZ3JvdW5kID0gJHBhbmVsLmNoaWxkcmVuKCcuUGFuZWxCYWNrZ3JvdW5kJyk7XHJcblxyXG5cdFx0aWYgKCF0aGlzLmlzQW55UGFuZWxPcGVuZWREZXByZWNhdGVkKCkpIHtcclxuXHRcdFx0JCgnYm9keScpLmFkZENsYXNzKCdQYW5lbE9wZW5lZCcpO1xyXG5cdFx0XHQkKCdib2R5JykuY3NzKCdvdmVyZmxvdy15JywgJ2hpZGRlbicpO1xyXG5cclxuXHRcdFx0JHBhbmVsLnNob3coKTtcclxuXHRcdFx0JHBhbmVsQ29udGFpbmVyLnNsaWRlRG93bigyMDApO1xyXG5cclxuXHRcdFx0dHJ5IHtcclxuXHRcdFx0XHRpZiAodHlwZW9mIGp1c3REcmFnZ2VkICE9PSAndW5kZWZpbmVkJykge1xyXG5cdFx0XHRcdFx0aWYgKGp1c3REcmFnZ2VkID09IGZhbHNlKSB7XHJcblx0XHRcdFx0XHRcdCQoJy5QYW5lbEJ5SWROZXdfUGFuZWxDb250YWluZXInKVxyXG5cdFx0XHRcdFx0XHRcdC5jc3MoJ21hcmdpbi1sZWZ0JywgcGFuZWxNYXJnaW5MZWZ0KVxyXG5cdFx0XHRcdFx0XHRcdC5jc3MoJ2xlZnQnLCBwYW5lbExlZnQpXHJcblx0XHRcdFx0XHRcdFx0LmFkZENsYXNzKHBhbmVsQXJyb3dDbGFzcyk7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9IGNhdGNoIChlKSB7XHJcblx0XHRcdFx0Y29uc29sZS5sb2coZSk7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0JHBhbmVsQmFja2dyb3VuZC5mYWRlSW4oODApO1xyXG5cclxuXHRcdFx0XHQkdG9nZ2xlQnV0dG9uLmNsaWNrKCk7XHJcblx0XHRcdH0sIDUwKTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdCRwYW5lbENvbnRhaW5lci5zbGlkZVVwKDIwMCk7XHJcblxyXG5cdFx0XHQkcGFuZWxCYWNrZ3JvdW5kLmZhZGVPdXQoODAsICgpID0+IHtcclxuXHRcdFx0XHQkdG9nZ2xlQnV0dG9uLmNsaWNrKCk7XHJcblxyXG5cdFx0XHRcdCQoJ2JvZHknKS5jc3MoJ292ZXJmbG93LXknLCAnc2Nyb2xsJyk7XHJcblx0XHRcdFx0JCgnYm9keScpLnJlbW92ZUNsYXNzKCdQYW5lbE9wZW5lZCcpO1xyXG5cclxuXHRcdFx0XHQkcGFuZWwuaGlkZSgpO1xyXG5cdFx0XHR9KTtcclxuXHRcdH1cclxuXHR9LFxyXG59O1xyXG4iLCIvKiBDb21wb25lbnQgUG9wVXBNZW51ICovXHJcblNhcHBoaXJlV2lkZ2V0cy5Qb3BVcE1lbnUgPSB7XHJcblx0bWVudVBvc2l0aW9uOiBmdW5jdGlvbihpZCwgQ29udGV4dCwgTG9jYWxlKSB7XHJcblx0XHQvKiBIaWRlIGFueSBvdGhlciBtZW51cyBvbiBwYWdlIGFuZCBzZXQgYnV0dG9uIGFzIGNvbGxhcHNlZC4gKi9cclxuXHRcdCQoJy5wb3B1cC1tZW51OnZpc2libGUnKS5oaWRlKCk7XHJcblxyXG5cdFx0Ly92YXIgX3RoaXMgPSAkKHRoaXMpO1xyXG5cdFx0dmFyIF90aGlzID0gJCgnIycgKyBpZCk7XHJcblx0XHR2YXIgWHggPSAwO1xyXG5cdFx0dmFyIFl5ID0gMDtcclxuXHRcdHZhciBXdyA9IDA7XHJcblx0XHR2YXIgSGggPSAwO1xyXG5cclxuXHRcdC8vX3RoaXMuY2hpbGRyZW4oJy5idXR0b24tZXhwYW5kOnZpc2libGUnKS5oaWRlKCk7XHJcblxyXG5cdFx0LyogR2V0IHRoZSBtZW51IGVsZW1lbnQuICovXHJcblx0XHR2YXIgX2VsID0gX3RoaXMubmV4dCgnLnBvcHVwLW1lbnUnKTtcclxuXHJcblx0XHQvKiBEaXNwbGF5IHRoZSBtZW51LiAqL1xyXG5cdFx0X2VsLnNob3coKTtcclxuXHJcblx0XHQvKiBTZXQgYnV0dG9uIGNvbGxhcHNlLiAqL1xyXG5cdFx0X3RoaXMuY2hpbGRyZW4oJy5idXR0b24tY29sbGFwc2UnKS5zaG93KCk7XHJcblxyXG5cdFx0LyogR2V0IHRoZSBkaW1lbnNpb25zIG9mIHRoZSBidXR0b24uICovXHJcblx0XHRidXR0b25IaCA9IF90aGlzLm91dGVySGVpZ2h0KCk7XHJcblx0XHRidXR0b25XdyA9IF90aGlzLm91dGVyV2lkdGgoKTtcclxuXHJcblx0XHR2YXIgYnV0dG9uWSA9IF90aGlzLnBvc2l0aW9uKCkudG9wICsgYnV0dG9uSGggKyAxMDtcclxuXHRcdHZhciBidXR0b25YID0gX3RoaXMub2Zmc2V0KCkubGVmdDtcclxuXHRcdC8vdmFyIGJ1dHRvblggPSBfdGhpcy5wb3NpdGlvbigpLmxlZnQ7XHJcblxyXG5cdFx0LyogR2V0IHRoZSBkaXN0YW5jZSBvZiBtZW51IGJ1dHRvbiBhbmQgdGhlIHBhcmVudCBlbGVtZW50ICovXHJcblx0XHR2YXIgcG9wdXBQYXJlbnRYeCA9IF90aGlzLm9mZnNldCgpLmxlZnQgLSBfdGhpcy5wb3NpdGlvbigpLmxlZnQ7XHJcblxyXG5cdFx0dmFyIHBvcHVwWHggPSBfZWwub2Zmc2V0KCkubGVmdDtcclxuXHRcdHZhciBwb3B1cFd3ID0gX2VsLm91dGVyV2lkdGgoKTtcclxuXHJcblx0XHRYeCA9IE1hdGguYWJzKGJ1dHRvblggLSAkKCdib2R5Jykuc2Nyb2xsTGVmdCgpIC0gcG9wdXBQYXJlbnRYeCk7XHJcblx0XHRZeSA9IE1hdGguYWJzKGJ1dHRvbkhoIC0gYnV0dG9uWSAtICQoJ2JvZHknKS5zY3JvbGxUb3AoKSk7XHJcblxyXG5cdFx0aWYgKExvY2FsZSAhPSAnQVInKSB7XHJcblx0XHRcdC8qIENoZWNrIGlmIGNsaWNrZWQgcG9zaXRpb24gcGx1cyB0aGUgcG9wdXAgd2lkdGggZXhjZWVkIHRoZSB3aW5kb3cgd2lkdGguICovXHJcblx0XHRcdGlmIChidXR0b25YICsgcG9wdXBXdyAtICQoJ2JvZHknKS5zY3JvbGxMZWZ0KCkgPiAkKENvbnRleHQpLndpZHRoKCkpIHtcclxuXHRcdFx0XHRYeCA9IGJ1dHRvblggLSBwb3B1cFd3IC0gJCgnYm9keScpLnNjcm9sbExlZnQoKSAtIHBvcHVwUGFyZW50WHggKyBidXR0b25XdztcclxuXHRcdFx0XHQvL1h4ID0gKCQod2luZG93KS53aWR0aCgpIC0gcG9wdXBXdykgLSAkKCdib2R5Jykuc2Nyb2xsTGVmdCgpO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblxyXG5cdFx0LyogU2V0IG1lbnUgcG9zaXRpb24uICovXHJcblx0XHRfZWwuY3NzKHtcclxuXHRcdFx0bGVmdDogWHggKyAncHgnLFxyXG5cdFx0XHR0b3A6IGJ1dHRvblkgKyAncHgnLFxyXG5cdFx0fSk7XHJcblxyXG5cdFx0LyogUmVmcmVzaCB2YWx1ZSAqL1xyXG5cdFx0cG9wdXBYeCA9IF9lbC5vZmZzZXQoKS5sZWZ0O1xyXG5cclxuXHRcdHZhciBfYmFsbG9vbkVsID0gX2VsLmNoaWxkcmVuKCcucG9wdXAtbWVudS1iYWxsb29uJyk7XHJcblxyXG5cdFx0dmFyIF9iYWxsb29uWHggPSBfYmFsbG9vbkVsLm9mZnNldCgpLmxlZnQ7XHJcblx0XHR2YXIgX2JhbGxvb25XdyA9IF9iYWxsb29uRWwub3V0ZXJXaWR0aCgpO1xyXG5cdFx0dmFyIF9iYWxsb29uUG9zWHggPSBNYXRoLmFicyhidXR0b25YIC0gWHggLSBwb3B1cFBhcmVudFh4KTtcclxuXHJcblx0XHQvKiBJcyB0aGUgYmFsbG9vbiBpY29uIHBvc2l0aW9uZWQgb3V0IG9mIHRoZSBwb3B1cCBtZW51PyAqL1xyXG5cdFx0aWYgKF9iYWxsb29uUG9zWHggKyBYeCArIF9iYWxsb29uV3cgPiBYeCArIHBvcHVwV3cpIHtcclxuXHRcdFx0X2JhbGxvb25Qb3NYeCA9IF9iYWxsb29uUG9zWHggLSBfYmFsbG9vbld3O1xyXG5cdFx0fVxyXG5cclxuXHRcdC8qIFNldCBwb3NpdGlvbiBvZiB0aGUgYmFsbG9vbiBlZmZlY3QuICovXHJcblx0XHRfYmFsbG9vbkVsLmNzcygnbGVmdCcsIF9iYWxsb29uUG9zWHggKyAncHgnKTtcclxuXHR9LFxyXG5cdG1lbnVFdmVudHM6IGZ1bmN0aW9uKENvbnRleHQsIExvY2FsZSkge1xyXG5cdFx0JCgnLnBvcHVwLWJ1dHRvbicpXHJcblx0XHRcdC5vZmYoJ2NsaWNrJylcclxuXHRcdFx0Lm9uKCdjbGljaycsIGZ1bmN0aW9uKGUpIHtcclxuXHRcdFx0XHR2YXIgaWQgPSAkKHRoaXMpLmF0dHIoJ2lkJyk7XHJcblx0XHRcdFx0U2FwcGhpcmVXaWRnZXRzLlBvcFVwTWVudS5tZW51UG9zaXRpb24oaWQsIENvbnRleHQsIExvY2FsZSk7XHJcblxyXG5cdFx0XHRcdC8qZS5zdG9wUHJvcGFnYXRpb24oKTsqL1xyXG5cclxuXHRcdFx0XHQvKiBQcmV2ZW50IGxpbmsgc3VibWlzc2lvbiAqL1xyXG5cdFx0XHRcdHJldHVybiBmYWxzZTtcclxuXHRcdFx0fSk7XHJcblxyXG5cdFx0LyogdiAqKiogSGlkZSBwb3B1cCB3aGVuIGNsaWNrIG91dHNpZGUgKioqIHYgKi9cclxuXHRcdGZ1bmN0aW9uIFBNQ2xpY2tPdXRzaWRlKGV2ZW50KSB7XHJcblx0XHRcdGlmIChldmVudC5oYXNPd25Qcm9wZXJ0eSgndGFyZ2V0JykpIHtcclxuXHRcdFx0XHR2YXIgdGFyZ2V0ID0gJChldmVudC50YXJnZXQpO1xyXG5cdFx0XHRcdC8qaWYgKCh0YXJnZXQucGFyZW50cygpLmluZGV4KCQoJ2Fbc2FwcGhpcmVob3NwaXRhbF0sIC5Ib3NwaXRhbFBvcFVwJykpID09IC0xKSkge30qL1xyXG5cdFx0XHRcdGlmIChcclxuXHRcdFx0XHRcdCEkKGV2ZW50LnRhcmdldCkuY2xvc2VzdChcclxuXHRcdFx0XHRcdFx0Jy5wb3B1cC1idXR0b24sIC5wb3B1cC1tZW51LCAub3MtaW50ZXJuYWwtdWktYXV0b2NvbXBsZXRlLCAub3MtaW50ZXJuYWwtdWktbWVudS1pdGVtLCAub3MtaW50ZXJuYWwtdWktY29ybmVyLWFsbCwgdWktYXV0b2NvbXBsZXRlLWl0ZW0nXHJcblx0XHRcdFx0XHQpLmxlbmd0aFxyXG5cdFx0XHRcdCkge1xyXG5cdFx0XHRcdFx0JCgnLnBvcHVwLW1lbnU6dmlzaWJsZScpLmhpZGUoKTtcclxuXHRcdFx0XHRcdCQoJy5idXR0b24tY29sbGFwc2U6dmlzaWJsZScpLmhpZGUoKTtcclxuXHRcdFx0XHRcdC8vJCgnLmJ1dHRvbi1leHBhbmQnKS5zaG93KCk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHR9XHJcblxyXG5cdFx0dmFyIF9QTUlzRHJhZyA9IGZhbHNlO1xyXG5cdFx0dmFyIF9QTUlzQ2xpY2sgPSBmYWxzZTtcclxuXHRcdCQoZG9jdW1lbnQpLm9uKCd0b3VjaHN0YXJ0JywgZnVuY3Rpb24oZXZlbnQpIHtcclxuXHRcdFx0X1BNSXNEcmFnID0gZmFsc2U7XHJcblx0XHRcdF9QTUlzQ2xpY2sgPSB0cnVlO1xyXG5cdFx0fSk7XHJcblx0XHQkKGRvY3VtZW50KS5vbigndG91Y2htb3ZlJywgZnVuY3Rpb24oZXZlbnQpIHtcclxuXHRcdFx0X1BNSXNEcmFnID0gdHJ1ZTtcclxuXHRcdH0pO1xyXG5cdFx0JChkb2N1bWVudCkub24oJ2NsaWNrJywgZnVuY3Rpb24oZXZlbnQpIHtcclxuXHRcdFx0UE1DbGlja091dHNpZGUoZXZlbnQpO1xyXG5cdFx0XHRfUE1Jc0RyYWcgPSBmYWxzZTtcclxuXHRcdFx0X1BNSXNDbGljayA9IGZhbHNlO1xyXG5cdFx0fSk7XHJcblx0XHQkKGRvY3VtZW50KS5vbigndG91Y2hlbmQnLCBmdW5jdGlvbihldmVudCkge1xyXG5cdFx0XHRpZiAoIV9QTUlzRHJhZyAmJiBfUE1Jc0NsaWNrKSB7XHJcblx0XHRcdFx0UE1DbGlja091dHNpZGUoZXZlbnQpO1xyXG5cdFx0XHR9XHJcblx0XHRcdF9QTUlzRHJhZyA9IGZhbHNlO1xyXG5cdFx0XHRfUE1Jc0NsaWNrID0gZmFsc2U7XHJcblx0XHR9KTtcclxuXHJcblx0XHQkKCcuYnV0dG9uLWNvbGxhcHNlJykub24oJ2NsaWNrJywgZnVuY3Rpb24oZXZlbnQpIHtcclxuXHRcdFx0JCgnYm9keScpLnRyaWdnZXIoJ2NsaWNrJyk7XHJcblx0XHRcdHJldHVybiBmYWxzZTtcclxuXHRcdH0pO1xyXG5cdFx0LyogXiAqKiogSGlkZSBwb3B1cCB3aGVuIGNsaWNrIG91dHNpZGUgKioqIF4gKi9cclxuXHR9LFxyXG59O1xyXG4iLCIvKiBDb21wb25lbnQgU2FwcGhpcmVQYW5lbCAqL1xuU2FwcGhpcmVXaWRnZXRzLlNhcHBoaXJlUGFuZWwgPSB7XG5cdGNoZWNrT3BlblBhbmVsOiBmdW5jdGlvbigpIHtcblx0XHRyZXR1cm4gJCgnYm9keScpLmhhc0NsYXNzKCdTYXBwaGlyZVBhbmVsT3BlbicpICYmICQoJy5TYXBwaGlyZVBhbmVsX0NvbnRhaW5lcjp2aXNpYmxlJykubGVuZ3RoO1xuXHR9LFxuXG5cdHRvZ2dsZVNhcHBoaXJlUGFuZWw6IGZ1bmN0aW9uKFBhbmVsSWQpIHtcblx0XHRpZiAoIU9zVmFsaWRhdG9yT25TdWJtaXQoKSkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdGlmICghU2FwcGhpcmVXaWRnZXRzLlNhcHBoaXJlUGFuZWwuY2hlY2tPcGVuUGFuZWwoKSkge1xuXHRcdFx0JCgnYm9keScpLmFkZENsYXNzKCdTYXBwaGlyZVBhbmVsT3BlbicpO1xuXHRcdFx0JCgnIycgKyBQYW5lbElkKS5mYWRlSW4oMTQwKTtcblxuXHRcdFx0c2V0VGltZW91dChmdW5jdGlvbigpIHtcblx0XHRcdFx0JCgnIycgKyBQYW5lbElkKVxuXHRcdFx0XHRcdC5maW5kKCcuU2FwcGhpcmVQYW5lbF9Db250YWluZXInKVxuXHRcdFx0XHRcdC5zbGlkZVRvZ2dsZSgxNTApO1xuXHRcdFx0fSwgMTAwKTtcblx0XHR9XG5cdH0sXG5cblx0Y2xvc2VTYXBwaGlyZVBhbmVsOiBmdW5jdGlvbihQYW5lbElkKSB7XG5cdFx0JCgnYm9keScpLnJlbW92ZUNsYXNzKCdTYXBwaGlyZVBhbmVsT3BlbicpO1xuXHRcdCQoJyMnICsgUGFuZWxJZCkuZmFkZU91dCgxNDApO1xuXG5cdFx0c2V0VGltZW91dChmdW5jdGlvbigpIHtcblx0XHRcdCQoJyMnICsgUGFuZWxJZClcblx0XHRcdFx0LmZpbmQoJy5TYXBwaGlyZVBhbmVsX0NvbnRhaW5lcicpXG5cdFx0XHRcdC5zbGlkZVVwKDE1MCk7XG5cdFx0fSwgMTAwKTtcblx0fSxcblxuXHRzZXRQYW5lbEJlaGF2aW9yOiBmdW5jdGlvbigpIHtcblx0XHQkKCcuUGFuZWxbcGFuZWwtdHJpZ2dlci1lbGVtZW50aWRdJykuZWFjaChmdW5jdGlvbigpIHtcblx0XHRcdHZhciB0aGlzX3BhbmVsID0gJCh0aGlzKTtcblx0XHRcdCQoJyMnICsgdGhpc19wYW5lbC5hdHRyKCdwYW5lbC10cmlnZ2VyLWVsZW1lbnRpZCcpICsgJycpXG5cdFx0XHRcdC5vZmYoJ2NsaWNrJylcblx0XHRcdFx0Lm9uKCdjbGljaycsIGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRcdFNhcHBoaXJlV2lkZ2V0cy5TYXBwaGlyZVBhbmVsLnRvZ2dsZVNhcHBoaXJlUGFuZWwodGhpc19wYW5lbC5hdHRyKCdpZCcpKTtcblx0XHRcdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0XHRcdH0pO1xuXHRcdH0pO1xuXHR9LFxufTtcblxuJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oKSB7XG5cdFNhcHBoaXJlV2lkZ2V0cy5TYXBwaGlyZVBhbmVsLnNldFBhbmVsQmVoYXZpb3IoKTtcblxuXHRpZiAob3NBamF4QmFja2VuZC5FdmVudEhhbmRsZXJzLkFmdGVyQWpheFJlcXVlc3QudG9TdHJpbmcoKS5pbmRleE9mKCdzZXRQYW5lbEJlaGF2aW9yJykgPT0gLTEpIHtcblx0XHRvc0FqYXhCYWNrZW5kLkJpbmRBZnRlckFqYXhSZXF1ZXN0KFNhcHBoaXJlV2lkZ2V0cy5TYXBwaGlyZVBhbmVsLnNldFBhbmVsQmVoYXZpb3IpO1xuXHR9XG59KTtcbiIsInJlcXVpcmUoJy4vY29uZmlybWF0aW9uLXBhbmVsJyk7XHJcbnJlcXVpcmUoJy4vbW9kYWwtcG9wdXAnKTtcclxucmVxdWlyZSgnLi9wYW5lbC1ieS1pZCcpO1xyXG5yZXF1aXJlKCcuL3BvcHVwLW1lbnUnKTtcclxucmVxdWlyZSgnLi9zYXBwaGlyZS1wYW5lbCcpO1xyXG4iLCIvKiBDb21wb25lbnQgUGF0aWVudENhbGxDYW5jZWxTdHJ1Y3R1cmUgKi9cbihmdW5jdGlvbigkLCB3aW5kb3csIGRvY3VtZW50LCBTYXBwaGlyZVdpZGdldHMpIHtcblx0Y29uc3QgY3JlYXRlID0gZnVuY3Rpb24oY29uZmlnKSB7XG5cdFx0Y29uc3QgJHdpZGdldCA9ICQoJyMnICsgY29uZmlnLndpZGdldElkKS5maW5kKCcuUGF0aWVudENhbGxDYW5jZWxTdHJ1Y3R1cmUnKTtcblx0XHRjb25zdCAkbGlzdFF1ZXVlV3JhcHBlciA9ICR3aWRnZXQuZmluZCgnLlBhdGllbnRDYWxsQ2FuY2VsU3RydWN0dXJlX19MaXN0UXVldWVzJyk7XG5cdFx0Y29uc3QgJGRyb3Bkb3duID0gJGxpc3RRdWV1ZVdyYXBwZXIuZmluZCgnLklubGluZURyb3Bkb3duX2xhYmVsJyk7XG5cblx0XHQkbGlzdFF1ZXVlV3JhcHBlci5vbignY2xpY2snLCBldmVudCA9PiB7XG5cdFx0XHRpZiAoISRkcm9wZG93bi5sZW5ndGgpIHJldHVybjtcblx0XHRcdGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuXG5cdFx0XHQkd2lkZ2V0LnRvZ2dsZUNsYXNzKCdQYXRpZW50Q2FsbENhbmNlbFN0cnVjdHVyZS0tYWN0aXZlJyk7XG5cblx0XHRcdCQoZG9jdW1lbnQpLm9uKCdjbGljay5QYXRpZW50Q2FsbENhbmNlbFN0cnVjdHVyZScsICgpID0+IHtcblx0XHRcdFx0JHdpZGdldC5yZW1vdmVDbGFzcygnUGF0aWVudENhbGxDYW5jZWxTdHJ1Y3R1cmUtLWFjdGl2ZScpO1xuXHRcdFx0XHQkKGRvY3VtZW50KS5vZmYoJ2NsaWNrLlBhdGllbnRDYWxsQ2FuY2VsU3RydWN0dXJlJyk7XG5cdFx0XHR9KTtcblxuXHRcdFx0JGRyb3Bkb3duLnRyaWdnZXIoJ2NsaWNrJyk7XG5cdFx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdH0pO1xuXHR9O1xuXG5cdFNhcHBoaXJlV2lkZ2V0cy5QYXRpZW50Q2FsbENhbmNlbFN0cnVjdHVyZSA9IHsgY3JlYXRlIH07XG59KShqUXVlcnksIHdpbmRvdywgZG9jdW1lbnQsIFNhcHBoaXJlV2lkZ2V0cyk7XG4iLCIvKiBDb21wb25lbnQgUGF0aWVudENhbGxDYW5jZWwgKi9cbihmdW5jdGlvbigkLCB3aW5kb3csIGRvY3VtZW50LCBTYXBwaGlyZVdpZGdldHMpIHtcblx0Y29uc3QgY3JlYXRlID0gZnVuY3Rpb24oY29uZmlnKSB7XG5cdFx0Y29uc3QgJHdpZGdldCA9ICQoJyMnICsgY29uZmlnLndpZGdldElkKTtcblx0XHRjb25zdCAkY291bnRkb3duID0gJHdpZGdldC5maW5kKCdbdWk9ZGF0YS1jb3VudGVyXScpO1xuXHRcdGxldCAkY2FsbEJ1dHRvbiA9ICR3aWRnZXQuZmluZCgnW3VpPWRhdGEtYnV0dG9uLWNhbGxdJyk7XG5cdFx0bGV0ICRjYW5jZWxCdXR0b24gPSAkd2lkZ2V0LmZpbmQoJ1t1aT1kYXRhLWJ1dHRvbi1jYW5jZWxdJyk7XG5cdFx0Y29uc3QgJG90aGVyQ29udGVudCA9ICR3aWRnZXQuZmluZCgnLlBhdGllbnRDYWxsQ2FuY2VsX19PdGhlcicpO1xuXG5cdFx0bGV0IGludGVydmFsO1xuXHRcdGxldCB0aW1lQ291bnRlcjtcblxuXHRcdGNvbnN0IGNhbGxQYXRpZW50ID0gZnVuY3Rpb24oJHdpZGdldCkge1xuXHRcdFx0dG9nZ2xlQ2FsbGluZ1N0YXRlKCk7XG5cblx0XHRcdGlmIChjb25maWcuc2hvd0NvdW50ZG93bikgJGNvdW50ZG93bi50ZXh0KGNvbmZpZy50eHRDYWxsaW5nSW4gKyAnICcgKyBjb25maWcudGltZVRvQ2FuY2VsKTtcblx0XHRcdGVsc2UgJGNvdW50ZG93bi50ZXh0KGNvbmZpZy50eHRDYWxsaW5nSW4pO1xuXG5cdFx0XHRzdGFydENvdW50ZXIoKTtcblx0XHR9O1xuXG5cdFx0Y29uc3QgdG9nZ2xlQ2FsbGluZ1N0YXRlID0gKCkgPT4ge1xuXHRcdFx0JHdpZGdldC50b2dnbGVDbGFzcygnQ2FsbGluZ1BhdGllbnQnKTtcblx0XHRcdCRjb3VudGRvd24udGV4dChjb25maWcudHh0Q2FsbFBhdGllbnQpO1xuXHRcdH07XG5cblx0XHRjb25zdCBzZXRJbml0aWFsU3RhdGUgPSAoKSA9PiB7XG5cdFx0XHQkd2lkZ2V0LnJlbW92ZUNsYXNzKCdDYWxsaW5nUGF0aWVudCcpO1xuXHRcdFx0JGNhbGxCdXR0b24uc2hvdygpO1xuXHRcdFx0JG90aGVyQ29udGVudC5zaG93KCk7XG5cdFx0fTtcblxuXHRcdGNvbnN0IHN0YXJ0Q291bnRlciA9ICgpID0+IHtcblx0XHRcdHRpbWVDb3VudGVyID0gY29uZmlnLnRpbWVUb0NhbmNlbDtcblx0XHRcdGludGVydmFsID0gd2luZG93LnNldEludGVydmFsKHVwZGF0ZUNvdW50ZXIsIDEwMDApO1xuXHRcdH07XG5cblx0XHRjb25zdCB1cGRhdGVDb3VudGVyID0gKCkgPT4ge1xuXHRcdFx0dGltZUNvdW50ZXItLTtcblxuXHRcdFx0aWYgKHRpbWVDb3VudGVyID09PSAwKSB7XG5cdFx0XHRcdGNsZWFySW50ZXJ2YWwoaW50ZXJ2YWwpO1xuXHRcdFx0XHRPc05vdGlmeVdpZGdldChjb25maWcucGF0aWVudENhbGxGYWtlTm90aWZ5SWQsICcnKTtcblxuXHRcdFx0XHRzZXRJbml0aWFsU3RhdGUoKTtcblx0XHRcdH1cblxuXHRcdFx0aWYgKGNvbmZpZy5zaG93Q291bnRkb3duKSAkY291bnRkb3duLnRleHQoY29uZmlnLnR4dENhbGxpbmdJbiArICcgJyArIHRpbWVDb3VudGVyKTtcblx0XHRcdGVsc2UgJGNvdW50ZG93bi50ZXh0KGNvbmZpZy50eHRDYWxsaW5nSW4pO1xuXHRcdH07XG5cblx0XHRpZiAoY29uZmlnLnN0YXJ0Q291bnRpbmcpIGNhbGxQYXRpZW50KCR3aWRnZXQpO1xuXG5cdFx0JGNhbGxCdXR0b24ub24oJ2NsaWNrJywgKCkgPT4ge1xuXHRcdFx0aWYgKCR3aWRnZXQuaGFzQ2xhc3MoJ0NhbGxpbmdQYXRpZW50JykpIHJldHVybjtcblxuXHRcdFx0Y2FsbFBhdGllbnQoJHdpZGdldCk7XG5cblx0XHRcdCRjYWxsQnV0dG9uLmhpZGUoKTtcblx0XHRcdCRvdGhlckNvbnRlbnQuaGlkZSgpO1xuXHRcdH0pO1xuXG5cdFx0JGNhbmNlbEJ1dHRvbi5vbignY2xpY2snLCBldmVudCA9PiB7XG5cdFx0XHR0aW1lQ291bnRlciA9IGNvbmZpZy50aW1lVG9DYW5jZWw7XG5cdFx0XHQkY291bnRkb3duLnRleHQodGltZUNvdW50ZXIpO1xuXHRcdFx0Y2xlYXJJbnRlcnZhbChpbnRlcnZhbCk7XG5cblx0XHRcdHRvZ2dsZUNhbGxpbmdTdGF0ZSgpO1xuXG5cdFx0XHQkY2FsbEJ1dHRvbi5zaG93KCk7XG5cdFx0XHQkb3RoZXJDb250ZW50LnNob3coKTtcblx0XHR9KTtcblx0fTtcblxuXHRTYXBwaGlyZVdpZGdldHMuUGF0aWVudENhbGxDYW5jZWwgPSB7IGNyZWF0ZSB9O1xufSkoalF1ZXJ5LCB3aW5kb3csIGRvY3VtZW50LCBTYXBwaGlyZVdpZGdldHMpO1xuIiwiLyogQ29tcG9uZW50IFBlcnNvbkNhcmQgKi9cbiQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKCkge1xuXHR2YXIgUGVyc29uQ2FyZEV2ZW50ID0gZnVuY3Rpb24oKSB7XG5cdFx0JCgnLklzRXhwYW5kYWJsZSAuUGVyc29uQ2FyZF9faGVhZGVyTGVmdEluZm8sIC5Jc0V4cGFuZGFibGUgLlBlcnNvbkNhcmRfX2NvbnRlbnQnKVxuXHRcdFx0Lm9mZignY2xpY2snKVxuXHRcdFx0Lm9uKCdjbGljaycsIGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRjb25zdCAkaGVhZGVyID0gJCh0aGlzKS5jbG9zZXN0KCcuUGVyc29uQ2FyZF9oZWFkZXInKTtcblx0XHRcdFx0Y29uc3QgJG9uQ2FyZE9wZW5MaW5rID0gJGhlYWRlci5maW5kKCcuUGVyc29uQ2FyZF9fT25DYXJkT3BlbkxpbmsnKTtcblx0XHRcdFx0Y29uc3QgJG9uQ2FyZENsb3NlTGluayA9ICRoZWFkZXIuZmluZCgnLlBlcnNvbkNhcmRfX09uQ2FyZENsb3NlQ2xpY2snKTtcblx0XHRcdFx0Y29uc3QgJGNvbnRlbnQgPSAkaGVhZGVyLm5leHQoKTtcblxuXHRcdFx0XHRpZiAoJGNvbnRlbnQuY2hpbGRyZW4oKS5sZW5ndGggPiAwKSB7XG5cdFx0XHRcdFx0Y29uc3QgJGNhcmQgPSAkKHRoaXMpLmNsb3Nlc3QoJy5QZXJzb25DYXJkJyk7XG5cblx0XHRcdFx0XHQkY29udGVudC5yZW1vdmVDbGFzcygnSXNFeHBhbmRlZCcpO1xuXG5cdFx0XHRcdFx0aWYgKCRjYXJkLmhhc0NsYXNzKCdJc09wZW4nKSkge1xuXHRcdFx0XHRcdFx0JG9uQ2FyZENsb3NlTGluay50cmlnZ2VySGFuZGxlcignY2xpY2snKTtcblx0XHRcdFx0XHRcdCRjYXJkLnJlbW92ZUNsYXNzKCdJc09wZW4nKTtcblx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0JG9uQ2FyZE9wZW5MaW5rLnRyaWdnZXJIYW5kbGVyKCdjbGljaycpO1xuXG5cdFx0XHRcdFx0XHQkY29udGVudC5hZGRDbGFzcygnSXNFeHBhbmRlZCcpO1xuXG5cdFx0XHRcdFx0XHQkY2FyZC5hZGRDbGFzcygnSXNPcGVuJyk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9KTtcblx0fTtcblxuXHQkKCcuU3RvcFByb3BhZ2F0aW9uJykuY2xpY2soZnVuY3Rpb24oZXZlbnQpIHtcblx0XHRldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcblx0fSk7XG5cblx0UGVyc29uQ2FyZEV2ZW50KCk7XG5cblx0b3NBamF4QmFja2VuZC5CaW5kQWZ0ZXJBamF4UmVxdWVzdChQZXJzb25DYXJkRXZlbnQpO1xufSk7XG4iLCIvKiBDb21wb25lbnQgUHJlc2NyaXB0aW9uQ2FyZCAqL1xuKGZ1bmN0aW9uKCQsIHdpbmRvdywgU2FwcGhpcmVXaWRnZXRzKSB7XG5cdGNvbnN0IGNyZWF0ZSA9IGNvbmZpZyA9PiB7XG5cdFx0Y29uc3QgJGNvbXBvbmVudCA9ICQoYCMke2NvbmZpZy53aWRnZXRJZH0gLlByZXNjcmlwdGlvbkNhcmRgKTtcblxuXHRcdGlmIChjb25maWcuaXNFeHBhbmRhYmxlKSB7XG5cdFx0XHRjb25zdCAkZXhwYW5kTGluayA9ICRjb21wb25lbnQuZmluZCgnLlByZXNjcmlwdGlvbkNhcmRfX0V4cGFuZEljb24nKTtcblxuXHRcdFx0JGV4cGFuZExpbmsuY2xpY2soKCkgPT4ge1xuXHRcdFx0XHQkY29tcG9uZW50LnRvZ2dsZUNsYXNzKCdQcmVzY3JpcHRpb25DYXJkLS1leHBhbmRlZCcpO1xuXHRcdFx0fSk7XG5cdFx0fVxuXHR9O1xuXG5cdFNhcHBoaXJlV2lkZ2V0cy5QcmVzY3JpcHRpb25DYXJkID0geyBjcmVhdGUgfTtcbn0pKGpRdWVyeSwgd2luZG93LCBTYXBwaGlyZVdpZGdldHMpO1xuIiwiLyogQ29tcG9uZW50IFByZXNjcmlwdGlvbkV4cGFuZGFibGUgKi9cbihmdW5jdGlvbigkLCB3aW5kb3csIFNhcHBoaXJlV2lkZ2V0cykge1xuXHRjb25zdCBQcmVzY3JpcHRpb25FeHBhbmRhYmxlID0gZnVuY3Rpb24oY29uZmlnKSB7XG5cdFx0Y29uc3Qgd2lkZ2V0SWQgPSBjb25maWcud2lkZ2V0SWQ7XG5cdFx0Y29uc3QgcHJldmlld3N0YXQgPSBbXTtcblx0XHRjb25zdCB0cmFuc2l0aW9uRXZlbnQgPSBTaWxrVUkud2hpY2hUcmFuc2l0aW9uRXZlbnQoKTtcblxuXHRcdGNvbnN0ICRlbGVtZW50V3JhcHBlciA9ICQoYCMke2NvbmZpZy53aWRnZXRJZH1gKTtcblxuXHRcdGNvbnN0IGNsaWNrRXZlbnRzID0gb2IgPT4ge1xuXHRcdFx0aWYgKCQob2IpLmhhc0NsYXNzKCdQcmVzY3JpcHRpb25FeHBhbmRhYmxlX2hlYWRlcl9fTGlua3NEaXYnKSkge1xuXHRcdFx0XHR2YXIgU2VjdGlvbiA9ICQob2IpXG5cdFx0XHRcdFx0LnBhcmVudCgpXG5cdFx0XHRcdFx0LnBhcmVudCgpXG5cdFx0XHRcdFx0LnBhcmVudCgpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0dmFyIFNlY3Rpb24gPSAkKG9iKS5wYXJlbnQoKTtcblx0XHRcdH1cblxuXHRcdFx0dmFyIFNlY3Rpb25Db250ZW50ID0gU2VjdGlvbi5jaGlsZHJlbignLlByZXNjcmlwdGlvbkV4cGFuZGFibGVfY29udGVudCcpO1xuXG5cdFx0XHQvLyBnZXQgaWRcblx0XHRcdHZhciBpZCA9IFNlY3Rpb24uYXR0cignaWQnKTtcblxuXHRcdFx0dmFyIHRlbXBIZWlnaHQgPSAwO1xuXG5cdFx0XHQvLyBoYXMgY2xhc3MgZXhwYW5kZWRcblx0XHRcdGlmIChTZWN0aW9uLmhhc0NsYXNzKCdleHBhbmRlZCcpKSB7XG5cdFx0XHRcdC8vIENhbGMgYW5kIHNldCBhIGZpeGVkIGhlaWdodCwgZHVyaW5nIHRoaXMgcHJvY2VzcywgdHJhbnNpdGlvbnMgYXJlIGRpc2FibGVkXG5cdFx0XHRcdFNlY3Rpb25Db250ZW50LmFkZENsYXNzKCdub1RyYW5zaXRpb24nKTtcblx0XHRcdFx0U2VjdGlvbkNvbnRlbnQuaGVpZ2h0KFNlY3Rpb25Db250ZW50LmhlaWdodCgpKTtcblx0XHRcdFx0U2VjdGlvbkNvbnRlbnRbMF0ub2Zmc2V0SGVpZ2h0OyAvLyBoYWNrIHRvIGZvcmNlIGEgcmVwYWludFxuXHRcdFx0XHRTZWN0aW9uQ29udGVudC5yZW1vdmVDbGFzcygnbm9UcmFuc2l0aW9uJyk7XG5cblx0XHRcdFx0Ly8gQ29sbGFwc2UgY29udGVudFxuXHRcdFx0XHRTZWN0aW9uQ29udGVudC5oZWlnaHQoMCk7XG5cdFx0XHRcdFNlY3Rpb24ucmVtb3ZlQ2xhc3MoJ2V4cGFuZGVkJyk7XG5cdFx0XHRcdFNlY3Rpb25Db250ZW50LmNzcygnb3ZlcmZsb3cnLCAnaGlkZGVuJyk7XG5cblx0XHRcdFx0Ly8gUmVtb3ZlIGNsYXNzLCBzZXQgaGVpZ2h0IGFuZCBzYXZlIHN0YXRlXG5cdFx0XHRcdHByZXZpZXdzdGF0W2lkXVsnY2xpZW50J10gPSBmYWxzZTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdC8vIENhbGMgYW5kIHNldCBhIGZpeGVkIGhlaWdodFxuXHRcdFx0XHRTZWN0aW9uQ29udGVudC5oZWlnaHQoJ2F1dG8nKTtcblx0XHRcdFx0dGVtcEhlaWdodCA9IFNlY3Rpb25Db250ZW50LmhlaWdodCgpO1xuXHRcdFx0XHRTZWN0aW9uQ29udGVudC5oZWlnaHQoMCk7XG5cdFx0XHRcdFNlY3Rpb25Db250ZW50LmhlaWdodCh0ZW1wSGVpZ2h0KTtcblx0XHRcdFx0U2VjdGlvbkNvbnRlbnQuY3NzKCdvdmVyZmxvdycsICdoaWRkZW4nKTtcblxuXHRcdFx0XHQvLyByZW1vdmUgY2xhc3MsIHNldCBoZWlnaHQgYW5kIHNhdmUgc3RhdGVcblx0XHRcdFx0U2VjdGlvbi5hZGRDbGFzcygnZXhwYW5kZWQnKTtcblx0XHRcdFx0cHJldmlld3N0YXRbaWRdWydjbGllbnQnXSA9IHRydWU7XG5cblx0XHRcdFx0Ly8gYWRkIGV2ZW50IHRyYW5zaXRpb24gZW5kIHRvIG92ZXJmbG93OnZpc2libGUgZm9yIHRvb2x0aXBzIGFuZCBkcm9wZG93bnMgaXNzdWVzXG5cdFx0XHRcdFNlY3Rpb25Db250ZW50Lm9uKHRyYW5zaXRpb25FdmVudCwgZnVuY3Rpb24oKSB7XG5cdFx0XHRcdFx0aWYgKFNlY3Rpb24uaGFzQ2xhc3MoJ2V4cGFuZGVkJykpIHtcblx0XHRcdFx0XHRcdFNlY3Rpb25Db250ZW50LmNzcygnb3ZlcmZsb3cnLCAndmlzaWJsZScpO1xuXHRcdFx0XHRcdFx0U2VjdGlvbkNvbnRlbnQuYWRkQ2xhc3MoJ25vVHJhbnNpdGlvbicpO1xuXHRcdFx0XHRcdFx0U2VjdGlvbkNvbnRlbnQuaGVpZ2h0KCdhdXRvJyk7XG5cdFx0XHRcdFx0XHRTZWN0aW9uQ29udGVudFswXS5vZmZzZXRIZWlnaHQ7IC8vIGhhY2sgdG8gZm9yY2UgYSByZXBhaW50XG5cdFx0XHRcdFx0XHRTZWN0aW9uQ29udGVudC5yZW1vdmVDbGFzcygnbm9UcmFuc2l0aW9uJyk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9KTtcblx0XHRcdH1cblx0XHR9O1xuXG5cdFx0dGhpcy5pbml0ID0gKCkgPT4ge1xuXHRcdFx0Y29uc3QgJGhlYWRlciA9ICRlbGVtZW50V3JhcHBlci5maW5kKCcuUHJlc2NyaXB0aW9uRXhwYW5kYWJsZV9oZWFkZXInKTtcblx0XHRcdGNvbnN0ICRsaW5rcyA9ICRoZWFkZXIuZmluZCgnLlByZXNjcmlwdGlvbkV4cGFuZGFibGVfaGVhZGVyX19MaW5rc0RpdicpO1xuXG5cdFx0XHQvLyBDcmVhdGUgYXJyYXkgc3RhdFxuXHRcdFx0JCgnLlNlY3Rpb25QcmVzY3JpcHRpb25FeHBhbmRhYmxlQXJlYScpLmVhY2goKCkgPT4ge1xuXHRcdFx0XHRjb25zdCBzdGF0ID0gJGhlYWRlci5oYXNDbGFzcygnZXhwYW5kZWQnKSA/IHRydWUgOiBmYWxzZTtcblx0XHRcdFx0cHJldmlld3N0YXRbd2lkZ2V0SWRdID0geyBjbGllbnQ6IHN0YXQsIHNlcnZlcjogc3RhdCB9O1xuXHRcdFx0fSk7XG5cblx0XHRcdGlmICgkaGVhZGVyLmhhc0NsYXNzKCdOb3RFeHBhbmRhYmxlJykpIHtcblx0XHRcdFx0JGhlYWRlci5vbignY2xpY2snLCBlID0+IGUucHJldmVudERlZmF1bHQoKSk7XG5cdFx0XHR9IGVsc2UgaWYgKCRoZWFkZXIuaGFzQ2xhc3MoJ2lzTGlua0VwYW5kYWJsZUNsaWNrJykpIHtcblx0XHRcdFx0JGxpbmtzLm9uKCdjbGljaycsIGUgPT4gY2xpY2tFdmVudHMoJGxpbmtzKSk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHQkaGVhZGVyLm9uKCdjbGljaycsIGUgPT4gY2xpY2tFdmVudHMoJGhlYWRlcikpO1xuXHRcdFx0fVxuXG5cdFx0XHRjb25zdCBlbGVtZW50cyA9XG5cdFx0XHRcdCcuUHJlc2NyaXB0aW9uRXhwYW5kYWJsZV9oZWFkZXIgaW5wdXQsIC5QcmVzY3JpcHRpb25FeHBhbmRhYmxlX2hlYWRlciBzZWxlY3QsIC5QcmVzY3JpcHRpb25FeHBhbmRhYmxlX2hlYWRlciBhJztcblx0XHRcdCQoZWxlbWVudHMpLmNsaWNrKGZ1bmN0aW9uKGV2ZW50KSB7XG5cdFx0XHRcdGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuXHRcdFx0fSk7XG5cblx0XHRcdG9zQWpheEJhY2tlbmQuQmluZEFmdGVyQWpheFJlcXVlc3QoYWpheFJlZnJlc2gpO1xuXHRcdH07XG5cblx0XHRjb25zdCBhamF4UmVmcmVzaCA9IGZ1bmN0aW9uKGV2ZW50KSB7XG5cdFx0XHQvLyByZW1vdmUgY2xpY2sgZXZlbnRzXG5cdFx0XHQvLyQoJy5QcmVzY3JpcHRpb25FeHBhbmRhYmxlX2hlYWRlcicpLm9mZigpO1xuXG5cdFx0XHQvLyBhZGQgc3RvcCBwcmVwYWdhdGlvblxuXHRcdFx0JChcblx0XHRcdFx0Jy5QcmVzY3JpcHRpb25FeHBhbmRhYmxlX2hlYWRlciBpbnB1dCwgLlByZXNjcmlwdGlvbkV4cGFuZGFibGVfaGVhZGVyIHNlbGVjdCwgLlByZXNjcmlwdGlvbkV4cGFuZGFibGVfaGVhZGVyIGEnXG5cdFx0XHQpLmNsaWNrKGZ1bmN0aW9uKGV2ZW50KSB7XG5cdFx0XHRcdGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuXHRcdFx0fSk7XG5cblx0XHRcdC8vIGVhY2ggYWxsIHNlY3Rpb25zXG5cdFx0XHQkKCcuU2VjdGlvblByZXNjcmlwdGlvbkV4cGFuZGFibGVBcmVhJykuZWFjaChmdW5jdGlvbigpIHtcblx0XHRcdFx0Ly8gaWYgbmV3IFNlY3Rpb25FeHBhbmRhYmxlIHRoZW4gYWRkIHRvIHByZXZpZXdzdGF0IGFycmF5XG5cdFx0XHRcdGlmIChwcmV2aWV3c3RhdFskKHRoaXMpLmF0dHIoJ2lkJyldID09IG51bGwpIHtcblx0XHRcdFx0XHQvLyBhZGQgc3RhdCBvbiBhcnJheVxuXHRcdFx0XHRcdHZhciBzdGF0ID0gZmFsc2U7XG5cdFx0XHRcdFx0Ly8gaWYgb3BlblxuXHRcdFx0XHRcdGlmICgkKHRoaXMpLmhhc0NsYXNzKCdleHBhbmRlZCcpKSB7XG5cdFx0XHRcdFx0XHRzdGF0ID0gdHJ1ZTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0Ly8gYWRkIHJvd1xuXHRcdFx0XHRcdHByZXZpZXdzdGF0WyQodGhpcykuYXR0cignaWQnKV0gPSB7IGNsaWVudDogc3RhdCwgc2VydmVyOiBzdGF0IH07XG5cdFx0XHRcdH1cblxuXHRcdFx0XHQvLyBjdXJlbnQgc3RhdGUgKGFqYXggc3RhdGUgeCBpbml0aWFsIHN0YXRlKVxuXHRcdFx0XHR2YXIgY3VyU3RhdGUgPSBmYWxzZTtcblxuXHRcdFx0XHQvLyBjaGVjayBpZiBzdGFydCBleHBhbmRhYmxlXG5cdFx0XHRcdGlmICgkKHRoaXMpLmhhc0NsYXNzKCdleHBhbmRlZCcpKSB7XG5cdFx0XHRcdFx0Y3VyU3RhdGUgPSB0cnVlO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0Ly8gY2hlY2sgaWYgYWpheCAhPSBpbml0aWFsIHNlcnZlclxuXHRcdFx0XHRpZiAoY3VyU3RhdGUgIT0gcHJldmlld3N0YXRbJCh0aGlzKS5hdHRyKCdpZCcpXVsnc2VydmVyJ10pIHtcblx0XHRcdFx0XHQvLyBjdXJzdGF0ZVxuXHRcdFx0XHRcdHByZXZpZXdzdGF0WyQodGhpcykuYXR0cignaWQnKV1bJ2NsaWVudCddID0gY3VyU3RhdGU7XG5cdFx0XHRcdFx0cHJldmlld3N0YXRbJCh0aGlzKS5hdHRyKCdpZCcpXVsnc2VydmVyJ10gPSBjdXJTdGF0ZTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHQvLyBoYXMgY2xhc3MgZXhwYW5kZWRcblx0XHRcdFx0XHRpZiAocHJldmlld3N0YXRbJCh0aGlzKS5hdHRyKCdpZCcpXVsnY2xpZW50J10gPT0gZmFsc2UgJiYgJCh0aGlzKS5oYXNDbGFzcygnZXhwYW5kZWQnKSkge1xuXHRcdFx0XHRcdFx0JCh0aGlzKS5yZW1vdmVDbGFzcygnZXhwYW5kZWQnKTtcblx0XHRcdFx0XHRcdCQodGhpcylcblx0XHRcdFx0XHRcdFx0LmNoaWxkcmVuKCcuUHJlc2NyaXB0aW9uRXhwYW5kYWJsZV9jb250ZW50Jylcblx0XHRcdFx0XHRcdFx0LmhlaWdodCgwKTtcblx0XHRcdFx0XHR9IGVsc2UgaWYgKHByZXZpZXdzdGF0WyQodGhpcykuYXR0cignaWQnKV1bJ2NsaWVudCddID09IHRydWUgJiYgISQodGhpcykuaGFzQ2xhc3MoJ2V4cGFuZGVkJykpIHtcblx0XHRcdFx0XHRcdCQodGhpcykuYWRkQ2xhc3MoJ2V4cGFuZGVkJyk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9KTtcblx0XHR9O1xuXHR9O1xuXG5cdGNvbnN0IGNyZWF0ZSA9IGNvbmZpZyA9PiB7XG5cdFx0U2lsa1VJLlNlY3Rpb25FeHBhbmRhYmxlID0gbmV3IFByZXNjcmlwdGlvbkV4cGFuZGFibGUoY29uZmlnKTtcblx0XHRTaWxrVUkuRXhlY3V0ZShTaWxrVUkuU2VjdGlvbkV4cGFuZGFibGUuaW5pdCwgJ0Vycm9yIG9uIFdlYlBhdHRlcm5zL0NvbnRlbnQvU2VjdGlvbkV4cGFuZGFibGUnKTtcblx0fTtcblxuXHRTYXBwaGlyZVdpZGdldHMuUHJlc2NyaXB0aW9uRXhwYW5kYWJsZSA9IHsgY3JlYXRlIH07XG59KShqUXVlcnksIHdpbmRvdywgU2FwcGhpcmVXaWRnZXRzKTtcbiIsIi8qIENvbXBvbmVudCBTYXBwaGlyZUhlYWRlciAqL1xuKGZ1bmN0aW9uKCQsIHdpbmRvdywgZG9jdW1lbnQsIFNhcHBoaXJlV2lkZ2V0cykge1xuXHR2YXIgY3JlYXRlID0gZnVuY3Rpb24oY29uZmlnKSB7XG5cdFx0d2luZG93W2NvbmZpZy53aWRnZXRJZF0gPSBuZXcgU2FwcGhpcmVIZWFkZXIoY29uZmlnKTtcblx0XHRTYXBwaGlyZVdpZGdldHMuU2FwcGhpcmVIZWFkZXIud2lkZ2V0SWQgPSBjb25maWcud2lkZ2V0SWQ7XG5cdH07XG5cblx0dmFyIGhhbmRsZURlbW9ncmFwaGljcyA9IGZ1bmN0aW9uKCkge1xuXHRcdHdpbmRvd1tTYXBwaGlyZVdpZGdldHMuU2FwcGhpcmVIZWFkZXIud2lkZ2V0SWRdLmhhbmRsZURlbW9ncmFwaGljcygpO1xuXHR9O1xuXG5cdHZhciBTYXBwaGlyZUhlYWRlciA9IGZ1bmN0aW9uKGNvbmZpZykge1xuXHRcdHZhciBfdGhpcyA9IHRoaXM7XG5cdFx0dGhpcy5jb25maWcgPSBjb25maWc7XG5cdFx0dGhpcy5pc0NvbmZpZGVudGlhbCA9IGNvbmZpZy5pc0NvbmZpZGVudGlhbDtcblx0XHR0aGlzLiR3aWRnZXQgPSAkKCcjJyArIGNvbmZpZy53aWRnZXRJZCk7XG5cdFx0dGhpcy4kd2lkZ2V0LmNzcyh7XG5cdFx0XHRkaXNwbGF5OiAnYmxvY2snLFxuXHRcdH0pO1xuXHRcdHRoaXMuJGhlYWRlciA9IHRoaXMuJHdpZGdldC5maW5kKCcuU2FwcGhpcmVIZWFkZXInKTtcblx0XHR0aGlzLiRuYXZpZ2F0aW9uID0gdGhpcy4kd2lkZ2V0LmZpbmQoJy5TYXBwaGlyZUhlYWRlci1uYXZpZ2F0aW9uJyk7XG5cdFx0dGhpcy4kaWRlbnRpZmljYXRpb24gPSB0aGlzLiR3aWRnZXQuZmluZCgnLlNhcHBoaXJlSGVhZGVyLWlkZW50aWZpY2F0aW9uJyk7XG5cdFx0dGhpcy4kZGVtb2dyYXBoaWMgPSB0aGlzLiR3aWRnZXQuZmluZCgnLlNhcHBoaXJlSGVhZGVyLWRlbW9ncmFwaGljcycpO1xuXHRcdHRoaXMuJGluZm9ybWF0aW9uID0gdGhpcy4kd2lkZ2V0LmZpbmQoJy5TYXBwaGlyZUhlYWRlci1pbmZvcm1hdGlvbicpO1xuXHRcdHRoaXMuJGFjdGlvbnMgPSB0aGlzLiR3aWRnZXQuZmluZCgnLlNhcHBoaXJlSGVhZGVyLWFjdGlvbnMnKTtcblx0XHR0aGlzLiRhZGRpdGlvbmFsVHJpZ2dlciA9IHRoaXMuJHdpZGdldC5maW5kKCcuU2FwcGhpcmVIZWFkZXItYWRkaXRpb25hbC10cmlnZ2VyJyk7XG5cdFx0dGhpcy4kYWRkaXRpb25hbENvbnRlbnQgPSB0aGlzLiR3aWRnZXQuZmluZCgnLlNhcHBoaXJlSGVhZGVyLWFkZGl0aW9uYWwtY29udGVudCcpO1xuXG5cdFx0dGhpcy5oYW5kbGVSZXNpemUoKTtcblx0XHR0aGlzLmF0dGFjaEV2ZW50cygpO1xuXG5cdFx0aWYgKHRoaXMuJGluZm9ybWF0aW9uLnRleHQoKSA9PT0gJycpIHtcblx0XHRcdHRoaXMuJGluZm9ybWF0aW9uLmhpZGUoKTtcblx0XHR9XG5cdH07XG5cblx0U2FwcGhpcmVIZWFkZXIucHJvdG90eXBlLmdldENvbmZpZyA9IGZ1bmN0aW9uKCkge1xuXHRcdHJldHVybiB0aGlzLmNvbmZpZztcblx0fTtcblxuXHRTYXBwaGlyZUhlYWRlci5wcm90b3R5cGUuaGFuZGxlUmVzaXplID0gZnVuY3Rpb24oKSB7XG5cdFx0dmFyIF90aGlzID0gdGhpcztcblx0XHQkKHdpbmRvdykucmVzaXplKGZ1bmN0aW9uKCkge1xuXHRcdFx0X3RoaXMuaGFuZGxlRGVtb2dyYXBoaWNzKCk7XG5cdFx0fSk7XG5cdH07XG5cblx0U2FwcGhpcmVIZWFkZXIucHJvdG90eXBlLmF0dGFjaEV2ZW50cyA9IGZ1bmN0aW9uKCkge1xuXHRcdHZhciBfdGhpcyA9IHRoaXM7XG5cdFx0dGhpcy4kYWRkaXRpb25hbFRyaWdnZXIub24oJ2NsaWNrJywgZnVuY3Rpb24oKSB7XG5cdFx0XHRpZiAoX3RoaXMuJGhlYWRlci5oYXNDbGFzcygnaXNPcGVuJykpIHtcblx0XHRcdFx0X3RoaXMuJGhlYWRlci5yZW1vdmVDbGFzcygnaXNPcGVuJyk7XG5cdFx0XHRcdC8vJCgnLkxheW91dEJhc2UtaGVhZGVyJykuY3NzKCd6LWluZGV4JywgMik7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRfdGhpcy4kaGVhZGVyLmFkZENsYXNzKCdpc09wZW4nKTtcblx0XHRcdFx0Ly8kKCcuTGF5b3V0QmFzZS1oZWFkZXInKS5jc3MoJ3otaW5kZXgnLCAzKTtcblx0XHRcdH1cblx0XHR9KTtcblx0fTtcblxuXHRTYXBwaGlyZUhlYWRlci5wcm90b3R5cGUuaGFuZGxlRGVtb2dyYXBoaWNzID0gZnVuY3Rpb24oKSB7XG5cdFx0Y29uc3QgX3RoaXMgPSB0aGlzO1xuXHRcdHRoaXMuJGRlbW9ncmFwaGljLmZpbmQoJy5EZW1vZ3JhcGhpYy1pdGVtJykuY3NzKCdkaXNwbGF5JywgJ25vbmUnKTtcblxuXHRcdHRoaXMuJGFkZGl0aW9uYWxUcmlnZ2VyLmhpZGUoKTtcblx0XHR0aGlzLiRhZGRpdGlvbmFsQ29udGVudC5lbXB0eSgpO1xuXG5cdFx0Y29uc3QgZGVtb2dyYXBoaWNXaWR0aCA9IHRoaXMuJGRlbW9ncmFwaGljLm91dGVyV2lkdGgodHJ1ZSk7XG5cdFx0bGV0IGl0ZW1zVG90YWwgPSAwO1xuXG5cdFx0Y29uc3QgY29tcG9uZW50V2lkdGggPSB0aGlzLiR3aWRnZXQub3V0ZXJXaWR0aCh0cnVlKTtcblx0XHRjb25zdCBuYXZpZ2F0aW9uV2lkdGggPSB0aGlzLiRuYXZpZ2F0aW9uLndpZHRoKCk7XG5cdFx0Y29uc3QgaWRlbnRpZmljYXRpb25XaWR0aCA9IHRoaXMuJGlkZW50aWZpY2F0aW9uLndpZHRoKCk7XG5cdFx0Y29uc3QgZGVtb2dyYXBoaWNzV2lkdGggPSB0aGlzLiRkZW1vZ3JhcGhpYy53aWR0aCgpO1xuXHRcdGNvbnN0IGluZm9ybWF0aW9uV2lkdGggPSB0aGlzLiRpbmZvcm1hdGlvbi53aWR0aCgpO1xuXHRcdGNvbnN0IGFjdGlvbnNXaWR0aCA9IHRoaXMuJGFjdGlvbnMud2lkdGgoKTtcblxuXG5cdFx0dGhpcy4kZGVtb2dyYXBoaWMuZmluZCgnLkRlbW9ncmFwaGljLWl0ZW0nKS5lYWNoKGZ1bmN0aW9uKGluZGV4KSB7XG5cdFx0XHRpdGVtc1RvdGFsICs9IHBhcnNlSW50KCQodGhpcykub3V0ZXJXaWR0aCh0cnVlKSwgMTApO1xuXG5cdFx0XHQvLyA2NCAtPiBtYXJnaW5zIGFuZCA5OSAtPiBNb3JlIEluZm8gYnV0dG9uXG5cdFx0XHRpZiAoaXRlbXNUb3RhbCArIDY0ICsgMTEwIDwgZGVtb2dyYXBoaWNXaWR0aCkge1xuXHRcdFx0XHQkKHRoaXMpLmNzcygnZGlzcGxheScsICdpbmxpbmUtYmxvY2snKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdCQodGhpcylcblx0XHRcdFx0XHQuY2xvbmUoKVxuXHRcdFx0XHRcdC5jc3MoJ2Rpc3BsYXknLCAnaW5saW5lLWJsb2NrJylcblx0XHRcdFx0XHQuYXBwZW5kVG8oX3RoaXMuJGFkZGl0aW9uYWxDb250ZW50KTtcblx0XHRcdFx0X3RoaXMuJGFkZGl0aW9uYWxUcmlnZ2VyLnNob3coKTtcblx0XHRcdH1cblx0XHR9KTtcblxuXHRcdGlmICh0aGlzLiRhZGRpdGlvbmFsQ29udGVudC5maW5kKCcuRGVtb2dyYXBoaWMtaXRlbScpLmxlbmd0aCA9PT0gMCkge1xuXHRcdFx0dGhpcy4kaGVhZGVyLnJlbW92ZUNsYXNzKCdpc09wZW4nKTtcblx0XHR9XG5cdH07XG5cblx0U2FwcGhpcmVIZWFkZXIucHJvdG90eXBlLnNob3dBZGRpdGlvbmFsID0gZnVuY3Rpb24oKSB7XG5cdFx0cmV0dXJuIHRoaXMuJGhlYWRlci5hZGRDbGFzcygnaXNPcGVuJyk7XG5cdH07XG5cblx0U2FwcGhpcmVIZWFkZXIucHJvdG90eXBlLmhpZGVBZGRpdGlvbmFsID0gZnVuY3Rpb24oKSB7XG5cdFx0cmV0dXJuIHRoaXMuJGhlYWRlci5yZW1vdmVDbGFzcygnaXNPcGVuJyk7XG5cdH07XG5cblx0U2FwcGhpcmVXaWRnZXRzLlNhcHBoaXJlSGVhZGVyID0ge1xuXHRcdGNyZWF0ZTogY3JlYXRlLFxuXHRcdGhhbmRsZURlbW9ncmFwaGljczogaGFuZGxlRGVtb2dyYXBoaWNzLFxuXHR9O1xufSkoalF1ZXJ5LCB3aW5kb3csIGRvY3VtZW50LCBTYXBwaGlyZVdpZGdldHMpO1xuXG4kKHdpbmRvdykubG9hZChmdW5jdGlvbigpIHtcblx0aWYgKCEhU2FwcGhpcmVXaWRnZXRzLlNhcHBoaXJlSGVhZGVyLndpZGdldElkKSB7XG5cdFx0d2luZG93W1NhcHBoaXJlV2lkZ2V0cy5TYXBwaGlyZUhlYWRlci53aWRnZXRJZF0uaGFuZGxlRGVtb2dyYXBoaWNzKCk7XG5cdH1cblx0aWYgKCEhJCgnLlNhcHBoaXJlSGVhZGVyLWRlbW9ncmFwaGljcycpLmxlbmd0aCkge1xuXHRcdG9zQWpheEJhY2tlbmQuQmluZEFmdGVyQWpheFJlcXVlc3QoZnVuY3Rpb24oKSB7XG5cdFx0XHR3aW5kb3dbU2FwcGhpcmVXaWRnZXRzLlNhcHBoaXJlSGVhZGVyLndpZGdldElkXS5oYW5kbGVEZW1vZ3JhcGhpY3MoKTtcblx0XHR9KTtcblx0fVxufSk7XG4iLCIvKiBDb21wb25lbnQgU2FwcGhpcmVQb3B1cCAqL1xudmFyIFJpY2hXaWRnZXRzX1BvcHVwX0VkaXRvcl9ub3RpZnlXaWRnZXQ7XG5cbihmdW5jdGlvbigkLCB3aW5kb3csIFNhcHBoaXJlV2lkZ2V0cykge1xuXHQvLyBDaGVjayBpZiB0aGUgd2lkZ2V0IGlzIGxvYWRlZCBpbnNpZGUgYW4gaUZyYW1lXG5cdGxldCBpc0luc2lkZUlmcmFtZSA9IHdpbmRvdy5mcmFtZUVsZW1lbnQgIT0gdW5kZWZpbmVkIHx8IGZhbHNlO1xuXG5cdC8vIENvbnN0YW50c1xuXHRjb25zdCBQT1BVUF9JTklUSUFMX1dJRFRIID0gMzAwO1xuXHRjb25zdCBQT1BVUF9JTklUSUFMX0hFSUdIVCA9IDEwMDtcblx0Y29uc3QgUE9QVVBfV0lORE9XX0lOREVYID0gNDAxMDtcblx0Y29uc3QgUE9QVVBfQ0xPU0lOR19UQUcgPSAnY2xvc2luZyc7XG5cdGNvbnN0IFBPUFVQX0NMT1NJTkdfVkFMVUUgPSAndHJ1ZSc7XG5cblx0bGV0IFBPUFVQX05PVElGWV9XSURHRVQ7XG5cdGxldCBQT1BVUF9QQVJFTlRfVVJMO1xuXG5cdGNvbnN0IGNyZWF0ZSA9IGNvbmZpZyA9PiB7XG5cdFx0aWYgKGNvbmZpZy5pZ25vcmVJZnJhbWUpIGlzSW5zaWRlSWZyYW1lID0gZmFsc2U7XG5cblx0XHQkKCkucmVhZHkoZnVuY3Rpb24oJCkge1xuXHRcdFx0Y29uc3QgX2lkID0gY29uZmlnLmxpbmtJZDtcblx0XHRcdGNvbnN0IGxpbmtRdWVyeSA9IGAjJHtjb25maWcubGlua0lkfWA7XG5cdFx0XHRsZXQgbGlua1dpZGdldDtcblxuXHRcdFx0dHJ5IHtcblx0XHRcdFx0bGlua1dpZGdldCA9ICQobGlua1F1ZXJ5KS5nZXQoMCk7XG5cdFx0XHR9IGNhdGNoIChlKSB7fVxuXG5cdFx0XHRpZiAodHlwZW9mIGxpbmtXaWRnZXQgPT0gJ3VuZGVmaW5lZCcpIHtcblx0XHRcdFx0Ly9DYXNlIHRoZSB3aWRnZXQgaXMgaW5leGlzdGVudCBvciBpbnZpc2libGUsIGl0IHdpbGwgc2hvdyBubyBlcnJvcnMuXG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblxuXHRcdFx0UE9QVVBfUEFSRU5UX1VSTCA9IGNvbmZpZy5wYXJlbnRVcmw7XG5cblx0XHRcdGNvbnN0IGxpbmtSZXN1bHQgPSBnZXRMaW5rSFJFRihsaW5rV2lkZ2V0KTtcblx0XHRcdGNvbnN0IGxpbmtIcmVmID0gbGlua1Jlc3VsdFswXTtcblx0XHRcdGNvbnN0IGlzQUJ1dHRvbiA9IGxpbmtSZXN1bHRbMV07XG5cblx0XHRcdGlmICh0eXBlb2YgbGlua0hyZWYgPT0gJ3VuZGVmaW5lZCcgfHwgbGlua0hyZWYgPT0gJycgfHwgbGlua0hyZWYgPT0gJyMnIHx8IGxpbmtIcmVmLmluZGV4T2YoJ2phdmFzY3JpcHQ6JykgPT0gMCkge1xuXHRcdFx0XHR0cnkge1xuXHRcdFx0XHRcdHdpbmRvdy5Pc0hhbmRsZUV4Y2VwdGlvbihcblx0XHRcdFx0XHRcdG5ldyBFcnJvcignUG9wdXAgbGluayBpZCBtdXN0IGJlIHRoZSBpZCBvZiBhIExpbmsgb3IgQnV0dG9uIFdpZGdldCB3aXRoIE1ldGhvZCBOYXZpZ2F0ZS4nKSxcblx0XHRcdFx0XHRcdG91dHN5c3RlbXMub3NFcnJvckNvZGVzLlN5c3RlbUphdmFzY3JpcHRFcnJvcixcblx0XHRcdFx0XHRcdCdQb3B1cF9FZGl0b3InXG5cdFx0XHRcdFx0KTtcblx0XHRcdFx0fSBjYXRjaCAoZSkge31cblxuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cblx0XHRcdC8vIFJlbW92ZSB0aGUgZXhpc3Rpbmcgb24tY2xpY2sgZXZlbnRcblx0XHRcdGlmIChpc0FCdXR0b24pIHtcblx0XHRcdFx0bGlua1dpZGdldC5zZXRBdHRyaWJ1dGUoXG5cdFx0XHRcdFx0J29uY2xpY2snLFxuXHRcdFx0XHRcdGxpbmtXaWRnZXRcblx0XHRcdFx0XHRcdC5nZXRBdHRyaWJ1dGUoJ29uY2xpY2snKVxuXHRcdFx0XHRcdFx0LnRvU3RyaW5nKClcblx0XHRcdFx0XHRcdC5yZXBsYWNlKCd3aW5kb3cubG9jYXRpb24uaHJlZj0nLCAncmV0dXJuIGZhbHNlO3dpbmRvdy5sb2NhdGlvbi5ocmVmPScpXG5cdFx0XHRcdCk7XG5cdFx0XHR9XG5cblx0XHRcdC8vIElmIHRoZXJlJ3MgYSBjb25maXJtYXRpb24gbWVzc2FnZSwgc3RvcmUgaW4gYW4gYXR0cmlidXRlIHRoZSByZXN1bHRcblx0XHRcdGlmIChsaW5rV2lkZ2V0LmdldEF0dHJpYnV0ZSgnb25jbGljaycpICE9IG51bGwpIHtcblx0XHRcdFx0bGlua1dpZGdldC5zZXRBdHRyaWJ1dGUoXG5cdFx0XHRcdFx0J29uY2xpY2snLFxuXHRcdFx0XHRcdGxpbmtXaWRnZXRcblx0XHRcdFx0XHRcdC5nZXRBdHRyaWJ1dGUoJ29uY2xpY2snKVxuXHRcdFx0XHRcdFx0LnRvU3RyaW5nKClcblx0XHRcdFx0XHRcdC5yZXBsYWNlKFxuXHRcdFx0XHRcdFx0XHQnaWYoIHJldCAhPSB0cnVlICknLFxuXHRcdFx0XHRcdFx0XHRcIiQoJ1wiICsgbGlua1F1ZXJ5ICsgXCInKS5nZXQoMCkuc2V0QXR0cmlidXRlKCdjb25maXJtZWQnLCByZXQpOyBpZiggcmV0ICE9IHRydWUgKVwiXG5cdFx0XHRcdFx0XHQpXG5cdFx0XHRcdCk7XG5cdFx0XHR9XG5cblx0XHRcdGNvbnN0IGNsaWNrSGFuZGxlciA9IGZ1bmN0aW9uKGV2ZW50KSB7XG5cdFx0XHRcdC8vIFRoZSBjbGlja0hhbmRsZXIgZXZlbnQgaXMgcmVnaXN0ZXJlZCBpbiBvc2pzIGFuZCAkIGZvciBjb21wYXRpYmlsbGl0eSByZWFzb25zLCB0aGV5IG11c3Qgbm90IHJ1biBib3RoIGZvciB0aGUgc2FtZSBjbGljay5cblx0XHRcdFx0Ly8gVmFyaWFibGUgaXMgc2V0IHRvIGZhbHNlIGluIHJlc2l6ZSBmdW5jdGlvbi5cblx0XHRcdFx0aWYgKCQuZGF0YShldmVudC50YXJnZXQsICdvcy1pbnRlcm5hbC1wcm9jZXNzaW5nJykgPT0gdHJ1ZSkge1xuXHRcdFx0XHRcdHJldHVybiBmYWxzZTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHQkLmRhdGEoZXZlbnQudGFyZ2V0LCAnb3MtaW50ZXJuYWwtcHJvY2Vzc2luZycsIHRydWUpO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0Ly8gQ2hlY2sgaWYgdGhlIGNsaWNrZWQgbGluayBpcyBkaXNhYmxlZFxuXHRcdFx0XHRpZiAobGlua1dpZGdldC5nZXRBdHRyaWJ1dGUoJ2Rpc2FibGVkJykgIT0gbnVsbCkge1xuXHRcdFx0XHRcdHZhciBsaW5rRGlzYWJsZWQgPSBsaW5rV2lkZ2V0XG5cdFx0XHRcdFx0XHQuZ2V0QXR0cmlidXRlKCdkaXNhYmxlZCcpXG5cdFx0XHRcdFx0XHQudG9TdHJpbmcoKVxuXHRcdFx0XHRcdFx0LnRvTG93ZXJDYXNlKCk7XG5cblx0XHRcdFx0XHRpZiAobGlua0Rpc2FibGVkID09ICdkaXNhYmxlZCcgfHwgbGlua0Rpc2FibGVkLmluZGV4T2YoJ3RydWUnKSAhPSAtMSkge1xuXHRcdFx0XHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXG5cdFx0XHRcdGlmIChsaW5rV2lkZ2V0LmdldEF0dHJpYnV0ZSgnY29uZmlybWVkJykgPT0gJ2ZhbHNlJykgcmV0dXJuIGZhbHNlO1xuXHRcdFx0XHRpZiAoT3NJc0lFKCkpIG9zRm9jdXNCYWNrZW5kLkNsZWFyRm9jdXNlZEVsZW1lbnQoKTtcblxuXHRcdFx0XHRsZXQgcG9wdXBEaXY7XG5cdFx0XHRcdGxldCBwbGVhc2VXYWl0RGl2O1xuXG5cdFx0XHRcdGNvbnN0IHdhaXRUZXh0ID0gYDxkaXYgc3R5bGU9XCJtYXJnaW4tdG9wOiAzNnB4O1wiPiR7Y29uZmlnLmxvYWRpbmdNZXNzYWdlfTwvZGl2PmA7XG5cdFx0XHRcdGNvbnN0IGltZ0hUTUwgPSAnPGRpdiBjbGFzcz1cImxkcy1yaW5nXCI+PGRpdj48L2Rpdj48L2Rpdj4nO1xuXHRcdFx0XHRjb25zdCBsb2FkaW5nRWxlbWVudCA9IGA8ZGl2IGNsYXNzPVwiTGF5b3V0UG9wdXAtbG9hZGluZ1wiPiR7aW1nSFRNTH0gJHt3YWl0VGV4dH08L2Rpdj5gO1xuXHRcdFx0XHRjb25zdCBpRnJhbWVFbGVtZW50ID0gYDxpZnJhbWUgaWQ9XCJpZnJhbWVfJHtfaWR9XCIgd2lkdGg9XCIxMDAlXCIgc2Nyb2xsaW5nPVwibm9cIiBoZWlnaHQ9XCIxMDAlXCIgZnJhbWVib3JkZXI9XCIwXCIgc3JjPVwiamF2YXNjcmlwdDp2b2lkKDApO1wiLz5gO1xuXG5cdFx0XHRcdGlmIChpc0luc2lkZUlmcmFtZSkge1xuXHRcdFx0XHRcdGxldCBfZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnRElWJyk7XG5cdFx0XHRcdFx0X2Rpdi5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywgJ3RleHQtYWxpZ246IGNlbnRlcjsgZGlzcGxheTogbm9uZTsnKTtcblx0XHRcdFx0XHRfZGl2LnNldEF0dHJpYnV0ZSgnaWQnLCAnd2luZG93XycgKyBfaWQpO1xuXHRcdFx0XHRcdHdpbmRvdy50b3AuZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChfZGl2KTtcblxuXHRcdFx0XHRcdHBvcHVwRGl2ID0gd2luZG93LnRvcC4kKCcjd2luZG93XycgKyBfaWQpO1xuXHRcdFx0XHRcdHBvcHVwRGl2LmFwcGVuZChpRnJhbWVFbGVtZW50KTtcblxuXHRcdFx0XHRcdHBsZWFzZVdhaXREaXYgPSBwb3B1cERpdi5wcmVwZW5kKGxvYWRpbmdFbGVtZW50KTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRwb3B1cERpdiA9ICQoXCI8ZGl2IHN0eWxlPSd0ZXh0LWFsaWduOiBjZW50ZXI7IGRpc3BsYXk6IG5vbmU7Jz48L2Rpdj5cIikuYXBwZW5kVG8oJ2JvZHknKTtcblx0XHRcdFx0XHRwb3B1cERpdi5hcHBlbmQoaUZyYW1lRWxlbWVudCk7XG5cblx0XHRcdFx0XHRwbGVhc2VXYWl0RGl2ID0gcG9wdXBEaXYucHJlcGVuZChsb2FkaW5nRWxlbWVudCk7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRjb25zdCBsb2FkVGFyZ2V0UGFnZSA9IGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRcdGlmIChpc0luc2lkZUlmcmFtZSkge1xuXHRcdFx0XHRcdFx0d2luZG93LnRvcC5QT1BVUF9OT1RJRllfV0lER0VUID0gY29uZmlnLm5vdGlmeUlkO1xuXHRcdFx0XHRcdFx0Ly8gQ3JlYXRlIGEgcmVmZXJlbmNlIHRvIHRoZSBpZnJhbWUgb2JqZWN0IG9uIHRoZSBkb2N1bWVudCBwYXJlbnRcblx0XHRcdFx0XHRcdHdpbmRvdy50b3AuX2lmcmFtZVBvcHVwID0gd2luZG93LmZyYW1lRWxlbWVudC5jb250ZW50V2luZG93O1xuXHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHR3aW5kb3cudG9wLl9pZnJhbWVQb3B1cCA9IHdpbmRvdztcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRQT1BVUF9OT1RJRllfV0lER0VUID0gY29uZmlnLm5vdGlmeUlkO1xuXHRcdFx0XHRcdFJpY2hXaWRnZXRzX1BvcHVwX0VkaXRvcl9ub3RpZnlXaWRnZXQgPSBjb25maWcubm90aWZ5SWQ7XG5cdFx0XHRcdFx0d2luZG93LnRvcC5faWZyYW1lUG9wdXAuUmljaFdpZGdldHNfUG9wdXBfRWRpdG9yX25vdGlmeVdpZGdldCA9IGNvbmZpZy5ub3RpZnlJZDtcblxuXHRcdFx0XHRcdC8vIExvYWQgdGFyZ2V0IHBhZ2Vcblx0XHRcdFx0XHRjb25zdCBvaHJlZiA9IGdldExpbmtIUkVGKGxpbmtXaWRnZXQpWzBdO1xuXHRcdFx0XHRcdGNvbnN0IHJocmVmID0gb2hyZWYucmVwbGFjZSgvKFxcP3wmKV89Lio/KCZ8JCkvLCAnJDFfPScgKyArbmV3IERhdGUoKS5ub3cgKyAnJDInKTtcblx0XHRcdFx0XHRjb25zdCB4aHJlZiA9IHJocmVmICsgKHJocmVmID09IG9ocmVmID8gKHJocmVmLmluZGV4T2YoJz8nKSA+PSAwID8gJyYnIDogJz8nKSArICdfPScgKyArbmV3IERhdGUoKSA6ICcnKTtcblxuXHRcdFx0XHRcdHBvcHVwRGl2LmZpbmQoJ2lmcmFtZScpLmF0dHIoJ3NyYycsIHhocmVmKTtcblxuXHRcdFx0XHRcdChmdW5jdGlvbihwb3B1cERpdikge1xuXHRcdFx0XHRcdFx0cG9wdXBEaXYuZmluZCgnaWZyYW1lJykubG9hZChmdW5jdGlvbigpIHtcblx0XHRcdFx0XHRcdFx0Ly8gQWZ0ZXIgbG9hZGluZyB0cnkgdG8gcmVzaXplXG5cdFx0XHRcdFx0XHRcdHJlc2l6ZShwb3B1cERpdiwgX2lkLCBjb25maWcuc2V0V2lkdGgsIGNvbmZpZy5zZXRIZWlnaHQsIHRydWUsIGV2ZW50KTtcblx0XHRcdFx0XHRcdH0pO1xuXHRcdFx0XHRcdH0pKHBvcHVwRGl2KTtcblxuXHRcdFx0XHRcdHBvcHVwRGl2ID0gbnVsbDtcblx0XHRcdFx0XHRwbGVhc2VXYWl0RGl2ID0gbnVsbDtcblx0XHRcdFx0fTtcblxuXHRcdFx0XHRvcGVuUG9wdXAocG9wdXBEaXYsIHBsZWFzZVdhaXREaXYsIGxvYWRUYXJnZXRQYWdlLCBldmVudCwgY29uZmlnKTtcblxuXHRcdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0XHR9O1xuXG5cdFx0XHQkKGxpbmtRdWVyeSkuY2xpY2soY2xpY2tIYW5kbGVyKTtcblxuXHRcdFx0U2FwcGhpcmVXaWRnZXRzLlNhcHBoaXJlUG9wdXAucG9wdXBXaWR0aCA9IGNvbmZpZy5zZXRXaWR0aCB8fCBQT1BVUF9JTklUSUFMX1dJRFRIO1xuXHRcdH0pO1xuXHR9O1xuXG5cdGNvbnN0IHJlc2l6ZSA9IChkaXZUb1BvcHVwLCBfaWQsIHNldFdpZHRoLCBzZXRIZWlnaHQsIHJlY2VudGVyLCBldmVudCkgPT4ge1xuXHRcdC8vIENvZGUgdG8gc3VwcG9ydCBvbGQgcmVzaXplIG1ldGhvZCBQb3B1cF9XaW5kb3dfcmVzaXplKHNldFdpZHRoLCBzZXRIZWlnaHQsIHJlY2VudGVyKVxuXHRcdGlmICh0eXBlb2YgcmVjZW50ZXIgPT0gJ3VuZGVmaW5lZCcpIHtcblx0XHRcdHJlY2VudGVyID0gc2V0SGVpZ2h0O1xuXHRcdFx0c2V0SGVpZ2h0ID0gc2V0V2lkdGg7XG5cdFx0XHRzZXRXaWR0aCA9IGRpdlRvUG9wdXA7XG5cblx0XHRcdGlmIChpc0luc2lkZUlmcmFtZSkge1xuXHRcdFx0XHRkaXZUb1BvcHVwID0gd2luZG93LnRvcC4kKCcub3MtaW50ZXJuYWwtdWktZGlhbG9nLWNvbnRlbnQnKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGRpdlRvUG9wdXAgPSAkKCcub3MtaW50ZXJuYWwtdWktZGlhbG9nLWNvbnRlbnQnKTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHQvLyBSZXNpemUgbXVzdCBiYWlsIG91dCBpbW1lZGlhdGVseSBpZiB0aGUgcG9wdXAgaXMgbWFya2VkIGFzIGNsb3NpbmcsIGFuZCBub3Qgc3RhcnQgdGhlIGFuaW1hdGlvbi5cblx0XHRpZiAoJC5kYXRhKGRpdlRvUG9wdXAuZ2V0KDApLCBQT1BVUF9DTE9TSU5HX1RBRykgPT0gUE9QVVBfQ0xPU0lOR19WQUxVRSkge1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblxuXHRcdGxldCBkb2N1bWVudFNlcnZlcjtcblx0XHRsZXQgZnJhbWVPYmogPSBkaXZUb1BvcHVwLmZpbmQoJ2lmcmFtZScpWzBdO1xuXG5cdFx0aWYgKHR5cGVvZiBmcmFtZU9iaiA9PSAndW5kZWZpbmVkJykge1xuXHRcdFx0ZnJhbWVPYmogPSB3aW5kb3cudG9wLiQoJyNpZnJhbWVfJyArIF9pZClbMF07XG5cdFx0fVxuXG5cdFx0aWYgKGlzSW5zaWRlSWZyYW1lKSB7XG5cdFx0XHRkb2N1bWVudFNlcnZlciA9IHdpbmRvdy50b3AuZG9jdW1lbnQubG9jYXRpb24uaHJlZi5yZXBsYWNlKC8oaHR0cHM/OlxcL1xcL1teXFwvXSopLiovLCAnJDEnKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0ZG9jdW1lbnRTZXJ2ZXIgPSBkb2N1bWVudC5sb2NhdGlvbi5ocmVmLnJlcGxhY2UoLyhodHRwcz86XFwvXFwvW15cXC9dKikuKi8sICckMScpO1xuXHRcdH1cblxuXHRcdGlmICh0eXBlb2YgZnJhbWVPYmogIT0gJ3VuZGVmaW5lZCcpIHtcblx0XHRcdGNvbnN0IGZyYW1lU2VydmVyID0gZnJhbWVPYmouc3JjLnJlcGxhY2UoLyhodHRwcz86XFwvXFwvW15cXC9dKikuKi8sICckMScpO1xuXHRcdFx0Y29uc3Qgc2FtZU9yaWdpbiA9IGZyYW1lU2VydmVyLnRvTG93ZXJDYXNlKCkgPT0gZG9jdW1lbnRTZXJ2ZXIudG9Mb3dlckNhc2UoKSB8fCBmcmFtZVNlcnZlci5pbmRleE9mKCdodHRwJykgIT0gMDtcblxuXHRcdFx0aWYgKCFzYW1lT3JpZ2luICYmIChzZXRXaWR0aCA9PSAtMSB8fCBzZXRIZWlnaHQgPT0gLTEpKSB7XG5cdFx0XHRcdHRocm93IG5ldyBFcnJvcignQSBQb3B1cCB3aXRoIGEgc2NyZWVuIGZyb20gYSBkaWZmZXJlbnQgc2VydmVyIChvciBodHRwcykgbmVlZHMgZXhwbGljaWN0IHdpZHRoLCBoZWlnaHQgc2V0LicpO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiAoc2FtZU9yaWdpbikge1xuXHRcdFx0XHRpZiAoZnJhbWVPYmouY29udGVudERvY3VtZW50ICE9PSBudWxsIHx8IGZyYW1lT2JqLmNvbnRlbnRXaW5kb3cgIT09IG51bGwpIHtcblx0XHRcdFx0XHR2YXIgaW5uZXJEb2MgPSBmcmFtZU9iai5jb250ZW50RG9jdW1lbnQgPyBmcmFtZU9iai5jb250ZW50RG9jdW1lbnQgOiBmcmFtZU9iai5jb250ZW50V2luZG93LmRvY3VtZW50O1xuXHRcdFx0XHRcdGlmIChpbm5lckRvYy5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsSGVpZ2h0ID09IDApXG5cdFx0XHRcdFx0XHQvLyBTdHJhbmdlbHkgdGhpcyBldmVudCBpcyBhbHNvIHRyaWdnZXJlZCBvbiBjbG9zZVxuXHRcdFx0XHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdGxldCBvbGRIZWlnaHQ7XG5cdFx0XHRpZiAoaXNJbnNpZGVJZnJhbWUpIHtcblx0XHRcdFx0b2xkSGVpZ2h0ID0gd2luZG93LnRvcFxuXHRcdFx0XHRcdC4kKGRpdlRvUG9wdXApXG5cdFx0XHRcdFx0LnBhcmVudHMoJy5vcy1pbnRlcm5hbC1Qb3B1cCcpXG5cdFx0XHRcdFx0Lm91dGVySGVpZ2h0KCk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRvbGRIZWlnaHQgPSAkKGRpdlRvUG9wdXApXG5cdFx0XHRcdFx0LnBhcmVudHMoJy5vcy1pbnRlcm5hbC1Qb3B1cCcpXG5cdFx0XHRcdFx0Lm91dGVySGVpZ2h0KCk7XG5cdFx0XHR9XG5cblx0XHRcdGxldCB3aWR0aCA9IHNldFdpZHRoID09IC0xID8gJChpbm5lckRvYykud2lkdGgoKSA6IHNldFdpZHRoO1xuXHRcdFx0bGV0IGhlaWdodCA9IHNldEhlaWdodCA9PSAtMSA/ICQoaW5uZXJEb2MpLmhlaWdodCgpIDogc2V0SGVpZ2h0O1xuXG5cdFx0XHR2YXIgdGl0bGVIZWlnaHQ7XG5cdFx0XHRpZiAoaXNJbnNpZGVJZnJhbWUpIHtcblx0XHRcdFx0dGl0bGVIZWlnaHQgPSB3aW5kb3cudG9wLiQoJy5vcy1pbnRlcm5hbC11aS1kaWFsb2ctdGl0bGViYXInKS5oZWlnaHQoKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHRpdGxlSGVpZ2h0ID0gJCgnLm9zLWludGVybmFsLXVpLWRpYWxvZy10aXRsZWJhcicpLmhlaWdodCgpO1xuXHRcdFx0fVxuXG5cdFx0XHQvLyBWZXJpZnkgaWYgdGhlIHBhcmVudCB3aW5kb3cgd2lkdGggaXMgbGVzcyB0aGFuIHRoZSBwb3AtdXAgd2luZG93LCBpZiBzbyBzZXQgdGhlIHJlc3BvbnNpdmUgY2xhc3Mgb24gdGhlIGlmcmFtZSBib2R5IChmb3IgcmVzcG9uc2l2ZSB0aGVtZXMpXG5cdFx0XHRpZiAod2luZG93LmlubmVyV2lkdGggPCB3aWR0aCkge1xuXHRcdFx0XHQvLyBvbmx5IHNldCB0aGUgY2xhc3MgaWYgdGhlIG9yaWdpbiBpcyB0aGUgc2FtZVxuXHRcdFx0XHRpZiAoc2FtZU9yaWdpbikge1xuXHRcdFx0XHRcdCQoaW5uZXJEb2MpXG5cdFx0XHRcdFx0XHQuZmluZCgnYm9keScpXG5cdFx0XHRcdFx0XHQuYWRkQ2xhc3MoJ1Jlc3BvbnNpdmUnKTtcblx0XHRcdFx0XHR3aWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoIC0gMjA7IC8vIDEwcHggXCJwYWRkaW5nXCIgZWZmZWN0LCB0byBrZWVwIHRoZSBwb3B1cCBsb29rIGFuZCBmZWVsIG9uIHRvcCBvZiBjb250ZW50XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0Ly8gRml4IGlzc3VlcyB3aXRoIHNjcm9sbGJhcnNcblx0XHRcdGlmIChzZXRIZWlnaHQgPT0gLTEpIHtcblx0XHRcdFx0Ly8gSUU3IG5lZWRzIGEgbGl0dGxlIG1vcmUgc3BhY2UgdG8gcmVtb3ZlIHRoZSBzY3JvbGxiYXJzXG5cdFx0XHRcdGlmICgkLmJyb3dzZXIubXNpZSkgaGVpZ2h0ID0gaGVpZ2h0ICsgMTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdC8vd2hlbiBleHBsaWNpdGx5IHNldHRpbmcgdGhlIGhlaWdodFxuXHRcdFx0XHRpZiAoc2FtZU9yaWdpbikgaW5uZXJEb2MuYm9keS5zdHlsZS5oZWlnaHQgPSAnYXV0byc7XG5cdFx0XHR9XG5cblx0XHRcdGlmIChpc0luc2lkZUlmcmFtZSkge1xuXHRcdFx0XHR3aW5kb3cudG9wLiQoZGl2VG9Qb3B1cCkuaGVpZ2h0KGhlaWdodCk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHQkKGRpdlRvUG9wdXApLmhlaWdodChoZWlnaHQpO1xuXHRcdFx0fVxuXG5cdFx0XHQvL0hpZGUgRUNUXG5cdFx0XHRpZiAoaXNJbnNpZGVJZnJhbWUpIHtcblx0XHRcdFx0d2luZG93LnRvcFxuXHRcdFx0XHRcdC4kKGlubmVyRG9jKVxuXHRcdFx0XHRcdC5maW5kKCcuRUNUX0ZlZWRiYWNrQ29udGFpbmVyJylcblx0XHRcdFx0XHQuaGlkZSgpO1xuXHRcdFx0XHR2YXIgZGl2UG9wdXBPdXRlcldpbmRvdyA9IHdpbmRvdy50b3AuJChkaXZUb1BvcHVwKS5wYXJlbnRzKCcub3MtaW50ZXJuYWwtUG9wdXAnKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdCQoaW5uZXJEb2MpXG5cdFx0XHRcdFx0LmZpbmQoJy5FQ1RfRmVlZGJhY2tDb250YWluZXInKVxuXHRcdFx0XHRcdC5oaWRlKCk7XG5cdFx0XHRcdHZhciBkaXZQb3B1cE91dGVyV2luZG93ID0gJChkaXZUb1BvcHVwKS5wYXJlbnRzKCcub3MtaW50ZXJuYWwtUG9wdXAnKTtcblx0XHRcdH1cblxuXHRcdFx0dmFyIGFuaW1hdGVGaW5hbCA9IHt9O1xuXG5cdFx0XHRpZiAoc2V0SGVpZ2h0ID09IC0xKSB7XG5cdFx0XHRcdHZhciBvbGRUb3AgPSBwYXJzZUludChkaXZQb3B1cE91dGVyV2luZG93LmNzcygndG9wJykpO1xuXHRcdFx0XHRpZiAocmVjZW50ZXIpIGFuaW1hdGVGaW5hbC50b3AgPSBNYXRoLm1heCgyMCwgb2xkVG9wICsgKG9sZEhlaWdodCAtIChoZWlnaHQgKyB0aXRsZUhlaWdodCkpIC8gMik7XG5cdFx0XHRcdGFuaW1hdGVGaW5hbC5oZWlnaHQgPSBoZWlnaHQgKyB0aXRsZUhlaWdodDtcblx0XHRcdH1cblxuXHRcdFx0aWYgKHNldFdpZHRoID09IC0xKSB7XG5cdFx0XHRcdHZhciBvbGRMZWZ0ID0gcGFyc2VJbnQoZGl2UG9wdXBPdXRlcldpbmRvdy5jc3MoJ2xlZnQnKSk7XG5cdFx0XHRcdGlmIChyZWNlbnRlcikgYW5pbWF0ZUZpbmFsLmxlZnQgPSBvbGRMZWZ0ICsgKGRpdlBvcHVwT3V0ZXJXaW5kb3cud2lkdGgoKSAtIHdpZHRoKSAvIDI7XG5cdFx0XHRcdGFuaW1hdGVGaW5hbC53aWR0aCA9IHdpZHRoO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiAoXG5cdFx0XHRcdGRpdlBvcHVwT3V0ZXJXaW5kb3cud2lkdGgoKSA9PSBhbmltYXRlRmluYWwud2lkdGggJiZcblx0XHRcdFx0ZGl2UG9wdXBPdXRlcldpbmRvdy5oZWlnaHQoKSA9PSBhbmltYXRlRmluYWwuaGVpZ2h0IC0gKCQuYnJvd3Nlci5tc2llID8gMSA6IDApXG5cdFx0XHQpIHtcblx0XHRcdFx0JCgnLm9zLWludGVybmFsLXVpLWRpYWxvZy1jb250ZW50Pi5MYXlvdXRQb3B1cC1sb2FkaW5nJykuaGlkZSgpO1xuXHRcdFx0XHQkKGRpdlRvUG9wdXApLmhlaWdodChoZWlnaHQgLSAoJC5icm93c2VyLm1zaWUgPyAxIDogMCkpOyAvLyByZXN0b3JlIHNpemVcblx0XHRcdFx0cmV0dXJuIHRydWU7IC8vIG5vdGhpbmcgdG8gZG8uLi5cblx0XHRcdH1cblxuXHRcdFx0Ly8gaGlkZSBjb250ZW50IGluIGZpcnN0IHJlc2l6ZSAtIHJlYWRqdXN0bWVudHMgd2lsbCBub3QgZmxpY2tyXG5cdFx0XHRpZiAoZGl2UG9wdXBPdXRlcldpbmRvdy53aWR0aCgpID09IFBPUFVQX0lOSVRJQUxfV0lEVEggJiYgZGl2UG9wdXBPdXRlcldpbmRvdy5oZWlnaHQoKSA9PSBQT1BVUF9JTklUSUFMX0hFSUdIVCkge1xuXHRcdFx0XHQkKGZyYW1lT2JqKS5oZWlnaHQoMCk7XG5cdFx0XHR9XG5cblx0XHRcdHZhciBvbkFuaW1hdGlvbkNvbXBsZXRlID0gZnVuY3Rpb24oKSB7XG5cdFx0XHRcdHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG5cdFx0XHRcdFx0aWYgKGlzSW5zaWRlSWZyYW1lKSB7XG5cdFx0XHRcdFx0XHR3aW5kb3cudG9wLiQoJy5vcy1pbnRlcm5hbC11aS1kaWFsb2ctdGl0bGViYXItY2xvc2Utbm8tdGl0bGUnKS5jc3MoJ2Rpc3BsYXknLCAnYmxvY2snKTtcblx0XHRcdFx0XHRcdHdpbmRvdy50b3Bcblx0XHRcdFx0XHRcdFx0LiQoZGl2VG9Qb3B1cClcblx0XHRcdFx0XHRcdFx0LmZpbmQoJ2lmcmFtZScpXG5cdFx0XHRcdFx0XHRcdC5oZWlnaHQoJzEwMCUnKVxuXHRcdFx0XHRcdFx0XHQud2lkdGgoYW5pbWF0ZUZpbmFsLndpZHRoKTtcblx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0JCgnLm9zLWludGVybmFsLXVpLWRpYWxvZy10aXRsZWJhci1jbG9zZS1uby10aXRsZScpLmNzcygnZGlzcGxheScsICdibG9jaycpO1xuXHRcdFx0XHRcdFx0JChkaXZUb1BvcHVwKVxuXHRcdFx0XHRcdFx0XHQuZmluZCgnaWZyYW1lJylcblx0XHRcdFx0XHRcdFx0LmhlaWdodCgnMTAwJScpXG5cdFx0XHRcdFx0XHRcdC53aWR0aChhbmltYXRlRmluYWwud2lkdGgpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSwgMTMpO1xuXHRcdFx0fTtcblxuXHRcdFx0dmFyIGRpdlBsZWFzZVdhaXQ7XG5cdFx0XHRpZiAoaXNJbnNpZGVJZnJhbWUpIHtcblx0XHRcdFx0ZGl2UGxlYXNlV2FpdCA9IHdpbmRvdy50b3AuJCgnLm9zLWludGVybmFsLXVpLWRpYWxvZy1jb250ZW50Pi5MYXlvdXRQb3B1cC1sb2FkaW5nJyk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRkaXZQbGVhc2VXYWl0ID0gJCgnLm9zLWludGVybmFsLXVpLWRpYWxvZy1jb250ZW50Pi5MYXlvdXRQb3B1cC1sb2FkaW5nJyk7XG5cdFx0XHR9XG5cblx0XHRcdGRpdlBsZWFzZVdhaXQuaGlkZSgpO1xuXG5cdFx0XHRpZiAoc2V0SGVpZ2h0ID09IC0xIHx8IHNldFdpZHRoID09IC0xKSB7XG5cdFx0XHRcdGRpdlBvcHVwT3V0ZXJXaW5kb3cuYW5pbWF0ZShhbmltYXRlRmluYWwsIHtcblx0XHRcdFx0XHRkdXJhdGlvbjogMjAwLFxuXHRcdFx0XHRcdGNvbXBsZXRlOiBvbkFuaW1hdGlvbkNvbXBsZXRlLFxuXHRcdFx0XHR9KTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdG9uQW5pbWF0aW9uQ29tcGxldGUoKTtcblx0XHRcdH1cblx0XHRcdGlubmVyRG9jID0gbnVsbDtcblx0XHRcdGRpdlBvcHVwT3V0ZXJXaW5kb3cgPSBudWxsO1xuXHRcdFx0aWYgKGlzSW5zaWRlSWZyYW1lKSB7XG5cdFx0XHRcdHdpbmRvdy50b3AuJC5kYXRhKGV2ZW50LnRhcmdldCwgJ29zLWludGVybmFsLXByb2Nlc3NpbmcnLCBmYWxzZSk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHQkLmRhdGEoZXZlbnQudGFyZ2V0LCAnb3MtaW50ZXJuYWwtcHJvY2Vzc2luZycsIGZhbHNlKTtcblx0XHRcdH1cblx0XHRcdHJldHVybiB0cnVlO1xuXHRcdH1cblx0fTtcblxuXHRjb25zdCBjbG9zZSA9ICgpID0+IHtcblx0XHRsZXQgcG9wdXBUb0Nsb3NlO1xuXHRcdGxldCBwb3B1cENvbnRhaW5lcjtcblxuXHRcdGlmIChpc0luc2lkZUlmcmFtZSkge1xuXHRcdFx0cG9wdXBUb0Nsb3NlID0gd2luZG93LnRvcC4kKCcub3MtaW50ZXJuYWwtdWktZGlhbG9nLWNvbnRlbnQnKTtcblx0XHRcdHBvcHVwQ29udGFpbmVyID0gd2luZG93LnRvcC4kKCcuU2FwcGhpcmVQb3B1cCcpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRwb3B1cFRvQ2xvc2UgPSAkKCcub3MtaW50ZXJuYWwtdWktZGlhbG9nLWNvbnRlbnQnKTtcblx0XHRcdHBvcHVwQ29udGFpbmVyID0gJCgnLlNhcHBoaXJlUG9wdXAnKTtcblx0XHR9XG5cblx0XHRwb3B1cFRvQ2xvc2UuZGF0YShQT1BVUF9DTE9TSU5HX1RBRywgUE9QVVBfQ0xPU0lOR19WQUxVRSk7XG5cblx0XHQvL3NldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG5cdFx0aWYgKHBvcHVwVG9DbG9zZS5sZW5ndGgpIHBvcHVwVG9DbG9zZS5kaWFsb2coJ2Nsb3NlJyk7XG5cblx0XHRwb3B1cFRvQ2xvc2UucmVtb3ZlKCk7XG5cdFx0cG9wdXBDb250YWluZXIucmVtb3ZlKCk7XG5cdFx0Ly99LCAwKTtcblx0fTtcblxuXHRjb25zdCBnZXRMaW5rSFJFRiA9IHdpZGdldCA9PiB7XG5cdFx0bGV0IGxpbmtIcmVmO1xuXHRcdGxldCBpc0FCdXR0b24gPSBmYWxzZTtcblxuXHRcdHRyeSB7XG5cdFx0XHQvL0NoZWNrcyBpZiB0aGUgaWQgaXMgZnJvbSBhIGxpbmsgb3Igbm90XG5cdFx0XHRsaW5rSHJlZiA9ICQod2lkZ2V0KS5hdHRyKCdocmVmJyk7XG5cblx0XHRcdC8vVGVzdHMgZm9yIHZpc2liaWxpdHkvZXhpc3RlbmNlXG5cdFx0XHRpZiAodHlwZW9mIGxpbmtIcmVmID09ICd1bmRlZmluZWQnKSB7XG5cdFx0XHRcdGNvbnN0IG9uQ2xpY2sgPSB3aWRnZXQuZ2V0QXR0cmlidXRlKCdvbmNsaWNrJyk7XG5cblx0XHRcdFx0aWYgKHR5cGVvZiBvbkNsaWNrICE9ICd1bmRlZmluZWQnKSB7XG5cdFx0XHRcdFx0aXNBQnV0dG9uID0gdHJ1ZTtcblxuXHRcdFx0XHRcdGlmIChvbkNsaWNrICE9IG51bGwpIHtcblx0XHRcdFx0XHRcdGxldCBocmVmTWF0Y2g7XG5cblx0XHRcdFx0XHRcdGlmICgoaHJlZk1hdGNoID0gb25DbGljay50b1N0cmluZygpLm1hdGNoKC9ocmVmPScoW14nXSopJy8pKSAhPSBudWxsKSB7XG5cdFx0XHRcdFx0XHRcdGxpbmtIcmVmID0gaHJlZk1hdGNoWzFdO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH0gY2F0Y2ggKGUpIHt9XG5cblx0XHRyZXR1cm4gW2xpbmtIcmVmLCBpc0FCdXR0b25dO1xuXHR9O1xuXG5cdGNvbnN0IG9wZW5Qb3B1cCA9IChkaXZUb1BvcHVwLCBkaXZQbGVhc2VXYWl0LCBsb2FkVGFyZ2V0UGFnZSwgZXZlbnQsIGNvbmZpZykgPT4ge1xuXHRcdC8vIERlc3Ryb3kgYW55IHByZXZpb3VzIGRpYWxvZ1xuXHRcdGNsb3NlKG51bGwpO1xuXG5cdFx0aWYgKGlzSW5zaWRlSWZyYW1lKSB7XG5cdFx0XHRjb25zdCAkalBhcmVudCA9IHdpbmRvdy50b3AuJDtcblx0XHRcdCRqUGFyZW50KCcub3MtaW50ZXJuYWwtUG9wdXAnKS5yZW1vdmUoKTtcblx0XHR9XG5cblx0XHQvLyBJZiBhbnkgY2xvc2UgaXMgcGVuZGluZywgc2NoZWR1bGUgdG8gZXhlY3V0ZSBpdHNlbGYgYXN5bmNocm9ub3VzbHkgZXhpdFxuXHRcdC8vIElmIG5vIGNsb3NlIGlzIHBlbmRpbmcsIGNvbnRpbnVlIHdpdGggb3BlbiBvcGVyYXRpb25cblx0XHRsZXQgY2xvc2luZ1BvcHVwcztcblxuXHRcdGlmIChpc0luc2lkZUlmcmFtZSkgY2xvc2luZ1BvcHVwcyA9IHdpbmRvdy50b3AuJCgnLm9zLWludGVybmFsLXVpLWRpYWxvZy1jb250ZW50Jyk7XG5cdFx0ZWxzZSBjbG9zaW5nUG9wdXBzID0gJCgnLm9zLWludGVybmFsLXVpLWRpYWxvZy1jb250ZW50Jyk7XG5cblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IGNsb3NpbmdQb3B1cHMubGVuZ3RoOyBpKyspIHtcblx0XHRcdGlmICgkLmRhdGEoY2xvc2luZ1BvcHVwcy5nZXQoaSksIFBPUFVQX0NMT1NJTkdfVEFHKSA9PSBQT1BVUF9DTE9TSU5HX1ZBTFVFKSB7XG5cdFx0XHRcdHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG5cdFx0XHRcdFx0b3BlblBvcHVwKGRpdlRvUG9wdXAsIGRpdlBsZWFzZVdhaXQsIGxvYWRUYXJnZXRQYWdlLCBldmVudCwgY29uZmlnKTtcblx0XHRcdFx0fSwgMTMpO1xuXG5cdFx0XHRcdHJldHVybiBmYWxzZTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRsZXQgX2RpYWxvZztcblxuXHRcdGlmIChpc0luc2lkZUlmcmFtZSkge1xuXHRcdFx0Y29uc3QgcG9wdXBDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdESVYnKTtcblx0XHRcdHBvcHVwQ29udGFpbmVyLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnU2FwcGhpcmVQb3B1cCcpO1xuXG5cdFx0XHR3aW5kb3cudG9wLmRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQocG9wdXBDb250YWluZXIpO1xuXG5cdFx0XHRfZGlhbG9nID0gd2luZG93LnRvcC4kKGRpdlRvUG9wdXApO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHQkKCc8ZGl2IGNsYXNzPVwiU2FwcGhpcmVQb3B1cFwiPjwvZGl2PicpLmFwcGVuZFRvKCdib2R5Jyk7XG5cblx0XHRcdF9kaWFsb2cgPSAkKGRpdlRvUG9wdXApO1xuXHRcdH1cblxuXHRcdCQoZGl2UGxlYXNlV2FpdCkuc2hvdygpO1xuXG5cdFx0aWYgKCQoJy5JU2lkZWJhcicpLmxlbmd0aCkgd2luZG93LnBhcmVudC5TYXBwaGlyZVdpZGdldHMuTGF5b3V0QmFzZS5vcGVuU2lkZWJhcklmcmFtZSgwKTtcblxuXHRcdF9kaWFsb2cuc2hvdygpLmRpYWxvZyh7XG5cdFx0XHRhcHBlbmRUbzogJy5TYXBwaGlyZVBvcHVwJyxcblx0XHRcdGRpYWxvZ0NsYXNzOiAnb3MtaW50ZXJuYWwtUG9wdXAnLFxuXHRcdFx0cmVzaXphYmxlOiBmYWxzZSxcblx0XHRcdGF1dG9SZXNpemU6IGZhbHNlLFxuXHRcdFx0Y2xvc2VPbkVzY2FwZTogIWNvbmZpZy5oaWRlQ2xvc2VCdXR0b24sXG5cdFx0XHRiZ2lmcmFtZTogdHJ1ZSxcblx0XHRcdGRyYWdnYWJsZTogZmFsc2UsXG5cdFx0XHRhdXRvT3BlbjogdHJ1ZSxcblx0XHRcdHRpdGxlOiBjb25maWcuc2V0VGl0bGUsXG5cdFx0XHRtb2RhbDogIShjb25maWcudXNlTW9kYWwgPT09IGZhbHNlKSxcblx0XHRcdGhlaWdodDogY29uZmlnLnNldEhlaWdodCA9PSAtMSA/IFBPUFVQX0lOSVRJQUxfSEVJR0hUIDogY29uZmlnLnNldEhlaWdodCxcblx0XHRcdHBvc2l0aW9uOiAnY2VudGVyJyxcblx0XHRcdHdpZHRoOiBjb25maWcuc2V0V2lkdGggPT0gLTEgPyBQT1BVUF9JTklUSUFMX1dJRFRIIDogY29uZmlnLnNldFdpZHRoLFxuXHRcdFx0ekluZGV4OiBQT1BVUF9XSU5ET1dfSU5ERVgsXG5cdFx0XHRjbG9zZTogZnVuY3Rpb24oKSB7XG5cdFx0XHRcdC8vIElmIHRoZSBwb3B1cCBpcyBjbG9zZWQgYmVmb3JlIGl0IGlzIHJlc2l6ZWQgKEVTQykgd2UgbmVlZCB0byBzZXQgdGhlIHByb2Nlc3NpbmcgZXZlbnQgdG8gZmFsc2UuXG5cdFx0XHRcdCQuZGF0YShldmVudC50YXJnZXQsICdvcy1pbnRlcm5hbC1wcm9jZXNzaW5nJywgZmFsc2UpO1xuXG5cdFx0XHRcdF9kaWFsb2cuZmluZCgnaWZyYW1lJykudW5iaW5kKCdsb2FkJyk7XG5cdFx0XHRcdF9kaWFsb2cuZmluZCgnaWZyYW1lJykuYXR0cignc3JjJywgJ2Fib3V0OmJsYW5rJyk7XG5cblx0XHRcdFx0c2V0VGltZW91dChmdW5jdGlvbigpIHtcblx0XHRcdFx0XHRfZGlhbG9nLmZpbmQoJ2lmcmFtZScpLmVtcHR5KCk7XG5cdFx0XHRcdFx0X2RpYWxvZy5lbXB0eSgpO1xuXHRcdFx0XHR9LCAxMyk7XG5cdFx0XHR9LFxuXHRcdH0pO1xuXG5cdFx0X2RpYWxvZy5maW5kKCdpZnJhbWUnKS5oZWlnaHQoMCk7XG5cdFx0X2RpYWxvZy5wYXJlbnRzKCcub3MtaW50ZXJuYWwtdWktZGlhbG9nJykuZHJvcFNoYWRvdygpO1xuXG5cdFx0aWYgKGNvbmZpZy5Dc3NDbGFzc2VzICE9PSAnICcpIHtcblx0XHRcdGlmIChpc0luc2lkZUlmcmFtZSkgd2luZG93LnRvcC4kKCcub3MtaW50ZXJuYWwtdWktZGlhbG9nJykuYWRkQ2xhc3MoY29uZmlnLkNzc0NsYXNzZXMpO1xuXHRcdFx0ZWxzZSAkKCcub3MtaW50ZXJuYWwtdWktZGlhbG9nJykuYWRkQ2xhc3MoY29uZmlnLkNzc0NsYXNzZXMpO1xuXHRcdH1cblxuXHRcdGxvYWRUYXJnZXRQYWdlKCk7XG5cdH07XG5cblx0U2FwcGhpcmVXaWRnZXRzLlNhcHBoaXJlUG9wdXAgPSB7IGNyZWF0ZSwgY2xvc2UsIHJlc2l6ZSB9O1xufSkoalF1ZXJ5LCB3aW5kb3csIFNhcHBoaXJlV2lkZ2V0cyk7XG4iLCIvKiBDb21wb25lbnQgU2FwcGhpcmVSYWRpb0J1dHRvbiAqL1xuU2FwcGhpcmVXaWRnZXRzLlNhcHBoaXJlUmFkaW9CdXR0b24gPSB3aWRnZXRJZCA9PiB7XG5cdGNvbnN0ICR3aWRnZXQgPSAkKGAjJHt3aWRnZXRJZH1gKTtcblx0Y29uc3QgJGlucHV0ID0gJHdpZGdldC5maW5kKCdpbnB1dFt0eXBlPVwicmFkaW9cIl0nKTtcblx0Y29uc3QgJGxhYmVsID0gJHdpZGdldC5maW5kKCcuQnV0dG9uUmFkaW9JbnBfcmFkaW9UZXh0Jyk7XG5cdGNvbnN0IG5hbWUgPSAkaW5wdXQucHJvcCgnbmFtZScpO1xuXG5cdGNvbnN0IGFkZFJlbW92ZUNsYXNzID0gKCRlbCwgdG9BZGQpID0+IHtcblx0XHRpZiAodG9BZGQpICRlbC5hZGRDbGFzcygnYWN0aXZlJyk7XG5cdFx0ZWxzZSAkZWwucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xuXHR9O1xuXG5cdGNvbnN0IGlzQ2hlY2tlZCA9ICRlbCA9PiB7XG5cdFx0aWYgKCRlbC5pcygnOmNoZWNrZWQnKSkgYWRkUmVtb3ZlQ2xhc3MoJHdpZGdldCwgdHJ1ZSk7XG5cdFx0ZWxzZSBhZGRSZW1vdmVDbGFzcygkd2lkZ2V0LCBmYWxzZSk7XG5cdH07XG5cblx0JGlucHV0LmNsaWNrKGZ1bmN0aW9uKCkge1xuXHRcdCR3aWRnZXQucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xuXG5cdFx0JChgaW5wdXRbdHlwZT1cInJhZGlvXCJdW25hbWU9XCIke25hbWV9XCJdYCkuZWFjaChmdW5jdGlvbigpIHtcblx0XHRcdGFkZFJlbW92ZUNsYXNzKCQodGhpcykuY2xvc2VzdCgnLkJ1dHRvblJhZGlvSW5wJyksICQodGhpcykuaXMoJzpjaGVja2VkJykpO1xuXHRcdH0pO1xuXHR9KTtcblxuXHQkaW5wdXQub24oJ2NoYW5nZScsIGZ1bmN0aW9uKCkge1xuXHRcdGlzQ2hlY2tlZCgkKHRoaXMpKTtcblx0fSk7XG5cblx0JGxhYmVsLmNsaWNrKGZ1bmN0aW9uKCkge1xuXHRcdGNvbnN0ICRjbG9zZXN0RWxlbWVudCA9ICQodGhpcykuY2xvc2VzdCgnLkJ1dHRvblJhZGlvSW5wJyk7XG5cblx0XHRpZiAoJGNsb3Nlc3RFbGVtZW50Lmhhc0NsYXNzKCdkaXNhYmxlZCcpKSByZXR1cm4gZmFsc2U7XG5cblx0XHQkaW5wdXRbMF0uY2xpY2soKTtcblx0XHQvL2lzQ2hlY2tlZCgkaW5wdXQpO1xuXHR9KTtcblxuXHRpc0NoZWNrZWQoJGlucHV0KTtcbn07XG4iLCIvKiBDb21wb25lbnQgU2NhbGVNYWluU3RydWN0dXJlICovXG4oZnVuY3Rpb24oJCwgd2luZG93LCBTYXBwaGlyZVdpZGdldHMpIHtcblx0Y29uc3QgY3JlYXRlID0gY29uZmlnID0+IHtcblx0XHQkKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigpIHtcblx0XHRcdHNldHVwU2NhbGUoKTtcblx0XHRcdGJpbmRDbGlja3MoKTtcblxuXHRcdFx0b3NBamF4QmFja2VuZC5CaW5kQWZ0ZXJBamF4UmVxdWVzdChmdW5jdGlvbigpIHtcblx0XHRcdFx0c2V0VGltZW91dChmdW5jdGlvbigpIHtcblx0XHRcdFx0XHRiaW5kQ2xpY2tzKCk7XG5cdFx0XHRcdH0sIDEwMDApO1xuXHRcdFx0fSk7XG5cdFx0fSk7XG5cdH07XG5cblx0U2NhbGVDb3VudCA9IGNvbmYgPT4ge1xuXHRcdCQoZnVuY3Rpb24oKSB7XG5cdFx0XHR2YXIgQ2FyZFNjYWxlID0gY29uZi5Jc0NhcmRTY2FsZTtcblx0XHRcdHZhciBSdWxlclNjYWxlID0gY29uZi5Jc1J1bGVyU2NhbGU7XG5cdFx0XHR2YXIgTXVsdGlwbGVTY2FsZSA9IGNvbmYuSXNNdWx0aXBsZVNjYWxlO1xuXHRcdFx0dmFyICR0b3RhbFBsYWNlID0gJCgnLlNjYWxlTWFpblN0cnVjdHVyZV9mb290ZXJSZXN1bHQnKTtcblx0XHRcdHZhciB0b3RhbENhcmRTY2FsZSA9IDA7XG5cdFx0XHR2YXIgdG90YWxNdWx0aXBsZVNjYWxlID0gMDtcblx0XHRcdHZhciB0b3RhbFJ1bGVyU2NhbGUgPSAwO1xuXG5cdFx0XHR2YXIgU2NhbGVUeXBlQ2FyZCA9IGZ1bmN0aW9uKCkge1xuXHRcdFx0XHR2YXIgdG90YWxTZWxlY3RlZCA9ICQoJy5TY2FsZUxpc3QuQ2FyZFNjYWxlJykuZmluZCgnLlNjYWxlQ2FyZC5hY3RpdmUnKS5sZW5ndGg7XG5cdFx0XHRcdHZhciB0b3RhbE51bWJlciA9IDA7XG5cdFx0XHRcdCQoXCIuU2NhbGVMaXN0LkNhcmRTY2FsZTpub3QoJy5pc1RpdGxlJylcIikuZWFjaChmdW5jdGlvbigpIHtcblx0XHRcdFx0XHRpZiAoJCh0aGlzKS5maW5kKCcuU2NhbGVDYXJkJykubGVuZ3RoID4gMCkge1xuXHRcdFx0XHRcdFx0dG90YWxOdW1iZXIgKz0gMTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0pO1xuXG5cdFx0XHRcdGlmICh0b3RhbE51bWJlciA9PT0gdG90YWxTZWxlY3RlZCkge1xuXHRcdFx0XHRcdHZhciB0b3RhbCA9IFtdO1xuXHRcdFx0XHRcdHZhciBpbnB1dFZhbHVlID0gJyc7XG5cdFx0XHRcdFx0dmFyICRzY2FsZVJvdyA9ICQoJy5TY2FsZUxpc3QuQ2FyZFNjYWxlOm5vdCguaXNUaXRsZSknKTtcblx0XHRcdFx0XHQkc2NhbGVSb3cuZWFjaChmdW5jdGlvbigpIHtcblx0XHRcdFx0XHRcdGlucHV0VmFsdWUgPSAkKHRoaXMpXG5cdFx0XHRcdFx0XHRcdC5maW5kKCcuU2NhbGVDYXJkLmFjdGl2ZScpXG5cdFx0XHRcdFx0XHRcdC5kYXRhKCd2YWx1ZScpO1xuXHRcdFx0XHRcdFx0JCh0aGlzKVxuXHRcdFx0XHRcdFx0XHQuZmluZCgnLlNjYWxlTGlzdF9pbnB1dFZhbHVlIGlucHV0Jylcblx0XHRcdFx0XHRcdFx0LnZhbChpbnB1dFZhbHVlKTtcblx0XHRcdFx0XHR9KTtcblxuXHRcdFx0XHRcdCQoJy5TY2FsZUxpc3QuQ2FyZFNjYWxlIC5TY2FsZUNhcmQuYWN0aXZlJykuZWFjaChmdW5jdGlvbigpIHtcblx0XHRcdFx0XHRcdHRvdGFsLnB1c2goJCh0aGlzKS5kYXRhKCd2YWx1ZScpKTtcblx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHR2YXIgZmluYWxUb3RhbCA9IGV2YWwodG90YWwuam9pbignKycpKTtcblx0XHRcdFx0XHRyZXR1cm4gZmluYWxUb3RhbDtcblx0XHRcdFx0fVxuXHRcdFx0fTtcblxuXHRcdFx0dmFyIFNjYWxlVHlwZVJ1bGVyID0gZnVuY3Rpb24oKSB7XG5cdFx0XHRcdHZhciBhY3RpdmVSdWxlclZhbHVlID0gJyc7XG5cdFx0XHRcdHZhciAkYWN0aXZlUnVsZXIgPSAkKCcuUnVsZXJTY2FsZV9udW1iZXIuYWN0aXZlJyk7XG5cdFx0XHRcdGlmICgkYWN0aXZlUnVsZXIubGVuZ3RoID4gMCkge1xuXHRcdFx0XHRcdHZhciBhY3RpdmVSdWxlclZhbHVlID0gJCgnLlJ1bGVyU2NhbGVfbnVtYmVyLmFjdGl2ZScpXG5cdFx0XHRcdFx0XHQuY2xvc2VzdCgnLlJ1bGVyU2NhbGUnKVxuXHRcdFx0XHRcdFx0LmRhdGEoKS52YWx1ZTtcblx0XHRcdFx0XHQkKCcuU2NhbGVMaXN0LlJ1bGVyJylcblx0XHRcdFx0XHRcdC5maW5kKCcuU2NhbGVMaXN0X2lucHV0VmFsdWUgaW5wdXQnKVxuXHRcdFx0XHRcdFx0LnZhbChhY3RpdmVSdWxlclZhbHVlKTtcblxuXHRcdFx0XHRcdHJldHVybiBhY3RpdmVSdWxlclZhbHVlO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHJldHVybiBhY3RpdmVSdWxlclZhbHVlO1xuXHRcdFx0fTtcblxuXHRcdFx0dmFyIFNjYWxlVHlwZU11bHRpcGxlID0gZnVuY3Rpb24oKSB7XG5cdFx0XHRcdHZhciBudW1iZXJvZkNvbHMgPSAkKCcuU2NhbGVMaXN0Lk11bHRpcGxlU2NhbGUnKVxuXHRcdFx0XHRcdC5maXJzdCgpXG5cdFx0XHRcdFx0LmZpbmQoJy5CdXR0b25Hcm91cFNjYWxlJykubGVuZ3RoO1xuXHRcdFx0XHR2YXIgbnVtYmVyb2ZSb3dzID0gJCgnLkJ1dHRvbkdyb3VwU2NhbGUnKS5jbG9zZXN0KCcuU2NhbGVMaXN0Lk11bHRpcGxlU2NhbGU6bm90KC5pc1RpdGxlKTpub3QoLmlzU3VidG90YWwpJylcblx0XHRcdFx0XHQubGVuZ3RoO1xuXHRcdFx0XHR2YXIgdG90YWwgPSBbXTtcblx0XHRcdFx0dmFyIGkgPSAwO1xuXHRcdFx0XHR2YXIgaiA9IDA7XG5cdFx0XHRcdHZhciBjb3VudEFjdGl2ZSA9IDA7XG5cdFx0XHRcdHZhciBjb3VudGFsbEFjdGl2ZUNvbHMgPSAwO1xuXHRcdFx0XHR2YXIgdG90YWxPZkl0ZW1zID0gbnVtYmVyb2ZDb2xzICogbnVtYmVyb2ZSb3dzO1xuXHRcdFx0XHR2YXIgdG90YWxTY29yZSA9IFtdO1xuXG5cdFx0XHRcdGZvciAoaSA9IDA7IGkgPCBudW1iZXJvZkNvbHM7IGkrKykge1xuXHRcdFx0XHRcdGZvciAoaiA9IDA7IGogPCBudW1iZXJvZlJvd3M7IGorKykge1xuXHRcdFx0XHRcdFx0dmFyIFNjYWxlTGlzdFNlbGVjdGVkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcblx0XHRcdFx0XHRcdFx0Jy5TY2FsZUxpc3QuTXVsdGlwbGVTY2FsZTpub3QoLmlzVGl0bGUpOm5vdCguaXNTdWJ0b3RhbCknXG5cdFx0XHRcdFx0XHQpW2pdO1xuXHRcdFx0XHRcdFx0dmFyIEJ1dHRvblNjYWxlU2VsZWN0ZWQgPSBTY2FsZUxpc3RTZWxlY3RlZC5xdWVyeVNlbGVjdG9yQWxsKCcuQnV0dG9uR3JvdXBTY2FsZScpW2ldO1xuXG5cdFx0XHRcdFx0XHRpZiAoQnV0dG9uU2NhbGVTZWxlY3RlZC5xdWVyeVNlbGVjdG9yQWxsKCcuQnV0dG9uR3JvdXBfYnV0dG9uLmFjdGl2ZScpLmxlbmd0aCA+IDApIHtcblx0XHRcdFx0XHRcdFx0dmFyIFNjYWxlVmFsdWUgPSBCdXR0b25TY2FsZVNlbGVjdGVkLnF1ZXJ5U2VsZWN0b3JBbGwoJy5hY3RpdmUnKVswXS5pbm5lclRleHQ7XG5cdFx0XHRcdFx0XHRcdHRvdGFsLnB1c2gocGFyc2VJbnQoU2NhbGVWYWx1ZSkpO1xuXHRcdFx0XHRcdFx0XHR0b3RhbFNjb3JlLnB1c2gocGFyc2VJbnQoU2NhbGVWYWx1ZSkpO1xuXHRcdFx0XHRcdFx0XHRjb3VudEFjdGl2ZSA9IGNvdW50QWN0aXZlICsgMTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0aWYgKCQoJy5TY2FsZUxpc3QuTXVsdGlwbGVTY2FsZS5pc1N1YnRvdGFsJykubGVuZ3RoID4gMCkge1xuXHRcdFx0XHRcdFx0aWYgKGNvdW50QWN0aXZlID09PSBudW1iZXJvZlJvd3MpIHtcblx0XHRcdFx0XHRcdFx0dmFyIHN1YlRvdGFsID0gZXZhbCh0b3RhbC5qb2luKCcrJykpO1xuXHRcdFx0XHRcdFx0XHR2YXIgc3VidG90YWxTY2FsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5TY2FsZUxpc3QuTXVsdGlwbGVTY2FsZS5pc1N1YnRvdGFsIC5CdXR0b25Hcm91cFNjYWxlJylbaV07XG5cdFx0XHRcdFx0XHRcdHN1YnRvdGFsU2NhbGUuaW5uZXJUZXh0ID0gc3ViVG90YWw7XG5cdFx0XHRcdFx0XHRcdGNvdW50YWxsQWN0aXZlQ29scyA9IGNvdW50YWxsQWN0aXZlQ29scyArIDE7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGNvdW50QWN0aXZlID0gMDtcblx0XHRcdFx0XHR0b3RhbCA9IFtdO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0aWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5CdXR0b25Hcm91cF9idXR0b24uYWN0aXZlJykubGVuZ3RoID09PSB0b3RhbE9mSXRlbXMpIHtcblx0XHRcdFx0XHR2YXIgaSA9IDA7XG5cdFx0XHRcdFx0dmFyIGogPSAwO1xuXHRcdFx0XHRcdGZvciAoaSA9IDA7IGkgPCBudW1iZXJvZlJvd3M7IGkrKykge1xuXHRcdFx0XHRcdFx0dmFyIFNjYWxlTGlzdFJvdyA9ICQoJy5TY2FsZUxpc3QuTXVsdGlwbGVTY2FsZTpub3QoLmlzVGl0bGUpOm5vdCguaXNTdWJ0dG90YWwpJylbaV07XG5cdFx0XHRcdFx0XHR2YXIgJFNjYWxlTGlzdElucHV0ID0gJChTY2FsZUxpc3RSb3cpLmZpbmQoJy5TY2FsZUxpc3RfaW5wdXRWYWx1ZSBpbnB1dCcpO1xuXHRcdFx0XHRcdFx0dmFyIHZhbHVlc1NlbGVjdGVkID0gJyc7XG5cdFx0XHRcdFx0XHRmb3IgKGogPSAwOyBqIDwgbnVtYmVyb2ZDb2xzOyBqKyspIHtcblx0XHRcdFx0XHRcdFx0dmFyIEFjdGl2ZUJ1dHRvbiA9ICQoU2NhbGVMaXN0Um93KS5maW5kKCcuQnV0dG9uR3JvdXBfYnV0dG9uLmFjdGl2ZScpW2pdO1xuXHRcdFx0XHRcdFx0XHR2YXIgQWN0aXZlVmFsdWUgPSBBY3RpdmVCdXR0b24uaW5uZXJUZXh0O1xuXHRcdFx0XHRcdFx0XHQvL3ZhbHVlc1NlbGVjdGVkPXZhbHVlc1NlbGVjdGVkKycsJytBY3RpdmVWYWx1ZTtcblx0XHRcdFx0XHRcdFx0aWYgKGogPT09IG51bWJlcm9mQ29scyAtIDEpIHtcblx0XHRcdFx0XHRcdFx0XHR2YWx1ZXNTZWxlY3RlZCArPSBBY3RpdmVWYWx1ZTtcblx0XHRcdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdFx0XHR2YWx1ZXNTZWxlY3RlZCArPSBBY3RpdmVWYWx1ZSArICcsJztcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0JFNjYWxlTGlzdElucHV0LnZhbCh2YWx1ZXNTZWxlY3RlZCk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdHZhciBnZXRUb3RhbCA9IGV2YWwodG90YWxTY29yZS5qb2luKCcrJykpO1xuXHRcdFx0XHRcdHJldHVybiBnZXRUb3RhbDtcblx0XHRcdFx0fVxuXHRcdFx0fTtcblxuXHRcdFx0Y29uc3QgVG90YWxDYWxjID0gZnVuY3Rpb24oKSB7XG5cdFx0XHRcdGxldCBpc0VtcHR5ID0gZmFsc2U7XG5cblx0XHRcdFx0aWYgKENhcmRTY2FsZSA9PT0gdHJ1ZSkge1xuXHRcdFx0XHRcdHRvdGFsQ2FyZFNjYWxlID0gU2NhbGVUeXBlQ2FyZCgpO1xuXHRcdFx0XHRcdGlzRW1wdHkgPSB0b3RhbENhcmRTY2FsZSA9PT0gJyc7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRpZiAoUnVsZXJTY2FsZSA9PT0gdHJ1ZSkge1xuXHRcdFx0XHRcdHRvdGFsUnVsZXJTY2FsZSA9IFNjYWxlVHlwZVJ1bGVyKCk7XG5cdFx0XHRcdFx0aXNFbXB0eSA9IHRvdGFsUnVsZXJTY2FsZSA9PT0gJyc7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRpZiAoTXVsdGlwbGVTY2FsZSA9PT0gdHJ1ZSkge1xuXHRcdFx0XHRcdHRvdGFsTXVsdGlwbGVTY2FsZSA9IFNjYWxlVHlwZU11bHRpcGxlKCk7XG5cdFx0XHRcdFx0aXNFbXB0eSA9IHRvdGFsTXVsdGlwbGVTY2FsZSA9PT0gJyc7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRjb25zdCAkZm9vdGVyUmVzdWx0ID0gJCgnLlNjYWxlTWFpblN0cnVjdHVyZV9mb290ZXJSZXN1bHQnKTtcblx0XHRcdFx0Y29uc3QgJHRvdGFsU2NvcmUgPSAkKCcuU2NhbGVNYWluU3RydWN0dXJlX3RvdGFsU2NvcmUnKTtcblx0XHRcdFx0Y29uc3QgJHNjb3JlTGFiZWwgPSAkKCcuU2NhbGVNYWluU3RydWN0dXJlX2Zvb3RlclJlc3VsdCAuVG90YWxMYWJlbCcpO1xuXG5cdFx0XHRcdGlmIChpc0VtcHR5KSB7XG5cdFx0XHRcdFx0JHRvdGFsU2NvcmUudGV4dCgnLS0tJyk7XG5cdFx0XHRcdFx0JHNjb3JlTGFiZWwudGV4dCgnLScpO1xuXG5cdFx0XHRcdFx0JGZvb3RlclJlc3VsdC5yZW1vdmVDbGFzcygnQ29sb3JaZXRhQkcnKTtcblx0XHRcdFx0fSBlbHNlIGlmICghaXNOYU4odG90YWxNdWx0aXBsZVNjYWxlKSAmJiAhaXNOYU4odG90YWxDYXJkU2NhbGUpICYmICFpc05hTih0b3RhbFJ1bGVyU2NhbGUpKSB7XG5cdFx0XHRcdFx0Y29uc3QgdG90YWxBYnNvbHV0ZVNjb3JlID0gdG90YWxDYXJkU2NhbGUgKyB0b3RhbE11bHRpcGxlU2NhbGUgKyB0b3RhbFJ1bGVyU2NhbGU7XG5cdFx0XHRcdFx0Y29uc3QgdG90YWxBYnNvbHV0ZUxhYmVsID0gdG90YWxBYnNvbHV0ZVNjb3JlID4gMTEgPyAnSGlnaCcgOiAnTG93JztcblxuXHRcdFx0XHRcdCR0b3RhbFNjb3JlLnRleHQodG90YWxBYnNvbHV0ZUxhYmVsKTtcblx0XHRcdFx0XHQkc2NvcmVMYWJlbC50ZXh0KHRvdGFsQWJzb2x1dGVTY29yZSk7XG5cblx0XHRcdFx0XHQkZm9vdGVyUmVzdWx0LmFkZENsYXNzKCdDb2xvclpldGFCRycpO1xuXG5cdFx0XHRcdFx0Y29uc3QgJGhpZGRlbkxpbmsgPSAkKCcuU2NhbGVNYWluU3RydWN0dXJlX2hpZGRpbmdMaW5rIGEnKTtcblxuXHRcdFx0XHRcdGlmICgkaGlkZGVuTGluay5sZW5ndGggPiAwKSAkaGlkZGVuTGluay5jbGljaygpO1xuXHRcdFx0XHR9XG5cdFx0XHR9O1xuXG5cdFx0XHRpZiAoQ2FyZFNjYWxlID09PSB0cnVlKSB7XG5cdFx0XHRcdCQoJy5TY2FsZUNhcmQnKS5jbGljayhmdW5jdGlvbigpIHtcblx0XHRcdFx0XHRpZiAoISQodGhpcykuaGFzQ2xhc3MoJ2Rpc2FibGVkJykpIHtcblx0XHRcdFx0XHRcdCRwYXJlbnRTY2FsZUNhcmQgPSAkKHRoaXMpLmNsb3Nlc3QoJy5TY2FsZUxpc3QuQ2FyZFNjYWxlJyk7XG5cdFx0XHRcdFx0XHQkcGFyZW50U2NhbGVDYXJkLmZpbmQoJy5TY2FsZUNhcmQnKS5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XG5cdFx0XHRcdFx0XHQkKHRoaXMpLmFkZENsYXNzKCdhY3RpdmUnKTtcblx0XHRcdFx0XHRcdFRvdGFsQ2FsYygpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSk7XG5cdFx0XHRcdFRvdGFsQ2FsYygpO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiAoUnVsZXJTY2FsZSA9PT0gdHJ1ZSkge1xuXHRcdFx0XHQkKCcuUnVsZXJTY2FsZScpLmNsaWNrKGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRcdGlmICgkKHRoaXMpLmZpbmQoJy52aWV3bW9kZScpLmxlbmd0aCA9PT0gMCkge1xuXHRcdFx0XHRcdFx0dmFyICRydWxlclNjYWxlTGlzdCA9ICQodGhpcykuY2xvc2VzdCgnLlNjYWxlTGlzdC5SdWxlcicpO1xuXHRcdFx0XHRcdFx0JHJ1bGVyU2NhbGVMaXN0LmZpbmQoJy5SdWxlclNjYWxlX251bWJlcicpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcblx0XHRcdFx0XHRcdCQodGhpcylcblx0XHRcdFx0XHRcdFx0LmZpbmQoJy5SdWxlclNjYWxlX251bWJlcicpXG5cdFx0XHRcdFx0XHRcdC5hZGRDbGFzcygnYWN0aXZlJyk7XG5cdFx0XHRcdFx0XHRUb3RhbENhbGMoKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0pO1xuXHRcdFx0XHRUb3RhbENhbGMoKTtcblx0XHRcdH1cblxuXHRcdFx0aWYgKE11bHRpcGxlU2NhbGUgPT09IHRydWUpIHtcblx0XHRcdFx0dmFyIGNvdW50ZXI7XG5cdFx0XHRcdHZhciBTY2FsZUxpc3RUaXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5TY2FsZUxpc3QuTXVsdGlwbGVTY2FsZS5pc1RpdGxlJyk7XG5cdFx0XHRcdHZhciBTY2FsZUxpc3RTdWJUb3RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5TY2FsZUxpc3QuTXVsdGlwbGVTY2FsZS5pc1N1YnRvdGFsJyk7XG5cdFx0XHRcdHZhciBTY2FsZUxpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuU2NhbGVMaXN0Lk11bHRpcGxlU2NhbGU6bm90KC5pc1RpdGxlKTpub3QoLmlzU3VidG90YWwpJyk7XG5cblx0XHRcdFx0JCgnLkJ1dHRvbkdyb3VwU2NhbGUnKVxuXHRcdFx0XHRcdC5jbG9zZXN0KCcuU2NhbGVMaXN0Lk11bHRpcGxlU2NhbGU6bnRoLWNoaWxkKDJuKScpXG5cdFx0XHRcdFx0LmFkZENsYXNzKCdFdmVuTGluZScpO1xuXHRcdFx0XHR2YXIgbnVtYmVyT2ZHcm91cFNjYWxlID0gU2NhbGVMaXN0LnF1ZXJ5U2VsZWN0b3JBbGwoJy5CdXR0b25Hcm91cFNjYWxlJykubGVuZ3RoO1xuXG5cdFx0XHRcdCQoJy5TY2FsZUxpc3QuTXVsdGlwbGVTY2FsZS5pc1N1YnRvdGFsIC5CdXR0b25Hcm91cFNjYWxlJykudGV4dCgwKTtcblx0XHRcdFx0Ly8gQ2hlY2sgaWYgTXVsdGlwbGUgU2NhbGUgVGl0bGUgZXhpc3RzIHRoZW4gYWRqdXN0IHRpdGxlIHdpZHRoXG5cdFx0XHRcdGlmICgkKCcuU2NhbGVMaXN0Lk11bHRpcGxlU2NhbGUuaXNUaXRsZScpLmxlbmd0aCA+IDApIHtcblx0XHRcdFx0XHRmb3IgKGNvdW50ZXIgPSAwOyBjb3VudGVyIDwgbnVtYmVyT2ZHcm91cFNjYWxlOyBjb3VudGVyKyspIHtcblx0XHRcdFx0XHRcdHZhciBTY2FsZUxpc3RXaWR0aCA9IFNjYWxlTGlzdC5xdWVyeVNlbGVjdG9yQWxsKCcuQnV0dG9uR3JvdXBTY2FsZScpW2NvdW50ZXJdLm9mZnNldFdpZHRoO1xuXHRcdFx0XHRcdFx0U2NhbGVMaXN0VGl0bGUucXVlcnlTZWxlY3RvckFsbCgnLkJ1dHRvbkdyb3VwU2NhbGUnKVtjb3VudGVyXS5zdHlsZS53aWR0aCA9IFNjYWxlTGlzdFdpZHRoICsgJ3B4Jztcblx0XHRcdFx0XHRcdFNjYWxlTGlzdFN1YlRvdGFsLnF1ZXJ5U2VsZWN0b3JBbGwoJy5CdXR0b25Hcm91cFNjYWxlJylbY291bnRlcl0uc3R5bGUud2lkdGggPSBTY2FsZUxpc3RXaWR0aCArICdweCc7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cblx0XHRcdFx0JCgnLkJ1dHRvbkdyb3VwX2J1dHRvbicpLmNsaWNrKGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRcdFRvdGFsQ2FsYygpO1xuXHRcdFx0XHR9KTtcblx0XHRcdFx0VG90YWxDYWxjKCk7XG5cdFx0XHR9XG5cdFx0fSk7XG5cdH07XG5cblx0c2V0dXBTY2FsZSA9ICgpID0+IHtcblx0XHR2YXIgSXNDYXJkU2NhbGU7XG5cdFx0dmFyIElzUnVsZXJTY2FsZTtcblx0XHR2YXIgSXNNdWx0aXBsZVNjYWxlO1xuXG5cdFx0JCgnLlNjYWxlQ2FyZCcpLmxlbmd0aCA+IDAgPyAoSXNDYXJkU2NhbGUgPSB0cnVlKSA6IChJc0NhcmRTY2FsZSA9IGZhbHNlKTtcblx0XHQkKCcuQnV0dG9uR3JvdXBTY2FsZScpLmxlbmd0aCA+IDAgPyAoSXNNdWx0aXBsZVNjYWxlID0gdHJ1ZSkgOiAoSXNNdWx0aXBsZVNjYWxlID0gZmFsc2UpO1xuXHRcdCQoJy5SdWxlclNjYWxlJykubGVuZ3RoID4gMCA/IChJc1J1bGVyU2NhbGUgPSB0cnVlKSA6IChJc1J1bGVyU2NhbGUgPSBmYWxzZSk7XG5cblx0XHRzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuXHRcdFx0U2NhbGVDb3VudCh7XG5cdFx0XHRcdElzQ2FyZFNjYWxlOiBJc0NhcmRTY2FsZSxcblx0XHRcdFx0SXNSdWxlclNjYWxlOiBJc1J1bGVyU2NhbGUsXG5cdFx0XHRcdElzTXVsdGlwbGVTY2FsZTogSXNNdWx0aXBsZVNjYWxlLFxuXHRcdFx0fSk7XG5cdFx0fSwgNTAwKTtcblxuXHRcdGlmICgkKCcuU2NhbGVNYWluU3RydWN0dXJlX29wdGlvbnMgLlRvZ2dsZUl0ZW1Db250cm9sJykubGVuZ3RoID4gMCkge1xuXHRcdFx0JCgnLlNjYWxlTWFpblN0cnVjdHVyZV9vcHRpb25zIC5Ub2dnbGVJdGVtQ29udHJvbCcpLmNsaWNrKGZ1bmN0aW9uKCkge1xuXHRcdFx0XHQkKCcuU2NhbGVNYWluU3RydWN0dXJlX3RvdGFsU2NvcmUnKS50ZXh0KCctLS0nKTtcblx0XHRcdH0pO1xuXHRcdH1cblx0fTtcblxuXHRyZXNldFNjYWxlcyA9ICgpID0+IHtcblx0XHQkKCcuU2NhbGVNYWluU3RydWN0dXJlX2NvbnRlbnQnKS5jc3MoJ3Zpc2liaWxpdHknLCAnaGlkZGVuJyk7XG5cdFx0JCgnLlNjYWxlTWFpblN0cnVjdHVyZV9vcHRpb25zIC5Ub2dnbGVJdGVtQ29udHJvbCcpLmFkZENsYXNzKCdkaXNhYmxlZCcpO1xuXHRcdHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG5cdFx0XHQkKCcuU2NhbGVNYWluU3RydWN0dXJlX3RvdGFsU2NvcmUnKS50ZXh0KCctLS0nKTtcblx0XHRcdHNldHVwU2NhbGUoKTtcblx0XHR9LCA2MDApO1xuXHRcdHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG5cdFx0XHQkKCcuU2NhbGVNYWluU3RydWN0dXJlX2NvbnRlbnQnKS5jc3MoJ3Zpc2liaWxpdHknLCAndmlzaWJsZScpO1xuXHRcdFx0JCgnLlNjYWxlTWFpblN0cnVjdHVyZV9vcHRpb25zIC5Ub2dnbGVJdGVtQ29udHJvbCcpLnJlbW92ZUNsYXNzKCdkaXNhYmxlZCcpO1xuXHRcdH0sIDEwMDApO1xuXHR9O1xuXG5cdGJpbmRDbGlja3MgPSAoKSA9PiB7XG5cdFx0aWYgKCQoJy5TY2FsZU1haW5TdHJ1Y3R1cmVfb3B0aW9ucyAuVG9nZ2xlSXRlbUNvbnRyb2wgJykubGVuZ3RoID4gMCkge1xuXHRcdFx0JCgnLlNjYWxlTWFpblN0cnVjdHVyZScpXG5cdFx0XHRcdC5vZmYoJ2NsaWNrJylcblx0XHRcdFx0Lm9uKCdjbGljaycsICcuVG9nZ2xlSXRlbUNvbnRyb2wnLCBmdW5jdGlvbigpIHtcblx0XHRcdFx0XHRyZXNldFNjYWxlcygpO1xuXHRcdFx0XHR9KTtcblx0XHR9XG5cblx0XHRpZiAoJCgnLk5hdmlnYXRpb25fY29udHJvbCcpLmxlbmd0aCA+IDApIHtcblx0XHRcdCQoJy5OYXZpZ2F0aW9uX3JpZ2h0JykuY2xpY2soZnVuY3Rpb24oKSB7XG5cdFx0XHRcdGlmIChcblx0XHRcdFx0XHQhJCh0aGlzKVxuXHRcdFx0XHRcdFx0LmZpbmQoJ2EnKVswXVxuXHRcdFx0XHRcdFx0Lmhhc0F0dHJpYnV0ZSgnZGlzYWJsZWQnKVxuXHRcdFx0XHQpIHtcblx0XHRcdFx0XHRyZXNldFNjYWxlcygpO1xuXHRcdFx0XHR9XG5cdFx0XHR9KTtcblxuXHRcdFx0JCgnLk5hdmlnYXRpb25fbGVmdCcpLmNsaWNrKGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRpZiAoXG5cdFx0XHRcdFx0ISQodGhpcylcblx0XHRcdFx0XHRcdC5maW5kKCdhJylbMF1cblx0XHRcdFx0XHRcdC5oYXNBdHRyaWJ1dGUoJ2Rpc2FibGVkJylcblx0XHRcdFx0KSB7XG5cdFx0XHRcdFx0cmVzZXRTY2FsZXMoKTtcblx0XHRcdFx0fVxuXHRcdFx0fSk7XG5cdFx0fVxuXHR9O1xuXG5cdFNhcHBoaXJlV2lkZ2V0cy5TY2FsZU1haW5TdHJ1Y3R1cmUgPSB7IGNyZWF0ZSB9O1xufSkoalF1ZXJ5LCB3aW5kb3csIFNhcHBoaXJlV2lkZ2V0cyk7XG4iLCIvKiBDb21wb25lbnQgVG9nZ2xlSXRlbUNvbnRyb2wgKi9cblNhcHBoaXJlV2lkZ2V0cy5Ub2dnbGVJdGVtQ29udHJvbCA9ICgpID0+IHtcblx0JChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oKSB7XG5cdFx0JCgnLlRvZ2dsZUl0ZW1Db250cm9sIGlucHV0W3R5cGU9XCJyYWRpb1wiXScpLmVhY2goZnVuY3Rpb24oKSB7XG5cdFx0XHRpZiAoJCh0aGlzKS5pcygnOmNoZWNrZWQnKSkge1xuXHRcdFx0XHQkKHRoaXMpXG5cdFx0XHRcdFx0LnBhcmVudCgpXG5cdFx0XHRcdFx0LnBhcmVudCgpXG5cdFx0XHRcdFx0LmFkZENsYXNzKCdhY3RpdmUnKTtcblx0XHRcdH1cblx0XHR9KTtcblxuXHRcdCQoJy5Ub2dnbGVJdGVtQ29udHJvbCcpXG5cdFx0XHQub2ZmKCdjbGljaycpXG5cdFx0XHQub24oJ2NsaWNrJywgZnVuY3Rpb24oKSB7XG5cdFx0XHRcdCQoJy5Ub2dnbGVJdGVtQ29udHJvbCcpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcblx0XHRcdFx0JCh0aGlzKVxuXHRcdFx0XHRcdC5maW5kKCdpbnB1dFt0eXBlPVwicmFkaW9cIl0nKVxuXHRcdFx0XHRcdC5ub3QoJzpjaGVja2VkJylcblx0XHRcdFx0XHQucHJvcCgnY2hlY2tlZCcsIHRydWUpXG5cdFx0XHRcdFx0LmNsaWNrKCk7XG5cdFx0XHRcdGlmIChcblx0XHRcdFx0XHQkKHRoaXMpXG5cdFx0XHRcdFx0XHQuZmluZCgnaW5wdXRbdHlwZT1cInJhZGlvXCJdJylcblx0XHRcdFx0XHRcdC5pcygnOmNoZWNrZWQnKVxuXHRcdFx0XHQpIHtcblx0XHRcdFx0XHQkKHRoaXMpLmFkZENsYXNzKCdhY3RpdmUnKTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHQkKHRoaXMpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcblx0XHRcdFx0fVxuXHRcdFx0fSk7XG5cblx0XHRvc0FqYXhCYWNrZW5kLkJpbmRBZnRlckFqYXhSZXF1ZXN0KGZ1bmN0aW9uKCkge1xuXHRcdFx0JCgnLlRvZ2dsZUl0ZW1Db250cm9sIGlucHV0W3R5cGU9XCJyYWRpb1wiXScpLmVhY2goZnVuY3Rpb24oKSB7XG5cdFx0XHRcdGlmICgkKHRoaXMpLmlzKCc6Y2hlY2tlZCcpKSB7XG5cdFx0XHRcdFx0JCh0aGlzKVxuXHRcdFx0XHRcdFx0LnBhcmVudCgpXG5cdFx0XHRcdFx0XHQucGFyZW50KClcblx0XHRcdFx0XHRcdC5hZGRDbGFzcygnYWN0aXZlJyk7XG5cdFx0XHRcdH1cblx0XHRcdH0pO1xuXG5cdFx0XHQkKCcuVG9nZ2xlSXRlbUNvbnRyb2wnKVxuXHRcdFx0XHQub2ZmKCdjbGljaycpXG5cdFx0XHRcdC5vbignY2xpY2snLCBmdW5jdGlvbigpIHtcblx0XHRcdFx0XHQkKCcuVG9nZ2xlSXRlbUNvbnRyb2wnKS5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XG5cblx0XHRcdFx0XHRpZiAoXG5cdFx0XHRcdFx0XHQkKHRoaXMpXG5cdFx0XHRcdFx0XHRcdC5maW5kKCdpbnB1dFt0eXBlPVwicmFkaW9cIl0nKVxuXHRcdFx0XHRcdFx0XHQuaXMoJzpjaGVja2VkJylcblx0XHRcdFx0XHQpIHtcblx0XHRcdFx0XHRcdCQodGhpcykuYWRkQ2xhc3MoJ2FjdGl2ZScpO1xuXHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHQkKHRoaXMpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0pO1xuXHRcdH0pO1xuXHR9KTtcbn07XG4iLCJ2YXIgU2VhcmNoU2VsZWN0RGVmaW5lID0gKHdpbmRvdy5TZWFyY2hTZWxlY3REZWZpbmUgPSB3aW5kb3cuU2VhcmNoU2VsZWN0RGVmaW5lIHx8IHt9KTtcblxuU2FwcGhpcmVXaWRnZXRzLlNlbGVjdFNTRCA9IGZ1bmN0aW9uIFNTRFNlbGVjdFNldHVwKGNvbmZpZykge1xuXHQkKGZ1bmN0aW9uKCkge1xuXHRcdHZhciAkU1NEc2VsZWN0SWQgPSAkKCcjJyArIGNvbmZpZy5TU0RTZWxlY3RJZCk7XG5cdFx0dmFyIGlzTXVsdGlwbGUgPSBjb25maWcuaXNNdWx0aXBsZTtcblxuXHRcdHZhciAkQ29tcG9uZW50U1NEID0gJFNTRHNlbGVjdElkLmNsb3Nlc3QoJy5TZWFyY2hTRCcpO1xuXHRcdHZhciAkQ29tcG9uZW50U1NEaW5wdXQgPSAkQ29tcG9uZW50U1NELmZpbmQoJy5TZWFyY2hTRF9fX2lucHV0IGlucHV0Jyk7XG5cdFx0dmFyIENvbXBvbmVudGlucHV0bGVuZ3RoID0gJENvbXBvbmVudFNTRGlucHV0LnZhbCgpLmxlbmd0aDtcblxuXHRcdGlmIChDb21wb25lbnRpbnB1dGxlbmd0aCA+IDApIHtcblx0XHRcdCRTU0RzZWxlY3RJZC5maW5kKCcuU2VsZWN0U0RfX2NvbnRlbnRUaXRsZScpLmhpZ2hsaWdodCgkQ29tcG9uZW50U1NEaW5wdXQudmFsKCksIHtcblx0XHRcdFx0Y2xhc3NOYW1lOiAnU2VsZWN0U0Qtc2VhcmNoZWQtdGVybScsXG5cdFx0XHRcdGNhc2VTZW5zaXRpdmU6IGZhbHNlLFxuXHRcdFx0XHR3b3Jkc09ubHk6IGZhbHNlLFxuXHRcdFx0fSk7XG5cdFx0fVxuXG5cdFx0dmFyICRmYXZvcml0ZXNTZWFyY2hJbnB1dCA9ICRDb21wb25lbnRTU0QuZmluZCgnLlNlYXJjaFNEX2ZpbHRlcmZhdm9yaXRlcyBpbnB1dCcpO1xuXG5cdFx0aWYgKCRmYXZvcml0ZXNTZWFyY2hJbnB1dC5sZW5ndGgpIHtcblx0XHRcdHZhciBmYXZvcml0ZXNTZWFyY2hMZW5ndGggPSAkZmF2b3JpdGVzU2VhcmNoSW5wdXQudmFsKCkubGVuZ3RoO1xuXG5cdFx0XHRpZiAoY29uZmlnLkhhc0Zhdm9yaXRlID09PSAnVHJ1ZScgJiYgZmF2b3JpdGVzU2VhcmNoTGVuZ3RoID4gMCkge1xuXHRcdFx0XHQkU1NEc2VsZWN0SWQuZmluZCgnLlNlbGVjdFNEX19jb250ZW50VGl0bGUnKS5oaWdobGlnaHQoJGZhdm9yaXRlc1NlYXJjaElucHV0LnZhbCgpLCB7XG5cdFx0XHRcdFx0Y2xhc3NOYW1lOiAnU2VsZWN0U0Qtc2VhcmNoZWQtdGVybScsXG5cdFx0XHRcdFx0Y2FzZVNlbnNpdGl2ZTogZmFsc2UsXG5cdFx0XHRcdFx0d29yZHNPbmx5OiBmYWxzZSxcblx0XHRcdFx0fSk7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0dmFyIE9wZW5Db25maXJtUG9wdXAgPSBmdW5jdGlvbigkU1NEc2VsZWN0SWQpIHtcblx0XHRcdCRDb21wb25lbnRTU0QgPSAkU1NEc2VsZWN0SWQuY2xvc2VzdCgnLlNlYXJjaFNEJyk7XG5cdFx0XHQkUG9wdXBJRCA9ICRDb21wb25lbnRTU0Quc2libGluZ3MoJy5TU0RQb3B1cFdyYXBwZXInKTtcblxuXHRcdFx0JFBvcHVwSUQuZmFkZUluKCdmYXN0JywgZnVuY3Rpb24oKSB7XG5cdFx0XHRcdCRDb21wb25lbnRTU0QuYWRkQ2xhc3MoJ0RvbnRfQ2xvc2UnKTtcblx0XHRcdFx0JFBvcHVwSURcblx0XHRcdFx0XHQuZmluZCgnLlNTRHBvcHVwT2snKVxuXHRcdFx0XHRcdC5vZmYoJ2NsaWNrJylcblx0XHRcdFx0XHQub24oJ2NsaWNrJywgZnVuY3Rpb24oKSB7XG5cdFx0XHRcdFx0XHQkUG9wdXBJRC5mYWRlT3V0KCdmYXN0JywgZnVuY3Rpb24oKSB7XG5cdFx0XHRcdFx0XHRcdCRTU0RzZWxlY3RJZC5maW5kKCcuU2VsZWN0U0RfX3N0YXJUcmlnZ2VyID4gYScpLmNsaWNrKCk7XG5cdFx0XHRcdFx0XHRcdHNldFRpbWVvdXQoJENvbXBvbmVudFNTRC5yZW1vdmVDbGFzcygnRG9udF9DbG9zZScpLCA1MDApO1xuXHRcdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0fSk7XG5cblx0XHRcdFx0JFBvcHVwSURcblx0XHRcdFx0XHQuZmluZCgnLlNTRHBvcHVwQ2FuY2VsJylcblx0XHRcdFx0XHQub2ZmKCdjbGljaycpXG5cdFx0XHRcdFx0Lm9uKCdjbGljaycsIGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRcdFx0JFBvcHVwSUQuZmFkZU91dCgnZmFzdCcsIGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRcdFx0XHRzZXRUaW1lb3V0KCRDb21wb25lbnRTU0QucmVtb3ZlQ2xhc3MoJ0RvbnRfQ2xvc2UnKSwgNTAwKTtcblx0XHRcdFx0XHRcdH0pO1xuXHRcdFx0XHRcdH0pO1xuXHRcdFx0fSk7XG5cdFx0fTtcblxuXHRcdHZhciBTU0RDaGVja0JveFNlbGVjdCA9IGZ1bmN0aW9uKCR3aWRnZXRJZCkge1xuXHRcdFx0dmFyIGNoZWNrQm94Q291bnQgPSAwO1xuXHRcdFx0aWYgKGlzTXVsdGlwbGUgPT09ICdUcnVlJykge1xuXHRcdFx0XHRjaGVja0JveENvdW50ID0gJHdpZGdldElkXG5cdFx0XHRcdFx0LmNsb3Nlc3QoJy5TZWFyY2hTRC5zaG93RmF2b3JpdGUnKVxuXHRcdFx0XHRcdC5maW5kKCcuU2VsZWN0U0RfX211bHRpcGxlID4gaW5wdXRbdHlwZT1cImNoZWNrYm94XCJdOmNoZWNrZWQnKS5sZW5ndGg7XG5cblx0XHRcdFx0JGFsbExpc3RjYXJkID0gJHdpZGdldElkLmNsb3Nlc3QoJy5TZWFyY2hTRF9jb250ZW50Jyk7XG5cblx0XHRcdFx0aWYgKGNoZWNrQm94Q291bnQgPiAwKSB7XG5cdFx0XHRcdFx0JHdpZGdldElkLmNsb3Nlc3QoJy5TZWFyY2hTRC5zaG93RmF2b3JpdGUnKS5hZGRDbGFzcygnTXVsdGlTZWxlY3RBY3RpdmUnKTtcblx0XHRcdFx0XHQkd2lkZ2V0SWQuY2xvc2VzdCgnLlNlYXJjaFNEX2NvbnRlbnQgLlNlbGVjdFNEJykuZWFjaChmdW5jdGlvbigpIHtcblx0XHRcdFx0XHRcdCQodGhpcylcblx0XHRcdFx0XHRcdFx0LmZpbmQoJy5TZWxlY3RTRF9jb250ZW50V3JhcHBlcicpXG5cdFx0XHRcdFx0XHRcdC5vZmYoJ2NsaWNrJyk7XG5cdFx0XHRcdFx0XHQkKHRoaXMpXG5cdFx0XHRcdFx0XHRcdC5maW5kKCcuU2VsZWN0U0RfYWN0aW9uTGluaycpXG5cdFx0XHRcdFx0XHRcdC5vZmYoJ2NsaWNrJyk7XG5cdFx0XHRcdFx0fSk7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0JHdpZGdldElkLmNsb3Nlc3QoJy5TZWFyY2hTRC5zaG93RmF2b3JpdGUnKS5yZW1vdmVDbGFzcygnTXVsdGlTZWxlY3RBY3RpdmUnKTtcblx0XHRcdFx0XHQkd2lkZ2V0SWQuY2xvc2VzdCgnLlNlYXJjaFNEX2NvbnRlbnQgLlNlbGVjdFNEICcpLmVhY2goZnVuY3Rpb24oKSB7XG5cdFx0XHRcdFx0XHQkKHRoaXMpXG5cdFx0XHRcdFx0XHRcdC5maW5kKCcuU2VsZWN0U0RfY29udGVudFdyYXBwZXInKVxuXHRcdFx0XHRcdFx0XHQub24oJ2NsaWNrJywgZnVuY3Rpb24oZSkge1xuXHRcdFx0XHRcdFx0XHRcdCQodGhpcylcblx0XHRcdFx0XHRcdFx0XHRcdC5maW5kKCcuTGluZUFjdGlvbkxJTksgPiBhJylcblx0XHRcdFx0XHRcdFx0XHRcdC5jbGljaygpO1xuXHRcdFx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHRcdCQodGhpcylcblx0XHRcdFx0XHRcdFx0LmZpbmQoJy5TZWxlY3RTRF9hY3Rpb25MaW5rJylcblx0XHRcdFx0XHRcdFx0Lm9uKCdjbGljaycsIGZ1bmN0aW9uKGUpIHtcblx0XHRcdFx0XHRcdFx0XHQkKHRoaXMpXG5cdFx0XHRcdFx0XHRcdFx0XHQuZmluZCgnLkxpbmVBY3Rpb25MSU5LID4gYScpXG5cdFx0XHRcdFx0XHRcdFx0XHQuY2xpY2soKTtcblx0XHRcdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0fSk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9O1xuXG5cdFx0aWYgKGlzTXVsdGlwbGUgPT09ICdUcnVlJykge1xuXHRcdFx0JFNTRHNlbGVjdElkLmZpbmQoJy5TZWxlY3RTRF9fbXVsdGlwbGUgPiBpbnB1dCcpLmNsaWNrKGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRTU0RDaGVja0JveFNlbGVjdCgkU1NEc2VsZWN0SWQpO1xuXHRcdFx0fSk7XG5cdFx0fVxuXG5cdFx0JFNTRHNlbGVjdElkLmZpbmQoJy5TZWxlY3RTRF9fc3RhckxpbmsnKS5vbignY2xpY2snLCBmdW5jdGlvbihlKSB7XG5cdFx0XHRpZiAoISRTU0RzZWxlY3RJZC5maW5kKCcuU2VsZWN0U0QgLlNlbGVjdFNEX19zdGFyV3JhcHBlcicpLmhhc0NsYXNzKCdzdGFyRGlzYWJsZWQnKSkge1xuXHRcdFx0XHRpZiAoJFNTRHNlbGVjdElkLmZpbmQoJy5TZWxlY3RTRCAuU2VsZWN0U0RfX3N0YXJXcmFwcGVyJykuaGFzQ2xhc3MoJ3N0YXJTZWxlY3RlZCcpKSB7XG5cdFx0XHRcdFx0T3BlbkNvbmZpcm1Qb3B1cCgkU1NEc2VsZWN0SWQpO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdCRTU0RzZWxlY3RJZC5maW5kKCcuU2VsZWN0U0RfX3N0YXJUcmlnZ2VyID4gYScpLmNsaWNrKCk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9KTtcblxuXHRcdCRTU0RzZWxlY3RJZC5maW5kKCcuU2VsZWN0U0RfY29udGVudFdyYXBwZXInKS5vbignY2xpY2snLCBmdW5jdGlvbihlKSB7XG5cdFx0XHQkQ29tcG9uZW50U1NEID0gJFNTRHNlbGVjdElkLmNsb3Nlc3QoJy5TZWFyY2hTRCcpO1xuXHRcdFx0JFNTRHNlbGVjdElkLmZpbmQoJy5MaW5lQWN0aW9uTElOSyA+IGEnKS5jbGljaygpO1xuXHRcdFx0aWYgKCEkQ29tcG9uZW50U1NELmhhc0NsYXNzKCdNdWx0aVNlbGVjdEFjdGl2ZScpKSB7XG5cdFx0XHRcdFNlYXJjaFNlbGVjdERlZmluZS5TU0RTZWFyY2gucmV0dXJuVG9TZWFyY2goJFNTRHNlbGVjdElkLmNsb3Nlc3QoJy5TZWFyY2hTRCcpKTtcblx0XHRcdFx0U2VhcmNoU2VsZWN0RGVmaW5lLlNTRFNlYXJjaC5jbG9zZVNTRCgkU1NEc2VsZWN0SWQuY2xvc2VzdCgnLlNlYXJjaFNEJykpO1xuXHRcdFx0fVxuXG5cdFx0XHQkQ29tcG9uZW50U1NEaW5wdXQudmFsKCcnKTtcblx0XHR9KTtcblxuXHRcdCRTU0RzZWxlY3RJZC5maW5kKCcuU2VsZWN0U0RfYWN0aW9uTGluaycpLm9uKCdjbGljaycsIGZ1bmN0aW9uKGUpIHtcblx0XHRcdCRDb21wb25lbnRTU0QgPSAkU1NEc2VsZWN0SWQuY2xvc2VzdCgnLlNlYXJjaFNEJyk7XG5cdFx0XHQkU1NEc2VsZWN0SWQuZmluZCgnLkxpbmVBY3Rpb25MSU5LID4gYScpLmNsaWNrKCk7XG5cdFx0XHRpZiAoISRDb21wb25lbnRTU0QuaGFzQ2xhc3MoJ011bHRpU2VsZWN0QWN0aXZlJykpIHtcblx0XHRcdFx0U2VhcmNoU2VsZWN0RGVmaW5lLlNTRFNlYXJjaC5yZXR1cm5Ub1NlYXJjaCgkU1NEc2VsZWN0SWQuY2xvc2VzdCgnLlNlYXJjaFNEJykpO1xuXHRcdFx0XHRTZWFyY2hTZWxlY3REZWZpbmUuU1NEU2VhcmNoLmNsb3NlU1NEKCRTU0RzZWxlY3RJZC5jbG9zZXN0KCcuU2VhcmNoU0QnKSk7XG5cdFx0XHR9XG5cdFx0fSk7XG5cdH0pO1xufTtcbiIsInZhciBTZWFyY2hTZWxlY3REZWZpbmUgPSAod2luZG93LlNlYXJjaFNlbGVjdERlZmluZSA9IHdpbmRvdy5TZWFyY2hTZWxlY3REZWZpbmUgfHwge30pO1xuXG5TYXBwaGlyZVdpZGdldHMuU1NEU2VhcmNoID0gZnVuY3Rpb24gU1NEc2VhcmNoU2V0dXAoY29uZmlnKSB7XG5cdCQoZnVuY3Rpb24oKSB7XG5cdFx0dmFyICRTU0R3aWRnZXQgPSAkKCcjJyArIGNvbmZpZy5TU0RXaWRnZXRJZCk7IC8vIFNTRENvbXBvbmVudCBtYXAgbm90IHVzZWQgYWdhaW5cblx0XHR2YXIgJFNTRENvbXBvbmVudCA9ICRTU0R3aWRnZXQuZmluZCgnLlNlYXJjaFNEJyk7IC8vIFNTRFNlYXJjaCBDb21wb25lbnQgaWQgZm9yIHVzZSBpbiB0aGUgZnVuY3Rpb24gYW5kIG1hbmlwdWxhdGUgY2xhc3Nlc1xuXHRcdHZhciAkU1NEQ29tcG9uZW50Q29udGVudCA9ICRTU0RDb21wb25lbnQuZmluZCgnLlNlYXJjaFNEX2NvbnRlbnQnKTsgLy8gU1NEY29tcG9uZW50IGNvbnRlbnRcblx0XHR2YXIgaGFzQ2xvbmUgPSBjb25maWcuSGFzQ2xvbmU7IC8vIEhhc0Nsb25lIHZhcmlhYmxlIGlucHV0IHBhcmFtZXRlciB2YWx1ZVxuXHRcdHZhciBoYXNGYXZvcml0ZSA9IGNvbmZpZy5IYXNGYXZvcml0ZTsgLy8gSGFzRmF2b3JpdGUgdmFyaWFibGUgaW5wdXQgcGFyYW1ldGVyIHZhbHVlXG5cdFx0dmFyIHNob3dDbG9uZXMgPSBjb25maWcuU2hvd0Nsb25lczsgLy8gU2hvd0Nsb25lcyB2YXJpYWJsZSBpbnB1dCBwYXJhbWV0ZXIgdmFsdWVcblx0XHR2YXIgbGV0dGVyTGltaXQgPSBjb25maWcuTGltaXRMZXR0ZXI7IC8vIE51bWJlciBvZiBsZXR0ZXIgdG8gZW50ZXIgYmVmb3JlIHRyaWdnZXIgdGhlIHNlYXJjaCBhY3Rpb25cblx0XHR2YXIgaGFzU2hpZWxkID0gY29uZmlnLkhhc1NoaWVsZDtcblx0XHR2YXIgc2hpZWxkVGltZW91dCA9IGNvbmZpZy5TaGllbGRUaW1lb3V0O1xuXHRcdHZhciBpbnB1dExlbmd0aCA9IGNvbmZpZy5TZWFyY2hJbnB1dExlbmd0aDtcblx0XHR2YXIgJHdpZGdldFNoaWVsZCA9ICRTU0RDb21wb25lbnQuZmluZCgnLlNlYXJjaFNELS1zaGllbGQnKTtcblx0XHR2YXIgc2VhcmNoVHJpZ2dlclRpbWVyO1xuXHRcdGNvbnN0ICRTU0RDbGVhckJ1dHRvbiA9ICRTU0RDb21wb25lbnQuZmluZCgnLlNlYXJjaFNEX19fcmVtb3ZlJyk7XG5cdFx0Y29uc3QgJFNTRElucHV0RWxlbWVudCA9ICRTU0RDb21wb25lbnQuZmluZCgnLlNlYXJjaFNEX19faW5wdXQgaW5wdXQnKTtcblxuXHRcdCRTU0RJbnB1dEVsZW1lbnQuYXR0cignbWF4TGVuZ3RoJywgaW5wdXRMZW5ndGgpO1xuXG5cdFx0dmFyIGV4ZWN1dGVTZWFyY2ggPSBmdW5jdGlvbigpIHtcblx0XHRcdGNsZWFyVGltZW91dChzZWFyY2hUcmlnZ2VyVGltZXIpO1xuXHRcdFx0c2VhcmNoVHJpZ2dlclRpbWVyID0gc2V0VGltZW91dChmdW5jdGlvbigpIHtcblx0XHRcdFx0VHJpZ2dlclNlYXJjaCgkU1NEQ29tcG9uZW50KTtcblx0XHRcdH0sIDcwMCk7XG5cdFx0fTtcblxuXHRcdGlmIChoYXNTaGllbGQpIHtcblx0XHRcdHdpbmRvdy5zZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuXHRcdFx0XHQkd2lkZ2V0U2hpZWxkLmhpZGUoKTtcblx0XHRcdH0sIHNoaWVsZFRpbWVvdXQpO1xuXHRcdH1cblxuXHRcdC8qICBSZXR1cm5zIGEgZnVuY3Rpb24sIHRoYXQsIGFzIGxvbmcgYXMgaXQgY29udGludWVzIHRvIGJlIGludm9rZWQsIHdpbGwgbm90XG5cdFx0ICogICBiZSB0cmlnZ2VyZWQuIFRoZSBmdW5jdGlvbiB3aWxsIGJlIGNhbGxlZCBhZnRlciBpdCBzdG9wcyBiZWluZyBjYWxsZWQgZm9yXG5cdFx0ICogICBOIG1pbGxpc2Vjb25kcy4gSWYgYGltbWVkaWF0ZWAgaXMgcGFzc2VkLCB0cmlnZ2VyIHRoZSBmdW5jdGlvbiBvbiB0aGVcblx0XHQgKiAgIGxlYWRpbmcgZWRnZSwgaW5zdGVhZCBvZiB0aGUgdHJhaWxpbmcuXG5cdFx0ICovXG5cdFx0dmFyIGRlYm91bmNlID0gZnVuY3Rpb24oZnVuYywgd2FpdCwgaW1tZWRpYXRlKSB7XG5cdFx0XHR2YXIgdGltZW91dDtcblx0XHRcdHJldHVybiBmdW5jdGlvbiBleGVjdXRlZEZ1bmN0aW9uKCkge1xuXHRcdFx0XHR2YXIgY29udGV4dCA9IHRoaXM7XG5cdFx0XHRcdHZhciBhcmdzID0gYXJndW1lbnRzO1xuXG5cdFx0XHRcdHZhciBsYXRlciA9IGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRcdHRpbWVvdXQgPSBudWxsO1xuXHRcdFx0XHRcdGlmICghaW1tZWRpYXRlKSBmdW5jLmFwcGx5KGNvbnRleHQsIGFyZ3MpO1xuXHRcdFx0XHR9O1xuXG5cdFx0XHRcdHZhciBjYWxsTm93ID0gaW1tZWRpYXRlICYmICF0aW1lb3V0O1xuXHRcdFx0XHRjbGVhclRpbWVvdXQodGltZW91dCk7XG5cdFx0XHRcdHRpbWVvdXQgPSBzZXRUaW1lb3V0KGxhdGVyLCB3YWl0KTtcblx0XHRcdFx0aWYgKGNhbGxOb3cpIGZ1bmMuYXBwbHkoY29udGV4dCwgYXJncyk7XG5cdFx0XHR9O1xuXHRcdH07XG5cblx0XHQvKioqKlxuXHRcdCAqICAgUmVzZXQgU2VhcmNoIFVJIHRvIHRoZSBpbml0aWFsIHN0YXRlXG5cdFx0ICovXG5cdFx0dmFyIHJlc2V0VUkgPSBmdW5jdGlvbigkU1NEQ29tcG9uZW50KSB7XG5cdFx0XHQkU1NEQ29tcG9uZW50LmZpbmQoJy5TZWFyY2hTRF9faW5wdXRXcmFwcGVyJykuc2hvdygpO1xuXHRcdFx0JFNTRENvbXBvbmVudC5maW5kKCcuU2VhcmNoU0Rfc2VhcmNoX2Zhdm9yaXRlTGluaycpLmhpZGUoKTtcblx0XHRcdCRTU0RDb21wb25lbnQuZmluZCgnLlNlYXJjaFNEX19fZ29Ub0Zhdm9yaXRlJykuaGlkZSgpO1xuXHRcdFx0JFNTRENvbXBvbmVudC5maW5kKCcuU2VhcmNoU0RfX0Zhdm9yaXRlQWN0aW9ucycpLmhpZGUoKTtcblx0XHRcdCRTU0RDb21wb25lbnQuZmluZCgnLlNlYXJjaFNEX19GYXZvcml0ZVJlbW92ZScpLmhpZGUoKTtcblx0XHRcdCRTU0RDb21wb25lbnQuZmluZCgnLlNlYXJjaFNEX19jbG9uZVdyYXBwZXInKS5oaWRlKCk7XG5cdFx0XHQkU1NEQ29tcG9uZW50LmZpbmQoJy5TZWFyY2hTRF9faW5wdXRXcmFwcGVyIC5TZWFyY2hTRF9fcmV0dXJuJykuaGlkZSgpO1xuXG5cdFx0XHRpZiAoJFNTRElucHV0RWxlbWVudC52YWwoKS50cmltKCkgPT09ICcnKSB7XG5cdFx0XHRcdCRTU0RDb21wb25lbnQuZmluZCgnLlNlYXJjaFNEX19fcmVtb3ZlJykuaGlkZSgpO1xuXHRcdFx0fVxuXG5cdFx0XHQkU1NEQ29tcG9uZW50LnJlbW92ZUNsYXNzKCdzaG93RmF2b3JpdGUnKTtcblx0XHRcdCRTU0RDb21wb25lbnQucmVtb3ZlQ2xhc3MoJ3Nob3dDbG9uZScpO1xuXHRcdH07XG5cblx0XHQvKlxuXHRcdCAqXG5cdFx0ICogIEdvIHRvIEZhdm9yaXRlcyBVSVxuXHRcdCAqICAtLSAgcmVzdCBTU0Rjb21wb25lbnRcblx0XHQgKiAgLS0gIHNob3cgRmF2b3JpdGUgZmVhdHVyZXNcblx0XHQgKiAgLS0gIHJlbW92ZSBjbGFzcyBzaG93Q2xvbmUgaWYgY29tcG9uZW50IGhhdmUgdGhhdCBjbGFzc1xuXHRcdCAqICAtLSAgYWRkIGNsYXNzIHNob3dGYXZvcml0ZSB0byBoYXZlIGNvbXBvbmVudCBjb250cm9sXG5cdFx0ICogIC0tICBhZGRDbGFzcyBPcGVuIHdpdGggc2xpZGVcblx0XHQgKi9cblx0XHR2YXIgZ29Ub0Zhdm9yaXRlcyA9IGZ1bmN0aW9uKCRTU0RDb21wb25lbnQpIHtcblx0XHRcdHJlc2V0VUkoJFNTRENvbXBvbmVudCk7XG5cblx0XHRcdCRTU0RDb21wb25lbnQuZmluZCgnLlNlYXJjaFNEX19faW5wdXQgaW5wdXQnKS52YWwoJycpO1xuXHRcdFx0JFNTRENvbXBvbmVudC5yZW1vdmVDbGFzcygnT3BlbicpO1xuXHRcdFx0JFNTRENvbXBvbmVudC5yZW1vdmVDbGFzcygnTXVsdGlTZWxlY3RBY3RpdmUnKTtcblx0XHRcdCRTU0RDb21wb25lbnQuZmluZCgnLlNlYXJjaFNEX19yZXR1cm4nKS5oaWRlKCk7XG5cdFx0XHQkU1NEQ29tcG9uZW50LmZpbmQoJy5TZWFyY2hTRF9faW5wdXRXcmFwcGVyJykuaGlkZSgpO1xuXG5cdFx0XHRpZiAoJFNTRENvbXBvbmVudC5oYXNDbGFzcygnc2hvd0Nsb25lJykpIHtcblx0XHRcdFx0JFNTRENvbXBvbmVudC5yZW1vdmVDbGFzcygnc2hvd0Nsb25lJyk7XG5cdFx0XHR9XG5cblx0XHRcdCRTU0RDb21wb25lbnQuZmluZCgnLlNlYXJjaFNEX3NlYXJjaF9mYXZvcml0ZUxpbmsgJykuc2hvdygpO1xuXHRcdFx0JFNTRENvbXBvbmVudC5maW5kKCcuU2VhcmNoU0RfX0Zhdm9yaXRlUmVtb3ZlICcpLnNob3coKTtcblx0XHRcdCRTU0RDb21wb25lbnQuZmluZCgnLlNlYXJjaFNEX19GYXZvcml0ZUFjdGlvbnMnKS5zaG93KCk7XG5cdFx0XHQkU1NEQ29tcG9uZW50LmFkZENsYXNzKCdzaG93RmF2b3JpdGUnKTtcblx0XHRcdCRTU0RDb21wb25lbnQuZmluZCgnLlNlbGVjdFNELmhhc0Zhdm9yaXRlID4gYScpLmZvY3VzKCk7XG5cdFx0XHQkU1NEQ29tcG9uZW50LmFkZENsYXNzKCdPcGVuJyk7XG5cblx0XHRcdC8vIGxvYWRpbmcgc2hvdyBoaWRlIGxpc3Rcblx0XHRcdCRTU0RDb21wb25lbnQuZmluZCgnLlNlYXJjaFNEX2NvbnRlbnRMaXN0JykuaGlkZSgpO1xuXHRcdFx0JFNTRENvbXBvbmVudC5maW5kKCcuU2VhcmNoU0RfX2xvYWRpbmcnKS5zaG93KCk7XG5cdFx0XHRpZiAoJFNTRENvbXBvbmVudC5maW5kKCcuU2VhcmNoU0Rfc2hvd01vcmUgYScpLmxlbmd0aCA+IDApIHtcblx0XHRcdFx0JFNTRENvbXBvbmVudC5maW5kKCcuU2VhcmNoU0Rfc2hvd01vcmUnKS5oaWRlKCk7XG5cdFx0XHR9XG5cdFx0fTtcblxuXHRcdC8qKioqKioqKioqKioqKlxuXHRcdCAqXG5cdFx0ICogIEdvIHRvIENsb25lIFVJXG5cdFx0ICogIC0tICByZW1vdmUgY2xhc3MgT3BlblxuXHRcdCAqICAtLSBBZGQgU2hvd0Nsb25lIGNsYXNzXG5cdFx0ICogIC0tIFNsaWRlRG93biBlZmZlY3QgYW5kIGFkZCBPcGVuIENsYXNzXG5cdFx0ICovXG5cdFx0dmFyIGdvVG9DbG9uZSA9IGZ1bmN0aW9uKCRTU0RDb21wb25lbnQpIHtcblx0XHRcdC8vIGxvYWRpbmcgc2hvdyBoaWRlIGxpc3Rcblx0XHRcdCRTU0RDb21wb25lbnQuZmluZCgnLlNlYXJjaFNEX2NvbnRlbnRMaXN0JykuaGlkZSgpO1xuXHRcdFx0JFNTRENvbXBvbmVudC5maW5kKCcuU2VhcmNoU0RfX2xvYWRpbmcnKS5zaG93KCk7XG5cdFx0XHRpZiAoJFNTRENvbXBvbmVudC5maW5kKCcuU2VhcmNoU0Rfc2hvd01vcmUgYScpLmxlbmd0aCA+IDApIHtcblx0XHRcdFx0JFNTRENvbXBvbmVudC5maW5kKCcuU2VhcmNoU0Rfc2hvd01vcmUnKS5oaWRlKCk7XG5cdFx0XHR9XG5cblx0XHRcdCRTU0RDb21wb25lbnQuZmluZCgnLlNlYXJjaFNEX19faW5wdXQgaW5wdXQnKS52YWwoJycpO1xuXHRcdFx0JFNTRENvbXBvbmVudC5yZW1vdmVDbGFzcygnT3BlbicpO1xuXG5cdFx0XHRpZiAoISRTU0RDb21wb25lbnQuaGFzQ2xhc3MoJ3Nob3dDbG9uZScpKSB7XG5cdFx0XHRcdCRTU0RDb21wb25lbnQuYWRkQ2xhc3MoJ3Nob3dDbG9uZScpO1xuXHRcdFx0fVxuXHRcdFx0JFNTRENvbXBvbmVudC5hZGRDbGFzcygnT3BlbicpO1xuXHRcdH07XG5cblx0XHQvKlxuXHRcdCAqIFJldHVybiB0byBzZWFyY2ggZnJvbSBmYXZvcml0ZSBvciBjbG9uZVxuXHRcdCAqL1xuXHRcdHZhciByZXR1cm5Ub1NlYXJjaCA9IGZ1bmN0aW9uKCRTU0RDb21wb25lbnQpIHtcblx0XHRcdC8vIGxvYWRpbmcgc2hvdyBoaWRlIGxpc3Rcblx0XHRcdCRTU0RDb21wb25lbnQuZmluZCgnLlNlYXJjaFNEX2NvbnRlbnRMaXN0JykuaGlkZSgpO1xuXHRcdFx0JFNTRENvbXBvbmVudC5maW5kKCcuU2VhcmNoU0RfX2xvYWRpbmcnKS5zaG93KCk7XG5cdFx0XHRpZiAoJFNTRENvbXBvbmVudC5maW5kKCcuU2VhcmNoU0Rfc2hvd01vcmUgYScpLmxlbmd0aCA+IDApIHtcblx0XHRcdFx0JFNTRENvbXBvbmVudC5maW5kKCcuU2VhcmNoU0Rfc2hvd01vcmUnKS5oaWRlKCk7XG5cdFx0XHR9XG5cblx0XHRcdHJlc2V0VUkoJFNTRENvbXBvbmVudCk7XG5cdFx0XHQkU1NEQ29tcG9uZW50LnJlbW92ZUNsYXNzKCdzaG93Q2xvbmUnKTtcblx0XHRcdCRTU0RDb21wb25lbnQucmVtb3ZlQ2xhc3MoJ3Nob3dGYXZvcml0ZScpO1xuXHRcdFx0JFNTRENvbXBvbmVudC5yZW1vdmVDbGFzcygnT3BlbicpO1xuXHRcdFx0JFNTRENvbXBvbmVudC5yZW1vdmVDbGFzcygnTXVsdGlTZWxlY3RBY3RpdmUnKTtcblxuXHRcdFx0JFNTRENvbXBvbmVudC5maW5kKCcuU2VhcmNoU0RfX2lucHV0V3JhcHBlciAuU2VhcmNoU0RfX3JldHVybicpLmhpZGUoKTtcblxuXHRcdFx0aWYgKCRTU0RDb21wb25lbnQuaGFzQ2xhc3MoJ2hhc0Nsb25lJykpIHtcblx0XHRcdFx0JFNTRENvbXBvbmVudC5hZGRDbGFzcygnaGFzQ2xvbmUnKTtcblx0XHRcdFx0JFNTRENvbXBvbmVudC5maW5kKCcuU2VhcmNoU0RfX2Nsb25lV3JhcHBlcicpLmNzcygnZGlzcGxheScsICdmbGV4Jyk7XG5cdFx0XHR9XG5cdFx0XHRpZiAoJFNTRENvbXBvbmVudC5oYXNDbGFzcygnaGFzRmF2b3JpdGUnKSkge1xuXHRcdFx0XHQkU1NEQ29tcG9uZW50LmFkZENsYXNzKCdoYXNGYXZvcml0ZScpO1xuXHRcdFx0XHQkU1NEQ29tcG9uZW50LmZpbmQoJy5TZWFyY2hTRF9zZWFyY2hfZmF2b3JpdGVMaW5rJykuc2hvdygpO1xuXHRcdFx0fVxuXHRcdH07XG5cblx0XHQvKlxuXHRcdCAqICAgU1NEQ2xlYXIgY2xvc2VzIFNTRFNlYXJjaCBjb250YWluZXJcblx0XHQgKiAgIGFuZCBjbGVhciBzc2QgZmlsdGVyIGlucHV0XG5cdFx0ICovXG5cdFx0dmFyIHNzZENsZWFyID0gZnVuY3Rpb24oJFNTRENvbXBvbmVudCkge1xuXHRcdFx0JFNTRENvbXBvbmVudC5yZW1vdmVDbGFzcygnT3BlbicpO1xuXHRcdFx0JFNTRENvbXBvbmVudC5maW5kKCcuU2VhcmNoU0RfX19pbnB1dCBpbnB1dCcpLnZhbCgnJyk7XG5cdFx0fTtcblxuXHRcdC8qXG5cdFx0ICogICBDbG9zZVNTRCBjbG9zZXMgU1NEU2VhcmNoIGNvbnRhaW5lclxuXHRcdCAqICAgbXVzdCByZW1vdmUgaGlnaHRsaWdodFNlbGVjdGlvbiBkb25lIGJ5IGtleWJvYXJkIG5hdmlnYXRpb25cblx0XHQgKi9cblx0XHR2YXIgY2xvc2VTU0QgPSBmdW5jdGlvbigkU1NEQ29tcG9uZW50KSB7XG5cdFx0XHQkU1NEQ29tcG9uZW50LnJlbW92ZUNsYXNzKCdPcGVuJyk7XG5cdFx0XHQkU1NEQ29tcG9uZW50Q29udGVudC5zbGlkZVVwKCcyNTAnKTtcblx0XHRcdCRTU0RDb21wb25lbnQuZmluZCgnLnNlbGVjdGVkJykucmVtb3ZlQ2xhc3MoJy5zZWxlY3RlZCcpO1xuXHRcdH07XG5cblx0XHQvKlxuXHRcdCAqICAgQWRkIE9wZW4gY2xhc3MgdG8gU1NEQ29tcG9uZW50XG5cdFx0ICogICBpZiBTU0RDb21wb25lbnQgaGFzIGNsYXNzIE9wZW4gdGhlbiBmb2N1c1xuXHRcdCAqICAgbWFrZXMgb3BlbiBlZmZlY3QsIGNoZWNrIHRoZSBjaGFyYWN0ZXJzIGluc2lkZSB0aGUgaW5wdXQgdG8gZmlsdGVyXG5cdFx0ICovXG5cdFx0dmFyIHNzZEZvY3VzID0gZnVuY3Rpb24oJFNTRENvbXBvbmVudCkge1xuXHRcdFx0aWYgKCEkU1NEQ29tcG9uZW50Lmhhc0NsYXNzKCdPcGVuJykpIHtcblx0XHRcdFx0Ly8gbG9hZGluZyBzaG93IGhpZGUgbGlzdFxuXHRcdFx0XHQkU1NEQ29tcG9uZW50LmZpbmQoJy5TZWFyY2hTRF9jb250ZW50TGlzdCcpLmhpZGUoKTtcblx0XHRcdFx0JFNTRENvbXBvbmVudC5maW5kKCcuU2VhcmNoU0RfX2xvYWRpbmcnKS5zaG93KCk7XG5cdFx0XHRcdGlmICgkU1NEQ29tcG9uZW50LmZpbmQoJy5TZWFyY2hTRF9zaG93TW9yZSBhJykubGVuZ3RoID4gMCkge1xuXHRcdFx0XHRcdCRTU0RDb21wb25lbnQuZmluZCgnLlNlYXJjaFNEX3Nob3dNb3JlJykuaGlkZSgpO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0JFNTRENvbXBvbmVudC5yZW1vdmVDbGFzcygnT3BlbicpO1xuXHRcdFx0XHQkU1NEQ29tcG9uZW50LnJlbW92ZUNsYXNzKCcuc2hvd0Nsb25lJyk7XG5cdFx0XHRcdCRTU0RDb21wb25lbnQucmVtb3ZlQ2xhc3MoJy5zaG93RmF2b3JpdGUnKTtcblxuXHRcdFx0XHRpZiAoISRTU0RDb21wb25lbnQuaGFzQ2xhc3MoJ09wZW4nKSkge1xuXHRcdFx0XHRcdCRTU0RDb21wb25lbnQuZmluZCgnLlNlYXJjaExpbmtJbnB1dCBhJykuY2xpY2soKTtcblx0XHRcdFx0XHQkU1NEQ29tcG9uZW50LmFkZENsYXNzKCdPcGVuJyk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9O1xuXG5cdFx0Lypcblx0XHQgKiAgIFdoZW4gY2xpY2tpbmcgY2xpY2tpbmcgb3V0c2lkZSB0aGUgY29tcG9uZW50XG5cdFx0ICogICB0aGUgU1NEIG11c3QgY2xvc2UgYW5kIHJldHVybiB0byBpbml0aWFsIHN0YXRlXG5cdFx0ICovXG5cdFx0dmFyIENsaWNrT3V0ID0gZnVuY3Rpb24oZSwgJFNTRENvbXBvbmVudCkge1xuXHRcdFx0aWYgKCEkU1NEQ29tcG9uZW50LmlzKGUudGFyZ2V0KSAmJiAkU1NEQ29tcG9uZW50LmhhcyhlLnRhcmdldCkubGVuZ3RoID09PSAwKSB7XG5cdFx0XHRcdHJldHVyblRvU2VhcmNoKCRTU0RDb21wb25lbnQpO1xuXHRcdFx0XHQkU1NEQ29tcG9uZW50LnJlbW92ZUNsYXNzKCdNdWx0aVNlbGVjdEFjdGl2ZScpO1xuXHRcdFx0fVxuXHRcdH07XG5cblx0XHQvKlxuXHRcdCAqICAgVHJpZ2dlcnMgdGhlIGxpbmsgdG8gaW5pdGlhbGl6ZVxuXHRcdCAqICAgdGhlIGRhdGFiYXNlIHNlYXJjaCBiYXNlZCBvbiBjdXJyZW50IGxlbmd0aCBvZiB0aGUgc3RyaW5nIGluc2VydGVkIG9uIHRoZSBpbnB1dFxuXHRcdCAqL1xuXHRcdHZhciBUcmlnZ2VyU2VhcmNoID0gZnVuY3Rpb24oJFNTRENvbXBvbmVudCkge1xuXHRcdFx0dmFyIGN1cnJlbnRXb3JkID0gJFNTRENvbXBvbmVudC5maW5kKCcuU2VhcmNoU0RfX19pbnB1dCBpbnB1dCcpLnZhbCgpO1xuXHRcdFx0dmFyIGN1cnJlbnRDb3VudCA9IGN1cnJlbnRXb3JkLmxlbmd0aDtcblx0XHRcdGlmIChjdXJyZW50Q291bnQgPj0gbGV0dGVyTGltaXQgfHwgY3VycmVudENvdW50ID09PSAwKSB7XG5cdFx0XHRcdCRTU0RDb21wb25lbnQuZmluZCgnLlNlYXJjaExpbmtJbnB1dCA+IGEnKS5jbGljaygpO1xuXHRcdFx0fVxuXHRcdH07XG5cblx0XHQvKlxuXHRcdCAqICAgUmVtb3ZlcyBhbGwgZmF2b3JpdGUgY2hlY2tlZCBib3hlc1xuXHRcdCAqICAgYW5kIGVuZHMgTXVsdGlwbGVTZWxlY3Rcblx0XHQgKi9cblx0XHR2YXIgTXVsdGlVbmNoZWNrID0gZnVuY3Rpb24oJFNTRENvbXBvbmVudCkge1xuXHRcdFx0JGNoZWNrQm94ZXMgPSAkU1NEQ29tcG9uZW50LnBhcmVudCgpLmZpbmQoJy5TZWxlY3RTRF9fbXVsdGlwbGUgPiBpbnB1dFt0eXBlPVwiY2hlY2tib3hcIl0nKTtcblx0XHRcdCRTU0RDb21wb25lbnQucmVtb3ZlQ2xhc3MoJ011bHRpU2VsZWN0QWN0aXZlJyk7XG5cblx0XHRcdCRTU0RDb21wb25lbnRcblx0XHRcdFx0LnBhcmVudCgpXG5cdFx0XHRcdC5maW5kKCcuU2VsZWN0U0RfX211bHRpcGxlID4gaW5wdXRbdHlwZT1cImNoZWNrYm94XCJdJylcblx0XHRcdFx0LmVhY2goZnVuY3Rpb24oKSB7XG5cdFx0XHRcdFx0JCh0aGlzKS5wcm9wKCdjaGVja2VkJywgZmFsc2UpO1xuXHRcdFx0XHR9KTtcblx0XHR9O1xuXG5cdFx0Lypcblx0XHQgKiAgIEtleUJvYXJkIGV2ZW50cyB1cCBkb3duIGFuZCBlbnRlciBpZiBub3QgZmlsdGVyXG5cdFx0ICovXG5cdFx0dmFyIGtleWJvYXJkRXZlbnRzID0gZnVuY3Rpb24oZSwgJFNTRENvbXBvbmVudCkge1xuXHRcdFx0aWYgKCRTU0RDb21wb25lbnQuaGFzQ2xhc3MoJ09wZW4nKSkge1xuXHRcdFx0XHR2YXIgY3VycmVudFNlbGVjdGVkID0gJFNTRENvbXBvbmVudENvbnRlbnQuZmluZCgnLkxpc3RSZWNvcmRzID4gc3Bhbi5zZWxlY3RlZCcpOyAvLyBDdXJyZW50IHNlbGVjdGFibGUgaXRlbVxuXHRcdFx0XHR2YXIgJGZpcnN0U2VsZWN0ID0gJFNTRENvbXBvbmVudENvbnRlbnQuZmluZCgnLkxpc3RSZWNvcmRzID4gc3BhbjpmaXJzdC1jaGlsZCcpOyAvLyBGaXJzdCBzZWxlY3RhYmxlIGl0ZW1cblx0XHRcdFx0dmFyICRsYXN0U2VsZWN0ID0gJFNTRENvbXBvbmVudENvbnRlbnQuZmluZCgnLkxpc3RSZWNvcmRzID4gc3BhbjpsYXN0LWNoaWxkJyk7IC8vIExhc3Qgc2VsZWN0YWJsZSBpdGVtXG5cdFx0XHRcdHZhciBjb3VudFNlbGVjdGVkID0gY3VycmVudFNlbGVjdGVkLmxlbmd0aDsgLy8gTnVtYmVyIG9mIHNlbGVjdGVkIGl0ZW1cblxuXHRcdFx0XHRpZiAoZS53aGljaCA9PSAzOCkge1xuXHRcdFx0XHRcdC8vIGlmIGtleSBwcmVzc2VkIGlzIHVwIGFycm93XG5cdFx0XHRcdFx0aWYgKGNvdW50U2VsZWN0ZWQgPT09IDApIHtcblx0XHRcdFx0XHRcdGN1cnJlbnRTZWxlY3RlZCA9ICRsYXN0U2VsZWN0O1xuXHRcdFx0XHRcdFx0JGxhc3RTZWxlY3QuYWRkQ2xhc3MoJ3NlbGVjdGVkJyk7XG5cdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdGN1cnJlbnRTZWxlY3RlZC5yZW1vdmVDbGFzcygnc2VsZWN0ZWQnKTtcblx0XHRcdFx0XHRcdG5leHQgPSBjdXJyZW50U2VsZWN0ZWQucHJldigpO1xuXG5cdFx0XHRcdFx0XHRpZiAobmV4dC5sZW5ndGggPiAwKSB7XG5cdFx0XHRcdFx0XHRcdGN1cnJlbnRTZWxlY3RlZCA9IG5leHQuYWRkQ2xhc3MoJ3NlbGVjdGVkJyk7XG5cdFx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0XHRjdXJyZW50U2VsZWN0ZWQgPSBjdXJyZW50U2VsZWN0ZWQubGFzdCgpLmFkZENsYXNzKCdzZWxlY3RlZCcpO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSBlbHNlIGlmIChlLndoaWNoID09IDQwKSB7XG5cdFx0XHRcdFx0Ly8gaWYga2V5IHByZXNzZWQgaXMgZG93biBhcnJvd1xuXHRcdFx0XHRcdGlmIChjb3VudFNlbGVjdGVkID09PSAwKSB7XG5cdFx0XHRcdFx0XHQkZmlyc3RTZWxlY3QuYWRkQ2xhc3MoJ3NlbGVjdGVkJyk7XG5cdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdG5leHQgPSBjdXJyZW50U2VsZWN0ZWQubmV4dCgpO1xuXHRcdFx0XHRcdFx0Y3VycmVudFNlbGVjdGVkLnJlbW92ZUNsYXNzKCdzZWxlY3RlZCcpO1xuXG5cdFx0XHRcdFx0XHRpZiAobmV4dC5sZW5ndGggPiAwKSB7XG5cdFx0XHRcdFx0XHRcdGN1cnJlbnRTZWxlY3RlZCA9IG5leHQuYWRkQ2xhc3MoJ3NlbGVjdGVkJyk7XG5cdFx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0XHRjdXJyZW50U2VsZWN0ZWQgPSBjdXJyZW50U2VsZWN0ZWQuZXEoMCkuYWRkQ2xhc3MoJ3NlbGVjdGVkJyk7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9IGVsc2UgaWYgKGUud2hpY2ggPT0gMTMpIHtcblx0XHRcdFx0XHQvLyBpZiBrZXkgcHJlc3NlZCBpcyBlbnRlclxuXHRcdFx0XHRcdGlmIChjb3VudFNlbGVjdGVkID4gMCkge1xuXHRcdFx0XHRcdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdFx0XHRcdFx0Y3VycmVudFNlbGVjdGVkLmZpbmQoJy5TZWxlY3RTRCAuU2VsZWN0U0RfYWN0aW9uTGluaycpLmNsaWNrKCk7XG5cdFx0XHRcdFx0XHRzc2RDbGVhcigkU1NEQ29tcG9uZW50KTtcblxuXHRcdFx0XHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0XHRcdFx0fSBlbHNlIGlmICgkU1NEQ29tcG9uZW50LmZpbmQoJ1NlYXJjaFNEX19faW5wdXQgaW5wdXQnKS5pcygnOmFjdGl2ZScpICYmIGNvdW50U2VsZWN0ZWQgPT09IDApIHtcblx0XHRcdFx0XHRcdGUucHJldmVudERlZmF1bHQoKTtcblx0XHRcdFx0XHRcdHJldHVybiB0cnVlO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRleGVjdXRlU2VhcmNoKCk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9O1xuXG5cdFx0Lypcblx0XHQgKiAgIFRoZSBmaXJzdCBzdGVwIGlzIHRvIHJlc2V0IHRoZSBzZWV0aW5ncyB0byBkZWZhdWx0XG5cdFx0ICovXG5cdFx0cmVzZXRVSSgkU1NEQ29tcG9uZW50KTtcblxuXHRcdC8qXG5cdFx0ICogIFJlbW92ZSBhdXRvQ29tcGxldGUgZnJvbSBzZWFyY2ggaW5wdXRcblx0XHQgKi9cblx0XHQkU1NEQ29tcG9uZW50LmZpbmQoJy5TZWFyY2hTRF9fX2lucHV0IGlucHV0JykuYXR0cignYXV0b2NvbXBsZXRlJywgJ29mZicpO1xuXG5cdFx0Lypcblx0XHQgKiAgIElmIFNTRCBoYXMgQ2xvbmUgYW5kIHRoZSBjbG9uZSBsaXN0IGlzIHZpc2libGVcblx0XHQgKiAgIG9uY2xpY2sgXCJDbG9uZSBwcmV2aW91cyBtZWRpY2F0aW9uXCIgdGhlblxuXHRcdCAqICAgcmVtb3ZlIE9wZW4gYW5kIHNob3cgaXRlbXMgdG8gY2xvbmUgbGlzdFxuXHRcdCAqL1xuXHRcdGlmIChoYXNDbG9uZSA9PT0gJ1RydWUnKSB7XG5cdFx0XHQkU1NEQ29tcG9uZW50LmFkZENsYXNzKCdoYXNDbG9uZScpO1xuXHRcdFx0JFNTRENvbXBvbmVudC5maW5kKCcuU2VhcmNoU0RfX2Nsb25lV3JhcHBlcicpLmNzcygnZGlzcGxheScsICdmbGV4Jyk7XG5cdFx0fVxuXG5cdFx0aWYgKGhhc0Zhdm9yaXRlID09PSAnVHJ1ZScpIHtcblx0XHRcdCRTU0RDb21wb25lbnQuYWRkQ2xhc3MoJ2hhc0Zhdm9yaXRlJyk7XG5cdFx0XHQkU1NEQ29tcG9uZW50LmZpbmQoJy5TZWFyY2hTRF9zZWFyY2hfZmF2b3JpdGVMaW5rJykuc2hvdygpO1xuXHRcdH1cblxuXHRcdGlmICgoaGFzQ2xvbmUgPT09ICdUcnVlJykgJiAoc2hvd0Nsb25lcyA9PT0gJ1RydWUnKSkge1xuXHRcdFx0JFNTRENvbXBvbmVudC5maW5kKCcuU2VhcmNoU0RfY2xvbmVXcmFwcGVyJykuY2xpY2soZnVuY3Rpb24oKSB7XG5cdFx0XHRcdCRTU0RDb21wb25lbnQuYWRkQ2xhc3MoJ09wZW4nKTtcblx0XHRcdH0pO1xuXHRcdH1cblxuXHRcdCRTU0RDb21wb25lbnQuZmluZCgnLlNlYXJjaFNEX19GYXZvcml0ZVJlbW92ZScpLmNsaWNrKGZ1bmN0aW9uKCkge1xuXHRcdFx0c3NkQ2xlYXIoJFNTRENvbXBvbmVudCk7XG5cdFx0XHRyZXR1cm5Ub1NlYXJjaCgkU1NEQ29tcG9uZW50KTtcblx0XHRcdGRlYm91bmNlKFRyaWdnZXJTZWFyY2goJFNTRENvbXBvbmVudCksIDU1MCk7XG5cdFx0XHRkZWJvdW5jZSgkU1NEQ29tcG9uZW50LmZpbmQoJy5TZWFyY2hTRF9fX2lucHV0IGlucHV0JykuZm9jdXMoKSwgNTYwKTtcblx0XHR9KTtcblxuXHRcdCRTU0RDb21wb25lbnQuZmluZCgnLlNlYXJjaFNEX19jbG9uZVdyYXBwZXInKS5jbGljayhmdW5jdGlvbigpIHtcblx0XHRcdGdvVG9DbG9uZSgkU1NEQ29tcG9uZW50KTtcblx0XHRcdCRTU0RDb21wb25lbnQuZmluZCgnLlNlYXJjaFNEX19fZ29Ub0Nsb25lID4gYScpLmNsaWNrKCk7XG5cdFx0fSk7XG5cblx0XHQkU1NEQ29tcG9uZW50LmZpbmQoJy5TZWFyY2hTRF9faW5wdXRXcmFwcGVyJykuY2xpY2soZnVuY3Rpb24oKSB7XG5cdFx0XHRpZiAoJFNTRENvbXBvbmVudC5oYXNDbGFzcygnc2hvd0Nsb25lJykpIHtcblx0XHRcdFx0cmV0dXJuVG9TZWFyY2goJFNTRENvbXBvbmVudCk7XG5cdFx0XHR9XG5cdFx0fSk7XG5cblx0XHQkU1NEQ29tcG9uZW50LmZpbmQoJy5TZWFyY2hTRF9fRmF2b3JpdGVBY3Rpb25zQ2FuY2VsJykuY2xpY2soZnVuY3Rpb24oKSB7XG5cdFx0XHRNdWx0aVVuY2hlY2soJFNTRENvbXBvbmVudCk7XG5cdFx0fSk7XG5cblx0XHQkU1NEQ29tcG9uZW50LmZpbmQoJy5TZWFyY2hTRF9fX2lucHV0IGlucHV0JykuZm9jdXMoZnVuY3Rpb24oKSB7XG5cdFx0XHRkZWJvdW5jZShzc2RGb2N1cygkU1NEQ29tcG9uZW50KSwgNjAwKTtcblx0XHR9KTtcblxuXHRcdCQoJ2JvZHknKS5tb3VzZXVwKGZ1bmN0aW9uKGUpIHtcblx0XHRcdENsaWNrT3V0KGUsICRTU0RDb21wb25lbnQpO1xuXHRcdH0pO1xuXHRcdC8qXG5cdFx0ICogICBLZXlCb2FyZCBldmVudHMgb24ga2V5IHByZXNzXG5cdFx0ICovXG5cdFx0JFNTRENvbXBvbmVudFxuXHRcdFx0LmZpbmQoJy5TZWFyY2hTRF9fX2lucHV0IGlucHV0Jylcblx0XHRcdC5hZGQoJFNTRENvbXBvbmVudC5maW5kKCcuU2VsZWN0U0RfYWN0aW9uTGluaycpKVxuXHRcdFx0Lm9uKCdrZXl1cCcsIGZ1bmN0aW9uKGUpIHtcblx0XHRcdFx0aWYgKCFlLndoaWNoICE9IDEzKSB7XG5cdFx0XHRcdFx0a2V5Ym9hcmRFdmVudHMoZSwgJFNTRENvbXBvbmVudCk7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRpZiAoJFNTRElucHV0RWxlbWVudC52YWwoKS50cmltKCkgPT09ICcnKSB7XG5cdFx0XHRcdFx0JFNTRENsZWFyQnV0dG9uLmFuaW1hdGUoeyBvcGFjaXR5OiAnaGlkZScgfSwgMzAwKTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHQkU1NEQ2xlYXJCdXR0b24uYW5pbWF0ZSh7IG9wYWNpdHk6ICdzaG93JyB9LCAzMDApO1xuXHRcdFx0XHR9XG5cdFx0XHR9KTtcblxuXHRcdC8qXG5cdFx0ICogICBQcmV2ZW50IGZvcm0gc3VibWlzc2lvbiBvbiBlbnRlcixcblx0XHQgKiAgIGluc3RlYWQgZ28gdG8ga2V5Ym9hcmQgZXZlbnRzIHRvIHRyaWdnZXJcblx0XHQgKiAgIHRoZSBzZWxlY3Rpb25cblx0XHQgKi9cblx0XHQkKCRTU0RDb21wb25lbnQpLm9uKCdrZXlkb3duJywgZnVuY3Rpb24oZSkge1xuXHRcdFx0aWYgKGUud2hpY2ggPT0gMTMpIHtcblx0XHRcdFx0a2V5Ym9hcmRFdmVudHMoZSwgJFNTRENvbXBvbmVudCk7XG5cdFx0XHR9XG5cdFx0fSk7XG5cblx0XHQkU1NEQ29tcG9uZW50LmZpbmQoJy5TZWFyY2hTRF9fX3JlbW92ZScpLmNsaWNrKGZ1bmN0aW9uKCkge1xuXHRcdFx0c3NkQ2xlYXIoJFNTRENvbXBvbmVudCk7XG5cdFx0XHRkZWJvdW5jZShyZXR1cm5Ub1NlYXJjaCgkU1NEQ29tcG9uZW50KSwgNjAwKTtcblx0XHR9KTtcblxuXHRcdCRTU0RDb21wb25lbnQuZmluZCgnLlNlYXJjaFNEX3NlYXJjaF9mYXZvcml0ZUxpbmsnKS5jbGljayhmdW5jdGlvbigpIHtcblx0XHRcdHNzZENsZWFyKCRTU0RDb21wb25lbnQpO1xuXHRcdFx0Z29Ub0Zhdm9yaXRlcygkU1NEQ29tcG9uZW50KTtcblx0XHRcdCRTU0RDb21wb25lbnQuZmluZCgnLlNlYXJjaFNEX19fZ29Ub0Zhdm9yaXRlID4gYScpLmNsaWNrKCk7XG5cdFx0fSk7XG5cblx0XHQkU1NEQ29tcG9uZW50LmZpbmQoJy5TZWFyY2hTRF9fRmF2b3JpdGVBY3Rpb25zQWRkID4gYScpLmNsaWNrKGZ1bmN0aW9uKCkge1xuXHRcdFx0ZGVib3VuY2UoVHJpZ2dlclNlYXJjaCgkU1NEQ29tcG9uZW50KSwgMjAwKTtcblx0XHRcdGRlYm91bmNlKHJldHVyblRvU2VhcmNoKCRTU0RDb21wb25lbnQpLCAzNTApO1xuXHRcdH0pO1xuXG5cdFx0Lypcblx0XHQgKiAgIE9uIEFqYXggUmVxdWVzdCBoaWRlIGxvYWRpbmcgZGl2IGlmIHRoZSBTU0QgaXMgb3BlbiB0aGVuIHNob3cgdGhlXG5cdFx0ICogICBMaXN0UmVjb3Jkc1xuXHRcdCAqL1xuXHRcdG9zQWpheEJhY2tlbmQuQmluZEFmdGVyQWpheFJlcXVlc3QoZnVuY3Rpb24oKSB7XG5cdFx0XHRpZiAoJFNTRENvbXBvbmVudC5oYXNDbGFzcygnT3BlbicpKSB7XG5cdFx0XHRcdCRTU0RDb21wb25lbnQuZmluZCgnLlNlYXJjaFNEX19sb2FkaW5nJykuaGlkZSgpO1xuXHRcdFx0XHQkU1NEQ29tcG9uZW50Q29udGVudC5zbGlkZURvd24oJzEwMDAnLCBmdW5jdGlvbigpIHtcblx0XHRcdFx0XHQkU1NEQ29tcG9uZW50LmZpbmQoJy5TZWFyY2hTRF9jb250ZW50TGlzdCcpLnNob3coKTtcblx0XHRcdFx0XHRpZiAoJFNTRENvbXBvbmVudC5maW5kKCcuU2VhcmNoU0Rfc2hvd01vcmUgYScpLmxlbmd0aCA+IDApIHtcblx0XHRcdFx0XHRcdCRTU0RDb21wb25lbnQuZmluZCgnLlNlYXJjaFNEX3Nob3dNb3JlJykuc2hvdygpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSk7XG5cdFx0XHR9XG5cdFx0fSk7XG5cblx0XHQkKCdmb3JtJykuYXBwZW5kKCc8aW5wdXQgdHlwZT1cInN1Ym1pdFwiIG5hbWU9XCJzc2RJbnB1dFwiIG9uY2xpY2s9XCJyZXR1cm4gZmFsc2U7XCIgIHN0eWxlPVwiZGlzcGxheTpub25lO1wiIC8+Jyk7XG5cblx0XHR3aW5kb3cuU2VhcmNoU2VsZWN0RGVmaW5lLlNTRFNlYXJjaCA9IHtcblx0XHRcdHJldHVyblRvU2VhcmNoOiByZXR1cm5Ub1NlYXJjaCxcblx0XHRcdHJlc2V0VUk6IHJlc2V0VUksXG5cdFx0XHRjbG9zZVNTRDogY2xvc2VTU0QsXG5cdFx0XHRzc2RGb2N1czogc3NkRm9jdXMsXG5cdFx0XHRUcmlnZ2VyU2VhcmNoOiBUcmlnZ2VyU2VhcmNoLFxuXHRcdFx0c3NkQ2xlYXI6IHNzZENsZWFyLFxuXHRcdH07XG5cdH0pO1xufTtcbi8vIEFkZGVkIHRvIGNsb3NlIHRoZSBzZWxlY3QgbGlzdCBpZiB3ZSBjbGljayB0aGUgcHJlc2NyaXB0aW9uIElmcmFtZTtcbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgZXZlbnQgPT4ge1xuXHR2YXIgcm9vdEVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5Jyk7XG5cdHJvb3RFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXG5cdFx0J2NsaWNrJyxcblx0XHRmdW5jdGlvbihldmVudCkge1xuXHRcdFx0ZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImlmcmFtZVtzcmMqPSdQcmVzY3JpcHRpb25zX0NXJ11cIikgJiZcblx0XHRcdFx0ZG9jdW1lbnRcblx0XHRcdFx0XHQucXVlcnlTZWxlY3RvcihcImlmcmFtZVtzcmMqPSdQcmVzY3JpcHRpb25zX0NXJ11cIilcblx0XHRcdFx0XHQuY29udGVudFdpbmRvdy5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGUgPT4ge1xuXHRcdFx0XHRcdFx0ZS5zdG9wUHJvcGFnYXRpb24oKTtcblx0XHRcdFx0XHRcdGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5TZWFyY2hTRCcpLmNsYXNzTGlzdC5yZW1vdmUoJ09wZW4nKTtcblx0XHRcdFx0XHRcdHZhciBhbGxJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5TZWFyY2hTRF9fX2lucHV0JykuY2hpbGRyZW47XG5cdFx0XHRcdFx0XHRmb3IgKGNvbnN0IGVsZW1lbnQgaW4gYWxsSW5wdXQpIHtcblx0XHRcdFx0XHRcdFx0cmV0dXJuIGFsbElucHV0W2VsZW1lbnRdLnZhbHVlICE9IHVuZGVmaW5lZCA/IChhbGxJbnB1dFtlbGVtZW50XS52YWx1ZSA9ICcnKSA6IG51bGw7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fSk7XG5cdFx0fSxcblx0XHR0cnVlXG5cdCk7XG59KTtcbiIsIi8qIENvbXBvbmVudCBTZWFyY2hDbGllbnRTaWRlICovXG4oZnVuY3Rpb24oJCwgd2luZG93LCBTYXBwaGlyZVdpZGdldHMpIHtcblx0Y2xhc3MgU2VhcmNoQ2xpZW50U2lkZSB7XG5cdFx0Y29uc3RydWN0b3IoY29uZmlnKSB7XG5cdFx0XHR0aGlzLm9wdGlvbnMgPSB7XG5cdFx0XHRcdC4uLmNvbmZpZyxcblx0XHRcdH07XG5cblx0XHRcdHRoaXMub25Db21wb25lbnRJbml0KCk7XG5cblx0XHRcdCQod2luZG93KS5sb2FkKCgpID0+IHtcblx0XHRcdFx0b3NBamF4QmFja2VuZC5CaW5kQWZ0ZXJBamF4UmVxdWVzdCgoKSA9PiB7XG5cdFx0XHRcdFx0c2V0VGltZW91dCgoKSA9PiB7XG5cdFx0XHRcdFx0XHQkKCcjJyArIHRoaXMub3B0aW9ucy5pbnB1dElkKS50cmlnZ2VyKCdjaGFuZ2UnKTtcblx0XHRcdFx0XHR9LCAyMDApO1xuXHRcdFx0XHR9KTtcblx0XHRcdH0pO1xuXHRcdH1cblxuXHRcdG9uQ29tcG9uZW50SW5pdCgpIHtcblx0XHRcdCQoJyMnICsgdGhpcy5vcHRpb25zLmlucHV0SWQpLm9uKCdjaGFuZ2Uga2V5ZG93biBwYXN0ZSBpbnB1dCcsIGUgPT4ge1xuXHRcdFx0XHRpZiAoZS5rZXlDb2RlID09PSAxMykge1xuXHRcdFx0XHRcdGUucHJldmVudERlZmF1bHQoKTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHR0aGlzLnNlYXJjaENsaWVudFNpZGUoXG5cdFx0XHRcdFx0XHR0aGlzLm9wdGlvbnMuaW5wdXRJZCxcblx0XHRcdFx0XHRcdHRoaXMub3B0aW9ucy5zZWFyY2hhYmxlRWxlbWVudFNlbGVjdG9yLFxuXHRcdFx0XHRcdFx0dGhpcy5vcHRpb25zLnNlYXJjaGFibGVDaGlsZFNlbGVjdG9yXG5cdFx0XHRcdFx0KTtcblx0XHRcdFx0fVxuXHRcdFx0fSk7XG5cdFx0fVxuXG5cdFx0c2VhcmNoQ2xpZW50U2lkZShpbnB1dElkLCBzZWxlY3RvciwgY2hpbGRTZWxlY3Rvcikge1xuXHRcdFx0aWYgKCQoJyMnICsgaW5wdXRJZCkuaXMoJzp2aXNpYmxlJykpIHtcblx0XHRcdFx0dmFyIHNlYXJjaFRleHQgPSBvc2pzKCcjJyArIGlucHV0SWQpXG5cdFx0XHRcdFx0LnZhbCgpXG5cdFx0XHRcdFx0LnRvTG93ZXJDYXNlKCk7XG5cdFx0XHRcdHZhciBzZWFyY2hDb3VudGVyID0gMDtcblx0XHRcdFx0dmFyIHNlbGVjaW9uID0gb3NqcyhzZWxlY3Rvcik7XG5cblx0XHRcdFx0c2VsZWNpb24ucmVtb3ZlQ2xhc3MoJ3NlYXJjaE5vdEZvdW5kJyk7XG5cdFx0XHRcdHNlbGVjaW9uLnJlbW92ZUNsYXNzKCdzZWFyY2hGb3VuZCcpO1xuXHRcdFx0XHRzZWxlY2lvbi51bmhpZ2hsaWdodCgpO1xuXG5cdFx0XHRcdGlmIChjaGlsZFNlbGVjdG9yKSB7XG5cdFx0XHRcdFx0Y29uc3QgZWxlbWVudFRvU2VhcmNoID0gb3NqcyhjaGlsZFNlbGVjdG9yKTtcblx0XHRcdFx0XHRlbGVtZW50VG9TZWFyY2gudW5oaWdobGlnaHQoKTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdGlmIChzZWFyY2hUZXh0Lmxlbmd0aCA+IDEpIHtcblx0XHRcdFx0XHRzZWxlY2lvbi5lYWNoKGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRcdFx0Y29uc3QgdGV4dFRvQ29tcGFyZSA9IGNoaWxkU2VsZWN0b3Jcblx0XHRcdFx0XHRcdFx0PyAkKHRoaXMpXG5cdFx0XHRcdFx0XHRcdFx0XHQuZmluZChjaGlsZFNlbGVjdG9yKVxuXHRcdFx0XHRcdFx0XHRcdFx0LnRleHQoKVxuXHRcdFx0XHRcdFx0XHQ6IHRoaXMuaW5uZXJUZXh0O1xuXG5cdFx0XHRcdFx0XHRpZiAoXG5cdFx0XHRcdFx0XHRcdHRleHRUb0NvbXBhcmVcblx0XHRcdFx0XHRcdFx0XHQudHJpbSgpXG5cdFx0XHRcdFx0XHRcdFx0LnRvTG93ZXJDYXNlKClcblx0XHRcdFx0XHRcdFx0XHQuaW5kZXhPZihzZWFyY2hUZXh0KSA+IC0xXG5cdFx0XHRcdFx0XHQpIHtcblx0XHRcdFx0XHRcdFx0b3Nqcyh0aGlzKS5hZGRDbGFzcygnc2VhcmNoRm91bmQnKTtcblx0XHRcdFx0XHRcdFx0c2VhcmNoQ291bnRlcisrO1xuXHRcdFx0XHRcdFx0XHRvc2pzKHRoaXMpLmhpZ2hsaWdodChzZWFyY2hUZXh0KTtcblx0XHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRcdG9zanModGhpcykuYWRkQ2xhc3MoJ3NlYXJjaE5vdEZvdW5kJyk7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fSk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHRjb25zdCBjcmVhdGUgPSBjb25maWcgPT4gKHdpbmRvd1tjb25maWcud2lkZ2V0SWRdID0gbmV3IFNlYXJjaENsaWVudFNpZGUoY29uZmlnKSk7XG5cblx0U2FwcGhpcmVXaWRnZXRzLlNlYXJjaENsaWVudFNpZGUgPSB7XG5cdFx0Y3JlYXRlLFxuXHR9O1xufSkoalF1ZXJ5LCB3aW5kb3csIFNhcHBoaXJlV2lkZ2V0cyk7XG4iLCIvKiBDb21wb25lbnQgU2VjdGlvbkV4cGFuZGFibGUgKi9cclxuKGZ1bmN0aW9uKCQsIHdpbmRvdywgU2FwcGhpcmVXaWRnZXRzKSB7XHJcblx0ZnVuY3Rpb24gU2VjdGlvbkV4cGFuZGFibGVDdXN0b20oKSB7XHJcblx0XHR2YXIgdGhhdCA9IHRoaXM7XHJcblxyXG5cdFx0Ly8gT2JqZWN0IHRvIHNhdmUgc3RhdHNcclxuXHRcdHZhciBwcmV2aWV3c3RhdCA9IFtdO1xyXG5cclxuXHRcdHZhciB0cmFuc2l0aW9uRXZlbnQgPSBTaWxrVUkud2hpY2hUcmFuc2l0aW9uRXZlbnQoKTtcclxuXHRcdC8vIHNldCBjbGljayBldmVudHNcclxuXHRcdGZ1bmN0aW9uIGNsaWNrRXZlbnRzKG9iKSB7XHJcblx0XHRcdC8vIHN0b3JlIHF1ZXJ5cyBpbiBhIHNpbmdsZSB2YXJcclxuXHRcdFx0dmFyIFNlY3Rpb24gPSAkKG9iKS5wYXJlbnQoKTtcclxuXHRcdFx0dmFyIFNlY3Rpb25Db250ZW50ID0gU2VjdGlvbi5jaGlsZHJlbignLlNlY3Rpb25FeHBhbmRhYmxlQ3VzdG9tX2NvbnRlbnQnKTtcclxuXHJcblx0XHRcdC8vIGdldCBpZFxyXG5cdFx0XHR2YXIgaWQgPSBTZWN0aW9uLmF0dHIoJ2lkJyk7XHJcblxyXG5cdFx0XHR2YXIgdGVtcEhlaWdodCA9IDA7XHJcblxyXG5cdFx0XHQvLyBoYXMgY2xhc3MgZXhwYW5kZWRcclxuXHRcdFx0aWYgKFNlY3Rpb24uaGFzQ2xhc3MoJ2V4cGFuZGVkJykpIHtcclxuXHRcdFx0XHQvLyBDYWxjIGFuZCBzZXQgYSBmaXhlZCBoZWlnaHQsIGR1cmluZyB0aGlzIHByb2Nlc3MsIHRyYW5zaXRpb25zIGFyZSBkaXNhYmxlZFxyXG5cdFx0XHRcdFNlY3Rpb25Db250ZW50LmFkZENsYXNzKCdub1RyYW5zaXRpb24nKTtcclxuXHRcdFx0XHRTZWN0aW9uQ29udGVudC5oZWlnaHQoU2VjdGlvbkNvbnRlbnQuaGVpZ2h0KCkpO1xyXG5cdFx0XHRcdFNlY3Rpb25Db250ZW50WzBdLm9mZnNldEhlaWdodDsgLy8gaGFjayB0byBmb3JjZSBhIHJlcGFpbnRcclxuXHRcdFx0XHRTZWN0aW9uQ29udGVudC5yZW1vdmVDbGFzcygnbm9UcmFuc2l0aW9uJyk7XHJcblxyXG5cdFx0XHRcdC8vIENvbGxhcHNlIGNvbnRlbnRcclxuXHRcdFx0XHRTZWN0aW9uQ29udGVudC5oZWlnaHQoMCk7XHJcblx0XHRcdFx0U2VjdGlvbi5yZW1vdmVDbGFzcygnZXhwYW5kZWQnKTtcclxuXHRcdFx0XHRTZWN0aW9uQ29udGVudC5jc3MoJ292ZXJmbG93JywgJ2hpZGRlbicpO1xyXG5cclxuXHRcdFx0XHQvLyBSZW1vdmUgY2xhc3MsIHNldCBoZWlnaHQgYW5kIHNhdmUgc3RhdGVcclxuXHRcdFx0XHRwcmV2aWV3c3RhdFtpZF1bJ2NsaWVudCddID0gZmFsc2U7XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0Ly8gQ2FsYyBhbmQgc2V0IGEgZml4ZWQgaGVpZ2h0XHJcblx0XHRcdFx0U2VjdGlvbkNvbnRlbnQuaGVpZ2h0KCdhdXRvJyk7XHJcblx0XHRcdFx0dGVtcEhlaWdodCA9IFNlY3Rpb25Db250ZW50LmhlaWdodCgpO1xyXG5cdFx0XHRcdFNlY3Rpb25Db250ZW50LmhlaWdodCgwKTtcclxuXHRcdFx0XHRTZWN0aW9uQ29udGVudC5oZWlnaHQodGVtcEhlaWdodCk7XHJcblx0XHRcdFx0U2VjdGlvbkNvbnRlbnQuY3NzKCdvdmVyZmxvdycsICdoaWRkZW4nKTtcclxuXHJcblx0XHRcdFx0Ly8gcmVtb3ZlIGNsYXNzLCBzZXQgaGVpZ2h0IGFuZCBzYXZlIHN0YXRlXHJcblx0XHRcdFx0U2VjdGlvbi5hZGRDbGFzcygnZXhwYW5kZWQnKTtcclxuXHRcdFx0XHRwcmV2aWV3c3RhdFtpZF1bJ2NsaWVudCddID0gdHJ1ZTtcclxuXHJcblx0XHRcdFx0aWYgKCQoJy5QYWdlJykuaGFzQ2xhc3MoJ2llOCcpIHx8ICQoJy5QYWdlJykuaGFzQ2xhc3MoJ2llOScpKSB7XHJcblx0XHRcdFx0XHRTZWN0aW9uQ29udGVudC5oZWlnaHQoJ2F1dG8nKTtcclxuXHRcdFx0XHRcdFNlY3Rpb25Db250ZW50LmNzcygnb3ZlcmZsb3cnLCAndmlzaWJsZScpO1xyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0Ly8gYWRkIGV2ZW50IHRyYW5zaXRpb24gZW5kIHRvIG92ZXJmbG93OnZpc2libGUgZm9yIHRvb2x0aXBzIGFuZCBkcm9wZG93bnMgaXNzdWVzXHJcblx0XHRcdFx0U2VjdGlvbkNvbnRlbnQub24odHJhbnNpdGlvbkV2ZW50LCBmdW5jdGlvbigpIHtcclxuXHRcdFx0XHRcdGlmIChTZWN0aW9uLmhhc0NsYXNzKCdleHBhbmRlZCcpKSB7XHJcblx0XHRcdFx0XHRcdFNlY3Rpb25Db250ZW50LmNzcygnb3ZlcmZsb3cnLCAndmlzaWJsZScpO1xyXG5cdFx0XHRcdFx0XHRTZWN0aW9uQ29udGVudC5hZGRDbGFzcygnbm9UcmFuc2l0aW9uJyk7XHJcblx0XHRcdFx0XHRcdFNlY3Rpb25Db250ZW50LmhlaWdodCgnYXV0bycpO1xyXG5cdFx0XHRcdFx0XHRTZWN0aW9uQ29udGVudFswXS5vZmZzZXRIZWlnaHQ7IC8vIGhhY2sgdG8gZm9yY2UgYSByZXBhaW50XHJcblx0XHRcdFx0XHRcdFNlY3Rpb25Db250ZW50LnJlbW92ZUNsYXNzKCdub1RyYW5zaXRpb24nKTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9KTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cclxuXHRcdC8vIGFqYXggcmVmcmVzIGZ1bmN0aW9uXHJcblx0XHR0aGF0LmFqYXhSZWZyZXNoID0gZnVuY3Rpb24oKSB7XHJcblx0XHRcdC8vIHJlbW92ZSBjbGljayBldmVudHNcclxuXHRcdFx0JCgnLlNlY3Rpb25FeHBhbmRhYmxlX2hlYWRlckN1c3RvbScpLm9mZigpO1xyXG5cclxuXHRcdFx0Ly8gYWRkIHN0b3AgcHJlcGFnYXRpb25cclxuXHRcdFx0JChcclxuXHRcdFx0XHQnLlNlY3Rpb25FeHBhbmRhYmxlX2hlYWRlckN1c3RvbSBpbnB1dCwgLlNlY3Rpb25FeHBhbmRhYmxlX2hlYWRlckN1c3RvbSBzZWxlY3QsIC5TZWN0aW9uRXhwYW5kYWJsZV9oZWFkZXJDdXN0b20gYSdcclxuXHRcdFx0KS5jbGljayhmdW5jdGlvbihldmVudCkge1xyXG5cdFx0XHRcdGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xyXG5cdFx0XHR9KTtcclxuXHJcblx0XHRcdC8vIGFkZCBuZXcgY2xpY2sgZXZlbnRzXHJcblx0XHRcdCQoJy5TZWN0aW9uRXhwYW5kYWJsZV9oZWFkZXJDdXN0b20nKS5vbignY2xpY2snLCBmdW5jdGlvbigpIHtcclxuXHRcdFx0XHRjbGlja0V2ZW50cyh0aGlzKTtcclxuXHRcdFx0fSk7XHJcblxyXG5cdFx0XHQvLyBlYWNoIGFsbCBzZWN0aW9uc1xyXG5cdFx0XHQkKCcuU2VjdGlvbkV4cGFuZGFibGVDdXN0b20nKS5lYWNoKGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdC8vIGlmIG5ldyBTZWN0aW9uRXhwYW5kYWJsZSB0aGVuIGFkZCB0byBwcmV2aWV3c3RhdCBhcnJheVxyXG5cdFx0XHRcdGlmIChwcmV2aWV3c3RhdFskKHRoaXMpLmF0dHIoJ2lkJyldID09IG51bGwpIHtcclxuXHRcdFx0XHRcdC8vIGFkZCBzdGF0IG9uIGFycmF5XHJcblx0XHRcdFx0XHR2YXIgc3RhdCA9IGZhbHNlO1xyXG5cdFx0XHRcdFx0Ly8gaWYgb3BlblxyXG5cdFx0XHRcdFx0aWYgKCQodGhpcykuaGFzQ2xhc3MoJ2V4cGFuZGVkJykpIHtcclxuXHRcdFx0XHRcdFx0c3RhdCA9IHRydWU7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHQvLyBhZGQgcm93XHJcblx0XHRcdFx0XHRwcmV2aWV3c3RhdFskKHRoaXMpLmF0dHIoJ2lkJyldID0ge1xyXG5cdFx0XHRcdFx0XHRjbGllbnQ6IHN0YXQsXHJcblx0XHRcdFx0XHRcdHNlcnZlcjogc3RhdCxcclxuXHRcdFx0XHRcdH07XHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHQvLyBjdXJlbnQgc3RhdGUgKGFqYXggc3RhdGUgeCBpbml0aWFsIHN0YXRlKVxyXG5cdFx0XHRcdHZhciBjdXJTdGF0ZSA9IGZhbHNlO1xyXG5cclxuXHRcdFx0XHQvLyBjaGVjayBpZiBzdGFydCBleHBhbmRhYmxlXHJcblx0XHRcdFx0aWYgKCQodGhpcykuaGFzQ2xhc3MoJ2V4cGFuZGVkJykpIHtcclxuXHRcdFx0XHRcdGN1clN0YXRlID0gdHJ1ZTtcclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdC8vIGNoZWNrIGlmIGFqYXggIT0gaW5pdGlhbCBzZXJ2ZXJcclxuXHRcdFx0XHRpZiAoY3VyU3RhdGUgIT0gcHJldmlld3N0YXRbJCh0aGlzKS5hdHRyKCdpZCcpXVsnc2VydmVyJ10pIHtcclxuXHRcdFx0XHRcdC8vIGN1cnN0YXRlXHJcblx0XHRcdFx0XHRwcmV2aWV3c3RhdFskKHRoaXMpLmF0dHIoJ2lkJyldWydjbGllbnQnXSA9IGN1clN0YXRlO1xyXG5cdFx0XHRcdFx0cHJldmlld3N0YXRbJCh0aGlzKS5hdHRyKCdpZCcpXVsnc2VydmVyJ10gPSBjdXJTdGF0ZTtcclxuXHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0Ly8gaGFzIGNsYXNzIGV4cGFuZGVkXHJcblx0XHRcdFx0XHRpZiAocHJldmlld3N0YXRbJCh0aGlzKS5hdHRyKCdpZCcpXVsnY2xpZW50J10gPT0gZmFsc2UgJiYgJCh0aGlzKS5oYXNDbGFzcygnZXhwYW5kZWQnKSkge1xyXG5cdFx0XHRcdFx0XHQkKHRoaXMpLnJlbW92ZUNsYXNzKCdleHBhbmRlZCcpO1xyXG5cdFx0XHRcdFx0XHQkKHRoaXMpXHJcblx0XHRcdFx0XHRcdFx0LmNoaWxkcmVuKCcuU2VjdGlvbkV4cGFuZGFibGVDdXN0b21fY29udGVudCcpXHJcblx0XHRcdFx0XHRcdFx0LmhlaWdodCgwKTtcclxuXHRcdFx0XHRcdH0gZWxzZSBpZiAocHJldmlld3N0YXRbJCh0aGlzKS5hdHRyKCdpZCcpXVsnY2xpZW50J10gPT0gdHJ1ZSAmJiAhJCh0aGlzKS5oYXNDbGFzcygnZXhwYW5kZWQnKSkge1xyXG5cdFx0XHRcdFx0XHQkKHRoaXMpLmFkZENsYXNzKCdleHBhbmRlZCcpO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSk7XHJcblx0XHR9O1xyXG5cclxuXHRcdC8vIHNldCBldmVudHNcclxuXHRcdHRoYXQuaW5pdCA9IGZ1bmN0aW9uKCkge1xyXG5cdFx0XHQvLyBlYWNoIGFsbCBzZWN0aW9ucyB0byBjcmVhdGUgYXJyYXkgc3RhdFxyXG5cdFx0XHQkKCcuU2VjdGlvbkV4cGFuZGFibGVDdXN0b20nKS5lYWNoKGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdC8vIGFkZCBzdGF0IG9uIGFycmF5XHJcblx0XHRcdFx0dmFyIHN0YXQgPSBmYWxzZTtcclxuXHJcblx0XHRcdFx0Ly8gaWYgb3BlblxyXG5cdFx0XHRcdGlmICgkKHRoaXMpLmhhc0NsYXNzKCdleHBhbmRlZCcpKSB7XHJcblx0XHRcdFx0XHRzdGF0ID0gdHJ1ZTtcclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdC8vIGFkZCByb3dcclxuXHRcdFx0XHRwcmV2aWV3c3RhdFskKHRoaXMpLmF0dHIoJ2lkJyldID0ge1xyXG5cdFx0XHRcdFx0Y2xpZW50OiBzdGF0LFxyXG5cdFx0XHRcdFx0c2VydmVyOiBzdGF0LFxyXG5cdFx0XHRcdH07XHJcblxyXG5cdFx0XHRcdGlmIChcclxuXHRcdFx0XHRcdCQodGhpcykuaGFzQ2xhc3MoJ0hpZGVXaGVuRW1wdHknKSAmJlxyXG5cdFx0XHRcdFx0JCh0aGlzKVxyXG5cdFx0XHRcdFx0XHQuZmluZCgnLlNlY3Rpb25FeHBhbmRhYmxlQ3VzdG9tX2NvbnRlbnQnKVxyXG5cdFx0XHRcdFx0XHQudGV4dCgpLmxlbmd0aCA9PT0gMFxyXG5cdFx0XHRcdCkge1xyXG5cdFx0XHRcdFx0JCh0aGlzKS5oaWRlKCk7XHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHQvLyBoYWNrIHRvIGRpc3BsYXkgYSBtZXNzYWdlIHdoZW4gU2VjdGlvbkV4cGFuZGFibGVDdXN0b20gaGFzIG5vIGNoaWxkIGl0ZW1zXHJcblx0XHRcdFx0dmFyIGlzRW1wdHkgPSB0cnVlO1xyXG5cdFx0XHRcdCQodGhpcylcclxuXHRcdFx0XHRcdC5maW5kKCcuU2VjdGlvbkV4cGFuZGFibGVDdXN0b21fY29udGVudCBkaXYsIC5TZWN0aW9uRXhwYW5kYWJsZUN1c3RvbV9jb250ZW50IHNwYW4nKVxyXG5cdFx0XHRcdFx0Lm5vdCgnLlNlY3Rpb25FeHBhbmRhYmxlQ3VzdG9tX2NvbnRlbnQtLWVtcHR5JylcclxuXHRcdFx0XHRcdC5lYWNoKGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdFx0XHRpZiAoJCh0aGlzKS50ZXh0KCkubGVuZ3RoID4gMCkge1xyXG5cdFx0XHRcdFx0XHRcdGlzRW1wdHkgPSBmYWxzZTtcclxuXHRcdFx0XHRcdFx0XHRyZXR1cm4gZmFsc2U7XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdH0pO1xyXG5cdFx0XHRcdGlmICghaXNFbXB0eSkge1xyXG5cdFx0XHRcdFx0JCh0aGlzKVxyXG5cdFx0XHRcdFx0XHQuZmluZCgnLlNlY3Rpb25FeHBhbmRhYmxlQ3VzdG9tX2NvbnRlbnQtLWVtcHR5JylcclxuXHRcdFx0XHRcdFx0LmNzcyh7XHJcblx0XHRcdFx0XHRcdFx0ZGlzcGxheTogJ25vbmUnLFxyXG5cdFx0XHRcdFx0XHR9KTtcclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdHZhciAkZXhwYW5kYWJsZUluc3RhbmNlID0gJCh0aGlzKTtcclxuXHRcdFx0XHR2YXIgJHRvZ2dsZXIgPSAkKHRoaXMpLmZpbmQoJz4gLlNlY3Rpb25FeHBhbmRhYmxlLXRvZ2dsZXInKTtcclxuXHRcdFx0XHRpZiAoJHRvZ2dsZXIubGVuZ3RoID09PSAxKSB7XHJcblx0XHRcdFx0XHR2YXIgJHRvZ2dsZXJTdGF0ZSA9IGZhbHNlO1xyXG5cdFx0XHRcdFx0JHRvZ2dsZXIuZmluZCgnW2RhdGEtbGFiZWx2YWx1ZV0nKS50ZXh0KCR0b2dnbGVyLmZpbmQoJ1tkYXRhLWxhYmVsc2hvd10nKS5kYXRhKCdsYWJlbHNob3cnKSk7XHJcblx0XHRcdFx0XHQkdG9nZ2xlci5vZmYoJ2NsaWNrJykub24oJ2NsaWNrJywgZnVuY3Rpb24oZXZ0KSB7XHJcblx0XHRcdFx0XHRcdGV2dC5zdG9wUHJvcGFnYXRpb24oKTtcclxuXHRcdFx0XHRcdFx0JHRvZ2dsZXJTdGF0ZSA9ICEkdG9nZ2xlclN0YXRlO1xyXG5cdFx0XHRcdFx0XHRpZiAoJHRvZ2dsZXJTdGF0ZSkge1xyXG5cdFx0XHRcdFx0XHRcdCRleHBhbmRhYmxlSW5zdGFuY2UuZmluZCgnLlNlY3Rpb25FeHBhbmRhYmxlLXRvZ2dsZWQnKS5zaG93KCk7XHJcblx0XHRcdFx0XHRcdFx0JHRvZ2dsZXIuZmluZCgnW2RhdGEtbGFiZWx2YWx1ZV0nKS50ZXh0KCR0b2dnbGVyLmZpbmQoJ1tkYXRhLWxhYmVsaGlkZV0nKS5kYXRhKCdsYWJlbGhpZGUnKSk7XHJcblx0XHRcdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRcdFx0JGV4cGFuZGFibGVJbnN0YW5jZS5maW5kKCcuU2VjdGlvbkV4cGFuZGFibGUtdG9nZ2xlZCcpLmhpZGUoKTtcclxuXHRcdFx0XHRcdFx0XHQkdG9nZ2xlci5maW5kKCdbZGF0YS1sYWJlbHZhbHVlXScpLnRleHQoJHRvZ2dsZXIuZmluZCgnW2RhdGEtbGFiZWxzaG93XScpLmRhdGEoJ2xhYmVsc2hvdycpKTtcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0fSk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9KTtcclxuXHJcblx0XHRcdC8vIGFkZCBjbGljayBldmVudHNcclxuXHRcdFx0JCgnLlNlY3Rpb25FeHBhbmRhYmxlX2hlYWRlckN1c3RvbScpXHJcblx0XHRcdFx0Lm9mZignY2xpY2snKVxyXG5cdFx0XHRcdC5vbignY2xpY2snLCBmdW5jdGlvbigpIHtcclxuXHRcdFx0XHRcdGNsaWNrRXZlbnRzKHRoaXMpO1xyXG5cdFx0XHRcdH0pO1xyXG5cclxuXHRcdFx0Ly8gYWRkIHN0b3AgcHJlcGFnYXRpb25cclxuXHRcdFx0JChcclxuXHRcdFx0XHQnLlNlY3Rpb25FeHBhbmRhYmxlX2hlYWRlckN1c3RvbSBpbnB1dCwgLlNlY3Rpb25FeHBhbmRhYmxlX2hlYWRlckN1c3RvbSBzZWxlY3QsIC5TZWN0aW9uRXhwYW5kYWJsZV9oZWFkZXJDdXN0b20gYSdcclxuXHRcdFx0KS5jbGljayhmdW5jdGlvbihldmVudCkge1xyXG5cdFx0XHRcdGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xyXG5cdFx0XHR9KTtcclxuXHJcblx0XHRcdC8vIGV2ZW50IGFqYXhcclxuXHRcdFx0b3NBamF4QmFja2VuZC5CaW5kQWZ0ZXJBamF4UmVxdWVzdCh0aGF0LmFqYXhSZWZyZXNoKTtcclxuXHRcdH07XHJcblx0fVxyXG5cclxuXHRjb25zdCBjcmVhdGUgPSAoKSA9PiB7XHJcblx0XHRTaWxrVUkuU2VjdGlvbkV4cGFuZGFibGUgPSBuZXcgU2VjdGlvbkV4cGFuZGFibGVDdXN0b20oKTtcclxuXHRcdFNpbGtVSS5FeGVjdXRlKFNpbGtVSS5TZWN0aW9uRXhwYW5kYWJsZS5pbml0LCAnRXJyb3Igb24gU2lsa1VJRnJhbWV3b3JrL0NvbnRlbnQvU2VjdGlvbkV4cGFuZGFibGUnKTtcclxuXHR9O1xyXG5cclxuXHRTYXBwaGlyZVdpZGdldHMuU2VjdGlvbkV4cGFuZGFibGUgPSB7XHJcblx0XHRjcmVhdGUsXHJcblx0fTtcclxufSkoalF1ZXJ5LCB3aW5kb3csIFNhcHBoaXJlV2lkZ2V0cyk7XHJcbiIsIi8qIENvbXBvbmVudCBTZWN0aW9uRXhwYW5kYWJsZUluc2lkZSAqL1xyXG4oZnVuY3Rpb24oJCwgd2luZG93LCBTYXBwaGlyZVdpZGdldHMpIHtcclxuXHRmdW5jdGlvbiBTZWN0aW9uRXhwYW5kYWJsZUluc2lkZSgpIHtcclxuXHRcdHZhciB0aGF0ID0gdGhpcztcclxuXHJcblx0XHQvLyBPYmplY3QgdG8gc2F2ZSBzdGF0c1xyXG5cdFx0dmFyIHByZXZpZXdzdGF0ID0gW107XHJcblxyXG5cdFx0dmFyIHRyYW5zaXRpb25FdmVudCA9IFNpbGtVSS53aGljaFRyYW5zaXRpb25FdmVudCgpO1xyXG5cdFx0Ly8gc2V0IGNsaWNrIGV2ZW50c1xyXG5cdFx0ZnVuY3Rpb24gY2xpY2tFdmVudHMob2IpIHtcclxuXHRcdFx0Ly8gc3RvcmUgcXVlcnlzIGluIGEgc2luZ2xlIHZhclxyXG5cdFx0XHR2YXIgU2VjdGlvbiA9ICQob2IpLnBhcmVudCgpO1xyXG5cdFx0XHR2YXIgU2VjdGlvbkNvbnRlbnQgPSBTZWN0aW9uLmNoaWxkcmVuKCcuU2VjdGlvbkV4cGFuZGFibGVJbnNpZGVfY29udGVudCcpO1xyXG5cclxuXHRcdFx0Ly8gZ2V0IGlkXHJcblx0XHRcdHZhciBpZCA9IFNlY3Rpb24uYXR0cignaWQnKTtcclxuXHJcblx0XHRcdHZhciB0ZW1wSGVpZ2h0ID0gMDtcclxuXHJcblx0XHRcdC8vIGhhcyBjbGFzcyBleHBhbmRlZFxyXG5cdFx0XHRpZiAoU2VjdGlvbi5oYXNDbGFzcygnZXhwYW5kZWQnKSkge1xyXG5cdFx0XHRcdC8vIENhbGMgYW5kIHNldCBhIGZpeGVkIGhlaWdodCwgZHVyaW5nIHRoaXMgcHJvY2VzcywgdHJhbnNpdGlvbnMgYXJlIGRpc2FibGVkXHJcblx0XHRcdFx0U2VjdGlvbkNvbnRlbnQuYWRkQ2xhc3MoJ25vVHJhbnNpdGlvbicpO1xyXG5cdFx0XHRcdFNlY3Rpb25Db250ZW50LmhlaWdodChTZWN0aW9uQ29udGVudC5oZWlnaHQoKSk7XHJcblx0XHRcdFx0U2VjdGlvbkNvbnRlbnRbMF0ub2Zmc2V0SGVpZ2h0OyAvLyBoYWNrIHRvIGZvcmNlIGEgcmVwYWludFxyXG5cdFx0XHRcdFNlY3Rpb25Db250ZW50LnJlbW92ZUNsYXNzKCdub1RyYW5zaXRpb24nKTtcclxuXHJcblx0XHRcdFx0Ly8gQ29sbGFwc2UgY29udGVudFxyXG5cdFx0XHRcdFNlY3Rpb25Db250ZW50LmhlaWdodCgwKTtcclxuXHRcdFx0XHRTZWN0aW9uLnJlbW92ZUNsYXNzKCdleHBhbmRlZCcpO1xyXG5cdFx0XHRcdFNlY3Rpb25Db250ZW50LmNzcygnb3ZlcmZsb3cnLCAnaGlkZGVuJyk7XHJcblxyXG5cdFx0XHRcdC8vIFJlbW92ZSBjbGFzcywgc2V0IGhlaWdodCBhbmQgc2F2ZSBzdGF0ZVxyXG5cdFx0XHRcdHByZXZpZXdzdGF0W2lkXVsnY2xpZW50J10gPSBmYWxzZTtcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHQvLyBDYWxjIGFuZCBzZXQgYSBmaXhlZCBoZWlnaHRcclxuXHRcdFx0XHRTZWN0aW9uQ29udGVudC5oZWlnaHQoJ2F1dG8nKTtcclxuXHRcdFx0XHQvLyB0ZW1wSGVpZ2h0ID0gU2VjdGlvbkNvbnRlbnQuaGVpZ2h0KCk7XHJcblx0XHRcdFx0Ly8gU2VjdGlvbkNvbnRlbnQuaGVpZ2h0KDApO1xyXG5cdFx0XHRcdC8vIFNlY3Rpb25Db250ZW50LmhlaWdodCh0ZW1wSGVpZ2h0KTtcclxuXHRcdFx0XHRTZWN0aW9uQ29udGVudC5jc3MoJ292ZXJmbG93JywgJ2hpZGRlbicpO1xyXG5cclxuXHRcdFx0XHQvLyByZW1vdmUgY2xhc3MsIHNldCBoZWlnaHQgYW5kIHNhdmUgc3RhdGVcclxuXHRcdFx0XHRTZWN0aW9uLmFkZENsYXNzKCdleHBhbmRlZCcpO1xyXG5cdFx0XHRcdHByZXZpZXdzdGF0W2lkXVsnY2xpZW50J10gPSB0cnVlO1xyXG5cclxuXHRcdFx0XHQvLyBhZGQgZXZlbnQgdHJhbnNpdGlvbiBlbmQgdG8gb3ZlcmZsb3c6dmlzaWJsZSBmb3IgdG9vbHRpcHMgYW5kIGRyb3Bkb3ducyBpc3N1ZXNcclxuXHRcdFx0XHRTZWN0aW9uQ29udGVudC5vbih0cmFuc2l0aW9uRXZlbnQsIGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdFx0aWYgKFNlY3Rpb24uaGFzQ2xhc3MoJ2V4cGFuZGVkJykpIHtcclxuXHRcdFx0XHRcdFx0U2VjdGlvbkNvbnRlbnQuY3NzKCdvdmVyZmxvdycsICd2aXNpYmxlJyk7XHJcblx0XHRcdFx0XHRcdFNlY3Rpb25Db250ZW50LmFkZENsYXNzKCdub1RyYW5zaXRpb24nKTtcclxuXHRcdFx0XHRcdFx0U2VjdGlvbkNvbnRlbnQuaGVpZ2h0KCdhdXRvJyk7XHJcblx0XHRcdFx0XHRcdFNlY3Rpb25Db250ZW50WzBdLm9mZnNldEhlaWdodDsgLy8gaGFjayB0byBmb3JjZSBhIHJlcGFpbnRcclxuXHRcdFx0XHRcdFx0U2VjdGlvbkNvbnRlbnQucmVtb3ZlQ2xhc3MoJ25vVHJhbnNpdGlvbicpO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH0pO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblxyXG5cdFx0Ly8gYWpheCByZWZyZXMgZnVuY3Rpb25cclxuXHRcdHRoYXQuYWpheFJlZnJlc2ggPSBmdW5jdGlvbigpIHtcclxuXHRcdFx0Ly8gcmVtb3ZlIGNsaWNrIGV2ZW50c1xyXG5cdFx0XHQkKCcuU2VjdGlvbkV4cGFuZGFibGVJbnNpZGUgLlNlY3Rpb25FeHBhbmRhYmxlSW5zaWRlX2hlYWRlcicpLm9mZigpO1xyXG5cclxuXHRcdFx0Ly8gYWRkIHN0b3AgcHJlcGFnYXRpb25cclxuXHRcdFx0JChcclxuXHRcdFx0XHQnLlNlY3Rpb25FeHBhbmRhYmxlSW5zaWRlIC5TZWN0aW9uRXhwYW5kYWJsZUluc2lkZV9oZWFkZXIgaW5wdXQsIC5TZWN0aW9uRXhwYW5kYWJsZUluc2lkZSAuU2VjdGlvbkV4cGFuZGFibGVJbnNpZGVfaGVhZGVyIHNlbGVjdCwgLlNlY3Rpb25FeHBhbmRhYmxlSW5zaWRlIC5TZWN0aW9uRXhwYW5kYWJsZUluc2lkZV9oZWFkZXIgYSdcclxuXHRcdFx0KS5jbGljayhmdW5jdGlvbihldmVudCkge1xyXG5cdFx0XHRcdGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xyXG5cdFx0XHR9KTtcclxuXHJcblx0XHRcdC8vIGFkZCBuZXcgY2xpY2sgZXZlbnRzXHJcblx0XHRcdCQoJy5TZWN0aW9uRXhwYW5kYWJsZUluc2lkZSAuU2VjdGlvbkV4cGFuZGFibGVJbnNpZGVfaGVhZGVyJykub24oJ2NsaWNrJywgZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0Y2xpY2tFdmVudHModGhpcyk7XHJcblx0XHRcdH0pO1xyXG5cclxuXHRcdFx0Ly8gZWFjaCBhbGwgc2VjdGlvbnNcclxuXHRcdFx0JCgnLlNlY3Rpb25FeHBhbmRhYmxlSW5zaWRlJykuZWFjaChmdW5jdGlvbigpIHtcclxuXHRcdFx0XHQvLyBpZiBuZXcgU2VjdGlvbkV4cGFuZGFibGUgdGhlbiBhZGQgdG8gcHJldmlld3N0YXQgYXJyYXlcclxuXHRcdFx0XHRpZiAocHJldmlld3N0YXRbJCh0aGlzKS5hdHRyKCdpZCcpXSA9PSBudWxsKSB7XHJcblx0XHRcdFx0XHQvLyBhZGQgc3RhdCBvbiBhcnJheVxyXG5cdFx0XHRcdFx0dmFyIHN0YXQgPSBmYWxzZTtcclxuXHRcdFx0XHRcdC8vIGlmIG9wZW5cclxuXHRcdFx0XHRcdGlmICgkKHRoaXMpLmhhc0NsYXNzKCdleHBhbmRlZCcpKSB7XHJcblx0XHRcdFx0XHRcdHN0YXQgPSB0cnVlO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0Ly8gYWRkIHJvd1xyXG5cdFx0XHRcdFx0cHJldmlld3N0YXRbJCh0aGlzKS5hdHRyKCdpZCcpXSA9IHsgY2xpZW50OiBzdGF0LCBzZXJ2ZXI6IHN0YXQgfTtcclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdC8vIGN1cmVudCBzdGF0ZSAoYWpheCBzdGF0ZSB4IGluaXRpYWwgc3RhdGUpXHJcblx0XHRcdFx0dmFyIGN1clN0YXRlID0gZmFsc2U7XHJcblxyXG5cdFx0XHRcdC8vIGNoZWNrIGlmIHN0YXJ0IGV4cGFuZGFibGVcclxuXHRcdFx0XHRpZiAoJCh0aGlzKS5oYXNDbGFzcygnZXhwYW5kZWQnKSkge1xyXG5cdFx0XHRcdFx0Y3VyU3RhdGUgPSB0cnVlO1xyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0Ly8gY2hlY2sgaWYgYWpheCAhPSBpbml0aWFsIHNlcnZlclxyXG5cdFx0XHRcdGlmIChjdXJTdGF0ZSAhPSBwcmV2aWV3c3RhdFskKHRoaXMpLmF0dHIoJ2lkJyldWydzZXJ2ZXInXSkge1xyXG5cdFx0XHRcdFx0Ly8gY3Vyc3RhdGVcclxuXHRcdFx0XHRcdHByZXZpZXdzdGF0WyQodGhpcykuYXR0cignaWQnKV1bJ2NsaWVudCddID0gY3VyU3RhdGU7XHJcblx0XHRcdFx0XHRwcmV2aWV3c3RhdFskKHRoaXMpLmF0dHIoJ2lkJyldWydzZXJ2ZXInXSA9IGN1clN0YXRlO1xyXG5cdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHQvLyBoYXMgY2xhc3MgZXhwYW5kZWRcclxuXHRcdFx0XHRcdGlmIChwcmV2aWV3c3RhdFskKHRoaXMpLmF0dHIoJ2lkJyldWydjbGllbnQnXSA9PSBmYWxzZSAmJiAkKHRoaXMpLmhhc0NsYXNzKCdleHBhbmRlZCcpKSB7XHJcblx0XHRcdFx0XHRcdCQodGhpcykucmVtb3ZlQ2xhc3MoJ2V4cGFuZGVkJyk7XHJcblx0XHRcdFx0XHRcdCQodGhpcylcclxuXHRcdFx0XHRcdFx0XHQuY2hpbGRyZW4oJy5TZWN0aW9uRXhwYW5kYWJsZUluc2lkZV9jb250ZW50JylcclxuXHRcdFx0XHRcdFx0XHQuaGVpZ2h0KDApO1xyXG5cdFx0XHRcdFx0fSBlbHNlIGlmIChwcmV2aWV3c3RhdFskKHRoaXMpLmF0dHIoJ2lkJyldWydjbGllbnQnXSA9PSB0cnVlICYmICEkKHRoaXMpLmhhc0NsYXNzKCdleHBhbmRlZCcpKSB7XHJcblx0XHRcdFx0XHRcdCQodGhpcykuYWRkQ2xhc3MoJ2V4cGFuZGVkJyk7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9KTtcclxuXHRcdH07XHJcblxyXG5cdFx0Ly8gc2V0IGV2ZW50c1xyXG5cdFx0dGhhdC5pbml0ID0gZnVuY3Rpb24oKSB7XHJcblx0XHRcdC8vIGVhY2ggYWxsIHNlY3Rpb25zIHRvIGNyZWF0ZSBhcnJheSBzdGF0XHJcblx0XHRcdCQoJy5TZWN0aW9uRXhwYW5kYWJsZUluc2lkZScpLmVhY2goZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0Ly8gYWRkIHN0YXQgb24gYXJyYXlcclxuXHRcdFx0XHR2YXIgc3RhdCA9IGZhbHNlO1xyXG5cclxuXHRcdFx0XHQvLyBpZiBvcGVuXHJcblx0XHRcdFx0aWYgKCQodGhpcykuaGFzQ2xhc3MoJ2V4cGFuZGVkJykpIHtcclxuXHRcdFx0XHRcdHN0YXQgPSB0cnVlO1xyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0Ly8gYWRkIHJvd1xyXG5cdFx0XHRcdHByZXZpZXdzdGF0WyQodGhpcykuYXR0cignaWQnKV0gPSB7IGNsaWVudDogc3RhdCwgc2VydmVyOiBzdGF0IH07XHJcblx0XHRcdH0pO1xyXG5cclxuXHRcdFx0Ly8gYWRkIGNsaWNrIGV2ZW50c1xyXG5cdFx0XHQkKCcuU2VjdGlvbkV4cGFuZGFibGVJbnNpZGUgLlNlY3Rpb25FeHBhbmRhYmxlSW5zaWRlX2hlYWRlcicpXHJcblx0XHRcdFx0Lm9mZignY2xpY2snKVxyXG5cdFx0XHRcdC5vbignY2xpY2snLCBmdW5jdGlvbigpIHtcclxuXHRcdFx0XHRcdGNsaWNrRXZlbnRzKHRoaXMpO1xyXG5cdFx0XHRcdH0pO1xyXG5cclxuXHRcdFx0Ly8gYWRkIHN0b3AgcHJlcGFnYXRpb25cclxuXHRcdFx0JChcclxuXHRcdFx0XHQnLlNlY3Rpb25FeHBhbmRhYmxlSW5zaWRlIC5TZWN0aW9uRXhwYW5kYWJsZUluc2lkZV9oZWFkZXIgaW5wdXQsIC5TZWN0aW9uRXhwYW5kYWJsZUluc2lkZSAuU2VjdGlvbkV4cGFuZGFibGVJbnNpZGVfaGVhZGVyIHNlbGVjdCwgLlNlY3Rpb25FeHBhbmRhYmxlSW5zaWRlIC5TZWN0aW9uRXhwYW5kYWJsZUluc2lkZV9oZWFkZXIgYSdcclxuXHRcdFx0KS5jbGljayhmdW5jdGlvbihldmVudCkge1xyXG5cdFx0XHRcdGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xyXG5cdFx0XHR9KTtcclxuXHJcblx0XHRcdC8vIGV2ZW50IGFqYXhcclxuXHRcdFx0b3NBamF4QmFja2VuZC5CaW5kQWZ0ZXJBamF4UmVxdWVzdCh0aGF0LmFqYXhSZWZyZXNoKTtcclxuXHRcdH07XHJcblx0fVxyXG5cclxuXHRjb25zdCBzZXRPcGVuQ2xvc2VDbGFzcyA9IGlkID0+IHtcclxuXHRcdGlkLmNsaWNrKGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRpZiAoaWQucGFyZW50KCkuaGFzQ2xhc3MoJ2V4cGFuZGVkJykpIHtcclxuXHRcdFx0XHQkKHRoaXMpXHJcblx0XHRcdFx0XHQuZmluZCgnLkhlYWRlckljb24nKVxyXG5cdFx0XHRcdFx0LnJlbW92ZUNsYXNzKCdvcGVuJyk7XHJcblx0XHRcdFx0JCh0aGlzKVxyXG5cdFx0XHRcdFx0LmZpbmQoJy5IZWFkZXJJY29uJylcclxuXHRcdFx0XHRcdC5hZGRDbGFzcygnY2xvc2VkJyk7XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0JCh0aGlzKVxyXG5cdFx0XHRcdFx0LmZpbmQoJy5IZWFkZXJJY29uJylcclxuXHRcdFx0XHRcdC5yZW1vdmVDbGFzcygnY2xvc2VkJyk7XHJcblx0XHRcdFx0JCh0aGlzKVxyXG5cdFx0XHRcdFx0LmZpbmQoJy5IZWFkZXJJY29uJylcclxuXHRcdFx0XHRcdC5hZGRDbGFzcygnb3BlbicpO1xyXG5cdFx0XHR9XHJcblx0XHR9KTtcclxuXHR9O1xyXG5cclxuXHRjb25zdCBjcmVhdGUgPSAoKSA9PiB7XHJcblx0XHRTaWxrVUkuU2VjdGlvbkV4cGFuZGFibGUgPSBuZXcgU2VjdGlvbkV4cGFuZGFibGVJbnNpZGUoKTtcclxuXHRcdFNpbGtVSS5FeGVjdXRlKFNpbGtVSS5TZWN0aW9uRXhwYW5kYWJsZS5pbml0LCAnRXJyb3Igb24gU2lsa1VJRnJhbWV3b3JrL0NvbnRlbnQvU2VjdGlvbkV4cGFuZGFibGUnKTtcclxuXHR9O1xyXG5cclxuXHRTYXBwaGlyZVdpZGdldHMuU2VjdGlvbkV4cGFuZGFibGVJbnNpZGUgPSB7XHJcblx0XHRjcmVhdGUsXHJcblx0XHRzZXRPcGVuQ2xvc2VDbGFzcyxcclxuXHR9O1xyXG59KShqUXVlcnksIHdpbmRvdywgU2FwcGhpcmVXaWRnZXRzKTtcclxuIiwiLyogQ29tcG9uZW50IFNlbGVjdFN5c3RlbSAqL1xyXG5TYXBwaGlyZVdpZGdldHMuU2VsZWN0U3lzdGVtID0gY29uZmlnID0+IHtcclxuXHQkKGZ1bmN0aW9uKCkge1xyXG5cdFx0dmFyIFdpZGdldElkID0gY29uZmlnLldpZGdldElkOyAvL0NvbWJvIEJveCBJZCB0byBiZSB1c2VkLlxyXG5cdFx0dmFyIENsYXNzID0gY29uZmlnLkNsYXNzOyAvL0FsbCBDb21ibyBib3hlcyB3aXRoIHRoaXMgY2xhc3Mgd2lsbCBiZSBiZSB0cmFuc2Zvcm1lZC5cclxuXHRcdHZhciBOb1Jlc3VsdHNUZXh0ID0gY29uZmlnLk5vUmVzdWx0c1RleHQ7IC8vVGV4dCB0byBkaXNwbGF5IHdoZW4gdGhlcmUgYXJlIG5vIHJlc3VsdHMuXHJcblx0XHR2YXIgaW5wdXRUeXBlID0gY29uZmlnLklucHVUeXBlOyAvL09wdGlvbnM6IEZJbHRlcnMsIERyb3Bkb3duLCBTZWxlY3QyXHJcblx0XHR2YXIgUHJvbXB0ID0gY29uZmlnLlByb21wdDsgLy9Qcm9tcHQgaW4gc2VhcmNoXHJcblx0XHR2YXIgU2VsZWN0MlR5cGUgPSBjb25maWcuU2VsZWN0VHlwZTsgLy8gVHlwZSBvZiBzZWxlY3QyIGNvbmZpZ3VyYXRpb25cclxuXHRcdHZhciBIYXNTZWFyY2ggPSBjb25maWcuSGFzU2VhcmNoOyAvLyBoYXMgc2VhcmNoXHJcblx0XHR2YXIgT25TZWxlY3RpbmdKUyA9IGNvbmZpZy5PblNlbGVjdGluZ0pTO1xyXG5cdFx0dmFyIE9uVW5TZWxlY3RpbmdKUyA9IGNvbmZpZy5PblVuU2VsZWN0aW5nSlM7XHJcblx0XHR2YXIgTWF4aW11bUxlbmd0aCA9IGNvbmZpZy5NYXhpbXVtTGVuZ3RoO1xyXG5cdFx0dmFyIFNlbGVjdGVkVmFsdWUgPSBjb25maWcuU2VsZWN0ZWRWYWx1ZTtcclxuXHRcdHZhciBhbGxvd0NsZWFyID0gY29uZmlnLmFsbG93Q2xlYXI7XHJcblx0XHQvLyAgU2VsZWN0MiBBamF4IENvbmZpZ3VyYXRpb25cclxuXHRcdHZhciBBamF4VVJMID0gY29uZmlnLkFqYXhVUkw7XHJcblx0XHR2YXIgQWpheERlbGF5ID0gY29uZmlnLkFqYXhEZWxheTtcclxuXHRcdHZhciBQYWdpbmF0aW9uU2l6ZSA9IGNvbmZpZy5QYWdpbmF0aW9uU2l6ZTtcclxuXHRcdHZhciBNaW5pbXVtSW5wdXRMZW5naHQgPSBjb25maWcuTWluaW11bUlucHV0TGVuZ2h0O1xyXG5cdFx0dmFyIFNlYXJjaFRlcm0gPSBjb25maWcuU2VhcmNoVGVybTtcclxuXHRcdHZhciBTZWFyY2hFeHRyYVBhcmFtMSA9IGNvbmZpZy5TZWFyY2hFeHRyYVBhcmFtMTtcclxuXHRcdHZhciBQYWdlVGVybSA9IGNvbmZpZy5QYWdlVGVybTtcclxuXHRcdHZhciBBbW91bnRQYWdlID0gY29uZmlnLlBhZ2VBbW91bnQ7XHJcblx0XHR2YXIgaXNNdWx0aXBsZSA9IGNvbmZpZy5pc011bHRpcGxlO1xyXG5cdFx0dmFyIFNlbGVjdDJPcHRpb25zID0ge307XHJcblx0XHR2YXIgJFdpZGdldElkZW50aWZpZXI7XHJcblxyXG5cdFx0aWYgKGNvbmZpZy5sb2NhbGUgPT09ICdBUicgfHwgY29uZmlnLmxvY2FsZSA9PT0gJ0ZBJykge1xyXG5cdFx0XHRTZWxlY3QyT3B0aW9ucy5kaXIgPSAncnRsJztcclxuXHRcdH1cclxuXHJcblx0XHRTZWxlY3QyT3B0aW9ucy50aGVtZSA9ICdkZWZhdWx0IFNlbGVjdFN5c3RlbSc7XHJcblxyXG5cdFx0LyogIFxyXG4gICAgICAgICAgQ2hhbmdlIHNlbGVjdDIgc2VhcmNoIGRpc3BsYXkgXHJcbiAgICAgICAgICAgICAgLU11bHRpcGxlIFNlbGVjdDIgc2VhcmNoIFVJIGxpa2UgU2luZ2xlIFNlbGVjdDJcclxuICAgICAgKi9cclxuXHRcdCQuZm4uc2VsZWN0Mi5hbWQuZGVmaW5lKFxyXG5cdFx0XHQnU2VhcmNoTGlrZVNpbmdsZScsXHJcblx0XHRcdFtcclxuXHRcdFx0XHQnc2VsZWN0Mi91dGlscycsXHJcblx0XHRcdFx0J3NlbGVjdDIvZHJvcGRvd24nLFxyXG5cdFx0XHRcdCdzZWxlY3QyL2Ryb3Bkb3duL2F0dGFjaEJvZHknLFxyXG5cdFx0XHRcdCdzZWxlY3QyL2Ryb3Bkb3duL2F0dGFjaENvbnRhaW5lcicsXHJcblx0XHRcdFx0J3NlbGVjdDIvZHJvcGRvd24vc2VhcmNoJyxcclxuXHRcdFx0XHQnc2VsZWN0Mi9kcm9wZG93bi9taW5pbXVtUmVzdWx0c0ZvclNlYXJjaCcsXHJcblx0XHRcdF0sXHJcblx0XHRcdGZ1bmN0aW9uKFV0aWxzLCBEcm9wZG93biwgQXR0YWNoQm9keSwgQXR0YWNoQ29udGFpbmVyLCBTZWFyY2gsIG1pbmltdW1SZXN1bHRzRm9yU2VhcmNoKSB7XHJcblx0XHRcdFx0bGV0IGRyb3Bkb3duU2VhcmNoID0gVXRpbHMuRGVjb3JhdGUoRHJvcGRvd24sIFNlYXJjaCk7XHJcblx0XHRcdFx0ZHJvcGRvd25TZWFyY2gucHJvdG90eXBlLnJlbmRlciA9IGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdFx0dmFyICRyZW5kZXJlZCA9IERyb3Bkb3duLnByb3RvdHlwZS5yZW5kZXIuY2FsbCh0aGlzKTtcclxuXHRcdFx0XHRcdC8vIEFkZCBhYmlsaXR5IGZvciBhIHBsYWNlaG9sZGVyIGluIHRoZSBzZWFyY2ggYm94XHJcblx0XHRcdFx0XHRsZXQgcGxhY2Vob2xkZXIgPSB0aGlzLm9wdGlvbnMuZ2V0KCdwbGFjZWhvbGRlckZvclNlYXJjaCcpIHx8ICcnO1xyXG5cdFx0XHRcdFx0dmFyICRzZWFyY2ggPSAkKFxyXG5cdFx0XHRcdFx0XHQnPHNwYW4gY2xhc3M9XCJzZWxlY3QyLXNlYXJjaCBzZWxlY3QyLXNlYXJjaC0tZHJvcGRvd25cIj4nICtcclxuXHRcdFx0XHRcdFx0XHQnPGlucHV0IGNsYXNzPVwic2VsZWN0Mi1zZWFyY2hfX2ZpZWxkXCIgcGxhY2Vob2xkZXI9XCInICtcclxuXHRcdFx0XHRcdFx0XHRwbGFjZWhvbGRlciArXHJcblx0XHRcdFx0XHRcdFx0J1wiIHR5cGU9XCJzZWFyY2hcIicgK1xyXG5cdFx0XHRcdFx0XHRcdCcgdGFiaW5kZXg9XCItMVwiIGF1dG9jb21wbGV0ZT1cIm9mZlwiIGF1dG9jb3JyZWN0PVwib2ZmXCIgYXV0b2NhcGl0YWxpemU9XCJvZmZcIicgK1xyXG5cdFx0XHRcdFx0XHRcdCcgc3BlbGxjaGVjaz1cImZhbHNlXCIgcm9sZT1cInRleHRib3hcIiAvPicgK1xyXG5cdFx0XHRcdFx0XHRcdCc8L3NwYW4+J1xyXG5cdFx0XHRcdFx0KTtcclxuXHJcblx0XHRcdFx0XHR0aGlzLiRzZWFyY2hDb250YWluZXIgPSAkc2VhcmNoO1xyXG5cdFx0XHRcdFx0dGhpcy4kc2VhcmNoID0gJHNlYXJjaC5maW5kKCdpbnB1dCcpO1xyXG5cdFx0XHRcdFx0JHNlYXJjaC5hZGRDbGFzcygnTXVsdGlwbGVTZWxlY3QnKTtcclxuXHJcblx0XHRcdFx0XHQkcmVuZGVyZWQucHJlcGVuZCgkc2VhcmNoKTtcclxuXHRcdFx0XHRcdCRzZWFyY2gucGFyZW50KCkuYWRkQ2xhc3MoJ011bHRpcGxlU2VsZWN0Jyk7XHJcblx0XHRcdFx0XHRyZXR1cm4gJHJlbmRlcmVkO1xyXG5cdFx0XHRcdH07XHJcblxyXG5cdFx0XHRcdC8vIERlY29yYXRlIHRoZSBkcm9wZG93bitzZWFyY2ggd2l0aCB0aGUgY29udGFpbmVyc1xyXG5cdFx0XHRcdGxldCBhZGFwdGVyID0gVXRpbHMuRGVjb3JhdGUoZHJvcGRvd25TZWFyY2gsIEF0dGFjaENvbnRhaW5lcik7XHJcblx0XHRcdFx0YWRhcHRlciA9IFV0aWxzLkRlY29yYXRlKGFkYXB0ZXIsIEF0dGFjaEJvZHkpO1xyXG5cclxuXHRcdFx0XHRyZXR1cm4gYWRhcHRlcjtcclxuXHRcdFx0fVxyXG5cdFx0KTtcclxuXHJcblx0XHQvKipcclxuXHRcdCAqIERlZmF1bHQgQ29uZmlndXJhdGlvbiBuZWVkZWQgdG8gYXNzb2NpYXRlIHRoZSB3aWRnZXQgdG8gdGhlIHNlbGVjdDIgcGx1Z2luXHJcblx0XHQgKi9cclxuXHRcdGlmIChXaWRnZXRJZCA9PT0gJycgJiYgQ2xhc3MgIT0gJycpIHtcclxuXHRcdFx0JFdpZGdldElkZW50aWZpZXIgPSAkKCcuJyArIENsYXNzKTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdCRXaWRnZXRJZGVudGlmaWVyID0gJCgnIycgKyBXaWRnZXRJZCk7XHJcblx0XHR9XHJcblx0XHRTZWxlY3QyT3B0aW9ucy5jb250YWluZXJDc3NDbGFzcyA9ICdzZWxlY3QtaGlkZSAnICsgaW5wdXRUeXBlO1xyXG5cclxuXHRcdC8vICBTZWxlY3QyT3B0aW9ucy5kcm9wZG93blBhcmVudD0gJCgnIycrUGFyZW50RGl2KTtcclxuXHJcblx0XHR2YXIgZm9ybWF0UmVzdWx0ID0gZnVuY3Rpb24ocmVzdWx0KSB7XHJcblx0XHRcdHZhciAkc2VsZWN0ZWRPcHRpb25zVmFsdWUgPSAkV2lkZ2V0SWRlbnRpZmllci5maW5kKCc6c2VsZWN0ZWQnKTtcclxuXHRcdFx0dmFyIHNlbGVjdGVkT3B0aW9ucyA9ICRzZWxlY3RlZE9wdGlvbnNWYWx1ZS5sZW5ndGg7XHJcblx0XHRcdHZhciB0b3RhbE9wdGlvbnMgPSAkV2lkZ2V0SWRlbnRpZmllci5maW5kKCdvcHRpb24nKS5sZW5ndGg7XHJcblx0XHRcdHZhciBzZWxlY3RBbGxPcHQgPSAkV2lkZ2V0SWRlbnRpZmllci5maW5kKCdvcHRpb246Zmlyc3QtY2hpbGQ6c2VsZWN0ZWQnKS5sZW5ndGg7XHJcblx0XHRcdHZhciBhY3RpdmVWYWx1ZXMgPSAnJztcclxuXHRcdFx0dmFyIGFsbE9wdEV4Y2VwdEFsbCA9ICRXaWRnZXRJZGVudGlmaWVyLmZpbmQoJzpzZWxlY3RlZDpub3QoXCIuU2VsZWN0ZWRBbGxcIiknKS5sZW5ndGg7XHJcblx0XHRcdHZhciAkYWxsT3B0RXhjZXB0QWxsT2JqID0gJFdpZGdldElkZW50aWZpZXIuZmluZCgnOnNlbGVjdGVkOm5vdChcIi5TZWxlY3RlZEFsbFwiKScpO1xyXG5cclxuXHRcdFx0aWYgKHNlbGVjdGVkT3B0aW9ucyA9PT0gdG90YWxPcHRpb25zKSB7XHJcblx0XHRcdFx0aWYgKHRvdGFsT3B0aW9ucyAtIDEgPiAzKSB7XHJcblx0XHRcdFx0XHRyZXR1cm4gJ0FsbCBTZWxlY3RlZCc7XHJcblx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdCRhbGxPcHRFeGNlcHRBbGxPYmouZWFjaChmdW5jdGlvbigpIHtcclxuXHRcdFx0XHRcdFx0YWN0aXZlVmFsdWVzID0gYWN0aXZlVmFsdWVzICsgJyAnICsgJCh0aGlzKVswXS5pbm5lclRleHQ7XHJcblx0XHRcdFx0XHR9KTtcclxuXHRcdFx0XHRcdGFjdGl2ZVZhbHVlcyA9IGFjdGl2ZVZhbHVlcy5yZXBsYWNlKC8sXFxzKiQvLCAnJyk7XHJcblx0XHRcdFx0XHRyZXR1cm4gYWN0aXZlVmFsdWVzO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHR2YXIgdG90YWxvcHQgPSB0b3RhbE9wdGlvbnMgLSAxO1xyXG5cdFx0XHRcdGlmIChzZWxlY3RlZE9wdGlvbnMgPiAzKSB7XHJcblx0XHRcdFx0XHRyZXR1cm4gc2VsZWN0ZWRPcHRpb25zICsgJyBvZiAnICsgdG90YWxvcHQgKyAnIHNlbGVjdGVkJztcclxuXHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0aWYgKHNlbGVjdGVkT3B0aW9ucyA+IDApIHtcclxuXHRcdFx0XHRcdFx0JHNlbGVjdGVkT3B0aW9uc1ZhbHVlLmVhY2goZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0XHRcdFx0YWN0aXZlVmFsdWVzID0gYWN0aXZlVmFsdWVzICsgJyAnICsgJCh0aGlzKVswXS5pbm5lclRleHQgKyAnLCAnO1xyXG5cdFx0XHRcdFx0XHR9KTtcclxuXHRcdFx0XHRcdFx0YWN0aXZlVmFsdWVzID0gYWN0aXZlVmFsdWVzLnJlcGxhY2UoLyxcXHMqJC8sICcnKTtcclxuXHRcdFx0XHRcdFx0cmV0dXJuIGFjdGl2ZVZhbHVlcztcclxuXHRcdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRcdHJldHVybiAnU2VsZWN0IGFuIG9wdGlvbic7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHR9O1xyXG5cclxuXHRcdGlmIChOb1Jlc3VsdHNUZXh0ICE9ICcnKSB7XHJcblx0XHRcdFNlbGVjdDJPcHRpb25zLmZvcm1hdE5vTWF0Y2hlcyA9IGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdHJldHVybiBOb1Jlc3VsdHNUZXh0O1xyXG5cdFx0XHR9O1xyXG5cdFx0fVxyXG5cclxuXHRcdGlmIChpbnB1dFR5cGUgIT0gJycpIHtcclxuXHRcdFx0U2VsZWN0Mk9wdGlvbnMuZHJvcGRvd25Dc3NDbGFzcyA9IGlucHV0VHlwZTtcclxuXHRcdH1cclxuXHJcblx0XHRpZiAoYWxsb3dDbGVhciA9PT0gJ1RydWUnKSB7XHJcblx0XHRcdFNlbGVjdDJPcHRpb25zLmFsbG93Q2xlYXIgPSB0cnVlO1xyXG5cdFx0fVxyXG5cclxuXHRcdGlmIChNYXhpbXVtTGVuZ3RoICE9ICcnKSB7XHJcblx0XHRcdFNlbGVjdDJPcHRpb25zLm1heGltdW1JbnB1dExlbmd0aCA9IE1heGltdW1MZW5ndGg7XHJcblx0XHR9XHJcblxyXG5cdFx0aWYgKFByb21wdCAhPSAnJykge1xyXG5cdFx0XHRTZWxlY3QyT3B0aW9ucy5wbGFjZWhvbGRlciA9IFByb21wdDtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdFNlbGVjdDJPcHRpb25zLnBsYWNlaG9sZGVyID0ge1xyXG5cdFx0XHRcdGlkOiAnLTEnLCAvLyB0aGUgdmFsdWUgb2YgdGhlIG9wdGlvblxyXG5cdFx0XHRcdHRleHQ6ICdTZWxlY3QgYW4gb3B0aW9uJyxcclxuXHRcdFx0fTtcclxuXHRcdH1cclxuXHJcblx0XHRpZiAoU2VsZWN0MlR5cGUgPT09ICczJykge1xyXG5cdFx0XHQvLyBTZWxlY3QyIEFqYXhcclxuXHRcdFx0U2VsZWN0Mk9wdGlvbnMgPSB7fTtcclxuXHJcblx0XHRcdGlmIChjb25maWcubG9jYWxlID09PSAnQVInIHx8IGNvbmZpZy5sb2NhbGUgPT09ICdGQScpIHtcclxuXHRcdFx0XHRTZWxlY3QyT3B0aW9ucy5kaXIgPSAncnRsJztcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0U2VsZWN0Mk9wdGlvbnMuYWxsb3dDbGVhciA9IGZhbHNlO1xyXG5cclxuXHRcdFx0U2VsZWN0Mk9wdGlvbnMudGVtcGxhdGVTZWxlY3Rpb24gPSBmdW5jdGlvbihyZXBvKSB7XHJcblx0XHRcdFx0aWYgKCFyZXBvLmVsZW1lbnQpIHtcclxuXHRcdFx0XHRcdHJldHVybiBQcm9tcHQ7XHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRyZXR1cm4gcmVwby5mdWxsX25hbWUgfHwgcmVwby50ZXh0O1xyXG5cdFx0XHR9O1xyXG5cclxuXHRcdFx0U2VsZWN0Mk9wdGlvbnMudGVtcGxhdGVSZXN1bHQgPSBmdW5jdGlvbihyZXBvKSB7XHJcblx0XHRcdFx0aWYgKHJlcG8ubG9hZGluZykge1xyXG5cdFx0XHRcdFx0cmV0dXJuIHJlcG8udGV4dDtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0dmFyIG1hcmt1cCA9ICc8ZGl2IGNsYXNzPVwiXCJDbGVhcmZpeFwiXCI+JyArICc8ZGl2IGNsYXNzPVwiXCJUaGVtZUdyaWRfV2lkdGgxMlwiXCI+JyArIHJlcG8udGV4dCArICc8L2Rpdj4nO1xyXG5cdFx0XHRcdGlmIChyZXBvLmRlc2NyaXB0aW9uKSB7XHJcblx0XHRcdFx0XHRtYXJrdXAgKz0gJzxkaXYgY2xhc3M9XCJcIk9TQXV0b01hcmdpblRvcFwiXCI+JyArIHJlcG8uZGVzY3JpcHRpb24gKyAnPC9kaXY+JztcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0bWFya3VwICs9ICc8L2Rpdj4nO1xyXG5cdFx0XHRcdHJldHVybiBtYXJrdXA7XHJcblx0XHRcdH07XHJcblxyXG5cdFx0XHQoU2VsZWN0Mk9wdGlvbnMuYWpheCA9IHtcclxuXHRcdFx0XHR1cmw6IEFqYXhVUkwsXHJcblx0XHRcdFx0ZGF0YVR5cGU6ICdqc29uJyxcclxuXHRcdFx0XHRkZWxheTogQWpheERlbGF5LFxyXG5cdFx0XHRcdGRhdGE6IGZ1bmN0aW9uKHBhcmFtcykge1xyXG5cdFx0XHRcdFx0dmFyIFNlbGVjdDJBamF4T3B0ID0ge307XHJcblx0XHRcdFx0XHR2YXIgU3BsaXRQYXJhbWV0ZXIgPSBTZWFyY2hFeHRyYVBhcmFtMS5zcGxpdCgnLCcpO1xyXG5cdFx0XHRcdFx0U2VsZWN0MkFqYXhPcHQuU2VhcmNoUGFyYW1ldGVyID0gcGFyYW1zLnRlcm07XHJcblx0XHRcdFx0XHRTZWxlY3QyQWpheE9wdC5QYWdlID0gcGFyYW1zLnBhZ2UgfHwgMTtcclxuXHRcdFx0XHRcdFNlbGVjdDJBamF4T3B0LlBhZ2VBbW91bnQgPSBBbW91bnRQYWdlO1xyXG5cclxuXHRcdFx0XHRcdFNwbGl0UGFyYW1ldGVyLmZvckVhY2goZnVuY3Rpb24oZWwpIHtcclxuXHRcdFx0XHRcdFx0dmFyIHNwbGl0VGV4dCA9IGVsLnNwbGl0KCc6Jyk7XHJcblx0XHRcdFx0XHRcdFNlbGVjdDJBamF4T3B0W3NwbGl0VGV4dFswXV0gPSBzcGxpdFRleHRbMV07XHJcblx0XHRcdFx0XHR9KTtcclxuXHJcblx0XHRcdFx0XHRyZXR1cm4gU2VsZWN0MkFqYXhPcHQ7XHJcblx0XHRcdFx0fSxcclxuXHRcdFx0XHRwcm9jZXNzUmVzdWx0czogZnVuY3Rpb24oZGF0YSwgcGFyYW1zKSB7XHJcblx0XHRcdFx0XHRwYXJhbXMucGFnZSA9IHBhcmFtcy5wYWdlIHx8IDE7XHJcblxyXG5cdFx0XHRcdFx0cmV0dXJuIHtcclxuXHRcdFx0XHRcdFx0cmVzdWx0czogZGF0YS5pdGVtcyxcclxuXHRcdFx0XHRcdFx0cGFnaW5hdGlvbjoge1xyXG5cdFx0XHRcdFx0XHRcdG1vcmU6IHBhcmFtcy5wYWdlICogUGFnaW5hdGlvblNpemUgPCBkYXRhLnRvdGFsX2NvdW50LFxyXG5cdFx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdFx0fTtcclxuXHRcdFx0XHR9LFxyXG5cdFx0XHRcdGNhY2hlOiB0cnVlLFxyXG5cdFx0XHR9KSxcclxuXHRcdFx0XHQoU2VsZWN0Mk9wdGlvbnMubWluaW11bUlucHV0TGVuZ3RoID0gTWluaW11bUlucHV0TGVuZ2h0KTtcclxuXHJcblx0XHRcdFNlbGVjdDJPcHRpb25zLmVzY2FwZU1hcmt1cCA9IGZ1bmN0aW9uKG1hcmt1cCkge1xyXG5cdFx0XHRcdHJldHVybiBtYXJrdXA7XHJcblx0XHRcdH07XHJcblxyXG5cdFx0XHRpZiAoY29uZmlnLmlzTXVsdGlwbGUpIHtcclxuXHRcdFx0XHRTZWxlY3QyT3B0aW9ucy5tdWx0aXBsZSA9IHRydWU7XHJcblx0XHRcdFx0U2VsZWN0Mk9wdGlvbnMuY29udGFpbmVyQ3NzQ2xhc3MgPSAnU2VsZWN0MkFqYXggTXVsdGlwbGUnO1xyXG5cdFx0XHRcdFNlbGVjdDJPcHRpb25zLmRyb3Bkb3duQ3NzQ2xhc3MgPSAnU2VsZWN0MkFqYXggTXVsdGlwbGUnO1xyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFNlbGVjdDJPcHRpb25zLm11bHRpcGxlID0gZmFsc2U7XHJcblx0XHRcdFx0U2VsZWN0Mk9wdGlvbnMuY29udGFpbmVyQ3NzQ2xhc3MgPSAnU2VsZWN0MkFqYXgnO1xyXG5cdFx0XHRcdFNlbGVjdDJPcHRpb25zLmRyb3Bkb3duQ3NzQ2xhc3MgPSAnU2VsZWN0MkFqYXgnO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRpZiAoU2VsZWN0ZWRWYWx1ZSAhPT0gJycpIHtcclxuXHRcdFx0XHR0cnkge1xyXG5cdFx0XHRcdFx0Y29uc3QgZGF0YSA9IEpTT04ucGFyc2UoU2VsZWN0ZWRWYWx1ZSk7XHJcblx0XHRcdFx0XHRjb25zdCBvcHRpb24gPSBuZXcgT3B0aW9uKGRhdGEuVmFsdWUsIGRhdGEuSWQsIHRydWUsIHRydWUpO1xyXG5cclxuXHRcdFx0XHRcdCRXaWRnZXRJZGVudGlmaWVyLmFwcGVuZChvcHRpb24pLnRyaWdnZXIoJ2NoYW5nZScpO1xyXG5cdFx0XHRcdH0gY2F0Y2ggKGVycm9yKSB7XHJcblx0XHRcdFx0XHRjb25zb2xlLmVycm9yKGBDb21wb25lbnQgU2VsZWN0U3lzdGVtICgke1dpZGdldElkfSk6IFNlbGVjdGVkVmFsdWUgbXVzdCBiZSBhIHZhbGlkIEpTT04hYCk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRTZWxlY3QyT3B0aW9ucy5taW5pbXVtUmVzdWx0c0ZvclNlYXJjaCA9IDA7XHJcblx0XHRcdFNlbGVjdDJPcHRpb25zLnRhZ3MgPSBjb25maWcuSGFzVGFncztcclxuXHRcdFx0U2VsZWN0Mk9wdGlvbnMuY2xvc2VPbnNlbGVjdCA9IHRydWU7XHJcblx0XHR9XHJcblxyXG5cdFx0aWYgKFNlbGVjdDJUeXBlID09PSAnMicpIHtcclxuXHRcdFx0Ly9TZWxlY3QyIHdpdGggQ2hlY2tCb3hcclxuXHJcblx0XHRcdHZhciBpc0FsbFNlbGVjdGVkID0gZmFsc2U7XHJcblx0XHRcdGlmICgkV2lkZ2V0SWRlbnRpZmllclswXS5vcHRpb25zLmxlbmd0aCA9PT0gJFdpZGdldElkZW50aWZpZXJbMF0uc2VsZWN0ZWRPcHRpb25zLmxlbmd0aCkge1xyXG5cdFx0XHRcdGlzQWxsU2VsZWN0ZWQgPSB0cnVlO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRpZiAoV2lkZ2V0SWQgIT0gJycpIHtcclxuXHRcdFx0XHRvcHRpb24gPSBuZXcgT3B0aW9uKCdTZWxlY3QgQWxsJywgJ0FsbCcsIHRydWUsIGlzQWxsU2VsZWN0ZWQpO1xyXG5cdFx0XHRcdCRXaWRnZXRJZGVudGlmaWVyLnByZXBlbmQob3B0aW9uKTtcclxuXHRcdFx0XHQkV2lkZ2V0SWRlbnRpZmllci5maW5kKCdvcHRpb246Zmlyc3QtY2hpbGQnKS5hZGRDbGFzcygnU2VsZWN0ZWRBbGwnKTtcclxuXHRcdFx0fVxyXG5cdFx0XHRTZWxlY3QyT3B0aW9ucy5tdWx0aXBsZSA9IHRydWU7XHJcblx0XHRcdFNlbGVjdDJPcHRpb25zLmNsb3NlT25TZWxlY3QgPSBmYWxzZTtcclxuXHRcdFx0U2VsZWN0Mk9wdGlvbnMuYWxsb3dIdG1sID0gZmFsc2U7XHJcblx0XHRcdFNlbGVjdDJPcHRpb25zLnRhZ3MgPSBmYWxzZTtcclxuXHJcblx0XHRcdGlmIChIYXNTZWFyY2ggPT09ICdUcnVlJykge1xyXG5cdFx0XHRcdFNlbGVjdDJPcHRpb25zLmRyb3Bkb3duQWRhcHRlciA9ICQuZm4uc2VsZWN0Mi5hbWQucmVxdWlyZSgnU2VhcmNoTGlrZVNpbmdsZScpO1xyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFNlbGVjdDJPcHRpb25zLm1pbmltdW1SZXN1bHRzRm9yU2VhcmNoID0gLTE7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdFNlbGVjdDJPcHRpb25zLmNvbnRhaW5lckNzc0NsYXNzID0gJ011bHRpcGxlU2VsZWN0JztcclxuXHRcdFx0U2VsZWN0Mk9wdGlvbnMuZHJvcGRvd25Dc3NDbGFzcyA9ICdNdWx0aXBsZVNlbGVjdCc7XHJcblx0XHRcdFNlbGVjdDJPcHRpb25zLnRlbXBsYXRlU2VsZWN0aW9uID0gZm9ybWF0UmVzdWx0O1xyXG5cdFx0fVxyXG5cclxuXHRcdGlmIChTZWxlY3QyVHlwZSA9PT0gJzYnKSB7XHJcblx0XHRcdC8vIFNlbGVjdDIgSHRtbE9wdGlvbnNcclxuXHRcdFx0U2VsZWN0Mk9wdGlvbnMgPSB7fTtcclxuXHRcdFx0aWYgKGNvbmZpZy5sb2NhbGUgPT09ICdBUicgfHwgY29uZmlnLmxvY2FsZSA9PT0gJ0ZBJykge1xyXG5cdFx0XHRcdFNlbGVjdDJPcHRpb25zLmRpciA9ICdydGwnO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHR2YXIgZGF0YUh0bWxPcHRpb24gPSBbXTtcclxuXHRcdFx0JFdpZGdldElkZW50aWZpZXIuZmluZCgnb3B0aW9uJykuZWFjaChmdW5jdGlvbihrZXksIHZhbHVlKSB7XHJcblx0XHRcdFx0dmFyIG9wdGlvbk9iamVjdCA9IHtcclxuXHRcdFx0XHRcdGlkOiAkKHRoaXMpLnZhbCgpLFxyXG5cdFx0XHRcdFx0dGV4dDogJCh0aGlzKS50ZXh0KCksXHJcblx0XHRcdFx0XHRodG1sOiAkKHRoaXMpLnRleHQoKSxcclxuXHRcdFx0XHR9O1xyXG5cdFx0XHRcdGRhdGFIdG1sT3B0aW9uLnB1c2gob3B0aW9uT2JqZWN0KTtcclxuXHRcdFx0fSk7XHJcblxyXG5cdFx0XHRTZWxlY3QyT3B0aW9ucy5jb250YWluZXJDc3NDbGFzcyA9ICdjdXN0b21TZWxlY3QnO1xyXG5cdFx0XHRTZWxlY3QyT3B0aW9ucy5kcm9wZG93bkNzc0NsYXNzID0gJ2Ryb3Bkb3duQ3VzdG9tJztcclxuXHRcdFx0U2VsZWN0Mk9wdGlvbnMuZGF0YSA9IGRhdGFIdG1sT3B0aW9uO1xyXG5cdFx0XHRTZWxlY3QyT3B0aW9ucy5lc2NhcGVNYXJrdXAgPSBmdW5jdGlvbihtYXJrdXApIHtcclxuXHRcdFx0XHRyZXR1cm4gbWFya3VwO1xyXG5cdFx0XHR9O1xyXG5cclxuXHRcdFx0aWYgKFNlbGVjdGVkVmFsdWUgIT0gJycpIHtcclxuXHRcdFx0XHQkV2lkZ2V0SWRlbnRpZmllci52YWwoU2VsZWN0ZWRWYWx1ZSkudHJpZ2dlcignY2hhbmdlJyk7XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0JFdpZGdldElkZW50aWZpZXIudmFsKCcnKS50cmlnZ2VyKCdjaGFuZ2UnKTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cclxuXHRcdGlmIChTZWxlY3QyVHlwZSA9PT0gJzEnKSB7XHJcblx0XHRcdC8vIFNlbGVjdDIgVGFnQ3VzdG9tXHJcblx0XHRcdFNlbGVjdDJPcHRpb25zLnRhZ3MgPSB0cnVlO1xyXG5cdFx0XHRTZWxlY3QyT3B0aW9ucy5jb250YWluZXJDc3NDbGFzcyA9ICd0YWdDdXN0b20nO1xyXG5cdFx0XHRTZWxlY3QyT3B0aW9ucy5kcm9wZG93bkNzc0NsYXNzID0gJ3RhZ0N1c3RvbSc7XHJcblx0XHRcdFNlbGVjdDJPcHRpb25zLlRva2VuU2VwYXJhdG9zID0gWycsJywgJyAnXTtcclxuXHRcdFx0U2VsZWN0Mk9wdGlvbnMuY3JlYXRlU2VhcmNoQ2hvaWNlID0gZnVuY3Rpb24odGVybSwgZGF0YSkge1xyXG5cdFx0XHRcdGlmIChcclxuXHRcdFx0XHRcdCQoZGF0YSkuZmlsdGVyKGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdFx0XHRyZXR1cm4gdGhpcy50ZXh0LmxvY2FsZUNvbXBhcmUodGVybSkgPT09IDA7XHJcblx0XHRcdFx0XHR9KS5sZW5ndGggPT09IDBcclxuXHRcdFx0XHQpIHtcclxuXHRcdFx0XHRcdHJldHVybiB7XHJcblx0XHRcdFx0XHRcdGlkOiB0ZXJtLFxyXG5cdFx0XHRcdFx0XHR0ZXh0OiB0ZXJtLFxyXG5cdFx0XHRcdFx0fTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH07XHJcblx0XHR9XHJcblxyXG5cdFx0aWYgKFNlbGVjdDJUeXBlID09PSAnNScpIHtcclxuXHRcdFx0Ly8gU2VsZWN0MiBUYWdNdWx0aXBsZVxyXG5cdFx0XHRTZWxlY3QyT3B0aW9ucy50YWdzID0gdHJ1ZTtcclxuXHRcdFx0U2VsZWN0Mk9wdGlvbnMuY29udGFpbmVyQ3NzQ2xhc3MgPSAndGFnU3lzdGVtJztcclxuXHRcdFx0U2VsZWN0Mk9wdGlvbnMuZHJvcGRvd25Dc3NDbGFzcyA9ICd0YWdTeXN0ZW0nO1xyXG5cdFx0XHRTZWxlY3QyT3B0aW9ucy5jcmVhdGVUYWcgPSBmdW5jdGlvbihwYXJhbXMpIHtcclxuXHRcdFx0XHR2YXIgdGVybSA9ICQudHJpbShwYXJhbXMudGVybSk7XHJcblx0XHRcdFx0aWYgKHRlcm0gPT09ICcnKSB7XHJcblx0XHRcdFx0XHRyZXR1cm4gbnVsbDtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0cmV0dXJuIHtcclxuXHRcdFx0XHRcdGlkOiAnIycgKyB0ZXJtLFxyXG5cdFx0XHRcdFx0dGV4dDogdGVybSxcclxuXHRcdFx0XHRcdG5ld1RhZzogdHJ1ZSwgLy8gYWRkIGFkZGl0aW9uYWwgcGFyYW1ldGVyc1xyXG5cdFx0XHRcdH07XHJcblx0XHRcdH07XHJcblx0XHR9XHJcblxyXG5cdFx0aWYgKEhhc1NlYXJjaCA9PT0gJ0ZhbHNlJykge1xyXG5cdFx0XHRTZWxlY3QyT3B0aW9ucy5taW5pbXVtUmVzdWx0c0ZvclNlYXJjaCA9IC0xO1xyXG5cdFx0fVxyXG5cclxuXHRcdGlmIChPblVuU2VsZWN0aW5nSlMgIT0gJycgfHwgT25TZWxlY3RpbmdKUyAhPSAnJykge1xyXG5cdFx0XHQkV2lkZ2V0SWRlbnRpZmllclxyXG5cdFx0XHRcdC5zZWxlY3QyKFNlbGVjdDJPcHRpb25zKVxyXG5cdFx0XHRcdC5vbignc2VsZWN0Mjp1bnNlbGVjdGluZycsIGZ1bmN0aW9uKGUpIHtcclxuXHRcdFx0XHRcdCQodGhpcykuZGF0YSgndW5zZWxlY3RpbmcnLCB0cnVlKTtcclxuXHRcdFx0XHRcdE9uVW5TZWxlY3RpbmdKUztcclxuXHRcdFx0XHR9KVxyXG5cdFx0XHRcdC5vbignc2VsZWN0OnNlbGVjdGluZycsIGZ1bmN0aW9uKGUpIHtcclxuXHRcdFx0XHRcdE9uU2VsZWN0aW5nSlM7XHJcblx0XHRcdFx0fSlcclxuXHRcdFx0XHQub24oJ3NlbGVjdDpvcGVuaW5nJywgZnVuY3Rpb24oZSkge1xyXG5cdFx0XHRcdFx0aWYgKCQodGhpcykuZGF0YSgndW5zZWxlY3RpbmcnKSkge1xyXG5cdFx0XHRcdFx0XHQkKHRoaXMpLnJlbW92ZURhdGEoJ3Vuc2VsZWN0aW5nJyk7XHJcblx0XHRcdFx0XHRcdGUucHJldmVudERlZmF1bHQoKTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9KVxyXG5cdFx0XHRcdC5vbignc2VsZWN0Om9wZW4nLCBmdW5jdGlvbihldnQpIHtcclxuXHRcdFx0XHRcdGV2dC5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cdFx0XHRcdH0pXHJcblx0XHRcdFx0Lm9uKCdzZWxlY3QyOmNsb3NlJywgZnVuY3Rpb24oZXZ0KSB7XHJcblx0XHRcdFx0XHRldnQucHJldmVudERlZmF1bHQoKTtcclxuXHRcdFx0XHR9KTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdGlmIChTZWxlY3QyVHlwZSA9PT0gJzInKSB7XHJcblx0XHRcdFx0JFdpZGdldElkZW50aWZpZXIuc2VsZWN0MihTZWxlY3QyT3B0aW9ucyk7XHJcblx0XHRcdFx0dmFyIGlkd2lkZ2V0ID0gJyMnICsgV2lkZ2V0SWQ7XHJcblxyXG5cdFx0XHRcdCRXaWRnZXRJZGVudGlmaWVyLm9uKCdzZWxlY3QyOnNlbGVjdCcsIGZ1bmN0aW9uKGUpIHtcclxuXHRcdFx0XHRcdFVuc2VsZWN0ZWRJZCA9IGUucGFyYW1zLmRhdGEuaWQ7XHJcblx0XHRcdFx0XHRpZiAoVW5zZWxlY3RlZElkID09PSAnQWxsJykge1xyXG5cdFx0XHRcdFx0XHR2YXIgc2VsZWN0ZWRJdGVtcyA9IFtdO1xyXG5cdFx0XHRcdFx0XHR2YXIgYWxsT3B0aW9ucyA9ICQoaWR3aWRnZXQgKyAnIG9wdGlvbicpO1xyXG5cdFx0XHRcdFx0XHRhbGxPcHRpb25zLmVhY2goZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0XHRcdFx0c2VsZWN0ZWRJdGVtcy5wdXNoKCQodGhpcykudmFsKCkpO1xyXG5cdFx0XHRcdFx0XHR9KTtcclxuXHRcdFx0XHRcdFx0JFdpZGdldElkZW50aWZpZXIuc2VsZWN0MignZGVzdHJveScpO1xyXG5cdFx0XHRcdFx0XHQkV2lkZ2V0SWRlbnRpZmllci52YWwoc2VsZWN0ZWRJdGVtcykudHJpZ2dlcignY2hhbmdlJyk7XHJcblx0XHRcdFx0XHRcdCRXaWRnZXRJZGVudGlmaWVyLnNlbGVjdDIoU2VsZWN0Mk9wdGlvbnMpO1xyXG5cdFx0XHRcdFx0XHQkV2lkZ2V0SWRlbnRpZmllci5zZWxlY3QyKCdvcGVuJyk7XHJcblx0XHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0XHR2YXIgc2VsZWN0ZWRPcHRpb25zID0gJFdpZGdldElkZW50aWZpZXIuZmluZCgnb3B0aW9uOnNlbGVjdGVkJykubGVuZ3RoO1xyXG5cdFx0XHRcdFx0XHR2YXIgdG90YWxPcHRpb25zID0gJFdpZGdldElkZW50aWZpZXIuZmluZCgnb3B0aW9uJykubGVuZ3RoO1xyXG5cdFx0XHRcdFx0XHRpZiAoc2VsZWN0ZWRPcHRpb25zID09PSB0b3RhbE9wdGlvbnMgLSAxICYmICQoaWR3aWRnZXQgKyAnID4gIG9wdGlvbjpzZWxlY3RlZDpmaXJzdC1jaGlsZCcpLmxlbmd0aCA9PT0gMCkge1xyXG5cdFx0XHRcdFx0XHRcdHZhciBzZWxlY3RlZEl0ZW1zID0gW107XHJcblx0XHRcdFx0XHRcdFx0dmFyIGFsbE9wdGlvbnMgPSAkKGlkd2lkZ2V0ICsgJyBvcHRpb24nKTtcclxuXHRcdFx0XHRcdFx0XHRhbGxPcHRpb25zLmVhY2goZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0XHRcdFx0XHRzZWxlY3RlZEl0ZW1zLnB1c2goJCh0aGlzKS52YWwoKSk7XHJcblx0XHRcdFx0XHRcdFx0fSk7XHJcblx0XHRcdFx0XHRcdFx0JFdpZGdldElkZW50aWZpZXIuc2VsZWN0MignZGVzdHJveScpO1xyXG5cdFx0XHRcdFx0XHRcdCRXaWRnZXRJZGVudGlmaWVyLnZhbChzZWxlY3RlZEl0ZW1zKS50cmlnZ2VyKCdjaGFuZ2UnKTtcclxuXHRcdFx0XHRcdFx0XHQkV2lkZ2V0SWRlbnRpZmllci5zZWxlY3QyKFNlbGVjdDJPcHRpb25zKTtcclxuXHRcdFx0XHRcdFx0XHQkV2lkZ2V0SWRlbnRpZmllci5zZWxlY3QyKCdvcGVuJyk7XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9KTtcclxuXHJcblx0XHRcdFx0JFdpZGdldElkZW50aWZpZXIub24oJ3NlbGVjdDI6dW5zZWxlY3QnLCBmdW5jdGlvbihlKSB7XHJcblx0XHRcdFx0XHRVbnNlbGVjdGVkSWQgPSBlLnBhcmFtcy5kYXRhLmlkO1xyXG5cdFx0XHRcdFx0aWYgKFVuc2VsZWN0ZWRJZCA9PT0gJ0FsbCcpIHtcclxuXHRcdFx0XHRcdFx0JChpZHdpZGdldCArICcgPiBvcHRpb24nKS5yZW1vdmVBdHRyKCdzZWxlY3RlZCcpO1xyXG5cdFx0XHRcdFx0XHQkV2lkZ2V0SWRlbnRpZmllci5zZWxlY3QyKCdkZXN0cm95Jyk7XHJcblx0XHRcdFx0XHRcdCRXaWRnZXRJZGVudGlmaWVyLnNlbGVjdDIoU2VsZWN0Mk9wdGlvbnMpO1xyXG5cdFx0XHRcdFx0XHQkV2lkZ2V0SWRlbnRpZmllci5zZWxlY3QyKCdvcGVuJyk7XHJcblx0XHRcdFx0XHRcdCQoaWR3aWRnZXQpXHJcblx0XHRcdFx0XHRcdFx0LnZhbCgnJylcclxuXHRcdFx0XHRcdFx0XHQudHJpZ2dlcignY2hhbmdlJyk7XHJcblx0XHRcdFx0XHRcdC8vJChpZHdpZGdldCArJyA+IG9wdGlvbicpLmF0dHIoJ3NlbGVjdGVkJywgXCJzZWxlY3RlZFwiKTtcclxuXHRcdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRcdCQoaWR3aWRnZXQgKyAnID4gb3B0aW9uOmZpcnN0LWNoaWxkJykucmVtb3ZlQXR0cignc2VsZWN0ZWQnKTtcclxuXHRcdFx0XHRcdFx0JFdpZGdldElkZW50aWZpZXIuc2VsZWN0MihTZWxlY3QyT3B0aW9ucyk7XHJcblx0XHRcdFx0XHRcdCRXaWRnZXRJZGVudGlmaWVyLnNlbGVjdDIoJ29wZW4nKTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9KTtcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHQkV2lkZ2V0SWRlbnRpZmllci5zZWxlY3QyKFNlbGVjdDJPcHRpb25zKTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH0pO1xyXG59O1xyXG4iLCIvKiBDb21wb25lbnQgU2hpZnRDb250YWluZXIgKi9cbihmdW5jdGlvbigkLCB3aW5kb3csIGRvY3VtZW50LCBTYXBwaGlyZVdpZGdldHMpIHtcblx0bGV0IHNoaWZ0VGltZWxpbmVSZXNpemVUaW1lcjtcblx0bGV0ICRzaGlmdENvbnRhaW5lcklkID0gJCgpO1xuXG5cdGNvbnN0IGNyZWF0ZSA9IHNoaWZ0Q29udGFpbmVySWQgPT4ge1xuXHRcdC8vICQoJy5TaGlmdENhcmRfdGltZUxpbmUnKS5jc3MoJ3Zpc2liaWxpdHknLCAnaGlkZGVuJyk7XG5cblx0XHQkKCcuU2hpZnRFeHBhbmRhYmxlX2NvbnRhaW5lciAuQWN0aW9uc01lbnUgJykuY3NzKCdkaXNwbGF5JywgJ25vbmUnKTtcblxuXHRcdCRzaGlmdENvbnRhaW5lcklkID0gJChzaGlmdENvbnRhaW5lcklkKTtcblxuXHRcdGhhc1Njcm9sbEJhcigpO1xuXHRcdGhhbmRsZVNoaWZ0VGFibGUoKTtcblxuXHRcdC8vIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuXHRcdC8vIFx0JCgnLlNoaWZ0Q2FyZF90aW1lTGluZScpLmNzcygndmlzaWJpbGl0eScsICd2aXNpYmxlJyk7XG5cdFx0Ly8gXHQkKCcuU2hpZnRFeHBhbmRhYmxlX2NvbnRhaW5lciAuQWN0aW9uc01lbnUgJykuY3NzKCdkaXNwbGF5JywgJ2Jsb2NrJyk7XG5cdFx0Ly8gfSwgMTUwMCk7XG5cblx0XHQkKCcuU2hpZnRFeHBhbmRhYmxlX19hcnJvdycpXG5cdFx0XHQub2ZmKCdtb3VzZWRvd24nKVxuXHRcdFx0Lm9uKCdtb3VzZWRvd24nLCBmdW5jdGlvbigpIHtcblx0XHRcdFx0c2V0VGltZW91dChmdW5jdGlvbigpIHtcblx0XHRcdFx0XHRyZWRyYXdTaGlmdFRpbWVsaW5lKCk7XG5cdFx0XHRcdH0sIDE1MDApO1xuXHRcdFx0fSk7XG5cdH07XG5cblx0Y29uc3QgaGFuZGxlU2hpZnRUYWJsZSA9ICgpID0+IHtcblx0XHQkKCcuU2hpZnRFeHBhbmRhYmxlJykuZWFjaChmdW5jdGlvbihpbmRleCwgZWwpIHtcblx0XHRcdHZhciAkZWxGbGFnID0gJCh0aGlzKVxuXHRcdFx0XHQucGFyZW50KClcblx0XHRcdFx0LmZpbmQoJy5GbGFnTGluZScpO1xuXHRcdFx0dmFyICRlbEZsYWdUaW1lID0gJCh0aGlzKVxuXHRcdFx0XHQucGFyZW50KClcblx0XHRcdFx0LmZpbmQoJy5GbGFnTGluZV90aW1lJyk7XG5cdFx0XHR2YXIgJGNvbHVtbkZsYWcgPSAkZWxGbGFnLmRhdGEoJ2NvbHVtbicpO1xuXHRcdFx0dmFyICRtaW51dGVzRmxhZyA9ICRlbEZsYWcuZGF0YSgnbWludXRlcycpO1xuXHRcdFx0dmFyICRzbG90cyA9ICQodGhpcylcblx0XHRcdFx0LmNsb3Nlc3QoJy5TaGlmdENvbnRhaW5lcicpXG5cdFx0XHRcdC5maW5kKCcuU2hpZnRDb250YWluZXJfaGVhZGVyJylcblx0XHRcdFx0LmZpbmQoJy5TaGlmdENlbGxDb250ZW50Jyk7XG5cdFx0XHR2YXIgJHNsb3RXaWR0aCA9IE1hdGgucm91bmQoJHNsb3RzLmVxKDApLndpZHRoKCkpO1xuXHRcdFx0dmFyIG1pbnV0ZXNQb3NpdGlvbiA9ICgkbWludXRlc0ZsYWcgKiAkc2xvdFdpZHRoKSAvIDYwO1xuXG5cdFx0XHQvLyBoYW5kbGUgY3VycmVudCB0aW1lIGZsb2cgaG9yaXpvbnRhbCBwb3NpdGlvbmluZ1xuXHRcdFx0dmFyIHNsb3RzUG9zaXRpb24gPSBbXTtcblx0XHRcdCRzbG90cy5lYWNoKGZ1bmN0aW9uKGluZGV4LCBlbCkge1xuXHRcdFx0XHRzbG90c1Bvc2l0aW9uLnB1c2goJCh0aGlzKS5wb3NpdGlvbigpLmxlZnQpO1xuXHRcdFx0fSk7XG5cdFx0XHQkZWxGbGFnLmNzcygnbGVmdCcsIHNsb3RzUG9zaXRpb25bJGNvbHVtbkZsYWcgLSAxXSArIG1pbnV0ZXNQb3NpdGlvbik7XG5cdFx0XHQkZWxGbGFnLmNzcygnZGlzcGxheScsICdibG9jaycpO1xuXHRcdFx0aWYgKCRjb2x1bW5GbGFnID09PSAkc2xvdHMubGVuZ3RoKSB7XG5cdFx0XHRcdCRlbEZsYWdUaW1lLmNzcyh7XG5cdFx0XHRcdFx0cmlnaHQ6ICcxcHgnLFxuXHRcdFx0XHRcdGxlZnQ6ICdhdXRvJyxcblx0XHRcdFx0fSk7XG5cdFx0XHR9XG5cblx0XHRcdC8vIGhhbmRsZSBjZWxscyB0aGF0IG1pZ2h0IHNwYW4gb3ZlciBzZXZlcmFsIHNsb3RzXG5cdFx0XHQkKHRoaXMpXG5cdFx0XHRcdC5maW5kKCcuU2hpZnRDYXJkJylcblx0XHRcdFx0LmVhY2goZnVuY3Rpb24oaW5kZXgsIGVsUm93KSB7XG5cdFx0XHRcdFx0dmFyIHJvd0hhc1NwYW5uZWRDZWxsID0gZmFsc2U7XG5cdFx0XHRcdFx0JChlbFJvdylcblx0XHRcdFx0XHRcdC5maW5kKCcuU2hpZnRDZWxsQ29udGVudCcpXG5cdFx0XHRcdFx0XHQuZWFjaChmdW5jdGlvbihpbmRleCwgZWxDZWxsKSB7XG5cdFx0XHRcdFx0XHRcdHZhciBjb2xzcGFuID0gJChlbENlbGwpLmRhdGEoJ2NvbHNwYW4nKTtcblx0XHRcdFx0XHRcdFx0aWYgKGNvbHNwYW4gPT09IHNsb3RzUG9zaXRpb24ubGVuZ3RoIHx8IHJvd0hhc1NwYW5uZWRDZWxsKSB7XG5cdFx0XHRcdFx0XHRcdFx0JChlbENlbGwpLmNzcyh7XG5cdFx0XHRcdFx0XHRcdFx0XHRkaXNwbGF5OiAnaW5saW5lLWJsb2NrJyxcblx0XHRcdFx0XHRcdFx0XHRcdGZsZXg6ICcxIDEgYXV0bycsXG5cdFx0XHRcdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0XHRcdH0gZWxzZSBpZiAoY29sc3BhbiA+IDEpIHtcblx0XHRcdFx0XHRcdFx0XHRyb3dIYXNTcGFubmVkQ2VsbCA9IHRydWU7XG5cdFx0XHRcdFx0XHRcdFx0JChlbENlbGwpLmNzcyh7XG5cdFx0XHRcdFx0XHRcdFx0XHRkaXNwbGF5OiAnaW5saW5lLWJsb2NrJyxcblx0XHRcdFx0XHRcdFx0XHRcdGZsZXg6ICdub25lJyxcblx0XHRcdFx0XHRcdFx0XHRcdHdpZHRoOiArKHNsb3RzUG9zaXRpb25bY29sc3Bhbl0gLSBzbG90c1Bvc2l0aW9uWzBdKSArICdweCcsXG5cdFx0XHRcdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdH0pO1xuXHRcdFx0XHR9KTtcblxuXHRcdFx0Ly8gaGFuZGxlIGhvcml6b250YWwgc2Nyb2xsIGJlaGF2aW9yXG5cdFx0XHRpZiAoZWwuc2Nyb2xsV2lkdGggPiBlbC5jbGllbnRXaWR0aCkge1xuXHRcdFx0XHQkKGVsKS53aWR0aChlbC5zY3JvbGxXaWR0aCk7XG5cdFx0XHRcdCQodGhpcylcblx0XHRcdFx0XHQuY2xvc2VzdCgnLlNoaWZ0Q29udGFpbmVyJylcblx0XHRcdFx0XHQuZmluZCgnLlNoaWZ0Q29udGFpbmVyX2hlYWRlcicpXG5cdFx0XHRcdFx0LndpZHRoKGVsLnNjcm9sbFdpZHRoKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdCQoZWwpLndpZHRoKCdhdXRvJyk7XG5cdFx0XHRcdCQodGhpcylcblx0XHRcdFx0XHQuY2xvc2VzdCgnLlNoaWZ0Q29udGFpbmVyJylcblx0XHRcdFx0XHQuZmluZCgnLlNoaWZ0Q29udGFpbmVyX2hlYWRlcicpXG5cdFx0XHRcdFx0LndpZHRoKCdhdXRvJyk7XG5cdFx0XHR9XG5cdFx0fSk7XG5cdH07XG5cblx0Y29uc3QgaGFzU2Nyb2xsQmFyID0gKCkgPT4ge1xuXHRcdHZhciAkU2Nyb2xsYWJsZURpdiA9ICRzaGlmdENvbnRhaW5lcklkLmZpbmQoJy5TaGlmdEV4cGFuZGFibGVfY29udGFpbmVyJyk7XG5cdFx0aWYgKCRzaGlmdENvbnRhaW5lcklkLmZpbmQoJy5TaGlmdEV4cGFuZGFibGVfY29udGFpbmVyJykubGVuZ3RoID4gMCkge1xuXHRcdFx0aWYgKCRTY3JvbGxhYmxlRGl2LmdldCgwKS5zY3JvbGxIZWlnaHQgPiAkU2Nyb2xsYWJsZURpdi5oZWlnaHQoKSkge1xuXHRcdFx0XHR2YXIgJGxhc3RDZWxsID0gJHNoaWZ0Q29udGFpbmVySWQuZmluZCgnLklzVGltZXI6bGFzdC1jaGlsZCcpO1xuXHRcdFx0XHQkbGFzdENlbGwuY3NzKCdwYWRkaW5nLXJpZ2h0JywgJzdweCcpO1xuXHRcdFx0fVxuXHRcdH1cblx0fTtcblxuXHRjb25zdCByZWRyYXdTaGlmdFRpbWVsaW5lID0gKCkgPT4ge1xuXHRcdGNsZWFyVGltZW91dChzaGlmdFRpbWVsaW5lUmVzaXplVGltZXIpO1xuXHRcdHNoaWZ0VGltZWxpbmVSZXNpemVUaW1lciA9IHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG5cdFx0XHRoYXNTY3JvbGxCYXIoKTtcblx0XHRcdGhhbmRsZVNoaWZ0VGFibGUoKTtcblx0XHR9LCA0MDApO1xuXHR9O1xuXG5cdGNvbnN0IGNoZWNrU2Nyb2xsID0gKCkgPT4ge1xuXHRcdHZhciBoQ29udGVudCA9ICQoJy5Db250ZW50JykuaGVpZ2h0KCk7XG5cdFx0dmFyIGhXaW5kb3cgPSAkKHdpbmRvdykuaGVpZ2h0KCk7XG5cblx0XHRpZiAoaENvbnRlbnQgPiBoV2luZG93KSByZWRyYXdTaGlmdFRpbWVsaW5lKCk7XG5cdH07XG5cblx0U2FwcGhpcmVXaWRnZXRzLlNoaWZ0Q29udGFpbmVyID0ge1xuXHRcdGNyZWF0ZSxcblx0XHRjaGVja1Njcm9sbCxcblx0XHRyZWRyYXdTaGlmdFRpbWVsaW5lLFxuXHR9O1xufSkoalF1ZXJ5LCB3aW5kb3csIGRvY3VtZW50LCBTYXBwaGlyZVdpZGdldHMpO1xuXG4kKHdpbmRvdylcblx0Lm9mZigncmVzaXplLkdlbmVyaWNHYWxsZXJ5Jylcblx0Lm9uKCdyZXNpemUuR2VuZXJpY0dhbGxlcnknLCBmdW5jdGlvbigpIHtcblx0XHQkKCcuU2hpZnRDYXJkX3RpbWVMaW5lJykuY3NzKCd2aXNpYmlsaXR5JywgJ2hpZGRlbicpO1xuXHRcdCQoJy5TaGlmdEV4cGFuZGFibGVfY29udGFpbmVyIC5BY3Rpb25zTWVudScpLmNzcygnZGlzcGxheScsICdub25lJyk7XG5cblx0XHRTYXBwaGlyZVdpZGdldHMuU2hpZnRDb250YWluZXIucmVkcmF3U2hpZnRUaW1lbGluZSgpO1xuXG5cdFx0aWYgKG9zQWpheEJhY2tlbmQpIG9zQWpheEJhY2tlbmQuQmluZEFmdGVyQWpheFJlcXVlc3QoU2FwcGhpcmVXaWRnZXRzLlNoaWZ0Q29udGFpbmVyLnJlZHJhd1NoaWZ0VGltZWxpbmUpO1xuXG5cdFx0c2V0VGltZW91dChTYXBwaGlyZVdpZGdldHMuU2hpZnRDb250YWluZXIuY2hlY2tTY3JvbGwsIDEwMDApO1xuXG5cdFx0c2V0VGltZW91dChmdW5jdGlvbigpIHtcblx0XHRcdCQoJy5TaGlmdENhcmRfdGltZUxpbmUnKS5jc3MoJ3Zpc2liaWxpdHknLCAndmlzaWJsZScpO1xuXHRcdFx0JCgnLlNoaWZ0RXhwYW5kYWJsZV9jb250YWluZXIgLkFjdGlvbnNNZW51JykuY3NzKCdkaXNwbGF5JywgJ2Jsb2NrJyk7XG5cdFx0fSwgMTUwMCk7XG5cdH0pO1xuXG4kKHdpbmRvdykubG9hZChmdW5jdGlvbigpIHtcblx0aWYgKCEhJCgnLlNoaWZ0Q29udGFpbmVyJykubGVuZ3RoKSB7XG5cdFx0JCgnLlNoaWZ0Q2FyZF90aW1lTGluZScpLmNzcygndmlzaWJpbGl0eScsICdoaWRkZW4nKTtcblx0XHQkKCcuU2hpZnRFeHBhbmRhYmxlX2NvbnRhaW5lciAuQWN0aW9uc01lbnUnKS5jc3MoJ2Rpc3BsYXknLCAnbm9uZScpO1xuXG5cdFx0c2V0VGltZW91dChmdW5jdGlvbigpIHtcblx0XHRcdFNhcHBoaXJlV2lkZ2V0cy5TaGlmdENvbnRhaW5lci5yZWRyYXdTaGlmdFRpbWVsaW5lKCk7XG5cdFx0fSwgNDAwKTtcblxuXHRcdHNldFRpbWVvdXQoU2FwcGhpcmVXaWRnZXRzLlNoaWZ0Q29udGFpbmVyLmNoZWNrU2Nyb2xsLCA1MDApO1xuXG5cdFx0c2V0VGltZW91dChmdW5jdGlvbigpIHtcblx0XHRcdCQoJy5TaGlmdENhcmRfdGltZUxpbmUnKS5jc3MoJ3Zpc2liaWxpdHknLCAndmlzaWJsZScpO1xuXHRcdFx0JCgnLlNoaWZ0RXhwYW5kYWJsZV9jb250YWluZXIgLkFjdGlvbnNNZW51JykuY3NzKCdkaXNwbGF5JywgJ2Jsb2NrJyk7XG5cdFx0fSwgNjAwKTtcblxuXHRcdCQoJy5uYXZpZ2F0aW9uLWNvbnRyb2wtaXRlbScpXG5cdFx0XHQub2ZmKCdjbGljaycpXG5cdFx0XHQub24oJ2NsaWNrJywgZnVuY3Rpb24oKSB7XG5cdFx0XHRcdCQoJy5TaGlmdENhcmRfdGltZUxpbmUnKS5jc3MoJ3Zpc2liaWxpdHknLCAnaGlkZGVuJyk7XG5cdFx0XHRcdCQoJy5TaGlmdEV4cGFuZGFibGVfY29udGFpbmVyIC5BY3Rpb25zTWVudScpLmNzcygnZGlzcGxheScsICdub25lJyk7XG5cdFx0XHR9KTtcblxuXHRcdC8vVmVyaWZ5IHRoZSBzY3JvbGwgaWYgdG9vbHRpcCBvcGVuZWRcblx0XHQkKCcuU2hpZnRFeHBhbmRhYmxlX2NvbnRhaW5lcicpLm9uKCdzY3JvbGwnLCBmdW5jdGlvbigpIHtcblx0XHRcdGlmICgkKCcudG9vbHRpcHN0ZXItYmFzZScpLmlzKCc6dmlzaWJsZScpKSB7XG5cdFx0XHRcdCQoJy50b29sdGlwc3Rlci1iYXNlJykuY3NzKCd2aXNpYmlsaXR5JywgJ2hpZGRlbicpO1xuXHRcdFx0fVxuXHRcdH0pO1xuXG5cdFx0b3NBamF4QmFja2VuZC5CaW5kQWZ0ZXJBamF4UmVxdWVzdChmdW5jdGlvbigpIHtcblx0XHRcdHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG5cdFx0XHRcdFNhcHBoaXJlV2lkZ2V0cy5TaGlmdENvbnRhaW5lci5yZWRyYXdTaGlmdFRpbWVsaW5lKCk7XG5cdFx0XHR9LCA0MDApO1xuXG5cdFx0XHRzZXRUaW1lb3V0KFNhcHBoaXJlV2lkZ2V0cy5TaGlmdENvbnRhaW5lci5jaGVja1Njcm9sbCwgNTAwKTtcblxuXHRcdFx0c2V0VGltZW91dChmdW5jdGlvbigpIHtcblx0XHRcdFx0JCgnLlNoaWZ0Q2FyZF90aW1lTGluZScpLmNzcygndmlzaWJpbGl0eScsICd2aXNpYmxlJyk7XG5cdFx0XHRcdCQoJy5TaGlmdEV4cGFuZGFibGVfY29udGFpbmVyIC5BY3Rpb25zTWVudScpLmNzcygnZGlzcGxheScsICdibG9jaycpO1xuXHRcdFx0fSwgNjAwKTtcblxuXHRcdFx0Ly8gU2FwcGhpcmVXaWRnZXRzLlNoaWZ0Q29udGFpbmVyLnJlZHJhd1NoaWZ0VGltZWxpbmU7XG5cdFx0fSk7XG5cdH1cbn0pO1xuIiwiLyogQ29tcG9uZW50IFNoaWZ0VGFibGUgKi9cblNhcHBoaXJlV2lkZ2V0cy5TaGlmdFRhYmxlID0gd2lkZ2V0SWQgPT4ge1xuXHQkKGRvY3VtZW50KS5yZWFkeSgoKSA9PiB7XG5cdFx0c2V0VGltZW91dCgoKSA9PiB7XG5cdFx0XHRjb25zdCAkc2hpZnRUYWJsZSA9ICQoYCMke3dpZGdldElkfWApO1xuXHRcdFx0Y29uc3QgJGhlYWRlckNlbGxMaXN0ID0gJHNoaWZ0VGFibGUuZmluZCgnLlNoaWZ0VGFibGVfX0hlYWRlckxhYmVscyAuU2hpZnRUYWJsZUNlbGwnKTtcblx0XHRcdGNvbnN0ICRob3VyTGluZSA9ICRzaGlmdFRhYmxlLmZpbmQoJy5Ib3VyTGluZScpO1xuXG5cdFx0XHRjb25zdCBjb2x1bW5MaW5lID0gJGhvdXJMaW5lLmRhdGEoJ2NvbHVtbicpO1xuXHRcdFx0Y29uc3QgbWludXRlc0xpbmUgPSAkaG91ckxpbmUuZGF0YSgnbWludXRlcycpO1xuXG5cdFx0XHRjb25zdCBjZWxsV2lkdGggPSAkaGVhZGVyQ2VsbExpc3QuZXEoMCkud2lkdGgoKTtcblx0XHRcdGNvbnN0IG1pbnV0ZXNQb3NpdGlvbiA9IChjZWxsV2lkdGggLyA2MCkgKiBtaW51dGVzTGluZTtcblxuXHRcdFx0Ly8gSGFuZGxlIGN1cnJlbnQgaG91ciBsaW5lIGhvcml6b250YWwgcG9zaXRpb25pbmdcblx0XHRcdGNvbnN0IGNlbGxQb3NpdGlvbiA9IFtdO1xuXG5cdFx0XHQkaGVhZGVyQ2VsbExpc3QuZWFjaChmdW5jdGlvbihpbmRleCwgZWwpIHtcblx0XHRcdFx0Y2VsbFBvc2l0aW9uLnB1c2goJCh0aGlzKS5wb3NpdGlvbigpLmxlZnQpO1xuXHRcdFx0fSk7XG5cblx0XHRcdCRob3VyTGluZS5jc3MoJ2xlZnQnLCBjZWxsUG9zaXRpb25bY29sdW1uTGluZSAtIDFdICsgbWludXRlc1Bvc2l0aW9uKTtcblx0XHRcdCRob3VyTGluZS5jc3MoJ2Rpc3BsYXknLCAnZmxleCcpO1xuXHRcdH0sIDUwMCk7XG5cdH0pO1xufTtcbiIsIi8qIENvbXBvbmVudCBTaGlmdFRhYmxlQ2FyZCAqL1xuU2FwcGhpcmVXaWRnZXRzLlNoaWZ0VGFibGVDYXJkID0gd2lkZ2V0SWQgPT4ge1xuXHRjb25zdCAkY29tcG9uZW50ID0gJChgIyR7d2lkZ2V0SWR9YCk7XG5cdGNvbnN0ICRhY3Rpb25zID0gJGNvbXBvbmVudC5maW5kKCcuTW9yZUFjdGlvbnMnKTtcblx0Y29uc3QgaGFzQWN0aW9ucyA9ICRhY3Rpb25zLmxlbmd0aCA+IDA7XG5cblx0aWYgKGhhc0FjdGlvbnMpIHtcblx0XHQkYWN0aW9ucy5vbignY2xpY2snLCBlID0+IHtcblx0XHRcdGUuc3RvcFByb3BhZ2F0aW9uKCk7XG5cblx0XHRcdCQoJy5TaGlmdFRhYmxlQ2FyZCcpLnJlbW92ZUNsYXNzKCdTaGlmdFRhYmxlQ2FyZC0tc2VsZWN0ZWQnKTtcblx0XHRcdCRjb21wb25lbnQuYWRkQ2xhc3MoJ1NoaWZ0VGFibGVDYXJkLS1zZWxlY3RlZCcpO1xuXG5cdFx0XHR3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBvbkNsaWNrT3V0c2lkZSk7XG5cdFx0fSk7XG5cblx0XHRjb25zdCBvbkNsaWNrT3V0c2lkZSA9IGUgPT4ge1xuXHRcdFx0Y29uc3QgJHRhcmdldCA9ICQoZS50YXJnZXQpO1xuXG5cdFx0XHRpZiAoIWUudGFyZ2V0LmNsYXNzTmFtZS5pbmNsdWRlcygkY29tcG9uZW50KSAmJiAhJHRhcmdldC5wYXJlbnRzKCRjb21wb25lbnQpLmlzKCRjb21wb25lbnQpKSB7XG5cdFx0XHRcdCRjb21wb25lbnQucmVtb3ZlQ2xhc3MoJ1NoaWZ0VGFibGVDYXJkLS1zZWxlY3RlZCcpO1xuXG5cdFx0XHRcdHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIG9uQ2xpY2tPdXRzaWRlKTtcblx0XHRcdH1cblx0XHR9O1xuXHR9XG59O1xuIiwiU2FwcGhpcmVXaWRnZXRzLlNoaWZ0VGFibGVDYXJkUHJvZ3Jlc3MgPSBjb25maWcgPT4ge1xuXHRjb25zdCBERUZBVUxUX1BBRERJTkcgPSA4O1xuXHRjb25zdCBERUZBVUxUX0NBUkRfSEVJR0hUID0gNTY7XG5cblx0Y29uc3Qgc2V0VGFibGVDYXJkUHJvZ3Jlc3MgPSAoKSA9PiB7XG5cdFx0Y29uc3QgY2FyZFByb2dyZXNJRCA9IGNvbmZpZy53aWRnZXRJZDtcblx0XHRjb25zdCBzdGFydENvbHVtbiA9IGNvbmZpZy5zdGFydENvbHVtbjtcblx0XHRjb25zdCBlbmRDb2x1bW4gPSBjb25maWcuZW5kQ29sdW1uO1xuXG5cdFx0Y29uc3QgJGNhcmRQcm9ncmVzcyA9ICQoJyMnICsgY2FyZFByb2dyZXNJRCk7XG5cdFx0Y29uc3QgJHNoaWZ0VGFibGUgPSAkY2FyZFByb2dyZXNzLmNsb3Nlc3QoJy5TaGlmdFRhYmxlJyk7XG5cdFx0Y29uc3QgJHRhYmxlQ2VsbExpc3QgPSAkc2hpZnRUYWJsZS5maW5kKCcuU2hpZnRUYWJsZV9fQ29udGVudCAuU2hpZnRUYWJsZUNlbGwnKTtcblx0XHRjb25zdCAkdGFibGVSb3dDb250ZW50ID0gJGNhcmRQcm9ncmVzcy5jbG9zZXN0KCcuU2hpZnRUYWJsZVJvd19fQ29udGVudCcpO1xuXHRcdGNvbnN0ICR0YWJsZUNhcmQgPSAkdGFibGVSb3dDb250ZW50LmZpbmQoJy5TaGlmdFRhYmxlQ2FyZCcpO1xuXHRcdGNvbnN0ICRjYXJkUHJvZ3Jlc3NMaXN0ID0gJHRhYmxlUm93Q29udGVudC5maW5kKCcuU2hpZnRUYWJsZUNhcmRQcm9ncmVzcycpO1xuXHRcdGNvbnN0ICRwcm9ncmVzc0Jhckxpc3QgPSAkY2FyZFByb2dyZXNzLmZpbmQoJy5Qcm9ncmVzc0JhcldyYXAnKTtcblx0XHRjb25zdCAkYWN0aW9ucyA9ICRjYXJkUHJvZ3Jlc3MuZmluZCgnLk1vcmVBY3Rpb25zJyk7XG5cblx0XHRjb25zdCBjYXJkc1RvdGFsID0gJHRhYmxlQ2FyZC5sZW5ndGg7XG5cdFx0Y29uc3QgdGltZVNsb3RXaWR0aCA9ICR0YWJsZUNlbGxMaXN0WzFdLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLndpZHRoO1xuXHRcdGNvbnN0IGNvbEZpbGwgPSBwYXJzZUludChlbmRDb2x1bW4pIC0gcGFyc2VJbnQoc3RhcnRDb2x1bW4pICsgMTtcblx0XHRjb25zdCBtaW51dGVWYWx1ZVdpZHRoID0gdGltZVNsb3RXaWR0aCAvIDYwO1xuXHRcdGNvbnN0IGhhc0FjdGlvbnMgPSAkYWN0aW9ucy5sZW5ndGggPiAwO1xuXG5cdFx0bGV0IHRvdGFsTGVmdCA9IDA7XG5cblx0XHRmb3IgKGxldCBpID0gMTsgaSA8IHBhcnNlSW50KHN0YXJ0Q29sdW1uKTsgaSsrKSB7XG5cdFx0XHR0b3RhbExlZnQgKz0gJHRhYmxlQ2VsbExpc3RbaV0uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkud2lkdGg7XG5cdFx0fVxuXG5cdFx0bGV0IHJvdW5kV2lkdGggPSBNYXRoLnJvdW5kKCh0aW1lU2xvdFdpZHRoICsgTnVtYmVyLkVQU0lMT04pICogMTAwKSAvIDEwMDtcblx0XHRjb25zdCBwYWRkaW5nT2Zmc2V0ID0gREVGQVVMVF9QQURESU5HICogMjtcblx0XHRjb25zdCBuZXdXaWR0aCA9IGNvbEZpbGwgKiByb3VuZFdpZHRoIC0gcGFkZGluZ09mZnNldDtcblx0XHRjb25zdCBkaXJlY3Rpb24gPSAkKCcuUGFnZScpLmhhc0NsYXNzKCdBUicpIHx8ICQoJy5QYWdlJykuaGFzQ2xhc3MoJ0ZBJykgPyAncmlnaHQnIDogJ2xlZnQnO1xuXG5cdFx0JGNhcmRQcm9ncmVzcy5jc3MoJ3dpZHRoJywgYCR7bmV3V2lkdGh9cHhgKTtcblx0XHQkY2FyZFByb2dyZXNzLmNzcygnbWF4LXdpZHRoJywgJ3Vuc2V0Jyk7XG5cdFx0JGNhcmRQcm9ncmVzcy5jc3MoZGlyZWN0aW9uLCBgJHsodG90YWxMZWZ0ICs9IERFRkFVTFRfUEFERElORyl9cHhgKTtcblxuXHRcdGlmIChjYXJkc1RvdGFsID4gMCkge1xuXHRcdFx0bGV0IGNvdW50ID0gMDtcblxuXHRcdFx0JHRhYmxlQ2FyZC5lYWNoKGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRjb25zdCAkdGhpcyA9ICQodGhpcyk7XG5cdFx0XHRcdGNvbnN0IGlzT3ZlcmxhcGVkID0gY2hlY2tGb3JPdmVybGFwKCRjYXJkUHJvZ3Jlc3NbMF0sICR0aGlzWzBdKTtcblxuXHRcdFx0XHRpZiAoaXNPdmVybGFwZWQgPT09IHRydWUgJiYgY291bnQgPCAkY2FyZFByb2dyZXNzTGlzdC5sZW5ndGgpIHtcblx0XHRcdFx0XHQkY2FyZFByb2dyZXNzLmNzcygndG9wJywgJHRoaXNbMF0ub2Zmc2V0VG9wICsgJGNhcmRQcm9ncmVzcy5oZWlnaHQoKSk7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRjb3VudCA9IGNvdW50Kys7XG5cdFx0XHR9KTtcblxuXHRcdFx0JGNhcmRQcm9ncmVzc0xpc3QuZWFjaChmdW5jdGlvbigpIHtcblx0XHRcdFx0Y29uc3QgJHRoaXMgPSAkKHRoaXMpO1xuXG5cdFx0XHRcdGNvbnN0IGhlbHBlciA9IGhlbHBlck9iaigkdGhpcywgJGNhcmRQcm9ncmVzcywgJGNhcmRQcm9ncmVzc0xpc3QpO1xuXG5cdFx0XHRcdGlmIChoZWxwZXIuaXNPdmVybGFwZWQpIHtcblx0XHRcdFx0XHQkY2FyZFByb2dyZXNzLmNzcygndG9wJywgJHRoaXNbMF0ub2Zmc2V0VG9wICsgMTMwKTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHQkY2FyZFByb2dyZXNzLmNzcygndG9wJywgJHRhYmxlUm93Q29udGVudC5oZWlnaHQoKSAtIERFRkFVTFRfUEFERElORyk7XG5cdFx0XHRcdH1cblx0XHRcdH0pO1xuXG5cdFx0XHRjb25zdCBvZmZzZXQgPSA0ICsgREVGQVVMVF9DQVJEX0hFSUdIVCArIERFRkFVTFRfUEFERElORyAqIDI7XG5cblx0XHRcdCR0YWJsZVJvd0NvbnRlbnQuaGVpZ2h0KCRjYXJkUHJvZ3Jlc3NMaXN0Lmxhc3QoKS5wb3NpdGlvbigpLnRvcCArIG9mZnNldCk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdCRjYXJkUHJvZ3Jlc3NMaXN0LmVhY2goZnVuY3Rpb24oKSB7XG5cdFx0XHRcdGNvbnN0ICR0aGlzID0gJCh0aGlzKTtcblxuXHRcdFx0XHRjb25zdCBoZWxwZXIgPSBoZWxwZXJPYmooJHRoaXMsICRjYXJkUHJvZ3Jlc3MsICRjYXJkUHJvZ3Jlc3NMaXN0KTtcblxuXHRcdFx0XHRpZiAoaGVscGVyLmlzT3ZlcmxhcGVkKSB7XG5cdFx0XHRcdFx0Y29uc3Qgb2Zmc2V0ID0gREVGQVVMVF9DQVJEX0hFSUdIVCArIERFRkFVTFRfUEFERElORyAqIDI7XG5cblx0XHRcdFx0XHQkY2FyZFByb2dyZXNzLmNzcygndG9wJywgJGNhcmRQcm9ncmVzc1swXS5vZmZzZXRUb3AgKyBvZmZzZXQgKyAncHgnKTtcblx0XHRcdFx0XHRoZWxwZXIuJHNoaWZ0Q2FyZC5oZWlnaHQoaGVscGVyLiRzaGlmdENhcmQuaGVpZ2h0KCkgKyAkdGhpc1swXS5vZmZzZXRIZWlnaHQpO1xuXHRcdFx0XHR9XG5cdFx0XHR9KTtcblx0XHR9XG5cblx0XHRzZXRUaW1lb3V0KCgpID0+IHtcblx0XHRcdGlmICh0aW1lU2xvdFdpZHRoICE9PSAkdGFibGVDZWxsTGlzdFsxXS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS53aWR0aCkge1xuXHRcdFx0XHRzZXRUYWJsZUNhcmRQcm9ncmVzcyhjb25maWcpO1xuXHRcdFx0fVxuXHRcdH0sIDUwMCk7XG5cblx0XHRpZiAoaGFzQWN0aW9ucykge1xuXHRcdFx0JGFjdGlvbnMub24oJ2NsaWNrJywgZSA9PiB7XG5cdFx0XHRcdGUuc3RvcFByb3BhZ2F0aW9uKCk7XG5cblx0XHRcdFx0JGNhcmRQcm9ncmVzcy5hZGRDbGFzcygnU2hpZnRUYWJsZUNhcmRQcm9ncmVzcy0tc2VsZWN0ZWQnKTtcblxuXHRcdFx0XHR3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBvbkNsaWNrT3V0c2lkZSk7XG5cdFx0XHR9KTtcblxuXHRcdFx0Y29uc3Qgb25DbGlja091dHNpZGUgPSBlID0+IHtcblx0XHRcdFx0Y29uc3QgJHRhcmdldCA9ICQoZS50YXJnZXQpO1xuXG5cdFx0XHRcdGlmICghZS50YXJnZXQuY2xhc3NOYW1lLmluY2x1ZGVzKCRjYXJkUHJvZ3Jlc3MpICYmICEkdGFyZ2V0LnBhcmVudHMoJGNhcmRQcm9ncmVzcykuaXMoJGNhcmRQcm9ncmVzcykpIHtcblx0XHRcdFx0XHQkY2FyZFByb2dyZXNzLnJlbW92ZUNsYXNzKCdTaGlmdFRhYmxlQ2FyZFByb2dyZXNzLS1zZWxlY3RlZCcpO1xuXG5cdFx0XHRcdFx0d2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgb25DbGlja091dHNpZGUpO1xuXHRcdFx0XHR9XG5cdFx0XHR9O1xuXHRcdH1cblxuXHRcdC8qJHByb2dyZXNzQmFyTGlzdC5lYWNoKGZ1bmN0aW9uKGluZGV4KSB7XG5cdFx0XHRjb25zdCBiZWdpbnNsb3QgPSAkKHRoaXMpLmRhdGEoJ2JlZ2luc2xvdCcpO1xuXHRcdFx0Y29uc3QgYmVnaW5taW51dGUgPSAkKHRoaXMpLmRhdGEoJ2JlZ2lubWludXRlJyk7XG5cdFx0XHRjb25zdCBlbmRzbG90ID0gJCh0aGlzKS5kYXRhKCdlbmRzbG90Jyk7XG5cdFx0XHRjb25zdCBlbmRtaW51dGUgPSAkKHRoaXMpLmRhdGEoJ2VuZG1pbnV0ZScpO1xuXHRcdFx0Y29uc3QgYWN0aW9uc1dpZHRoID0gNTY7XG5cblx0XHRcdGNvbnN0IHByb2dyZXNzQmFyTWludXRlcyA9IChlbmRzbG90IC0gYmVnaW5zbG90KSAqIDYwICsgZW5kbWludXRlIC0gYmVnaW5taW51dGU7XG5cdFx0XHRjb25zdCBwcm9ncmVzc2VuZFdpdGhQZXIgPSBwcm9ncmVzc0Jhck1pbnV0ZXMgKiBtaW51dGVWYWx1ZVdpZHRoO1xuXG5cdFx0XHRjb25zdCAkcHJvZ3Jlc3NUb3RhbCA9ICQodGhpcykuZmluZCgnLlByb2dyZXNzQmFyX19hbmltYXRpb24nKTtcblxuXHRcdFx0Ly8kKHRoaXMpLmNzcygnbGVmdCcsICgoYmVnaW5zbG90IC0gMSkgKiA2MCArIGJlZ2lubWludXRlKSAqIG1pbnV0ZVZhbHVlV2lkdGggKyAncHgnKTtcblx0XHRcdCRwcm9ncmVzc1RvdGFsLmNzcygnd2lkdGgnLCBwcm9ncmVzc2VuZFdpdGhQZXIgLSBhY3Rpb25zV2lkdGggKyAncHgnKTtcblx0XHR9KTsqL1xuXHR9O1xuXG5cdGNvbnN0IGNoZWNrRm9yT3ZlcmxhcCA9IChlbDEsIGVsMikgPT4ge1xuXHRcdGNvbnN0IGJvdW5kczEgPSBlbDEuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG5cdFx0Y29uc3QgYm91bmRzMiA9IGVsMi5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcblxuXHRcdGNvbnN0IGZpcnN0SXN0TGVmdG1vc3QgPSBib3VuZHMxLmxlZnQgPD0gYm91bmRzMi5sZWZ0O1xuXHRcdGNvbnN0IGxlZnRlc3QgPSBmaXJzdElzdExlZnRtb3N0ID8gYm91bmRzMSA6IGJvdW5kczI7XG5cdFx0Y29uc3QgcmlnaHRlc3QgPSBmaXJzdElzdExlZnRtb3N0ID8gYm91bmRzMiA6IGJvdW5kczE7XG5cblx0XHQvLyBSZXBsYWNlID4gdG8gdG8gPj0gaWYgYm9yZGVyIG92ZXJsYXAgc2hvdWxkIGNvdW50XG5cdFx0aWYgKGxlZnRlc3QucmlnaHQgPiByaWdodGVzdC5sZWZ0KSB7XG5cdFx0XHRjb25zdCBmaXJzdElzVG9wbW9zdCA9IGJvdW5kczEudG9wIDw9IGJvdW5kczIudG9wO1xuXHRcdFx0Y29uc3QgdG9wZXN0ID0gZmlyc3RJc1RvcG1vc3QgPyBib3VuZHMxIDogYm91bmRzMjtcblx0XHRcdGNvbnN0IGJvdHRvbWVzdCA9IGZpcnN0SXNUb3Btb3N0ID8gYm91bmRzMiA6IGJvdW5kczE7XG5cblx0XHRcdC8vIFJlcGxhY2UgPiB0byA+PSBpZiBib3JkZXIgc2hvdWxkIGNvdW50XG5cdFx0XHRyZXR1cm4gdG9wZXN0LmJvdHRvbSA+IGJvdHRvbWVzdC50b3A7XG5cdFx0fSBlbHNlIHJldHVybiBmYWxzZTtcblx0fTtcblxuXHRjb25zdCBoZWxwZXJPYmogPSAoJHRoaXMsICRjYXJkUHJvZ3Jlc3MsICRjYXJkUHJvZ3Jlc3NMaXN0KSA9PiB7XG5cdFx0Y29uc3QgJHNoaWZ0Q2FyZCA9ICR0aGlzLmNsb3Nlc3QoJy5TaGlmdFRhYmxlUm93X19Db250ZW50Jyk7XG5cdFx0bGV0IGlzT3ZlcmxhcGVkID0gY2hlY2tGb3JPdmVybGFwKCRjYXJkUHJvZ3Jlc3NbMF0sICR0aGlzWzBdKTtcblx0XHRjb25zdCBjcmVhdGVkSWQgPSAkY2FyZFByb2dyZXNzLmF0dHIoJ2lkJyk7XG5cdFx0Y29uc3QgbG9vcGVkSWQgPSAkdGhpcy5hdHRyKCdpZCcpO1xuXHRcdGNvbnN0ICRmaXJzdFNsb3RDcmVhdGVkID0gJGNhcmRQcm9ncmVzc0xpc3RbMF07XG5cblx0XHRpc092ZXJsYXBlZCA9IGlzT3ZlcmxhcGVkID09PSB0cnVlICYmIGNyZWF0ZWRJZCAhPSBsb29wZWRJZCAmJiBjcmVhdGVkSWQgIT0gJGZpcnN0U2xvdENyZWF0ZWQuaWQ7XG5cblx0XHRyZXR1cm4geyAkc2hpZnRDYXJkLCBjcmVhdGVkSWQsIGxvb3BlZElkLCAkZmlyc3RTbG90Q3JlYXRlZCwgaXNPdmVybGFwZWQgfTtcblx0fTtcblxuXHQkKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigpIHtcblx0XHRzZXRUYWJsZUNhcmRQcm9ncmVzcyhjb25maWcpO1xuXHR9KTtcblxuXHQkKHdpbmRvdykucmVzaXplKGZ1bmN0aW9uKCkge1xuXHRcdGlmICh3aW5kb3dbY29uZmlnLndpZGdldElkXSkge1xuXHRcdFx0Y2xlYXJUaW1lb3V0KHdpbmRvd1tjb25maWcud2lkZ2V0SWRdLnJlc2l6ZWRGaW5pc2hlZCk7XG5cdFx0XHR3aW5kb3dbY29uZmlnLndpZGdldElkXS5yZXNpemVkRmluaXNoZWQgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRzZXRUYWJsZUNhcmRQcm9ncmVzcyhjb25maWcpO1xuXHRcdFx0fSwgMjUwKTtcblx0XHR9XG5cdH0pO1xufTtcbiIsIi8qIENvbXBvbmVudCBTaGlmdFRhYmxlQ2FyZEhvdmVyICovXG5TYXBwaGlyZVdpZGdldHMuU2hpZnRUYWJsZUNhcmRIb3ZlciA9IHdpZGdldElkID0+IHtcblx0JChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oKSB7XG5cdFx0Y29uc3QgJGNhcmQgPSAkKGAjJHt3aWRnZXRJZH1gKTtcblx0XHRjb25zdCAkY2FyZENvbnRlbnQgPSAkY2FyZC5maW5kKCcuU2hpZnRUYWJsZUNhcmRIb3Zlcl9fQ29udGVudCcpO1xuXG5cdFx0JGNhcmRDb250ZW50Lm9uKCdjbGljaycsIGUgPT4ge1xuXHRcdFx0ZS5zdG9wUHJvcGFnYXRpb24oKTtcblxuXHRcdFx0JGNhcmQuYWRkQ2xhc3MoJ1NoaWZ0VGFibGVDYXJkSG92ZXItLXNlbGVjdGVkJyk7XG5cblx0XHRcdHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIG9uQ2xpY2tPdXRzaWRlKTtcblx0XHR9KTtcblxuXHRcdGNvbnN0IG9uQ2xpY2tPdXRzaWRlID0gZSA9PiB7XG5cdFx0XHRjb25zdCAkdGFyZ2V0ID0gJChlLnRhcmdldCk7XG5cblx0XHRcdGlmICghZS50YXJnZXQuY2xhc3NOYW1lLmluY2x1ZGVzKCRjYXJkKSAmJiAhJHRhcmdldC5wYXJlbnRzKCRjYXJkKS5pcygkY2FyZCkpIHtcblx0XHRcdFx0JGNhcmQucmVtb3ZlQ2xhc3MoJ1NoaWZ0VGFibGVDYXJkSG92ZXItLXNlbGVjdGVkJyk7XG5cblx0XHRcdFx0d2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgb25DbGlja091dHNpZGUpO1xuXHRcdFx0fVxuXHRcdH07XG5cdH0pO1xufTtcbiIsIi8qIENvbXBvbmVudCBTaWRlTWVudVN0cnVjdHVyZSAqL1xuKGZ1bmN0aW9uKCQsIHdpbmRvdywgU2FwcGhpcmVXaWRnZXRzKSB7XG5cdGNsYXNzIFNpZGVNZW51IHtcblx0XHRjb25zdHJ1Y3Rvcihjb25maWcpIHtcblx0XHRcdHRoaXMub3B0aW9ucyA9IHtcblx0XHRcdFx0Li4uY29uZmlnLFxuXHRcdFx0fTtcblxuXHRcdFx0dGhpcy5vbkNvbXBvbmVudEluaXQoKTtcblx0XHR9XG5cblx0XHRzZXRNYWluTWVudVdpZHRoKCkge1xuXHRcdFx0JChkb2N1bWVudCkucmVhZHkoKCkgPT4ge1xuXHRcdFx0XHRjb25zdCAkc2lkZUJhcklmcmFtZSA9ICQoJy5MYXlvdXRCYXNlLWlmcmFtZXNpZGViYXIubm90RXhwYW5kYWJsZScpO1xuXG5cdFx0XHRcdGlmICgkc2lkZUJhcklmcmFtZS5sZW5ndGgpIHtcblx0XHRcdFx0XHRjb25zdCAkbWFpbk1lbnUgPSAkKCcuTGF5b3V0QmFzZS1NYWluTWVudScpO1xuXHRcdFx0XHRcdCRtYWluTWVudS5jc3Moe1xuXHRcdFx0XHRcdFx0d2lkdGg6ICdjYWxjKDEwMCUgLSAyNjJweCknLFxuXHRcdFx0XHRcdH0pO1xuXHRcdFx0XHR9XG5cdFx0XHR9KTtcblx0XHR9XG5cblx0XHRvcGVuQ2xvc2VNZW51KHRvT3Blbikge1xuXHRcdFx0aWYgKHRvT3Blbikge1xuXHRcdFx0XHR0aGlzLiRjb21wb25lbnQuYWRkQ2xhc3MoJ1NpZGVNZW51LS1vcGVuJyk7XG5cblx0XHRcdFx0JCgnLkxheW91dEJhc2UtaWZyYW1lc2lkZWJhcicpLmNzcyh7XG5cdFx0XHRcdFx0ekluZGV4OiAwLFxuXHRcdFx0XHR9KTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHRoaXMuJGNvbXBvbmVudC5yZW1vdmVDbGFzcygnU2lkZU1lbnUtLW9wZW4nKTtcblxuXHRcdFx0XHQkKCcuTGF5b3V0QmFzZS1pZnJhbWVzaWRlYmFyJykuY3NzKHtcblx0XHRcdFx0XHR6SW5kZXg6IDcwLFxuXHRcdFx0XHR9KTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHR3aW5kb3dDbGljaygkY29tcG9uZW50KSB7XG5cdFx0XHQkKHdpbmRvdylcblx0XHRcdFx0Lm9mZignY2xpY2suU2lkZU1lbnVTdHJ1Y3R1cmUnKVxuXHRcdFx0XHQub24oJ2NsaWNrLlNpZGVNZW51U3RydWN0dXJlJywgZXZlbnQgPT4ge1xuXHRcdFx0XHRcdGNvbnN0IGlzTWVudUl0ZW0gPSBldmVudC50YXJnZXQub2Zmc2V0UGFyZW50ICYmICQoZXZlbnQudGFyZ2V0Lm9mZnNldFBhcmVudCkuaGFzQ2xhc3MoJ01lbnVJdGVtJyk7XG5cblx0XHRcdFx0XHRpZiAoIWlzTWVudUl0ZW0pIHtcblx0XHRcdFx0XHRcdCRjb21wb25lbnQuZmluZCgnLlNpZGVNZW51X19NZW51SXRlbXMgLmFjdGl2ZScpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcblx0XHRcdFx0XHRcdCRjb21wb25lbnQuZmluZCgnLlNpZGVNZW51X19NZW51SXRlbXMgLnNob3cnKS5yZW1vdmVDbGFzcygnc2hvdycpO1xuXG5cdFx0XHRcdFx0XHQkKHdpbmRvdykub2ZmKCdjbGljay5TaWRlTWVudVN0cnVjdHVyZScpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSk7XG5cdFx0fVxuXG5cdFx0b25Db21wb25lbnRJbml0KCkge1xuXHRcdFx0dGhpcy5zZXRNYWluTWVudVdpZHRoKCk7XG5cblx0XHRcdHRoaXMuJGNvbXBvbmVudCA9ICQoYCMke3RoaXMub3B0aW9ucy53aWRnZXRJZH1gKTtcblx0XHRcdHRoaXMuJHRyaWdnZXIgPSB0aGlzLiRjb21wb25lbnQuZmluZCgnLlNpZGVNZW51X19UcmlnZ2VyJyk7XG5cdFx0XHR0aGlzLiRzaGllbGQgPSB0aGlzLiRjb21wb25lbnQuZmluZCgnLlNpZGVNZW51X19TaGllbGQnKTtcblx0XHRcdHRoaXMuJGNsb3NlQnV0dG9uID0gdGhpcy4kY29tcG9uZW50LmZpbmQoJy5TaWRlTWVudV9fTWVudUNsb3NlJyk7XG5cdFx0XHR0aGlzLiR0YWJJdGVtID0gdGhpcy4kY29tcG9uZW50LmZpbmQoJy5TaWRlTWVudV9fVGFiSXRlbXMgLk1lbnVJdGVtJyk7XG5cdFx0XHR0aGlzLiRtZW51SXRlbSA9IHRoaXMuJGNvbXBvbmVudC5maW5kKCcuU2lkZU1lbnVfX01lbnVJdGVtcyAuTWVudUl0ZW1fX0l0ZW1UaXRsZScpO1xuXHRcdFx0dGhpcy4kc3ViSXRlbSA9IHRoaXMuJGNvbXBvbmVudC5maW5kKCcuU2lkZU1lbnVfX01lbnVJdGVtcyAuTWVudUl0ZW1fc3ViSXRlbXMnKTtcblx0XHRcdHRoaXMuJGRlcGFydG1lbnQgPSB0aGlzLiRjb21wb25lbnQuZmluZCgnLlNpZGVNZW51X19UYWJzIC5EZXBhcnRtZW50TmFtZScpO1xuXG5cdFx0XHQvL3RoaXMuJHRyaWdnZXIuaGlkZSgpO1xuXHRcdFx0dGhpcy4kZGVwYXJ0bWVudC5oaWRlKCk7XG5cblx0XHRcdHRoaXMuJGlmcmFtZUNvbnRhaW5lciA9IHRoaXMuJGNvbXBvbmVudC5maW5kKCcuaWZyYW1lQ29udGFpbmVyJyk7XG5cdFx0XHR0aGlzLiRpZnJhbWVDb250YWluZXIuYXBwZW5kKCc8ZGl2IGNsYXNzPVwibGRzLXJpbmcgT0lcIj48ZGl2PjwvZGl2PjxkaXY+PC9kaXY+PGRpdj48L2Rpdj48ZGl2PjwvZGl2PjwvZGl2PicpO1xuXHRcdFx0dGhpcy4kaWZyYW1lQ29udGFpbmVyLmZpbmQoJ2lmcmFtZScpLmxvYWQoKCkgPT4ge1xuXHRcdFx0XHR0aGlzLiRpZnJhbWVDb250YWluZXIuZmluZCgnLmxkcy1yaW5nJykuZmFkZU91dCgpO1xuXG5cdFx0XHRcdGlmICghdGhpcy4kY29tcG9uZW50Lmhhc0NsYXNzKCdTaWRlTWVudS0tdGFic1RoZW1lJykpIHtcblx0XHRcdFx0XHQvL3RoaXMuJHRyaWdnZXIuc2hvdygpO1xuXHRcdFx0XHRcdHRoaXMuJGRlcGFydG1lbnQuc2hvdygpO1xuXHRcdFx0XHR9XG5cdFx0XHR9KTtcblxuXHRcdFx0dGhpcy4kdHJpZ2dlci5vbignY2xpY2snLCAoKSA9PiB0aGlzLm9wZW5DbG9zZU1lbnUodHJ1ZSkpO1xuXHRcdFx0dGhpcy4kc2hpZWxkLm9uKCdjbGljaycsICgpID0+IHRoaXMub3BlbkNsb3NlTWVudShmYWxzZSkpO1xuXHRcdFx0dGhpcy4kY2xvc2VCdXR0b24ub24oJ2NsaWNrJywgKCkgPT4gdGhpcy5vcGVuQ2xvc2VNZW51KGZhbHNlKSk7XG5cblx0XHRcdHRoaXMuJHRhYkl0ZW0ub24oJ2NsaWNrJywgZXZlbnQgPT4ge1xuXHRcdFx0XHRjb25zdCAkdGFyZ2V0ID0gJChldmVudC5jdXJyZW50VGFyZ2V0KTtcblx0XHRcdFx0Y29uc3QgJGxpbmsgPSAkdGFyZ2V0LmZpbmQoJy5NZW51SXRlbV9sYWJlbCBhJyk7XG5cblx0XHRcdFx0aWYgKCRsaW5rLmxlbmd0aCkgJGxpbmsuZ2V0KDApLmNsaWNrKCk7XG5cdFx0XHR9KTtcblxuXHRcdFx0dGhpcy4kbWVudUl0ZW0ub24oJ2NsaWNrJywgZXZlbnQgPT4ge1xuXHRcdFx0XHRjb25zdCBpc0ljb24gPSBldmVudC50YXJnZXQuY2xhc3NOYW1lID09PSAnaWNvbiBpY29uLWNoYW5nZWRvd24nO1xuXHRcdFx0XHRpZiAoZXZlbnQudGFyZ2V0ICE9PSBldmVudC5jdXJyZW50VGFyZ2V0ICYmICFpc0ljb24pIHJldHVybjtcblxuXHRcdFx0XHRjb25zdCAkdGFyZ2V0ID0gJChldmVudC5jdXJyZW50VGFyZ2V0KS5wYXJlbnQoKTtcblx0XHRcdFx0Y29uc3QgJHN1Ykl0ZW1zID0gJHRhcmdldC5maW5kKCcuTWVudUl0ZW1fc3ViSXRlbXMnKTtcblx0XHRcdFx0Y29uc3QgJGxpbmsgPSAkdGFyZ2V0LmZpbmQoJy5NZW51SXRlbV9sYWJlbCBhJyk7XG5cblx0XHRcdFx0aWYgKCRsaW5rLmxlbmd0aCkgJGxpbmsuZ2V0KDApLmNsaWNrKCk7XG5cblx0XHRcdFx0aWYgKCR0YXJnZXQuaGFzQ2xhc3MoJ2FjdGl2ZScpKSB7XG5cdFx0XHRcdFx0JHRhcmdldC5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XG5cdFx0XHRcdFx0JHN1Ykl0ZW1zLnJlbW92ZUNsYXNzKCdzaG93Jyk7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0dGhpcy4kY29tcG9uZW50XG5cdFx0XHRcdFx0XHQuZmluZCgnLlNpZGVNZW51X19NZW51SXRlbXMgLmFjdGl2ZScpXG5cdFx0XHRcdFx0XHQubm90KCR0YXJnZXQpXG5cdFx0XHRcdFx0XHQucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xuXG5cdFx0XHRcdFx0dGhpcy4kY29tcG9uZW50XG5cdFx0XHRcdFx0XHQuZmluZCgnLlNpZGVNZW51X19NZW51SXRlbXMgLnNob3cnKVxuXHRcdFx0XHRcdFx0Lm5vdCgkdGFyZ2V0KVxuXHRcdFx0XHRcdFx0LnJlbW92ZUNsYXNzKCdzaG93Jyk7XG5cblx0XHRcdFx0XHQkdGFyZ2V0LnRvZ2dsZUNsYXNzKCdhY3RpdmUnKTtcblx0XHRcdFx0XHQkc3ViSXRlbXMudG9nZ2xlQ2xhc3MoJ3Nob3cnKTtcblxuXHRcdFx0XHRcdGlmICh0aGlzLiRjb21wb25lbnQuaGFzQ2xhc3MoJ1NpZGVNZW51LS10YWJzVGhlbWUnKSkge1xuXHRcdFx0XHRcdFx0dGhpcy53aW5kb3dDbGljayh0aGlzLiRjb21wb25lbnQpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fSk7XG5cblx0XHRcdHRoaXMuJHN1Ykl0ZW0ub24oJ2NsaWNrJywgZXZlbnQgPT4gZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCkpO1xuXG5cdFx0XHR0aGlzLiRjb21wb25lbnRcblx0XHRcdFx0LmZpbmQoJy5TaWRlTWVudV9fVGFiSXRlbXMgPiBkaXY6ZW1wdHknKVxuXHRcdFx0XHQucGFyZW50KClcblx0XHRcdFx0LmhpZGUoKTtcblx0XHR9XG5cdH1cblxuXHRjb25zdCByZXNpemVUYWJzID0gKCRjb21wb25lbnQsICRtZW51VGFicywgaXNSZWN1cnNpdmUpID0+IHtcblx0XHRjb25zdCAkbWVudVRyaWdnZXIgPSAkY29tcG9uZW50LmZpbmQoJy5TaWRlTWVudV9fVHJpZ2dlcicpO1xuXHRcdGNvbnN0IGhlYWRlcldpZHRoID0gJGNvbXBvbmVudC5maW5kKCcuU2lkZU1lbnVfX0hlYWRlcicpLm91dGVyV2lkdGgoKTtcblx0XHRjb25zdCAkbWVudUl0ZW1zID0gJG1lbnVUYWJzLmZpbmQoJy5TaWRlTWVudV9fTWVudUl0ZW1zJyk7XG5cdFx0Y29uc3QgdGFic1dpZHRoID0gJG1lbnVJdGVtcy5sZW5ndGggPyAkbWVudUl0ZW1zLm91dGVyV2lkdGgoKSA6ICRtZW51VGFicy5vdXRlcldpZHRoKCk7XG5cblx0XHRjb25zdCBmaXhlZFZhbHVlID0gJCh3aW5kb3cucGFyZW50KS53aWR0aCgpIDwgMTAyNCA/IDE4MCA6IDE5Njtcblx0XHRsZXQgaGFzSXRlbVRvUmVtb3ZlID0gdHJ1ZTtcblxuXHRcdGlmICh0YWJzV2lkdGggPiAwICYmIHRhYnNXaWR0aCArIGZpeGVkVmFsdWUgPiBoZWFkZXJXaWR0aCAmJiBoYXNJdGVtVG9SZW1vdmUpIHtcblx0XHRcdGNvbnN0ICRtb3JlT3B0aW9ucyA9ICRjb21wb25lbnQuZmluZCgnLlNpZGVNZW51X19Db250ZW50Jyk7XG5cdFx0XHRjb25zdCAkbGFzdEl0ZW0gPSAkbWVudVRhYnNcblx0XHRcdFx0LmZpbmQoJy5TaWRlTWVudV9fTWVudUl0ZW1zIC5NZW51SXRlbScpXG5cdFx0XHRcdC5sYXN0KClcblx0XHRcdFx0LmRldGFjaCgpO1xuXG5cdFx0XHRpZiAoISRtb3JlT3B0aW9ucy5maW5kKCcuU2lkZU1lbnVfX01lbnVJdGVtcycpLmxlbmd0aCkge1xuXHRcdFx0XHQkKCc8ZGl2IGNsYXNzPVwiU2lkZU1lbnVfX01lbnVJdGVtc1wiPjwvZGl2PicpLmFwcGVuZFRvKCRtb3JlT3B0aW9ucyk7XG5cdFx0XHR9XG5cblx0XHRcdGNvbnN0ICRtZW51SXRlbXMgPSAkbW9yZU9wdGlvbnMuZmluZCgnLlNpZGVNZW51X19NZW51SXRlbXMnKTtcblx0XHRcdCRsYXN0SXRlbS5wcmVwZW5kVG8oJG1lbnVJdGVtcyk7XG5cblx0XHRcdCRtZW51VHJpZ2dlci5jc3MoJ3Zpc2liaWxpdHknLCAndmlzaWJsZScpO1xuXG5cdFx0XHRoYXNJdGVtVG9SZW1vdmUgPSAhISRsYXN0SXRlbS5sZW5ndGg7XG5cblx0XHRcdHJlc2l6ZVRhYnMoJGNvbXBvbmVudCwgJG1lbnVUYWJzLCAhISRsYXN0SXRlbS5sZW5ndGgpO1xuXHRcdH0gZWxzZSBpZiAoIWlzUmVjdXJzaXZlKSB7XG5cdFx0XHRjb25zdCAkbWVudUl0ZW1zID0gJG1lbnVUYWJzLmZpbmQoJy5TaWRlTWVudV9fTWVudUl0ZW1zJyk7XG5cdFx0XHRsZXQgJGZpcnN0SXRlbSA9ICRjb21wb25lbnQuZmluZCgnLlNpZGVNZW51X19Db250ZW50IC5TaWRlTWVudV9fTWVudUl0ZW1zIC5NZW51SXRlbScpLmZpcnN0KCk7XG5cblx0XHRcdGNvbnN0IG5ld0xpbmtXaWR0aCA9IDE0MCAqIDEuMTYgKyAxNjsgLy8gRm9udC1zaXplICsgcGFkZGluZyBiZXR3ZWVuIGl0ZW1zIChnYXApXG5cdFx0XHRjb25zdCBuZXdJdGVtc1dpZHRoID0gbmV3TGlua1dpZHRoICsgJG1lbnVJdGVtcy5vdXRlcldpZHRoKCk7XG5cblx0XHRcdGlmIChuZXdJdGVtc1dpZHRoICsgZml4ZWRWYWx1ZSA8IGhlYWRlcldpZHRoKSB7XG5cdFx0XHRcdCRmaXJzdEl0ZW0gPSAkZmlyc3RJdGVtLmRldGFjaCgpO1xuXHRcdFx0XHQkZmlyc3RJdGVtLmFwcGVuZFRvKCRtZW51VGFicy5maW5kKCcuU2lkZU1lbnVfX01lbnVJdGVtcycpKTtcblxuXHRcdFx0XHRpZiAoJGNvbXBvbmVudC5maW5kKCcuU2lkZU1lbnVfX0NvbnRlbnQgLlNpZGVNZW51X19NZW51SXRlbXMgLk1lbnVJdGVtJykubGVuZ3RoKSB7XG5cdFx0XHRcdFx0cmVzaXplVGFicygkY29tcG9uZW50LCAkbWVudVRhYnMpO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdCRtZW51VHJpZ2dlci5jc3MoJ3Zpc2liaWxpdHknLCAnaGlkZGVuJyk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdH07XG5cblx0Y29uc3Qgc2V0VGFic1RoZW1lID0gKCkgPT4ge1xuXHRcdCQodG9wLmRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigpIHtcblx0XHRcdCQoJy5TaWRlTWVudScsIHdpbmRvdy5wYXJlbnQuZG9jdW1lbnQpLmFkZENsYXNzKCdTaWRlTWVudS0tdGFic1RoZW1lJyk7XG5cblx0XHRcdGNvbnN0ICRjb21wb25lbnQgPSAkKCcuU2lkZU1lbnUnLCB3aW5kb3cucGFyZW50LmRvY3VtZW50KTtcblx0XHRcdGNvbnN0ICRtZW51VGFicyA9ICRjb21wb25lbnQuZmluZCgnLlNpZGVNZW51X19UYWJzJyk7XG5cblx0XHRcdCRtZW51VGFicy5maW5kKCc+IGRpdjplbXB0eScpLmhpZGUoKTtcblxuXHRcdFx0Y29uc3QgJGl0ZW1zID0gJGNvbXBvbmVudC5maW5kKCcuU2lkZU1lbnVfX01lbnVJdGVtcycpLmRldGFjaCgpO1xuXHRcdFx0JGl0ZW1zLmFwcGVuZFRvKCRtZW51VGFicyk7XG5cblx0XHRcdCQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRyZXNpemVUYWJzKCRjb21wb25lbnQsICRtZW51VGFicywgdHJ1ZSk7XG5cdFx0XHR9KTtcblxuXHRcdFx0JCh3aW5kb3cucGFyZW50KS5yZXNpemUoZnVuY3Rpb24oKSB7XG5cdFx0XHRcdGNsZWFyVGltZW91dCh3aW5kb3cucmVzaXplZEZpbmlzaGVkKTtcblx0XHRcdFx0d2luZG93LnJlc2l6ZWRGaW5pc2hlZCA9IHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG5cdFx0XHRcdFx0cmVzaXplVGFicygkY29tcG9uZW50LCAkbWVudVRhYnMpO1xuXHRcdFx0XHR9LCAyNTApO1xuXHRcdFx0fSk7XG5cdFx0fSk7XG5cdH07XG5cblx0Y29uc3QgY3JlYXRlID0gY29uZmlnID0+ICh3aW5kb3dbY29uZmlnLndpZGdldElkXSA9IG5ldyBTaWRlTWVudShjb25maWcpKTtcblxuXHRTYXBwaGlyZVdpZGdldHMuU2lkZU1lbnUgPSB7IGNyZWF0ZSwgc2V0VGFic1RoZW1lIH07XG59KShqUXVlcnksIHdpbmRvdywgU2FwcGhpcmVXaWRnZXRzKTtcbiIsIi8qIENvbXBvbmVudCBJU2lkZWJhciAqL1xuKGZ1bmN0aW9uKCQsIHdpbmRvdywgZG9jdW1lbnQsIFNhcHBoaXJlV2lkZ2V0cykge1xuXHR2YXIgY3JlYXRlID0gZnVuY3Rpb24oY29uZmlnKSB7XG5cdFx0d2luZG93W2NvbmZpZy53aWRnZXRJZF0gPSBuZXcgU2lkZWJhcihjb25maWcpO1xuXHRcdFNhcHBoaXJlV2lkZ2V0cy5TaWRlYmFyLndpZGdldElkID0gY29uZmlnLndpZGdldElkO1xuXHR9O1xuXG5cdHZhciBjbG9zZSA9IGZ1bmN0aW9uKCkge1xuXHRcdHdpbmRvd1tTYXBwaGlyZVdpZGdldHMuU2lkZWJhci53aWRnZXRJZF0uY2xvc2UoKTtcblx0fTtcblxuXHR2YXIgU2lkZWJhciA9IGZ1bmN0aW9uKGNvbmZpZykge1xuXHRcdHZhciBfdGhpcyA9IHRoaXM7XG5cdFx0dGhpcy5pc0V4cGFuZGFibGUgPSBjb25maWcuaXNFeHBhbmRhYmxlO1xuXHRcdHRoaXMuJHdpZGdldCA9ICQoJyMnICsgY29uZmlnLndpZGdldElkKTtcblx0XHR0aGlzLiRzaWRlYmFyID0gdGhpcy4kd2lkZ2V0LmZpbmQoJy5JU2lkZWJhcicpO1xuXHRcdHRoaXMuJHNpZGViYXJNZW51ID0gdGhpcy4kd2lkZ2V0LmZpbmQoJy5JU2lkZWJhci1tZW51Jyk7XG5cdFx0dGhpcy4kc2lkZWJhck1lbnVJdGVtID0gdGhpcy4kd2lkZ2V0LmZpbmQoJy5TaWRlYmFyTWVudUl0ZW0nKTtcblx0XHR0aGlzLiRzaWRlYmFyU2hpZWxkID0gdGhpcy4kd2lkZ2V0LmZpbmQoJy5JU2lkZWJhci1zaGllbGQnKTtcblx0XHR0aGlzLiRzaWRlYmFyQ29udGVudCA9IHRoaXMuJHdpZGdldC5maW5kKCcuSVNpZGViYXItY29udGVudCcpO1xuXHRcdHRoaXMuJHNpZGViYXJDb250ZW50LmZpbmQoJz4gZGl2JykuZWFjaChmdW5jdGlvbigpIHtcblx0XHRcdGlmICgkKHRoaXMpLmhhc0NsYXNzKCdQSCcpICYmICQodGhpcykudGV4dCgpID09PSAnJykge1xuXHRcdFx0XHQkKHRoaXMpLnJlbW92ZSgpO1xuXHRcdFx0fVxuXHRcdH0pO1xuXHRcdHRoaXMuYXR0YWNoRXZlbnRzKCk7XG5cdFx0aWYgKCF0aGlzLmlzRXhwYW5kYWJsZSkge1xuXHRcdFx0dGhpcy5vcGVuTWVudUl0ZW0oMCk7XG5cdFx0fVxuXHRcdCQoZnVuY3Rpb24oKSB7XG5cdFx0XHRpZiAoIWNvbmZpZy5pc0V4cGFuZGFibGUpIHtcblx0XHRcdFx0JChgLiR7Y29uZmlnLnNlbGVjdGVkVGFifWApLmNsaWNrKCk7XG5cdFx0XHR9XG5cblx0XHRcdHdpbmRvdy5wYXJlbnQuJCgnLkxheW91dEJhc2UtaWZyYW1lc2lkZWJhciAubGRzLXJpbmcnKS5mYWRlT3V0KCk7XG5cblx0XHRcdGlmICghdGhpcy5pc0V4cGFuZGFibGUpIHtcblx0XHRcdFx0JCgnaW5wdXRbdHlwZT1cInRleHRcIl06dmlzaWJsZScpXG5cdFx0XHRcdFx0LmVxKDApXG5cdFx0XHRcdFx0LmZvY3VzKCk7XG5cdFx0XHR9XG5cdFx0fSk7XG5cblx0XHQkKHdpbmRvdykudW5sb2FkKGZ1bmN0aW9uKCkge1xuXHRcdFx0d2luZG93LnBhcmVudC4kKCcuTGF5b3V0QmFzZS1pZnJhbWVzaWRlYmFyIC5sZHMtcmluZycpLmZhZGVPdXQoKTtcblx0XHR9KTtcblx0fTtcblxuXHRTaWRlYmFyLnByb3RvdHlwZS5hdHRhY2hFdmVudHMgPSBmdW5jdGlvbigpIHtcblx0XHR2YXIgX3RoaXMgPSB0aGlzO1xuXHRcdHRoaXMuJHNpZGViYXJNZW51Lm9uKCdjbGljaycsIGZ1bmN0aW9uKGV2dCkge1xuXHRcdFx0ZXZ0LnN0b3BQcm9wYWdhdGlvbigpO1xuXHRcdFx0aWYgKCFfdGhpcy4kc2lkZWJhci5oYXNDbGFzcygnb3BlbicpKSB7XG5cdFx0XHRcdF90aGlzLm9wZW5NZW51SXRlbSgwKTtcblx0XHRcdH1cblx0XHR9KTtcblx0XHR0aGlzLiRzaWRlYmFyTWVudUl0ZW0ub24oJ2NsaWNrJywgZnVuY3Rpb24oKSB7XG5cdFx0XHR2YXIgc2VsZWN0ZWRQb3NpdGlvbiA9ICQodGhpcykuaW5kZXgoKTtcblx0XHRcdF90aGlzLm9wZW5NZW51SXRlbShzZWxlY3RlZFBvc2l0aW9uKTtcblx0XHR9KTtcblx0XHR0aGlzLiRzaWRlYmFyU2hpZWxkLm9uKCdjbGljaycsIGZ1bmN0aW9uKCkge1xuXHRcdFx0X3RoaXMuY2xvc2UoKTtcblx0XHR9KTtcblx0XHR0aGlzLiRzaWRlYmFyLm9uKCdjbGljaycsICcuU2VhcmNoU2lkZUJhckZpZWxkcyAuQnV0dG9uR3JvdXBfYnV0dG9uOmZpcnN0LWNoaWxkJywgZnVuY3Rpb24oKSB7XG5cdFx0XHRfdGhpcy4kc2lkZWJhclxuXHRcdFx0XHQuZmluZCgnLkZpZWxkc1NsaWRlcicpXG5cdFx0XHRcdC5hZGRDbGFzcygnVGFiMScpXG5cdFx0XHRcdC5yZW1vdmVDbGFzcygnVGFiMicpO1xuXHRcdFx0X3RoaXMuc2V0RmllbGRGb2N1cyhfdGhpcy4kc2lkZWJhckNvbnRlbnQuZmluZCgnLlRleHRJbnB1dDp2aXNpYmxlJykuZXEoMCkpO1xuXHRcdH0pO1xuXHRcdHRoaXMuJHNpZGViYXIub24oJ2NsaWNrJywgJy5TZWFyY2hTaWRlQmFyRmllbGRzIC5CdXR0b25Hcm91cF9idXR0b246bGFzdC1jaGlsZCcsIGZ1bmN0aW9uKCkge1xuXHRcdFx0X3RoaXMuJHNpZGViYXJcblx0XHRcdFx0LmZpbmQoJy5GaWVsZHNTbGlkZXInKVxuXHRcdFx0XHQuYWRkQ2xhc3MoJ1RhYjInKVxuXHRcdFx0XHQucmVtb3ZlQ2xhc3MoJ1RhYjEnKTtcblx0XHRcdF90aGlzLnNldEZpZWxkRm9jdXMoX3RoaXMuJHNpZGViYXJDb250ZW50LmZpbmQoJy5UZXh0SW5wdXQ6dmlzaWJsZScpLmVxKDApKTtcblx0XHR9KTtcblx0fTtcblxuXHRTaWRlYmFyLnByb3RvdHlwZS5vcGVuTWVudUl0ZW0gPSBmdW5jdGlvbihzZWxlY3RlZFBvc2l0aW9uKSB7XG5cdFx0dmFyIF90aGlzID0gdGhpcztcblx0XHR0aGlzLiRzaWRlYmFyXG5cdFx0XHQuZmluZCgnLlNpZGViYXJNZW51SXRlbScpXG5cdFx0XHQucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpXG5cdFx0XHQuZXEoc2VsZWN0ZWRQb3NpdGlvbilcblx0XHRcdC5hZGRDbGFzcygnYWN0aXZlJyk7XG5cdFx0dGhpcy4kc2lkZWJhclxuXHRcdFx0LmZpbmQoJy5JU2lkZWJhci1jb250ZW50ID4gLklTaWRlYmFyLWNvbnRlbnQtcGFuZWwnKVxuXHRcdFx0LmhpZGUoKVxuXHRcdFx0LmVxKHNlbGVjdGVkUG9zaXRpb24pXG5cdFx0XHQuc2hvdygpO1xuXHRcdHRoaXMuJHNpZGViYXIuYWRkQ2xhc3MoJ29wZW4nKTtcblx0XHRpZiAod2luZG93LnBhcmVudC5sZW5ndGggJiYgdGhpcy5pc0V4cGFuZGFibGUpIHtcblx0XHRcdHdpbmRvdy5wYXJlbnQuU2FwcGhpcmVXaWRnZXRzLkxheW91dEJhc2Uub3BlblNpZGViYXJJZnJhbWUoMCk7XG5cdFx0fVxuXHRcdGlmICh0aGlzLiRzaWRlYmFyQ29udGVudC5maW5kKCcuVGV4dElucHV0OnZpc2libGUnKS5sZW5ndGggPiAwKSB7XG5cdFx0XHR0aGlzLnNldEZpZWxkRm9jdXModGhpcy4kc2lkZWJhckNvbnRlbnQuZmluZCgnLlRleHRJbnB1dDp2aXNpYmxlJykuZXEoMCkpO1xuXHRcdH1cblx0XHRpZiAod2luZG93LnBhcmVudC4kKCcuc2VsZWN0Mi1jb250YWluZXItLW9wZW4nKS5sZW5ndGgpIHtcblx0XHRcdHdpbmRvdy5wYXJlbnQuJCgnLnNlbGVjdDItaGlkZGVuLWFjY2Vzc2libGUnKS5zZWxlY3QyKCdjbG9zZScpO1xuXHRcdH1cblx0fTtcblxuXHRTaWRlYmFyLnByb3RvdHlwZS5zZXRGaWVsZEZvY3VzID0gZnVuY3Rpb24oJGlucHV0KSB7XG5cdFx0d2luZG93LnNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG5cdFx0XHQkaW5wdXQuY2xpY2soKS5zZWxlY3QoKTtcblx0XHR9LCAyNTApO1xuXHR9O1xuXG5cdFNpZGViYXIucHJvdG90eXBlLmNsb3NlID0gZnVuY3Rpb24oKSB7XG5cdFx0dmFyIF90aGlzID0gdGhpcztcblx0XHRpZiAod2luZG93LnBhcmVudC5sZW5ndGgpIHtcblx0XHRcdHdpbmRvdy5wYXJlbnQuU2FwcGhpcmVXaWRnZXRzLkxheW91dEJhc2UuY2xvc2VTaWRlYmFySWZyYW1lKDApO1xuXHRcdH1cblx0XHRpZiAodGhpcy5pc0V4cGFuZGFibGUpIHtcblx0XHRcdHRoaXMuJHNpZGViYXIucmVtb3ZlQ2xhc3MoJ29wZW4nKTtcblx0XHRcdHRoaXMuJHNpZGViYXIuZmluZCgnLlNpZGViYXJNZW51SXRlbScpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcblx0XHRcdHRoaXMuJHNpZGViYXIuZmluZCgnLklTaWRlYmFyLWNvbnRlbnQgPiAuSVNpZGViYXItY29udGVudC1wYW5lbCcpLmhpZGUoKTtcblx0XHR9XG5cdH07XG5cblx0U2FwcGhpcmVXaWRnZXRzLlNpZGViYXIgPSB7XG5cdFx0Y3JlYXRlOiBjcmVhdGUsXG5cdFx0Y2xvc2U6IGNsb3NlLFxuXHR9O1xufSkoalF1ZXJ5LCB3aW5kb3csIGRvY3VtZW50LCBTYXBwaGlyZVdpZGdldHMpO1xuIiwiU2FwcGhpcmVXaWRnZXRzLlNtYWxsQm94U2VsZWN0YWJsZSA9IGZ1bmN0aW9uKGNvbmZpZykge1xuXHRjb25zdCAkY29tcG9uZW50ID0gJChgIyR7Y29uZmlnLndpZGdldElkfWApO1xuXG5cdGlmIChjb25maWcuc2VsZWN0T25DbGljaykge1xuXHRcdCRjb21wb25lbnQuY2xpY2soKCkgPT4ge1xuXHRcdFx0Y29uc3QgJGxpc3QgPSAkKCcuU21hbGxCb3hMaXN0IC5TbWFsbEJveFNlbGVjdGFibGUnKS5ub3QoJGNvbXBvbmVudCk7XG5cblx0XHRcdCRsaXN0LnJlbW92ZUNsYXNzKCdTbWFsbEJveFNlbGVjdGFibGUtLXNlbGVjdGVkJyk7XG5cdFx0XHQkY29tcG9uZW50LnRvZ2dsZUNsYXNzKCdTbWFsbEJveFNlbGVjdGFibGUtLXNlbGVjdGVkJyk7XG5cdFx0fSk7XG5cdH1cbn07XG4iLCIvKiBDb21wb25lbnQgU3Bpbm5lckhvcml6b250YWwgKi9cclxuU2FwcGhpcmVXaWRnZXRzLlNwaW5uZXJIb3Jpem9udGFsID0ge1xyXG5cdGNyZWF0ZTogY29uZmlnID0+IHtcclxuXHRcdGNvbnN0ICRpbnB1dCA9ICQoYCMke2NvbmZpZy53aWRnZXRJZH0gaW5wdXRgKTtcclxuXHRcdGNvbnN0ICRwbHVzID0gJChgIyR7Y29uZmlnLndpZGdldElkfSBhLlBsdXNgKTtcclxuXHRcdGNvbnN0ICRtaW51cyA9ICQoYCMke2NvbmZpZy53aWRnZXRJZH0gYS5NaW51c2ApO1xyXG5cclxuXHRcdGxldCB2YWwgPSAkaW5wdXQudmFsKCk7XHJcblxyXG5cdFx0aWYgKHZhbCA8PSArY29uZmlnLm1pblZhbHVlKSB7XHJcblx0XHRcdCRtaW51cy5hdHRyKCdkaXNhYmxlZCcsICdkaXNhYmxlZCcpO1xyXG5cdFx0fSBlbHNlIGlmICh2YWwgPj0gK2NvbmZpZy5tYXhWYWx1ZSkge1xyXG5cdFx0XHQkcGx1cy5hdHRyKCdkaXNhYmxlZCcsICdkaXNhYmxlZCcpO1xyXG5cdFx0fVxyXG5cclxuXHRcdCRpbnB1dC5vbignY2hhbmdlJywgZnVuY3Rpb24oKSB7XHJcblx0XHRcdHZhbCA9IE1hdGguYWJzKHBhcnNlSW50KHRoaXMudmFsdWUsIDEwKSB8fCArY29uZmlnLm1pblZhbHVlKTtcclxuXHRcdFx0dGhpcy52YWx1ZSA9IHZhbCA+ICtjb25maWcubWF4VmFsdWUgPyArY29uZmlnLm1heFZhbHVlIDogdmFsIDwgK2NvbmZpZy5taW5WYWx1ZSA/ICtjb25maWcubWluVmFsdWUgOiB2YWw7XHJcblxyXG5cdFx0XHRpZiAodmFsIDw9ICtjb25maWcubWluVmFsdWUpICRtaW51cy5hdHRyKCdkaXNhYmxlZCcsICdkaXNhYmxlZCcpO1xyXG5cdFx0XHRlbHNlICRtaW51cy5yZW1vdmVBdHRyKCdkaXNhYmxlZCcpO1xyXG5cclxuXHRcdFx0aWYgKHZhbCA+PSArY29uZmlnLm1heFZhbHVlKSAkcGx1cy5hdHRyKCdkaXNhYmxlZCcsICdkaXNhYmxlZCcpO1xyXG5cdFx0XHRlbHNlICRwbHVzLnJlbW92ZUF0dHIoJ2Rpc2FibGVkJyk7XHJcblx0XHR9KTtcclxuXHR9LFxyXG5cdGluY3JlbWVudDogZnVuY3Rpb24oZWxlbWVudElkLCBtaW5WYWx1ZSwgbWF4VmFsdWUsIHRyaWdnZXJPbkNoYW5nZSkge1xyXG5cdFx0dmFyIF9lbGVtZW50ID0gJChlbGVtZW50SWQpXHJcblx0XHRcdC5maW5kKCdpbnB1dFt0eXBlPVwibnVtYmVyXCJdJylcclxuXHRcdFx0LmZpcnN0KCk7XHJcblx0XHRpZiAoX2VsZW1lbnQudmFsKCkgPT0gdW5kZWZpbmVkIHx8IF9lbGVtZW50LnZhbCgpID09ICcnIHx8IGlzTmFOKHBhcnNlRmxvYXQoX2VsZW1lbnQudmFsKCkpKSkge1xyXG5cdFx0XHRfZWxlbWVudC52YWwobWluVmFsdWUpO1xyXG5cdFx0XHRpZiAodHJpZ2dlck9uQ2hhbmdlKSB7XHJcblx0XHRcdFx0X2VsZW1lbnQudHJpZ2dlcignY2hhbmdlJyk7XHJcblx0XHRcdH1cclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdGlmIChwYXJzZUZsb2F0KF9lbGVtZW50LnZhbCgpKSA8IG1heFZhbHVlKSB7XHJcblx0XHRcdFx0X2VsZW1lbnQudmFsKHBhcnNlRmxvYXQoX2VsZW1lbnQudmFsKCkpICsgMSk7XHJcblx0XHRcdFx0aWYgKHRyaWdnZXJPbkNoYW5nZSkge1xyXG5cdFx0XHRcdFx0X2VsZW1lbnQudHJpZ2dlcignY2hhbmdlJyk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdCQoZWxlbWVudElkKVxyXG5cdFx0XHRcdFx0LmZpbmQoJ2EuTWludXMnKVxyXG5cdFx0XHRcdFx0LnJlbW92ZUF0dHIoJ2Rpc2FibGVkJyk7XHJcblx0XHRcdH1cclxuXHRcdFx0aWYgKHBhcnNlRmxvYXQoX2VsZW1lbnQudmFsKCkpID49IG1heFZhbHVlKSB7XHJcblx0XHRcdFx0JChlbGVtZW50SWQpXHJcblx0XHRcdFx0XHQuZmluZCgnYS5QbHVzJylcclxuXHRcdFx0XHRcdC5hdHRyKCdkaXNhYmxlZCcsICdkaXNhYmxlZCcpO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fSxcclxuXHRkZWNyZW1lbnQ6IGZ1bmN0aW9uKGVsZW1lbnRJZCwgbWluVmFsdWUsIHRyaWdnZXJPbkNoYW5nZSkge1xyXG5cdFx0dmFyIF9lbGVtZW50ID0gJChlbGVtZW50SWQpXHJcblx0XHRcdC5maW5kKCdpbnB1dFt0eXBlPVwibnVtYmVyXCJdJylcclxuXHRcdFx0LmZpcnN0KCk7XHJcblx0XHRpZiAoX2VsZW1lbnQudmFsKCkgPT0gdW5kZWZpbmVkIHx8IF9lbGVtZW50LnZhbCgpID09ICcnIHx8IGlzTmFOKHBhcnNlRmxvYXQoX2VsZW1lbnQudmFsKCkpKSkge1xyXG5cdFx0XHRfZWxlbWVudC52YWwobWluVmFsdWUpO1xyXG5cdFx0XHRpZiAodHJpZ2dlck9uQ2hhbmdlKSB7XHJcblx0XHRcdFx0X2VsZW1lbnQudHJpZ2dlcignY2hhbmdlJyk7XHJcblx0XHRcdH1cclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdGlmIChwYXJzZUZsb2F0KF9lbGVtZW50LnZhbCgpKSA+IG1pblZhbHVlKSB7XHJcblx0XHRcdFx0X2VsZW1lbnQudmFsKHBhcnNlRmxvYXQoX2VsZW1lbnQudmFsKCkpIC0gMSk7XHJcblx0XHRcdFx0aWYgKHRyaWdnZXJPbkNoYW5nZSkge1xyXG5cdFx0XHRcdFx0X2VsZW1lbnQudHJpZ2dlcignY2hhbmdlJyk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdCQoZWxlbWVudElkKVxyXG5cdFx0XHRcdFx0LmZpbmQoJ2EuUGx1cycpXHJcblx0XHRcdFx0XHQucmVtb3ZlQXR0cignZGlzYWJsZWQnKTtcclxuXHRcdFx0fVxyXG5cdFx0XHRpZiAocGFyc2VGbG9hdChfZWxlbWVudC52YWwoKSkgPD0gbWluVmFsdWUpIHtcclxuXHRcdFx0XHQkKGVsZW1lbnRJZClcclxuXHRcdFx0XHRcdC5maW5kKCdhLk1pbnVzJylcclxuXHRcdFx0XHRcdC5hdHRyKCdkaXNhYmxlZCcsICdkaXNhYmxlZCcpO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fSxcclxufTtcclxuIiwiLyogQ29tcG9uZW50IFNwaW5uZXJWZXJ0aWNhbCAqL1xuKGZ1bmN0aW9uKCQsIHdpbmRvdywgZG9jdW1lbnQsIFNhcHBoaXJlV2lkZ2V0cykge1xuXHRjb25zdCBjcmVhdGUgPSBmdW5jdGlvbihjb25maWcpIHtcblx0XHQkKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigpIHtcblx0XHRcdGNvbnN0ICRtaW51c1ZlcnRpY2FsID0gJChgIyR7Y29uZmlnLndpZGdldElkfWApLmZpbmQoJy5NaW51c1ZlcnRpY2FsJyk7XG5cdFx0XHRjb25zdCAkaW5wdXRTcGlubmVyID0gJChgIyR7Y29uZmlnLndpZGdldElkfSAuU3Bpbm5lcklucHV0VmVydGljYWwgaW5wdXRgKTtcblxuXHRcdFx0JGlucHV0U3Bpbm5lci5vbignYmx1ciBrZXl1cCBpbnB1dCcsIGZ1bmN0aW9uKGV2ZW50KSB7XG5cdFx0XHRcdGNvbnN0IGN1cnJlbnRJbnB1dFZhbHVlID0gJGlucHV0U3Bpbm5lci52YWwoKTtcblxuXHRcdFx0XHRpZiAoY29uZmlnLm51bWJlckxpc3QgJiYgZXZlbnQudHlwZSA9PT0gJ2JsdXInKSB7XG5cdFx0XHRcdFx0Y29uc3QgaW5wdXRWYWx1ZUludCA9IHBhcnNlSW50KGN1cnJlbnRJbnB1dFZhbHVlKTtcblx0XHRcdFx0XHRjb25zdCBhcnJheVRvU3BpbiA9IGNvbmZpZy5udW1iZXJMaXN0O1xuXHRcdFx0XHRcdGNvbnN0ICRlcnJvck1lc3NhZ2UgPSAkKGAjJHtjb25maWcud2lkZ2V0SWR9IC5TcGlubmVyRXJyb3JNZXNzYWdlYCk7XG5cblx0XHRcdFx0XHQkZXJyb3JNZXNzYWdlLmNzcygnZGlzcGxheScsIGFycmF5VG9TcGluLmluZGV4T2YoaW5wdXRWYWx1ZUludCkgPT09IC0xID8gJ2Jsb2NrJyA6ICdub25lJyk7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRpZiAoY3VycmVudElucHV0VmFsdWUgPCBjb25maWcubWluVmFsdWUpICRtaW51c1ZlcnRpY2FsLmFkZENsYXNzKCdEaXNhYmxlZFNwaW4nKTtcblx0XHRcdFx0ZWxzZSAkbWludXNWZXJ0aWNhbC5yZW1vdmVDbGFzcygnRGlzYWJsZWRTcGluJyk7XG5cdFx0XHR9KTtcblxuXHRcdFx0aWYgKCRpbnB1dFNwaW5uZXIudmFsKCkgPD0gY29uZmlnLm1pblZhbHVlKSB7XG5cdFx0XHRcdCRtaW51c1ZlcnRpY2FsLmFkZENsYXNzKCdEaXNhYmxlZFNwaW4nKTtcblx0XHRcdH1cblxuXHRcdFx0aWYgKGNvbmZpZy5udW1iZXJMaXN0ICYmICRpbnB1dFNwaW5uZXIudmFsKCkgPT09ICcnKSB7XG5cdFx0XHRcdGxldCBjdXJyZW50TnVtYmVyID0gMDtcblx0XHRcdFx0Y29uc3QgYXJyYXlUb1NwaW4gPSBjb25maWcubnVtYmVyTGlzdC5zcGxpdCgnLCcpO1xuXG5cdFx0XHRcdCRpbnB1dFNwaW5uZXIudmFsKGFycmF5VG9TcGluW2N1cnJlbnROdW1iZXJdKTtcblx0XHRcdFx0JG1pbnVzVmVydGljYWwuYWRkQ2xhc3MoJ0Rpc2FibGVkU3BpbicpO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiAoY29uZmlnLmlzQ3Vyc29yT25Gb2N1cykge1xuXHRcdFx0XHQkKCdib2R5Jykub24oJ2ZvY3VzJywgYCMke2NvbmZpZy5pbnB1dElEfSBpbnB1dGAsIGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRcdHZhciB0aGF0ID0gdGhpcztcblxuXHRcdFx0XHRcdHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG5cdFx0XHRcdFx0XHR0aGF0LmZvY3VzKCk7XG5cdFx0XHRcdFx0XHR2YXIgdmFsID0gdGhhdC52YWx1ZTtcblx0XHRcdFx0XHRcdHRoYXQudmFsdWUgPSAnJztcblx0XHRcdFx0XHRcdHRoYXQudmFsdWUgPSB2YWw7XG5cdFx0XHRcdFx0fSwgMSk7XG5cdFx0XHRcdH0pO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiAoY29uZmlnLmlzSW5wdXRFbXB0eSkge1xuXHRcdFx0XHQkaW5wdXRTcGlubmVyLmF0dHIoJ3ZhbHVlJywgJycpO1xuXHRcdFx0XHQkbWludXNWZXJ0aWNhbC5hZGRDbGFzcygnRGlzYWJsZWRTcGluJyk7XG5cdFx0XHR9XG5cdFx0fSk7XG5cdH07XG5cblx0Y29uc3QgaW5jcmVtZW50ID0gKGVsZW1lbnRJZCwgbWluVmFsdWUsIG1heFZhbHVlLCB0cmlnZ2VyT25DaGFuZ2UsIHRyaWdnZXJPbklucHV0LCBsaXN0VG9zcGluID0gW10pID0+IHtcblx0XHRjb25zdCAkc3Bpbm5lciA9ICQoZWxlbWVudElkKTtcblx0XHRsZXQgJGlucHV0ID0gJHNwaW5uZXIuZmluZCgnaW5wdXRbdHlwZT1cInRleHRcIl0sIGlucHV0W3R5cGU9XCJudW1iZXJcIl0nKS5maXJzdCgpO1xuXG5cdFx0dmFyIGZvcmNlSW50ZWdlciA9ICQoZWxlbWVudElkKS5kYXRhKCdmb3JjZWludGVnZXInKSA9PT0gJ1RydWUnID8gdHJ1ZSA6IGZhbHNlO1xuXHRcdHZhciBjdXJyZW50VmFsdWUgPSBwYXJzZUZsb2F0KCRpbnB1dC52YWwoKSk7XG5cdFx0dmFyIGluY3JlbWVudFVuaXQgPSAxO1xuXHRcdHZhciBpc0RlY2ltYWxzID0gY3VycmVudFZhbHVlICUgMSAhPSAwO1xuXHRcdHZhciBhcnJheXRvc3BpbiA9IGxpc3RUb3NwaW47XG5cblx0XHRjb25zdCAkbWludXNWZXJ0aWNhbCA9ICQoZWxlbWVudElkKS5maW5kKCcuTWludXNWZXJ0aWNhbCcpO1xuXHRcdGNvbnN0ICRwbHVzVmVydGljYWwgPSAkKGVsZW1lbnRJZCkuZmluZCgnLlBsdXNWZXJ0aWNhbCcpO1xuXG5cdFx0JG1pbnVzVmVydGljYWwucmVtb3ZlQ2xhc3MoJ0Rpc2FibGVkU3BpbicpO1xuXG5cdFx0aWYgKGFycmF5dG9zcGluLmxlbmd0aCkge1xuXHRcdFx0dmFyIGN1cnJlbnRQb3NpdGlvbiA9IGFycmF5dG9zcGluLmluZGV4T2YocGFyc2VJbnQoJGlucHV0LnZhbCgpKSk7XG5cdFx0XHR2YXIgbWF4aW11bVRvU3BpbiA9IGFycmF5dG9zcGluLmxhc3RJbmRleE9mKGFycmF5dG9zcGluLnNsaWNlKC0xKVswXSk7XG5cblx0XHRcdCRwbHVzVmVydGljYWwucmVtb3ZlQ2xhc3MoJ0Rpc2FibGVkU3BpbicpO1xuXG5cdFx0XHRpZiAobWF4aW11bVRvU3BpbiAtIDEgPT09IGN1cnJlbnRQb3NpdGlvbikge1xuXHRcdFx0XHRjdXJyZW50UG9zaXRpb24gPSBjdXJyZW50UG9zaXRpb24gKyAxO1xuXHRcdFx0XHQkaW5wdXQudmFsKGFycmF5dG9zcGluW2N1cnJlbnRQb3NpdGlvbl0pO1xuXG5cdFx0XHRcdGlmICh0cmlnZ2VyT25DaGFuZ2UpICRpbnB1dC50cmlnZ2VyKCdjaGFuZ2UnKTtcblx0XHRcdFx0aWYgKHRyaWdnZXJPbklucHV0KSAkaW5wdXQudHJpZ2dlcignaW5wdXQnKTtcblx0XHRcdH0gZWxzZSBpZiAobWF4aW11bVRvU3BpbiA9PT0gY3VycmVudFBvc2l0aW9uKSB7XG5cdFx0XHRcdGN1cnJlbnRQb3NpdGlvbiA9IGN1cnJlbnRQb3NpdGlvbiAlIG1heGltdW1Ub1NwaW47XG5cdFx0XHRcdCRpbnB1dC52YWwoYXJyYXl0b3NwaW5bY3VycmVudFBvc2l0aW9uXSk7XG5cblx0XHRcdFx0dHJpZ2dlckV2ZW50cygkaW5wdXQsIHRyaWdnZXJPbkNoYW5nZSwgdHJpZ2dlck9uSW5wdXQpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0Y3VycmVudFBvc2l0aW9uID0gKGN1cnJlbnRQb3NpdGlvbiArIDEpICUgbWF4aW11bVRvU3Bpbjtcblx0XHRcdFx0JGlucHV0LnZhbChhcnJheXRvc3BpbltjdXJyZW50UG9zaXRpb25dKTtcblxuXHRcdFx0XHR0cmlnZ2VyRXZlbnRzKCRpbnB1dCwgdHJpZ2dlck9uQ2hhbmdlLCB0cmlnZ2VyT25JbnB1dCk7XG5cdFx0XHR9XG5cblx0XHRcdGlmIChjdXJyZW50UG9zaXRpb24gPT09IG1heGltdW1Ub1NwaW4pICRwbHVzVmVydGljYWwuYWRkQ2xhc3MoJ0Rpc2FibGVkU3BpbicpO1xuXHRcdFx0aWYgKGN1cnJlbnRQb3NpdGlvbiA9PT0gMCkgJG1pbnVzVmVydGljYWwuYWRkQ2xhc3MoJ0Rpc2FibGVkU3BpbicpO1xuXG5cdFx0XHQkc3Bpbm5lci5maW5kKCcuU3Bpbm5lckVycm9yTWVzc2FnZScpLmNzcygnZGlzcGxheScsICdub25lJyk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdGlmIChwYXJzZUZsb2F0KGN1cnJlbnRWYWx1ZSkgPCBtaW5WYWx1ZSkge1xuXHRcdFx0XHQkbWludXNWZXJ0aWNhbC5hZGRDbGFzcygnRGlzYWJsZWRTcGluJyk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHQkbWludXNWZXJ0aWNhbC5yZW1vdmVDbGFzcygnRGlzYWJsZWRTcGluJyk7XG5cdFx0XHR9XG5cblx0XHRcdGlmICghZm9yY2VJbnRlZ2VyICYmIGlzRGVjaW1hbHMpIGluY3JlbWVudFVuaXQgPSBwYXJzZUZsb2F0KDAuMSk7XG5cblx0XHRcdGlmIChjdXJyZW50VmFsdWUgPT09IHVuZGVmaW5lZCB8fCBjdXJyZW50VmFsdWUgPT09ICcnIHx8IGlzTmFOKHBhcnNlRmxvYXQoY3VycmVudFZhbHVlKSkpIHtcblx0XHRcdFx0JGlucHV0LnZhbChtaW5WYWx1ZSk7XG5cblx0XHRcdFx0dHJpZ2dlckV2ZW50cygkaW5wdXQsIHRyaWdnZXJPbkNoYW5nZSwgdHJpZ2dlck9uSW5wdXQpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0aWYgKHBhcnNlRmxvYXQoY3VycmVudFZhbHVlKSA8IG1heFZhbHVlKSB7XG5cdFx0XHRcdFx0aWYgKGN1cnJlbnRWYWx1ZSA9PT0gMCAmJiAhZm9yY2VJbnRlZ2VyKSBpbmNyZW1lbnRVbml0ID0gcGFyc2VGbG9hdCgwLjEpO1xuXG5cdFx0XHRcdFx0JGlucHV0LnZhbChwYXJzZUZsb2F0KChjdXJyZW50VmFsdWUgKyBpbmNyZW1lbnRVbml0KS50b0ZpeGVkKDEpKSk7XG5cblx0XHRcdFx0XHR0cmlnZ2VyRXZlbnRzKCRpbnB1dCwgdHJpZ2dlck9uQ2hhbmdlLCB0cmlnZ2VyT25JbnB1dCk7XG5cblx0XHRcdFx0XHQkbWludXNWZXJ0aWNhbC5yZW1vdmVBdHRyKCdkaXNhYmxlZCcpO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdCRwbHVzVmVydGljYWwuYXR0cignZGlzYWJsZWQnLCAnZGlzYWJsZWQnKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHRjaGVja0Rpc2FibGVkU3RhdHVzKGVsZW1lbnRJZCwgcGFyc2VGbG9hdCgkaW5wdXQudmFsKCkpLCBtaW5WYWx1ZSwgbWF4VmFsdWUpO1xuXHRcdH1cblx0fTtcblxuXHRjb25zdCBkZWNyZW1lbnQgPSAoZWxlbWVudElkLCBtaW5WYWx1ZSwgbWF4VmFsdWUsIHRyaWdnZXJPbkNoYW5nZSwgdHJpZ2dlck9uSW5wdXQsIGxpc3RUb3NwaW4gPSBbXSkgPT4ge1xuXHRcdGNvbnN0ICRzcGlubmVyID0gJChlbGVtZW50SWQpO1xuXHRcdGNvbnN0ICRpbnB1dCA9ICRzcGlubmVyLmZpbmQoJ2lucHV0W3R5cGU9XCJ0ZXh0XCJdLCBpbnB1dFt0eXBlPVwibnVtYmVyXCJdJykuZmlyc3QoKTtcblxuXHRcdGxldCBmb3JjZUludGVnZXIgPSAkKGVsZW1lbnRJZCkuZGF0YSgnZm9yY2VpbnRlZ2VyJykgPT09ICdUcnVlJyA/IHRydWUgOiBmYWxzZTtcblx0XHRsZXQgY3VycmVudFZhbHVlID0gcGFyc2VGbG9hdCgkaW5wdXQudmFsKCkpO1xuXHRcdGxldCBpbmNyZW1lbnRVbml0ID0gMTtcblx0XHRsZXQgaXNEZWNpbWFscyA9IGN1cnJlbnRWYWx1ZSAlIDEgIT0gMDtcblx0XHRsZXQgYXJyYXl0b3NwaW4gPSBsaXN0VG9zcGluO1xuXG5cdFx0Y29uc3QgJG1pbnVzVmVydGljYWwgPSAkKGVsZW1lbnRJZCkuZmluZCgnLk1pbnVzVmVydGljYWwnKTtcblx0XHRjb25zdCAkcGx1c1ZlcnRpY2FsID0gJChlbGVtZW50SWQpLmZpbmQoJy5QbHVzVmVydGljYWwnKTtcblxuXHRcdGlmIChhcnJheXRvc3Bpbi5sZW5ndGgpIHtcblx0XHRcdGxldCBjdXJyZW50UG9zaXRpb24gPSBhcnJheXRvc3Bpbi5pbmRleE9mKHBhcnNlSW50KCRpbnB1dC52YWwoKSkpO1xuXHRcdFx0bGV0IG1heGltdW1Ub1NwaW4gPSBhcnJheXRvc3Bpbi5sYXN0SW5kZXhPZihhcnJheXRvc3Bpbi5zbGljZSgtMSlbMF0pO1xuXG5cdFx0XHRpZiAoY3VycmVudFBvc2l0aW9uID09IDApIHtcblx0XHRcdFx0JGlucHV0LnZhbChhcnJheXRvc3BpblttYXhpbXVtVG9TcGluXSk7XG5cblx0XHRcdFx0aWYgKHRyaWdnZXJPbkNoYW5nZSkgJGlucHV0LnRyaWdnZXIoJ2NoYW5nZScpO1xuXHRcdFx0XHRpZiAodHJpZ2dlck9uSW5wdXQpICRpbnB1dC50cmlnZ2VyKCdpbnB1dCcpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0Y3VycmVudFBvc2l0aW9uID0gKGN1cnJlbnRQb3NpdGlvbiAtIDEpICUgbWF4aW11bVRvU3Bpbjtcblx0XHRcdFx0JGlucHV0LnZhbChhcnJheXRvc3BpbltjdXJyZW50UG9zaXRpb25dKTtcblxuXHRcdFx0XHR0cmlnZ2VyRXZlbnRzKCRpbnB1dCwgdHJpZ2dlck9uQ2hhbmdlLCB0cmlnZ2VyT25JbnB1dCk7XG5cdFx0XHR9XG5cblx0XHRcdCRzcGlubmVyLmZpbmQoJy5TcGlubmVyRXJyb3JNZXNzYWdlJykuY3NzKCdkaXNwbGF5JywgJ25vbmUnKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0aWYgKCFmb3JjZUludGVnZXIgJiYgaXNEZWNpbWFscykgaW5jcmVtZW50VW5pdCA9IHBhcnNlRmxvYXQoMC4xKTtcblxuXHRcdFx0aWYgKGN1cnJlbnRWYWx1ZSA9PT0gdW5kZWZpbmVkIHx8IGN1cnJlbnRWYWx1ZSA9PT0gJycgfHwgaXNOYU4ocGFyc2VGbG9hdChjdXJyZW50VmFsdWUpKSkge1xuXHRcdFx0XHQkaW5wdXQudmFsKG1pblZhbHVlKTtcblxuXHRcdFx0XHR0cmlnZ2VyRXZlbnRzKCRpbnB1dCwgdHJpZ2dlck9uQ2hhbmdlLCB0cmlnZ2VyT25JbnB1dCk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRpZiAocGFyc2VGbG9hdChjdXJyZW50VmFsdWUpID4gbWluVmFsdWUpIHtcblx0XHRcdFx0XHRpZiAoY3VycmVudFZhbHVlID09PSAxICYmICFmb3JjZUludGVnZXIpIGluY3JlbWVudFVuaXQgPSBwYXJzZUZsb2F0KDAuMSk7XG5cblx0XHRcdFx0XHQkaW5wdXQudmFsKHBhcnNlRmxvYXQoKGN1cnJlbnRWYWx1ZSAtIGluY3JlbWVudFVuaXQpLnRvRml4ZWQoMSkpKTtcblxuXHRcdFx0XHRcdHRyaWdnZXJFdmVudHMoJGlucHV0LCB0cmlnZ2VyT25DaGFuZ2UsIHRyaWdnZXJPbklucHV0KTtcblxuXHRcdFx0XHRcdCRwbHVzVmVydGljYWwucmVtb3ZlQXR0cignZGlzYWJsZWQnKTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHQkbWludXNWZXJ0aWNhbC5hdHRyKCdkaXNhYmxlZCcsICdkaXNhYmxlZCcpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdGNoZWNrRGlzYWJsZWRTdGF0dXMoZWxlbWVudElkLCBwYXJzZUZsb2F0KCRpbnB1dC52YWwoKSksIG1pblZhbHVlLCBtYXhWYWx1ZSk7XG5cdFx0fVxuXHR9O1xuXG5cdGNvbnN0IHRyaWdnZXJFdmVudHMgPSAoaW5wdXQsIHRyaWdnZXJPbkNoYW5nZSwgdHJpZ2dlck9uSW5wdXQpID0+IHtcblx0XHRpZiAodHJpZ2dlck9uQ2hhbmdlKSBpbnB1dC50cmlnZ2VyKCdjaGFuZ2UnKTtcblx0XHRpZiAodHJpZ2dlck9uSW5wdXQpIGlucHV0LnRyaWdnZXIoJ2lucHV0Jyk7XG5cdH07XG5cblx0Y29uc3QgY2hlY2tEaXNhYmxlZFN0YXR1cyA9IChlbGVtZW50SWQsIHZhbHVlVG9DaGVjaywgbWluVmFsdWUsIG1heFZhbHVlKSA9PiB7XG5cdFx0aWYgKHZhbHVlVG9DaGVjayA8PSBtaW5WYWx1ZSkge1xuXHRcdFx0JChlbGVtZW50SWQpXG5cdFx0XHRcdC5maW5kKCdhLk1pbnVzVmVydGljYWwnKVxuXHRcdFx0XHQuYXR0cignZGlzYWJsZWQnLCAnZGlzYWJsZWQnKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0JChlbGVtZW50SWQpXG5cdFx0XHRcdC5maW5kKCdhLk1pbnVzVmVydGljYWwnKVxuXHRcdFx0XHQucmVtb3ZlQXR0cignZGlzYWJsZWQnKTtcblx0XHR9XG5cdFx0aWYgKHZhbHVlVG9DaGVjayA+PSBtYXhWYWx1ZSkge1xuXHRcdFx0JChlbGVtZW50SWQpXG5cdFx0XHRcdC5maW5kKCdhLlBsdXNWZXJ0aWNhbCcpXG5cdFx0XHRcdC5hdHRyKCdkaXNhYmxlZCcsICdkaXNhYmxlZCcpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHQkKGVsZW1lbnRJZClcblx0XHRcdFx0LmZpbmQoJ2EuUGx1c1ZlcnRpY2FsJylcblx0XHRcdFx0LnJlbW92ZUF0dHIoJ2Rpc2FibGVkJyk7XG5cdFx0fVxuXHR9O1xuXG5cdFNhcHBoaXJlV2lkZ2V0cy5TcGlubmVyVmVydGljYWwgPSB7XG5cdFx0Y3JlYXRlLFxuXHRcdGluY3JlbWVudCxcblx0XHRkZWNyZW1lbnQsXG5cdH07XG59KShqUXVlcnksIHdpbmRvdywgZG9jdW1lbnQsIFNhcHBoaXJlV2lkZ2V0cyk7XG4iLCIvKiBDb21wb25lbnQgU3BsaXRCdXR0b24gKi9cclxuKGZ1bmN0aW9uKCQsIHdpbmRvdywgZG9jdW1lbnQsIFNhcHBoaXJlV2lkZ2V0cykge1xyXG5cdHZhciBjcmVhdGUgPSBmdW5jdGlvbihjb25maWcpIHtcclxuXHRcdHdpbmRvd1tjb25maWcud2lkZ2V0SWRdID0gbmV3IFNwbGl0QnV0dG9uKGNvbmZpZyk7XHJcblx0fTtcclxuXHJcblx0dmFyIFNwbGl0QnV0dG9uID0gZnVuY3Rpb24oY29uZmlnKSB7XHJcblx0XHR2YXIgX3RoaXMgPSB0aGlzO1xyXG5cdFx0dGhpcy5jb25maWcgPSBjb25maWc7XHJcblx0XHR0aGlzLiR3aWRnZXQgPSAkKCcjJyArIHRoaXMuY29uZmlnLndpZGdldElkKTtcclxuXHRcdHRoaXMuJGJ1dHRvbiA9IHRoaXMuJHdpZGdldC5maW5kKCcuU3BsaXRCdXR0b24tYnV0dG9uJyk7XHJcblx0XHR0aGlzLiRidXR0b25MaW5rID0gdGhpcy4kYnV0dG9uLmZpbmQoJz4gYScpO1xyXG5cdFx0dGhpcy4kdHJpZ2dlciA9IHRoaXMuJHdpZGdldC5maW5kKCcuU3BsaXRCdXR0b24tdHJpZ2dlcicpO1xyXG5cdFx0dGhpcy4kYWN0aW9ucyA9IHRoaXMuJHdpZGdldC5maW5kKCcuU3BsaXRCdXR0b24tYWN0aW9ucycpO1xyXG5cdFx0aWYgKCEhdGhpcy4kYWN0aW9ucy50ZXh0KCkpIHtcclxuXHRcdFx0dGhpcy4kd2lkZ2V0LmZpbmQoJz4gLlNwbGl0QnV0dG9uJykuYWRkQ2xhc3MoJ2hhc1RyaWdnZXInKTtcclxuXHRcdFx0dGhpcy5idWlsZEFjdGlvbnNUcmlnZ2VyKCk7XHJcblx0XHR9XHJcblx0fTtcclxuXHJcblx0U3BsaXRCdXR0b24ucHJvdG90eXBlLmJ1aWxkQWN0aW9uc1RyaWdnZXIgPSBmdW5jdGlvbigpIHtcclxuXHRcdHZhciBfdGhpcyA9IHRoaXM7XHJcblx0XHR2YXIgY2xhc3NMaXN0ID0gdGhpcy4kYnV0dG9uTGlua1swXS5jbGFzc0xpc3QudmFsdWU7XHJcblx0XHR0aGlzLiR0cmlnZ2VyLmFkZENsYXNzKGNsYXNzTGlzdCk7XHJcblx0XHQkKGZ1bmN0aW9uKCkge1xyXG5cdFx0XHQvLyBpbnNpZGUgYSBkb2N1bWVudCByZWFkeSBkdWUgdG8gc2FwcGhpcmUgcG9wdXAgYmluZGVkIGV2ZW50c1xyXG5cdFx0XHRpZiAoIV90aGlzLiR0cmlnZ2VyLmhhc0NsYXNzKCd0b29sdGlwc3RlcmVkJykpIHtcclxuXHRcdFx0XHRfdGhpcy4kdHJpZ2dlci50b29sdGlwc3Rlcih7XHJcblx0XHRcdFx0XHRhcnJvdzogdHJ1ZSxcclxuXHRcdFx0XHRcdGNvbnRlbnQ6ICQoJzxzZWN0aW9uLz4nKS5hcHBlbmQoX3RoaXMuJGFjdGlvbnMuY2xvbmUodHJ1ZSkpLFxyXG5cdFx0XHRcdFx0dHJpZ2dlcjogX3RoaXMuY29uZmlnLnRyaWdnZXJFdmVudCxcclxuXHRcdFx0XHRcdHBvc2l0aW9uOiBfdGhpcy5jb25maWcucG9zaXRpb24sXHJcblx0XHRcdFx0XHRtYXhXaWR0aDogX3RoaXMuY29uZmlnLm1heFdpZHRoLFxyXG5cdFx0XHRcdFx0dGhlbWU6ICd0b29sdGlwc3Rlci1zcGxpdGJ1dHRvbiBQYWRkaW5nLScgKyBfdGhpcy5jb25maWcucGFkZGluZyxcclxuXHRcdFx0XHR9KTtcclxuXHRcdFx0XHRfdGhpcy4kYWN0aW9ucy5yZW1vdmUoKTtcclxuXHRcdFx0fVxyXG5cdFx0fSk7XHJcblx0fTtcclxuXHJcblx0U2FwcGhpcmVXaWRnZXRzLlNwbGl0QnV0dG9uID0ge1xyXG5cdFx0Y3JlYXRlOiBjcmVhdGUsXHJcblx0fTtcclxufSkoalF1ZXJ5LCB3aW5kb3csIGRvY3VtZW50LCBTYXBwaGlyZVdpZGdldHMpO1xyXG4iLCJ2YXIgbWlsaXNlY29uZHBhc3NlZCA9IDA7XHJcbnZhciBzdG9wdGltZXIgPSB0cnVlO1xyXG52YXIgbXlUaW1vdXQgID0gbnVsbDtcclxuXHJcbmZ1bmN0aW9uIG9uS2V5ZG93bkZ1bmN0aW9uKCkge1xyXG4gICAgbWlsaXNlY29uZHBhc3NlZCA9IDA7XHJcbiAgXHJcbiAgICBzdG9wdGltZXI9dHJ1ZTtcclxuICAgIGNsZWFySW50ZXJ2YWwobXlUaW1vdXQpO1xyXG4gICAgbXlUaW1vdXQgPSBudWxsO1xyXG4gIH07XHJcbiAgXHJcbiAgZnVuY3Rpb24gb25LZXlVcEZ1bmN0aW9uKGVsZW1lbnRUb0NsaWNrKSB7XHJcbiAgc3RvcHRpbWVyID0gZmFsc2U7XHJcbiAgXHJcbiAgaWYobWlsaXNlY29uZHBhc3NlZCA9PSAwICYmIG15VGltb3V0PT1udWxsKXtcclxuICAgICAgbXlUaW1vdXQgPSBzZXRJbnRlcnZhbChcclxuICAgICAgICBmdW5jdGlvbigpIHtcclxuICAgICAgICAgIG1pbGlzZWNvbmRwYXNzZWQrPTEwMDtcclxuICAgICAgICAgXHJcbiAgICAgICAgICBpZiAobWlsaXNlY29uZHBhc3NlZCA+PSA0MDAgJiYgc3RvcHRpbWVyPT1mYWxzZSkge1xyXG4gICAgICAgICAgICBtaWxpc2Vjb25kcGFzc2VkID0gMDtcclxuICAgICAgICAgICAgc3RvcHRpbWVyPXRydWU7XHJcbiAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwobXlUaW1vdXQpO1xyXG4gICAgICAgICAgICBteVRpbW91dCA9IG51bGw7XHJcbiAgICAgICAgICAgIGVsZW1lbnRUb0NsaWNrLmNsaWNrKCk7XHJcbiAgICAgICAgICBcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGVsc2V7XHJcbiAgICAgICAgICAgIGlmKHN0b3B0aW1lcj09dHJ1ZSl7XHJcbiAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwobXlUaW1vdXQpO1xyXG4gICAgICAgICAgICBteVRpbW91dCA9IG51bGw7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9LCAxMDApO1xyXG4gICAgICAgIGlmKHN0b3B0aW1lcj09dHJ1ZSl7XHJcbiAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwobXlUaW1vdXQpO1xyXG4gICAgICAgICAgICBteVRpbW91dCA9IG51bGw7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgZWxzZXtcclxuICAgICAgICBpZihzdG9wdGltZXI9PXRydWUpe1xyXG4gICAgICAgICAgICBjbGVhckludGVydmFsKG15VGltb3V0KTtcclxuICAgICAgICAgICAgbXlUaW1vdXQgPSBudWxsO1xyXG4gICAgICAgIH0gICBcclxuICAgIH1cclxufTtcclxuXHJcbmlmKHR5cGVvZihzc2RDb21wb25lbnQpID09PSAndW5kZWZpbmVkJykge1xyXG5cclxuICAgIHNzZENvbXBvbmVudCA9IHtcclxuICAgICAgICBsZW5ndGg6IDAsXHJcbiAgICAgICAgbnVtYmVyT2ZBY3RpdmU6IDAsXHJcbiAgICAgICAgaXNSVEw6IGZhbHNlLFxyXG4gICAgICAgIGlkOiAnJyxcclxuICAgICAgICB0b0Rlc3Ryb3k6IGZhbHNlLFxyXG4gICAgICAgIG9uQmx1ckRlc3Ryb3k6IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICBpZiAoc3NkQ29tcG9uZW50LmlkICE9ICcnKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgX3NzZENvbXBvbmVudCA9ICQoJyMnICsgc3NkQ29tcG9uZW50LmlkKTtcclxuICAgICAgICAgICAgICAgIHZhciBfd3JhcHBlciA9ICQoJ1tkYXRhLXNzZC1wbGFjZWhvbGRlcj0nICsgc3NkQ29tcG9uZW50LmlkICsgJ10nKTtcclxuICAgICAgICAgICAgICAgIGlmIChzc2RDb21wb25lbnQudG9EZXN0cm95KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgX3dyYXBwZXIuZmluZCgnLlNTRExpc3RSZWZyZXNoSGFuZGxlcicpLmZpbmQoJ2EudG8tZGVzdHJveScpLmNsaWNrKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgX3dyYXBwZXIucmVtb3ZlKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgdmFyIF93cmFwcGVyID0gJCgnW2RhdGEtc3NkLXBsYWNlaG9sZGVyPScgKyBzc2RDb21wb25lbnQuaWQgKyAnXScpO1xyXG4gICAgICAgICAgICAgICAgICAgIF93cmFwcGVyLmZpbmQoJ2lucHV0JykudmFsKCcnKTtcclxuICAgICAgICAgICAgICAgICAgICBzc2RDb21wb25lbnQuYmx1cigpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICBmb2N1czogZnVuY3Rpb24oc3NkQ29tcG9uZW50V2lkZ2V0KSB7XHJcbiAgICAgICAgICAgIHZhciBfc3NkQ29tcG9uZW50V2lkZ2V0ID0gJChzc2RDb21wb25lbnRXaWRnZXQpLmNoaWxkcmVuKCdkaXYuU1NELVdyYXBwZXI6bm90KC5TZWxlY3RlZCknKTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGlmKCFfc3NkQ29tcG9uZW50V2lkZ2V0Lmxlbmd0aClcclxuICAgICAgICAgICAgICAgIHJldHVybjsgLy9JZiB0aGlzIFNTRC1XcmFwcGVyIGlzIGFscmVhZHkgU2VsZWN0ZWQsIHJldHVybi5cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGlmKHNzZENvbXBvbmVudC5udW1iZXJPZkFjdGl2ZSlcclxuICAgICAgICAgICAgICAgIHNzZENvbXBvbmVudC5ibHVyKCk7IC8vQmx1cnMgdGhlIG90aGVyIGZvY3VzZWQgU1NEJ3MuXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBzc2RDb21wb25lbnQubnVtYmVyT2ZBY3RpdmUrKztcclxuICAgICAgICAgICAgaWYoIV9zc2RDb21wb25lbnRXaWRnZXQucGFyZW50KCkuaGFzQ2xhc3MoJ1NTRFBvcHVwJykpe1xyXG4gICAgICAgICAgICAgICAgX3NzZENvbXBvbmVudFdpZGdldC5jaGlsZHJlbignLlNTRC1Db21wb25lbnQnKVxyXG4gICAgICAgICAgICAgICAgLmNzcyh7XHJcbiAgICAgICAgICAgICAgICAgICAgJ3dpZHRoJzogZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAkKHRoaXMpLm91dGVyV2lkdGgoKTtcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICd0b3AnOiBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkudG9wICsgJChkb2N1bWVudCkuc2Nyb2xsVG9wKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAnbGVmdCc6IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZihzc2RDb21wb25lbnQuaXNSVEwpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gJ2F1dG8nO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5sZWZ0O1xyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgJ3JpZ2h0JzogZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKHNzZENvbXBvbmVudC5pc1JUTClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAkKHdpbmRvdykud2lkdGgoKSAtICQodGhpcykub3V0ZXJXaWR0aCgpIC0gdGhpcy5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5sZWZ0O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gJ2F1dG8nO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAuY2hpbGRyZW4oJy5TU0QtQmFyJykuY3NzKHtcclxuICAgICAgICAgICAgICAgICAgICAnd2lkdGgnOiBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuICQodGhpcykub3V0ZXJXaWR0aCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAuc2libGluZ3MoJy5TU0QtTGlzdCcpLmF0dHIoJ2N1cnJlbnQtZm9jdXMnLCAwKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNle1xyXG4gICAgICAgICAgICAgICAgX3NzZENvbXBvbmVudFdpZGdldC5jaGlsZHJlbignLlNTRC1Db21wb25lbnQnKVxyXG4gICAgICAgICAgICAgICAgLmNzcyh7XHJcbiAgICAgICAgICAgICAgICAgICAgJ3dpZHRoJzogZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAkKHRoaXMpLm91dGVyV2lkdGgoKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgLmNoaWxkcmVuKCcuU1NELUJhcicpLmNzcyh7XHJcbiAgICAgICAgICAgICAgICAgICAgJ3dpZHRoJzogZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAkKHRoaXMpLm91dGVyV2lkdGgoKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgLnNpYmxpbmdzKCcuU1NELUxpc3QnKS5hdHRyKCdjdXJyZW50LWZvY3VzJywgMCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGlmKCFfc3NkQ29tcG9uZW50V2lkZ2V0LnBhcmVudCgpLmhhc0NsYXNzKCdTU0RQb3B1cCcpKXtcclxuICAgICAgICAgICAgICAgIF9zc2RDb21wb25lbnRXaWRnZXQuY2xvc2VzdCgnZm9ybScpLmFwcGVuZChfc3NkQ29tcG9uZW50V2lkZ2V0KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBfc3NkQ29tcG9uZW50V2lkZ2V0LmFkZENsYXNzKCdQb3NpdGlvbmVkJyk7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBzZXRUaW1lb3V0KFxyXG4gICAgICAgICAgICAgICAgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgX3NzZENvbXBvbmVudFdpZGdldC5hZGRDbGFzcygnU2VsZWN0ZWQnKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICwgMVxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICB9LFxyXG4gICAgICAgIFxyXG4gICAgICAgIFxyXG4gICAgICAgIFxyXG4gICAgICAgIGJsdXI6IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICBpZighc3NkQ29tcG9uZW50Lm51bWJlck9mQWN0aXZlKVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgdmFyIF93cmFwcGVyID0gJCgnZGl2LlNTRC1XcmFwcGVyLlBvc2l0aW9uZWQuU2VsZWN0ZWQnKTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIF93cmFwcGVyLmVhY2goZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgcGFyZW50ID0gJCgnIycgKyAkKHRoaXMpLmF0dHIoJ2RhdGEtc3NkLXBsYWNlaG9sZGVyJykpO1xyXG4gICAgICAgICAgICAgICAgcGFyZW50LmFwcGVuZCgkKHRoaXMpKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBfd3JhcHBlci5yZW1vdmVDbGFzcygnUG9zaXRpb25lZCcpXHJcbiAgICAgICAgICAgIC5jaGlsZHJlbignLlNTRC1Db21wb25lbnQnKVxyXG4gICAgICAgICAgICAgICAgLmNzcyh7XHJcbiAgICAgICAgICAgICAgICAgICAgJ3dpZHRoJzogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgJ3RvcCc6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgICdsZWZ0JzogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgJ3JpZ2h0JzogJydcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAucmVtb3ZlQ2xhc3MoJ1NlYXJjaGluZyBGaXhlZCBLZXlib2FyZE5hdicpXHJcbiAgICAgICAgICAgIC5jaGlsZHJlbignLlNTRC1CYXInKS5jc3Moe1xyXG4gICAgICAgICAgICAgICAgJ3dpZHRoJzogJydcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgc2V0VGltZW91dChcclxuICAgICAgICAgICAgICAgIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgICAgIF93cmFwcGVyLnJlbW92ZUNsYXNzKCdTZWxlY3RlZCcpXHJcbiAgICAgICAgICAgICAgICAgICAgLmZpbmQoJy5TU0QtQmFyJykuZWFjaChmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3NkQ29tcG9uZW50LnRhYnNDbGVhcih0aGlzKTtcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICwgMVxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHNzZENvbXBvbmVudC5udW1iZXJPZkFjdGl2ZS0tO1xyXG4gICAgICAgICAgICAkKFwiLlNTRF9MaXN0UmVjb3JkcyBzcGFuLCAuU1NEX0xpc3RMaW5lLlNob3dNb3JlLCAuU1NEX0RlbGV0ZU9uQmx1clwiKS5yZW1vdmUoKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIHJlc2l6ZTogZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgIGlmKCFzc2RDb21wb25lbnQubnVtYmVyT2ZBY3RpdmUpXHJcbiAgICAgICAgICAgICAgICByZXR1cm47IC8vSWYgdGhlcmUncyBubyBTU0QgYWN0aXZlLCB0aGVyZSdzIG5vIG5lZWQgdG8gcmVzaXplIGl0LlxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgdmFyIF9zc2RXcmFwcGVyID0gJCgnZGl2LlNTRC1XcmFwcGVyLlNlbGVjdGVkJykuZmlyc3QoKTtcclxuICAgICAgICAgICAgdmFyIF9zc2RDb21wb25lbnRXaWRnZXQgPSAkKCcjJyArIF9zc2RXcmFwcGVyLmF0dHIoJ2RhdGEtc3NkLXBsYWNlaG9sZGVyJykpWzBdO1xyXG4gICAgICAgICAgICB2YXIgX3NzZENvbXBvbmVudCA9IF9zc2RXcmFwcGVyLmNoaWxkcmVuKCcuU1NELUNvbXBvbmVudCcpO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgaWYgKHR5cGVvZiBfc3NkQ29tcG9uZW50V2lkZ2V0LmdldEJvdW5kaW5nQ2xpZW50UmVjdCAhPT0gXCJ1bmRlZmluZWRcIikge1xyXG4gICAgICAgICAgICAgICAgX3NzZENvbXBvbmVudC5jc3Moe1xyXG4gICAgICAgICAgICAgICAgICAgICd3aWR0aCc6IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gJChfc3NkQ29tcG9uZW50V2lkZ2V0KS53aWR0aCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0vKixcclxuICAgICAgICAgICAgICAgICAgICAndG9wJzogZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfc3NkQ29tcG9uZW50V2lkZ2V0LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLnRvcCArICQoZG9jdW1lbnQpLnNjcm9sbFRvcCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgJ2xlZnQnOiBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYoc3NkQ29tcG9uZW50LmlzUlRMKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuICdhdXRvJztcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF9zc2RDb21wb25lbnRXaWRnZXQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkubGVmdDtcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICdyaWdodCc6IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZihzc2RDb21wb25lbnQuaXNSVEwpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gJCh3aW5kb3cpLndpZHRoKCkgLSAkKF9zc2RDb21wb25lbnRXaWRnZXQpLm91dGVyV2lkdGgoKSAtIF9zc2RDb21wb25lbnRXaWRnZXQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkubGVmdDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuICdhdXRvJztcclxuICAgICAgICAgICAgICAgICAgICB9Ki9cclxuICAgICAgICAgICAgICAgIH0pLmNoaWxkcmVuKCcuU1NELUJhcicpLmNzcyh7XHJcbiAgICAgICAgICAgICAgICAgICAgJ3dpZHRoJzogZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAkKHRoaXMpLmNsb3Nlc3QoJy5TU0QtQ29tcG9uZW50JykuaW5uZXJXaWR0aCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICB0YWJTZWxlY3Q6IGZ1bmN0aW9uKHNzZENvbXBvbmVudFdpZGdldCwgc3NkQmFyLCBzZWxlY3RlZFRhYiwgaXNJbnB1dEV2ZW50KSB7XHJcbiAgICAgICAgICAgIHZhciBfc2VsZWN0ZWRUYWIgPSAkKHNlbGVjdGVkVGFiKTtcclxuXHJcbiAgICAgICAgICAgIGlmKHNzZENvbXBvbmVudC5udW1iZXJPZkFjdGl2ZSA9PSAwKSB7XHJcbiAgICAgICAgICAgICAgICBzc2RDb21wb25lbnQuZm9jdXMoc3NkQ29tcG9uZW50V2lkZ2V0KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgaWYoIV9zZWxlY3RlZFRhYi5pcygnLlNlbGVjdGVkJykpIHtcclxuICAgICAgICAgICAgICAgIHNzZENvbXBvbmVudC50YWJzQ2xlYXIoc3NkQmFyKTtcclxuICAgICAgICAgICAgICAgIF9zZWxlY3RlZFRhYi5hZGRDbGFzcygnU2VsZWN0ZWQnKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgc3NkQ29tcG9uZW50LmZvY3VzU2VsZWN0ZWRUYWIoc3NkQmFyLGlzSW5wdXRFdmVudCk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBmb2N1c1NlbGVjdGVkVGFiOiBmdW5jdGlvbihzc2RCYXIsaXNJbnB1dEV2ZW50KSB7XHJcbiAgICAgICAgICAgIC8vIFNlbGVjdGVkIHRhYiBpcyB0aGUgU2VhcmNoIGlucHV0P1xyXG4gICAgICAgICAgICBpZihzc2RCYXIuY2hpbGRyZW4oJy5TZWFyY2hJbnB1dC1Db250YWluZXIuU2VsZWN0ZWQnKS5sZW5ndGgpIHtcclxuICAgICAgICAgICAgICAgIHZhciBlbGVtZW50VG9DbGljayA9IHNzZEJhci5zaWJsaW5ncygnLlNTRExpc3RSZWZyZXNoSGFuZGxlcicpLmZpbmQoJ2E6bm90KC50by1kZXN0cm95KScpO1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBpZihpc0lucHV0RXZlbnQpe1xyXG4gICAgICAgICAgICAgICAgICAgIG9uS2V5VXBGdW5jdGlvbihlbGVtZW50VG9DbGljayk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNle1xyXG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnRUb0NsaWNrLmNsaWNrKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBzc2RCYXIuZmluZCgnLklucHV0UGxhY2Vob2xkZXIgaW5wdXRbdHlwZT1cInRleHRcIl06bm90KDpmb2N1cyknKS5maXJzdCgpLnNlbGVjdCgpLmZvY3VzKCk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIC8vIFNlbGVjdGVkIHRhYiBpcyB0aGUgU2hvcnQgbGlzdD9cclxuICAgICAgICAgICAgaWYoc3NkQmFyLmNoaWxkcmVuKCcuU2hvcnRMaXN0U2VsZWN0b3ItQ29udGFpbmVyLlNlbGVjdGVkJykubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICBzc2RCYXIuZmluZCgnLlNob3J0TGlzdFNlbGVjdG9yLUNvbnRhaW5lciA+IGEnKS5mb2N1cygpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICAvKlxyXG4gICAgICAgICAqIE1ldGhvZCBiZWluZyBjYWxsZWQgYnkgdXNlciBhY3Rpb24ganNfc3NkQ29tcG9uZW50X2ZvY3VzQ3VycmVudFJvd1xyXG4gICAgICAgICAqL1xyXG4gICAgICAgIGZvY3VzQ3VycmVudFJvdzogZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgIHZhciBfc3NkQ29tcG9uZW50ID0gJCgnZGl2LlNTRC1XcmFwcGVyLlNlbGVjdGVkIC5TU0QtQ29tcG9uZW50JykuZmlyc3QoKTtcclxuICAgICAgICAgICAgdmFyIF9zc2RMaXN0ID0gX3NzZENvbXBvbmVudC5maW5kKCcuU1NELUxpc3QnKTtcclxuICAgICAgICAgICAgdmFyIF9jdXJyZW50Rm9jdXMgPSBfc3NkTGlzdC5hdHRyKCdjdXJyZW50LWZvY3VzJyk7XHJcblxyXG4gICAgICAgICAgICBfc3NkQ29tcG9uZW50LmFkZENsYXNzKCdLZXlib2FyZE5hdicpO1xyXG4gICAgICAgICAgICBfc3NkTGlzdC5maW5kKCdzcGFuLlNTRF9MaXN0UmVjb3JkcyA+IHNwYW46bnRoLWNoaWxkKCcgKyBfY3VycmVudEZvY3VzICsgJyknKS5hZGRDbGFzcygnZm9jdXMnKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIHRhYnNDbGVhcjogZnVuY3Rpb24oc3NkQmFyKSB7XHJcbiAgICAgICAgICAgICQoc3NkQmFyKS5jaGlsZHJlbigpLnJlbW92ZUNsYXNzKCdTZWxlY3RlZCcpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgc2VhcmNoSWNvbjogZnVuY3Rpb24oZXZlbnQpIHtcclxuICAgICAgICAgICAgc3NkQ29tcG9uZW50LnRhYlNlbGVjdChldmVudC5kYXRhLnNzZENvbXBvbmVudFdpZGdldCwgZXZlbnQuZGF0YS5zc2RCYXIsICQoZXZlbnQuZGF0YS5zc2RCYXIpLmNoaWxkcmVuKCcuU2VhcmNoSW5wdXQtQ29udGFpbmVyJyksZmFsc2UpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgLypcclxuICAgICAgICAgKiBAbmFtZSBpbnB1dEV2ZW50XHJcbiAgICAgICAgICogQGRlc2NyaXB0aW9uIFxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIGlucHV0RXZlbnQ6IGZ1bmN0aW9uKGV2ZW50KSB7XHJcbiAgICAgICAgICAgIHZhciBfaW5wdXRDb250YWluZXIgPSAkKGV2ZW50LmRhdGEuaW5wdXQpLmNsb3Nlc3QoJy5TZWFyY2hJbnB1dC1Db250YWluZXInKTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHNzZENvbXBvbmVudC50YWJTZWxlY3QoZXZlbnQuZGF0YS5zc2RDb21wb25lbnRXaWRnZXQsIGV2ZW50LmRhdGEuc3NkQmFyLCBfaW5wdXRDb250YWluZXIsdHJ1ZSk7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBpZigkKGV2ZW50LmRhdGEuaW5wdXQpLnZhbCgpID09ICcnKSB7XHJcbiAgICAgICAgICAgICAgICBfaW5wdXRDb250YWluZXIuY2xvc2VzdCgnLlNTRC1Db21wb25lbnQnKS5yZW1vdmVDbGFzcygnU2VhcmNoaW5nJyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBfaW5wdXRDb250YWluZXIuY2xvc2VzdCgnLlNTRC1Db21wb25lbnQnKS5hZGRDbGFzcygnU2VhcmNoaW5nJyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIGtleWRvd25FdmVudDogZnVuY3Rpb24oZXZlbnQpIHtcclxuICAgICAgICAgICBvbktleWRvd25GdW5jdGlvbigpOyAgICAgICAgICBcclxuICAgICAgICAgIFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAga2V5Ym9hcmRIYW5kbGVyOiBmdW5jdGlvbihldmVudCkge1xyXG4gICAgICAgICAgICBpZihldmVudC5rZXkgPT0gXCJTaGlmdFwiIHx8IGV2ZW50LmtleSA9PSBcIkNvbnRyb2xcIilcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuXHJcbiAgICAgICAgICAgIHZhciBfc3NkQ29tcG9uZW50ID0gJCgnZGl2LlNTRC1XcmFwcGVyLlNlbGVjdGVkIC5TU0QtQ29tcG9uZW50JykuZmlyc3QoKTtcclxuICAgICAgICAgICAgdmFyIF9zc2RMaXN0ID0gX3NzZENvbXBvbmVudC5maW5kKCcuU1NELUxpc3QnKTtcclxuXHJcbiAgICAgICAgICAgIGlmKGV2ZW50LmtleSA9PSBcIkVudGVyXCIgJiYgX3NzZExpc3QuZmluZCgnLlNTRF9MaXN0TGluZS5TaG93TW9yZS5mb2N1cycpLmxlbmd0aClcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuXHJcbiAgICAgICAgICAgIGlmKGV2ZW50LmtleSA9PSBcIlRhYlwiKSB7XHJcbiAgICAgICAgICAgICAgICBfc3NkQ29tcG9uZW50LmFkZENsYXNzKCdLZXlib2FyZE5hdicpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBpZihldmVudC5rZXkgPT0gXCJBcnJvd1VwXCIgfHwgZXZlbnQua2V5ID09IFwiQXJyb3dEb3duXCIpIHtcclxuICAgICAgICAgICAgICAgIHZhciBfY3VycmVudEZvY3VzID0gX3NzZExpc3QuYXR0cignY3VycmVudC1mb2N1cycpO1xyXG4gICAgICAgICAgICAgICAgdmFyIF9zZWxlY3RlZEVsZW1lbnQgPSAkKG51bGwpO1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBpZihfc3NkTGlzdC5maW5kKCcuU1NEX0xpc3RMaW5lLlNob3dNb3JlLmZvY3VzJykubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgX3NlbGVjdGVkRWxlbWVudCA9IF9zc2RMaXN0LmZpbmQoJy5TU0RfTGlzdExpbmUuU2hvd01vcmUuZm9jdXMnKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2UgaWYoX2N1cnJlbnRGb2N1cyA+IDApIHtcclxuICAgICAgICAgICAgICAgICAgICBfc2VsZWN0ZWRFbGVtZW50ID0gX3NzZExpc3QuZmluZCgnc3Bhbi5TU0RfTGlzdFJlY29yZHMgPiBzcGFuOm50aC1jaGlsZCgnICsgX2N1cnJlbnRGb2N1cyArICcpJyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIF9zc2RDb21wb25lbnQuYWRkQ2xhc3MoJ0tleWJvYXJkTmF2JylcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgaWYoZXZlbnQua2V5ID09IFwiQXJyb3dVcFwiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYoX3NlbGVjdGVkRWxlbWVudC5sZW5ndGgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKF9zZWxlY3RlZEVsZW1lbnQuaXMoJy5TU0RfTGlzdExpbmUuU2hvd01vcmUuZm9jdXMnKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3NlbGVjdGVkRWxlbWVudC5yZW1vdmVDbGFzcygnZm9jdXMnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9zZWxlY3RlZEVsZW1lbnQgPSBfc3NkTGlzdC5maW5kKCdzcGFuLlNTRF9MaXN0UmVjb3JkcyA+IHNwYW46bGFzdC1jaGlsZCcpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3NlbGVjdGVkRWxlbWVudCA9IF9zZWxlY3RlZEVsZW1lbnQucmVtb3ZlQ2xhc3MoJ2ZvY3VzJykucHJldigpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBfY3VycmVudEZvY3VzLS07XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBfY3VycmVudEZvY3VzID0gX3NzZExpc3QuZmluZCgnc3Bhbi5TU0RfTGlzdFJlY29yZHMgPiBzcGFuJykubGVuZ3RoO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYoX3NzZExpc3QuZmluZCgnLlNTRF9MaXN0TGluZS5TaG93TW9yZScpLmxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3NlbGVjdGVkRWxlbWVudCA9IF9zc2RMaXN0LmZpbmQoJy5TU0RfTGlzdExpbmUuU2hvd01vcmUnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jdXJyZW50Rm9jdXMrKztcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9zZWxlY3RlZEVsZW1lbnQgPSBfc3NkTGlzdC5maW5kKCdzcGFuLlNTRF9MaXN0UmVjb3JkcyA+IHNwYW46bGFzdC1jaGlsZCcpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBpZihldmVudC5rZXkgPT0gXCJBcnJvd0Rvd25cIikge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmKF9zZWxlY3RlZEVsZW1lbnQubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZihfc2VsZWN0ZWRFbGVtZW50LmlzKCcuU1NEX0xpc3RMaW5lLlNob3dNb3JlLmZvY3VzJykpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9zZWxlY3RlZEVsZW1lbnQucmVtb3ZlQ2xhc3MoJ2ZvY3VzJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfc2VsZWN0ZWRFbGVtZW50ID0gJChudWxsKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9zZWxlY3RlZEVsZW1lbnQgPSBfc2VsZWN0ZWRFbGVtZW50LnJlbW92ZUNsYXNzKCdmb2N1cycpLm5leHQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYoIV9zZWxlY3RlZEVsZW1lbnQubGVuZ3RoICYmIF9zc2RMaXN0LmZpbmQoJy5TU0RfTGlzdExpbmUuU2hvd01vcmUnKS5sZW5ndGgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfc2VsZWN0ZWRFbGVtZW50ID0gX3NzZExpc3QuZmluZCgnLlNTRF9MaXN0TGluZS5TaG93TW9yZScpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBfY3VycmVudEZvY3VzKys7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBfc2VsZWN0ZWRFbGVtZW50ID0gX3NzZExpc3QuZmluZCgnc3Bhbi5TU0RfTGlzdFJlY29yZHMgPiBzcGFuOmZpcnN0LWNoaWxkJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jdXJyZW50Rm9jdXMgPSAxO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgX3NlbGVjdGVkRWxlbWVudC5hZGRDbGFzcygnZm9jdXMnKTtcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgaWYoIV9zZWxlY3RlZEVsZW1lbnQubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc3NkQ29tcG9uZW50LmZvY3VzU2VsZWN0ZWRUYWIoX3NzZENvbXBvbmVudC5maW5kKCcuU1NELUJhcicpLGZhbHNlKTtcclxuICAgICAgICAgICAgICAgICAgICBfY3VycmVudEZvY3VzID0gMDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKCFfc2VsZWN0ZWRFbGVtZW50LmZpbmQoJy5TU0RfTGlzdExpbmUuRGlzYWJsZWQnKS5sZW5ndGgpe1xyXG4gICAgICAgICAgICAgICAgICAgIF9zZWxlY3RlZEVsZW1lbnQuZmluZCgnLkV4cGFuZENvbnRyb2wgPiBhJykuZm9jdXMoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIF9zc2RMaXN0LmZpbmQoJ2EuT3RoZXJDb250cm9sTGluaycpLmZvY3VzKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIF9zc2RMaXN0LmF0dHIoJ2N1cnJlbnQtZm9jdXMnLCBfY3VycmVudEZvY3VzKTtcclxuXHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHNzZENvbXBvbmVudC5jbGVhcktleWJvYXJkTmF2U3RhdHVzKF9zc2RDb21wb25lbnQpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgY2xlYXJLZXlib2FyZE5hdlN0YXR1czogZnVuY3Rpb24oc3NkQ29tcG9uZW50KSB7XHJcbiAgICAgICAgICAgIHZhciBfc3NkQ29tcG9uZW50ID0gJChzc2RDb21wb25lbnQpO1xyXG4gICAgICAgICAgICB2YXIgX3NzZExpc3QgPSBfc3NkQ29tcG9uZW50LmZpbmQoJy5TU0QtTGlzdCcpO1xyXG5cclxuICAgICAgICAgICAgaWYoX3NzZExpc3QuZmluZCgnLlNTRF9MaXN0TGluZS5TaG93TW9yZS5mb2N1cycpLmxlbmd0aClcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuXHJcbiAgICAgICAgICAgIF9zc2RDb21wb25lbnQucmVtb3ZlQ2xhc3MoJ0tleWJvYXJkTmF2Jyk7XHJcbiAgICAgICAgICAgIF9zc2RMaXN0LmF0dHIoJ2N1cnJlbnQtZm9jdXMnLCAwKVxyXG4gICAgICAgICAgICAgICAgLmZpbmQoJ3NwYW4uU1NEX0xpc3RSZWNvcmRzID4gc3Bhbi5mb2N1cycpLnJlbW92ZUNsYXNzKCdmb2N1cycpXHJcbiAgICAgICAgICAgICAgICAuZmluZCgnLkV4cGFuZENvbnRyb2wgPiBhJykuYmx1cigpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgc2Nyb2xsSGFuZGxlcjogZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgIHZhciBfc3NkQ29tcG9uZW50ID0gJCgnZGl2LlNTRC1XcmFwcGVyLlNlbGVjdGVkIC5TU0QtQ29tcG9uZW50JykuZmlyc3QoKTtcclxuICAgICAgICAgICAgaWYoTWF0aC5tYXgoZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudFdpZHRoLCB3aW5kb3cuaW5uZXJXaWR0aCB8fCAwKSA8PSAxMDI0KXtcclxuICAgICAgICAgICAgICAgIGlmKF9zc2RDb21wb25lbnRbMF0uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkudG9wID4gJChcIi50b29sYmFyLXdyYXBwZXIuRml4ZWRcIikub3V0ZXJIZWlnaHQoKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIF9zc2RDb21wb25lbnQucmVtb3ZlQ2xhc3MoJ0ZpeGVkJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICAgICAgJCgnLlNTRC1XcmFwcGVyLlNlbGVjdGVkID4gLlNTRC1Db21wb25lbnQuRml4ZWQgPiAuU1NELUJhcicpLmNzcygndG9wJywgJChcIi50b29sYmFyLXdyYXBwZXIuRml4ZWRcIikub3V0ZXJIZWlnaHQoKSArICdweCcpOyBcclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICAvKk5vdCBNb2JpbGUgYXBwbHkgZml4ZWQgYmVoYXZpb3VyKi9cclxuICAgICAgICAgICAgICAgIGlmKF9zc2RDb21wb25lbnRbMF0uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkudG9wID4gKCQoJy5Ub3BQYXRpZW50SGVhZGVyJykub3V0ZXJIZWlnaHQodHJ1ZSkgKyAkKCcuSGVhZGVyJykub3V0ZXJIZWlnaHQodHJ1ZSkgKyAkKFwiLnRvb2xiYXItd3JhcHBlclwiKS5vdXRlckhlaWdodCgpKyAkKCcuQ1RUQVNMZXZlbEFzc2Vzc21lbnRNYWluQ29udGFpbmVyJykub3V0ZXJIZWlnaHQodHJ1ZSkgKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIF9zc2RDb21wb25lbnQucmVtb3ZlQ2xhc3MoJ0ZpeGVkJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICAgICAgJCgnLlNTRC1XcmFwcGVyLlNlbGVjdGVkID4gLlNTRC1Db21wb25lbnQuRml4ZWQgPiAuU1NELUJhcicpLmNzcygndG9wJywoJCgnLlRvcFBhdGllbnRIZWFkZXInKS5vdXRlckhlaWdodCh0cnVlKSArICQoJy5IZWFkZXInKS5vdXRlckhlaWdodCh0cnVlKSArICQoXCIudG9vbGJhci13cmFwcGVyXCIpLm91dGVySGVpZ2h0KCkgKyAkKCcuQ1RUQVNMZXZlbEFzc2Vzc21lbnRNYWluQ29udGFpbmVyJykub3V0ZXJIZWlnaHQodHJ1ZSkpICsgJ3B4Jyk7IFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICAgICAgX3NzZENvbXBvbmVudC5hZGRDbGFzcygnRml4ZWQnKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGRlc3Ryb3k6IGZ1bmN0aW9uKF9pbnB1dElkKSB7IC8qIFVzZWQgdG8gZGVzdHJveSBhIHNwZWNpZmljIHNzZCBjb21wb25lbnQgYnkgcmVjZWl2ZSB0aGUgaW5wdXQgaWRlbnRpZmllciBhcyBwYXJhbWV0ZXIgYW5kIGRldGVybWluZSB0aGUgd3JhcHBlciB0byByZW1vdmUuICovXHJcbiAgICAgICAgICAgICQoJ1tkYXRhLXNzZC1wbGFjZWhvbGRlcj0nICsgc3NkQ29tcG9uZW50LmlkICsgJ10nKS5yZW1vdmUoKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGluaXQ6IGZ1bmN0aW9uKHNzZENvbXBvbmVudFdpZGdldCxfdG9EZXN0cm95KSB7XHJcbiAgICAgICAgICAgIHNzZENvbXBvbmVudC5sZW5ndGgrKztcclxuICAgICAgICAgICAgc3NkQ29tcG9uZW50Lm51bWJlck9mQWN0aXZlID0gMDtcclxuICAgICAgICAgICAgc3NkQ29tcG9uZW50LmlzUlRMID0gJCgnaHRtbCcpLmlzKCcucnRsJyk7XHJcbiAgICAgICAgICAgIHNzZENvbXBvbmVudC50b0Rlc3Ryb3kgPSBfdG9EZXN0cm95O1xyXG4gICAgICAgICAgICBpZiAodHlwZW9mIHNzZENvbXBvbmVudFdpZGdldCAhPSAndW5kZWZpbmVkJykge1xyXG4gICAgICAgICAgICAgICAgc3NkQ29tcG9uZW50LmlkID0gJChzc2RDb21wb25lbnRXaWRnZXQpLmF0dHIoJ2lkJyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdmFyIF9zc2RDb21wb25lbnRXaWRnZXQgPSAkKHNzZENvbXBvbmVudFdpZGdldCk7XHJcbiAgICAgICAgICAgIHZhciBfc3NkQ29tcG9uZW50ID0gX3NzZENvbXBvbmVudFdpZGdldC5maW5kKCcuU1NELUNvbXBvbmVudCcpO1xyXG4gICAgICAgICAgICB2YXIgX3NzZEJhciA9IF9zc2RDb21wb25lbnQuY2hpbGRyZW4oJy5TU0QtQmFyJykuZmlyc3QoKTtcclxuICAgICAgICAgICAgdmFyIF9zZWFyY2hJY29uID0gX3NzZEJhci5maW5kKCcuU2VhcmNoSWNvbicpLmZpcnN0KCk7XHJcbiAgICAgICAgICAgIHZhciBfaW5wdXQgPSBfc3NkQmFyLmZpbmQoJ2lucHV0W3R5cGU9XCJ0ZXh0XCJdJykuZmlyc3QoKTtcclxuICAgICAgICAgICAgdmFyIF9jbGVhckNvbnRyb2wgPSBfc3NkQmFyLmZpbmQoJy5DbGVhckNvbnRyb2wnKS5maXJzdCgpO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgX3NlYXJjaEljb24ub2ZmKCdjbGljaycpLm9uKCdjbGljaycsIHtcclxuICAgICAgICAgICAgICAgIHNzZENvbXBvbmVudFdpZGdldDogX3NzZENvbXBvbmVudFdpZGdldCxcclxuICAgICAgICAgICAgICAgIHNzZEJhcjogX3NzZEJhclxyXG4gICAgICAgICAgICB9LCBzc2RDb21wb25lbnQuc2VhcmNoSWNvbik7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBfc3NkQmFyLmNoaWxkcmVuKCdkaXYnKS5vZmYoJ2NsaWNrJykub24oJ2NsaWNrJywge1xyXG4gICAgICAgICAgICAgICAgc3NkQ29tcG9uZW50V2lkZ2V0OiBfc3NkQ29tcG9uZW50V2lkZ2V0LFxyXG4gICAgICAgICAgICAgICAgc3NkQmFyOiBfc3NkQmFyXHJcbiAgICAgICAgICAgIH0sIGZ1bmN0aW9uKGV2ZW50KSB7XHJcbiAgICAgICAgICAgICAgICBzc2RDb21wb25lbnQudGFiU2VsZWN0KGV2ZW50LmRhdGEuc3NkQ29tcG9uZW50V2lkZ2V0LCBldmVudC5kYXRhLnNzZEJhciwgdGhpcyxmYWxzZSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgX2NsZWFyQ29udHJvbC5vZmYoJ2NsaWNrJykub24oJ2NsaWNrJywgc3NkQ29tcG9uZW50Lm9uQmx1ckRlc3Ryb3kpO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgX2lucHV0Lm9mZigna2V5dXAnKS5vbigna2V5dXAnLCB7XHJcbiAgICAgICAgICAgICAgICBzc2RDb21wb25lbnRXaWRnZXQ6IF9zc2RDb21wb25lbnRXaWRnZXQsXHJcbiAgICAgICAgICAgICAgICBzc2RCYXI6IF9zc2RCYXIsXHJcbiAgICAgICAgICAgICAgICBpbnB1dDogX2lucHV0XHJcbiAgICAgICAgICAgIH0sIHNzZENvbXBvbmVudC5pbnB1dEV2ZW50KTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIF9pbnB1dC5vZmYoJ2tleWRvd24nKS5vbigna2V5ZG93bicsIHtcclxuICAgICAgICAgICAgICAgIHNzZENvbXBvbmVudFdpZGdldDogX3NzZENvbXBvbmVudFdpZGdldCxcclxuICAgICAgICAgICAgICAgIHNzZEJhcjogX3NzZEJhcixcclxuICAgICAgICAgICAgICAgIGlucHV0OiBfaW5wdXRcclxuICAgICAgICAgICAgfSwgc3NkQ29tcG9uZW50LmtleWRvd25FdmVudCk7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAkKF9zc2RDb21wb25lbnQpLm9mZignY2xpY2snKS5vbignY2xpY2snLCB7XHJcbiAgICAgICAgICAgICAgICBzc2RDb21wb25lbnQ6IF9zc2RDb21wb25lbnRcclxuICAgICAgICAgICAgfSwgZnVuY3Rpb24oZXZlbnQpIHtcclxuICAgICAgICAgICAgICAgIHNzZENvbXBvbmVudC5jbGVhcktleWJvYXJkTmF2U3RhdHVzKGV2ZW50LmRhdGEuc3NkQ29tcG9uZW50KTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG4kKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigpIHtcclxuICAgICQod2luZG93KS5vbigncmVzaXplJywgZnVuY3Rpb24oZXZlbnQpIHtcclxuICAgICAgICBzc2RDb21wb25lbnQucmVzaXplKCk7XHJcbiAgICB9KTtcclxuICAgIFxyXG4gICAgJChkb2N1bWVudCkub24oJ2NsaWNrJywgZnVuY3Rpb24oZXZlbnQpIHtcclxuICAgICAgICBpZighJChldmVudC50YXJnZXQpLmlzKCc6dmlzaWJsZScpKSB7IC8qIENsaWNrcyBvbiBoaWRkZW4gZWxlbWVudHMgYXJlIGRpc21pc3NlZC4gKi9cclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICB2YXIgZSA9ICQoZXZlbnQudGFyZ2V0KS5jbG9zZXN0KCcuU1NELUNvbXBvbmVudCcpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGlmKCFlLmxlbmd0aCkgeyAvLyBVc2VyIGNsaWNrZWQgb3V0c2lkZSB0aGUgU1NELUNvbXBvbmVudD9cclxuICAgICAgICAgICAgc3NkQ29tcG9uZW50Lm9uQmx1ckRlc3Ryb3koKTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuICAgIFxyXG4gICAgJChkb2N1bWVudCkub24oJ2tleWRvd24nLCBmdW5jdGlvbihldmVudCkge1xyXG4gICAgICAgIGlmKHNzZENvbXBvbmVudC5udW1iZXJPZkFjdGl2ZSA+IDApIHtcclxuICAgICAgICAgICAgaWYoZXZlbnQua2V5Q29kZSA9PSBcIjI3XCIpIHsgLy8gVXNlciBoaXQgRXNjYXBlXHJcbiAgICAgICAgICAgICAgICBzc2RDb21wb25lbnQub25CbHVyRGVzdHJveSgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmKGV2ZW50LmtleSA9PSBcIkFycm93VXBcIiB8fCBldmVudC5rZXkgPT0gXCJBcnJvd0Rvd25cIikge1xyXG4gICAgICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgXHJcbiAgICAkKGRvY3VtZW50KS5vbigna2V5dXAnLCBmdW5jdGlvbihldmVudCkge1xyXG4gICAgICAgIGlmKHNzZENvbXBvbmVudC5udW1iZXJPZkFjdGl2ZSA+IDApIHsgLy8gSWYgdGhlcmUncyBhbiBTU0QgY29tcG9uZW50IGFjdGl2ZSwgZ28gZm9yIEtleWJvYXJkIGhhbmRsZXJcclxuICAgICAgICAgICAgc3NkQ29tcG9uZW50LmtleWJvYXJkSGFuZGxlcihldmVudCk7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICBcclxuICAgICQoZG9jdW1lbnQpLm9uKCdzY3JvbGwnLCBmdW5jdGlvbigpIHtcclxuICAgICAgICBpZihzc2RDb21wb25lbnQubnVtYmVyT2ZBY3RpdmUgPiAwKSB7IC8vIElmIHRoZXJlJ3MgYW4gU1NEIGNvbXBvbmVudCBhY3RpdmUsIGdvIGZvciBzY3JvbGwgaGFuZGxlclxyXG4gICAgICAgICAgICBzc2RDb21wb25lbnQuc2Nyb2xsSGFuZGxlcigpO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG59KTtcclxuIiwiLyogQ29tcG9uZW50IFNTRExpc3RMaW5lICovXG5TYXBwaGlyZVdpZGdldHMuU1NETGlzdExpbmUgPSB7XG5cdHRvZ2dsZTogKGxpbmVJZCwgbGluZUhhbmRsZXIgPSAnJykgPT4ge1xuXHRcdHZhciBfbGluZSA9ICQobGluZUlkKS5pcygnLlNTRF9MaXN0TGluZScpXG5cdFx0XHQ/ICQobGluZUlkKVxuXHRcdFx0OiAkKGxpbmVJZClcblx0XHRcdFx0XHQuY2hpbGRyZW4oJy5TU0RfTGlzdExpbmUnKVxuXHRcdFx0XHRcdC5maXJzdCgpO1xuXG5cdFx0aWYgKCFfbGluZS5sZW5ndGgpIHJldHVybjtcblxuXHRcdHZhciBfZXhwYW5kQ29udHJvbCA9ICQoJy5leHBhbmQtY29udHJvbC1jdXN0b20td2lkdGgnKTtcblxuXHRcdGlmIChfZXhwYW5kQ29udHJvbC5sZW5ndGggIT0gMCkge1xuXHRcdFx0X2V4cGFuZENvbnRyb2wucmVtb3ZlQ2xhc3MoJ2V4cGFuZC1jb250cm9sLWN1c3RvbS13aWR0aCcpO1xuXHRcdFx0X2V4cGFuZENvbnRyb2wuY3NzKCd3aWR0aCcsICcnKTtcblx0XHR9XG5cblx0XHRpZiAoIV9saW5lLmlzKCcuQWN0aXZlJykpIHtcblx0XHRcdHZhciBfbGluZUhlYWRlciA9IF9saW5lXG5cdFx0XHRcdC5jbG9zZXN0KCdkaXYuU2VsZWN0YWJsZUxpc3QsIC5TZWxlY3RhYmxlTGlzdC1MaXN0UmVjb3JkcycpXG5cdFx0XHRcdC5maW5kKCdkaXYuU2VsZWN0YWJsZUxpc3QtTGluZS5BY3RpdmUnKVxuXHRcdFx0XHQubm90KF9saW5lKTtcblxuXHRcdFx0X2xpbmVIZWFkZXIuZmluZCgnYVtoaWRlLWFjdGlvbl0nKS5jbGljaygpO1xuXHRcdFx0X2xpbmVIZWFkZXJcblx0XHRcdFx0LnJlbW92ZUNsYXNzKCdBY3RpdmUnKVxuXHRcdFx0XHQuY2hpbGRyZW4oJ3NwYW4nKVxuXHRcdFx0XHQuaGlkZSgyMDApO1xuXHRcdFx0X2xpbmUuYWRkQ2xhc3MoJ0FjdGl2ZScpO1xuXG5cdFx0XHRpZiAoJChsaW5lSGFuZGxlcikubGVuZ3RoKSB7XG5cdFx0XHRcdCQobGluZUhhbmRsZXIpLmNsaWNrKCk7XG5cdFx0XHR9XG5cdFx0fSBlbHNlIHtcblx0XHRcdF9saW5lLnJlbW92ZUNsYXNzKCdBY3RpdmUnKTtcblx0XHR9XG5cdH0sXG59O1xuIiwiLyogQ29tcG9uZW50IFRhYmxlRm9ybSAqL1xuKGZ1bmN0aW9uKCQsIHdpbmRvdywgU2FwcGhpcmVXaWRnZXRzKSB7XG5cdGNvbnN0IGFkZEVtcHR5TGluZSA9IGNvbmZpZyA9PiB7XG5cdFx0Y29uc3QgJGxpc3QgPSAkKCcuVGFibGVGb3JtQ29sdW1uOm5vdCguVGFibGVGb3JtQ29sdW1uLS1lZGl0TW9kZSkgLlRhYmxlRm9ybUNvbHVtbl9fRmllbGRzID4gLkxpc3RSZWNvcmRzJyk7XG5cblx0XHQkbGlzdC5hcHBlbmQoJzxkaXYgY2xhc3M9XCJUYWJsZUZvcm1Db2x1bW5fX0VtcHR5SXRlbVwiPjwvZGl2PicpO1xuXHR9O1xuXG5cdGNvbnN0IHJlbW92ZUVtcHR5TGluZSA9IGNvbmZpZyA9PiB7XG5cdFx0Y29uc3QgJGxpc3QgPSAkKCcuVGFibGVGb3JtQ29sdW1uOm5vdCguVGFibGVGb3JtQ29sdW1uLS1lZGl0TW9kZSkgLlRhYmxlRm9ybUNvbHVtbl9fRmllbGRzID4gLkxpc3RSZWNvcmRzJyk7XG5cblx0XHQkbGlzdC5lYWNoKGZ1bmN0aW9uKGluZGV4KSB7XG5cdFx0XHQkKHRoaXMpXG5cdFx0XHRcdC5maW5kKCc+IC5UYWJsZUZvcm1Db2x1bW5fX0VtcHR5SXRlbTpmaXJzdCcpXG5cdFx0XHRcdC5yZW1vdmUoKTtcblx0XHR9KTtcblx0fTtcblxuXHRjb25zdCBvbkNvbXBvbmVudFJlbG9hZCA9IHdpZGdldElkID0+IHtcblx0XHRjb25zdCAkdGFibGUgPSAkKGAjJHt3aWRnZXRJZH1gKTtcblx0XHRjb25zdCAkZWRpdGluZyA9ICR0YWJsZS5maW5kKCcuVGFibGVGb3JtQ29sdW1uLS1lZGl0TW9kZScpO1xuXG5cdFx0aWYgKCRlZGl0aW5nLmxlbmd0aCkge1xuXHRcdFx0JHRhYmxlLmFkZENsYXNzKCdUYWJsZUZvcm0tLXNjcm9sbERpc2FibGVkJyk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdCR0YWJsZS5yZW1vdmVDbGFzcygnVGFibGVGb3JtLS1zY3JvbGxEaXNhYmxlZCcpO1xuXHRcdH1cblx0fTtcblxuXHRTYXBwaGlyZVdpZGdldHMuVGFibGVGb3JtID0geyBhZGRFbXB0eUxpbmUsIG9uQ29tcG9uZW50UmVsb2FkLCByZW1vdmVFbXB0eUxpbmUgfTtcbn0pKGpRdWVyeSwgd2luZG93LCBTYXBwaGlyZVdpZGdldHMpO1xuIiwiLyogQ29tcG9uZW50IFRhYnNFeHRlbmRlZCAqL1xuU2FwcGhpcmVXaWRnZXRzLlRhYnNFeHRlbmRlZCA9IGZ1bmN0aW9uKGNvbmZpZykge1xuXHQkKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigpIHtcblx0XHRjb25zdCAkY29tcG9uZW50ID0gJChgIyR7Y29uZmlnLndpZGdldElkfSAuVGFic19FeHRlbmRlZGApO1xuXHRcdGNvbnN0ICR0YWJIZWFkZXIgPSAkY29tcG9uZW50LmZpbmQoJy5UYWJzX2hlYWRlcicpO1xuXHRcdGNvbnN0ICR0YWJDb250YWluZXIgPSAkY29tcG9uZW50LmZpbmQoJy5UYWJzQ29udGFpbmVyJyk7XG5cdFx0Y29uc3QgJHRhYnMgPSAkdGFiSGVhZGVyLmZpbmQoJz4gLlRhYnNfX3RhYicpO1xuXHRcdGNvbnN0ICR0YWJzRW5hYmxlZCA9ICR0YWJIZWFkZXIuZmluZCgnPiAuVGFic19fdGFiOm5vdCguZGlzYWJsZWQpJyk7XG5cdFx0Y29uc3QgJHRhYnNJbnB1dCA9ICRjb21wb25lbnQuZmluZCgnLlRhYnNfSW5wdXQgaW5wdXQnKTtcblxuXHRcdCR0YWJzLmVhY2goZnVuY3Rpb24oKSB7XG5cdFx0XHRpZiAoJCh0aGlzKS50ZXh0KCkgPT09ICcnKSB7XG5cdFx0XHRcdCQodGhpcykucmVtb3ZlKCk7XG5cdFx0XHR9XG5cdFx0fSk7XG5cblx0XHQkdGFic0VuYWJsZWQub24oJ2NsaWNrJywgZnVuY3Rpb24oKSB7XG5cdFx0XHQkdGFiQ29udGFpbmVyLmF0dHIoJ2FjdGl2ZXRhYicsICQodGhpcykuYXR0cigndmFsdWUnKSk7XG5cblx0XHRcdCR0YWJzSW5wdXQudmFsKCQodGhpcykuYXR0cigndmFsdWUnKSk7XG5cdFx0XHQkdGFic0lucHV0LmNoYW5nZSgpO1xuXHRcdH0pO1xuXG5cdFx0JHRhYnNFbmFibGVkLm9mZignbW91c2Vkb3duJykub24oJ21vdXNlZG93bicsIGZ1bmN0aW9uKGV2dCkge1xuXHRcdFx0dmFyICR0YWJzRXh0ZW5kZWQgPSAkKGV2dC50YXJnZXQpLmNsb3Nlc3QoJy5UYWJzX0V4dGVuZGVkJyk7XG5cdFx0XHQkdGFic0V4dGVuZGVkLnJlbW92ZUNsYXNzKCdpc0Nsb3NlZCcpO1xuXHRcdH0pO1xuXG5cdFx0JCgnLlRhYnNfRXh0ZW5kZWQuSGlkZUFjdGl2ZU9uQ2xpY2sgLlRhYnNfaGVhZGVyJylcblx0XHRcdC5vZmYoJ21vdXNlZG93bicpXG5cdFx0XHQub24oJ21vdXNlZG93bicsICcuVGFic19fdGFiLmFjdGl2ZScsIGZ1bmN0aW9uKGV2dCkge1xuXHRcdFx0XHR2YXIgJHRhYnNFeHRlbmRlZCA9ICQoZXZ0LnRhcmdldCkuY2xvc2VzdCgnLlRhYnNfRXh0ZW5kZWQnKTtcblx0XHRcdFx0dmFyICR0YWJzQm9keSA9ICR0YWJzRXh0ZW5kZWQuZmluZCgnLlRhYnNfYm9keScpO1xuXG5cdFx0XHRcdGlmICgkdGFic0JvZHkuaGFzQ2xhc3MoJ1RhYnNfYm9keS0tY2xvc2VkJykpIHtcblx0XHRcdFx0XHQkdGFic0JvZHkucmVtb3ZlQ2xhc3MoJ1RhYnNfYm9keS0tY2xvc2VkJyk7XG5cdFx0XHRcdFx0JHRhYnNFeHRlbmRlZC5yZW1vdmVDbGFzcygnaXNDbG9zZWQnKTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHQkdGFic0JvZHkuYWRkQ2xhc3MoJ1RhYnNfYm9keS0tY2xvc2VkJyk7XG5cdFx0XHRcdFx0JHRhYnNFeHRlbmRlZC5hZGRDbGFzcygnaXNDbG9zZWQnKTtcblx0XHRcdFx0fVxuXHRcdFx0fSk7XG5cblx0XHQkdGFiSGVhZGVyLmZpbmQoJy5UYWJzX0V4dGVuZGVkLS1kaXNhYmxlZCcpLmVhY2goZnVuY3Rpb24oaW5kZXgsIGVsKSB7XG5cdFx0XHQkKGVsKVxuXHRcdFx0XHQucGFyZW50KClcblx0XHRcdFx0LmNzcygnY3Vyc29yJywgJ2RlZmF1bHQnKVxuXHRcdFx0XHQub2ZmKCdjbGljaycpO1xuXHRcdH0pO1xuXG5cdFx0JGNvbXBvbmVudC5lYWNoKGZ1bmN0aW9uKGluZGV4LCBlbCkge1xuXHRcdFx0aWYgKCQoZWwpLmhhc0NsYXNzKCdUYWJzX0V4dGVuZGVkLS1jbG9zZWRvbnN0YXJ0JykpIHtcblx0XHRcdFx0JChlbClcblx0XHRcdFx0XHQuZmluZCgnLlRhYnNfYm9keScpXG5cdFx0XHRcdFx0LmFkZENsYXNzKCdUYWJzX2JvZHktLWNsb3NlZCcpO1xuXHRcdFx0XHQkKGVsKS5hZGRDbGFzcygnaXNDbG9zZWQnKTtcblx0XHRcdFx0JChlbCkucmVtb3ZlQ2xhc3MoJ1RhYnNfRXh0ZW5kZWQtLWNsb3NlZG9uc3RhcnQnKTtcblx0XHRcdH1cblxuXHRcdFx0JChlbClcblx0XHRcdFx0Lm9mZignY2xpY2snKVxuXHRcdFx0XHQub24oJ2NsaWNrJywgJy5UYWJzX0V4dGVuZGVkLS1jbG9zZScsIGZ1bmN0aW9uKGV2dCkge1xuXHRcdFx0XHRcdCQoZXZ0LnRhcmdldClcblx0XHRcdFx0XHRcdC5jbG9zZXN0KCcuVGFic19ib2R5Jylcblx0XHRcdFx0XHRcdC5hZGRDbGFzcygnVGFic19ib2R5LS1jbG9zZWQnKTtcblx0XHRcdFx0fSk7XG5cdFx0fSk7XG5cblx0XHRpZiAoIWNvbmZpZy50YWIxRW5hYmxlZCkgJHRhYkhlYWRlci5maW5kKCc+IC5UYWJzX190YWJbdmFsdWU9MV0nKS5hZGRDbGFzcygnZGlzYWJsZWQnKTtcblx0XHRpZiAoIWNvbmZpZy50YWIyRW5hYmxlZCkgJHRhYkhlYWRlci5maW5kKCc+IC5UYWJzX190YWJbdmFsdWU9Ml0nKS5hZGRDbGFzcygnZGlzYWJsZWQnKTtcblx0XHRpZiAoIWNvbmZpZy50YWIzRW5hYmxlZCkgJHRhYkhlYWRlci5maW5kKCc+IC5UYWJzX190YWJbdmFsdWU9M10nKS5hZGRDbGFzcygnZGlzYWJsZWQnKTtcblx0XHRpZiAoIWNvbmZpZy50YWI0RW5hYmxlZCkgJHRhYkhlYWRlci5maW5kKCc+IC5UYWJzX190YWJbdmFsdWU9NF0nKS5hZGRDbGFzcygnZGlzYWJsZWQnKTtcblx0XHRpZiAoIWNvbmZpZy50YWI1RW5hYmxlZCkgJHRhYkhlYWRlci5maW5kKCc+IC5UYWJzX190YWJbdmFsdWU9NV0nKS5hZGRDbGFzcygnZGlzYWJsZWQnKTtcblx0fSk7XG59O1xuIiwiLyogQ29tcG9uZW50IFRhYnVsYXJMaXN0ICovXG4oZnVuY3Rpb24oJCwgd2luZG93LCBkb2N1bWVudCwgU2FwcGhpcmVXaWRnZXRzKSB7XG5cdHZhciBhbGxUYWJ1bGFyTGlzdHMgPSBbXTtcblxuXHR2YXIgY3JlYXRlID0gZnVuY3Rpb24oY29uZmlnKSB7XG5cdFx0d2luZG93W2NvbmZpZy50YWJ1bGFyTGlzdElkXSA9IG5ldyBUYWJ1bGFyTGlzdChjb25maWcpO1xuXHRcdGFsbFRhYnVsYXJMaXN0cy5wdXNoKHdpbmRvd1tjb25maWcudGFidWxhckxpc3RJZF0pO1xuXG5cdFx0JCh3aW5kb3cpLmxvYWQoZnVuY3Rpb24oKSB7XG5cdFx0XHR2YXIgYWxsVGFidWxhckxpc3RzID0gU2FwcGhpcmVXaWRnZXRzLlRhYnVsYXJMaXN0LmFsbCgpO1xuXHRcdFx0YWxsVGFidWxhckxpc3RzLmZvckVhY2goZnVuY3Rpb24oZWxlbWVudCwgaSkge1xuXHRcdFx0XHRlbGVtZW50LmhhbmRsZVRhYnVsYXJMaXN0Q29sdW1ucygpO1xuXHRcdFx0XHRlbGVtZW50LmhhbmRsZVJlc3BvbnNpdmVDbGFzc2VzKDIwMCk7XG5cdFx0XHR9KTtcblx0XHR9KTtcblxuXHRcdCQod2luZG93KS5vbigncmVzaXplLnRhYnVsYXJsaXN0JywgZnVuY3Rpb24oKSB7XG5cdFx0XHR2YXIgYWxsVGFidWxhckxpc3RzID0gU2FwcGhpcmVXaWRnZXRzLlRhYnVsYXJMaXN0LmFsbCgpO1xuXHRcdFx0YWxsVGFidWxhckxpc3RzLmZvckVhY2goZnVuY3Rpb24oZWxlbWVudCwgaSkge1xuXHRcdFx0XHRlbGVtZW50LmhhbmRsZVJlc3BvbnNpdmVDbGFzc2VzKDIwMCk7XG5cdFx0XHR9KTtcblx0XHR9KTtcblx0fTtcblxuXHR2YXIgVGFidWxhckxpc3QgPSBmdW5jdGlvbihjb25maWcpIHtcblx0XHR2YXIgX3RoaXMgPSB0aGlzO1xuXHRcdHRoaXMuY29uZmlnID0gY29uZmlnO1xuXHRcdHRoaXMudGFidWxhckxpc3RSZXNpemVUaW1lciA9IDA7XG5cdFx0dGhpcy4kd2lkZ2V0ID0gJCgnIycgKyBjb25maWcudGFidWxhckxpc3RJZCk7XG5cdFx0dGhpcy4kd2lkZ2V0TGlzdCA9IHRoaXMuJHdpZGdldC5maW5kKCc+IC5UYWJ1bGFyTGlzdCcpO1xuXHRcdHRoaXMuJHdpZGdldC5maW5kKCcuVGFidWxhckxpc3RSb3cnKS5lYWNoKGZ1bmN0aW9uKGksIHJvdykge1xuXHRcdFx0X3RoaXMuY29sdW1uc0NvdW50ID0gMDtcblx0XHRcdCQocm93KVxuXHRcdFx0XHQuZmluZCgnLlRhYnVsYXJMaXN0Um93LXZhbHVlcyAuVGFidWxhckxpc3RSb3ctaXRlbScpXG5cdFx0XHRcdC5lYWNoKGZ1bmN0aW9uKGksIGVsKSB7XG5cdFx0XHRcdFx0JChlbCkuYWRkQ2xhc3MoJ1RhYnVsYXJMaXN0Q29sdW1uJyArIChpICsgMSkpO1xuXHRcdFx0XHRcdF90aGlzLmNvbHVtbnNDb3VudCsrO1xuXHRcdFx0XHR9KTtcblx0XHR9KTtcblx0XHRpZiAoISFjb25maWcuYnJlYWtPbikge1xuXHRcdFx0dGhpcy5icmVha09uT3JkZXIgPSBwYXJzZUludChjb25maWcuYnJlYWtPbik7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRoaXMuYnJlYWtPbk9yZGVyID0gMDtcblx0XHR9XG5cdFx0dGhpcy5oYW5kbGVUYWJ1bGFyTGlzdENvbHVtbnMoKTtcblx0fTtcblxuXHRUYWJ1bGFyTGlzdC5wcm90b3R5cGUuaGFuZGxlVGFidWxhckxpc3RDb2x1bW5zID0gZnVuY3Rpb24oKSB7XG5cdFx0aWYgKHRoaXMuY29uZmlnLmNvbHVtbnNXaWR0aCA9PT0gJ0F1dG8nKSB7XG5cdFx0XHRpZiAodGhpcy4kd2lkZ2V0TGlzdC53aWR0aCgpID4gMSkge1xuXHRcdFx0XHRmb3IgKGkgPSAxOyBpIDw9IHRoaXMuY29sdW1uc0NvdW50OyBpKyspIHtcblx0XHRcdFx0XHR2YXIgbWF4V2lkdGhDb250ZW50ID0gTWF0aC5tYXguYXBwbHkoXG5cdFx0XHRcdFx0XHRudWxsLFxuXHRcdFx0XHRcdFx0dGhpcy4kd2lkZ2V0XG5cdFx0XHRcdFx0XHRcdC5maW5kKCcuVGFidWxhckxpc3RDb2x1bW4nICsgaSlcblx0XHRcdFx0XHRcdFx0Lm1hcChmdW5jdGlvbigpIHtcblx0XHRcdFx0XHRcdFx0XHRyZXR1cm4gJCh0aGlzKS5vdXRlcldpZHRoKHRydWUpO1xuXHRcdFx0XHRcdFx0XHR9KVxuXHRcdFx0XHRcdFx0XHQuZ2V0KClcblx0XHRcdFx0XHQpO1xuXHRcdFx0XHRcdHRoaXMuJHdpZGdldC5maW5kKCcuVGFidWxhckxpc3RDb2x1bW4nICsgaSkud2lkdGgobWF4V2lkdGhDb250ZW50KTtcblx0XHRcdFx0XHR0aGlzLiR3aWRnZXQuZmluZCgnLlRhYnVsYXJMaXN0Q29sdW1uJyArIGkpLmNzcygnb3BhY2l0eScsIDEpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGlmICghIXRoaXMuY29uZmlnLnByb3BlcnR5TWluV2lkdGgpIHtcblx0XHRcdHRoaXMuJHdpZGdldC5maW5kKCcuVGFidWxhckxpc3RSb3ctcHJvcGVydHknKS5jc3MoJ21pbi13aWR0aCcsIGNvbnZlcnRJbkNTU1ZhbHVlKHRoaXMuY29uZmlnLnByb3BlcnR5TWluV2lkdGgpKTtcblx0XHR9XG5cdFx0aWYgKCEhdGhpcy5jb25maWcucHJvcGVydHlNYXhXaWR0aCkge1xuXHRcdFx0dGhpcy4kd2lkZ2V0LmZpbmQoJy5UYWJ1bGFyTGlzdFJvdy1wcm9wZXJ0eScpLmNzcygnbWF4LXdpZHRoJywgY29udmVydEluQ1NTVmFsdWUodGhpcy5jb25maWcucHJvcGVydHlNYXhXaWR0aCkpO1xuXHRcdH1cblx0XHRpZiAoISF0aGlzLmNvbmZpZy5hY3Rpb25zTWluV2lkdGgpIHtcblx0XHRcdHRoaXMuJHdpZGdldC5maW5kKCcuVGFidWxhckxpc3RSb3ctYWN0aW9ucycpLmNzcygnbWluLXdpZHRoJywgY29udmVydEluQ1NTVmFsdWUodGhpcy5jb25maWcuYWN0aW9uc01pbldpZHRoKSk7XG5cdFx0fVxuXHRcdGlmICghIXRoaXMuY29uZmlnLmFjdGlvbnNNYXhXaWR0aCkge1xuXHRcdFx0dGhpcy4kd2lkZ2V0LmZpbmQoJy5UYWJ1bGFyTGlzdFJvdy1hY3Rpb25zJykuY3NzKCdtYXgtd2lkdGgnLCBjb252ZXJ0SW5DU1NWYWx1ZSh0aGlzLmNvbmZpZy5hY3Rpb25zTWF4V2lkdGgpKTtcblx0XHR9XG5cdH07XG5cblx0VGFidWxhckxpc3QucHJvdG90eXBlLmhhbmRsZVJlc3BvbnNpdmVDbGFzc2VzID0gZnVuY3Rpb24odGltZW91dCkge1xuXHRcdHZhciBfdGhpcyA9IHRoaXM7XG5cdFx0d2luZG93LmNsZWFyVGltZW91dCh0aGlzLnRhYnVsYXJMaXN0UmVzaXplVGltZXIpO1xuXHRcdHRoaXMudGFidWxhckxpc3RSZXNpemVUaW1lciA9IHdpbmRvdy5zZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuXHRcdFx0X3RoaXMuJHdpZGdldExpc3QucmVtb3ZlQ2xhc3MoZnVuY3Rpb24oaW5kZXgsIGNsYXNzTmFtZSkge1xuXHRcdFx0XHRyZXR1cm4gKGNsYXNzTmFtZS5tYXRjaCgvKF58XFxzKXNjcmVlbi1cXFMrL2cpIHx8IFtdKS5qb2luKCcgJyk7XG5cdFx0XHR9KTtcblxuXHRcdFx0X3RoaXMuJHdpZGdldExpc3QucmVtb3ZlQ2xhc3MoJ2lzQnJlYWtpbmcnKTtcblxuXHRcdFx0dmFyIHdpZGdldFdpZHRoID0gX3RoaXMuJHdpZGdldExpc3Qub3V0ZXJXaWR0aCh0cnVlKTtcblx0XHRcdGlmICh3aWRnZXRXaWR0aCA9PT0gMCkge1xuXHRcdFx0XHR3aWRnZXRXaWR0aCA9IF90aGlzLiR3aWRnZXRMaXN0XG5cdFx0XHRcdFx0LnBhcmVudHMoJzp2aXNpYmxlJylcblx0XHRcdFx0XHQuZXEoMClcblx0XHRcdFx0XHQub3V0ZXJXaWR0aCh0cnVlKTtcblx0XHRcdH1cblxuXHRcdFx0aWYgKHdpZGdldFdpZHRoID49IDE5MDApIHtcblx0XHRcdFx0X3RoaXMuJHdpZGdldExpc3QuYWRkQ2xhc3MoJ3NjcmVlbi1EZXNrdG9wSEQnKTtcblx0XHRcdFx0aWYgKF90aGlzLmJyZWFrT25PcmRlciA+PSA2KSB7XG5cdFx0XHRcdFx0X3RoaXMuJHdpZGdldExpc3QuYWRkQ2xhc3MoJ2lzQnJlYWtpbmcnKTtcblx0XHRcdFx0fVxuXHRcdFx0fSBlbHNlIGlmICh3aWRnZXRXaWR0aCA+PSAxNjAwKSB7XG5cdFx0XHRcdF90aGlzLiR3aWRnZXRMaXN0LmFkZENsYXNzKCdzY3JlZW4tRGVza3RvcEJpZycpO1xuXHRcdFx0XHRpZiAoX3RoaXMuYnJlYWtPbk9yZGVyID49IDUpIHtcblx0XHRcdFx0XHRfdGhpcy4kd2lkZ2V0TGlzdC5hZGRDbGFzcygnaXNCcmVha2luZycpO1xuXHRcdFx0XHR9XG5cdFx0XHR9IGVsc2UgaWYgKHdpZGdldFdpZHRoID49IDEzNjYpIHtcblx0XHRcdFx0X3RoaXMuJHdpZGdldExpc3QuYWRkQ2xhc3MoJ3NjcmVlbi1EZXNrdG9wJyk7XG5cdFx0XHRcdGlmIChfdGhpcy5icmVha09uT3JkZXIgPj0gNCkge1xuXHRcdFx0XHRcdF90aGlzLiR3aWRnZXRMaXN0LmFkZENsYXNzKCdpc0JyZWFraW5nJyk7XG5cdFx0XHRcdH1cblx0XHRcdH0gZWxzZSBpZiAod2lkZ2V0V2lkdGggPj0gMTAyNCkge1xuXHRcdFx0XHRfdGhpcy4kd2lkZ2V0TGlzdC5hZGRDbGFzcygnc2NyZWVuLURlc2t0b3BTbWFsbCcpO1xuXHRcdFx0XHRpZiAoX3RoaXMuYnJlYWtPbk9yZGVyID49IDMpIHtcblx0XHRcdFx0XHRfdGhpcy4kd2lkZ2V0TGlzdC5hZGRDbGFzcygnaXNCcmVha2luZycpO1xuXHRcdFx0XHR9XG5cdFx0XHR9IGVsc2UgaWYgKHdpZGdldFdpZHRoID49IDQyMCkge1xuXHRcdFx0XHRfdGhpcy4kd2lkZ2V0TGlzdC5hZGRDbGFzcygnc2NyZWVuLVRhYmxldCcpO1xuXHRcdFx0XHRpZiAoX3RoaXMuYnJlYWtPbk9yZGVyID49IDIpIHtcblx0XHRcdFx0XHRfdGhpcy4kd2lkZ2V0TGlzdC5hZGRDbGFzcygnaXNCcmVha2luZycpO1xuXHRcdFx0XHR9XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRfdGhpcy4kd2lkZ2V0TGlzdC5hZGRDbGFzcygnc2NyZWVuLVBob25lJyk7XG5cdFx0XHRcdGlmIChfdGhpcy5icmVha09uT3JkZXIgPj0gMSkge1xuXHRcdFx0XHRcdF90aGlzLiR3aWRnZXRMaXN0LmFkZENsYXNzKCdpc0JyZWFraW5nJyk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9LCB0aW1lb3V0KTtcblx0fTtcblxuXHRTYXBwaGlyZVdpZGdldHMuVGFidWxhckxpc3QgPSB7XG5cdFx0Y3JlYXRlOiBjcmVhdGUsXG5cdFx0YWxsOiBmdW5jdGlvbigpIHtcblx0XHRcdHJldHVybiBhbGxUYWJ1bGFyTGlzdHM7XG5cdFx0fSxcblx0fTtcbn0pKGpRdWVyeSwgd2luZG93LCBkb2N1bWVudCwgU2FwcGhpcmVXaWRnZXRzKTtcblxuZnVuY3Rpb24gY29udmVydEluQ1NTVmFsdWUodmFsdWVfaW4pIHtcblx0dmFyIHJldHVybmVkO1xuXHRpZiAodmFsdWVfaW4uaW5jbHVkZXMoJ3B4JykgfHwgdmFsdWVfaW4uaW5jbHVkZXMoJyUnKSkge1xuXHRcdHJldHVybmVkID0gdmFsdWVfaW47XG5cdH0gZWxzZSB7XG5cdFx0cmV0dXJuZWQgPSB2YWx1ZV9pbiArICdweCc7XG5cdH1cblx0cmV0dXJuIHJldHVybmVkO1xufVxuIiwiLyogQ29tcG9uZW50IFRhYnVsYXJTY3JvbGwgKi9cbihmdW5jdGlvbigkLCB3aW5kb3csIGRvY3VtZW50LCBTYXBwaGlyZVdpZGdldHMpIHtcblx0Y29uc3QgY3JlYXRlID0gZnVuY3Rpb24oY29uZmlnKSB7XG5cdFx0JChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oKSB7XG5cdFx0XHQkKCcuVGFidWxhclNjcm9sbCcpLmVhY2goZnVuY3Rpb24oaSwgZWwpIHtcblx0XHRcdFx0c2V0dXBUYWJ1bGFyU2Nyb2xsKCQoZWwpKTtcblx0XHRcdH0pO1xuXHRcdH0pO1xuXG5cdFx0JCh3aW5kb3cpLmxvYWQoZnVuY3Rpb24oKSB7XG5cdFx0XHRvc0FqYXhCYWNrZW5kLkJpbmRBZnRlckFqYXhSZXF1ZXN0KGZ1bmN0aW9uKCkge1xuXHRcdFx0XHQkKCcuVGFidWxhclNjcm9sbCcpLmVhY2goZnVuY3Rpb24oaSwgZWwpIHtcblx0XHRcdFx0XHRzZXR1cFRhYnVsYXJTY3JvbGwoJChlbCkpO1xuXHRcdFx0XHRcdHJlc2l6ZVJvd3MoJChlbCkpO1xuXHRcdFx0XHR9KTtcblx0XHRcdH0pO1xuXHRcdH0pO1xuXG5cdFx0JCh3aW5kb3cpLm9uKCdyZXNpemUudGFidWxhcnNjcm9sbCcsIGZ1bmN0aW9uKCkge1xuXHRcdFx0JCgnLlRhYnVsYXJTY3JvbGwnKS5lYWNoKGZ1bmN0aW9uKGksIGVsKSB7XG5cdFx0XHRcdHZhciAkY2VudGVyVGFibGUgPSAkKGVsKS5maW5kKCcuVGFidWxhclNjcm9sbC1jZW50ZXItdGFibGUnKTtcblx0XHRcdFx0dmFyIHRhYmxlV2lkdGggPSAkY2VudGVyVGFibGUuZmluZCgndGFibGUnKS53aWR0aCgpO1xuXHRcdFx0XHQkKGVsKVxuXHRcdFx0XHRcdC5maW5kKCcuVGFidWxhclNjcm9sbC1jZW50ZXIgLlRvcFNjcm9sbERyYWdnZXInKVxuXHRcdFx0XHRcdC53aWR0aCh0YWJsZVdpZHRoKTtcblx0XHRcdFx0aWYgKCRjZW50ZXJUYWJsZVswXS5zY3JvbGxXaWR0aCA+ICRjZW50ZXJUYWJsZS53aWR0aCgpKSB7XG5cdFx0XHRcdFx0JChlbClcblx0XHRcdFx0XHRcdC5maW5kKCcuVG9wU2Nyb2xsV3JhcHBlcicpXG5cdFx0XHRcdFx0XHQuY3NzKCd2aXNpYmlsaXR5JywgJ3Zpc2libGUnKTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHQkKGVsKVxuXHRcdFx0XHRcdFx0LmZpbmQoJy5Ub3BTY3JvbGxXcmFwcGVyJylcblx0XHRcdFx0XHRcdC5jc3MoJ3Zpc2liaWxpdHknLCAnaGlkZGVuJyk7XG5cdFx0XHRcdH1cblx0XHRcdH0pO1xuXHRcdH0pO1xuXHR9O1xuXG5cdGNvbnN0IHNldHVwVGFidWxhclNjcm9sbCA9IGZ1bmN0aW9uKCR0YWJ1bGFyU2Nyb2xsKSB7XG5cdFx0dmFyICR0b3BTY3JvbGxXcmFwcGVyID0gJHRhYnVsYXJTY3JvbGwuZmluZCgnLlRvcFNjcm9sbFdyYXBwZXInKTtcblx0XHR2YXIgJGNlbnRlclRhYmxlID0gJHRhYnVsYXJTY3JvbGwuZmluZCgnLlRhYnVsYXJTY3JvbGwtY2VudGVyLXRhYmxlJyk7XG5cdFx0JHRhYnVsYXJTY3JvbGwuZmluZCgnLlRvcFNjcm9sbFdyYXBwZXInKS5zY3JvbGwoZnVuY3Rpb24oKSB7XG5cdFx0XHQkY2VudGVyVGFibGUuc2Nyb2xsTGVmdCgkdG9wU2Nyb2xsV3JhcHBlci5zY3JvbGxMZWZ0KCkpO1xuXHRcdH0pO1xuXHRcdCRjZW50ZXJUYWJsZS5zY3JvbGwoZnVuY3Rpb24oKSB7XG5cdFx0XHQkdG9wU2Nyb2xsV3JhcHBlci5zY3JvbGxMZWZ0KCRjZW50ZXJUYWJsZS5zY3JvbGxMZWZ0KCkpO1xuXHRcdH0pO1xuXHRcdC8vIHNpbWlsYXIgdG8gUmVzaXplXG5cdFx0dmFyIHRhYmxlV2lkdGggPSAkY2VudGVyVGFibGUuZmluZCgndGFibGUnKS53aWR0aCgpO1xuXHRcdCR0YWJ1bGFyU2Nyb2xsLmZpbmQoJy5UYWJ1bGFyU2Nyb2xsLWNlbnRlciAuVG9wU2Nyb2xsRHJhZ2dlcicpLndpZHRoKHRhYmxlV2lkdGgpO1xuXHRcdGlmICgkY2VudGVyVGFibGVbMF0uc2Nyb2xsV2lkdGggPiAkY2VudGVyVGFibGUud2lkdGgoKSkge1xuXHRcdFx0JHRhYnVsYXJTY3JvbGwuZmluZCgnLlRvcFNjcm9sbFdyYXBwZXInKS5jc3MoJ3Zpc2liaWxpdHknLCAndmlzaWJsZScpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHQkdGFidWxhclNjcm9sbC5maW5kKCcuVG9wU2Nyb2xsV3JhcHBlcicpLmNzcygndmlzaWJpbGl0eScsICdoaWRkZW4nKTtcblx0XHR9XG5cdH07XG5cblx0Y29uc3QgcmVzaXplUm93cyA9IGZ1bmN0aW9uKCR0YWJ1bGFyU2Nyb2xsKSB7XG5cdFx0bGV0IGFycnJheUhlaWdodCA9IFtdO1xuXHRcdGNvbnN0ICR0YWJsZUNlbnRlciA9ICR0YWJ1bGFyU2Nyb2xsLmZpbmQoJy5UYWJ1bGFyU2Nyb2xsLWNlbnRlci10YWJsZSB0YWJsZSB0Ym9keScpO1xuXHRcdGNvbnN0ICR0YWJsZVJpZ2h0ID0gJHRhYnVsYXJTY3JvbGwuZmluZCgnLlRhYnVsYXJTY3JvbGwtcmlnaHQgLkxpc3RSZWNvcmRzJyk7XG5cdFx0Y29uc3QgJHRhYmxlTGVmdCA9ICR0YWJ1bGFyU2Nyb2xsLmZpbmQoJy5UYWJ1bGFyU2Nyb2xsLWxlZnQgLkxpc3RSZWNvcmRzJyk7XG5cblx0XHRhcnJyYXlIZWlnaHQgPSAkdGFibGVDZW50ZXJcblx0XHRcdC5jaGlsZHJlbigndHInKVxuXHRcdFx0Lm1hcChmdW5jdGlvbigpIHtcblx0XHRcdFx0cmV0dXJuICQodGhpcykuaGVpZ2h0KCk7XG5cdFx0XHR9KVxuXHRcdFx0LmdldCgpO1xuXG5cdFx0JHRhYmxlUmlnaHQuY2hpbGRyZW4oKS5lYWNoKGZ1bmN0aW9uKGluZGV4KSB7XG5cdFx0XHQkKHRoaXMpLmNzcygnaGVpZ2h0JywgYXJycmF5SGVpZ2h0W2luZGV4XSArICdweCcpO1xuXHRcdH0pO1xuXG5cdFx0JHRhYmxlTGVmdC5jaGlsZHJlbigpLmVhY2goZnVuY3Rpb24oaW5kZXgpIHtcblx0XHRcdCQodGhpcykuY3NzKCdoZWlnaHQnLCBhcnJyYXlIZWlnaHRbaW5kZXhdICsgJ3B4Jyk7XG5cdFx0fSk7XG5cdH07XG5cblx0U2FwcGhpcmVXaWRnZXRzLlRhYnVsYXJTY3JvbGwgPSB7IGNyZWF0ZSB9O1xufSkoalF1ZXJ5LCB3aW5kb3csIGRvY3VtZW50LCBTYXBwaGlyZVdpZGdldHMpO1xuIiwiLyogVGltZWxpbmUgSGVscGVycyAqL1xuU2FwcGhpcmVXaWRnZXRzLlRpbWVsaW5lQ291bnRlckl0ZW1zID0gZnVuY3Rpb24odGl0bGVJdGVtSUQsIGxhYmVsKSB7XG5cdCQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKCkge1xuXHRcdGNvbnN0ICRzZWN0aW9uID0gJChgIyR7dGl0bGVJdGVtSUR9YCkucGFyZW50cygnLlRpbWVsaW5lSXRlbVNlY3Rpb24nKTtcblx0XHRjb25zdCAkdGl0bGUgPSAkc2VjdGlvbi5maW5kKCcuVGltZWxpbmVJdGVtSGVhZGVyIGEnKTtcblx0XHRjb25zdCAkaXRlbXMgPSAkc2VjdGlvbi5maW5kKCcuVGltZWxpbmVJdGVtJyk7XG5cblx0XHQkdGl0bGUuYXBwZW5kKCQoYDxkaXYgY2xhc3M9J0NvbG9yR3JleVRleHQgVGV4dExhcmdlIFRleHRSZWd1bGFyJz4gKCR7JGl0ZW1zLmxlbmd0aH0pPC9kaXY+YCkpO1xuXHR9KTtcbn07XG5cblNhcHBoaXJlV2lkZ2V0cy5TY3JvbGxUb0V2ZW50ID0gZnVuY3Rpb24oZWxlbWVudElkKSB7XG5cdFNhcHBoaXJlV2lkZ2V0cy5MYXlvdXRCYXNlLnNjcm9sbFRvRWxlbWVudCgkKGAjJHtlbGVtZW50SWR9OmZpcnN0YCwgd2luZG93LnRvcC5kb2N1bWVudCksIDUyKTtcbn07XG5cblNhcHBoaXJlV2lkZ2V0cy5MaW5lVGltZWxpbmVDb21wb25lbnQgPSBmdW5jdGlvbih3aWRnZXRJZCwgaGFzQ29udGVudCwgaXNFeHBhbmRhYmxlKSB7XG5cdCQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKCkge1xuXHRcdGNvbnN0ICRjb21wb25lbnQgPSAkKGAjJHt3aWRnZXRJZH1gKTtcblxuXHRcdGlmIChoYXNDb250ZW50ICYmIGlzRXhwYW5kYWJsZSkge1xuXHRcdFx0Y29uc3QgJGV4cGFuZGFibGVMaW5rID0gJGNvbXBvbmVudC5maW5kKCcuTGluZVRpbWVMaW5lX19IZWFkZXInKTtcblx0XHRcdGNvbnN0ICRhY3Rpb25zID0gJGNvbXBvbmVudC5maW5kKCcuTGluZVRpbWVMaW5lX19BY3Rpb25zJyk7XG5cblx0XHRcdCRleHBhbmRhYmxlTGluay5jbGljaygoKSA9PiB7XG5cdFx0XHRcdCRjb21wb25lbnQudG9nZ2xlQ2xhc3MoJ0xpbmVUaW1lTGluZS0tZXhwYW5kZWQnKTtcblxuXHRcdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0XHR9KTtcblxuXHRcdFx0JGFjdGlvbnMuY2xpY2soZnVuY3Rpb24oZSkge1xuXHRcdFx0XHRlLnN0b3BQcm9wYWdhdGlvbigpO1xuXHRcdFx0fSk7XG5cdFx0fVxuXHR9KTtcbn07XG5cblNhcHBoaXJlV2lkZ2V0cy5UaW1lbGluZVBhZ2VFdmVudHMgPSBmdW5jdGlvbihzaG93TW9yZVRpbWVsaW5lTGluaykge1xuXHQkKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigpIHtcblx0XHQkKHdpbmRvdylcblx0XHRcdC5vZmYoJ3Njcm9sbC5UaW1lbGluZScpXG5cdFx0XHQub24oJ3Njcm9sbC5UaW1lbGluZScsIGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRpZiAod2luZG93LnNjcm9sbFkgPT09IDApIHtcblx0XHRcdFx0XHRjb25zdCAkaXRlbSA9ICQoJy5UaW1lbGluZUFuY2hvcicpLmZpcnN0KCk7XG5cdFx0XHRcdFx0Y29uc3QgJGxpc3QgPSAkKCcuVGltZWxpbmVQYWdlX19OYXZpZ2F0aW9uIC5MaXN0UmVjb3JkcycpO1xuXG5cdFx0XHRcdFx0c2VsZWN0SXRlbSgkaXRlbS5hdHRyKCdpZCcpKTtcblx0XHRcdFx0XHRjbGVhclRpbWVvdXQod2luZG93LnNjcm9sbEZpbmlzaGVkKTtcblxuXHRcdFx0XHRcdCRsaXN0LnNjcm9sbFRvcCgwKTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRjbGVhclRpbWVvdXQod2luZG93LnNjcm9sbEZpbmlzaGVkKTtcblx0XHRcdFx0XHR3aW5kb3cuc2Nyb2xsRmluaXNoZWQgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRcdFx0bGV0IGlkID0gMDtcblxuXHRcdFx0XHRcdFx0JCgnLlRpbWVsaW5lQW5jaG9yJykuZWFjaChmdW5jdGlvbihpbmRleCkge1xuXHRcdFx0XHRcdFx0XHRpZiAoJCh3aW5kb3cpLnNjcm9sbFRvcCgpICsgMTkwID49ICQodGhpcykub2Zmc2V0KCkudG9wKSB7XG5cdFx0XHRcdFx0XHRcdFx0aWQgPSAkKHRoaXMpLmF0dHIoJ2lkJyk7XG5cblx0XHRcdFx0XHRcdFx0XHRpZiAoaW5kZXggPT0gJCgnLlRpbWVsaW5lQW5jaG9yJykubGVuZ3RoIC0gMSkgc2VsZWN0SXRlbShpZCk7XG5cdFx0XHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRcdFx0c2VsZWN0SXRlbShpZCwgdHJ1ZSk7XG5cblx0XHRcdFx0XHRcdFx0XHR3aW5kb3cubGFzdEl0ZW1JRCA9IGlkO1xuXG5cdFx0XHRcdFx0XHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHR9KTtcblxuXHRcdFx0XHRcdFx0aWYgKCQoZG9jdW1lbnQpLmhlaWdodCgpIC0gJCh0aGlzKS5oZWlnaHQoKSAtIDE1MCA8ICQodGhpcykuc2Nyb2xsVG9wKCkpIHtcblx0XHRcdFx0XHRcdFx0Y29uc3QgJGxpc3QgPSAkKCcuVGltZWxpbmVQYWdlX19OYXZpZ2F0aW9uIC5MaXN0UmVjb3JkcycpO1xuXG5cdFx0XHRcdFx0XHRcdCQoYCMke3Nob3dNb3JlVGltZWxpbmVMaW5rfWApLmNsaWNrKCk7XG5cdFx0XHRcdFx0XHRcdCQoJy5UaW1lbGluZVBhZ2VfX1JpZ2h0IC5UaW1lbGluZVBhZ2VfX0xvYWRpbmdNb3JlJykuY3NzKCdkaXNwbGF5JywgJ2ZsZXgnKTtcblxuXHRcdFx0XHRcdFx0XHR3aW5kb3cuc2Nyb2xsTGlzdFBvc2l0aW9uID0gJGxpc3Quc2Nyb2xsVG9wKCk7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fSwgMTAwKTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdGNoZWNrRW5kT2ZQYWdlKCk7XG5cdFx0XHR9KTtcblxuXHRcdGluZmluaXRlU2Nyb2xsTGlzdChzaG93TW9yZVRpbWVsaW5lTGluayk7XG5cdH0pO1xufTtcblxuU2FwcGhpcmVXaWRnZXRzLlRpbWVsaW5lUmVzdG9yZUV2ZW50cyA9IGZ1bmN0aW9uKHNob3dNb3JlVGltZWxpbmVMaW5rKSB7XG5cdCQoJy5UaW1lbGluZVBhZ2VfX05hdmlnYXRpb24gLkxpc3RSZWNvcmRzJykuc2Nyb2xsVG9wKHdpbmRvdy5zY3JvbGxMaXN0UG9zaXRpb24pO1xuXHQkKCcuVGltZWxpbmVQYWdlX19Mb2FkaW5nTW9yZScpLmNzcygnZGlzcGxheScsICdub25lJyk7XG5cblx0d2luZG93LmFscmVhZHlDbGlja2VkID0gZmFsc2U7XG5cblx0aW5maW5pdGVTY3JvbGxMaXN0KHNob3dNb3JlVGltZWxpbmVMaW5rKTtcblxuXHRpZiAod2luZG93Lmxhc3RJdGVtSUQpIHNlbGVjdEl0ZW0od2luZG93Lmxhc3RJdGVtSUQpO1xufTtcblxuZnVuY3Rpb24gc2VsZWN0SXRlbShpZCwgc2Nyb2xsVG8pIHtcblx0Y29uc3QgJG5hdkl0ZW0gPSAkKGBbZGF0YS1pdGVtPWV2ZW50LSR7aWR9XSAuVGltZWxpbmVJdGVtYCk7XG5cblx0JCgnLlRpbWVsaW5lSXRlbS5UaW1lbGluZUl0ZW0tLWFjdGl2ZScpLnJlbW92ZUNsYXNzKCdUaW1lbGluZUl0ZW0tLWFjdGl2ZScpO1xuXHQkbmF2SXRlbS5hZGRDbGFzcygnVGltZWxpbmVJdGVtLS1hY3RpdmUnKTtcblxuXHRpZiAoc2Nyb2xsVG8gJiYgJG5hdkl0ZW0ubGVuZ3RoKSBzY3JvbGxUb1ZpZXcoJG5hdkl0ZW0pO1xufVxuXG5mdW5jdGlvbiBzY3JvbGxUb1ZpZXcoZWxlbWVudCkge1xuXHRjb25zdCAkcGFyZW50RGl2ID0gJCgnLlRpbWVsaW5lUGFnZV9fTmF2aWdhdGlvbiAuTGlzdFJlY29yZHMnKTtcblxuXHQkcGFyZW50RGl2LnNjcm9sbFRvcChcblx0XHQkcGFyZW50RGl2LnNjcm9sbFRvcCgpICsgZWxlbWVudC5wb3NpdGlvbigpLnRvcCAtICRwYXJlbnREaXYuaGVpZ2h0KCkgLyAyICsgZWxlbWVudC5oZWlnaHQoKSAvIDJcblx0KTtcblxuXHRyZXR1cm4gdHJ1ZTtcbn1cblxuZnVuY3Rpb24gaW5maW5pdGVTY3JvbGxMaXN0KHNob3dNb3JlTmF2TGluaywgbmFtZSkge1xuXHRjb25zdCAkbGlzdCA9ICQoJy5UaW1lbGluZVBhZ2VfX05hdmlnYXRpb24gLkxpc3RSZWNvcmRzJyk7XG5cblx0JGxpc3Qub2ZmKCdtb3VzZXdoZWVsLlRpbWVsaW5lTmF2Jykub24oJ21vdXNld2hlZWwuVGltZWxpbmVOYXYnLCBmdW5jdGlvbigpIHtcblx0XHRjb25zdCBsaXN0SGVpZ2h0ID0gJGxpc3QuaGVpZ2h0KCk7XG5cdFx0Y29uc3Qgc2Nyb2xsVG9wID0gJGxpc3Quc2Nyb2xsVG9wKCk7XG5cdFx0Y29uc3Qgc2Nyb2xsSGVpZ2h0ID0gJGxpc3QucHJvcCgnc2Nyb2xsSGVpZ2h0Jyk7XG5cblx0XHRpZiAobGlzdEhlaWdodCArIHNjcm9sbFRvcCArIDEwMCA+IHNjcm9sbEhlaWdodCAmJiBzY3JvbGxUb3AgPiAwICYmICF3aW5kb3cuYWxyZWFkeUNsaWNrZWQpIHtcblx0XHRcdGNsZWFyVGltZW91dCh3aW5kb3cuc2Nyb2xsTGlzdEZpbmlzaGVkKTtcblx0XHRcdHdpbmRvdy5zY3JvbGxMaXN0RmluaXNoZWQgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuXHRcdFx0XHQkKGAjJHtzaG93TW9yZU5hdkxpbmt9YCkuY2xpY2soKTtcblxuXHRcdFx0XHQkKCcuVGltZWxpbmVQYWdlX19Mb2FkaW5nTW9yZScpLmNzcygnZGlzcGxheScsICdmbGV4Jyk7XG5cblx0XHRcdFx0d2luZG93LnNjcm9sbExpc3RQb3NpdGlvbiA9ICRsaXN0LnNjcm9sbFRvcCgpO1xuXHRcdFx0XHR3aW5kb3cuYWxyZWFkeUNsaWNrZWQgPSB0cnVlO1xuXHRcdFx0fSwgMTAwKTtcblx0XHR9XG5cdH0pO1xufVxuXG5mdW5jdGlvbiBjaGVja0VuZE9mUGFnZSgpIHtcblx0aWYgKHdpbmRvdy5pbm5lckhlaWdodCArIHdpbmRvdy5wYWdlWU9mZnNldCA+PSBkb2N1bWVudC5ib2R5Lm9mZnNldEhlaWdodCkge1xuXHRcdGNvbnN0ICRpdGVtID0gJCgnLlRpbWVsaW5lQW5jaG9yJykubGFzdCgpO1xuXHRcdHdpbmRvdy5sYXN0SXRlbUlEID0gJGl0ZW0uYXR0cignaWQnKTtcblx0fVxufVxuIiwiLyogQ29tcG9uZW50IFRyaWdnZXJJZnJhbWVUb29sdGlwICovXHJcbihmdW5jdGlvbigkLCB3aW5kb3csIGRvY3VtZW50LCBTYXBwaGlyZVdpZGdldHMpIHtcclxuXHR2YXIgY3JlYXRlID0gZnVuY3Rpb24oY29uZmlnKSB7XHJcblx0XHR2YXIgJGVsZW1lbnRJZCA9ICQoJyMnICsgY29uZmlnLmVsZW1lbnRJZCk7XHJcblxyXG5cdFx0JGVsZW1lbnRJZC5hZGRDbGFzcygndG9vbHRpcCcpO1xyXG5cclxuXHRcdGlmIChjb25maWcudHJpZ2dlcklkID09PSAnY2xpY2snKSAkZWxlbWVudElkLmFkZENsYXNzKCd0b29sdGlwc3RlcmVkLS1wb2ludGVyJyk7XHJcblxyXG5cdFx0Y29uc3Qgd2lkZ2V0Tm90aWZ5RGl2ID0gJC5maW5kKCdbZGF0YS1pZnJhbWV0b29sdGlwdHJpZ2dlcmlkPVwiJyArIGNvbmZpZy5lbGVtZW50SWQgKyAnXCJdJyk7XHJcblx0XHRsZXQgd2lkZ2V0Tm90aWZ5SWQgPSAnJztcclxuXHJcblx0XHRpZiAod2lkZ2V0Tm90aWZ5RGl2Lmxlbmd0aCA9PT0gMSkge1xyXG5cdFx0XHR3aWRnZXROb3RpZnlJZCA9ICQod2lkZ2V0Tm90aWZ5RGl2KS5kYXRhKCdpZnJhbWV0b29sdGlwbm90aWZ5aWQnKTtcclxuXHRcdH1cclxuXHJcblx0XHQkZWxlbWVudElkLnRvb2x0aXBzdGVyKHtcclxuXHRcdFx0Y29udGVudEFzSFRNTDogdHJ1ZSxcclxuXHRcdFx0dGhlbWU6IGNvbmZpZy50aGVtZSxcclxuXHRcdFx0aW50ZXJhY3RpdmU6IHRydWUsXHJcblx0XHRcdHBvc2l0aW9uOiBjb25maWcucG9zaXRpb25JZCxcclxuXHRcdFx0dHJpZ2dlcjogY29uZmlnLnRyaWdnZXJJZCxcclxuXHRcdFx0bWluV2lkdGg6IGNvbmZpZy5taW5XaWR0aCxcclxuXHRcdFx0bWF4V2lkdGg6IGNvbmZpZy5tYXhXaWR0aCxcclxuXHRcdFx0emluZGV4OiBjb25maWcuemluZGV4LFxyXG5cdFx0XHRvbmx5T25lOiB0cnVlLFxyXG5cdFx0XHRjb250ZW50OiBgPGlmcmFtZSBpZD1cInRvb2x0aXBzdGVyLWZyYW1lXCIgZGF0YS11aT1cImlmcmFtZS10b29sdGlwXCIgc3JjPVwiJHtjb25maWcuVVJMfVwiIHN0eWxlPVwiYm9yZGVyOm5vbmU7IG1pbi1oZWlnaHQ6JHtjb25maWcubWluSGVpZ2h0fXB4O1wiIGRhdGEtaWZyYW1ldG9vbHRpcHRyaWdnZXJpZD1cIiR7Y29uZmlnLmVsZW1lbnRJZH1cIiBpZnJhbWV0b29sdGlwbm90aWZ5aWQ9XCIke3dpZGdldE5vdGlmeUlkfVwiPjwvaWZyYW1lPmAsXHJcblx0XHRcdGZ1bmN0aW9uUmVhZHk6IGZ1bmN0aW9uKGluc3RhbmNlLCBoZWxwZXIpIHtcclxuXHRcdFx0XHQkKGhlbHBlcikuY3NzKHsgdmlzaWJpbGl0eTogJ2hpZGRlbicgfSk7XHJcblxyXG5cdFx0XHRcdGlmIChjb25maWcubm9QYWRkaW5nKSAkKCcudG9vbHRpcHN0ZXItY29udGVudCcpLmFkZENsYXNzKCd0b29sdGlwc3Rlci0tbm9QYWRkaW5nJyk7XHJcblx0XHRcdFx0aWYgKGNvbmZpZy5jdXN0b21DbGFzcykgJCgnLnRvb2x0aXBzdGVyLWNvbnRlbnQnKS5hZGRDbGFzcyhjb25maWcuY3VzdG9tQ2xhc3MpO1xyXG5cclxuXHRcdFx0XHRzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdFx0JCgnLnRvb2x0aXBzdGVyLWJhc2UnKS5jc3Moe1xyXG5cdFx0XHRcdFx0XHR2aXNpYmlsaXR5OiAndmlzaWJsZScsXHJcblx0XHRcdFx0XHRcdG1pbkhlaWdodDogY29uZmlnLm1pbkhlaWdodCA+IDAgPyBjb25maWcubWluSGVpZ2h0IDogJ2F1dG8nLFxyXG5cdFx0XHRcdFx0fSk7XHJcblx0XHRcdFx0fSwgNTAwKTtcclxuXHJcblx0XHRcdFx0JCgnLnRvb2x0aXBzdGVyLWNvbnRlbnQnKS5wcmVwZW5kKCc8ZGl2IGNsYXNzPVwiVG9vbHRpcHN0ZXJMb2FkaW5nXCI+PGRpdiBjbGFzcz1cImxkcy1yaW5nXCI+PGRpdj48L2Rpdj48L2Rpdj4nKTtcclxuXHJcblx0XHRcdFx0Y29uc3QgaXNMZWZ0T3JSaWdodCA9IGNvbmZpZy5wb3NpdGlvbklkID09PSAnbGVmdCcgfHwgY29uZmlnLnBvc2l0aW9uSWQgPT09ICdyaWdodCc7XHJcblxyXG5cdFx0XHRcdC8vIFNldCBhIGZpeGVkIGhlaWdodCBpbiBvcmRlciB0byBrZWVwIHRoZSBhcnJvdyBpbiB0aGUgc2FtZSBwb3NpdGlvblxyXG5cdFx0XHRcdGlmIChpc0xlZnRPclJpZ2h0KSB7XHJcblx0XHRcdFx0XHRzZXRGaXhIZWlnaHQoKTtcclxuXHJcblx0XHRcdFx0XHQkKHdpbmRvdylcclxuXHRcdFx0XHRcdFx0Lm9mZignc2Nyb2xsLlRvb2x0aXAnKVxyXG5cdFx0XHRcdFx0XHQub24oJ3Njcm9sbC5Ub29sdGlwJywgZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0XHRcdFx0c2V0VGltZW91dCgoKSA9PiB7XHJcblx0XHRcdFx0XHRcdFx0XHRzZXRGaXhIZWlnaHQoKTtcclxuXHRcdFx0XHRcdFx0XHR9LCA1MDApO1xyXG5cdFx0XHRcdFx0XHR9KTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0sXHJcblx0XHRcdGZ1bmN0aW9uQWZ0ZXI6IGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdCQod2luZG93KS5vZmYoJ3Njcm9sbC5Ub29sdGlwJyk7XHJcblx0XHRcdH0sXHJcblx0XHR9KTtcclxuXHR9O1xyXG5cclxuXHRjb25zdCBzZXRGaXhIZWlnaHQgPSAoKSA9PiB7XHJcblx0XHRjb25zdCAkYXJyb3cgPSAkKCcudG9vbHRpcHN0ZXItYXJyb3cnKTtcclxuXHJcblx0XHQkYXJyb3cuaGVpZ2h0KCRhcnJvdy5oZWlnaHQoKSk7XHJcblx0fTtcclxuXHJcblx0U2FwcGhpcmVXaWRnZXRzLlRyaWdnZXJJZnJhbWVUb29sdGlwID0geyBjcmVhdGUgfTtcclxufSkoalF1ZXJ5LCB3aW5kb3csIGRvY3VtZW50LCBTYXBwaGlyZVdpZGdldHMpO1xyXG4iLCIvKiBDb21wb25lbnQgVHJ1bmNhdGVkQ29udGVudCAqL1xuKGZ1bmN0aW9uKCQsIHdpbmRvdywgZG9jdW1lbnQsIFNhcHBoaXJlV2lkZ2V0cykge1xuXHRjb25zdCBjcmVhdGUgPSBmdW5jdGlvbihjb25maWcgPSB7fSkge1xuXHRcdCQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKCkge1xuXHRcdFx0dmFyICRhbGxUcnVuY2F0ZWQgPSAkKFtdKTtcblx0XHRcdHZhciByb290U2VsZWN0b3IgPSBgIyR7Y29uZmlnLndpZGdldElkfWA7XG5cdFx0XHR2YXIgb3BlbmVyU2VsZWN0b3IgPSAnLlRydW5jYXRlZENvbnRlbnQtLWFsbCc7XG5cdFx0XHR2YXIgYm9keVNlbGVjdG9yID0gJy5UcnVuY2F0ZWRDb250ZW50LS1ib2R5JztcblxuXHRcdFx0JChyb290U2VsZWN0b3IpLmVhY2goZnVuY3Rpb24oKSB7XG5cdFx0XHRcdHZhciAkZWwgPSAkKHRoaXMpO1xuXHRcdFx0XHQkYWxsVHJ1bmNhdGVkID0gJGFsbFRydW5jYXRlZC5hZGQoJGVsKTtcblx0XHRcdFx0dmFyICRlbEJvZHkgPSAkZWwuZmluZChib2R5U2VsZWN0b3IpO1xuXHRcdFx0XHR2YXIgbWF4TGluZXMgPSAkZWwuZGF0YSgnbWF4bGluZXMnKTtcblx0XHRcdFx0dmFyIGxpbmVIZWlnaHQgPSB3aW5kb3dcblx0XHRcdFx0XHQuZ2V0Q29tcHV0ZWRTdHlsZSgkZWwuZmluZCgnPiBkaXYnKVswXSlcblx0XHRcdFx0XHQuZ2V0UHJvcGVydHlWYWx1ZSgnbGluZS1oZWlnaHQnKVxuXHRcdFx0XHRcdC5yZXBsYWNlKCdweCcsICcnKTtcblx0XHRcdFx0dmFyIGxpbmVDb3VudCA9IE1hdGguY2VpbCgkZWwuaGVpZ2h0KCkgLyBsaW5lSGVpZ2h0KTtcblx0XHRcdFx0aWYgKGxpbmVDb3VudCA+IG1heExpbmVzKSB7XG5cdFx0XHRcdFx0JGVsQm9keS5jc3Moe1xuXHRcdFx0XHRcdFx0bWF4SGVpZ2h0OiBsaW5lSGVpZ2h0ICogbWF4TGluZXMgKyAncHgnLFxuXHRcdFx0XHRcdH0pO1xuXHRcdFx0XHRcdHZhciBzZW50ZW5jZSA9ICRlbC5kYXRhKCdhZGRpdGlvbmFsJykucmVwbGFjZSgne259JywgbGluZUNvdW50IC0gbWF4TGluZXMpO1xuXHRcdFx0XHRcdCRlbC5hcHBlbmQoJzxwIGNsYXNzPVwiJyArIG9wZW5lclNlbGVjdG9yLnJlcGxhY2UoJy4nLCAnJykgKyAnXCI+JyArIHNlbnRlbmNlICsgJzwvcD4nKTtcblx0XHRcdFx0fVxuXHRcdFx0fSk7XG5cblx0XHRcdCQocm9vdFNlbGVjdG9yKS5vbignY2xpY2snLCBvcGVuZXJTZWxlY3RvciwgZnVuY3Rpb24oKSB7XG5cdFx0XHRcdHZhciBlbCA9ICQodGhpcykuY2xvc2VzdChyb290U2VsZWN0b3IpO1xuXHRcdFx0XHRvcGVuVHJ1bmNhdGVkQ29udGVudChlbCk7XG5cdFx0XHR9KTtcblxuXHRcdFx0b3BlblRydW5jYXRlZENvbnRlbnQgPSBmdW5jdGlvbihlbCkge1xuXHRcdFx0XHQkKGVsKVxuXHRcdFx0XHRcdC5maW5kKGJvZHlTZWxlY3Rvcilcblx0XHRcdFx0XHQuY3NzKCdtYXgtaGVpZ2h0JywgJ25vbmUnKTtcblx0XHRcdFx0JChlbClcblx0XHRcdFx0XHQuZmluZChvcGVuZXJTZWxlY3Rvcilcblx0XHRcdFx0XHQuY3NzKCdkaXNwbGF5JywgJ25vbmUnKTtcblx0XHRcdH07XG5cblx0XHRcdGlmICh3aW5kb3cuZnJhbWVFbGVtZW50ICYmIHdpbmRvdy5mcmFtZUVsZW1lbnQuaWQgPT09ICd0b29sdGlwc3Rlci1mcmFtZScpIHtcblx0XHRcdFx0JChyb290U2VsZWN0b3IpLm9mZignY2xpY2snLCBvcGVuZXJTZWxlY3Rvcik7XG5cdFx0XHRcdCQob3BlbmVyU2VsZWN0b3IpLmFkZENsYXNzKCdpbi10b29sdGlwJyk7XG5cdFx0XHR9XG5cdFx0fSk7XG5cdH07XG5cblx0U2FwcGhpcmVXaWRnZXRzLlRydW5jYXRlZENvbnRlbnQgPSB7XG5cdFx0Y3JlYXRlLFxuXHRcdG9wZW46IGZ1bmN0aW9uKGVsKSB7XG5cdFx0XHRvcGVuVHJ1bmNhdGVkQ29udGVudChlbCk7XG5cdFx0fSxcblx0XHRvcGVuQWxsOiBmdW5jdGlvbigpIHtcblx0XHRcdCRhbGxUcnVuY2F0ZWQuZWFjaChmdW5jdGlvbigpIHtcblx0XHRcdFx0b3BlblRydW5jYXRlZENvbnRlbnQoJCh0aGlzKSk7XG5cdFx0XHR9KTtcblx0XHR9LFxuXHR9O1xufSkoalF1ZXJ5LCB3aW5kb3csIGRvY3VtZW50LCBTYXBwaGlyZVdpZGdldHMpO1xuIiwiU2FwcGhpcmVXaWRnZXRzLkNsaW5pY2lhbldvcmtBcmVhID0gZnVuY3Rpb24oY29udGFpbmVySUQpIHtcblx0JChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oKSB7XG5cdFx0Y29uc3QgJGNvbnRhaW5lciA9ICQoYCMke2NvbnRhaW5lcklEfWApO1xuXHRcdGNvbnN0ICR0b2dnbGVyID0gJGNvbnRhaW5lci5maW5kKCcuU2VjdGlvbkV4cGFuZGFibGUtdG9nZ2xlcicpO1xuXG5cdFx0aWYgKCR0b2dnbGVyLmxlbmd0aCA9PT0gMSkge1xuXHRcdFx0bGV0ICR0b2dnbGVyU3RhdGUgPSBmYWxzZTtcblxuXHRcdFx0JHRvZ2dsZXIuZmluZCgnW2RhdGEtbGFiZWx2YWx1ZV0nKS50ZXh0KCR0b2dnbGVyLmZpbmQoJ1tkYXRhLWxhYmVsc2hvd10nKS5kYXRhKCdsYWJlbHNob3cnKSk7XG5cblx0XHRcdCR0b2dnbGVyLm9mZignY2xpY2snKS5vbignY2xpY2snLCBmdW5jdGlvbihldnQpIHtcblx0XHRcdFx0ZXZ0LnN0b3BQcm9wYWdhdGlvbigpO1xuXG5cdFx0XHRcdGJ1dHRvbkNsaWNrKCk7XG5cdFx0XHR9KTtcblxuXHRcdFx0Y29uc3QgYnV0dG9uQ2xpY2sgPSBmdW5jdGlvbigpIHtcblx0XHRcdFx0JHRvZ2dsZXJTdGF0ZSA9ICEkdG9nZ2xlclN0YXRlO1xuXG5cdFx0XHRcdGlmICgkdG9nZ2xlclN0YXRlKSB7XG5cdFx0XHRcdFx0JGNvbnRhaW5lci5maW5kKCcuU2VjdGlvbkV4cGFuZGFibGUtdG9nZ2xlZCcpLnNob3coKTtcblx0XHRcdFx0XHQkdG9nZ2xlci5maW5kKCdbZGF0YS1sYWJlbHZhbHVlXScpLnRleHQoJHRvZ2dsZXIuZmluZCgnW2RhdGEtbGFiZWxoaWRlXScpLmRhdGEoJ2xhYmVsaGlkZScpKTtcblxuXHRcdFx0XHRcdCR0b2dnbGVyLmhpZGUoKTtcblxuXHRcdFx0XHRcdGNvbnN0ICRjYW5jZWxCdXR0b24gPSAkKCcuU2VjdGlvbkV4cGFuZGFibGUtdG9nZ2xlZCAuQnV0dG9uQ2FuY2VsU2VhcmNoJyk7XG5cdFx0XHRcdFx0JGNhbmNlbEJ1dHRvbi5jbGljaygoKSA9PiBidXR0b25DbGljaygpKTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHQkY29udGFpbmVyLmZpbmQoJy5TZWN0aW9uRXhwYW5kYWJsZS10b2dnbGVkJykuaGlkZSgpO1xuXHRcdFx0XHRcdCR0b2dnbGVyLmZpbmQoJ1tkYXRhLWxhYmVsdmFsdWVdJykudGV4dCgkdG9nZ2xlci5maW5kKCdbZGF0YS1sYWJlbHNob3ddJykuZGF0YSgnbGFiZWxzaG93JykpO1xuXG5cdFx0XHRcdFx0JHRvZ2dsZXIuc2hvdygpO1xuXG5cdFx0XHRcdFx0Y29uc3QgJGNhbmNlbEJ1dHRvbiA9ICQoJy5TZWN0aW9uRXhwYW5kYWJsZS10b2dnbGVkIC5CdXR0b25DYW5jZWxTZWFyY2gnKTtcblx0XHRcdFx0XHQkY2FuY2VsQnV0dG9uLm9mZignY2xpY2snKTtcblx0XHRcdFx0fVxuXHRcdFx0fTtcblx0XHR9XG5cdH0pO1xufTtcbiIsIlNhcHBoaXJlV2lkZ2V0cy5RUkNvZGVTY2FubmVyID0gZnVuY3Rpb24ob3B0aW9ucykge1xuXHRIdG1sNVFyY29kZS5nZXRDYW1lcmFzKClcblx0XHQudGhlbihkZXZpY2VzID0+IHtcblx0XHRcdGlmIChkZXZpY2VzICYmIGRldmljZXMubGVuZ3RoKSBzdGFydENhbWVyYShkZXZpY2VzWzBdLmlkKTtcblx0XHR9KVxuXHRcdC5jYXRjaChlcnIgPT4ge1xuXHRcdFx0Ly8gQXBwIGRvZXNuJ3QgaGF2ZSBhY2Nlc3MgdG8gdGhlIGNhbWVyYS4uLlxuXG5cdFx0XHRzZXRUaW1lb3V0KCgpID0+IHtcblx0XHRcdFx0Y29uc3QgJGNoZWNrYm94ID0gJCgnLkFjY2Vzc0NvZGVPcHRpb24nKTtcblxuXHRcdFx0XHQkY2hlY2tib3guYXR0cignY2hlY2tlZCcsIHRydWUpLnRyaWdnZXIoJ2NsaWNrJyk7XG5cdFx0XHRcdCQoJy5MYXlvdXRTY2FuQ29kZScpLmFkZENsYXNzKCdMYXlvdXRTY2FuQ29kZS0tbW9kZU9ubHlDb2RlJyk7XG5cblx0XHRcdFx0JCgnLkxheW91dFNjYW5Db2RlX19TcGxhc2gnKS5mYWRlT3V0KDUwMCk7XG5cdFx0XHR9LCA1MDApO1xuXHRcdH0pO1xuXG5cdGZ1bmN0aW9uIHN0YXJ0Q2FtZXJhKGNhbWVyYUlEKSB7XG5cdFx0Y29uc3QgaHRtbDVRckNvZGUgPSBuZXcgSHRtbDVRcmNvZGUoJ3FycmVhZGVyJyk7XG5cdFx0Y29uc3QgY29uZmlnID0geyBmcHM6IDUsIHFyYm94OiAyNTAgfTtcblxuXHRcdGNvbnN0IHN1Y2Nlc3NDYWxsYmFjayA9IHJlc3BvbnNlID0+IHtcblx0XHRcdGlmICgkKCcuTW9kZUFjY2Vzc0NvZGUnKS5sZW5ndGgpIHJldHVybjtcblxuXHRcdFx0JCgnLlNjYW5PdmVybGF5JykuYWRkQ2xhc3MoJ1NjYW5PdmVybGF5LS1jb3JyZWN0Q29kZScpO1xuXG5cdFx0XHRPc05vdGlmeVdpZGdldChvcHRpb25zLndpZGdldEZha2VOb3RpZnlJZCwgcmVzcG9uc2UpO1xuXG5cdFx0XHQvL3NldFRpbWVvdXQoKCkgPT4gaHRtbDVRckNvZGUuc3RvcCgpLCAxMDAwKTtcblx0XHR9O1xuXG5cdFx0Y29uc3QgZXJyb3JDYWxsYmFjayA9IHJlc3BvbnNlID0+IHtcblx0XHRcdC8vIGNvbnNvbGUuZXJyb3IocmVzcG9uc2UpO1xuXHRcdH07XG5cblx0XHRodG1sNVFyQ29kZVxuXHRcdFx0LnN0YXJ0KHsgZmFjaW5nTW9kZTogJ2Vudmlyb25tZW50JyB9LCBjb25maWcsIHN1Y2Nlc3NDYWxsYmFjaywgZXJyb3JDYWxsYmFjaylcblx0XHRcdC50aGVuKCgpID0+IHtcblx0XHRcdFx0c2V0VGltZW91dCgoKSA9PiAkKCcuTGF5b3V0U2NhbkNvZGVfX1NwbGFzaCcpLmZhZGVPdXQoNTAwKSwgNTAwKTtcblx0XHRcdH0pXG5cdFx0XHQuY2F0Y2goZXJyID0+IHtcblx0XHRcdFx0Y29uc29sZS5lcnJvcihlcnIpO1xuXHRcdFx0fSk7XG5cdH1cblxuXHRsZXQgaXNQb3J0cmFpdCA9IHdpbmRvdy5tYXRjaE1lZGlhKCcob3JpZW50YXRpb246IHBvcnRyYWl0KScpLm1hdGNoZXM7XG5cdGxldCBpc09yaWVudGFyaW9uQ2hhbmdlZCA9IGZhbHNlO1xuXG5cdCQod2luZG93KS5vbignb3JpZW50YXRpb25jaGFuZ2UnLCBmdW5jdGlvbihldmVudCkge1xuXHRcdGlmICgkKCcuTW9kZUFjY2Vzc0NvZGUnKS5sZW5ndGgpIHtcblx0XHRcdGlzT3JpZW50YXJpb25DaGFuZ2VkID0gd2luZG93Lm1hdGNoTWVkaWEoJyhvcmllbnRhdGlvbjogcG9ydHJhaXQpJykubWF0Y2hlcztcblx0XHRcdFNhcHBoaXJlV2lkZ2V0cy5Jc09yaWVudGFyaW9uQ2hhbmdlZCA9ICEoaXNQb3J0cmFpdCBeIGlzT3JpZW50YXJpb25DaGFuZ2VkKTtcblxuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKTtcblx0fSk7XG59O1xuXG5TYXBwaGlyZVdpZGdldHMuT25Nb2RlQ2hhbmdlID0gZnVuY3Rpb24oKSB7XG5cdCQoJy5TY2FuT3ZlcmxheScpLnJlbW92ZUNsYXNzKCdTY2FuT3ZlcmxheS0tY29ycmVjdENvZGUnKTtcblx0JCgnLlNjYW5PdmVybGF5JykucmVtb3ZlQ2xhc3MoJ1NjYW5PdmVybGF5LS1pbmNvcnJlY3RDb2RlJyk7XG5cblx0aWYgKFNhcHBoaXJlV2lkZ2V0cy5Jc09yaWVudGFyaW9uQ2hhbmdlZCAmJiAhJCgnLk1vZGVBY2Nlc3NDb2RlJykubGVuZ3RoKSB7XG5cdFx0d2luZG93LmxvY2F0aW9uLnJlbG9hZCgpO1xuXHR9XG59O1xuXG5TYXBwaGlyZVdpZGdldHMuR29OZXh0SW5wdXQgPSBmdW5jdGlvbihjdXJyZW50SW5wdXQsIG5leHRJbnB1dENsYXNzKSB7XG5cdGNvbnN0IGtleSA9IGV2ZW50LmtleUNvZGUgfHwgZXZlbnQuY2hhckNvZGU7XG5cdGNvbnN0IGlzTnVtYmVyID0gIWlzTmFOKGV2ZW50LmtleSkgJiYgIWlzTmFOKHBhcnNlRmxvYXQoZXZlbnQua2V5KSk7XG5cblx0Y29uc3QgJGN1cnIgPSAkKGN1cnJlbnRJbnB1dCk7XG5cdGNvbnN0ICRuZXh0ID0gJChgLiR7bmV4dElucHV0Q2xhc3N9YCk7XG5cdGNvbnN0ICRwcmV2ID0gJGN1cnIucHJldkFsbCgnaW5wdXQnKS5maXJzdCgpO1xuXG5cdGlmIChrZXkgPT09IDggfHwga2V5ID09PSA0Nikge1xuXHRcdCRwcmV2LmZvY3VzKCk7XG5cdFx0JGN1cnIucmVtb3ZlQ2xhc3MoJ0NvbG9yQWxwaGFCb3JkZXInKTtcblxuXHRcdHJldHVybjtcblx0fVxuXG5cdGlmIChpc051bWJlcikge1xuXHRcdCRuZXh0LmZvY3VzKCk7XG5cdFx0JGN1cnIuYWRkQ2xhc3MoJ0NvbG9yQWxwaGFCb3JkZXInKTtcblx0XHQkKCcuVmFsaWRhdGVJbnB1dEJ1dHRvbicpLmNsaWNrKCk7XG5cdH0gZWxzZSBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xufTtcbiIsIihmdW5jdGlvbigkLCB3aW5kb3csIFNhcHBoaXJlV2lkZ2V0cykge1xuXHRjb25zdCBjcmVhdGUgPSAoKSA9PiB7XG5cdFx0Y29uc3QgJHdpZGdldCA9ICQoJy5SZW1vdGVBcHBvaW50bWVudCcpO1xuXHRcdGNvbnN0ICRoZWFkZXIgPSAkd2lkZ2V0LmZpbmQoJy5SZW1vdGVBcHBvaW50bWVudF9fSGVhZGVyJyk7XG5cdFx0Y29uc3QgJG1pbmltaXplID0gJGhlYWRlci5maW5kKCcuTWluaW1pemUnKTtcblx0XHRjb25zdCAkc21hbGxTaXplID0gJGhlYWRlci5maW5kKCcuU21hbGwnKTtcblx0XHRjb25zdCAkbWVkaXVtU2l6ZSA9ICRoZWFkZXIuZmluZCgnLk1lZGl1bScpO1xuXHRcdGNvbnN0ICRmdWxsU2NyZWVuID0gJGhlYWRlci5maW5kKCcuRnVsbFNjcmVlbicpO1xuXHRcdGNvbnN0ICRyZXN0b3JlV2luZG93ID0gJHdpZGdldC5maW5kKCcuUmVtb3RlQXBwb2ludG1lbnRfX1Jlc3RvcmVXaW5kb3cnKTtcblxuXHRcdGxldCBpc1ByZXZpb3VzU21hbGwgPSAkc21hbGxTaXplLmlzKCc6dmlzaWJsZScpO1xuXG5cdFx0JG1pbmltaXplLmNsaWNrKCgpID0+IHtcblx0XHRcdGlzUHJldmlvdXNTbWFsbCA9ICRtZWRpdW1TaXplLmlzKCc6dmlzaWJsZScpO1xuXG5cdFx0XHQvLyR3aWRnZXQuZHJhZ2dhYmxlKHsgZGlzYWJsZWQ6IHRydWUgfSk7XG5cblx0XHRcdCR3aWRnZXQuYWRkQ2xhc3MoJ1JlbW90ZUFwcG9pbnRtZW50LS1taW5pbWl6ZWQnKTtcblx0XHRcdCRtaW5pbWl6ZS5oaWRlKCk7XG5cdFx0XHQkbWVkaXVtU2l6ZS5zaG93KCk7XG5cblx0XHRcdCR3aWRnZXQuYW5pbWF0ZShtaW5pbWl6ZWRQb3NpdGlvbigkaGVhZGVyLmhlaWdodCgpKSk7XG5cdFx0fSk7XG5cblx0XHQkc21hbGxTaXplLmNsaWNrKCgpID0+IHtcblx0XHRcdCR3aWRnZXQucmVtb3ZlQ2xhc3MoJ1JlbW90ZUFwcG9pbnRtZW50LS1taW5pbWl6ZWQnKTtcblx0XHRcdCRtaW5pbWl6ZS5zaG93KCk7XG5cdFx0XHQkc21hbGxTaXplLmhpZGUoKTtcblx0XHRcdCRtZWRpdW1TaXplLnNob3coKTtcblxuXHRcdFx0JHdpZGdldC5hbmltYXRlKHtcblx0XHRcdFx0dG9wOiAnNTAlJyxcblx0XHRcdFx0cmlnaHQ6ICc1MCUnLFxuXHRcdFx0XHRsZWZ0OiAnNTAlJyxcblx0XHRcdFx0d2lkdGg6ICcyODBweCcsXG5cdFx0XHRcdGhlaWdodDogJzM4MHB4Jyxcblx0XHRcdH0pO1xuXHRcdH0pO1xuXG5cdFx0JG1lZGl1bVNpemUuY2xpY2soKCkgPT4ge1xuXHRcdFx0Y29uc3QgaXNDYWxsU3RhcnRlZCA9ICR3aWRnZXQuaGFzQ2xhc3MoJ1JlbW90ZUFwcG9pbnRtZW50LS1jYWxsU3RhcnRlZCcpO1xuXG5cdFx0XHQvLyR3aWRnZXQuZHJhZ2dhYmxlKCdlbmFibGUnKTtcblxuXHRcdFx0JHdpZGdldC5yZW1vdmVDbGFzcygnUmVtb3RlQXBwb2ludG1lbnQtLW1pbmltaXplZCcpO1xuXHRcdFx0JG1pbmltaXplLnNob3coKTtcblx0XHRcdCRtZWRpdW1TaXplLmhpZGUoKTtcblx0XHRcdGlmIChpc0NhbGxTdGFydGVkKSAkc21hbGxTaXplLnNob3coKTtcblxuXHRcdFx0JHdpZGdldC5hbmltYXRlKHtcblx0XHRcdFx0dG9wOiAnNTAlJyxcblx0XHRcdFx0cmlnaHQ6ICc1MCUnLFxuXHRcdFx0XHRsZWZ0OiAnNTAlJyxcblx0XHRcdFx0d2lkdGg6IGlzQ2FsbFN0YXJ0ZWQgPyAnNDV2dycgOiAnNDUwcHgnLFxuXHRcdFx0XHRoZWlnaHQ6IGlzQ2FsbFN0YXJ0ZWQgPyAnNDV2aCcgOiAnMjYwcHgnLFxuXHRcdFx0fSk7XG5cdFx0fSk7XG5cblx0XHQkZnVsbFNjcmVlbi5jbGljaygoKSA9PiB7XG5cdFx0XHRjb25zdCBpZnJhbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuUmVtb3RlQXBwb2ludG1lbnQgaWZyYW1lJyk7XG5cblx0XHRcdGlmIChpZnJhbWUucmVxdWVzdEZ1bGxzY3JlZW4pIHtcblx0XHRcdFx0aWZyYW1lLnJlcXVlc3RGdWxsc2NyZWVuKCk7XG5cdFx0XHR9IGVsc2UgaWYgKGlmcmFtZS53ZWJraXRSZXF1ZXN0RnVsbHNjcmVlbikge1xuXHRcdFx0XHRpZnJhbWUud2Via2l0UmVxdWVzdEZ1bGxzY3JlZW4oKTtcblx0XHRcdH1cblx0XHR9KTtcblxuXHRcdCRyZXN0b3JlV2luZG93LmNsaWNrKCgpID0+IHtcblx0XHRcdGlmIChpc1ByZXZpb3VzU21hbGwpICRzbWFsbFNpemUuY2xpY2soKTtcblx0XHRcdGVsc2UgJG1lZGl1bVNpemUuY2xpY2soKTtcblx0XHR9KTtcblxuXHRcdCQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKCkge1xuXHRcdFx0JHdpZGdldC5kcmFnZ2FibGUoe1xuXHRcdFx0XHRjb250YWlubWVudDogJ3dpbmRvdycsXG5cdFx0XHRcdGhhbmRsZTogJGhlYWRlcixcblx0XHRcdFx0c2Nyb2xsOiBmYWxzZSxcblx0XHRcdFx0c25hcDogdHJ1ZSxcblx0XHRcdFx0aWZyYW1lRml4OiB0cnVlLFxuXHRcdFx0fSk7XG5cblx0XHRcdGZha2VBamF4UmVmcmVzaCgpO1xuXHRcdH0pO1xuXG5cdFx0Y2hlY2tJZnJhbWVMb2FkZWQoKTtcblx0fTtcblxuXHRjb25zdCBtaW5pbWl6ZWRQb3NpdGlvbiA9IChoZWFkZXJIZWlnaHQgPSA0OCkgPT4ge1xuXHRcdHJldHVybiB7XG5cdFx0XHR0b3A6ICQod2luZG93KS5oZWlnaHQoKSAtIGhlYWRlckhlaWdodCAtIDE2LFxuXHRcdFx0cmlnaHQ6ICc3NnB4Jyxcblx0XHRcdGxlZnQ6ICQod2luZG93KS53aWR0aCgpIC0gMjgwIC0gNjAgLSAxNixcblx0XHRcdHdpZHRoOiAnMjc1cHgnLFxuXHRcdFx0aGVpZ2h0OiAnNDhweCcsXG5cdFx0fTtcblx0fTtcblxuXHRjb25zdCByZXNpemVXaGVuSm9pbiA9ICgpID0+IHtcblx0XHRjb25zdCAkd2lkZ2V0ID0gJCgnLlJlbW90ZUFwcG9pbnRtZW50Jyk7XG5cdFx0Y29uc3QgJHNtYWxsU2l6ZSA9ICR3aWRnZXQuZmluZCgnLlNtYWxsJyk7XG5cblx0XHQkc21hbGxTaXplLnNob3coKTtcblx0XHQkd2lkZ2V0LmFkZENsYXNzKCdSZW1vdGVBcHBvaW50bWVudC0tY2FsbFN0YXJ0ZWQnKTtcblxuXHRcdCR3aWRnZXQuY3NzKHtcblx0XHRcdGhlaWdodDogJzQ1dmgnLFxuXHRcdFx0d2lkdGg6ICc0NXZ3Jyxcblx0XHR9KTtcblxuXHRcdGNvbnN0IGNlbnRlclB4ID0gKCQod2luZG93LnRvcCkud2lkdGgoKSAtICR3aWRnZXQud2lkdGgoKSkgLyAyO1xuXG5cdFx0JHdpZGdldC5jc3Moe1xuXHRcdFx0aW5zZXQ6IGAyMzBweCBhdXRvIGF1dG8gJHtjZW50ZXJQeH1weGAsXG5cdFx0fSk7XG5cblx0XHRsZXQgdGltZW91dDtcblxuXHRcdGZ1bmN0aW9uIHdhcm5pbmcoZSkge1xuXHRcdFx0dGltZW91dCA9IHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG5cdFx0XHRcdC8vIEhhY2sgdG8ga2VlcCB0aGUgY3VycmVudCB0YWIgc2VsZWN0ZWQgaWYgdXNlciBkb2Vzbid0IGdvIHRvIGFub3RoZXIgcGFnZVxuXHRcdFx0XHRjb25zdCBpZnJhbWVDb250ZW50cyA9IHdpbmRvdy50b3AuJCgnLk1haW5Db250ZW50ID4gaWZyYW1lJykuY29udGVudHMoKTtcblx0XHRcdFx0Y29uc3QgdGFiSXRlbXMgPSBpZnJhbWVDb250ZW50cy5maW5kKCcuVGFiV3JhcHBlcicpO1xuXG5cdFx0XHRcdHRhYkl0ZW1zLnJlbW92ZUNsYXNzKCdBY3RpdmUnKTtcblx0XHRcdFx0dGFiSXRlbXMuZmlyc3QoKS5hZGRDbGFzcygnQWN0aXZlJyk7XG5cdFx0XHR9LCAxMDAwKTtcblxuXHRcdFx0cmV0dXJuIChlLnJldHVyblZhbHVlID0gJ1lvdSBhcmUgbGVhdmluZyB0aGUgcGFnZScpO1xuXHRcdH1cblxuXHRcdGZ1bmN0aW9uIG5vVGltZW91dCgpIHtcblx0XHRcdGNsZWFyVGltZW91dCh0aW1lb3V0KTtcblx0XHR9XG5cblx0XHR3aW5kb3cudG9wLm9uYmVmb3JldW5sb2FkID0gd2FybmluZztcblx0XHR3aW5kb3cudG9wLnVubG9hZCA9IG5vVGltZW91dDtcblxuXHRcdC8qd2luZG93LnRvcC5hZGRFdmVudExpc3RlbmVyKCdiZWZvcmV1bmxvYWQnLCBmdW5jdGlvbihlKSB7XG5cdFx0XHRlLnByZXZlbnREZWZhdWx0KCk7XG5cdFx0XHRlLnJldHVyblZhbHVlID0gJzEyMyc7XG5cdFx0fSk7Ki9cblx0fTtcblxuXHRjb25zdCBzZXRJbml0aWFsU3RhdGUgPSAoKSA9PiB7XG5cdFx0Y29uc3QgJHdpZGdldCA9ICQoJy5SZW1vdGVBcHBvaW50bWVudCcpO1xuXHRcdGNvbnN0ICRzbWFsbFNpemUgPSAkd2lkZ2V0LmZpbmQoJy5TbWFsbCcpO1xuXHRcdGNvbnN0ICRtZWRpdW1TaXplID0gJHdpZGdldC5maW5kKCcuTWVkaXVtJyk7XG5cblx0XHQkc21hbGxTaXplLmhpZGUoKTtcblx0XHQkbWVkaXVtU2l6ZS5oaWRlKCk7XG5cdFx0JHdpZGdldC5yZW1vdmVDbGFzcygnUmVtb3RlQXBwb2ludG1lbnQtLWNhbGxTdGFydGVkJyk7XG5cblx0XHR3aW5kb3cudG9wLnVubG9hZCA9IG51bGw7XG5cdFx0d2luZG93LnRvcC5vbmJlZm9yZXVubG9hZCA9IG51bGw7XG5cblx0XHQkKCcuUmVtb3RlQXBwb2ludG1lbnQnKS5jc3Moe1xuXHRcdFx0ZGlzcGxheTogJ2luaXRpYWwnLFxuXHRcdFx0cmlnaHQ6ICcyMiUnLFxuXHRcdFx0dG9wOiAnMzAlJyxcblx0XHRcdGhlaWdodDogJzI2MHB4Jyxcblx0XHRcdHdpZHRoOiAnNDUwcHgnLFxuXHRcdH0pO1xuXHR9O1xuXG5cdGNvbnN0IHNldE1vZGFsTWluaW1pemVkID0gKCkgPT4ge1xuXHRcdC8vIFRvIHVzZSBvbmx5IGluc2lkZSBTYXBwaGlyZSBpRnJhbWUgcGFnZXNcblx0XHRjb25zdCAkbW9kYWxSZW1vdGVBcHB0ID0gd2luZG93LnRvcC4kKCcuUmVtb3RlQXBwb2ludG1lbnQnKTtcblxuXHRcdGlmICgkbW9kYWxSZW1vdGVBcHB0Lmxlbmd0aCkge1xuXHRcdFx0Y29uc3QgJG1pbmltaXplTW9kYWwgPSAkbW9kYWxSZW1vdGVBcHB0LmZpbmQoJy5NaW5pbWl6ZScpO1xuXHRcdFx0JG1pbmltaXplTW9kYWwuY2xpY2soKTtcblx0XHR9XG5cdH07XG5cblx0Y29uc3QgY2hlY2tJZnJhbWVMb2FkZWQgPSAoKSA9PiB7XG5cdFx0Y29uc3QgaWZyYW1lID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnU2FwcGhpcmVGcmFtZScpWzBdO1xuXHRcdGNvbnN0IGlmcmFtZURvYyA9IGlmcmFtZS5jb250ZW50RG9jdW1lbnQgfHwgaWZyYW1lLmNvbnRlbnRXaW5kb3cuZG9jdW1lbnQ7XG5cblx0XHRpZiAoaWZyYW1lRG9jLnJlYWR5U3RhdGUgPT0gJ2NvbXBsZXRlJykge1xuXHRcdFx0aWZyYW1lLmNvbnRlbnRXaW5kb3cub25sb2FkID0gZnVuY3Rpb24oKSB7XG5cdFx0XHRcdHNldEluaXRpYWxTdGF0ZSgpO1xuXHRcdFx0fTtcblxuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdHdpbmRvdy5zZXRUaW1lb3V0KGNoZWNrSWZyYW1lTG9hZGVkLCAxMDApO1xuXHR9O1xuXG5cdGNvbnN0IHNldENhbGxTdGFydGVkID0gKCkgPT4ge307XG5cblx0Y29uc3QgZmFrZUFqYXhSZWZyZXNoID0gKCkgPT4ge1xuXHRcdGNvbnN0ICRpZnJhbWUgPSAkKCcuU2FwcGhpcmVGcmFtZScpO1xuXG5cdFx0JGlmcmFtZS5vbignbG9hZCcsIGZ1bmN0aW9uKCkge1xuXHRcdFx0JGlmcmFtZVswXS5jb250ZW50V2luZG93Lm9uYmVmb3JldW5sb2FkID0gZnVuY3Rpb24oZSkge1xuXHRcdFx0XHQkKCcuRmVlZGJhY2tfQWpheFdhaXQnKS5zaG93KCk7XG5cdFx0XHR9O1xuXG5cdFx0XHQkKCcuRmVlZGJhY2tfQWpheFdhaXQnKS5oaWRlKCk7XG5cdFx0fSk7XG5cdH07XG5cblx0Y29uc3Qgb3Blbk1vZGFsTGVhdmVDb250ZXh0ID0gdXJsID0+IHtcblx0XHRTYXBwaGlyZVdpZGdldHMuUmVtb3RlQXBwb2ludG1lbnQubGVhdmVVUkwgPSB1cmw7XG5cblx0XHR3aW5kb3cudG9wLnVubG9hZCA9IG51bGw7XG5cdFx0d2luZG93LnRvcC5vbmJlZm9yZXVubG9hZCA9IG51bGw7XG5cblx0XHQkKCcuT3Blbk1vZGFsTGVhdmVDb250ZXh0JykuY2xpY2soKTtcblx0fTtcblxuXHRTYXBwaGlyZVdpZGdldHMuUmVtb3RlQXBwb2ludG1lbnQgPSB7XG5cdFx0Y3JlYXRlLFxuXHRcdHJlc2l6ZVdoZW5Kb2luLFxuXHRcdHNldENhbGxTdGFydGVkLFxuXHRcdHNldEluaXRpYWxTdGF0ZSxcblx0XHRmYWtlQWpheFJlZnJlc2gsXG5cdFx0c2V0TW9kYWxNaW5pbWl6ZWQsXG5cdFx0b3Blbk1vZGFsTGVhdmVDb250ZXh0LFxuXHR9O1xufSkoalF1ZXJ5LCB3aW5kb3csIFNhcHBoaXJlV2lkZ2V0cyk7XG4iLCIvL1NhcHBoaXJlV2lkZ2V0cyA9IHdpbmRvdy5TYXBwaGlyZVdpZGdldHMgPSB3aW5kb3cuU2FwcGhpcmVXaWRnZXRzIHx8IHt9O1xuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIl0sInNvdXJjZVJvb3QiOiIifQ==